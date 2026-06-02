// @ts-nocheck
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const body = await request.text()
  const sig = request.headers.get('stripe-signature')

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    return NextResponse.json({ error: 'Webhook signature failed' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const userId = session.metadata?.userId
    const plan = session.metadata?.plan
    if (userId && plan) {
      await supabase.from('users').update({
        plan: plan,
        plan_status: 'active',
        stripe_customer_id: session.customer,
        stripe_subscription_id: session.subscription
      }).eq('id', userId)
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object
    const customerId = subscription.customer
    await supabase.from('users').update({
      plan: 'free',
      plan_status: 'cancelled',
      stripe_subscription_id: null
    }).eq('stripe_customer_id', customerId)
  }

  if (event.type === 'invoice.payment_failed') {
    const invoice = event.data.object
    const customerId = invoice.customer
    await supabase.from('users').update({
      plan_status: 'payment_failed'
    }).eq('stripe_customer_id', customerId)
  }

  return NextResponse.json({ received: true })
}
