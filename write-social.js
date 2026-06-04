const fs = require('fs')
const path = require('path')

// ─── 1. SIDEBAR LAYOUT — add plan badge + upgrade CTA ────────
const layoutContent = `// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { PLAN_META } from '@/lib/plans'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function DashboardLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [email, setEmail] = useState('')
  const [userPlan, setUserPlan] = useState('free')
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) { router.push('/login') }
      else {
        setEmail(session.user.email ?? '')
        const { data } = await supabase.from('users').select('status').eq('id', session.user.id).single()
        if (data?.status) setUserPlan(data.status)
      }
    })
  }, [router])

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const isActive = (href) => pathname === href

  const linkStyle = (href) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '9px 20px',
    color: isActive(href) ? '#E8610A' : '#aaa',
    background: isActive(href) ? 'rgba(232,97,10,0.08)' : 'transparent',
    textDecoration: 'none',
    fontSize: '13px',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: isActive(href) ? 700 : 400,
    borderLeft: isActive(href) ? '3px solid #E8610A' : '3px solid transparent',
    transition: 'all 0.15s',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  })

  const nav = [
    { href: '/dashboard', icon: '🏠', label: 'Dashboard' },
    { isSection: true, label: 'CONTENT' },
    { href: '/dashboard/content/blog', icon: '✏️', label: 'Blog Generator' },
    { href: '/dashboard/social', icon: '📱', label: 'Social Media' },
    { href: '/dashboard/content/queue', icon: '📋', label: 'Content Queue' },
    { isSection: true, label: 'PLATFORM' },
    { href: '/dashboard/scrape', icon: '🧠', label: 'Business Brain' },
    { href: '/dashboard/llm-engine', icon: '⚡', label: 'LLM Engine' },
    { href: '/dashboard/settings', icon: '⚙️', label: 'Business Settings' },
    { isSection: true, label: 'CONNECTIONS' },
    { href: '/dashboard/connect/google', icon: '🔵', label: 'Google' },
    { href: '/dashboard/connect/facebook', icon: '📘', label: 'Facebook' },
    { href: '/dashboard/connect/instagram', icon: '📸', label: 'Instagram' },
    { href: '/dashboard/connect/tiktok', icon: '🎵', label: 'TikTok' },
    { href: '/dashboard/connect/twitter', icon: '🐦', label: 'X / Twitter' },
    { href: '/dashboard/connect/linkedin', icon: '💼', label: 'LinkedIn' },
    { href: '/dashboard/connect/wordpress', icon: '🌐', label: 'WordPress' },
    { isSection: true, label: 'ACCOUNT' },
    { href: '/dashboard/billing', icon: '💳', label: 'Billing' },
    { href: '/dashboard/referral', icon: '🎁', label: 'Refer & Earn' },
    { href: '/dashboard/agents', icon: '🤖', label: 'AI Agents' },
    { href: '/dashboard/support', icon: '💬', label: 'Support' },
  ]

  const planMeta = PLAN_META[userPlan] || PLAN_META.free

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f7f7f7' }}>

      {/* SIDEBAR */}
      <div style={{ width: collapsed ? '56px' : '220px', minHeight: '100vh', background: '#111', display: 'flex', flexDirection: 'column', borderRight: '1px solid #222', transition: 'width 0.2s', flexShrink: 0, position: 'sticky', top: 0, height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>

        {/* Logo */}
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid #1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          {!collapsed && <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff' }}>Traffik<span style={{ color: '#E8610A' }}>ora</span></span>}
          <button onClick={() => setCollapsed(!collapsed)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '16px', padding: '2px 4px', marginLeft: collapsed ? 'auto' : 0, marginRight: collapsed ? 'auto' : 0 }}>
            {collapsed ? '\u2192' : '\u2190'}
          </button>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, paddingTop: '8px' }}>
          {nav.map((item, i) => {
            if (item.isSection) {
              if (collapsed) return null
              return <div key={i} style={{ padding: '14px 20px 4px', fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase' }}>{item.label}</div>
            }
            return (
              <Link key={item.href} href={item.href} style={linkStyle(item.href)} title={collapsed ? item.label : undefined}>
                <span style={{ fontSize: '15px', flexShrink: 0 }}>{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* User footer */}
        <div style={{ padding: '16px', borderTop: '1px solid #1e1e1e', flexShrink: 0 }}>
          {!collapsed && (
            <>
              {/* Email */}
              <div style={{ fontSize: '11px', color: '#555', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email}</div>

              {/* Plan badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: planMeta.color + '22', border: '1px solid ' + planMeta.color + '55', borderRadius: '20px', padding: '3px 10px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: planMeta.color }} />
                  <span style={{ fontSize: '11px', fontWeight: 700, color: planMeta.color, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em' }}>{planMeta.label.toUpperCase()}</span>
                </div>
                {planMeta.upgradeHref && (
                  <Link href={planMeta.upgradeHref} style={{ fontSize: '10px', color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em' }}>
                    UPGRADE \u2192
                  </Link>
                )}
              </div>

              {/* Upgrade CTA for free users */}
              {userPlan === 'free' && (
                <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '8px', boxShadow: '0 2px 10px rgba(232,97,10,0.3)' }}>
                  \u26a1 Upgrade to Starter \u2014 $47/mo
                </Link>
              )}
              {userPlan === 'starter' && (
                <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '8px', boxShadow: '0 2px 10px rgba(232,97,10,0.3)' }}>
                  \u26a1 Upgrade to Pro \u2014 $97/mo
                </Link>
              )}
            </>
          )}
          <button onClick={handleSignOut} style={{ background: '#1a1a1a', color: '#666', border: '1px solid #2a2a2a', padding: collapsed ? '8px' : '8px 16px', cursor: 'pointer', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, width: '100%', borderRadius: '4px' }}>
            {collapsed ? '\u21a9' : 'Sign Out'}
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, overflowY: 'auto', minHeight: '100vh' }}>
        {children}
      </main>

    </div>
  )
}
`

