// @ts-nocheck
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
  { name: 'Free', price: '0', sub: '/forever', desc: 'Try Traffikora with no credit card. Get a real taste of AI content before you commit.', features: ['3 AI blog posts per month', 'Preview content before publish', 'Access to content dashboard', 'No credit card required', 'Upgrade anytime'], btn: 'Start Free — No Credit Card', planKey: 'free', featured: false },
  { name: 'Starter', price: '47', sub: '/mo', desc: 'Automate your marketing and show up online every single day.', features: ['Unlimited AI blog posts', 'AI social content for Facebook, Instagram, LinkedIn & X', 'One-Push Publish to WordPress', 'Content Calendar & Queue', 'Manual publishing controls', '1 website connected'], btn: 'Get Started', planKey: 'starter', featured: false },
  { name: 'Pro', price: '97', sub: '/mo', desc: 'Fully hands-off. AI agents run every morning and handle everything.', features: ['Everything in Starter', 'AI Agents run daily automatically', 'Auto Mode — fully hands-off', 'TikTok + YouTube Shorts publishing', 'Google SEO + AI Engine Optimization', 'Advanced analytics'], btn: 'Start Pro', planKey: 'pro', featured: true },
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
                    <span style={{ color: '#E8610A', fontSize: '11px', flexShrink: 0, marginTop: '1px' }}>✓</span>{f}
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
          <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.85, marginBottom: '32px', fontWeight: 300 }}>Most businesses spend $2,000–$5,000/mo on agencies. Traffikora starts at $97/mo and never stops working.</p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '16px' }}>
            {[{num:'$97',lbl:'Pro plan per month'},{num:'2',lbl:'Extra clients to break even'},{num:'∞',lbl:'Return on investment after that'}].map(item => (
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
            { icon: '🎁', title: 'Free Plan Available', desc: 'No credit card — ever' },
            { icon: '⚡', title: 'Cancel Any Time', desc: 'One click, no questions asked' },
            { icon: '🔒', title: 'Secure Checkout', desc: '256-bit SSL · Powered by Stripe' },
            { icon: '💬', title: 'Live Support Included', desc: 'Real humans, not bots' },
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
