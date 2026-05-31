// @ts-nocheck
const fs = require('fs');
const path = require('path');

const pricingPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\pricing\\page.tsx');

const content = `// @ts-nocheck
'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const PLANS = [
  {
    name: 'Starter',
    tag: 'STARTER',
    price: '\$97',
    period: '/mo',
    description: 'Perfect for solo business owners ready to automate their marketing.',
    features: ['Blog + social automation', 'Google SEO tools', '1 website connected', 'AI content generation', '7-day free trial'],
    color: '#94a3b8',
    highlight: false,
    cta: 'Start Free Trial',
    href: '/signup'
  },
  {
    name: 'Pro',
    tag: 'MOST POPULAR',
    price: '\$197',
    period: '/mo',
    description: 'Full automation for serious business owners who want it all.',
    features: ['Everything in Starter', 'TikTok + YouTube push', 'AI engine optimization', 'Reddit amplifier', 'Priority support'],
    color: '#f97316',
    highlight: true,
    cta: 'Start Free Trial',
    href: '/signup'
  },
  {
    name: 'Agency',
    tag: 'AGENCY',
    price: '\$797',
    period: '/mo',
    description: 'Manage multiple clients from one powerful dashboard.',
    features: ['Everything in Pro', 'Up to 10 client accounts', 'White-label reports', 'Client management tools', 'Dedicated support'],
    color: '#3b82f6',
    highlight: false,
    cta: 'Start Free Trial',
    href: '/signup'
  },
  {
    name: 'Enterprise',
    tag: 'ENTERPRISE',
    price: '\$1,497',
    period: '/mo',
    description: 'For large agencies scaling across many clients at once.',
    features: ['Everything in Agency', 'Unlimited client accounts', 'Custom integrations', 'SLA guarantee', 'Dedicated account manager'],
    color: '#a855f7',
    highlight: false,
    cta: 'Contact Us',
    href: '/contact'
  }
]

export default function Pricing() {
  return (
    <>
      <Nav />
      <div style={{ backgroundColor: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>

        <div style={{ textAlign: 'center', padding: '100px 32px 60px' }}>
          <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px' }}>SIMPLE PRICING</div>
          <h1 style={{ fontSize: '52px', fontWeight: '800', margin: '0 0 16px 0', letterSpacing: '-1px' }}>No surprises. <em style={{ color: '#f97316', fontStyle: 'italic' }}>Ever.</em></h1>
          <p style={{ fontSize: '18px', color: '#64748b', margin: '0 auto', maxWidth: '500px', lineHeight: '1.6' }}>Credit card required -- No charge for 7 days -- Cancel anytime</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', maxWidth: '1200px', margin: '0 auto', padding: '0 32px 80px' }}>
          {PLANS.map(plan => (
            <div key={plan.name} style={{ backgroundColor: '#111', borderRadius: '16px', border: plan.highlight ? '2px solid #f97316' : '1px solid #1f1f1f', padding: '32px 24px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
              {plan.highlight && (
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#f97316', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 16px', borderRadius: '20px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Most Popular</div>
              )}
              <div style={{ marginBottom: '8px', fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{plan.tag}</div>
              <div style={{ fontSize: '22px', fontWeight: '800', marginBottom: '12px' }}>{plan.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '12px' }}>
                <span style={{ fontSize: '42px', fontWeight: '800', color: plan.color }}>{plan.price}</span>
                <span style={{ fontSize: '14px', color: '#64748b' }}>{plan.period}</span>
              </div>
              <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '24px', lineHeight: '1.6' }}>{plan.description}</div>
              <div style={{ flex: 1, marginBottom: '28px' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px', fontSize: '14px', color: '#e2e8f0' }}>
                    <span style={{ color: plan.color, fontWeight: '700', fontSize: '16px', marginTop: '0px' }}>+</span>
                    {f}
                  </div>
                ))}
              </div>
              <a href={plan.href} style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: '10px', border: 'none', backgroundColor: plan.highlight ? '#f97316' : plan.color + '20', color: plan.highlight ? '#fff' : plan.color, cursor: 'pointer', fontSize: '14px', fontWeight: '700', textDecoration: 'none', transition: 'opacity 0.2s' }}>
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', maxWidth: '1200px', margin: '0 auto 80px', padding: '0 32px' }}>
          {[
            { icon: '🛡', title: 'No Charge for 7 Days', desc: 'Credit card required to start' },
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
    </>
  )
}
`;

fs.writeFileSync(pricingPath, content, 'utf8');
console.log('DONE - Pricing page rebuilt with Nav and Footer');