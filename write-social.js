const fs = require('fs')
const path = require('path')

const content = `// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// ─── Password strength checker ────────────────────────────────
function getPasswordStrength(password) {
  const checks = {
    length:    password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number:    /[0-9]/.test(password),
    special:   /[^A-Za-z0-9]/.test(password),
  }
  const score = Object.values(checks).filter(Boolean).length
  const strength =
    score <= 1 ? { label: 'Very Weak', color: '#ef4444', width: '10%' } :
    score === 2 ? { label: 'Weak',      color: '#f97316', width: '30%' } :
    score === 3 ? { label: 'Fair',      color: '#eab308', width: '55%' } :
    score === 4 ? { label: 'Strong',    color: '#22c55e', width: '80%' } :
                  { label: 'Very Strong', color: '#16a34a', width: '100%' }
  return { checks, score, ...strength }
}

export default function Signup() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [plan, setPlan] = useState('free')
  const [showPassword, setShowPassword] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    businessName: '',
    industry: '',
    city: ''
  })

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const p = params.get('plan')
    if (p) setPlan(p)
  }, [])

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const strength = getPasswordStrength(form.password)
  const passwordReady = strength.score >= 4

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
        await supabase.from('users').upsert({
          id: data.user.id,
          full_name: form.fullName,
          email: form.email,
          status: 'free',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        }, { onConflict: 'id' })

        await supabase.from('business_profiles').insert({
          user_id: data.user.id,
          business_name: form.businessName,
          industry: form.industry,
          city: form.city,
          phone: form.phone
        })

        if (plan === 'free') {
          router.push('/check-email')
        } else {
          const res = await fetch('/api/stripe/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ plan, email: form.email, userId: data.user.id })
          })
          const result = await res.json()
          if (result.url) {
            window.location.href = result.url
          } else {
            throw new Error(result.error || 'Checkout failed')
          }
        }
      }
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  const planLabels = {
    free: 'Free Plan',
    starter: 'Starter \u2014 $47/mo',
    pro: 'Pro \u2014 $97/mo',
    agency: 'Agency \u2014 $297/mo',
    enterprise: 'Enterprise \u2014 $997/mo'
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

  const requirementItem = (met, text) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: met ? '#22c55e' : '#64748b', fontFamily: 'system-ui, sans-serif', transition: 'color 0.2s' }}>
      <span style={{ fontSize: '14px' }}>{met ? '\u2713' : '\u25cb'}</span>
      {text}
    </div>
  )

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
              <span style={{ fontSize: '11px', color: '#f97316', verticalAlign: 'super' }}>\u2122</span>
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
          {plan !== 'free' && (
            <div style={{ backgroundColor: '#f9731615', border: '1px solid #f9731640', borderRadius: '12px', padding: '16px 20px', marginBottom: '32px', fontFamily: 'system-ui, sans-serif' }}>
              <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Selected Plan</div>
              <div style={{ fontSize: '18px', color: '#fff', fontWeight: '700' }}>{planLabels[plan]}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>You\u2019ll be taken to secure checkout after signup</div>
            </div>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { icon: '\u26a1', text: 'Live in under 5 minutes' },
              { icon: '\ud83e\udd16', text: 'AI agents running 24/7' },
              { icon: '\ud83d\udee1', text: 'Free plan \u2014 no credit card needed' },
              { icon: '\u2715', text: 'Cancel anytime, one click' }
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#f9731615', border: '1px solid #f9731630', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>{item.icon}</div>
                <span style={{ fontSize: '14px', color: '#94a3b8', fontFamily: 'system-ui, sans-serif' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ fontSize: '13px', color: '#2a2a2a', fontFamily: 'system-ui, sans-serif' }}>\u00a9 2026 Traffikora. All rights reserved.</div>
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
            <div style={{ fontSize: '12px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', fontFamily: 'system-ui, sans-serif' }}>Step {step} of 2</div>
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

              {/* PASSWORD WITH STRENGTH METER */}
              <div>
                <label style={labelStyle}>Password</label>
                <div style={{ position: 'relative' }}>
                  <input
                    style={{ ...inputStyle, paddingRight: '52px' }}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Min 8 characters"
                    value={form.password}
                    onChange={e => update('password', e.target.value)}
                    onFocus={() => setPasswordFocused(true)}
                    onBlur={() => setPasswordFocused(false)}
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '18px', padding: 0, lineHeight: 1 }}>
                    {showPassword ? '\ud83d\ude48' : '\ud83d\udc41'}
                  </button>
                </div>

                {/* Strength bar */}
                {form.password.length > 0 && (
                  <div style={{ marginTop: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '11px', color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>Password strength</span>
                      <span style={{ fontSize: '11px', fontWeight: '700', color: strength.color, fontFamily: 'system-ui, sans-serif' }}>{strength.label}</span>
                    </div>
                    <div style={{ height: '4px', background: '#1a1a1a', borderRadius: '99px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: strength.width, background: strength.color, borderRadius: '99px', transition: 'width 0.3s, background 0.3s' }} />
                    </div>
                  </div>
                )}

                {/* Requirements checklist */}
                {(passwordFocused || form.password.length > 0) && (
                  <div style={{ marginTop: '12px', background: '#0f0f0f', border: '1px solid #1e1e1e', borderRadius: '10px', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {requirementItem(strength.checks.length,    'At least 8 characters')}
                    {requirementItem(strength.checks.uppercase, 'One uppercase letter (A-Z)')}
                    {requirementItem(strength.checks.lowercase, 'One lowercase letter (a-z)')}
                    {requirementItem(strength.checks.number,    'One number (0-9)')}
                    {requirementItem(strength.checks.special,   'One special character (!@#$%...)')}
                  </div>
                )}
              </div>

              <div>
                <label style={labelStyle}>Phone Number</label>
                <input style={inputStyle} placeholder="+1 (305) 555-1234" value={form.phone} onChange={e => update('phone', e.target.value)} />
              </div>

              <button
                onClick={() => {
                  if (!form.fullName || !form.email || !form.password) { setError('Please fill in all fields'); return }
                  if (!passwordReady) { setError('Please create a stronger password — use 8+ characters with uppercase, lowercase, number and special character.'); return }
                  setError('')
                  setStep(2)
                }}
                style={{ width: '100%', padding: '16px', borderRadius: '12px', border: 'none', background: passwordReady ? 'linear-gradient(135deg, #f97316, #ea6a0a)' : '#1a1a1a', color: passwordReady ? '#fff' : '#555', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'system-ui, sans-serif', letterSpacing: '0.02em', transition: 'all 0.2s' }}>
                Continue \u2192
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
                {loading ? 'Creating your account...' : plan === 'free' ? 'Start Free Today \u2192' : 'Continue to Checkout \u2192'}
              </button>
              <button onClick={() => setStep(1)} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #1a1a1a', backgroundColor: 'transparent', color: '#64748b', fontSize: '14px', cursor: 'pointer', fontFamily: 'system-ui, sans-serif' }}>
                \u2190 Back
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
`

fs.writeFileSync(path.join('src', 'app', 'signup', 'page.tsx'), content)
console.log('SUCCESS: signup/page.tsx — password strength meter added')