fs.writeFileSync(path.join('src', 'app', 'dashboard', 'layout.tsx'), layoutContent)
console.log('SUCCESS: layout.tsx — plan badge + upgrade CTA added to sidebar')

// ─── 2. BILLING PAGE — fix Manage Billing button ─────────────
const billingPath = path.join('src', 'app', 'dashboard', 'billing', 'page.tsx')
let billing = fs.readFileSync(billingPath, 'utf8')
billing = billing.replace(
  `            {userPlan !== 'free' && (
              <a href="https://billing.stripe.com/p/login/test_00g000000000000" target="_blank" style={{ display: 'inline-block', padding: '12px 24px', borderRadius: '10px', border: '1px solid #2a2a2a', color: '#fff', fontSize: '13px', fontWeight: '600', textDecoration: 'none', backgroundColor: '#1a1a1a', cursor: 'pointer' }}>
                Manage Billing \u2192
              </a>
            )}`,
  `            {userPlan !== 'free' && (
              <button onClick={async () => {
                const res = await fetch('/api/stripe/portal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: user.id }) })
                const data = await res.json()
                if (data.url) window.location.href = data.url
              }} style={{ display: 'inline-block', padding: '12px 24px', borderRadius: '10px', border: '1px solid #2a2a2a', color: '#fff', fontSize: '13px', fontWeight: '600', backgroundColor: '#1a1a1a', cursor: 'pointer', fontFamily: 'system-ui, sans-serif' }}>
                Manage Billing \u2192
              </button>
            )}`
)
fs.writeFileSync(billingPath, billing)
console.log('SUCCESS: billing/page.tsx — Manage Billing wired to portal API')

// ─── 3. STRIPE PORTAL API ROUTE ──────────────────────────────
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

    // Get stripe_customer_id from users table
    const { data: userData } = await supabase
      .from('users')
      .select('stripe_customer_id')
      .eq('id', userId)
      .single()

    if (!userData?.stripe_customer_id) {
      return NextResponse.json({ error: 'No billing account found' }, { status: 404 })
    }

    const session = await stripe.billingPortal.sessions.create({
      customer: userData.stripe_customer_id,
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
console.log('SUCCESS: api/stripe/portal/route.ts created')

console.log('\nAll done. Run: npx next build')