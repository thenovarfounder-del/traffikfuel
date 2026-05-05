'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) { setError(error.message); setLoading(false); return }
    if (!data.user?.email_confirmed_at) {
      setError('Please verify your email before logging in.')
      setLoading(false)
      return
    }
    router.push('/dashboard')
  }

  const handleTikTokLogin = () => {
    const clientKey = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_KEY
    const redirectUri = 'https://www.traffikfuel.com/auth/callback'
    const scope = 'user.info.basic'
    const state = Math.random().toString(36).substring(7)
    const tiktokAuthUrl = `https://www.tiktok.com/v2/auth/authorize?client_key=${clientKey}&scope=${scope}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&state=${state}`
    window.location.href = tiktokAuthUrl
  }

  return (
    <main style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '24px', fontSize: '28px', fontWeight: '700' }}>Log in</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '12px', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', width: '100%', marginBottom: '12px', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '16px', boxSizing: 'border-box' }}
      />

      {error && <p style={{ color: 'red', marginBottom: '12px' }}>{error}</p>}

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{ display: 'block', width: '100%', padding: '12px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '6px', fontSize: '16px', cursor: 'pointer', marginBottom: '12px' }}
      >
        {loading ? 'Logging in...' : 'Log In'}
      </button>

      <div style={{ display: 'flex', alignItems: 'center', margin: '16px 0' }}>
        <div style={{ flex: 1, height: '1px', background: '#ddd' }} />
        <span style={{ margin: '0 12px', color: '#888', fontSize: '14px' }}>or</span>
        <div style={{ flex: 1, height: '1px', background: '#ddd' }} />
      </div>

      <button
        onClick={handleTikTokLogin}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', padding: '12px', background: '#000', color: 'white', border: 'none', borderRadius: '6px', fontSize: '16px', cursor: 'pointer', marginBottom: '16px' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
        </svg>
        Continue with TikTok
      </button>

      <p style={{ marginTop: '8px', fontSize: '14px' }}>
        <a href="/reset-password" style={{ color: '#0070f3' }}>Forgot password?</a>
      </p>
      <p style={{ fontSize: '14px' }}>
        Don&apos;t have an account? <a href="/signup" style={{ color: '#0070f3' }}>Sign up</a>
      </p>
    </main>
  )
}