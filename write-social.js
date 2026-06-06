const fs = require('fs');

// ─── NAV ───────────────────────────────────────────────────────────
const nav = `// @ts-nocheck
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{\`
        .nav-links { display: flex; gap: 20px; align-items: center; }
        .nav-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; }
        .nav-cta-btn { display: block; }
        .nav-login-btn { display: block; }
        .mobile-menu { display: none; position: fixed; top: 64px; left: 0; right: 0; bottom: 0; background: #fff; z-index: 999; padding: 24px 32px; overflow-y: auto; flex-direction: column; }
        .mobile-menu.is-open { display: flex; }
        .mobile-menu a { display: block; color: #111; text-decoration: none; font-size: 22px; font-weight: 600; padding: 18px 0; border-bottom: 1px solid #f0f0f0; font-family: 'DM Sans', sans-serif; }
        .mobile-menu a.orange { color: #E8610A; }
        .mobile-menu a.cta-mobile { background: linear-gradient(135deg,#E8610A,#c94e08); color: #fff !important; padding: 16px 22px; font-size: 18px; border-radius: 8px; text-align: center; margin-top: 24px; border-bottom: none; }
        .mobile-menu a.login-mobile { background: linear-gradient(135deg,#E8610A,#c94e08); color: #fff !important; padding: 16px 22px; font-size: 18px; border-radius: 8px; text-align: center; margin-top: 12px; border-bottom: none; }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-hamburger { display: block; }
          .nav-cta-btn { display: none; }
          .nav-login-btn { display: none; }
        }
      \`}</style>

      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '2.5px solid #111', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', height: '64px', fontFamily: "'DM Sans', sans-serif" }}>

        <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: '#111', textDecoration: 'none' }}>
          Traffik<span style={{ color: '#E8610A' }}>ora</span><sup style={{ fontSize: '10px', fontFamily: "'DM Sans', sans-serif", fontWeight: 400, color: '#111', verticalAlign: 'super', marginLeft: '1px' }}>&trade;</sup>
        </Link>

        <div className="nav-links">
          {!isHome && <Link href="/" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Home</Link>}
          <Link href="/features" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Features</Link>
          <Link href="/solutions" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Solutions</Link>
          <Link href="/pricing" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Pricing</Link>
          <Link href="/how-it-works" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>How It Works</Link>
          <Link href="/why-traffikora" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Why Traffikora</Link>
          <Link href="/faq" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>FAQ</Link>
          <Link href="/blog" style={{ color: '#E8610A', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Blog</Link>
          <Link href="/contact" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Contact</Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '8px' }}>
          <Link href="/login" className="nav-login-btn" style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', padding: '9px 16px', textDecoration: 'none', fontSize: '13px', fontWeight: 700, borderRadius: '6px', border: 'none' }}>Login</Link>
          <Link href="/signup" className="nav-cta-btn" style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', padding: '9px 16px', textDecoration: 'none', fontSize: '13px', fontWeight: 700, borderRadius: '8px', border: '2.5px solid #111' }}>Start Free Today</Link>
          <button className="nav-hamburger" aria-label="Toggle menu" onClick={() => { const menu = document.getElementById('mobile-nav-menu'); if (menu) menu.classList.toggle('is-open'); }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <div id="mobile-nav-menu" className="mobile-menu">
        {!isHome && <a href="/">Home</a>}
        <a href="/features">Features</a>
        <a href="/solutions">Solutions</a>
        <a href="/pricing">Pricing</a>
        <a href="/how-it-works">How It Works</a>
        <a href="/why-traffikora">Why Traffikora</a>
        <a href="/faq">FAQ</a>
        <a href="/blog" className="orange">Blog</a>
        <a href="/contact">Contact</a>
        <a href="/about">About Us</a>
        <a href="/login" className="login-mobile">Login</a>
        <a href="/signup" className="cta-mobile">Start Free Today</a>
      </div>
    </>
  )
}
`;

// ─── PRICING ───────────────────────────────────────────────────────
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
  { name: 'Free', price: '0', sub: '/forever', desc: 'Try Traffikora with no credit card. Get a real taste of AI content before you commit.', features: ['3 AI blog posts per month', 'Preview content before publish', 'Access to content dashboard', 'No credit card required', 'Upgrade anytime'], btn: 'Start Free \u2014 No Card', planKey: 'free', featured: false },
  { name: 'Starter', price: '47', sub: '/mo', desc: 'Automate your marketing and show up online every single day.', features: ['Unlimited AI blog posts', 'AI social content for Facebook, Instagram, LinkedIn & X', 'One-Push Publish to WordPress', 'Content Calendar & Queue', 'Manual publishing controls', '1 website connected'], btn: 'Get Started', planKey: 'starter', featured: false },
  { name: 'Pro', price: '97', sub: '/mo', desc: 'Fully hands-off. AI agents run every morning and handle everything.', features: ['Everything in Starter', 'AI Agents run daily automatically', 'Auto Mode \u2014 fully hands-off', 'TikTok + YouTube Shorts publishing', 'Google SEO + AI Engine Optimization', 'Advanced analytics'], btn: 'Start Pro', planKey: 'pro', featured: true },
  { name: 'Agency', price: '297', sub: '/mo', desc: 'Manage up to 10 clients. White-label it and bill whatever you want.', features: ['Everything in Pro', 'Up to 10 client accounts', 'White-label dashboard', 'Client management portal', 'Bulk content generation', 'Agency analytics overview'], btn: 'Start Agency Plan', planKey: 'agency', featured: false },
  { name: 'Enterprise', price: '997', sub: '/mo', desc: 'Unlimited clients, custom AI training, dedicated account manager.', features: ['Everything in Agency', 'Unlimited client accounts', 'Custom AI voice per client', 'Google Search Console integration', 'SLA uptime guarantee', 'Dedicated account manager'], btn: 'Start Enterprise Plan', planKey: 'enterprise', featured: false },
]

