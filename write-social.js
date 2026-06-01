const fs = require('fs');
const path = require('path');

const filePath = path.join('C:\\Users\\randy\\traffikora\\src\\app\\reset-password\\page.tsx');

const content = `'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function ResetPasswordPage() {
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
    <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ background: '#111', border: '1px solid #222', borderRadius: '12px', padding: '48px', width: '100%', maxWidth: '420px' }}>
        <h1 style={{ color: '#fff', fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Reset your password</h1>

        {!submitted ? (
          <>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '32px' }}>Enter your email and we'll send you a reset link.</p>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{ width: '100%', padding: '12px 16px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: '#fff', fontSize: '15px', marginBottom: '16px', boxSizing: 'border-box' }}
            />
            {error && <p style={{ color: '#f87171', fontSize: '13px', marginBottom: '12px' }}>{error}</p>}
            <button
              onClick={handleSubmit}
              disabled={loading || !email}
              style={{ width: '100%', padding: '13px', background: loading || !email ? '#333' : '#f97316', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '15px', fontWeight: '600', cursor: loading || !email ? 'not-allowed' : 'pointer' }}
            >
              {loading ? 'Sending...' : 'Send Reset Link'}
            </button>
          </>
        ) : (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📬</div>
            <p style={{ color: '#fff', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>Check your inbox</p>
            <p style={{ color: '#888', fontSize: '14px' }}>We sent a reset link to <strong style={{ color: '#f97316' }}>{email}</strong>. Click the link in the email to set a new password.</p>
          </div>
        )}

        <p style={{ marginTop: '24px', textAlign: 'center', fontSize: '13px', color: '#555' }}>
          <a href="/login" style={{ color: '#f97316', textDecoration: 'none' }}>← Back to login</a>
        </p>
      </div>
    </div>
  )
}
`;

fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: reset-password/page.tsx written');