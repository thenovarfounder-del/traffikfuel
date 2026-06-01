const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\reset-password\\page.tsx';

const content = `// @ts-nocheck
'use client'

import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export default function ResetPasswordPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleReset = async () => {
    if (!password || password.length < 8) {
      setError('Password must be at least 8 characters.')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    setError('')
    setMessage('')
    const { error: updateError } = await supabase.auth.updateUser({ password })
    setLoading(false)
    if (updateError) {
      setError(updateError.message)
    } else {
      setMessage('Password updated! Redirecting to login...')
      setTimeout(() => { window.location.href = '/login' }, 2500)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#111111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'DM Sans, sans-serif',
      padding: '24px'
    }}>
      <div style={{
        background: '#1a1a1a',
        border: '1px solid #2a2a2a',
        borderRadius: '16px',
        padding: '48px 40px',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 0 40px rgba(232,97,10,0.08)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            fontSize: '32px',
            fontFamily: 'Playfair Display, serif',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '8px'
          }}>
            Traffik<span style={{ color: '#E8610A' }}>ora</span>
          </div>
          <h1 style={{
            fontSize: '22px',
            fontWeight: '600',
            color: '#ffffff',
            margin: '0 0 8px'
          }}>Reset Your Password</h1>
          <p style={{ color: '#888888', fontSize: '14px', margin: 0 }}>
            Choose a strong new password for your account.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', color: '#cccccc', fontSize: '14px', marginBottom: '6px' }}>
              New Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#222222',
                border: '1px solid #333333',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', color: '#cccccc', fontSize: '14px', marginBottom: '6px' }}>
              Confirm Password
            </label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Repeat your new password"
              style={{
                width: '100%',
                padding: '12px 16px',
                background: '#222222',
                border: '1px solid #333333',
                borderRadius: '8px',
                color: '#ffffff',
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {error && (
            <p style={{
              background: 'rgba(220,38,38,0.1)',
              border: '1px solid rgba(220,38,38,0.3)',
              borderRadius: '8px',
              padding: '10px 14px',
              color: '#f87171',
              fontSize: '14px',
              margin: 0
            }}>{error}</p>
          )}

          {message && (
            <p style={{
              background: 'rgba(34,197,94,0.1)',
              border: '1px solid rgba(34,197,94,0.3)',
              borderRadius: '8px',
              padding: '10px 14px',
              color: '#4ade80',
              fontSize: '14px',
              margin: 0
            }}>{message}</p>
          )}

          <button
            onClick={handleReset}
            disabled={loading}
            style={{
              width: '100%',
              padding: '14px',
              background: loading ? '#555555' : 'linear-gradient(135deg, #E8610A, #C84E06)',
              border: 'none',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              marginTop: '4px'
            }}
          >
            {loading ? 'Updating...' : 'Update Password'}
          </button>

          <p style={{ textAlign: 'center', color: '#666666', fontSize: '13px', margin: 0 }}>
            Back to <a href="/login" style={{ color: '#E8610A', textDecoration: 'none' }}>Login</a>
          </p>
        </div>
      </div>
    </div>
  )
}
`;

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: reset-password page written to', filePath);