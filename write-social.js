const fs = require('fs');

// ─── SIGNUP PAGE — with referral cookie tracking ───────────────────
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

const BULLETS = [
  { icon: '\ud83e\udde0', title: 'AI Agents Run 24/7', desc: 'Four AI agents work every day \u2014 writing blogs, posting to social, optimizing your SEO.' },
  { icon: '\ud83d\udcc8', title: '9+ Platforms. Zero Extra Work.', desc: 'Google, TikTok, YouTube, Facebook, Instagram, LinkedIn, Reddit \u2014 all automated.' },
  { icon: '\ud83c\udfaf', title: 'AI Engine Optimization', desc: 'Visible on ChatGPT, Claude, Gemini, Perplexity and Copilot \u2014 no other platform does this.' },
  { icon: '\u26a1', title: 'Live in 5 Minutes', desc: 'No tech skills. No agency. No manual work. Set it once and it markets forever.' },
  { icon: '\ud83d\udcb0', title: 'Replaces a $2,000/mo Agency', desc: 'Full automation from $47/mo. Two extra clients pays for a full year.' },
  { icon: '\ud83d\udee1\ufe0f', title: 'Free Plan \u2014 No Credit Card', desc: '3 free AI blog posts per month. Upgrade anytime with one click.' },
]

export default function SignupPage() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [refCode, setRefCode] = useState(null)
  const [refBanner, setRefBanner] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    // Check for referral code in URL or cookie
    const params = new URLSearchParams(window.location.search)
    const ref = params.get('ref')
    if (ref) {
      setRefCode(ref)
      setRefBanner(true)
      // Store in localStorage for 90 days
      const expiry = Date.now() + (90 * 24 * 60 * 60 * 1000)
      localStorage.setItem('traffikora_ref', JSON.stringify({ code: ref, expiry }))
      // Track the click
      fetch('/api/referral', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'click',
          data: { code: ref, ip: '', userAgent: navigator.userAgent }
        })
      }).catch(() => {})
    } else {
      // Check localStorage for existing ref
      try {
        const stored = localStorage.getItem('traffikora_ref')
        if (stored) {
          const parsed = JSON.parse(stored)
          if (parsed.expiry > Date.now()) {
            setRefCode(parsed.code)
          } else {
            localStorage.removeItem('traffikora_ref')
          }
        }
      } catch {}
    }
  }, [])

  async function handleSignup(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name } }
      })
      if (signUpError) throw signUpError

      // Track referral signup
      if (refCode && signUpData?.user?.id) {
        fetch('/api/referral', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'signup',
            data: { code: refCode, referredUserId: signUpData.user.id }
          })
        }).catch(() => {})
      }

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
        @keyframes ringpulse { 0%{transform:scale(1);opacity:.8} 100%{transform:scale(2.4);opacity:0} }
        .bullet-row:hover { transform: translateX(3px); }
        .bullet-row { transition: transform 0.2s; }
      \`}</style>
      <Nav />

      {/* REFERRAL BANNER */}
      {refBanner && refCode && (
        <div style={{ background: 'linear-gradient(135deg,#0d0600,#1a0800)', borderBottom: '1px solid rgba(232,97,10,0.3)', padding: '12px 24px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <span style={{ fontSize: '16px' }}>\ud83c\udf81</span>
          <span style={{ fontSize: '13px', color: '#fff', fontWeight: 500 }}>
            You were referred by a Traffikora user \u2014 <strong style={{ color: '#E8610A' }}>sign up to get started free!</strong>
          </span>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.15fr 0.85fr', minHeight: 'calc(100vh - 64px)' }}>

        {/* LEFT PANEL */}
        {!isMobile && (
          <div style={{ background: '#111', borderRight: '2px solid #1a1a1a', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 48px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,10,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(232,97,10,0.08)', border: '1px solid rgba(232,97,10,0.25)', borderRadius: '40px', padding: '6px 14px', marginBottom: '20px', alignSelf: 'flex-start' }}>
              <span style={{ position: 'relative', width: '8px', height: '8px', flexShrink: 0 }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8610A', position: 'absolute', top: '1px', left: '1px', display: 'block' }} />
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1.5px solid #E8610A', position: 'absolute', top: 0, left: 0, animation: 'ringpulse 2s ease-out infinite', opacity: 0, display: 'block' }} />
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#E8610A', letterSpacing: '.06em' }}>AI running for businesses right now</span>
            </div>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 900, color: '#fff', lineHeight: 1.0, letterSpacing: '-1px', marginBottom: '12px' }}>
              Set it once.<br />
              <em style={{ color: '#E8610A', fontStyle: 'italic' }}>It markets forever.</em>
            </h1>
            <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.7, marginBottom: '24px', fontWeight: 300, maxWidth: '380px' }}>
              Join businesses that replaced their marketing agency with Traffikora &mdash; for a fraction of the cost.
            </p>
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
                <div style={{ fontSize: '11px', color: '#555', fontWeight: 300 }}>Free plan \u2014 no credit card needed</div>
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
              {loading ? 'Creating your account...' : 'Create Free Account \u2192'}
            </button>

            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', marginBottom: '16px', flexWrap: 'wrap' }}>
              {['\ud83d\udee1\ufe0f No credit card', '\u26a1 Live in 5 min', '\ud83d\udd12 Cancel anytime'].map(note => (
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
`;

