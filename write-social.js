const fs = require('fs');
const path = require('path');

const filePath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\reset-password\\page.tsx');

const content = `// @ts-nocheck
'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function ResetPasswordPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://www.traffikora.com/update-password',
    })
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSubmitted(true)
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'Inter, sans-serif', padding: '24px' }}>
      <a href="/" style={{ marginBottom: '48px', textDecoration: 'none' }}>
        <span style={{ fontSize: '28px', fontWeight: '800', color: '#fff', letterSpacing: '-0.5px' }}>
          Traffik<span style={{ color: '#E8610A' }}>ora</span>
        </span>
      </a>
      <div style={{ background: '#111111', border: '1px solid #1f1f1f', borderRadius: '16px', padding: '48px 40px', width: '100%', maxWidth: '440px', boxShadow: '0 0 60px rgba(232,97,10,0.08)' }}>
        {!submitted ? (
          <>
            <div style={{ marginBottom: '32px' }}>
              <h1 style={{ color: '#ffffff', fontSize: '26px', fontWeight: '700', margin: '0 0 10px 0' }}>Forgot your password?</h1>
              <p style={{ color: '#6b7280', fontSize: '15px', margin: '0', lineHeight: '1.6' }}>Enter your email and we\u2019ll send you a secure reset link.</p>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', color: '#9ca3af', fontSize: '13px', fontWeight: '500', marginBottom: '8px', textTransform: 'uppercase' }}>Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && email && handleSubmit()}
                style={{ width: '100%', padding: '13px 16px', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '10px', color: '#ffffff', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            {error && (
              <div style={{ background: '#1f0a0a', border: '1px solid #7f1d1d', borderRadius: '8px', padding: '12px 14px', marginBottom: '16px' }}>
                <p style={{ color: '#f87171', fontSize: '13px', margin: '0' }}>{error}</p>
              </div>
            )}
            <button
              onClick={handleSubmit}
              disabled={loading || !email}
              style={{ width: '100%', padding: '14px', background: loading || !email ? '#1f1f1f' : 'linear-gradient(135deg, #E8610A, #C84E06)', border: 'none', borderRadius: '10px', color: loading || !email ? '#555' : '#fff', fontSize: '15px', fontWeight: '700', cursor: loading || !email ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'Sending...' : 'Send Reset Link \u2192'}
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{ width: '64px', height: '64px', background: 'linear-gradient(135deg, #E8610A, #C84E06)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto', fontSize: '28px' }}>&#128235;</div>
            <h2 style={{ color: '#ffffff', fontSize: '22px', fontWeight: '700', margin: '0 0 12px 0' }}>Check your inbox</h2>
            <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: '1.7', margin: '0' }}>
              We sent a reset link to<br />
              <span style={{ color: '#E8610A', fontWeight: '600' }}>{email}</span>
            </p>
            <p style={{ color: '#4b5563', fontSize: '13px', marginTop: '20px' }}>Didn\u2019t get it? Check your spam folder.</p>
          </div>
        )}
        <div style={{ borderTop: '1px solid #1f1f1f', marginTop: '32px', paddingTop: '24px', textAlign: 'center' }}>
          <a href="/login" style={{ color: '#E8610A', fontSize: '14px', textDecoration: 'none', fontWeight: '500' }}>\u2190 Back to login</a>
        </div>
      </div>
      <p style={{ color: '#374151', fontSize: '13px', marginTop: '32px' }}>\u00a9 2026 Traffikora. All rights reserved.</p>
    </div>
  )
}
`;

fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: reset-password/page.tsx written');