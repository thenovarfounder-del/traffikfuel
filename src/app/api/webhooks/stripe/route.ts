// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    return NextResponse.json({ error: 'Webhook signature verification failed' }, { status: 400 })
  }

  const data = event.data.object

  if (event.type === 'checkout.session.completed') {
    const customerId = data.customer
    const customerEmail = data.customer_details?.email
    await supabase.from('users').update({ status: 'active', stripe_customer_id: customerId }).eq('email', customerEmail)
  }

  if (event.type === 'customer.subscription.trial_will_end') {
    const customerId = data.customer
    const { data: user } = await supabase.from('users').select('email').eq('stripe_customer_id', customerId).single()
    if (user?.email) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'support@traffikora.com',
          to: user.email,
          subject: 'Your Traffikora trial ends tomorrow',
          html: '<p>Your 7-day free trial ends tomorrow. Add a payment method to keep access: <a href="https://www.traffikora.com/pricing">View Plans</a></p>'
        })
      })
    }
  }

  if (event.type === 'customer.subscription.updated') {
    const customerId = data.customer
    const status = data.status
    const supaStatus = status === 'active' ? 'active' : status === 'past_due' ? 'past_due' : 'inactive'
    await supabase.from('users').update({ status: supaStatus }).eq('stripe_customer_id', customerId)
    if (status === 'past_due') {
      const { data: user } = await supabase.from('users').select('email').eq('stripe_customer_id', customerId).single()
      if (user?.email) {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({
            from: 'support@traffikora.com',
            to: user.email,
            subject: 'Payment failed — action required',
            html: '<p>Your payment failed. Please update your billing info to keep access to Traffikora.</p>'
          })
        })
      }
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const customerId = data.customer
    await supabase.from('users').update({ status: 'cancelled' }).eq('stripe_customer_id', customerId)
    const { data: user } = await supabase.from('users').select('email').eq('stripe_customer_id', customerId).single()
    if (user?.email) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: 'support@traffikora.com',
          to: user.email,
          subject: 'Your Traffikora subscription has been cancelled',
          html: '<p>Your subscription has been cancelled. Your data will be retained for 30 days. <a href="https://www.traffikora.com/pricing">Reactivate anytime</a>.</p>'
        })
      })
    }
  }

  if (event.type === 'invoice.payment_succeeded') {
    const customerId = data.customer
    await supabase.from('users').update({ status: 'active' }).eq('stripe_customer_id', customerId)
  }

  if (event.type === 'invoice.payment_failed') {
    const customerId = data.customer
    await supabase.from('users').update({ status: 'past_due' }).eq('stripe_customer_id', customerId)
  }

  return NextResponse.json({ received: true })
}
