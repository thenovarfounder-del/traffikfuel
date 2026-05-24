// @ts-nocheck
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const PLANS = [
  { name: 'Starter', price: '$97/mo', priceId: 'price_1TUvcsHuRIVTwN2fMNH7SjRh' },
  { name: 'Pro', price: '$197/mo', priceId: 'price_1TUve7HuRIVTwN2fYvrd1UgG' },
  { name: 'Agency', price: '$797/mo', priceId: 'price_1TUvfKHuRIVTwN2fzlinyhei' },
  { name: 'Enterprise', price: '$1,497/mo', priceId: 'price_1TUvgSHuRIVTwN2fhUwmR6Kb' },
]

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [business, setBusiness] = useState('')
  const [selectedPlan, setSelectedPlan] = useState(PLANS[1])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleFinalSubmit() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, business }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Signup failed')

      const stripeRes = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: selectedPlan.priceId, email }),
      })
      const stripeData = await stripeRes.json()
      if (!stripeRes.ok) throw new Error(stripeData.error || 'Stripe error')

      window.location.href = stripeData.url
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Get Started</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Start Your Free 7-Day Trial</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>No credit card charged today. Cancel anytime.</p>
      </section>

      <section style={{ padding: '80px 32px', maxWidth: '560px', margin: '0 auto' }}>

        {step === 1 && (
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>Step 1 — Your Info</h2>
            <input placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} style={{ width: '100%', padding: '14px', fontSize: '16px', border: '2.5px solid #111', marginBottom: '16px', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
            <input placeholder="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} style={{ width: '100%', padding: '14px', fontSize: '16px', border: '2.5px solid #111', marginBottom: '16px', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
            <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '14px', fontSize: '16px', border: '2.5px solid #111', marginBottom: '24px', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
            <button onClick={() => setStep(2)} style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', cursor: 'pointer', width: '100%' }}>Continue</button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>Step 2 — Your Business</h2>
            <input placeholder="Business Name" value={business} onChange={e => setBusiness(e.target.value)} style={{ width: '100%', padding: '14px', fontSize: '16px', border: '2.5px solid #111', marginBottom: '24px', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
            <button onClick={() => setStep(3)} style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', cursor: 'pointer', width: '100%' }}>Continue</button>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, marginBottom: '32px' }}>Step 3 — Choose Your Plan</h2>
            {PLANS.map(plan => (
              <div key={plan.priceId} onClick={() => setSelectedPlan(plan)} style={{ border: selectedPlan.priceId === plan.priceId ? '2.5px solid #E8610A' : '2.5px solid #111', padding: '20px', marginBottom: '16px', cursor: 'pointer', background: selectedPlan.priceId === plan.priceId ? '#fff8f5' : '#fff' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '18px', margin: 0 }}>{plan.name} — {plan.price}</p>
              </div>
            ))}
            {error && <p style={{ color: 'red', marginBottom: '16px' }}>{error}</p>}
            <button onClick={handleFinalSubmit} disabled={loading} style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', cursor: 'pointer', width: '100%' }}>
              {loading ? 'Processing...' : 'Start Free Trial →'}
            </button>
          </div>
        )}

      </section>

      <Footer />
    </>
  )
}
