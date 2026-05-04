'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function SignupPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const getStrength = (p: string) => {
    let score = 0
    if (p.length >= 12) score++
    if (/[A-Z]/.test(p)) score++
    if (/[0-9]/.test(p)) score++
    if (/[^A-Za-z0-9]/.test(p)) score++
    return ['', 'Weak', 'Fair', 'Strong', 'Very Strong'][score]
  }

  const handleSignup = async () => {
    setError('')
    if (password !== confirm) return setError('Passwords do not match')
    if (password.length < 12) return setError('Password must be at least 12 characters')
    if (!/[A-Z]/.test(password)) return setError('Password needs an uppercase letter')
    if (!/[0-9]/.test(password)) return setError('Password needs a number')
    if (!/[^A-Za-z0-9]/.test(password)) return setError('Password needs a special character')
    if (!agreed) return setError('You must agree to the Terms of Service')
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) { setError(error.message); setLoading(false); return }
    router.push('/verify-email')
  }

  const strength = getStrength(password)
  const strengthColor: Record<string, string> = {
    Weak: 'text-red-500', Fair: 'text-yellow-500',
    Strong: 'text-blue-500', 'Very Strong': 'text-green-500'
  }

  return (
    <main style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Create your account</h1>
      <input type="email" placeholder="Email" value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '12px', padding: '8px' }} />
      <input type="password" placeholder="Password (min 12 chars)" value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '4px', padding: '8px' }} />
      {password && <p className={strengthColor[strength]} style={{ marginBottom: '12px' }}>
        Strength: {strength}</p>}
      <input type="password" placeholder="Confirm password" value={confirm}
        onChange={e => setConfirm(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '12px', padding: '8px' }} />
      <label style={{ display: 'block', marginBottom: '12px' }}>
        <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
        {' '}I agree to the <a href="/terms">Terms of Service</a>
      </label>
      {error && <p style={{ color: 'red', marginBottom: '12px' }}>{error}</p>}
      <button onClick={handleSignup} disabled={loading}
        style={{ padding: '10px 20px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        {loading ? 'Creating account...' : 'Sign Up'}
      </button>
    </main>
  )
}