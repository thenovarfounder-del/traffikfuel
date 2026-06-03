const fs = require('fs')
const path = require('path')

const content = `// @ts-nocheck
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'
import { getPlanFromPriceId } from '@/lib/plans'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' })

// Always use service role for webhook — bypasses RLS
function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
}

// ─── Core: update users.status from a subscription object ────
async function syncUserPlan(subscription) {
  const supabase = getSupabase()
  const userId = subscription.metadata?.userId
  if (!userId) {
    console.error('WEBHOOK: No userId in subscription metadata — cannot sync plan', subscription.id)
    return
  }
  const priceId = subscription.items?.data?.[0]?.price?.id
  const plan = getPlanFromPriceId(priceId)
  const isActive = ['active', 'trialing'].includes(subscription.status)
  const finalPlan = isActive ? plan : 'free'

  console.log('WEBHOOK: Syncing userId=' + userId + ' priceId=' + priceId + ' plan=' + finalPlan + ' subStatus=' + subscription.status)

  // 1. Upsert into subscriptions table
  const { error: subError } = await supabase.from('subscriptions').upsert({
    user_id: userId,
    stripe_subscription_id: subscription.id,
    stripe_customer_id: subscription.customer,
    stripe_price_id: priceId,
    plan: finalPlan,
    status: subscription.status,
    current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
    current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
    updated_at: new Date().toISOString(),
  }, { onConflict: 'stripe_subscription_id' })

  if (subError) console.error('WEBHOOK: subscriptions upsert error', subError.message)

  // 2. Update users.status — this is what the app reads
  const { error: userError } = await supabase
    .from('users')
    .update({ status: finalPlan, updated_at: new Date().toISOString() })
    .eq('id', userId)

  if (userError) console.error('WEBHOOK: users.status update error', userError.message)
  else console.log('WEBHOOK: users.status updated to ' + finalPlan + ' for userId=' + userId)
}

// ─── Handle checkout.session.completed ───────────────────────
async function handleCheckoutComplete(session) {
  const supabase = getSupabase()
  const userId = session.metadata?.userId || session.client_reference_id
  if (!userId) { console.error('WEBHOOK: No userId in checkout session', session.id); return }

  // Retrieve the full subscription object
  if (session.subscription) {
    const subscription = await stripe.subscriptions.retrieve(session.subscription)
    // Inject userId into metadata if missing (first-time purchase)
    if (!subscription.metadata?.userId) {
      await stripe.subscriptions.update(session.subscription, {
        metadata: { userId }
      })
      subscription.metadata = { userId }
    }
    await syncUserPlan(subscription)
  }

  // Also upsert customer record
  if (session.customer) {
    await supabase.from('users').update({
      stripe_customer_id: session.customer
    }).eq('id', userId)
  }
}

// ─── POST handler ─────────────────────────────────────────────
export async function POST(req) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('WEBHOOK: Signature verification failed', err.message)
    return NextResponse.json({ error: 'Webhook signature failed' }, { status: 400 })
  }

  console.log('WEBHOOK: Received event', event.type)

  try {
    switch (event.type) {

      case 'checkout.session.completed':
        await handleCheckoutComplete(event.data.object)
        break

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
        await syncUserPlan(event.data.object)
        break

      case 'customer.subscription.deleted':
        // Subscription cancelled — drop user back to free
        await syncUserPlan({ ...event.data.object, status: 'canceled' })
        break

      case 'invoice.payment_succeeded':
        // Renewal — re-sync to keep status current
        if (event.data.object.subscription) {
          const sub = await stripe.subscriptions.retrieve(event.data.object.subscription)
          await syncUserPlan(sub)
        }
        break

      case 'invoice.payment_failed':
        console.log('WEBHOOK: Payment failed for invoice', event.data.object.id)
        // Could add email alert here in future
        break

      default:
        console.log('WEBHOOK: Unhandled event type', event.type)
    }
  } catch (err) {
    console.error('WEBHOOK: Handler error for', event.type, err.message)
    // Still return 200 so Stripe does not retry endlessly
    return NextResponse.json({ received: true, warning: err.message }, { status: 200 })
  }

  return NextResponse.json({ received: true }, { status: 200 })
}
`

const dir = path.join('src', 'app', 'api', 'webhooks', 'stripe')
fs.mkdirSync(dir, { recursive: true })
fs.writeFileSync(path.join(dir, 'route.ts'), content)
console.log('SUCCESS: src/app/api/webhooks/stripe/route.ts updated')