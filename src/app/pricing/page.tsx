// @ts-nocheck
'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PricingPage() {
  const plans = [
    { name: 'Starter', price: '97', plan: 'starter', featured: false, desc: 'Perfect for solo operators and single-location businesses ready to automate their marketing.', features: ['Google SEO automation', 'Daily blog publishing', 'Instagram and Facebook posts', 'Schema markup', 'Analytics dashboard', '1 location'] },
    { name: 'Growth', price: '197', plan: 'growth', featured: true, desc: 'For growing businesses that want to dominate every platform including TikTok, YouTube, and AI engines.', features: ['Everything in Starter', 'TikTok publishing', 'YouTube Shorts', 'AI engine optimization', 'Reddit amplifier', 'Google Search Console', '3 locations'] },
    { name: 'Pro', price: '397', plan: 'pro', featured: false, desc: 'For multi-location businesses and serious operators who want maximum market domination.', features: ['Everything in Growth', 'Up to 10 locations', 'Priority content generation', 'Dedicated account manager', 'Custom brand voice training', 'Advanced analytics'] },
    { name: 'Enterprise', price: 'Custom', plan: 'enterprise', featured: false, desc: 'For agencies and franchise groups managing 10 or more locations with white-label needs.', features: ['Everything in Pro', 'Unlimited locations', 'White-label dashboard', 'API access', 'Custom integrations', 'SLA guarantee'] },
  ]

  return (
    <>
      <Nav />
      <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

        <section style={{ background: '#111', padding: '80px 40px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>Simple Pricing</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-1.5px', margin: '0 auto 20px', maxWidth: '700px' }}>
            No surprises. <em style={{ color: '#E8610A', fontStyle: 'italic' }}>Ever.</em>
          </h1>
          <p style={{ fontSize: '18px', color: '#ccc', maxWidth: '520px', margin: '0 auto 16px', lineHeight: 1.8, fontWeight: 300 }}>
            Start free for 7 days. No charge until day 8. Cancel anytime with one click.
          </p>
        </section>

        <section style={{ display: 'flex', background: '#f7f7f7', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111' }}>
          {[
            { icon: '🛡️', title: 'No Charge for 7 Days', sub: 'Credit card required to start' },
            { icon: '⚡', title: 'Cancel Any Time', sub: 'One click, no questions asked' },
            { icon: '🔒', title: 'Secure Checkout', sub: '256-bit SSL, Powered by Stripe' },
            { icon: '💬', title: 'Live Support Included', sub: 'Real humans, not bots' },
          ].map((item, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '12px', padding: '20px', borderRight: i < 3 ? '2px solid #111' : 'none', justifyContent: 'center' }}>
              <span style={{ fontSize: '26px' }}>{item.icon}</span>
              <div>
                <p style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>{item.title}</p>
                <p style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>{item.sub}</p>
              </div>
            </div>
          ))}
        </section>

        <section style={{ background: '#fff', padding: '80px 40px', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '2.5px solid #111', borderRadius: '14px', overflow: 'hidden' }}>
            {plans.map((plan) => (
              <div key={plan.name} style={{ background: plan.featured ? '#111' : '#fff', padding: '32px 24px', borderRight: plan.name !== 'Enterprise' ? '2.5px solid #111' : 'none' }}>
                {plan.featured && <div style={{ background: '#E8610A', color: '#fff', fontSize: '10px', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', padding: '4px 12px', borderRadius: '20px', display: 'inline-block', marginBottom: '12px' }}>Most Popular</div>}
                <p style={{ fontSize: '11px', letterSpacing: '.14em', color: plan.featured ? '#888' : '#777', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 600 }}>{plan.name}</p>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '48px', fontWeight: 700, color: plan.featured ? '#fff' : '#111', lineHeight: 1 }}>
                  <sup style={{ fontSize: '20px', fontFamily: "'DM Sans', sans-serif", fontWeight: 400, verticalAlign: 'super', color: plan.featured ? '#aaa' : '#777' }}>$</sup>
                  {plan.price}
                  <sub style={{ fontSize: '13px', color: plan.featured ? '#888' : '#777', fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>/mo</sub>
                </p>
                <p style={{ fontSize: '13px', color: plan.featured ? '#bbb' : '#666', margin: '12px 0 20px', lineHeight: 1.65, fontWeight: 300 }}>{plan.desc}</p>
                <ul style={{ listStyle: 'none', marginBottom: '24px', padding: 0 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ fontSize: '13px', color: plan.featured ? '#ccc' : '#444', padding: '7px 0', borderBottom: plan.featured ? '1px solid #1e1e1e' : '1px solid #f0f0f0', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#E8610A', fontWeight: 700, flexShrink: 0 }}>✓</span>{f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => window.location.href='/signup?plan=' + plan.plan} style={{ width: '100%', padding: '13px', borderRadius: '7px', fontSize: '13px', fontFamily: "'DM Sans', sans-serif", fontWeight: 700, cursor: 'pointer', background: plan.featured ? '#E8610A' : 'transparent', color: plan.featured ? '#fff' : '#555', border: plan.featured ? 'none' : '1.5px solid #bbb' }}>
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#f7f7f7', padding: '80px 40px', textAlign: 'center', borderBottom: '2.5px solid #111' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>
            2 extra clients pays for a <em style={{ color: '#E8610A', fontStyle: 'italic' }}>full year.</em>
          </h2>
          <p style={{ fontSize: '16px', color: '#555', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>
            Most businesses spend $2,000 to $5,000 per month on agencies and get mediocre results. Traffikora starts at $97/mo and never stops working.
          </p>
          <div style={{ display: 'inline-grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { num: '$97', label: 'Starting price per month' },
              { num: '2', label: 'Clients needed to break even' },
              { num: 'Unlimited', label: 'Return on investment after that' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '24px 32px', textAlign: 'center', borderRight: i < 2 ? '2.5px solid #111' : 'none', background: '#fff' }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 700, color: '#E8610A' }}>{item.num}</p>
                <p style={{ fontSize: '12px', color: '#666', marginTop: '6px', lineHeight: 1.5, fontWeight: 300 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 40px', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>Pricing <em style={{ color: '#E8610A', fontStyle: 'italic' }}>questions answered</em></h2>
            {[
              { q: 'Do I need a credit card to start?', a: 'Yes, a credit card is required to start your free trial. We pre-authorize your card but do not charge it until Day 8. You will receive a reminder email 24 hours before your trial ends.' },
              { q: 'What happens after the 7-day trial?', a: 'After 7 days, your card is charged for your first month. You also receive our 30-day satisfaction guarantee. If you are not happy in the first paid month, we will refund you in full.' },
              { q: 'Can I cancel anytime?', a: 'Yes. Cancel with one click from your dashboard. No phone call, no cancellation form, no questions asked. You keep access until the end of your billing period.' },
              { q: 'Can I change plans later?', a: 'Absolutely. Upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades take effect at your next billing cycle.' },
              { q: 'Is there a long-term contract?', a: 'No. Traffikora is month-to-month. No annual commitment required. Cancel whenever you want.' },
            ].map((item, i) => (
              <div key={i} style={{ borderBottom: '1px solid #e8e8e8', padding: '24px 0' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>{item.q}</h3>
                <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.8, fontWeight: 300 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#111', padding: '80px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            Start free. <em style={{ color: '#E8610A', fontStyle: 'italic' }}>Zero risk.</em>
          </h2>
          <p style={{ fontSize: '16px', color: '#ccc', maxWidth: '420px', margin: '0 auto 32px', lineHeight: 1.8 }}>No charge for 7 days. Cancel anytime. Your competitor is already using Traffikora.</p>
          <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            Start Your Free 7-Day Trial
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}
