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

const BULLETS = [
  { icon: '🧠', title: 'AI Agents Run 24/7', desc: 'Four AI agents work every day — writing blogs, posting to social, optimizing your SEO.' },
  { icon: '📈', title: '9+ Platforms. Zero Extra Work.', desc: 'Google, TikTok, YouTube, Facebook, Instagram, LinkedIn, Reddit — all automated.' },
  { icon: '🎯', title: 'AI Engine Optimization', desc: 'Visible on ChatGPT, Claude, Gemini, Perplexity and Copilot — no other platform does this.' },
  { icon: '⚡', title: 'Live in 5 Minutes', desc: 'No tech skills. No agency. No manual work. Set it once and it markets forever.' },
  { icon: '💰', title: 'Replaces a $2,000/mo Agency', desc: 'Full automation from $47/mo. Two extra clients pays for a full year.' },
  { icon: '🛡️', title: 'Free Plan — No Credit Card', desc: '3 free AI blog posts per month. Upgrade anytime with one click.' },
]

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        @keyframes ringpulse { 0%{transform:scale(1);opacity:.8} 100%{transform:scale(2.4);opacity:0} }
        .bullet-row:hover { transform: translateX(3px); }
        .bullet-row { transition: transform 0.2s; }
      `}</style>
      <Nav />
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.15fr 0.85fr', minHeight: 'calc(100vh - 64px)' }}>

        {/* LEFT PANEL */}
        {!isMobile && (
          <div style={{ background: '#111', borderRight: '2px solid #1a1a1a', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 48px', position: 'relative', overflow: 'hidden' }}>

            {/* Background glow */}
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,10,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

            {/* Live badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(232,97,10,0.08)', border: '1px solid rgba(232,97,10,0.25)', borderRadius: '40px', padding: '6px 14px', marginBottom: '20px', alignSelf: 'flex-start' }}>
              <span style={{ position: 'relative', width: '8px', height: '8px', flexShrink: 0 }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8610A', position: 'absolute', top: '1px', left: '1px', display: 'block' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1.5px solid #E8610A', position: 'absolute', top: 0, left: 0, animation: 'ringpulse 2s ease-out infinite', opacity: 0, display: 'block' }} />
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#E8610A', letterSpacing: '.06em' }}>AI running for businesses right now</span>
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 900, color: '#fff', lineHeight: 1.0, letterSpacing: '-1px', marginBottom: '12px' }}>
              Set it once.<br />
              <em style={{ color: '#E8610A', fontStyle: 'italic' }}>It markets forever.</em>
            </h1>
            <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.7, marginBottom: '24px', fontWeight: 300, maxWidth: '380px' }}>
              Join businesses that replaced their marketing agency with Traffikora &mdash; for a fraction of the cost.
            </p>

            {/* Bullets */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {BULLETS.map((b, i) => (
                <div key={b.title} className="bullet-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '12px 0', borderBottom: i < BULLETS.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(232,97,10,0.1)', border: '1px solid rgba(232,97,10,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '17px', flexShrink: 0 }}>{b.icon}</div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>{b.title}</div>
                    <div style={{ fontSize: '11px', color: '#888', lineHeight: 1.55, fontWeight: 300 }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex' }}>
                {['#E8610A','#C84E06','#a03a04','#7a2c03'].map((c,i) => (
                  <div key={i} style={{ width: '28px', height: '28px', borderRadius: '50%', background: c, border: '2px solid #111', marginLeft: i > 0 ? '-7px' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#fff' }}>
                    {['J','S','M','A'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>Businesses already automated</div>
                <div style={{ fontSize: '11px', color: '#555', fontWeight: 300 }}>Free plan &mdash; no credit card needed</div>
              </div>
            </div>

          </div>
        )}

        {/* RIGHT PANEL */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '40px 24px' : '48px 44px', background: '#0a0a0a' }}>
          <div style={{ width: '100%', maxWidth: '380px' }}>

            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '26px' : '28px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>
              Start for free
            </div>
            <p style={{ fontSize: '13px', color: '#555', marginBottom: '24px', fontWeight: 300 }}>No credit card needed. Up and running in 5 minutes.</p>

            {error && (
              <div style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.4)', borderRadius: '8px', padding: '10px 14px', marginBottom: '16px', fontSize: '13px', color: '#f87171' }}>{error}</div>
            )}

            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#555', marginBottom: '5px', letterSpacing: '.08em', textTransform: 'uppercase' }}>Full Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
                style={{ width: '100%', background: '#111', border: '1px solid #222', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor='#E8610A'} onBlur={e => e.target.style.borderColor='#222'} />
            </div>

            <div style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#555', marginBottom: '5px', letterSpacing: '.08em', textTransform: 'uppercase' }}>Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com"
                style={{ width: '100%', background: '#111', border: '1px solid #222', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor='#E8610A'} onBlur={e => e.target.style.borderColor='#222'} />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#555', marginBottom: '5px', letterSpacing: '.08em', textTransform: 'uppercase' }}>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Min 8 characters"
                style={{ width: '100%', background: '#111', border: '1px solid #222', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor='#E8610A'} onBlur={e => e.target.style.borderColor='#222'} />
              {password.length > 0 && (
                <div style={{ marginTop: '8px' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '5px' }}>
                    {[1,2,3,4,5].map(i => (
                      <div key={i} style={{ flex: 1, height: '3px', borderRadius: '2px', background: i <= strength.score ? strength.color : '#222', transition: 'background 0.3s' }} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px', color: strength.color, fontWeight: 700 }}>{strength.label}</span>
                    <span style={{ fontSize: '11px', color: '#444' }}>{strength.score < 3 ? 'Add numbers or symbols' : strength.score < 5 ? 'Almost there!' : 'Great password!'}</span>
                  </div>
                </div>
              )}
            </div>

            <button onClick={handleSignup} disabled={loading || !email || !password || !name}
              style={{ width: '100%', background: loading ? '#333' : 'linear-gradient(135deg,#E8610A,#C84E06)', border: 'none', borderRadius: '8px', color: '#fff', padding: '14px', fontSize: '15px', fontWeight: 800, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', boxShadow: loading ? 'none' : '0 4px 24px rgba(232,97,10,0.4)', marginBottom: '14px' }}>
              {loading ? 'Creating your account...' : 'Create Free Account →'}
            </button>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
              {['🛡️ No credit card', '⚡ Live in 5 min', '🔒 Cancel anytime'].map(note => (
                <span key={note} style={{ fontSize: '11px', color: '#444', fontWeight: 500 }}>{note}</span>
              ))}
            </div>

            <p style={{ fontSize: '12px', color: '#444', textAlign: 'center', lineHeight: 1.6 }}>
              Already have an account? <a href="/login" style={{ color: '#E8610A', textDecoration: 'none', fontWeight: 700 }}>Sign in</a>
            </p>
            <p style={{ fontSize: '11px', color: '#333', textAlign: 'center', marginTop: '10px', lineHeight: 1.6 }}>
              By signing up you agree to our <a href="/terms" style={{ color: '#555', textDecoration: 'none' }}>Terms</a> and <a href="/privacy" style={{ color: '#555', textDecoration: 'none' }}>Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
