// @ts-nocheck
'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const PLANS = [
  {
    name: 'Starter',
    price: '$97',
    period: '/month',
    description: 'Perfect for solo business owners ready to automate their marketing.',
    features: ['Blog + social automation', 'Google SEO tools', '1 website connected', 'AI content generation', '7-day free trial'],
    color: '#94a3b8',
    current: false
  },
  {
    name: 'Pro',
    price: '$197',
    period: '/month',
    description: 'Full automation for serious business owners who want it all.',
    features: ['Everything in Starter', 'TikTok + YouTube push', 'AI engine optimization', 'Reddit amplifier', 'Priority support'],
    color: '#f97316',
    current: true
  },
  {
    name: 'Agency',
    price: '$797',
    period: '/month',
    description: 'Manage multiple clients from one powerful dashboard.',
    features: ['Everything in Pro', 'Up to 10 client accounts', 'White-label reports', 'Client management tools', 'Dedicated support'],
    color: '#3b82f6',
    current: false
  },
  {
    name: 'Enterprise',
    price: '$1,497',
    period: '/month',
    description: 'For large agencies scaling across many clients at once.',
    features: ['Everything in Agency', 'Unlimited client accounts', 'Custom integrations', 'SLA guarantee', 'Dedicated account manager'],
    color: '#a855f7',
    current: false
  }
]

export default function Billing() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>Loading...</div>
  )

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', padding: '40px 32px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 8px 0' }}>Billing</h1>
          <p style={{ color: '#94a3b8', margin: 0 }}>Manage your subscription and billing information</p>
        </div>

        <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Current Plan</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '24px', fontWeight: '700' }}>Pro Plan</span>
                <span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', backgroundColor: '#f9731622', color: '#f97316' }}>Active</span>
              </div>
              <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>$197/month -- Next billing date: June 30, 2026</div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #333', backgroundColor: 'transparent', color: '#94a3b8', cursor: 'pointer', fontSize: '14px' }}>Cancel Plan</button>
              <button style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#f97316', color: '#fff', cursor: 'not-allowed', fontSize: '14px', fontWeight: '600', opacity: '0.6' }}>Manage Billing (Phase 4)</button>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 20px 0' }}>Available Plans</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {PLANS.map(plan => (
              <div key={plan.name} style={{ backgroundColor: '#111', borderRadius: '12px', border: plan.current ? '2px solid #f97316' : '1px solid #1f1f1f', padding: '24px', position: 'relative' }}>
                {plan.current && (
                  <div style={{ position: 'absolute', top: '-12px', left: '20px', backgroundColor: '#f97316', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '12px', textTransform: 'uppercase' }}>Current Plan</div>
                )}
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>{plan.name}</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', lineHeight: '1.4' }}>{plan.description}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '28px', fontWeight: '800', color: plan.color }}>{plan.price}</span>
                  <span style={{ fontSize: '13px', color: '#94a3b8' }}>{plan.period}</span>
                </div>
                <div style={{ marginBottom: '20px' }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px', fontSize: '13px', color: '#e2e8f0' }}>
                      <span style={{ color: plan.color, fontSize: '14px', marginTop: '1px' }}>+</span>
                      {f}
                    </div>
                  ))}
                </div>
                <button style={{ width: '100%', padding: '10px', borderRadius: '8px', border: 'none', backgroundColor: plan.current ? '#1a1a1a' : plan.color, color: plan.current ? '#94a3b8' : '#fff', cursor: plan.current ? 'default' : 'pointer', fontSize: '13px', fontWeight: '600' }}
                  onClick={() => { if (!plan.current) window.location.href = 'https://www.traffikora.com/pricing' }}>
                  {plan.current ? 'Current Plan' : 'Upgrade'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 20px 0' }}>Billing History</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '12px', fontSize: '12px', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', marginBottom: '12px', padding: '0 4px' }}>
            <span>Date</span><span>Description</span><span>Amount</span><span>Status</span>
          </div>
          {[
            { date: 'May 31, 2026', desc: 'Pro Plan -- Monthly', amount: '$197.00', status: 'Paid' },
            { date: 'Apr 30, 2026', desc: 'Pro Plan -- Monthly', amount: '$197.00', status: 'Paid' },
            { date: 'Mar 31, 2026', desc: 'Pro Plan -- Monthly', amount: '$197.00', status: 'Paid' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '12px', padding: '14px 4px', borderTop: '1px solid #1f1f1f', fontSize: '14px', alignItems: 'center' }}>
              <span style={{ color: '#94a3b8' }}>{row.date}</span>
              <span>{row.desc}</span>
              <span style={{ fontWeight: '600' }}>{row.amount}</span>
              <span style={{ color: '#22c55e', fontWeight: '600' }}>{row.status}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
