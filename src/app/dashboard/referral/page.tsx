// @ts-nocheck
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
      const res = await fetch(`/api/referral?userId=${user.id}`)
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
    const link = `https://www.traffikora.com/signup?ref=${referralCode?.code}`
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

  const referralLink = `https://www.traffikora.com/signup?ref=${referralCode?.code}`

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 32px' }}>

        <button onClick={() => router.push('/dashboard')} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', fontSize: '13px', marginBottom: '20px', padding: 0 }}>
          ← Back to Dashboard
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
              {copied ? '✓ Copied!' : 'Copy Link'}
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
            <a href={`https://wa.me/?text=Hey!%20I%20use%20Traffikora%20to%20automate%20all%20my%20marketing%20%E2%80%94%20try%20it%20free%3A%20${encodeURIComponent(referralLink)}`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#25D366', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href={`sms:?body=Hey!%20I%20use%20Traffikora%20to%20automate%20my%20marketing%20%E2%80%94%20try%20it%20free%3A%20${referralLink}`} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#6366f1', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
              Text a Friend
            </a>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#1877F2', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Facebook
            </a>
            <a href={`https://twitter.com/intent/tweet?text=I%20use%20Traffikora%20to%20automate%20my%20marketing%20%E2%80%94%20you%20should%20try%20it%3A&url=${encodeURIComponent(referralLink)}`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#000', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              X (Twitter)
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#0A66C2', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href={`mailto:?subject=Try%20Traffikora%20for%20free&body=Hey!%20I%20use%20Traffikora%20to%20automate%20all%20my%20marketing.%20Use%20my%20link%20to%20get%2020%25%20off%20your%20first%20month%3A%20${encodeURIComponent(referralLink)}`} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
