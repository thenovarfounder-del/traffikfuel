// @ts-nocheck
'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    period: '/forever',
    description: 'Try Traffikora with no credit card. Get a real taste of AI-generated content before you commit to anything.',
    features: [
      '3 AI blog posts per month',
      'See your content before it publishes',
      'Access to the content dashboard',
      'No credit card required — ever',
      'Upgrade anytime in one click'
    ],
    color: '#94a3b8',
    highlight: false,
    cta: 'Start Free — No Card Needed',
    href: '/signup?plan=free'
  },
  {
    name: 'Starter',
    price: '$47',
    period: '/mo',
    description: 'Everything you need to automate your marketing and show up online every single day.',
    features: [
      'Unlimited AI blog posts',
      'AI social media content for Facebook, Instagram, LinkedIn & X',
      'One-Push Publish to WordPress',
      'Content Calendar — schedule everything in one place',
      'Content Queue — review before it goes live',
      'Manual publishing controls',
      '1 website connected',
      'Email support'
    ],
    color: '#94a3b8',
    highlight: false,
    cta: 'Get Started',
    href: '/signup?plan=starter'
  },
  {
    name: 'Pro',
    price: '$97',
    period: '/mo',
    description: 'Fully hands-off marketing. AI agents run every morning at 6am — generating and publishing content while you sleep.',
    features: [
      'Everything in Starter',
      'AI Agents — Content Strategist, Creator, Publisher & Monitor run daily at 6am automatically',
      'Auto Mode — turn it on and never touch it again',
      'TikTok + YouTube Shorts publishing',
      'Google SEO + Google SEO + AI Engine Optimization — rank on Google, Bing, ChatGPT, Claude, Gemini & Perplexity',
      'Advanced performance analytics',
      'Reddit amplifier',
      'Priority email support'
    ],
    color: '#f97316',
    highlight: true,
    cta: 'Start Pro — Most Popular',
    href: '/signup?plan=pro'
  },
  {
    name: 'Agency',
    price: '$297',
    period: '/mo',
    description: 'Run marketing for multiple clients from one dashboard. White-label it and bill whatever you want.',
    features: [
      'Everything in Pro',
      'Up to 10 client accounts',
      'White-label dashboard — your brand, not ours',
      'Client management portal',
      'Separate content calendars per client',
      'Bulk content generation across all clients',
      'Agency analytics overview',
      'Dedicated support channel'
    ],
    color: '#3b82f6',
    highlight: false,
    cta: 'Start Agency Plan',
    href: '/signup?plan=agency'
  },
  {
    name: 'Enterprise',
    price: '$997',
    period: '/mo',
    description: 'Unlimited clients, custom AI training, and a dedicated team behind you. Built for agencies serious about scale.',
    features: [
      'Everything in Agency',
      'Unlimited client accounts',
      'Custom AI voice and tone training per client',
      'Priority content processing',
      'Google Search Console integration',
      'Custom integrations on request',
      'SLA uptime guarantee',
      'Dedicated account manager',
      'Onboarding call included'
    ],
    color: '#a855f7',
    highlight: false,
    cta: 'Contact Us',
    href: '/contact'
  }
]

