'use client'

import { useState, useRef, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

export default function PhoneVerifyPage() {
  const [phone, setPhone] = useState<string>('')
  const [codeSent, setCodeSent] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [countdown, setCountdown] = useState(0)
  const [loading, setLoading] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)
  const [verified, setVerified] = useState(false)

  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (countdown <= 0) return
    const timer = setTimeout(() => setCountdown(c => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [countdown])

  async function handleSendCode() {
    if (!phone || !isValidPhoneNumber(phone)) {
      setMessage({ text: 'Please enter a valid phone number.', type: 'error' })
      return
    }
    setLoading(true)
    setMessage(null)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      const res = await fetch('/api/phone/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, userId: user?.id }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setCodeSent(true)
      setCountdown(60)
      setMessage({ text: 'Code sent! Check your phone.', type: 'success' })
      setTimeout(() => inputRefs.current[0]?.focus(), 100)
    } catch (err: any) {
      setMessage({ text: err.message || 'Failed to send code.', type: 'error' })
    } finally {
      setLoading(false)
    }
  }

  async function handleVerify() {
    const code = otp.join('')
    if (code.length !== 6) {
      setMessage({ text: 'Please enter the full 6-digit code.', type: 'error' })
      return
    }
    setVerifying(true)
    setMessage(null)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      const res = await fetch('/api/phone/verify-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, code, userId: user?.id }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)

      // Save real phone number for 2FA
      await supabase
        .from('user_security_settings')
        .upsert({ user_id: user?.id, phone: phone }, { onConflict: 'user_id' })

      setVerified(true)
      setMessage({ text: '✅ Phone verified successfully!', type: 'success' })
    } catch (err: any) {
      setMessage({ text: err.message || 'Invalid code. Try again.', type: 'error' })
    } finally {
      setVerifying(false)
    }
  }

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

  if (verified) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
        <div className="bg-gray-900 border border-green-500/30 rounded-2xl p-10 max-w-md w-full text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-white mb-2">Phone Verified!</h2>
          <p className="text-gray-400">Your phone number has been verified and your account is more secure.</p>
          <a href="/dashboard" className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Back to Dashboard
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-md w-full">
        <div className="mb-6 text-center">
          <div className="text-4xl mb-3">📱</div>
          <h1 className="text-2xl font-bold text-white">Verify Your Phone</h1>
          <p className="text-gray-400 text-sm mt-1">We'll send a 6-digit code to confirm your number.</p>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
          <div className="phone-input-wrapper">
            <PhoneInput
              international
              defaultCountry="US"
              value={phone}
              onChange={(val) => setPhone(val || '')}
              disabled={codeSent}
              className="w-full"
            />
          </div>
        </div>

        {!codeSent ? (
          <button onClick={handleSendCode} disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition mb-4">
            {loading ? 'Sending...' : 'Send Verification Code'}
          </button>
        ) : (
          <button onClick={handleSendCode} disabled={loading || countdown > 0}
            className="w-full bg-gray-700 hover:bg-gray-600 disabled:opacity-40 text-white font-medium py-2 rounded-lg transition mb-4 text-sm">
            {countdown > 0 ? `Resend code in ${countdown}s` : loading ? 'Sending...' : 'Resend Code'}
          </button>
        )}

        {codeSent && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-3 text-center">Enter 6-Digit Code</label>
            <div className="flex gap-2 justify-center" onPaste={handleOtpPaste}>
              {otp.map((digit, i) => (
                <input key={i} ref={el => { inputRefs.current[i] = el }}
                  type="text" inputMode="numeric" maxLength={1} value={digit}
                  onChange={e => handleOtpChange(i, e.target.value)}
                  onKeyDown={e => handleOtpKeyDown(i, e)}
                  className="w-12 h-14 text-center text-xl font-bold bg-gray-800 border border-gray-600 focus:border-blue-500 focus:outline-none rounded-lg text-white transition"
                />
              ))}
            </div>
            <button onClick={handleVerify} disabled={verifying || otp.join('').length !== 6}
              className="w-full mt-4 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition">
              {verifying ? 'Verifying...' : 'Verify Phone Number'}
            </button>
          </div>
        )}

        {message && (
          <div className={`text-sm text-center mt-2 px-4 py-2 rounded-lg ${message.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
            {message.text}
          </div>
        )}
      </div>

      <style jsx global>{`
        .phone-input-wrapper .PhoneInput { background: #1f2937; border: 1px solid #374151; border-radius: 0.5rem; padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.5rem; }
        .phone-input-wrapper .PhoneInputInput { background: transparent; border: none; outline: none; color: white; font-size: 1rem; width: 100%; }
        .phone-input-wrapper .PhoneInputCountrySelect { background: #1f2937; color: white; border: none; outline: none; }
      `}</style>
    </div>
  )
}