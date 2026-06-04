// @ts-nocheck
'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const QUICK_ACTIONS = [
  { title: 'Generate Blog Post', desc: 'SEO content in 30 seconds', href: '/dashboard/content/blog', icon: '✏️', color: '#E8610A' },
  { title: 'Create Social Posts', desc: '9 platforms at once', href: '/dashboard/social', icon: '📱', color: '#E8610A' },
  { title: 'One-Push Publish', desc: 'Blog + social simultaneously', href: '/dashboard/publish', icon: '🚀', color: '#E8610A' },
]

const AGENTS = [
  { name: 'Strategist Agent', desc: 'Planning your content calendar', status: 'active' },
  { name: 'Creator Agent', desc: 'Generating SEO content', status: 'active' },
  { name: 'Publisher Agent', desc: 'Scheduling and publishing', status: 'active' },
  { name: 'Monitor Agent', desc: 'Tracking performance signals', status: 'active' },
]

const CARDS = [
  { title: 'Blog Generator', desc: 'Generate SEO blog posts that rank on Google and get cited by ChatGPT.', href: '/dashboard/content/blog', label: 'Generate Post', color: '#E8610A', icon: '✏️' },
  { title: 'Social Media', desc: 'Create platform-specific posts for Facebook, Instagram, TikTok, LinkedIn and more.', href: '/dashboard/social', label: 'Create Posts', color: '#E8610A', icon: '📱' },
  { title: 'One-Push Publish', desc: 'Enter one topic and publish blog + all social posts simultaneously.', href: '/dashboard/publish', label: 'Publish Now', color: '#E8610A', icon: '🚀' },
  { title: 'Content Queue', desc: 'View and manage all your scheduled and published social posts.', href: '/dashboard/content/queue', label: 'View Queue', color: '#3b82f6', icon: '📋' },
  { title: 'Content Calendar', desc: 'See all your scheduled content on a monthly calendar view.', href: '/dashboard/calendar', label: 'Open Calendar', color: '#3b82f6', icon: '📅' },
  { title: 'AI Agents', desc: 'Your 4 AI agents running 24/7 — strategist, creator, publisher, monitor.', href: '/dashboard/agents', label: 'View Agents', color: '#a855f7', icon: '🤖' },
  { title: 'LLM Engine', desc: 'Optimize your content to be cited by ChatGPT, Gemini, and Perplexity.', href: '/dashboard/llm-engine', label: 'Open Engine', color: '#a855f7', icon: '🧠' },
  { title: 'Business Brain', desc: 'AI builds your complete marketing profile from your website URL.', href: '/dashboard/brain', label: 'Build Brain', color: '#22c55e', icon: '🧠' },
  { title: 'Business Settings', desc: 'Set up your business name, category, city, platforms and publishing mode.', href: '/dashboard/settings', label: 'Go to Settings', color: '#22c55e', icon: '⚙️' },
  { title: 'Analytics', desc: 'Track your content performance across all platforms with real data.', href: '/dashboard/analytics', label: 'View Analytics', color: '#22c55e', icon: '📊' },
  { title: 'Billing', desc: 'Manage your subscription, view invoices, and update payment details.', href: '/dashboard/billing', label: 'View Billing', color: '#64748b', icon: '💳' },
  { title: 'Support', desc: 'Need help? Our team is standing by to assist you with anything.', href: '/dashboard/support', label: 'Get Help', color: '#64748b', icon: '💬' },
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
  const [stats, setStats] = useState({ total: 0, published: 0, scheduled: 0 })
  const [pulse, setPulse] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setUser(user)
      const { data } = await supabase
        .from('content_calendar')
        .select('status')
        .eq('user_id', user.id)
      if (data) {
        setStats({
          total: data.length,
          published: data.filter(p => p.status === 'published').length,
          scheduled: data.filter(p => p.status === 'scheduled').length
        })
      }
    }
    load()
    const interval = setInterval(() => setPulse(p => !p), 1500)
    return () => clearInterval(interval)
  }, [])

  const firstName = user?.email?.split('@')[0] || 'there'

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#080808', color: '#fff', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes slideIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        .dash-card { transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; }
        .dash-card:hover { transform: translateY(-2px); }
        .quick-btn { transition: all 0.2s; }
        .quick-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(232,97,10,0.25); }
      `}</style>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 32px', animation: 'slideIn 0.4s ease' }}>

        {/* HEADER */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '10px' }}>Traffikora Dashboard</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, margin: '0 0 8px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>
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

        {/* STATS BAR */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '32px' }}>
          {[
            { label: 'Total Content', value: stats.total, color: '#E8610A', icon: '📝' },
            { label: 'Published', value: stats.published, color: '#22c55e', icon: '✅' },
            { label: 'Scheduled', value: stats.scheduled, color: '#3b82f6', icon: '🕒' },
            { label: 'Platforms Active', value: '9+', color: '#a855f7', icon: '🌐' },
          ].map(stat => (
            <div key={stat.label} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '20px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px', fontWeight: 600 }}>{stat.label}</div>
                <div style={{ fontSize: '32px', fontWeight: 800, color: stat.color, lineHeight: 1, fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
              </div>
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: stat.color + '18', border: '1px solid ' + stat.color + '35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{stat.icon}</div>
            </div>
          ))}
        </div>

        {/* QUICK ACTIONS */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', color: '#555', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '14px' }}>Quick Actions</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {QUICK_ACTIONS.map(a => (
              <button key={a.title} className="quick-btn" onClick={() => router.push(a.href)}
                style={{ background: 'linear-gradient(135deg, #1a1a1a, #111)', border: '1px solid #E8610A30', borderRadius: '12px', padding: '18px 20px', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#E8610A18', border: '1px solid #E8610A35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{a.icon}</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>{a.title}</div>
                  <div style={{ fontSize: '12px', color: '#555', fontWeight: 300 }}>{a.desc}</div>
                </div>
                <div style={{ marginLeft: 'auto', color: '#E8610A', fontSize: '18px', flexShrink: 0 }}>→</div>
              </button>
            ))}
          </div>
        </div>

        {/* AI AGENTS STATUS */}
        <div style={{ marginBottom: '32px', background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
            <div style={{ fontSize: '11px', color: '#555', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em' }}>AI Agents Status</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 1.5s ease-in-out infinite' }} />
              <span style={{ fontSize: '11px', color: '#22c55e', fontWeight: 700 }}>ALL SYSTEMS LIVE</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
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

        {/* ALL FEATURES GRID */}
        <div style={{ fontSize: '11px', color: '#555', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '14px' }}>All Features</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
          {CARDS.map(card => (
            <div key={card.title} className="dash-card"
              onClick={() => router.push(card.href)}
              style={{ background: '#0d0d0d', borderRadius: '14px', border: '1px solid #1a1a1a', padding: '24px', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = card.color + '50'; e.currentTarget.style.boxShadow = '0 8px 32px ' + card.color + '12'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1a1a1a'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '100px', height: '100px', borderRadius: '50%', background: card.color + '06', pointerEvents: 'none' }} />
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: card.color + '15', border: '1px solid ' + card.color + '30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', marginBottom: '14px' }}>{card.icon}</div>
              <div style={{ fontSize: '15px', fontWeight: 700, marginBottom: '6px', color: '#fff' }}>{card.title}</div>
              <div style={{ fontSize: '12px', color: '#555', lineHeight: 1.7, marginBottom: '16px', fontWeight: 300 }}>{card.desc}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: 700, color: card.color }}>
                {card.label} <span>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
