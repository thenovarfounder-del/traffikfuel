const fs = require('fs')
const path = require('path')

// ─── 1. Fix billing page — better Manage Billing button ──────
const billingPath = path.join('src', 'app', 'dashboard', 'billing', 'page.tsx')
let billing = fs.readFileSync(billingPath, 'utf8')

// Add portalLoading and portalError state
billing = billing.replace(
  `  const [upgrading, setUpgrading] = useState(false)`,
  `  const [upgrading, setUpgrading] = useState(false)
  const [portalLoading, setPortalLoading] = useState(false)
  const [portalError, setPortalError] = useState('')`
)

// Replace the Manage Billing button with proper error handling
billing = billing.replace(
  `            {userPlan !== 'free' && (
              <button onClick={async () => {
                const res = await fetch('/api/stripe/portal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: user.id }) })
                const data = await res.json()
                if (data.url) window.location.href = data.url
              }} style={{ display: 'inline-block', padding: '12px 24px', borderRadius: '10px', border: '1px solid #2a2a2a', color: '#fff', fontSize: '13px', fontWeight: '600', backgroundColor: '#1a1a1a', cursor: 'pointer', fontFamily: 'system-ui, sans-serif' }}>
                Manage Billing \u2192
              </button>
            )}`,
  `            {userPlan !== 'free' && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                <button onClick={async () => {
                  setPortalLoading(true)
                  setPortalError('')
                  try {
                    const res = await fetch('/api/stripe/portal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: user.id, email: user.email }) })
                    const data = await res.json()
                    if (data.url) { window.location.href = data.url }
                    else { setPortalError(data.error || 'Could not open billing portal') }
                  } catch (err) { setPortalError('Connection error. Please try again.') }
                  setPortalLoading(false)
                }} disabled={portalLoading} style={{ display: 'inline-block', padding: '12px 24px', borderRadius: '10px', border: '1px solid #2a2a2a', color: '#fff', fontSize: '13px', fontWeight: '600', backgroundColor: '#1a1a1a', cursor: portalLoading ? 'not-allowed' : 'pointer', fontFamily: 'system-ui, sans-serif' }}>
                  {portalLoading ? 'Opening...' : 'Manage Billing \u2192'}
                </button>
                {portalError && <div style={{ fontSize: '12px', color: '#f87171', fontFamily: 'system-ui, sans-serif' }}>{portalError}</div>}
              </div>
            )}`
)

fs.writeFileSync(billingPath, billing)
console.log('SUCCESS: billing/page.tsx — Manage Billing button fixed with error display')

// ─── 2. Fix portal route — pass email from client directly ────
const portalContent = `// @ts-nocheck
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
`

const portalDir = path.join('src', 'app', 'api', 'stripe', 'portal')
fs.mkdirSync(portalDir, { recursive: true })
fs.writeFileSync(path.join(portalDir, 'route.ts'), portalContent)
console.log('SUCCESS: portal route fixed — uses email from client as fallback')

// ─── 3. Fix CYRA bubble — move to bottom right away from sidebar
const bubblePath = path.join('src', 'components', 'ChatBubble.tsx')
let bubble = fs.readFileSync(bubblePath, 'utf8')
bubble = bubble.replace(
  `position:'fixed', bottom:'32px', right:'28px', width:'64px', height:'64px'`,
  `position:'fixed', bottom:'24px', right:'24px', width:'56px', height:'56px'`
)
bubble = bubble.replace(
  `position:'fixed', bottom:'108px', right:'28px', width:'380px', height:'520px'`,
  `position:'fixed', bottom:'92px', right:'24px', width:'360px', height:'500px'`
)
fs.writeFileSync(bubblePath, bubble)
console.log('SUCCESS: ChatBubble.tsx — size reduced, stays bottom right away from sidebar')

console.log('\nAll done. Run: npx next build')