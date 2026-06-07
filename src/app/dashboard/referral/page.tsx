// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const PLAN_COMMISSIONS = [
  { plan: 'Starter', price: '$47/mo', rate: '20%', earn: '$9.40/mo', color: '#E8610A' },
  { plan: 'Pro', price: '$97/mo', rate: '20%', earn: '$19.40/mo', color: '#E8610A' },
  { plan: 'Agency', price: '$297/mo', rate: '20%', earn: '$59.40/mo', color: '#a855f7' },
  { plan: 'Enterprise', price: '$997/mo', rate: '20%', earn: '$199.40/mo', color: '#22c55e' },
]

export default function ReferralPage() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [referralCode, setReferralCode] = useState(null)
  const [loading, setLoading] = useState(true)
  const [copied, setCopied] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [conversions, setConversions] = useState([])

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

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

      const { data: convs } = await supabase
        .from('referral_conversions')
        .select('*')
        .eq('referrer_id', user.id)
        .order('created_at', { ascending: false })
      if (convs) setConversions(convs)

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

  if (loading) return <div style={{ minHeight: '100vh', backgroundColor: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8610A', fontFamily: 'DM Sans, sans-serif' }}>Loading your referral dashboard...</div>

  const referralLink = `https://www.traffikora.com/signup?ref=${referralCode?.code}`
  const totalEarned = referralCode?.total_earned || 0
  const totalPaid = referralCode?.total_paid || 0
  const pendingPayout = totalEarned - totalPaid

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#080808', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes shimmer { 0%{left:-60%} 60%,100%{left:130%} }
        .share-btn { transition: transform 0.15s, opacity 0.15s; }
        .share-btn:hover { transform: translateY(-2px); opacity: 0.9; }
      `}</style>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: isMobile ? '24px 16px' : '48px 32px' }}>

        {/* HEADER */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>Refer & Earn</div>
          <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: isMobile ? '24px' : '36px', fontWeight: 900, margin: '0 0 8px', color: '#fff', letterSpacing: '1px' }}>
            YOUR REFERRAL <span style={{ color: '#E8610A' }}>ENGINE</span>
          </h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 300 }}>Share Traffikora and earn <strong style={{ color: '#E8610A' }}>20% recurring cash</strong> every month for every paying customer you refer.</p>
        </div>

        {/* STATS ROW */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '12px', marginBottom: '28px' }}>
          {[
            { label: 'Total Clicks', value: referralCode?.total_clicks || 0, color: '#3b82f6', icon: '👁️' },
            { label: 'Signups', value: referralCode?.total_signups || 0, color: '#a855f7', icon: '👤' },
            { label: 'Paying Customers', value: referralCode?.total_conversions || 0, color: '#22c55e', icon: '✅' },
            { label: 'Total Earned', value: '$' + totalEarned.toFixed(2), color: '#E8610A', icon: '💰' },
          ].map(stat => (
            <div key={stat.label} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '6px', fontWeight: 600 }}>{stat.label}</div>
                <div style={{ fontSize: '26px', fontWeight: 800, color: stat.color, fontFamily: 'Orbitron, sans-serif' }}>{stat.value}</div>
              </div>
              <div style={{ fontSize: '24px' }}>{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* PAYOUT BANNER */}
        {pendingPayout > 0 && (
          <div style={{ background: 'linear-gradient(135deg,#0a1f0a,#111)', border: '1px solid #22c55e40', borderRadius: '14px', padding: '20px 24px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '13px', color: '#22c55e', fontWeight: 700, marginBottom: '4px' }}>💸 Pending Payout</div>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '28px', fontWeight: 900, color: '#22c55e' }}>${pendingPayout.toFixed(2)}</div>
              <div style={{ fontSize: '12px', color: '#555', marginTop: '4px' }}>Paid out monthly on the 1st. Minimum $50.</div>
            </div>
            <a href="mailto:support@traffikora.com?subject=Payout Request" style={{ background: 'linear-gradient(135deg,#22c55e,#16a34a)', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>Request Payout →</a>
          </div>
        )}

        {/* YOUR LINK */}
        <div style={{ background: 'linear-gradient(135deg,#1a0800,#111)', border: '1px solid rgba(232,97,10,0.3)', borderRadius: '16px', padding: isMobile ? '24px 20px' : '32px', marginBottom: '24px' }}>
          <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>Your Unique Referral Link</div>
          <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: isMobile ? '24px' : '36px', fontWeight: 900, color: '#E8610A', letterSpacing: '2px', marginBottom: '20px' }}>
            {referralCode?.code || '...'}
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: '8px', padding: '12px 16px', fontSize: '13px', color: '#888', fontFamily: 'monospace', wordBreak: 'break-all', minWidth: '200px' }}>
              {referralLink}
            </div>
            <button onClick={copyLink} style={{ padding: '13px 28px', borderRadius: '8px', border: 'none', background: copied ? '#22c55e' : 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap', boxShadow: '0 4px 20px rgba(232,97,10,0.4)', position: 'relative', overflow: 'hidden' }}>
              {copied ? '✓ Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>

        {/* COMMISSION TABLE */}
        <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: isMobile ? '20px' : '28px', marginBottom: '24px' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>💰 What You Earn Per Referral</div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '12px' }}>
            {PLAN_COMMISSIONS.map(p => (
              <div key={p.plan} style={{ background: '#0d0d0d', border: '1px solid #1e1e1e', borderRadius: '10px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{p.plan}</div>
                <div style={{ fontSize: '11px', color: '#555', marginBottom: '8px' }}>{p.price}</div>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '18px', fontWeight: 900, color: p.color }}>{p.earn}</div>
                <div style={{ fontSize: '10px', color: '#555', marginTop: '4px' }}>every month</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '16px', padding: '14px', background: '#0d0d0d', borderRadius: '10px', textAlign: 'center' }}>
            <span style={{ fontSize: '13px', color: '#aaa' }}>Refer 10 Pro users = </span>
            <span style={{ fontSize: '15px', fontWeight: 800, color: '#E8610A', fontFamily: 'Orbitron, sans-serif' }}>$194/mo</span>
            <span style={{ fontSize: '13px', color: '#aaa' }}> recurring. Every. Single. Month.</span>
          </div>
        </div>

        {/* SHARE BUTTONS */}
        <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: isMobile ? '20px' : '28px', marginBottom: '24px' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>🚀 Share Your Link</div>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {[
              { label: 'WhatsApp', color: '#25D366', href: `https://wa.me/?text=Hey!%20I%20use%20Traffikora%20to%20automate%20all%20my%20marketing%20%E2%80%94%20try%20it%20free%3A%20${encodeURIComponent(referralLink)}` },
              { label: 'SMS', color: '#6366f1', href: `sms:?body=I%20use%20Traffikora%20to%20automate%20my%20marketing%20%E2%80%94%20try%20it%3A%20${referralLink}` },
              { label: 'Facebook', color: '#1877F2', href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralLink)}` },
              { label: 'X / Twitter', color: '#000', href: `https://twitter.com/intent/tweet?text=I%20use%20Traffikora%20to%20automate%20all%20my%20marketing%20automatically%20%E2%80%94%20try%20it%20free%3A&url=${encodeURIComponent(referralLink)}` },
              { label: 'LinkedIn', color: '#0A66C2', href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(referralLink)}` },
              { label: 'Email', color: '#1a1a1a', href: `mailto:?subject=Try%20Traffikora%20free&body=Hey!%20I%20use%20Traffikora%20to%20automate%20all%20my%20marketing.%20Get%2020%25%20off%20your%20first%20month%3A%20${encodeURIComponent(referralLink)}` },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="share-btn"
                style={{ padding: '10px 20px', borderRadius: '8px', background: s.color, color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: 600, border: s.color === '#1a1a1a' ? '1px solid #2a2a2a' : 'none' }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* BECOME AN AFFILIATE */}
        <div style={{ background: 'linear-gradient(135deg,#0d0614,#111)', border: '1px solid rgba(168,85,247,0.3)', borderRadius: '16px', padding: isMobile ? '24px 20px' : '32px', marginBottom: '24px' }}>
          <div style={{ fontSize: '11px', color: '#a855f7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>Want to earn more?</div>
          <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: isMobile ? '18px' : '24px', fontWeight: 900, color: '#fff', marginBottom: '12px', letterSpacing: '1px' }}>
            BECOME A <span style={{ color: '#a855f7' }}>TRAFFIKORA AFFILIATE</span>
          </h2>
          <p style={{ fontSize: '14px', color: '#888', lineHeight: 1.7, marginBottom: '20px', fontWeight: 300 }}>
            Influencers, agencies, and marketers earn <strong style={{ color: '#a855f7' }}>30% recurring commission</strong> instead of 20%. Get a co-branded landing page, marketing materials, email swipe copy, and your own affiliate dashboard. Apply below.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '12px', marginBottom: '20px' }}>
            {[
              { icon: '💰', title: '30% Recurring', desc: 'Every month, for life of customer' },
              { icon: '🎨', title: 'Co-Branded Page', desc: 'Your own landing page on Traffikora' },
              { icon: '📧', title: 'Swipe Copy', desc: 'Email templates and social posts ready to go' },
            ].map(f => (
              <div key={f.title} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '10px', padding: '16px', display: 'flex', gap: '12px' }}>
                <div style={{ fontSize: '20px' }}>{f.icon}</div>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '3px' }}>{f.title}</div>
                  <div style={{ fontSize: '11px', color: '#555', fontWeight: 300 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <a href="/affiliates" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#a855f7,#7c3aed)', color: '#fff', padding: '13px 32px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 20px rgba(168,85,247,0.4)' }}>
            Apply to Become an Affiliate →
          </a>
        </div>

        {/* CONVERSIONS TABLE */}
        {conversions.length > 0 && (
          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: isMobile ? '20px' : '28px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>📊 Your Conversions</div>
            {conversions.map(c => (
              <div key={c.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #1a1a1a', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{c.plan} Plan</div>
                  <div style={{ fontSize: '11px', color: '#555' }}>{new Date(c.created_at).toLocaleDateString()}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#E8610A' }}>${c.commission_amount.toFixed(2)}/mo</div>
                  <div style={{ fontSize: '11px', color: c.status === 'active' ? '#22c55e' : '#555' }}>{c.status}</div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
