const fs = require('fs');

// ─── DASHBOARD LAYOUT — mobile responsive ──────────────────────────
const layout = `// @ts-nocheck
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
  const [isMobile, setIsMobile] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 900
      setIsMobile(mobile)
      if (mobile) setCollapsed(true)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

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
    { href: '/dashboard', icon: '\ud83c\udfe0', label: 'Dashboard' },
    { isSection: true, label: 'CONTENT' },
    { href: '/dashboard/content/blog', icon: '\u270f\ufe0f', label: 'Blog Generator' },
    { href: '/dashboard/social', icon: '\ud83d\udcf1', label: 'Social Media' },
    { href: '/dashboard/content/queue', icon: '\ud83d\udccb', label: 'Content Queue' },
    { isSection: true, label: 'PLATFORM' },
    { href: '/dashboard/scrape', icon: '\ud83e\udde0', label: 'Business Brain' },
    { href: '/dashboard/llm-engine', icon: '\u26a1', label: 'LLM Engine' },
    { href: '/dashboard/settings', icon: '\u2699\ufe0f', label: 'Business Settings' },
    { isSection: true, label: 'CONNECTIONS' },
    { href: '/dashboard/connect/google', icon: '\ud83d\udd35', label: 'Google' },
    { href: '/dashboard/connect/facebook', icon: '\ud83d\udcd8', label: 'Facebook' },
    { href: '/dashboard/connect/instagram', icon: '\ud83d\udcf8', label: 'Instagram' },
    { href: '/dashboard/connect/tiktok', icon: '\ud83c\udfb5', label: 'TikTok' },
    { href: '/dashboard/connect/twitter', icon: '\ud83d\udc26', label: 'X / Twitter' },
    { href: '/dashboard/connect/linkedin', icon: '\ud83d\udcbc', label: 'LinkedIn' },
    { href: '/dashboard/connect/wordpress', icon: '\ud83c\udf10', label: 'WordPress' },
    { isSection: true, label: 'ACCOUNT' },
    { href: '/dashboard/billing', icon: '\ud83d\udcb3', label: 'Billing' },
    { href: '/dashboard/referral', icon: '\ud83c\udf81', label: 'Refer & Earn' },
    { href: '/dashboard/agents', icon: '\ud83e\udd16', label: 'AI Agents' },
    { href: '/dashboard/support', icon: '\ud83d\udcac', label: 'Support' },
  ]

  const planMeta = PLAN_META[userPlan] || PLAN_META.free

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f7f7f7' }}>

      {/* MOBILE TOP BAR */}
      {isMobile && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '56px', background: '#111', borderBottom: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', zIndex: 100 }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff' }}>Traffik<span style={{ color: '#E8610A' }}>ora</span></span>
          <button onClick={() => setMobileNavOpen(!mobileNavOpen)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '22px', padding: '4px 8px' }}>
            {mobileNavOpen ? '\u00d7' : '\u2630'}
          </button>
        </div>
      )}

      {/* MOBILE NAV OVERLAY */}
      {isMobile && mobileNavOpen && (
        <div style={{ position: 'fixed', top: '56px', left: 0, right: 0, bottom: 0, background: '#111', zIndex: 99, overflowY: 'auto' }}>
          <nav style={{ paddingTop: '8px' }}>
            {nav.map((item, i) => {
              if (item.isSection) return <div key={i} style={{ padding: '14px 20px 4px', fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase' }}>{item.label}</div>
              return (
                <Link key={item.href} href={item.href} style={linkStyle(item.href)} onClick={() => setMobileNavOpen(false)}>
                  <span style={{ fontSize: '15px', flexShrink: 0 }}>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
          <div style={{ padding: '16px', borderTop: '1px solid #1e1e1e' }}>
            <div style={{ fontSize: '11px', color: '#555', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif' }}>{email}</div>
            {userPlan === 'free' && (
              <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '10px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '10px' }}>
                \u26a1 Upgrade to Starter \u2014 $47/mo
              </Link>
            )}
            {userPlan === 'starter' && (
              <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '10px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '10px' }}>
                \u26a1 Upgrade to Pro \u2014 $97/mo
              </Link>
            )}
            <button onClick={handleSignOut} style={{ background: '#1a1a1a', color: '#666', border: '1px solid #2a2a2a', padding: '10px 16px', cursor: 'pointer', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, width: '100%', borderRadius: '4px' }}>
              Sign Out
            </button>
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      {!isMobile && (
        <div style={{ width: collapsed ? '56px' : '220px', minHeight: '100vh', background: '#111', display: 'flex', flexDirection: 'column', borderRight: '1px solid #222', transition: 'width 0.2s', flexShrink: 0, position: 'sticky', top: 0, height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
          <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid #1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            {!collapsed && <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff' }}>Traffik<span style={{ color: '#E8610A' }}>ora</span></span>}
            <button onClick={() => setCollapsed(!collapsed)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '16px', padding: '2px 4px', marginLeft: collapsed ? 'auto' : 0, marginRight: collapsed ? 'auto' : 0 }}>
              {collapsed ? '\u2192' : '\u2190'}
            </button>
          </div>
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
          <div style={{ padding: '16px', borderTop: '1px solid #1e1e1e', flexShrink: 0 }}>
            {!collapsed && (
              <>
                <div style={{ fontSize: '11px', color: '#555', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email}</div>
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
                {userPlan === 'free' && (
                  <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '8px', boxShadow: '0 2px 10px rgba(232,97,10,0.3)' }}>
                    \u26a1 Upgrade to Starter \u2014 $47/mo
                  </Link>
                )}
                {userPlan === 'starter' && (
                  <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '8px', boxShadow: '0 2px 10px rgba(232,97,10,0.3)' }}>
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
      )}

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, overflowY: 'auto', minHeight: '100vh', marginTop: isMobile ? '56px' : 0 }}>
        {children}
      </main>

    </div>
  )
}
`;

