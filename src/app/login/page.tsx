// @ts-nocheck
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Login() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleLogin() {
    setLoading(true)
    setError('')
    try {
      const { error: loginError } = await supabase.auth.signInWithPassword({ email, password })
      if (loginError) throw loginError
      router.push('/dashboard')
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
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
    fontFamily: 'inherit'
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
              <span style={{ fontSize: '11px', color: '#f97316', verticalAlign: 'super' }}>™</span>
            </div>
          </a>
        </div>

        <div>
          <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px', fontFamily: 'system-ui, sans-serif' }}>Welcome Back</div>
          <h1 style={{ fontSize: '42px', fontWeight: '400', lineHeight: '1.2', margin: '0 0 24px 0', color: '#fff' }}>
            Your marketing<br />
            <em style={{ color: '#f97316', fontStyle: 'italic' }}>never stopped.</em>
          </h1>
          <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.7', margin: '0 0 48px 0', fontFamily: 'system-ui, sans-serif' }}>
            While you were away your AI agents kept working. Log back in to see what was published.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { icon: '🤖', text: 'AI agents ran while you were away' },
              { icon: '📊', text: 'New analytics waiting for you' },
              { icon: '📅', text: 'Content calendar updated' },
              { icon: '⚡', text: 'Posts scheduled and ready' }
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', backgroundColor: '#f9731615', border: '1px solid #f9731630', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', flexShrink: 0 }}>{item.icon}</div>
                <span style={{ fontSize: '14px', color: '#94a3b8', fontFamily: 'system-ui, sans-serif' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ fontSize: '13px', color: '#2a2a2a', fontFamily: 'system-ui, sans-serif' }}>
          © 2026 Traffikora. All rights reserved.
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div style={{ flex: 1, padding: '60px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: '420px', width: '100%', margin: '0 auto' }}>

          <div style={{ marginBottom: '40px' }}>
            <div style={{ fontSize: '12px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', fontFamily: 'system-ui, sans-serif' }}>Welcome Back</div>
            <h2 style={{ fontSize: '32px', fontWeight: '400', margin: '0 0 8px 0' }}>Log in to Traffikora</h2>
            <p style={{ fontSize: '14px', color: '#64748b', margin: 0, fontFamily: 'system-ui, sans-serif' }}>Pick up right where you left off.</p>
          </div>

          {error && (
            <div style={{ backgroundColor: '#ef444415', border: '1px solid #ef4444', borderRadius: '10px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#ef4444', fontFamily: 'system-ui, sans-serif' }}>{error}</div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div>
              <label style={labelStyle}>Email Address</label>
              <input style={inputStyle} type="email" placeholder="you@yourbusiness.com" value={email} onChange={e => setEmail(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()} />
            </div>
            <div>
              <label style={labelStyle}>Password</label>
              <input style={inputStyle} type="password" placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleLogin()} />
            </div>

            <button onClick={handleLogin} disabled={loading} style={{ width: '100%', padding: '16px', borderRadius: '12px', border: 'none', background: loading ? '#333' : 'linear-gradient(135deg, #f97316, #ea6a0a)', color: '#fff', fontSize: '15px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'system-ui, sans-serif' }}>
              {loading ? 'Logging in...' : 'Log In →'}
            </button>

            <div style={{ textAlign: 'center', fontSize: '13px', color: '#64748b', fontFamily: 'system-ui, sans-serif' }}>
              Don't have an account?{' '}
              <a href="/signup" style={{ color: '#f97316', textDecoration: 'none', fontWeight: '600' }}>Start free trial</a>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="/reset-password" style={{ fontSize: '13px', color: '#64748b', textDecoration: 'none', fontFamily: 'system-ui, sans-serif' }}>Forgot your password?</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
