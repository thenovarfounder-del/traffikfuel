// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

function getPasswordStrength(pw) {
  if (!pw) return { score: 0, label: '', color: '' }
  let score = 0
  if (pw.length >= 8) score++
  if (pw.length >= 12) score++
  if (/[A-Z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  if (score <= 1) return { score: 1, label: 'Weak', color: '#ef4444' }
  if (score === 2) return { score: 2, label: 'Fair', color: '#f97316' }
  if (score === 3) return { score: 3, label: 'Good', color: '#eab308' }
  if (score === 4) return { score: 4, label: 'Strong', color: '#22c55e' }
  return { score: 5, label: 'Very Strong', color: '#16a34a' }
}

export default function SignupPage() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  async function handleSignup(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name } }
      })
      if (signUpError) throw signUpError
      router.push('/check-email')
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  const strength = getPasswordStrength(password)

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', fontFamily: 'DM Sans, sans-serif' }}>
      <Nav />
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', minHeight: 'calc(100vh - 70px)' }}>

        {/* LEFT PANEL — hidden on mobile */}
        {!isMobile && (
          <div style={{ background: '#111', borderRight: '2px solid #1a1a1a', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 48px' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>
              Set it once.<br /><em style={{ color: '#E8610A', fontStyle: 'italic' }}>It markets forever.</em>
            </div>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.85, marginBottom: '32px', fontWeight: 300 }}>
              Join businesses automating their marketing with Traffikora right now.
            </p>
            {[
              { icon: '⚡', title: 'Live in 5 Minutes', sub: 'No tech skills required' },
              { icon: '🤖', title: 'AI Agents Run Daily', sub: 'Fully hands-off marketing' },
              { icon: '📈', title: '9+ Platforms Covered', sub: 'Google, TikTok, YouTube and more' },
              { icon: '🛡️', title: 'Free Plan Available', sub: 'No credit card ever needed' },
            ].map(f => (
              <div key={f.title} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(232,97,10,0.1)', border: '1px solid rgba(232,97,10,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{f.title}</div>
                  <div style={{ fontSize: '12px', color: '#666', marginTop: '2px' }}>{f.sub}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* RIGHT PANEL — form */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '40px 24px' : '60px 48px' }}>
          <div style={{ width: '100%', maxWidth: '420px' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '32px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>
              Start for free
            </div>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '32px', fontWeight: 300 }}>No credit card needed. Up and running in 5 minutes.</p>

            {error && (
              <div style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.4)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#f87171' }}>{error}</div>
            )}

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#888', marginBottom: '6px', letterSpacing: '.06em', textTransform: 'uppercase' }}>Full Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={{ width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '13px 16px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#888', marginBottom: '6px', letterSpacing: '.06em', textTransform: 'uppercase' }}>Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" style={{ width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '13px 16px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 600, color: '#888', marginBottom: '6px', letterSpacing: '.06em', textTransform: 'uppercase' }}>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Min 8 characters" style={{ width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '13px 16px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />

              {password.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
                    {[1,2,3,4,5].map(i => (
                      <div key={i} style={{ flex: 1, height: '4px', borderRadius: '2px', background: i <= strength.score ? strength.color : '#2a2a2a', transition: 'background 0.3s' }} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: strength.color, fontWeight: 700 }}>{strength.label}</span>
                    <span style={{ fontSize: '11px', color: '#555' }}>
                      {strength.score < 3 ? 'Add numbers, symbols or uppercase' : strength.score < 5 ? 'Almost there — add more variety' : 'Great password!'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <button onClick={handleSignup} disabled={loading || !email || !password || !name} style={{ width: '100%', background: loading ? '#444' : 'linear-gradient(135deg,#E8610A,#C84E06)', border: 'none', borderRadius: '8px', color: '#fff', padding: '15px', fontSize: '15px', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', boxShadow: '0 4px 20px rgba(232,97,10,0.35)', marginBottom: '16px' }}>
              {loading ? 'Creating your account...' : 'Create Free Account →'}
            </button>

            <p style={{ fontSize: '13px', color: '#555', textAlign: 'center', lineHeight: 1.6 }}>
              Already have an account? <a href="/login" style={{ color: '#E8610A', textDecoration: 'none', fontWeight: 600 }}>Sign in</a>
            </p>
            <p style={{ fontSize: '11px', color: '#444', textAlign: 'center', marginTop: '16px', lineHeight: 1.6 }}>
              By signing up you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
