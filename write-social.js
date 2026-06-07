const fs = require('fs');

// ─── WELCOME EMAIL API ROUTE ───────────────────────────────────────
const welcomeRoute = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { email, name } = await req.json()
    if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 })

    const firstName = name ? name.split(' ')[0] : 'there'

    const html = \`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome to Traffikora</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e0e0e0;">

      <!-- Header -->
      <tr>
        <td style="background:#111111;padding:40px;text-align:center;">
          <p style="margin:0;font-family:Georgia,serif;font-size:32px;font-weight:700;color:#ffffff;">
            Traffik<span style="color:#E8610A;">ora</span>
          </p>
          <p style="margin:10px 0 0;font-size:13px;color:#888888;letter-spacing:2px;text-transform:uppercase;">AI Marketing Automation</p>
        </td>
      </tr>

      <!-- Hero -->
      <tr>
        <td style="padding:48px 40px 32px;text-align:center;">
          <p style="margin:0 0 16px;font-size:13px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Welcome Aboard</p>
          <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:36px;font-weight:700;color:#111111;line-height:1.2;">
            You\\'re in, \${firstName}.<br /><em style="color:#E8610A;">Let\\'s get you set up.</em>
          </h1>
          <p style="margin:0;font-size:16px;color:#555555;line-height:1.8;max-width:460px;margin:0 auto;">
            Your Traffikora account is ready. In the next 5 minutes, you can have AI working on your marketing 24/7 &mdash; automatically.
          </p>
        </td>
      </tr>

      <!-- 3 Steps -->
      <tr>
        <td style="padding:0 40px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border-radius:10px;border:1px solid #eeeeee;overflow:hidden;">
            <tr>
              <td style="padding:28px 32px;border-bottom:1px solid #eeeeee;">
                <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Step 1</p>
                <p style="margin:0 0 6px;font-size:17px;font-weight:700;color:#111111;font-family:Georgia,serif;">Complete Your Onboarding</p>
                <p style="margin:0;font-size:14px;color:#555555;line-height:1.7;">Tell Traffikora about your business &mdash; your name, industry, city, and platforms. Takes less than 5 minutes.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;border-bottom:1px solid #eeeeee;">
                <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Step 2</p>
                <p style="margin:0 0 6px;font-size:17px;font-weight:700;color:#111111;font-family:Georgia,serif;">Build Your Business Brain</p>
                <p style="margin:0;font-size:14px;color:#555555;line-height:1.7;">Paste your website URL and our AI will learn everything about your business &mdash; your services, tone, and customers.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 32px;">
                <p style="margin:0 0 6px;font-size:11px;font-weight:700;color:#E8610A;letter-spacing:2px;text-transform:uppercase;">Step 3</p>
                <p style="margin:0 0 6px;font-size:17px;font-weight:700;color:#111111;font-family:Georgia,serif;">Generate Your First Blog Post</p>
                <p style="margin:0;font-size:14px;color:#555555;line-height:1.7;">Use your 3 free monthly blog posts to see exactly what Traffikora can do. Real SEO content in seconds.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- CTA -->
      <tr>
        <td style="padding:0 40px 40px;text-align:center;">
          <a href="https://www.traffikora.com/dashboard" style="display:inline-block;background:linear-gradient(135deg,#E8610A,#C84E06);color:#ffffff;padding:16px 40px;border-radius:8px;font-size:16px;font-weight:700;text-decoration:none;letter-spacing:0.02em;">Go to Your Dashboard &rarr;</a>
          <p style="margin:16px 0 0;font-size:13px;color:#999999;">Questions? Reply to this email or chat with EVA on the site.</p>
        </td>
      </tr>

      <!-- What you get -->
      <tr>
        <td style="padding:0 40px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#111111;border-radius:10px;padding:28px 32px;">
            <tr>
              <td>
                <p style="margin:0 0 20px;font-size:16px;font-weight:700;color:#ffffff;font-family:Georgia,serif;">Your free plan includes:</p>
                <table width="100%" cellpadding="0" cellspacing="0">
                  \${[
                    '3 AI blog posts per month',
                    'Access to your content dashboard',
                    'Business Brain AI profile builder',
                    'EVA &mdash; your AI marketing guide',
                    'Upgrade anytime &mdash; no credit card needed',
                  ].map(f => \`
                  <tr>
                    <td style="padding:8px 0;border-bottom:1px solid #1e1e1e;">
                      <p style="margin:0;font-size:14px;color:#cccccc;line-height:1.6;">
                        <span style="color:#E8610A;font-weight:700;">&check;</span>&nbsp;&nbsp;\${f}
                      </p>
                    </td>
                  </tr>\`).join('')}
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Upgrade nudge -->
      <tr>
        <td style="padding:0 40px 40px;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#fff9f5;border:2px solid #E8610A;border-radius:8px;padding:24px 28px;">
            <tr>
              <td>
                <p style="margin:0 0 8px;font-size:15px;font-weight:700;color:#111111;font-family:Georgia,serif;">Want full automation from day one?</p>
                <p style="margin:0 0 16px;font-size:13px;color:#555555;line-height:1.7;">Upgrade to Starter at $47/mo for unlimited blog posts, social media content, and the Content Calendar. No credit card needed to start.</p>
                <a href="https://www.traffikora.com/pricing" style="display:inline-block;background:#E8610A;color:#ffffff;padding:11px 24px;border-radius:6px;font-size:13px;font-weight:700;text-decoration:none;">See All Plans &rarr;</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#f9f9f9;padding:24px 40px;border-top:1px solid #eeeeee;">
          <p style="margin:0 0 4px;font-size:12px;color:#999999;text-align:center;">
            Traffikora &mdash; Set it once. It markets forever.
          </p>
          <p style="margin:0;font-size:12px;color:#bbbbbb;text-align:center;">
            <a href="https://www.traffikora.com/dashboard/settings" style="color:#bbbbbb;">Unsubscribe</a> &nbsp;&middot;&nbsp; support@traffikora.com &nbsp;&middot;&nbsp; <a href="https://www.traffikora.com/privacy" style="color:#bbbbbb;">Privacy Policy</a>
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>\`

    await resend.emails.send({
      from: 'Eva at Traffikora <eva@traffikora.com>',
      to: email,
      subject: \`Welcome to Traffikora, \${firstName} \u2014 you\\'re all set \u26a1\`,
      html
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
`;

