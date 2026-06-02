// @ts-nocheck
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const PRICE_IDS = {
  starter: 'price_1TdfQ0HuRIVTwN2fO76EeNeo',
  pro: 'price_1TdfTdHuRIVTwN2fnPQuWIqg',
  agency: 'price_1TdfUyHuRIVTwN2foS4t2TRa',
  enterprise: 'price_1TdfWDHuRIVTwN2fa4y4M3FW'
}

export async function POST(request) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  try {
    const { plan, email, userId } = await request.json()
    const priceId = PRICE_IDS[plan]
    if (!priceId) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
    }
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { userId, plan },
      success_url: `https://www.traffikora.com/onboarding?plan=${plan}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://www.traffikora.com/pricing`
    })
    return NextResponse.json({ url: session.url })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
