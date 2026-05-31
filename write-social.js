// @ts-nocheck
const fs = require('fs');
const path = require('path');

// Fix public pricing page
const pricingPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\pricing\\page.tsx');

const pricingContent = `// @ts-nocheck
'use client'

const PLANS = [
  {
    name: 'Starter',
    price: '\$97',
    period: '/mo',
    description: 'Perfect for solo business owners ready to automate their marketing.',
    features: ['Blog + social automation', 'Google SEO tools', '1 website connected', 'AI content generation', '7-day free trial'],
    color: '#94a3b8',
    highlight: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Pro',
    price: '\$197',
    period: '/mo',
    description: 'Full automation for serious business owners who want it all.',
    features: ['Everything in Starter', 'TikTok + YouTube push', 'AI engine optimization', 'Reddit amplifier', 'Priority support'],
    color: '#f97316',
    highlight: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Agency',
    price: '\$797',
    period: '/mo',
    description: 'Manage multiple clients from one powerful dashboard.',
    features: ['Everything in Pro', 'Up to 10 client accounts', 'White-label reports', 'Client management tools', 'Dedicated support'],
    color: '#3b82f6',
    highlight: false,
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    price: '\$1,497',
    period: '/mo',
    description: 'For large agencies scaling across many clients at once.',
    features: ['Everything in Agency', 'Unlimited client accounts', 'Custom integrations', 'SLA guarantee', 'Dedicated account manager'],
    color: '#a855f7',
    highlight: false,
    cta: 'Contact Us'
  }
]

export default function Pricing() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>

      <div style={{ textAlign: 'center', padding: '80px 32px 60px' }}>
        <div style={{ fontSize: '13px', color: '#f97316', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>SIMPLE PRICING</div>
        <h1 style={{ fontSize: '48px', fontWeight: '800', margin: '0 0 16px 0' }}>No surprises. <em style={{ color: '#f97316', fontStyle: 'italic' }}>Ever.</em></h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', margin: '0 auto', maxWidth: '500px' }}>Credit card required -- No charge for 7 days -- Cancel anytime</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', maxWidth: '1200px', margin: '0 auto', padding: '0 32px 80px' }}>
        {PLANS.map(plan => (
          <div key={plan.name} style={{ backgroundColor: plan.highlight ? '#111' : '#0d0d0d', borderRadius: '16px', border: plan.highlight ? '2px solid #f97316' : '1px solid #1f1f1f', padding: '32px 24px', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            {plan.highlight && (
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#f97316', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '4px 16px', borderRadius: '20px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>Most Popular</div>
            )}
            <div style={{ marginBottom: '8px', fontSize: '13px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{plan.name}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '12px' }}>
              <span style={{ fontSize: '42px', fontWeight: '800', color: plan.color }}>{plan.price}</span>
              <span style={{ fontSize: '14px', color: '#94a3b8' }}>{plan.period}</span>
            </div>
            <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px', lineHeight: '1.5' }}>{plan.description}</div>
            <div style={{ flex: 1, marginBottom: '24px' }}>
              {plan.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '10px', fontSize: '14px', color: '#e2e8f0' }}>
                  <span style={{ color: plan.color, fontWeight: '700', marginTop: '1px' }}>+</span>
                  {f}
                </div>
              ))}
            </div>
            <a href="/signup" style={{ display: 'block', textAlign: 'center', padding: '14px', borderRadius: '8px', border: 'none', backgroundColor: plan.highlight ? '#f97316' : plan.color + '22', color: plan.highlight ? '#fff' : plan.color, cursor: 'pointer', fontSize: '14px', fontWeight: '700', textDecoration: 'none' }}>
              {plan.cta}
            </a>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', maxWidth: '1200px', margin: '0 auto', padding: '0 32px 80px', borderTop: '1px solid #1f1f1f' }}>
        {[
          { icon: '🛡', title: 'No Charge for 7 Days', desc: 'Credit card required to start' },
          { icon: '⚡', title: 'Cancel Any Time', desc: 'One click, no questions asked' },
          { icon: '🔒', title: 'Secure Checkout', desc: '256-bit SSL, Powered by Stripe' },
          { icon: '💬', title: 'Live Support Included', desc: 'Real humans, not bots' }
        ].map(item => (
          <div key={item.title} style={{ padding: '32px 24px', textAlign: 'center', borderRight: '1px solid #1f1f1f' }}>
            <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.icon}</div>
            <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '4px' }}>{item.title}</div>
            <div style={{ fontSize: '12px', color: '#94a3b8' }}>{item.desc}</div>
          </div>
        ))}
      </div>

    </div>
  )
}
`;

// Fix billing page upgrade buttons to highlight selected plan
const billingPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\billing\\page.tsx');
let billingContent = fs.readFileSync(billingPath, 'utf8');

billingContent = billingContent.replace(
  `export default function Billing() {
  const [loading, setLoading] = useState(true)`,
  `export default function Billing() {
  const [loading, setLoading] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState('Pro')`
);

billingContent = billingContent.replace(
  `backgroundColor: '#111', borderRadius: '12px', border: plan.current ? '2px solid #f97316' : '1px solid #1f1f1f', padding: '24px', position: 'relative'`,
  `backgroundColor: '#111', borderRadius: '12px', border: (plan.current || selectedPlan === plan.name) ? \`2px solid \${plan.color}\` : '1px solid #1f1f1f', padding: '24px', position: 'relative', cursor: 'pointer'`
);

billingContent = billingContent.replace(
  `<div key={plan.name} style={{ backgroundColor: '#111', borderRadius: '12px', border: (plan.current || selectedPlan === plan.name)`,
  `<div key={plan.name} onClick={() => setSelectedPlan(plan.name)} style={{ backgroundColor: '#111', borderRadius: '12px', border: (plan.current || selectedPlan === plan.name)`
);

billingContent = billingContent.replace(
  `onClick={() => { if (!plan.current) window.location.href = 'https://www.traffikora.com/pricing' }}>
                  {plan.current ? 'Current Plan' : 'Upgrade'}`,
  `onClick={(e) => { e.stopPropagation(); if (!plan.current) window.location.href = 'https://www.traffikora.com/pricing' }}>
                  {plan.current ? 'Current Plan' : selectedPlan === plan.name ? 'Selected - Upgrade' : 'Upgrade'}`
);

fs.writeFileSync(pricingPath, pricingContent, 'utf8');
fs.writeFileSync(billingPath, billingContent, 'utf8');
console.log('DONE - Pricing page fixed and billing upgrade flow improved');