// ─── PRICING — fix free button session loading ─────────────────────
const pricing = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const plans = [
  { name: 'Free', price: '0', sub: '/forever', desc: 'Try Traffikora with no credit card. Get a real taste of AI content before you commit.', features: ['3 AI blog posts per month', 'Preview content before publish', 'Access to content dashboard', 'No credit card required', 'Upgrade anytime'], btn: 'Start Free \u2014 No Credit Card', planKey: 'free', featured: false },
  { name: 'Starter', price: '47', sub: '/mo', desc: 'Automate your marketing and show up online every single day.', features: ['Unlimited AI blog posts', 'AI social content for Facebook, Instagram, LinkedIn & X', 'One-Push Publish to WordPress', 'Content Calendar & Queue', 'Manual publishing controls', '1 website connected'], btn: 'Get Started', planKey: 'starter', featured: false },
  { name: 'Pro', price: '97', sub: '/mo', desc: 'Fully hands-off. AI agents run every morning and handle everything.', features: ['Everything in Starter', 'AI Agents run daily automatically', 'Auto Mode \u2014 fully hands-off', 'TikTok + YouTube Shorts publishing', 'Google SEO + AI Engine Optimization', 'Advanced analytics'], btn: 'Start Pro', planKey: 'pro', featured: true },
  { name: 'Agency', price: '297', sub: '/mo', desc: 'Manage up to 10 clients. White-label it and bill whatever you want.', features: ['Everything in Pro', 'Up to 10 client accounts', 'White-label dashboard', 'Client management portal', 'Bulk content generation', 'Agency analytics overview'], btn: 'Start Agency Plan', planKey: 'agency', featured: false },
  { name: 'Enterprise', price: '997', sub: '/mo', desc: 'Unlimited clients, custom AI training, dedicated account manager.', features: ['Everything in Agency', 'Unlimited client accounts', 'Custom AI voice per client', 'Google Search Console integration', 'SLA uptime guarantee', 'Dedicated account manager'], btn: 'Start Enterprise Plan', planKey: 'enterprise', featured: false },
]

