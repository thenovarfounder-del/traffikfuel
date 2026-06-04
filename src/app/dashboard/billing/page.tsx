// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const PLANS = [
  { key: 'free', name: 'Free', price: '$0', period: '/forever', color: '#94a3b8', features: ['3 AI blog posts/month', 'Content dashboard access', 'No credit card required'] },
  { key: 'starter', name: 'Starter', price: '$47', period: '/mo', color: '#f97316', features: ['Unlimited blog posts', 'Social media content', 'One-Push Publish', 'Content Calendar'] },
  { key: 'pro', name: 'Pro', price: '$97', period: '/mo', color: '#f97316', features: ['Everything in Starter', 'AI Agents running 24/7', 'Auto Mode', 'TikTok + YouTube', 'AI SEO'] },
  { key: 'agency', name: 'Agency', price: '$297', period: '/mo', color: '#3b82f6', features: ['Everything in Pro', '10 client accounts', 'White-label dashboard', 'Client management portal'] },
  { key: 'enterprise', name: 'Enterprise', price: '$997', period: '/mo', color: '#a855f7', features: ['Everything in Agency', 'Unlimited clients', 'Custom AI training', 'Dedicated account manager'] }
]

export default function Billing() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [userPlan, setUserPlan] = useState('free')
  const [loading, setLoading] = useState(true)
  const [upgrading, setUpgrading] = useState(false)
  const [portalLoading, setPortalLoading] = useState(false)
  const [portalError, setPortalError] = useState('')

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setUser(user)
      const { data } = await supabase.from('users').select('status').eq('id', user.id).single()
      if (data?.status) setUserPlan(data.status)
      setLoading(false)
    }
    load()
  }, [])

  async function handleUpgrade(planKey) {
    if (planKey === 'free' || planKey === userPlan) return
    setUpgrading(true)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan: planKey, email: user.email, userId: user.id })
      })
      const result = await res.json()
      if (result.url) {
        window.location.href = result.url
      }
    } catch (err) {
      console.error(err)
    }
    setUpgrading(false)
  }

  const currentPlan = PLANS.find(p => p.key === userPlan) || PLANS[0]

  if (loading) return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ color: '#f97316', fontSize: '14px' }}>Loading billing info...</div>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <button onClick={() => router.push('/dashboard')} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '13px', marginBottom: '20px', padding: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
            ← Back to Dashboard
          </button>
          <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>Billing</div>
          <h1 style={{ fontSize: '36px', fontWeight: '300', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
            Your Plan<span style={{ color: '#f97316' }}>.</span>
          </h1>
          <p style={{ color: '#64748b', margin: 0, fontSize: '14px' }}>Manage your subscription and billing details.</p>
        </div>

        {/* Current Plan Card */}
        <div style={{ backgroundColor: '#111', borderRadius: '16px', border: '1px solid ' + currentPlan.color + '40', padding: '32px', marginBottom: '40px', background: 'linear-gradient(135deg, #111 0%, #0f0a00 100%)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '11px', color: currentPlan.color, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>Current Plan</div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{currentPlan.name}</div>
              <div style={{ fontSize: '24px', color: currentPlan.color, fontWeight: '700' }}>{currentPlan.price}<span style={{ fontSize: '14px', color: '#64748b' }}>{currentPlan.period}</span></div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {currentPlan.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#ddd' }}>
                  <span style={{ color: currentPlan.color, fontWeight: '700' }}>✓</span> {f}
                </div>
              ))}
            </div>
            {userPlan !== 'free' && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                <button onClick={async () => {
                  setPortalLoading(true)
                  setPortalError('')
                  try {
                    const res = await fetch('/api/stripe/portal', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId: user.id, email: user.email }) })
                    const data = await res.json()
                    if (data.url) { window.location.href = data.url }
                    else { setPortalError(data.error || 'Could not open billing portal') }
                  } catch (err) { setPortalError('Connection error. Please try again.') }
                  setPortalLoading(false)
                }} disabled={portalLoading} style={{ display: 'inline-block', padding: '12px 24px', borderRadius: '10px', border: '1px solid #2a2a2a', color: '#fff', fontSize: '13px', fontWeight: '600', backgroundColor: '#1a1a1a', cursor: portalLoading ? 'not-allowed' : 'pointer', fontFamily: 'system-ui, sans-serif' }}>
                  {portalLoading ? 'Opening...' : 'Manage Billing →'}
                </button>
                {portalError && <div style={{ fontSize: '12px', color: '#f87171', fontFamily: 'system-ui, sans-serif' }}>{portalError}</div>}
              </div>
            )}
          </div>
        </div>

        {/* Upgrade Options */}
        {userPlan !== 'enterprise' && (
          <>
            <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px' }}>
              {userPlan === 'free' ? 'Upgrade Your Plan' : 'Available Upgrades'}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
              {PLANS.filter(p => p.key !== 'free' && p.key !== userPlan).map(plan => (
                <div key={plan.key} style={{ backgroundColor: '#111', borderRadius: '16px', border: '1px solid #1a1a1a', padding: '24px 20px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>{plan.name}</div>
                  <div style={{ fontSize: '28px', fontWeight: '700', color: '#fff', marginBottom: '2px' }}>{plan.price}</div>
                  <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>{plan.period}</div>
                  <div style={{ flex: 1, marginBottom: '20px' }}>
                    {plan.features.slice(0, 3).map(f => (
                      <div key={f} style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '6px', display: 'flex', gap: '6px' }}>
                        <span style={{ color: plan.color }}>+</span> {f}
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => handleUpgrade(plan.key)}
                    disabled={upgrading}
                    style={{ width: '100%', padding: '12px', borderRadius: '10px', border: 'none', background: 'linear-gradient(135deg, ' + plan.color + ', ' + plan.color + 'cc)', color: '#fff', fontSize: '13px', fontWeight: '700', cursor: upgrading ? 'not-allowed' : 'pointer' }}>
                    {upgrading ? 'Loading...' : 'Upgrade →'}
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Free plan CTA */}
        {userPlan === 'free' && (
          <div style={{ marginTop: '40px', backgroundColor: '#f9731610', border: '1px solid #f9731630', borderRadius: '16px', padding: '28px', textAlign: 'center' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>Ready to go unlimited?</div>
            <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>Start with Starter at $47/mo and publish unlimited content today.</div>
            <button onClick={() => handleUpgrade('starter')} style={{ padding: '14px 32px', borderRadius: '12px', border: 'none', background: 'linear-gradient(135deg, #f97316, #ea6a0a)', color: '#fff', fontSize: '15px', fontWeight: '700', cursor: 'pointer' }}>
              Upgrade to Starter →
            </button>
          </div>
        )}

      </div>
    </div>
  )
}
