// @ts-nocheck
'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import WelcomeModal from '@/components/WelcomeModal'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const PLAN_ORDER = ['free', 'trial', 'past_due', 'starter', 'pro', 'agency', 'enterprise']
function planRank(plan) { return PLAN_ORDER.indexOf(plan ?? 'free') }
function canAccess(userPlan, requiredPlan) { return planRank(userPlan) >= planRank(requiredPlan) }

const FREE_CARDS = [
  { title: 'Blog Generator', desc: 'Generate SEO blog posts that rank on Google and get cited by AI engines.', href: '/dashboard/content/blog', label: 'Generate Post', color: '#E8610A', icon: '✏️' },
  { title: 'Business Brain', desc: 'AI builds your complete marketing profile from your website URL.', href: '/dashboard/scrape', label: 'Build Brain', color: '#22c55e', icon: '🧠' },
  { title: 'Business Settings', desc: 'Set up your business name, category, city, platforms and publishing mode.', href: '/dashboard/settings', label: 'Go to Settings', color: '#22c55e', icon: '⚙️' },
  { title: 'Billing', desc: 'Manage your subscription, view invoices, and update payment details.', href: '/dashboard/billing', label: 'View Billing', color: '#64748b', icon: '💳' },
  { title: 'Support', desc: 'Need help? Our team is standing by to assist you with anything.', href: '/dashboard/support', label: 'Get Help', color: '#64748b', icon: '💬' },
]

const UPGRADE_CARDS = [
  { title: 'Social Media', desc: 'Create posts for Facebook, Instagram, TikTok, LinkedIn and more.', icon: '📱', plan: 'Starter — $47/mo' },
  { title: 'One-Push Publish', desc: 'Enter one topic and publish blog + all social posts simultaneously.', icon: '🚀', plan: 'Starter — $47/mo' },
  { title: 'Content Queue', desc: 'View and manage all your scheduled and published social posts.', icon: '📋', plan: 'Starter — $47/mo' },
  { title: 'Content Calendar', desc: 'See all your scheduled content on a monthly calendar view.', icon: '📅', plan: 'Starter — $47/mo' },
  { title: 'AI Agents (Auto Mode)', desc: 'Your 4 AI agents run every morning and handle everything automatically.', icon: '🤖', plan: 'Pro — $97/mo' },
  { title: 'LLM Engine', desc: 'Optimize your content to be cited by ChatGPT, Gemini, and Perplexity.', icon: '🧠', plan: 'Pro — $97/mo' },
]

const ALL_CARDS = [
  { title: 'Blog Generator', desc: 'Generate SEO blog posts that rank on Google and get cited by AI engines.', href: '/dashboard/content/blog', label: 'Generate Post', color: '#E8610A', icon: '✏️', required: 'free' },
  { title: 'Social Media', desc: 'Create platform-specific posts for Facebook, Instagram, TikTok, LinkedIn and more.', href: '/dashboard/social', label: 'Create Posts', color: '#E8610A', icon: '📱', required: 'starter', upgradeLabel: 'Starter+' },
  { title: 'One-Push Publish', desc: 'Enter one topic and publish blog + all social posts simultaneously.', href: '/dashboard/publish', label: 'Publish Now', color: '#E8610A', icon: '🚀', required: 'starter', upgradeLabel: 'Starter+' },
  { title: 'Content Queue', desc: 'View and manage all your scheduled and published social posts.', href: '/dashboard/content/queue', label: 'View Queue', color: '#3b82f6', icon: '📋', required: 'starter', upgradeLabel: 'Starter+' },
  { title: 'Content Calendar', desc: 'See all your scheduled content on a monthly calendar view.', href: '/dashboard/calendar', label: 'Open Calendar', color: '#3b82f6', icon: '📅', required: 'starter', upgradeLabel: 'Starter+' },
  { title: 'AI Agents', desc: 'Your 4 AI agents running 24/7 — strategist, creator, publisher, monitor.', href: '/dashboard/agents', label: 'View Agents', color: '#a855f7', icon: '🤖', required: 'pro', upgradeLabel: 'Pro+' },
  { title: 'LLM Engine', desc: 'Optimize your content to be cited by ChatGPT, Gemini, and Perplexity.', href: '/dashboard/llm-engine', label: 'Open Engine', color: '#a855f7', icon: '🧠', required: 'pro', upgradeLabel: 'Pro+' },
  { title: 'Business Brain', desc: 'AI builds your complete marketing profile from your website URL.', href: '/dashboard/scrape', label: 'Build Brain', color: '#22c55e', icon: '🧠', required: 'free' },
  { title: 'Business Settings', desc: 'Set up your business name, category, city, platforms and publishing mode.', href: '/dashboard/settings', label: 'Go to Settings', color: '#22c55e', icon: '⚙️', required: 'free' },
  { title: 'Billing', desc: 'Manage your subscription, view invoices, and update payment details.', href: '/dashboard/billing', label: 'View Billing', color: '#64748b', icon: '💳', required: 'free' },
  { title: 'Support', desc: 'Need help? Our team is standing by to assist you with anything.', href: '/dashboard/support', label: 'Get Help', color: '#64748b', icon: '💬', required: 'free' },
]

