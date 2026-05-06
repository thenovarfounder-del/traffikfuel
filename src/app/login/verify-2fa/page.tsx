'use client'

import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'next/navigation'

export default function Verify2FAPage() {
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const searchParams = useSearchParams()

  const uid = searchParams.get('uid')
  const last4 = searchParams.get('last4')

  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return
    const newCode = [...code]
    newCode[index] = value.slice(-1)
    setCode(newCode)
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
    if (e.key === 'Enter') handleVerify()
  }

  const handleVerify = async () => {
    const fullCode = code.join('')
    if (fullCode.length !== 6) {
      setError('Please enter the full 6-digit code')
      return
    }

    if (!uid) {
      setError('Session expired. Please login again.')
      return
    }

    setLoading(true)
    setError('')

    const res = await fetch('/api/phone/verify-code', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: uid, code: fullCode })
    })

    const result = await res.json()

    if (result.success) {
      setSuccess(true)
      window.location.href = '/dashboard'
    } else {
      setError('Invalid code. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <div style={{ width: '100%', maxWidth: '420px', padding: '40px', background: '#111', borderRadius: '12px', border: '1px solid #222', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>📱</div>
        <h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Check your phone</h1>
        <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '32px' }}>
          We sent a 6-digit code to your phone ending in <strong style={{ color: 'white' }}>***{last4 || '????'}</strong>
        </p>

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '24px' }}>
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              style={{
                width: '48px',
                height: '56px',
                textAlign: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                background: '#1a1a1a',
                border: '1px solid #333',
                borderRadius: '8px',
                color: 'white',
                outline: 'none'
              }}
            />
          ))}
        </div>

        {error && (
          <div style={{ background: '#2d0000', border: '1px solid #ff4500', borderRadius: '8px', padding: '10px', marginBottom: '16px', color: '#ff6b6b', fontSize: '14px' }}>
            {error}
          </div>
        )}

        {success && (
          <div style={{ background: '#002d00', border: '1px solid #00c853', borderRadius: '8px', padding: '10px', marginBottom: '16px', color: '#69f0ae', fontSize: '14px' }}>
            ✅ Verified! Redirecting...
          </div>
        )}

        <button
          onClick={handleVerify}
          disabled={loading || success}
          style={{ width: '100%', padding: '14px', background: '#ff4500', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', opacity: loading ? 0.7 : 1 }}
        >
          {loading ? 'Verifying...' : 'Verify Code'}
        </button>

        <p style={{ color: '#aaa', fontSize: '14px', marginTop: '24px' }}>
          <a href="/login" style={{ color: '#ff4500' }}>Back to login</a>
        </p>
      </div>
    </div>
  )
}