// ─── UPDATE SIGNUP PAGE — fire welcome email after signup ──────────
const signup = `// @ts-nocheck
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

      // Fire welcome email — non-blocking
      fetch('/api/email/welcome', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name })
      }).catch(() => {})

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

        {/* LEFT PANEL \u2014 hidden on mobile */}
        {!isMobile && (
          <div style={{ background: '#111', borderRight: '2px solid #1a1a1a', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 48px' }}>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '16px' }}>
              Set it once.<br /><em style={{ color: '#E8610A', fontStyle: 'italic' }}>It markets forever.</em>
            </div>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.85, marginBottom: '32px', fontWeight: 300 }}>
              Join businesses automating their marketing with Traffikora right now.
            </p>
            {[
              { icon: '\u26a1', title: 'Live in 5 Minutes', sub: 'No tech skills required' },
              { icon: '\ud83e\udd16', title: 'AI Agents Run Daily', sub: 'Fully hands-off marketing' },
              { icon: '\ud83d\udcc8', title: '9+ Platforms Covered', sub: 'Google, TikTok, YouTube and more' },
              { icon: '\ud83d\udee1\ufe0f', title: 'Free Plan Available', sub: 'No credit card ever needed' },
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

        {/* RIGHT PANEL \u2014 form */}
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
                      {strength.score < 3 ? 'Add numbers, symbols or uppercase' : strength.score < 5 ? 'Almost there \u2014 add more variety' : 'Great password!'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            <button onClick={handleSignup} disabled={loading || !email || !password || !name} style={{ width: '100%', background: loading ? '#444' : 'linear-gradient(135deg,#E8610A,#C84E06)', border: 'none', borderRadius: '8px', color: '#fff', padding: '15px', fontSize: '15px', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', boxShadow: '0 4px 20px rgba(232,97,10,0.35)', marginBottom: '16px' }}>
              {loading ? 'Creating your account...' : 'Create Free Account \u2192'}
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
`;

fs.mkdirSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\email', { recursive: true });
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\email\\welcome\\route.ts', welcomeRoute, 'utf8');
console.log('SUCCESS: api/email/welcome/route.ts written');

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\signup\\page.tsx', signup, 'utf8');
console.log('SUCCESS: signup/page.tsx updated — fires welcome email on signup');