// @ts-nocheck
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' })

export async function POST(req) {
  try {
    const { userId, email } = await req.json()
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    // Get stripe_customer_id from users table
    const { data: userData } = await supabase
      .from('users')
      .select('stripe_customer_id')
      .eq('id', userId)
      .single()

    let customerId = userData?.stripe_customer_id

    // Fallback: search Stripe by email passed from client
    if (!customerId && email) {
      console.log('Portal: no customer ID stored, searching Stripe by email:', email)
      const customers = await stripe.customers.list({ email: email, limit: 1 })
      if (customers.data.length > 0) {
        customerId = customers.data[0].id
        console.log('Portal: found customer in Stripe:', customerId)
        // Save for next time
        await supabase.from('users').update({ stripe_customer_id: customerId }).eq('id', userId)
      }
    }

    if (!customerId) {
      console.error('Portal: no customer found for userId:', userId, 'email:', email)
      return NextResponse.json({ error: 'No billing account found. Please contact support@traffikora.com' }, { status: 404 })
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: 'https://www.traffikora.com/dashboard/billing',
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Portal error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
