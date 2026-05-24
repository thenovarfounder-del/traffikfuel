// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '$97',
      per: '/month',
      description: 'Perfect for solo operators and single-location businesses.',
      features: [
        '1 business location',
        'Social media automation (3x/week)',
        'Google Business Profile management',
        'Local SEO optimization',
        'AI engine optimization',
        'Review generation automation',
        'Monthly performance report',
        'Email support',
      ],
      cta: 'Start Free Trial',
      href: '/signup',
      highlight: false,
    },
    {
      name: 'Pro',
      price: '$197',
      per: '/month',
      description: 'For growing businesses that need more content and deeper SEO.',
      features: [
        'Up to 3 business locations',
        'Social media automation (5x/week)',
        'Google Business Profile management',
        'Advanced local SEO + competitor tracking',
        'AI engine optimization',
        'Review generation + reputation monitoring',
        'Weekly performance reports',
        'Priority email support',
        'Custom brand voice training',
      ],
      cta: 'Start Free Trial',
      href: '/signup',
      highlight: true,
    },
    {
      name: 'Agency',
      price: '$797',
      per: '/month',
      description: 'For marketing agencies managing multiple client accounts.',
      features: [
        'Up to 20 client locations',
        'White-label reporting',
        'Social media automation (daily)',
        'Full local SEO suite per client',
        'AI engine optimization per client',
        'Review generation per client',
        'Dedicated account manager',
        'Agency dashboard',
        'Priority phone support',
      ],
      cta: 'Start Free Trial',
      href: '/signup',
      highlight: false,
    },
    {
      name: 'Enterprise',
      price: '$1,497',
      per: '/month',
      description: 'For large organizations with custom needs and unlimited scale.',
      features: [
        'Unlimited locations',
        'Custom integrations',
        'Full white-label platform',
        'Dedicated success team',
        'Custom AI content training',
        'SLA guarantee',
        'Quarterly strategy reviews',
        'Direct Slack access to team',
      ],
      cta: 'Contact Us',
      href: '/contact',
      highlight: false,
    },
  ]

  const faqs = [
    { q: 'Do I need a credit card to start the free trial?', a: 'No. You can start your 7-day free trial with just your email address. We will never charge you without your permission.' },
    { q: 'Can I cancel anytime?', a: 'Yes. Cancel anytime from your dashboard with one click. No cancellation fees. No questions asked.' },
    { q: 'How long does setup take?', a: 'Most businesses are fully set up in under 10 minutes. You connect your accounts, and Traffikora takes it from there.' },
    { q: 'What platforms does Traffikora post to?', a: 'Traffikora automates Instagram, Facebook, Google Business Profile, and more depending on your plan.' },
    { q: 'Do I have to write any content myself?', a: 'No. Traffikora’s AI writes all of your content automatically based on your business type, location, and brand voice.' },
    { q: 'What is AI engine optimization?', a: 'When someone asks ChatGPT, Claude, Gemini, or Perplexity to recommend a business like yours, Traffikora works to get your business cited in those answers. No other platform does this.' },
    { q: 'Can I upgrade or downgrade my plan?', a: 'Yes. You can change your plan at any time from your account settings. Changes take effect immediately.' },
    { q: 'Is there a contract or commitment?', a: 'No contracts. Traffikora is month-to-month. Pay as you go and cancel whenever you want.' },
  ]

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      {/* HERO */}
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Simple Pricing</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>One price. Every channel. Zero effort.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '580px', margin: '0 auto 16px' }}>Start free for 7 days. No credit card required. Cancel anytime.</p>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#888' }}>Join hundreds of local businesses growing on autopilot.</p>
      </section>

      {/* PRICING CARDS */}
      <section style={{ background: '#f9f9f9', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {plans.map((plan) => (
            <div key={plan.name} style={{
              background: plan.highlight ? '#111' : '#fff',
              border: plan.highlight ? '2.5px solid #E8610A' : '2.5px solid #111',
              padding: '36px 28px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}>
              {plan.highlight && (
                <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#E8610A', color: '#fff', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', padding: '4px 16px', textTransform: 'uppercase' }}>Most Popular</div>
              )}
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '8px' }}>{plan.name}</p>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: plan.highlight ? '#fff' : '#111' }}>{plan.price}</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: plan.highlight ? '#aaa' : '#666' }}>{plan.per}</span>
              </div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: plan.highlight ? '#bbb' : '#555', marginBottom: '24px', lineHeight: 1.5 }}>{plan.description}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px', flex: 1 }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: plan.highlight ? '#ddd' : '#333', marginBottom: '10px', paddingLeft: '20px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#E8610A', fontWeight: 700 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={plan.href} style={{
                background: plan.highlight ? '#E8610A' : '#111',
                color: '#fff',
                padding: '14px 24px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 700,
                border: plan.highlight ? '2.5px solid #E8610A' : '2.5px solid #111',
                display: 'block',
                textAlign: 'center',
              }}>{plan.cta}</Link>
            </div>
          ))}
        </div>
      </section>

      {/* GUARANTEE */}
      <section style={{ background: '#fff', padding: '64px 32px', textAlign: 'center', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p style={{ fontSize: '40px', marginBottom: '16px' }}>🛡️</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 900, color: '#111', marginBottom: '16px' }}>7-Day Free Trial. No Risk. No Credit Card.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.7 }}>Try Traffikora completely free for 7 days. If it is not the best marketing decision you have made for your business, cancel with one click. You will not be charged a single dollar.</p>
        </div>
      </section>

      {/* FEATURE COMPARISON */}
      <section style={{ background: '#f9f9f9', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '56px' }}>Everything included. Nothing hidden.</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'DM Sans, sans-serif' }}>
              <thead>
                <tr style={{ background: '#111', color: '#fff' }}>
                  <th style={{ padding: '18px 24px', textAlign: 'left', fontSize: '15px', fontWeight: 700 }}>Feature</th>
                  <th style={{ padding: '18px 24px', textAlign: 'center', fontSize: '14px', fontWeight: 700 }}>Starter</th>
                  <th style={{ padding: '18px 24px', textAlign: 'center', fontSize: '14px', fontWeight: 700, color: '#E8610A' }}>Pro</th>
                  <th style={{ padding: '18px 24px', textAlign: 'center', fontSize: '14px', fontWeight: 700 }}>Agency</th>
                  <th style={{ padding: '18px 24px', textAlign: 'center', fontSize: '14px', fontWeight: 700 }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Locations', '1', 'Up to 3', 'Up to 20', 'Unlimited'],
                  ['Social Posts Per Week', '3x', '5x', 'Daily', 'Custom'],
                  ['Google Business Profile', '✅', '✅', '✅', '✅'],
                  ['Local SEO Automation', '✅', '✅ Advanced', '✅ Full Suite', '✅ Custom'],
                  ['AI Engine Optimization', '✅', '✅', '✅', '✅'],
                  ['Review Generation', '✅', '✅', '✅', '✅'],
                  ['Reputation Monitoring', '❌', '✅', '✅', '✅'],
                  ['Competitor Tracking', '❌', '✅', '✅', '✅'],
                  ['White-Label Reporting', '❌', '❌', '✅', '✅'],
                  ['Dedicated Account Manager', '❌', '❌', '✅', '✅'],
                  ['Custom AI Brand Voice', '❌', '✅', '✅', '✅'],
                  ['Support', 'Email', 'Priority Email', 'Phone + Email', 'Slack + Dedicated'],
                ].map(([feature, starter, pro, agency, enterprise], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? '#fff' : '#f9f9f9', borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '16px 24px', fontSize: '15px', color: '#111', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '16px 24px', fontSize: '14px', color: '#555', textAlign: 'center' }}>{starter}</td>
                    <td style={{ padding: '16px 24px', fontSize: '14px', color: '#111', textAlign: 'center', fontWeight: 600 }}>{pro}</td>
                    <td style={{ padding: '16px 24px', fontSize: '14px', color: '#555', textAlign: 'center' }}>{agency}</td>
                    <td style={{ padding: '16px 24px', fontSize: '14px', color: '#555', textAlign: 'center' }}>{enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '56px' }}>Frequently asked questions.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderTop: '2.5px solid #111', padding: '28px 0' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>{faq.q}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.7 }}>{faq.a}</p>
              </div>
            ))}
            <div style={{ borderTop: '2.5px solid #111' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Start growing today. Free for 7 days.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>No credit card required. Cancel anytime. Set it once and let Traffikora run forever.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
