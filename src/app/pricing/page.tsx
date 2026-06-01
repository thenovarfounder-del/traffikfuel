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
      'No credit card required',
      'Upgrade anytime in one click'
    ],
    color: '#64748b',
    highlight: false,
    cta: 'Start Free — No Card Needed',
    href: '/signup?plan=free'
  },
  {
    name: 'Starter',
    price: '$47',
    period: '/mo',
    description: 'Everything you need to automate your marketing and start showing up online every single day.',
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
      'AI Engine Optimization — get found on ChatGPT, Claude, Gemini & Perplexity',
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
    description: 'Unlimited clients, custom AI training, and a dedicated team behind you. Built for agencies that are serious about scale.',
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

        <div style={{ textAlign: 'center', padding: '100px 32px 60px' }}>
          <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px' }}>SIMPLE PRICING</div>
          <h1 style={{ fontSize: '52px', fontWeight: '800', margin: '0 0 16px 0', letterSpacing: '-1px', color: '#fff' }}>Start free. <em style={{ color: '#f97316', fontStyle: 'italic' }}>Scale when ready.</em></h1>
          <p style={{ fontSize: '18px', color: '#64748b', margin: '0 auto', maxWidth: '560px', lineHeight: '1.6' }}>Free plan available — no credit card needed. Paid plans start at $47/mo. Cancel anytime.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', maxWidth: '1300px', margin: '0 auto', padding: '0 32px 80px' }}>
          {PLANS.map(plan => (
            <div key={plan.name} style={{ backgroundColor: '#111', borderRadius: '16px', border: plan.highlight ? '2px solid #f97316' : '1px solid #1f1f1f', padding: '28px 20px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              {plan.highlight && (
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#f97316', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 16px', borderRadius: '20px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Most Popular</div>
              )}
              <div style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px', color: '#fff' }}>{plan.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '10px' }}>
                <span style={{ fontSize: '38px', fontWeight: '800', color: plan.color }}>{plan.price}</span>
                <span style={{ fontSize: '13px', color: '#64748b' }}>{plan.period}</span>
              </div>
              <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '20px', lineHeight: '1.65' }}>{plan.description}</div>
              <div style={{ flex: 1, marginBottom: '24px' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '9px', fontSize: '12px', color: '#e2e8f0', lineHeight: '1.5' }}>
                    <span style={{ color: plan.color, fontWeight: '700', fontSize: '14px', flexShrink: 0, marginTop: '1px' }}>+</span>
                    {f}
                  </div>
                ))}
              </div>
              <a href={plan.href} style={{ display: 'block', textAlign: 'center', padding: '13px', borderRadius: '10px', backgroundColor: plan.highlight ? '#f97316' : plan.color + '20', color: plan.highlight ? '#fff' : plan.color, cursor: 'pointer', fontSize: '13px', fontWeight: '700', textDecoration: 'none', border: plan.highlight ? 'none' : '1px solid ' + plan.color + '40' }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

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