const AGENTS = [
  { name: 'Strategist Agent', desc: 'Planning your content calendar' },
  { name: 'Creator Agent', desc: 'Generating SEO content' },
  { name: 'Publisher Agent', desc: 'Scheduling and publishing' },
  { name: 'Monitor Agent', desc: 'Tracking performance signals' },
]

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [userStatus, setUserStatus] = useState(null)
  const [blogsUsed, setBlogsUsed] = useState(0)
  const [stats, setStats] = useState({ total: 0, published: 0, scheduled: 0 })
  const [isMobile, setIsMobile] = useState(false)

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
      const { data: userData } = await supabase.from('users').select('status').eq('id', user.id).single()
      const status = userData?.status || 'free'
      setUserStatus(status)
      if (status === 'free' || status === 'trial') {
        const now = new Date()
        const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()
        const { count } = await supabase.from('blog_generations').select('*', { count: 'exact', head: true }).eq('user_id', user.id).gte('created_at', firstOfMonth)
        setBlogsUsed(count || 0)
      }
      const { data } = await supabase.from('content_calendar').select('status').eq('user_id', user.id)
      if (data) {
        setStats({ total: data.length, published: data.filter(p => p.status === 'published').length, scheduled: data.filter(p => p.status === 'scheduled').length })
      }
    }
    load()
  }, [])

  if (userStatus === null) return <div style={{ minHeight: '100vh', backgroundColor: '#080808' }} />

  const firstName = user?.email?.split('@')[0] || 'there'
  const isFree = userStatus === 'free' || userStatus === 'trial'
  const allBlogsUsed = isFree && blogsUsed >= 3
  const blogsLeft = Math.max(0, 3 - blogsUsed)

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#080808', color: '#fff', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes slideIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .dash-card { transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; }
        .dash-card:hover { transform: translateY(-2px); }
      `}</style>

      <WelcomeModal userStatus={userStatus} userName={firstName} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '24px 16px' : '40px 32px', animation: 'slideIn 0.4s ease' }}>

        {/* HEADER */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '10px' }}>Traffikora Dashboard</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? '28px' : '38px', fontWeight: 700, margin: '0 0 8px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>
              {getGreeting()}, <em style={{ color: '#E8610A', fontStyle: 'italic' }}>{firstName}.</em>
            </h1>
            <p style={{ color: '#555', margin: 0, fontSize: '14px', fontWeight: 300 }}>Your AI marketing engine is running. Here’s your command center.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#111', border: '1px solid #1e1e1e', borderRadius: '10px', padding: '10px 18px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 1.5s ease-in-out infinite' }} />
            <span style={{ fontSize: '13px', color: '#22c55e', fontWeight: 700 }}>AI LIVE</span>
            <span style={{ fontSize: '12px', color: '#555', marginLeft: '4px' }}>24/7 running</span>
          </div>
        </div>

        {/* STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '12px', marginBottom: '24px' }}>
          {[
            { label: 'Total Content', value: stats.total, color: '#E8610A', icon: '📄' },
            { label: 'Published', value: stats.published, color: '#22c55e', icon: '✅' },
            { label: 'Scheduled', value: stats.scheduled, color: '#3b82f6', icon: '🕒' },
            { label: 'Platforms Active', value: '9+', color: '#a855f7', icon: '🌐' },
          ].map(stat => (
            <div key={stat.label} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '18px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px', fontWeight: 600 }}>{stat.label}</div>
                <div style={{ fontSize: '28px', fontWeight: 800, color: stat.color, lineHeight: 1, fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
              </div>
              <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: stat.color + '18', border: '1px solid ' + stat.color + '35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* PAST DUE BANNER */}
        {userStatus === 'past_due' && (
          <div style={{ marginBottom: '24px', background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '28px' }}>⚠️</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#ef4444', marginBottom: '4px' }}>Payment failed — your account is restricted</div>
                <div style={{ fontSize: '12px', color: '#888' }}>Update your payment method to restore full access.</div>
              </div>
            </div>
            <a href="/dashboard/billing" style={{ background: '#ef4444', color: '#fff', padding: '9px 20px', borderRadius: '7px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' }}>Update Payment Method</a>
          </div>
        )}

        {/* FREE USER LAYOUT */}
        {isFree ? (
          <>
            {/* Blog usage bar */}
            <div style={{ marginBottom: '28px', background: allBlogsUsed ? 'rgba(239,68,68,0.06)' : 'rgba(232,97,10,0.06)', border: '1px solid ' + (allBlogsUsed ? 'rgba(239,68,68,0.25)' : 'rgba(232,97,10,0.25)'), borderRadius: '14px', padding: '20px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ fontSize: '28px' }}>{allBlogsUsed ? '🔒' : '✏️'}</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: allBlogsUsed ? '#ef4444' : '#E8610A', marginBottom: '8px' }}>
                      {allBlogsUsed ? 'Monthly blog limit reached — upgrade to continue' : blogsLeft + ' of 3 free blogs remaining this month'}
                    </div>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      {[0,1,2].map(i => (
                        <div key={i} style={{ width: '32px', height: '8px', borderRadius: '4px', background: i < blogsUsed ? (allBlogsUsed ? '#ef4444' : '#E8610A') : '#2a2a2a' }} />
                      ))}
                      <span style={{ fontSize: '12px', color: '#555', marginLeft: '4px' }}>{blogsUsed}/3 used</span>
                    </div>
                  </div>
                </div>
                <a href="/pricing" style={{ background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '10px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 16px rgba(232,97,10,0.3)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Upgrade to Starter — $47/mo →
                </a>
              </div>
            </div>

            {/* What you have access to */}
            <div style={{ fontSize: '11px', color: '#22c55e', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>✓ Your Free Plan Features</div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '14px', marginBottom: '32px' }}>
              {FREE_CARDS.map(card => (
                <div key={card.title} className="dash-card"
                  onClick={() => router.push(card.href)}
                  style={{ background: '#0d0d0d', borderRadius: '14px', border: '1px solid #1a1a1a', padding: '22px', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = card.color + '60'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: card.color + '18', border: '1px solid ' + card.color + '35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '14px' }}>{card.icon}</div>
                  <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>{card.title}</div>
                  <div style={{ fontSize: '12px', color: '#555', lineHeight: 1.7, marginBottom: '14px', fontWeight: 300 }}>{card.desc}</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: card.color }}>{card.label} →</div>
                </div>
              ))}
            </div>

            {/* Upgrade section */}
            <div style={{ background: 'linear-gradient(135deg,#0d0600,#111)', border: '1px solid rgba(232,97,10,0.2)', borderRadius: '16px', padding: isMobile ? '24px 20px' : '32px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '8px' }}>🔒 Unlock More Power</div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? '22px' : '26px', fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.2 }}>
                    Upgrade and let Traffikora<br /><em style={{ color: '#E8610A', fontStyle: 'italic' }}>do everything for you.</em>
                  </h2>
                </div>
                <a href="/pricing" style={{ background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', boxShadow: '0 4px 20px rgba(232,97,10,0.4)', flexShrink: 0 }}>
                  See All Plans →
                </a>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '12px' }}>
                {UPGRADE_CARDS.map(card => (
                  <div key={card.title} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '12px', padding: '18px 20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '22px', flexShrink: 0 }}>{card.icon}</div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{card.title}</div>
                      <div style={{ fontSize: '11px', color: '#555', lineHeight: 1.6, marginBottom: '8px', fontWeight: 300 }}>{card.desc}</div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: '#E8610A', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{card.plan}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            {/* PAID USER — AI Agents */}
            <div style={{ marginBottom: '32px', background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                <div style={{ fontSize: '11px', color: '#555', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>AI Agents Status</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 1.5s ease-in-out infinite' }} />
                  <span style={{ fontSize: '11px', color: '#22c55e', fontWeight: 700 }}>ALL SYSTEMS LIVE</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '12px' }}>
                {AGENTS.map(agent => (
                  <div key={agent.name} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '10px', padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 1.5s ease-in-out infinite' }} />
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#fff' }}>{agent.name}</span>
                    </div>
                    <div style={{ fontSize: '11px', color: '#555', fontWeight: 300 }}>{agent.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* PAID USER — All feature cards */}
            <div style={{ fontSize: '11px', color: '#555', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '14px' }}>All Features</div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '14px' }}>
              {ALL_CARDS.map(card => {
                const locked = !canAccess(userStatus, card.required)
                return (
                  <div key={card.title} className="dash-card"
                    onClick={() => locked ? router.push('/pricing') : router.push(card.href)}
                    style={{ background: '#0d0d0d', borderRadius: '14px', border: '1px solid ' + (locked ? '#1e1e1e' : '#1a1a1a'), padding: '22px', cursor: 'pointer', position: 'relative', overflow: 'hidden', opacity: locked ? 0.6 : 1 }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = locked ? '#2a2a2a' : card.color + '50'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = locked ? '#1e1e1e' : '#1a1a1a'; }}>
                    {locked && card.upgradeLabel && (
                      <div style={{ position: 'absolute', top: '14px', right: '14px', background: 'rgba(232,97,10,0.12)', border: '1px solid rgba(232,97,10,0.3)', borderRadius: '6px', padding: '3px 9px', fontSize: '10px', fontWeight: 700, color: '#E8610A', letterSpacing: '0.08em' }}>
                        🔒 {card.upgradeLabel}
                      </div>
                    )}
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: card.color + '15', border: '1px solid ' + card.color + '30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '14px' }}>{card.icon}</div>
                    <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: locked ? '#555' : '#fff' }}>{card.title}</div>
                    <div style={{ fontSize: '12px', color: '#555', lineHeight: 1.7, marginBottom: '14px', fontWeight: 300 }}>{card.desc}</div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: locked ? '#E8610A' : card.color }}>
                      {locked ? 'Upgrade to unlock →' : card.label + ' →'}
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
