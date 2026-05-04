'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setError('')
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }
    if (!data.user?.email_confirmed_at) {
      setError('Please verify your email before logging in.')
      setLoading(false)
      return
    }
    router.push('/dashboard')
  }

  return (
    <main style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Log in</h1>
      <input type="email" placeholder="Email" value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '12px', padding: '8px' }} />
      <input type="password" placeholder="Password" value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '12px', padding: '8px' }} />
      {error && <p style={{ color: 'red', marginBottom: '12px' }}>{error}</p>}
      <button onClick={handleLogin} disabled={loading}
        style={{ padding: '10px 20px', background: '#0070f3', color: 'white',
          border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        {loading ? 'Logging in...' : 'Log In'}
      </button>
      <p style={{ marginTop: '16px' }}>
        <a href="/reset-password">Forgot password?</a>
      </p>
      <p>Don&apos;t have an account? <a href="/signup">Sign up</a></p>
    </main>
  )
}