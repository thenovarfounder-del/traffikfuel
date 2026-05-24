const fs = require('fs')
const path = require('path')

const content = `// @ts-nocheck
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

export async function POST(req) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
  const { priceId, email } = await req.json()

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'subscription',
    customer_email: email,
    line_items: [{ price: priceId, quantity: 1 }],
    subscription_data: { trial_period_days: 7 },
    success_url: 'https://www.traffikora.com/dashboard?checkout=success',
    cancel_url: 'https://www.traffikora.com/pricing',
  })

  return NextResponse.json({ url: session.url })
}
`

fs.writeFileSync(path.join('src', 'app', 'api', 'stripe', 'checkout', 'route.ts'), content)
console.log('Written: route.ts')