export default function PricingPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [user, setUser] = useState(null)
  const [sessionLoaded, setSessionLoaded] = useState(false)
  const [loadingPlan, setLoadingPlan] = useState(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) setUser(session.user)
      setSessionLoaded(true)
    })
  }, [])

  async function handlePlanClick(plan) {
    if (!sessionLoaded) return
    if (plan.planKey === 'free') {
      window.location.href = user ? '/dashboard' : '/signup?plan=free'
      return
    }
    if (!user) {
      window.location.href = '/signup?plan=' + plan.planKey
      return
    }
    setLoadingPlan(plan.planKey)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: plan.planKey, email: user.email, userId: user.id })
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch {
      alert('Something went wrong. Please try again.')
    }
    setLoadingPlan(null)
  }

  const orangeBtn = { background: 'linear-gradient(135deg,#E8610A,#ff8c42)', color: '#fff', boxShadow: '0 4px 20px rgba(232,97,10,0.4)', border: 'none' }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', fontFamily: 'DM Sans, sans-serif' }}>
      <Nav />

      <section style={{ padding: isMobile ? '48px 24px 32px' : '80px 40px 48px', textAlign: 'center' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', display: 'block', marginBottom: '12px' }}>Simple pricing</span>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '36px' : '58px', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-1px', marginBottom: '16px' }}>
          Stop losing leads.<br /><em style={{ color: '#E8610A', fontStyle: 'italic' }}>Start growing today.</em>
        </h1>
        <p style={{ fontSize: '15px', color: '#888', maxWidth: '480px', margin: '0 auto', lineHeight: 1.85, fontWeight: 300 }}>
          Free plan available. No credit card needed. Cancel anytime.
        </p>
      </section>

      <section style={{ padding: isMobile ? '0 16px 48px' : '0 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(5,1fr)', gap: isMobile ? '12px' : '16px', maxWidth: '1300px', margin: '0 auto' }}>
          {plans.map(plan => (
            <div key={plan.name} style={{ background: plan.featured ? 'linear-gradient(160deg,#1c1208 0%,#111 60%)' : '#111', padding: isMobile ? '24px 20px' : '28px 20px', borderRadius: '14px', border: plan.featured ? '1px solid #E8610A' : '1px solid rgba(255,255,255,0.15)', display: 'flex', flexDirection: 'column', boxShadow: plan.featured ? '0 0 50px rgba(232,97,10,0.18)' : 'none' }}>
              {plan.featured && <span style={{ display: 'inline-block', background: 'linear-gradient(135deg,#E8610A,#ff8c42)', color: '#fff', fontSize: '10px', letterSpacing: '.12em', textTransform: 'uppercase', padding: '5px 16px', borderRadius: '20px', marginBottom: '12px', fontWeight: 700, alignSelf: 'flex-start' }}>Most Popular</span>}
              <div style={{ fontSize: plan.planKey === 'free' ? '14px' : '10px', letterSpacing: '.2em', color: plan.planKey === 'free' ? '#ffffff' : '#888', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 800 }}>{plan.name}</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: '4px' }}>
                <sup style={{ fontSize: '16px', fontFamily: 'DM Sans, sans-serif', fontWeight: 400, verticalAlign: 'super', color: '#E8610A' }}>$</sup>{plan.price}<sub style={{ fontSize: '11px', color: '#444', fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}>{plan.sub}</sub>
              </div>
              <p style={{ fontSize: '12px', color: '#bbb', margin: '10px 0 16px', lineHeight: 1.7, fontWeight: 300 }}>{plan.desc}</p>
              <ul style={{ listStyle: 'none', marginBottom: '20px', flex: 1, padding: 0 }}>
                {plan.features.map(f => (
                  <li key={f} style={{ fontSize: '12px', color: '#ddd', padding: '7px 0', borderBottom: '1px solid #2a2a2a', display: 'flex', alignItems: 'flex-start', gap: '7px', lineHeight: 1.5, fontWeight: 400 }}>
                    <span style={{ color: '#E8610A', fontSize: '11px', flexShrink: 0, marginTop: '1px' }}>\u2713</span>{f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handlePlanClick(plan)}
                disabled={loadingPlan === plan.planKey || !sessionLoaded}
                style={{ width: '100%', padding: '13px', borderRadius: '8px', fontSize: '13px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, cursor: (loadingPlan === plan.planKey || !sessionLoaded) ? 'not-allowed' : 'pointer', boxSizing: 'border-box', textAlign: 'center', ...orangeBtn, ...(loadingPlan === plan.planKey ? { background: '#444', boxShadow: 'none' } : {}) }}>
                {loadingPlan === plan.planKey ? 'Redirecting...' : plan.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#111', borderTop: '2px solid #1a1a1a', borderBottom: '2px solid #1a1a1a', padding: isMobile ? '40px 24px' : '60px 40px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', display: 'block', marginBottom: '10px' }}>The math is simple</span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '38px', fontWeight: 700, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
            2 extra clients pays for a <em style={{ color: '#E8610A', fontStyle: 'italic' }}>full year.</em>
          </h2>
          <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.85, marginBottom: '32px', fontWeight: 300 }}>Most businesses spend $2,000\u2013$5,000/mo on agencies. Traffikora starts at $97/mo and never stops working.</p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '16px' }}>
            {[{num:'$97',lbl:'Pro plan per month'},{num:'2',lbl:'Extra clients to break even'},{num:'\u221e',lbl:'Return on investment after that'}].map(item => (
              <div key={item.num} style={{ background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px 20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 700, color: '#E8610A', lineHeight: 1, marginBottom: '8px' }}>{item.num}</div>
                <div style={{ fontSize: '13px', color: '#888', lineHeight: 1.5, fontWeight: 300 }}>{item.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: isMobile ? '40px 24px 48px' : '40px 40px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '12px', maxWidth: '1000px', margin: '0 auto' }}>
          {[
            { icon: '\ud83c\udf81', title: 'Free Plan Available', desc: 'No credit card \u2014 ever' },
            { icon: '\u26a1', title: 'Cancel Any Time', desc: 'One click, no questions asked' },
            { icon: '\ud83d\udd12', title: 'Secure Checkout', desc: '256-bit SSL \u00b7 Powered by Stripe' },
            { icon: '\ud83d\udcac', title: 'Live Support Included', desc: 'Real humans, not bots' },
          ].map(item => (
            <div key={item.title} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '10px', padding: '20px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{item.title}</div>
              <div style={{ fontSize: '12px', color: '#555', fontWeight: 300 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
`;

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', layout, 'utf8');
console.log('SUCCESS: dashboard/layout.tsx written — mobile responsive');

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\pricing\\page.tsx', pricing, 'utf8');
console.log('SUCCESS: pricing/page.tsx written — session loaded before redirect');