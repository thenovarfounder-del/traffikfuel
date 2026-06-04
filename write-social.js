const fs = require('fs')
const path = require('path')

// ─── 1. Move CYRA bubble up so it doesn't block sidebar ──────
const bubblePath = path.join('src', 'components', 'ChatBubble.tsx')
let bubble = fs.readFileSync(bubblePath, 'utf8')

bubble = bubble.replace(
  `position:'fixed', bottom:'24px', right:'24px', width:'64px', height:'64px'`,
  `position:'fixed', bottom:'32px', right:'28px', width:'64px', height:'64px'`
)
bubble = bubble.replace(
  `position:'fixed', bottom:'90px', right:'24px', width:'380px', height:'520px'`,
  `position:'fixed', bottom:'108px', right:'28px', width:'380px', height:'520px'`
)

fs.writeFileSync(bubblePath, bubble)
console.log('SUCCESS: ChatBubble.tsx — position adjusted')

// ─── 2. Add stripe_customer_id column if missing ─────────────
// (Already added via SQL — just need portal route to handle fallback)

// ─── 3. Update portal route to look up by customer email too ─
const portalContent = `// @ts-nocheck
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
`

const portalDir = path.join('src', 'app', 'api', 'stripe', 'portal')
fs.mkdirSync(portalDir, { recursive: true })
fs.writeFileSync(path.join(portalDir, 'route.ts'), portalContent)
console.log('SUCCESS: portal route updated with email fallback')

console.log('\nAll done. Run: npx next build')