export default function Pricing() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <Nav />
      <div style={{ color: '#fff', fontFamily: 'system-ui, sans-serif', backgroundColor: '#0a0a0a' }}>

        {/* HERO HEADER */}
        <div style={{ textAlign: 'center', padding: '100px 32px 60px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,10,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '20px', position: 'relative' }}>Simple Pricing</div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '64px', fontWeight: '700', margin: '0 0 8px 0', letterSpacing: '-2px', color: '#fff', lineHeight: 1.0, position: 'relative' }}>
            Stop losing leads.
          </h1>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '64px', fontWeight: '700', margin: '0 0 28px 0', letterSpacing: '-2px', color: '#f97316', fontStyle: 'italic', lineHeight: 1.0, position: 'relative', textShadow: '0 0 40px rgba(232,97,10,0.35)' }}>
            Start growing today.
          </h2>
          <p style={{ fontSize: '18px', color: '#bbb', margin: '0 auto 28px', maxWidth: '580px', lineHeight: '1.75', position: 'relative', fontStyle: 'italic', fontFamily: "'Playfair Display', serif" }}>
            Every day without Traffikora is a day your competitor gets the lead instead.
          </p>
          <div style={{ display: 'flex', gap: '28px', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
            {['Free plan — no card ever', 'Live in under 5 minutes', 'Cancel anytime — one click', 'AI running 24/7 from day one'].map(item => (
              <span key={item} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '14px', color: '#ddd' }}>
                <span style={{ color: '#f97316', fontWeight: '700' }}>✓</span>{item}
              </span>
            ))}
          </div>
        </div>

        {/* PRICING GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', maxWidth: '1300px', margin: '0 auto', padding: '0 32px 80px' }}>
          {PLANS.map(plan => (
            <div key={plan.name} style={{
              backgroundColor: '#111',
              borderRadius: '16px',
              border: plan.highlight ? '1px solid #f97316' : '1px solid rgba(255,255,255,0.25)',
              padding: '28px 20px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: plan.highlight ? '0 0 50px rgba(232,97,10,0.18), 0 0 100px rgba(232,97,10,0.06)' : 'none',
              transform: plan.highlight ? 'translateY(-10px)' : 'none',
              background: plan.highlight ? 'linear-gradient(160deg,#1c1208 0%,#111 60%)' : '#111'
            }}>
              {plan.highlight && (
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg,#f97316,#ff8c42)', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '5px 16px', borderRadius: '20px', textTransform: 'uppercase', whiteSpace: 'nowrap', boxShadow: '0 2px 14px rgba(232,97,10,0.45)' }}>Most Popular</div>
              )}
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#777', textTransform: 'uppercase', marginBottom: '12px', fontWeight: '700' }}>{plan.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '10px' }}>
                <span style={{ fontSize: '16px', color: '#f97316', verticalAlign: 'super', fontFamily: 'system-ui' }}>$</span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '48px', fontWeight: '700', color: '#fff', lineHeight: 1 }}>{plan.price.replace('$','')}</span>
                <span style={{ fontSize: '12px', color: '#555' }}>{plan.period}</span>
              </div>
              <div style={{ fontSize: '12px', color: '#aaa', marginBottom: '18px', lineHeight: '1.7' }}>{plan.description}</div>
              <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,#2a2a2a,transparent)', marginBottom: '16px' }} />
              <div style={{ flex: 1, marginBottom: '24px' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '9px', fontSize: '12px', color: '#ddd', lineHeight: '1.5', borderBottom: '1px solid #1e1e1e', paddingBottom: '9px' }}>
                    <span style={{ color: plan.color, fontWeight: '700', fontSize: '11px', flexShrink: 0, marginTop: '2px' }}>→</span>
                    {f}
                  </div>
                ))}
              </div>
              <a href={plan.href} style={{
                display: 'block', textAlign: 'center', padding: '14px', borderRadius: '10px',
                background: plan.highlight ? 'linear-gradient(135deg,#f97316,#ff8c42)' : 'transparent',
                color: plan.highlight ? '#fff' : '#aaa',
                cursor: 'pointer', fontSize: '13px', fontWeight: '700', textDecoration: 'none',
                border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.2)',
                boxShadow: plan.highlight ? '0 4px 20px rgba(232,97,10,0.4)' : 'none'
              }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* TRUST BAR */}
        <div style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', maxWidth: '1200px', margin: '0 auto 80px', padding: '0 32px', backgroundColor: '#0a0a0a' }}>
          {[
            { icon: '🎁', title: 'Free Plan Available', desc: 'No credit card — ever' },
            { icon: '⚡', title: 'Cancel Any Time', desc: 'One click, no questions asked' },
            { icon: '🔒', title: 'Secure Checkout', desc: '256-bit SSL, Powered by Stripe' },
            { icon: '💬', title: 'Live Support Included', desc: 'Real humans, not bots' }
          ].map((item, i) => (
            <div key={item.title} style={{ padding: '40px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid #1a1a1a' : 'none' }}>
              <div style={{ fontSize: '28px', marginBottom: '10px' }}>{item.icon}</div>
              <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '4px', color: '#fff' }}>{item.title}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>{item.desc}</div>
            </div>
          ))}
        </div>

      </div>
      <Footer />
    </div>
  )
}
