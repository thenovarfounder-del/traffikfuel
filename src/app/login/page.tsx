// @ts-nocheck
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin() {
    setLoading(true)
    setError('')
    try {
      const { supabase } = await import('@/lib/supabase')
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        setError('Invalid email or password. Please try again.')
      } else {
        window.location.href = '/dashboard'
      }
    } catch (e) {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px 60px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Welcome Back</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px' }}>Log in to Traffikora</h1>
        <p style={{ fontSize: '18px', color: '#ccc', marginBottom: '0' }}>Pick up right where you left off.</p>
      </section>

      <section style={{ background: '#fff', padding: '60px 32px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '460px' }}>
          {error && (
            <div style={{ background: '#fff0f0', border: '2px solid #e00', color: '#c00', padding: '14px 18px', marginBottom: '24px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px' }}>
              {error}
            </div>
          )}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Email address</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '28px' }}>
            <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Your password"
              style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }}
            />
          </div>
          <button
            onClick={handleLogin}
            disabled={loading}
            style={{ width: '100%', background: '#E8610A', color: '#fff', padding: '16px', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#666', textAlign: 'center', marginTop: '24px' }}>
            Don’t have an account? <Link href="/signup" style={{ color: '#E8610A', fontWeight: 600, textDecoration: 'none' }}>Start free trial</Link>
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
