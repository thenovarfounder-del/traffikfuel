const fs = require('fs');

const content = `// @ts-nocheck
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
  { icon: '\ud83e\udde0', title: 'AI Agents Run 24/7', desc: 'Four AI agents work every single day \u2014 writing blogs, posting to social, optimizing your SEO.' },
  { icon: '\ud83d\udcc8', title: '9+ Platforms. Zero Extra Work.', desc: 'Google, TikTok, YouTube, Facebook, Instagram, LinkedIn, Reddit and more \u2014 all automated.' },
  { icon: '\ud83c\udfaf', title: 'AI Engine Optimization', desc: 'The only platform that makes you visible on ChatGPT, Claude, Gemini, Perplexity and Copilot.' },
  { icon: '\u26a1', title: 'Live in 5 Minutes', desc: 'No tech skills. No agency. No manual work. Set it once and it markets forever.' },
  { icon: '\ud83d\udcb0', title: 'Replaces a $2,000/mo Agency', desc: 'Full marketing automation starting at $47/mo. Two extra clients pays for a full year.' },
  { icon: '\ud83d\udee1\ufe0f', title: 'Free Plan \u2014 No Credit Card', desc: 'Start free. Get 3 AI blog posts per month. Upgrade anytime with one click.' },
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
      <style>{\`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        @keyframes shimmer { 0%{left:-60%} 60%,100%{left:130%} }
        @keyframes ringpulse { 0%{transform:scale(1);opacity:.8} 100%{transform:scale(2.4);opacity:0} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .bullet-row { transition: all 0.2s; }
        .bullet-row:hover { transform: translateX(4px); }
      \`}</style>
      <Nav />
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr', minHeight: 'calc(100vh - 64px)' }}>

        {/* LEFT PANEL */}
        {!isMobile && (
          <div style={{ background: '#111', borderRight: '2px solid #1a1a1a', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 56px', position: 'relative', overflow: 'hidden' }}>

            {/* Background glow */}
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,10,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,10,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

            {/* Live badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(232,97,10,0.08)', border: '1px solid rgba(232,97,10,0.25)', borderRadius: '40px', padding: '8px 18px', marginBottom: '28px', alignSelf: 'flex-start' }}>
              <span style={{ position: 'relative', width: '10px', height: '10px', flexShrink: 0 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E8610A', position: 'absolute', top: '1px', left: '1px', display: 'block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', border: '1.5px solid #E8610A', position: 'absolute', top: 0, left: 0, animation: 'ringpulse 2s ease-out infinite', opacity: 0, display: 'block' }} />
              </span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#E8610A', letterSpacing: '.06em' }}>AI running for businesses right now</span>
            </div>

            {/* Headline */}
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '46px', fontWeight: 900, color: '#fff', lineHeight: 0.95, letterSpacing: '-1.5px', marginBottom: '16px' }}>
              Set it once.<br />
              <em style={{ color: '#E8610A', fontStyle: 'italic' }}>It markets<br />forever.</em>
            </h1>
            <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.8, marginBottom: '36px', fontWeight: 300, maxWidth: '380px' }}>
              Join businesses that replaced their marketing agency with Traffikora &mdash; for a fraction of the cost.
            </p>

            {/* Bullet points */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
              {BULLETS.map((b, i) => (
                <div key={b.title} className="bullet-row" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px 0', borderBottom: i < BULLETS.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(232,97,10,0.08)', border: '1px solid rgba(232,97,10,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{b.icon}</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '3px' }}>{b.title}</div>
                    <div style={{ fontSize: '12px', color: '#555', lineHeight: 1.6, fontWeight: 300 }}>{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social proof */}
            <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ display: 'flex' }}>
                {['#E8610A', '#C84E06', '#a03a04', '#7a2c03'].map((c, i) => (
                  <div key={i} style={{ width: '32px', height: '32px', borderRadius: '50%', background: c, border: '2px solid #111', marginLeft: i > 0 ? '-8px' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: '#fff' }}>
                    {['J','S','M','A'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>Businesses already automated</div>
                <div style={{ fontSize: '11px', color: '#555', fontWeight: 300 }}>Free plan available &mdash; no credit card needed</div>
              </div>
            </div>

          </div>
        )}

        {/* RIGHT PANEL — form */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '40px 24px' : '60px 48px', background: '#0a0a0a' }}>
          <div style={{ width: '100%', maxWidth: '400px', animation: 'fadeUp 0.5s ease' }}>

            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '30px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>
              Start for free
            </div>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '28px', fontWeight: 300 }}>No credit card needed. Up and running in 5 minutes.</p>

            {error && (
              <div style={{ background: 'rgba(220,38,38,0.1)', border: '1px solid rgba(220,38,38,0.4)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#f87171' }}>{error}</div>
            )}

            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#555', marginBottom: '6px', letterSpacing: '.08em', textTransform: 'uppercase' }}>Full Name</label>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name"
                style={{ width: '100%', background: '#111', border: '1px solid #222', borderRadius: '8px', color: '#fff', padding: '13px 16px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = '#E8610A'}
                onBlur={e => e.target.style.borderColor = '#222'} />
            </div>

            <div style={{ marginBottom: '14px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#555', marginBottom: '6px', letterSpacing: '.08em', textTransform: 'uppercase' }}>Email Address</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com"
                style={{ width: '100%', background: '#111', border: '1px solid #222', borderRadius: '8px', color: '#fff', padding: '13px 16px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = '#E8610A'}
                onBlur={e => e.target.style.borderColor = '#222'} />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#555', marginBottom: '6px', letterSpacing: '.08em', textTransform: 'uppercase' }}>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Min 8 characters"
                style={{ width: '100%', background: '#111', border: '1px solid #222', borderRadius: '8px', color: '#fff', padding: '13px 16px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
                onFocus={e => e.target.style.borderColor = '#E8610A'}
                onBlur={e => e.target.style.borderColor = '#222'} />

              {password.length > 0 && (
                <div style={{ marginTop: '10px' }}>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '6px' }}>
                    {[1,2,3,4,5].map(i => (
                      <div key={i} style={{ flex: 1, height: '3px', borderRadius: '2px', background: i <= strength.score ? strength.color : '#222', transition: 'background 0.3s' }} />
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px', color: strength.color, fontWeight: 700 }}>{strength.label}</span>
                    <span style={{ fontSize: '11px', color: '#444' }}>
                      {strength.score < 3 ? 'Add numbers or symbols' : strength.score < 5 ? 'Almost there!' : 'Great password!'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <button onClick={handleSignup} disabled={loading || !email || !password || !name}
              style={{ width: '100%', background: loading ? '#333' : 'linear-gradient(135deg,#E8610A,#C84E06)', border: 'none', borderRadius: '8px', color: '#fff', padding: '15px', fontSize: '15px', fontWeight: 800, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', boxShadow: loading ? 'none' : '0 4px 24px rgba(232,97,10,0.4)', marginBottom: '16px', letterSpacing: '.02em', position: 'relative', overflow: 'hidden' }}>
              {loading ? 'Creating your account...' : 'Create Free Account \u2192'}
            </button>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
              {['\ud83d\udee1\ufe0f No credit card', '\u26a1 Live in 5 min', '\ud83d\udd12 Cancel anytime'].map(note => (
                <span key={note} style={{ fontSize: '12px', color: '#444', fontWeight: 500 }}>{note}</span>
              ))}
            </div>

            <p style={{ fontSize: '13px', color: '#444', textAlign: 'center', lineHeight: 1.6 }}>
              Already have an account? <a href="/login" style={{ color: '#E8610A', textDecoration: 'none', fontWeight: 700 }}>Sign in</a>
            </p>
            <p style={{ fontSize: '11px', color: '#333', textAlign: 'center', marginTop: '12px', lineHeight: 1.6 }}>
              By signing up you agree to our <a href="/terms" style={{ color: '#555', textDecoration: 'none' }}>Terms</a> and <a href="/privacy" style={{ color: '#555', textDecoration: 'none' }}>Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
`;

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\signup\\page.tsx', content, 'utf8');
console.log('SUCCESS: signup/page.tsx written — powerful left panel redesign');