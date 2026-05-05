'use client'

import { useState, useRef, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function Verify2FAPage() {
  const router = useRouter()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [resending, setResending] = useState(false)
  const [countdown, setCountdown] = useState(60)
  const [error, setError] = useState('')
  const [phone, setPhone] = useState('')
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    const stored = sessionStorage.getItem('2fa_phone')
    if (!stored) { router.push('/login'); return }
    setPhone(stored)
    inputRefs.current[0]?.focus()
  }, [router])

  useEffect(() => {
    if (countdown <= 0) return
    const timer = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [countdown])

  function handleOtpChange(index: number, value: string) {
    if (!/^\d?$/.test(value)) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    if (value && index < 5) inputRefs.current[index + 1]?.focus()
  }

  function handleOtpKeyDown(index: number, e: React.KeyboardEvent) {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  function handleOtpPaste(e: React.ClipboardEvent) {
    e.preventDefault()
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6)
    if (pasted.length === 6) {
      setOtp(pasted.split(''))
      inputRefs.current[5]?.focus()
    }
  }

  async function handleResend() {
    setResending(true)
    setError('')
    try {
      const { data: { user } } = await supabase.auth.getUser()
      const res = await fetch('/api/phone/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, userId: user?.id }),
      })
      if (!res.ok) throw new Error('Failed to resend')
      setCountdown(60)
      setOtp(['', '', '', '', '', ''])
      inputRefs.current[0]?.focus()
    } catch {
      setError('Failed to resend code. Try again.')
    } finally {
      setResending(false)
    }
  }

  async function handleVerify() {
    const code = otp.join('')
    if (code.length !== 6) {
      setError('Please enter the full 6-digit code.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const { data: { user } } = await supabase.auth.getUser()
      const res = await fetch('/api/phone/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code, userId: user?.id }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      sessionStorage.removeItem('2fa_phone')
      router.push('/dashboard')
    } catch (err: any) {
      setError(err.message || 'Invalid code. Try again.')
      setOtp(['', '', '', '', '', ''])
      inputRefs.current[0]?.focus()
    } finally {
      setLoading(false)
    }
  }

  const maskedPhone = phone ? phone.slice(0, -4).replace(/\d/g, '•') + phone.slice(-4) : ''

  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center',padding:'20px',fontFamily:'sans-serif'}}>
      <div style={{background:'#111',border:'1px solid #222',borderRadius:'16px',padding:'40px',maxWidth:'420px',width:'100%',textAlign:'center'}}>
        <div style={{fontSize:'48px',marginBottom:'16px'}}>🔐</div>
        <h1 style={{color:'white',fontSize:'24px',fontWeight:'bold',marginBottom:'8px'}}>Two-Factor Authentication</h1>
        <p style={{color:'#666',fontSize:'14px',marginBottom:'32px'}}>
          We sent a 6-digit code to <span style={{color:'#aaa'}}>{maskedPhone}</span>
        </p>

        {/* OTP Boxes */}
        <div style={{display:'flex',gap:'8px',justifyContent:'center',marginBottom:'24px'}} onPaste={handleOtpPaste}>
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={el => { inputRefs.current[i] = el }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={e => handleOtpChange(i, e.target.value)}
              onKeyDown={e => handleOtpKeyDown(i, e)}
              style={{width:'48px',height:'56px',textAlign:'center',fontSize:'24px',fontWeight:'bold',background:'#1a1a1a',border: digit ? '2px solid #ff4500' : '2px solid #333',borderRadius:'8px',color:'white',outline:'none'}}
            />
          ))}
        </div>

        {/* Error */}
        {error && (
          <div style={{background:'#2d0000',border:'1px solid #ff4500',borderRadius:'8px',padding:'10px',marginBottom:'16px',color:'#ff6b6b',fontSize:'14px'}}>
            {error}
          </div>
        )}

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          disabled={loading || otp.join('').length !== 6}
          style={{width:'100%',padding:'14px',background: otp.join('').length === 6 ? '#ff4500' : '#333',color:'white',border:'none',borderRadius:'8px',fontSize:'16px',fontWeight:'600',cursor: otp.join('').length === 6 ? 'pointer' : 'not-allowed',marginBottom:'16px',transition:'background 0.2s'}}
        >
          {loading ? 'Verifying...' : 'Verify & Sign In'}
        </button>

        {/* Resend */}
        <button
          onClick={handleResend}
          disabled={resending || countdown > 0}
          style={{background:'none',border:'none',color: countdown > 0 ? '#444' : '#ff4500',cursor: countdown > 0 ? 'default' : 'pointer',fontSize:'14px'}}
        >
          {countdown > 0 ? `Resend code in ${countdown}s` : resending ? 'Sending...' : 'Resend Code'}
        </button>

        <div style={{marginTop:'24px',paddingTop:'24px',borderTop:'1px solid #222'}}>
          <a href="/login" style={{color:'#555',fontSize:'13px',textDecoration:'none'}}>← Back to Login</a>
        </div>
      </div>
    </div>
  )
}