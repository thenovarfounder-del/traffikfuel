// @ts-nocheck
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Signup() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    businessName: '',
    industry: '',
    city: ''
  })

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSignup() {
    setLoading(true)
    setError('')
    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: {
            full_name: form.fullName,
            phone: form.phone,
            business_name: form.businessName
          }
        }
      })
      if (signUpError) throw signUpError
      if (data.user) {
        await supabase.from('business_profiles').insert({
          user_id: data.user.id,
          business_name: form.businessName,
          industry: form.industry,
          city: form.city,
          phone: form.phone
        })
        router.push('/dashboard')
      }
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    borderRadius: '12px',
    border: '1px solid #2a2a2a',
    backgroundColor: '#111',
    color: '#fff',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s'
  }

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '8px'
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050505', color: '#fff', fontFamily: "'Georgia', serif", display: 'flex' }}>

      {/* LEFT PANEL */}
      <div style={{ width: '45%', background: 'linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0f0a00 100%)', padding: '60px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRight: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>

        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, #f9731615 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, #f9731608 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div>
          <a href="/" style={{ textDecoration: 'none' }}>
            <div style={{ fontSize: '22px', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px', fontFamily: 'system-ui, sans-serif' }}>
              Traffik<span style={{ color: '#f97316' }}>ora</span>
              <span style={{ fontSize: '11px', color: '#f97316', verticalAlign: 'super' }}>™</span>
            </div>
          </a>
        </div>

        <div>
          <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px', fontFamily: 'system-ui, sans-serif' }}>Start Free Today</div>
          <h1 style={{ fontSize: '42px', fontWeight: '400', lineHeight: '1.2', margin: '0 0 24px 0', color: '#fff' }}>
            Your marketing.<br />
            <em style={{ color: '#f97316', fontStyle: 'italic' }}>Automated forever.</em>
          </h1>
          <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.7', margin: '0 0 48px 0', fontFamily: 'system-ui, sans-serif' }}>
            Join hundreds of businesses letting AI handle their marketing while they focus on what matters most.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { icon: '⚡', text: 'Live in under 5 minutes' },
              { icon: '🤖', text: 'AI agents running 24/7' },
              { icon: '🛡', text: 'Free plan — no card needed' },
              { icon: '✕', text: 'Cancel anytime, one click' }
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#f9731615', border: '1px solid #f9731630', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>{item.icon}</div>
                <span style={{ fontSize: '14px', color: '#94a3b8', fontFamily: 'system-ui, sans-serif' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontSize: '13px', color: '#2a2a2a', fontFamily: 'system-ui, sans-serif' }}>
          © 2026 Traffikora. All rights reserved.
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ flex: 1, padding: '60px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'auto' }}>

        <div style={{ maxWidth: '420px', width: '100%', margin: '0 auto' }}>

          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
              {[1, 2].map(s => (
                <div key={s} style={{ flex: 1, height: '3px', borderRadius: '2px', backgroundColor: step >= s ? '#f97316' : '#1a1a1a', transition: 'background-color 0.3s' }} />
              ))}
            </div>
            <div style={{ fontSize: '12px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', fontFamily: 'system-ui, sans-serif' }}>
              Step {step} of 2
            </div>
            <h2 style={{ fontSize: '28px', fontWeight: '400', margin: '0 0 8px 0' }}>
              {step === 1 ? 'Create your account' : 'Tell us about your business'}
            </h2>
            <p style={{ fontSize: '14px', color: '#64748b', margin: 0, fontFamily: 'system-ui, sans-serif' }}>
              {step === 1 ? 'Your information is encrypted and secure.' : 'This helps us personalize your content.'}
            </p>
          </div>

          {error && (
            <div style={{ backgroundColor: '#ef444415', border: '1px solid #ef4444', borderRadius: '10px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#ef4444', fontFamily: 'system-ui, sans-serif' }}>
              {error}
            </div>
          )}

          {step === 1 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Full Name</label>
                <input style={inputStyle} placeholder="John Smith" value={form.fullName} onChange={e => update('fullName', e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input style={inputStyle} type="email" placeholder="john@yourbusiness.com" value={form.email} onChange={e => update('email', e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Password</label>
                <input style={inputStyle} type="password" placeholder="Min 6 characters" value={form.password} onChange={e => update('password', e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input style={inputStyle} placeholder="+1 (305) 555-1234" value={form.phone} onChange={e => update('phone', e.target.value)} />
              </div>
              <button
                onClick={() => {
                  if (!form.fullName || !form.email || !form.password) { setError('Please fill in all fields'); return }
                  setError('')
                  setStep(2)
                }}
                style={{ width: '100%', padding: '16px', borderRadius: '12px', border: 'none', background: 'linear-gradient(135deg, #f97316, #ea6a0a)', color: '#fff', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.02em' }}>
                Continue →
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={labelStyle}>Business Name</label>
                <input style={inputStyle} placeholder="Acme Marketing Co." value={form.businessName} onChange={e => update('businessName', e.target.value)} />
              </div>
              <div>
                <label style={labelStyle}>Industry</label>
                <select style={{ ...inputStyle, cursor: 'pointer' }} value={form.industry} onChange={e => update('industry', e.target.value)}>
                  <option value="">Select your industry</option>
                  {['Marketing Agency', 'Restaurant', 'Real Estate', 'HVAC', 'Dental', 'Law Firm', 'Salon & Spa', 'Gym & Fitness', 'Auto Repair', 'Med Spa', 'Plumbing', 'Chiropractic', 'Other'].map(i => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </div>
              <div>
                <label style={labelStyle}>City & State</label>
                <input style={inputStyle} placeholder="Fort Pierce, FL" value={form.city} onChange={e => update('city', e.target.value)} />
              </div>
              <button
                onClick={handleSignup}
                disabled={loading}
                style={{ width: '100%', padding: '16px', borderRadius: '12px', border: 'none', background: loading ? '#333' : 'linear-gradient(135deg, #f97316, #ea6a0a)', color: '#fff', fontSize: '15px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.02em' }}>
                {loading ? 'Creating your account...' : 'Start Free Today →'}
              </button>
              <button onClick={() => setStep(1)} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #1a1a1a', backgroundColor: 'transparent', color: '#64748b', fontSize: '14px', cursor: 'pointer', fontFamily: 'system-ui, sans-serif' }}>
                ← Back
              </button>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '28px', fontSize: '13px', color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
            Already have an account?{' '}
            <a href="/login" style={{ color: '#f97316', textDecoration: 'none', fontWeight: '600' }}>Log in</a>
          </div>

        </div>
      </div>
    </div>
  )
}