// ─── STRIPE WEBHOOK — wire referral commission on payment ──────────
const stripeWebhookPath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\api\\webhooks\\stripe\\route.ts';
let webhook = fs.readFileSync(stripeWebhookPath, 'utf8');

// Add referral commission recording after successful subscription
const commissionCode = `
    // ── REFERRAL COMMISSION ──────────────────────────────────────
    if (event.type === 'customer.subscription.created' || event.type === 'invoice.payment_succeeded') {
      try {
        const subObj = event.type === 'customer.subscription.created' ? event.data.object : null
        const invObj = event.type === 'invoice.payment_succeeded' ? event.data.object : null
        const customerId = subObj?.customer || invObj?.customer
        const subscriptionId = subObj?.id || invObj?.subscription
        const amountPaid = invObj ? (invObj.amount_paid / 100) : 0

        if (customerId) {
          // Find user by stripe customer id
          const { data: userRow } = await supabase.from('users').select('id, referred_by').eq('stripe_customer_id', customerId).single()
          if (userRow?.referred_by) {
            const refCode = userRow.referred_by
            const { data: refCodeRow } = await supabase.from('referral_codes').select('*').eq('code', refCode).single()
            if (refCodeRow && amountPaid > 0) {
              const commissionRate = refCodeRow.commission_rate || 0.20
              const commissionAmount = amountPaid * commissionRate

              // Record conversion
              await supabase.from('referral_conversions').upsert({
                referral_code: refCode,
                referrer_id: refCodeRow.user_id,
                referred_user_id: userRow.id,
                plan: event.data.object?.metadata?.plan || 'unknown',
                monthly_amount: amountPaid,
                commission_rate: commissionRate,
                commission_amount: commissionAmount,
                status: 'active',
                stripe_subscription_id: subscriptionId
              }, { onConflict: 'stripe_subscription_id' })

              // Update referral code totals
              await supabase.from('referral_codes').update({
                total_conversions: (refCodeRow.total_conversions || 0) + 1,
                total_earned: (refCodeRow.total_earned || 0) + commissionAmount
              }).eq('code', refCode)

              // Send "you just earned" email to referrer
              const { data: referrerAuth } = await supabase.auth.admin.getUserById(refCodeRow.user_id)
              if (referrerAuth?.user?.email) {
                const { Resend } = await import('resend')
                const resend = new Resend(process.env.RESEND_API_KEY)
                await resend.emails.send({
                  from: 'Eva at Traffikora <eva@traffikora.com>',
                  to: referrerAuth.user.email,
                  subject: \`\ud83d\udcb0 You just earned $\${commissionAmount.toFixed(2)} from your Traffikora referral!\`,
                  html: \`<div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;background:#f9f9f9;">
                    <div style="background:#111;padding:28px;border-radius:12px;text-align:center;margin-bottom:24px;">
                      <p style="font-family:Georgia,serif;font-size:26px;font-weight:700;color:#fff;margin:0;">Traffik<span style="color:#E8610A;">ora</span></p>
                    </div>
                    <h2 style="color:#E8610A;font-size:28px;">You just earned $\${commissionAmount.toFixed(2)}! \ud83c\udf89</h2>
                    <p style="color:#555;font-size:15px;line-height:1.7;">One of your referrals just made a payment. Your 20% commission has been added to your account.</p>
                    <div style="background:#fff;border:2px solid #E8610A;border-radius:10px;padding:24px;margin:24px 0;text-align:center;">
                      <p style="font-size:14px;color:#888;margin:0 0 8px;">Commission Earned</p>
                      <p style="font-family:Georgia,serif;font-size:42px;font-weight:700;color:#E8610A;margin:0;">$\${commissionAmount.toFixed(2)}</p>
                      <p style="font-size:13px;color:#888;margin:8px 0 0;">every month, recurring</p>
                    </div>
                    <p style="color:#555;font-size:14px;line-height:1.7;">Keep sharing your link to earn more. Payouts are processed monthly on the 1st.</p>
                    <a href="https://www.traffikora.com/dashboard/referral" style="display:inline-block;background:linear-gradient(135deg,#E8610A,#C84E06);color:#fff;padding:14px 32px;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;margin-top:8px;">View Your Earnings \u2192</a>
                    <p style="font-size:11px;color:#aaa;margin-top:24px;">Traffikora \u2014 Set it once. It markets forever.</p>
                  </div>\`
                })
              }
            }
          }
        }
      } catch (refErr) {
        console.error('Referral commission error:', refErr)
      }
    }
    // ── END REFERRAL COMMISSION ───────────────────────────────────
`;

// Insert commission code before the final return in the webhook
if (!webhook.includes('REFERRAL COMMISSION')) {
  webhook = webhook.replace(
    'return NextResponse.json({ received: true })',
    commissionCode + '\n    return NextResponse.json({ received: true })'
  );
  fs.writeFileSync(stripeWebhookPath, webhook, 'utf8');
  console.log('SUCCESS: Stripe webhook — referral commission wired');
} else {
  console.log('SKIPPED: Referral commission already in webhook');
}

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\signup\\page.tsx', signup, 'utf8');
console.log('SUCCESS: signup/page.tsx — referral cookie tracking + signup tracking wired');