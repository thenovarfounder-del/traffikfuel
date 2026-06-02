const fs = require('fs')
const path = require('path')

// 1. Referral API route
const apiDir = 'C:/Users/randy/traffikfuel/src/app/api/referral'
fs.mkdirSync(apiDir, { recursive: true })

const apiRoute = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function generateCode(name) {
  const clean = (name || 'USER').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 5) || 'USER'
  const num = Math.floor(100 + Math.random() * 900)
  return clean + num
}

export async function POST(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const { userId, name } = await request.json()
  const { data: existing } = await supabase
    .from('referral_codes')
    .select('*')
    .eq('user_id', userId)
    .single()
  if (existing) return NextResponse.json({ code: existing })
  let code = generateCode(name)
  let attempts = 0
  while (attempts < 10) {
    const { data: conflict } = await supabase.from('referral_codes').select('id').eq('code', code).single()
    if (!conflict) break
    code = generateCode(name)
    attempts++
  }
  const { data, error } = await supabase.from('referral_codes').insert({
    user_id: userId,
    code
  }).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ code: data })
}

export async function GET(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')
  const { data, error } = await supabase
    .from('referral_codes')
    .select('*')
    .eq('user_id', userId)
    .single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ code: data })
}
`
fs.writeFileSync(path.join(apiDir, 'route.ts'), apiRoute)

// 2. Referral dashboard page
const pageDir = 'C:/Users/randy/traffikfuel/src/app/dashboard/referral'
fs.mkdirSync(pageDir, { recursive: true })

const page = `// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function ReferralPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [referralCode, setReferralCode] = useState(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const [referrals, setReferrals] = useState([])

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setUser(user)
      const res = await fetch(\`/api/referral?userId=\${user.id}\`)
      const data = await res.json()
      if (data.code) {
        setReferralCode(data.code)
      } else {
        const name = user.user_metadata?.full_name || user.email
        const createRes = await fetch('/api/referral', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user.id, name })
        })
        const created = await createRes.json()
        if (created.code) setReferralCode(created.code)
      }
      const { data: refs } = await supabase
        .from('referrals')
        .select('*')
        .eq('referrer_id', user.id)
        .order('created_at', { ascending: false })
      if (refs) setReferrals(refs)
      setLoading(false)
    }
    load()
  }, [])

  function copyLink() {
    const link = \`https://www.traffikora.com/signup?ref=\${referralCode?.code}\`
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function copyCode() {
    navigator.clipboard.writeText(referralCode?.code || '')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316' }}>
      Loading your referral code...
    </div>
  )

  const referralLink = \`https://www.traffikora.com/signup?ref=\${referralCode?.code}\`

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 32px' }}>

        <button onClick={() => router.push('/dashboard')} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '13px', marginBottom: '20px', padding: 0 }}>
          \u2190 Back to Dashboard
        </button>

        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>Referral Program</div>
          <h1 style={{ fontSize: '36px', fontWeight: '300', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
            Refer & Earn<span style={{ color: '#f97316' }}>.</span>
          </h1>
          <p style={{ color: '#64748b', margin: 0, fontSize: '14px' }}>Share Traffikora and earn free months for every paying customer you refer.</p>
        </div>

        {/* How it works */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {[
            { step: '1', title: 'Share your link', desc: 'Send your unique referral link to anyone who needs better marketing.' },
            { step: '2', title: 'They sign up', desc: 'Your friend creates an account and gets 20% off their first month.' },
            { step: '3', title: 'You earn free months', desc: 'Every paying referral earns you 1 free month of Traffikora.' }
          ].map(item => (
            <div key={item.step} style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1a1a1a', padding: '24px 20px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#f9731615', border: '1px solid #f9731640', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f97316', fontWeight: '700', fontSize: '16px', marginBottom: '14px' }}>{item.step}</div>
              <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>{item.title}</div>
              <div style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Your code */}
        <div style={{ backgroundColor: '#111', borderRadius: '16px', border: '1px solid #f9731630', padding: '32px', marginBottom: '32px', background: 'linear-gradient(135deg, #111 0%, #0f0a00 100%)' }}>
          <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px' }}>Your Referral Code</div>
          <div style={{ fontSize: '48px', fontWeight: '800', color: '#f97316', letterSpacing: '0.1em', marginBottom: '24px', fontFamily: 'monospace' }}>
            {referralCode?.code || 'Loading...'}
          </div>
          <div style={{ fontSize: '11px', color: '#64748b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your Referral Link</div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, backgroundColor: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: '8px', padding: '12px 16px', fontSize: '13px', color: '#94a3b8', fontFamily: 'monospace', wordBreak: 'break-all' }}>
              {referralLink}
            </div>
            <button onClick={copyLink} style={{ padding: '12px 24px', borderRadius: '10px', border: 'none', background: copied ? '#22c55e' : 'linear-gradient(135deg, #f97316, #ea6a0a)', color: '#fff', fontSize: '13px', fontWeight: '700', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              {copied ? '\u2713 Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {[
            { label: 'Total Referrals', value: referralCode?.total_referrals || 0, color: '#f97316' },
            { label: 'Paid Conversions', value: referralCode?.paid_referrals || 0, color: '#22c55e' },
            { label: 'Free Months Earned', value: referralCode?.credits_earned || 0, color: '#3b82f6' }
          ].map(stat => (
            <div key={stat.label} style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1a1a1a', padding: '24px' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: stat.color, marginBottom: '4px' }}>{stat.value}</div>
              <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Share buttons */}
        <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1a1a1a', padding: '24px' }}>
          <div style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px' }}>Share your link</div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href={\`https://www.facebook.com/sharer/sharer.php?u=\${encodeURIComponent(referralLink)}\`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#1877F2', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>Share on Facebook</a>
            <a href={\`https://twitter.com/intent/tweet?text=I%20use%20Traffikora%20to%20automate%20my%20marketing%20%E2%80%94%20you%20should%20try%20it%3A&url=\${encodeURIComponent(referralLink)}\`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#000', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>Share on X</a>
            <a href={\`https://www.linkedin.com/sharing/share-offsite/?url=\${encodeURIComponent(referralLink)}\`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#0A66C2', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>Share on LinkedIn</a>
            <a href={\`mailto:?subject=Try%20Traffikora%20for%20free&body=Hey!%20I%20use%20Traffikora%20to%20automate%20all%20my%20marketing.%20Use%20my%20link%20to%20get%2020%25%20off%20your%20first%20month%3A%20\${encodeURIComponent(referralLink)}\`} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>Share via Email</a>
          </div>
        </div>

      </div>
    </div>
  )
}
`
fs.writeFileSync(path.join(pageDir, 'page.tsx'), page)
console.log('SUCCESS: Referral program built')