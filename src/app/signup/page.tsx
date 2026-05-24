// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const plans = [
  { name: 'Starter', price: '$97/mo', priceId: 'price_1TUvcsHuRIVTwN2fMNH7SjRh', features: ['1 Location', 'Google + Facebook', 'AI Content', 'Monthly Reports'] },
  { name: 'Pro', price: '$197/mo', priceId: 'price_1TUve7HuRIVTwN2fYvrd1UgG', features: ['3 Locations', 'All Platforms', 'AI Content', 'Weekly Reports', 'Priority Support'] },
  { name: 'Agency', price: '$797/mo', priceId: 'price_1TUvfKHuRIVTwN2fzlinyhei', features: ['25 Locations', 'All Platforms', 'AI Content', 'Daily Reports', 'Dedicated Manager'] },
  { name: 'Enterprise', price: '$1,497/mo', priceId: 'price_1TUvgSHuRIVTwN2fhUwmR6Kb', features: ['Unlimited Locations', 'All Platforms', 'Custom AI', 'Real-time Reports', 'White Glove Service'] },
]

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [business, setBusiness] = useState('')
  const [selectedPlan, setSelectedPlan] = useState(plans[1])
  const [verifyCode, setVerifyCode] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const plan = params.get('plan')
    if (plan) {
      const found = plans.find(p => p.name.toLowerCase() === plan.toLowerCase())
      if (found) setSelectedPlan(found)
    }
  }, [])

  async function handleStep1() {
    setError('')
    if (!name || !email || !password || !phone || !business) { setError('Please fill in all fields.'); return }
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return }
    setLoading(true)
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, business })
    })
    if (!res.ok) {
      const d = await res.json()
      setError(d.error || 'Signup failed. Please try again.')
      setLoading(false)
      return
    }
    setStep(2)
    setLoading(false)
  }

  async function handleStep2() {
    setError('')
    setLoading(true)
    const sendRes = await fetch('/api/verify/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone })
    })
    if (!sendRes.ok) {
      setError('Failed to send code. Check your phone number and try again.')
      setLoading(false)
      return
    }
    setStep(3)
    setLoading(false)
  }

  async function handleVerify() {
    setError('')
    setLoading(true)
    const checkRes = await fetch('/api/verify/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, code: verifyCode })
    })
    if (!checkRes.ok) {
      setError('Invalid code. Please try again.')
      setLoading(false)
      return
    }
    const stripeRes = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId: selectedPlan.priceId, email })
    })
    const stripeData = await stripeRes.json()
    if (stripeData.url) {
      window.location.href = stripeData.url
    } else {
      setError('Payment setup failed. Please try again.')
      setLoading(false)
    }
  }

  const inputStyle = { width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', marginBottom: '16px' }
  const btnStyle = { width: '100%', background: '#E8610A', color: '#fff', padding: '16px', fontSize: '17px', fontWeight: 700, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', opacity: loading ? 0.7 : 1 }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '70px 32px 50px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Get Started</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px' }}>Start Your Free 7-Day Trial</h1>
        <p style={{ fontSize: '18px', color: '#ccc' }}>No credit card charged today. Cancel anytime.</p>
      </section>

      <section style={{ background: '#fff', padding: '60px 32px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '500px' }}>

          {error && <div style={{ background: '#fff0f0', border: '2px solid #e00', color: '#c00', padding: '14px 18px', marginBottom: '24px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px' }}>{error}</div>}

          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, marginBottom: '28px' }}>Step 1 — Your Info</h2>
              <input style={inputStyle} placeholder="Full Name" value={name} onChange={e => setName(e.target.value)} />
              <input style={inputStyle} placeholder="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <input style={inputStyle} placeholder="Password (min 6 characters)" type="password" value={password} onChange={e => setPassword(e.target.value)} />
              <input style={inputStyle} placeholder="Phone Number (e.g. +13055551234)" value={phone} onChange={e => setPhone(e.target.value)} />
              <input style={inputStyle} placeholder="Business Name" value={business} onChange={e => setBusiness(e.target.value)} />
              <button style={btnStyle} onClick={handleStep1} disabled={loading}>{loading ? 'Please wait...' : 'Continue'}</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, marginBottom: '28px' }}>Step 2 — Choose Your Plan</h2>
              {plans.map(plan => (
                <div key={plan.name} onClick={() => setSelectedPlan(plan)} style={{ border: selectedPlan.name === plan.name ? '2.5px solid #E8610A' : '2.5px solid #111', padding: '20px 24px', marginBottom: '16px', cursor: 'pointer', background: selectedPlan.name === plan.name ? '#fff8f4' : '#fff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700 }}>{plan.name}</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', fontWeight: 700, color: '#E8610A' }}>{plan.price}</span>
                  </div>
                  <ul style={{ margin: 0, padding: '0 0 0 18px' }}>
                    {plan.features.map(f => <li key={f} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', marginBottom: '4px' }}>{f}</li>)}
                  </ul>
                </div>
              ))}
              <button style={btnStyle} onClick={handleStep2} disabled={loading}>{loading ? 'Sending code...' : 'Continue — Verify Phone'}</button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, marginBottom: '16px' }}>Step 3 — Verify Your Phone</h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', marginBottom: '28px' }}>We sent a 6-digit code to {phone}. Enter it below.</p>
              <input style={inputStyle} placeholder="6-digit code" value={verifyCode} onChange={e => setVerifyCode(e.target.value)} />
              <button style={btnStyle} onClick={handleVerify} disabled={loading}>{loading ? 'Verifying...' : 'Verify & Go to Payment'}</button>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#999', textAlign: 'center', marginTop: '16px', cursor: 'pointer' }} onClick={handleStep2}>Resend code</p>
            </div>
          )}

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#999', textAlign: 'center', marginTop: '24px' }}>
            Already have an account? <Link href="/login" style={{ color: '#E8610A', fontWeight: 600, textDecoration: 'none' }}>Log in</Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
