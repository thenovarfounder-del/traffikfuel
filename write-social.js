// @ts-nocheck
const fs = require('fs');
const path = require('path');

const dashPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\page.tsx');

const content = `// @ts-nocheck
'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const CARDS = [
  { title: 'Blog Generator', desc: 'Generate SEO blog posts with one click. Ranks on Google and gets cited by ChatGPT.', href: '/dashboard/blog', label: 'Generate Post', color: '#f97316', icon: '✍' },
  { title: 'Social Media', desc: 'Create platform-specific posts for Facebook, Instagram, TikTok, LinkedIn and more.', href: '/dashboard/social', label: 'Create Posts', color: '#f97316', icon: '📱' },
  { title: 'One-Push Publish', desc: 'Enter one topic and publish blog + all social posts simultaneously in one click.', href: '/dashboard/publish', label: 'Publish Now', color: '#f97316', icon: '🚀' },
  { title: 'Content Queue', desc: 'View and manage all your scheduled and published social posts in one place.', href: '/dashboard/content/queue', label: 'View Queue', color: '#3b82f6', icon: '📋' },
  { title: 'Content Calendar', desc: 'See all your scheduled content on a monthly calendar view by platform.', href: '/dashboard/calendar', label: 'Open Calendar', color: '#3b82f6', icon: '📅' },
  { title: 'AI Agents', desc: 'Your 4 AI agents running 24/7 — strategist, creator, publisher, and monitor.', href: '/dashboard/agents', label: 'View Agents', color: '#a855f7', icon: '🤖' },
  { title: 'Business Brain', desc: 'Enter your website URL and AI builds your complete marketing profile automatically.', href: '/dashboard/brain', label: 'Build Brain', color: '#22c55e', icon: '🧠' },
  { title: 'Business Settings', desc: 'Set up your business name, category, city, platforms and publishing mode.', href: '/dashboard/settings', label: 'Go to Settings', color: '#22c55e', icon: '⚙' },
  { title: 'Analytics', desc: 'Track your content performance across all platforms with real data.', href: '/dashboard/analytics', label: 'View Analytics', color: '#22c55e', icon: '📊' },
  { title: 'WordPress', desc: 'Connect your WordPress site to publish blog posts directly from Traffikora.', href: '/dashboard/wordpress', label: 'Connect', color: '#64748b', icon: '🌐' },
  { title: 'Billing', desc: 'Manage your subscription, view invoices, and update payment details.', href: '/dashboard/billing', label: 'View Billing', color: '#64748b', icon: '💳' },
  { title: 'Support', desc: 'Need help? Our team is standing by to assist you with anything.', href: '/dashboard/support', label: 'Get Help', color: '#64748b', icon: '💬' },
]

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [stats, setStats] = useState({ total: 0, published: 0, scheduled: 0 })

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
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 32px' }}>

        {/* Header */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>DASHBOARD</div>
          <h1 style={{ fontSize: '36px', fontWeight: '300', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
            Welcome back<span style={{ color: '#f97316' }}>.</span>
          </h1>
          <p style={{ color: '#64748b', margin: 0, fontSize: '14px' }}>{user?.email}</p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
          {[
            { label: 'Total Posts', value: stats.total, color: '#f97316' },
            { label: 'Published', value: stats.published, color: '#22c55e' },
            { label: 'Scheduled', value: stats.scheduled, color: '#3b82f6' }
          ].map(stat => (
            <div key={stat.label} style={{ backgroundColor: '#111', borderRadius: '16px', border: '1px solid #1a1a1a', padding: '24px 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>{stat.label}</div>
                <div style={{ fontSize: '36px', fontWeight: '700', color: stat.color, lineHeight: 1 }}>{stat.value}</div>
              </div>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: stat.color + '15', border: '1px solid ' + stat.color + '30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>
                {stat.label === 'Total Posts' ? '📊' : stat.label === 'Published' ? '✅' : '🕐'}
              </div>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {CARDS.map(card => (
            <div key={card.title}
              onClick={() => router.push(card.href)}
              style={{ backgroundColor: '#111', borderRadius: '16px', border: '1px solid #1a1a1a', padding: '28px', cursor: 'pointer', transition: 'border-color 0.2s', position: 'relative', overflow: 'hidden' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = card.color + '60'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1a1a1a'}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', backgroundColor: card.color + '08', pointerEvents: 'none' }} />
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: card.color + '15', border: '1px solid ' + card.color + '30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>{card.icon}</div>
              </div>
              <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px', color: '#fff' }}>{card.title}</div>
              <div style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', marginBottom: '20px' }}>{card.desc}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: '600', color: card.color }}>
                {card.label} <span style={{ fontSize: '16px' }}>→</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
`;

fs.writeFileSync(dashPath, content, 'utf8');
console.log('DONE - Dashboard home page fully redesigned');