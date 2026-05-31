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
    name: 'Pro',
    price: '$197',
    period: '/month',
    description: 'Full automation for serious business owners.',
    features: ['Blog + social automation', 'WordPress publishing', 'Content calendar', 'One-Push publish', 'Business profile', 'Priority support'],
    color: '#f97316',
    current: true
  },
  {
    name: 'Premium',
    price: '$397',
    period: '/month',
    description: 'AI Agents that run your marketing 24/7.',
    features: ['Everything in Pro', 'AI Content Strategist agent', 'AI Content Creator agent', 'AI Publisher agent', 'AI Performance Monitor', 'Agent dashboard'],
    color: '#a855f7',
    current: false
  }
]

export default function Billing() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentPlan, setCurrentPlan] = useState('Pro')

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    load()
  }, [])

  if (loading) return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>Loading...</div>
  )

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', padding: '40px 32px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

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
              <button style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #333', backgroundColor: 'transparent', color: '#94a3b8', cursor: 'pointer', fontSize: '14px' }}>
                Cancel Plan
              </button>
              <button style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#f97316', color: '#fff', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>
                Manage Billing
              </button>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 20px 0' }}>Available Plans</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {PLANS.map(plan => (
              <div key={plan.name} style={{ backgroundColor: '#111', borderRadius: '12px', border: plan.current ? '2px solid #f97316' : '1px solid #1f1f1f', padding: '28px', position: 'relative' }}>
                {plan.current && (
                  <div style={{ position: 'absolute', top: '-12px', left: '20px', backgroundColor: '#f97316', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '12px', textTransform: 'uppercase' }}>Current Plan</div>
                )}
                {!plan.current && (
                  <div style={{ position: 'absolute', top: '-12px', left: '20px', backgroundColor: '#a855f7', color: '#fff', fontSize: '11px', fontWeight: '700', padding: '3px 12px', borderRadius: '12px', textTransform: 'uppercase' }}>Coming Soon</div>
                )}
                <div style={{ marginBottom: '16px' }}>
                  <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '4px' }}>{plan.name}</div>
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>{plan.description}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '36px', fontWeight: '800', color: plan.color }}>{plan.price}</span>
                  <span style={{ fontSize: '14px', color: '#94a3b8' }}>{plan.period}</span>
                </div>
                <div style={{ marginBottom: '24px' }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', fontSize: '14px', color: '#e2e8f0' }}>
                      <span style={{ color: plan.color, fontSize: '16px' }}>+</span>
                      {f}
                    </div>
                  ))}
                </div>
                <button style={{ width: '100%', padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: plan.current ? '#1a1a1a' : plan.color, color: plan.current ? '#94a3b8' : '#fff', cursor: plan.current ? 'default' : 'pointer', fontSize: '14px', fontWeight: '600' }}>
                  {plan.current ? 'Current Plan' : 'Upgrade to Premium'}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px', marginTop: '32px' }}>
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
