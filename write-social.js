const fs = require('fs');

const content = `// @ts-nocheck
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [business, setBusiness] = useState('')
  const [plan, setPlan] = useState('starter')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const plans = [
    { id: 'starter', label: 'Starter', price: '$97/mo', description: 'Perfect for solo operators and single-location businesses.' },
    { id: 'pro', label: 'Pro', price: '$197/mo', description: 'For growing businesses that want more automation and reporting.' },
    { id: 'agency', label: 'Agency', price: '$797/mo', description: 'Manage up to 10 client locations from one dashboard.' },
    { id: 'enterprise', label: 'Enterprise', price: '$1,497/mo', description: 'Unlimited locations, dedicated support, and custom onboarding.' },
  ]

  async function handleSubmit() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name, business, plan })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      window.location.href = '/dashboard'
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    fontSize: '16px',
    border: '2.5px solid #111',
    outline: 'none',
    fontFamily: 'DM Sans, sans-serif',
    marginBottom: '16px',
    boxSizing: 'border-box' as const,
    background: '#fff',
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '70px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Get Started</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, maxWidth: '700px', margin: '0 auto 16px' }}>Start Your Free 7-Day Trial</h1>
        <p style={{ fontSize: '18px', color: '#ccc', maxWidth: '500px', margin: '0 auto' }}>No credit card required. Cancel anytime. Setup takes under 5 minutes.</p>
      </section>

      <section style={{ background: '#f9f9f9', padding: '80px 32px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', background: '#fff', border: '2.5px solid #111', padding: '48px' }}>

          {/* STEP INDICATOR */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
            {[1, 2, 3].map(s => (
              <div key={s} style={{ flex: 1, height: '4px', background: step >= s ? '#E8610A' : '#eee' }} />
            ))}
          </div>

          {/* STEP 1 — ACCOUNT */}
          {step === 1 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 900, marginBottom: '8px' }}>Create Your Account</h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#666', marginBottom: '28px' }}>Step 1 of 3</p>
              <input style={inputStyle} type="text" placeholder="Your Full Name" value={name} onChange={e => setName(e.target.value)} />
              <input style={inputStyle} type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
              <input style={inputStyle} type="password" placeholder="Create Password" value={password} onChange={e => setPassword(e.target.value)} />
              <button
                onClick={() => { if (name && email && password) setStep(2); else setError('Please fill in all fields.') }}
                style={{ width: '100%', background: '#E8610A', color: '#fff', padding: '16px', fontSize: '17px', fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}
              >Continue</button>
              {error && <p style={{ color: 'red', marginTop: '12px', fontSize: '14px' }}>{error}</p>}
            </div>
          )}

          {/* STEP 2 — BUSINESS */}
          {step === 2 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 900, marginBottom: '8px' }}>About Your Business</h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#666', marginBottom: '28px' }}>Step 2 of 3</p>
              <input style={inputStyle} type="text" placeholder="Business Name" value={business} onChange={e => setBusiness(e.target.value)} />
              <button
                onClick={() => { if (business) setStep(3); else setError('Please enter your business name.') }}
                style={{ width: '100%', background: '#E8610A', color: '#fff', padding: '16px', fontSize: '17px', fontWeight: 700, border: 'none', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}
              >Continue</button>
              <button onClick={() => setStep(1)} style={{ width: '100%', background: 'transparent', color: '#111', padding: '12px', fontSize: '15px', border: 'none', cursor: 'pointer', marginTop: '8px', fontFamily: 'DM Sans, sans-serif' }}>Back</button>
              {error && <p style={{ color: 'red', marginTop: '12px', fontSize: '14px' }}>{error}</p>}
            </div>
          )}

          {/* STEP 3 — PLAN */}
          {step === 3 && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 900, marginBottom: '8px' }}>Choose Your Plan</h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#666', marginBottom: '28px' }}>Step 3 of 3 — Free for 7 days, then billed monthly.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {plans.map(p => (
                  <div
                    key={p.id}
                    onClick={() => setPlan(p.id)}
                    style={{ border: plan === p.id ? '2.5px solid #E8610A' : '2.5px solid #ddd', padding: '16px 20px', cursor: 'pointer', background: plan === p.id ? '#fff8f5' : '#fff' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '16px' }}>{p.label}</span>
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 700, fontSize: '16px', color: '#E8610A' }}>{p.price}</span>
                    </div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#666', marginTop: '4px' }}>{p.description}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{ width: '100%', background: '#E8610A', color: '#fff', padding: '16px', fontSize: '17px', fontWeight: 700, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', opacity: loading ? 0.7 : 1 }}
              >{loading ? 'Creating your account...' : 'Start Free Trial'}</button>
              <button onClick={() => setStep(2)} style={{ width: '100%', background: 'transparent', color: '#111', padding: '12px', fontSize: '15px', border: 'none', cursor: 'pointer', marginTop: '8px', fontFamily: 'DM Sans, sans-serif' }}>Back</button>
              {error && <p style={{ color: 'red', marginTop: '12px', fontSize: '14px' }}>{error}</p>}
            </div>
          )}

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#999', textAlign: 'center', marginTop: '24px' }}>Already have an account? <Link href="/login" style={{ color: '#E8610A', textDecoration: 'none', fontWeight: 600 }}>Log in</Link></p>
        </div>
      </section>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync('src/app/signup/page.tsx', content);
console.log('Written: src/app/signup/page.tsx');