export default function PricingPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [user, setUser] = useState(null)
  const [loadingPlan, setLoadingPlan] = useState(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data?.user) setUser(data.user)
    })
  }, [])

  async function handlePlanClick(plan) {
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
  const ghostBtn = { background: 'transparent', color: '#ccc', border: '1px solid rgba(255,255,255,0.2)' }

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
              <div style={{ fontSize: '10px', letterSpacing: '.2em', color: '#888', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 700 }}>{plan.name}</div>
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
                disabled={loadingPlan === plan.planKey}
                style={{ width: '100%', padding: '13px', borderRadius: '8px', fontSize: '13px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, cursor: loadingPlan === plan.planKey ? 'not-allowed' : 'pointer', boxSizing: 'border-box', textAlign: 'center', ...(plan.planKey === 'free' ? ghostBtn : orangeBtn), ...(loadingPlan === plan.planKey ? { background: '#444', boxShadow: 'none' } : {}) }}>
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

// ─── CONTACT ───────────────────────────────────────────────────────
const contact = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) setSent(true)
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '10px',
    border: '1px solid #2a2a2a',
    backgroundColor: '#111',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'DM Sans, sans-serif',
    resize: 'vertical'
  }

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' }}>
      <Nav />

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', minHeight: 'calc(100vh - 64px)' }}>

        {/* LEFT PANEL */}
        {!isMobile && (
          <div style={{ background: '#111', padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '2px solid #1a1a1a' }}>
            <span style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '16px', display: 'block' }}>Contact Us</span>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 700, lineHeight: 1.15, margin: '0 0 20px', color: '#fff' }}>
              We\u2019d love to<br /><em style={{ color: '#E8610A', fontStyle: 'italic' }}>hear from you.</em>
            </h1>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.85, margin: '0 0 48px', fontWeight: 300 }}>
              Questions, feedback, or want to explore Enterprise? Reach out and we\u2019ll get back to you fast.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { icon: '\ud83d\udce7', label: 'Email', value: 'support@traffikora.com' },
                { icon: '\ud83d\udcac', label: 'Live Chat', value: 'Available 24/7 via chat widget' },
                { icon: '\u26a1', label: 'Response Time', value: 'Usually within 2 hours' }
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(232,97,10,0.1)', border: '1px solid rgba(232,97,10,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ fontSize: '14px', color: '#ddd' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RIGHT PANEL — form */}
        <div style={{ padding: isMobile ? '40px 24px' : '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#0a0a0a' }}>
          <div style={{ maxWidth: '480px', width: '100%', margin: '0 auto' }}>

            {isMobile && (
              <div style={{ marginBottom: '32px' }}>
                <span style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', display: 'block', marginBottom: '10px' }}>Contact Us</span>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#fff', lineHeight: 1.15, margin: 0 }}>
                  We\u2019d love to<br /><em style={{ color: '#E8610A', fontStyle: 'italic' }}>hear from you.</em>
                </h1>
              </div>
            )}

            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>\u2705</div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>Message sent!</h2>
                <p style={{ color: '#888', fontSize: '15px' }}>We\u2019ll get back to you within 2 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  style={{ marginTop: '24px', padding: '12px 24px', borderRadius: '10px', border: '1px solid #2a2a2a', backgroundColor: 'transparent', color: '#888', cursor: 'pointer', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '32px' }}>
                  <span style={{ fontSize: '12px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', display: 'block', marginBottom: '8px' }}>Get In Touch</span>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, margin: 0, color: '#fff' }}>Send us a message</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '6px' }}>Your Name</label>
                    <input style={inputStyle} placeholder="Jane Smith" value={form.name} onChange={e => update('name', e.target.value)} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '6px' }}>Email Address</label>
                    <input style={inputStyle} type="email" placeholder="jane@yourbusiness.com" value={form.email} onChange={e => update('email', e.target.value)} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '6px' }}>Message</label>
                    <textarea style={{ ...inputStyle, minHeight: '140px' }} placeholder="How can we help?" value={form.message} onChange={e => update('message', e.target.value)} />
                  </div>
                  <button onClick={handleSubmit} disabled={loading}
                    style={{ width: '100%', padding: '15px', borderRadius: '10px', border: 'none', background: loading ? '#333' : 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', fontSize: '15px', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', boxShadow: '0 4px 20px rgba(232,97,10,0.35)' }}>
                    {loading ? 'Sending...' : 'Send Message \u2192'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
`;

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Nav.tsx', nav, 'utf8');
console.log('SUCCESS: Nav.tsx written — login button orange');

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\pricing\\page.tsx', pricing, 'utf8');
console.log('SUCCESS: pricing/page.tsx written — all buttons orange, enterprise wired');

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\contact\\page.tsx', contact, 'utf8');
console.log('SUCCESS: contact/page.tsx written — mobile responsive');