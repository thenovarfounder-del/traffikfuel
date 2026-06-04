// @ts-nocheck
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createClient } from '@supabase/supabase-js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' })

export async function POST(req) {
  try {
    const { userId } = await req.json()
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )

    // Get user data
    const { data: userData } = await supabase
      .from('users')
      .select('stripe_customer_id, email')
      .eq('id', userId)
      .single()

    let customerId = userData?.stripe_customer_id

    // Fallback: search Stripe by email if no customer ID stored
    if (!customerId && userData?.email) {
      const customers = await stripe.customers.list({ email: userData.email, limit: 1 })
      if (customers.data.length > 0) {
        customerId = customers.data[0].id
        // Save it for next time
        await supabase.from('users').update({ stripe_customer_id: customerId }).eq('id', userId)
      }
    }

    if (!customerId) {
      return NextResponse.json({ error: 'No billing account found. Please contact support.' }, { status: 404 })
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
