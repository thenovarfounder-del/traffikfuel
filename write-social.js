// @ts-nocheck
const fs = require('fs');
const path = require('path');

// Create Analytics page
const analyticsPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\analytics\\page.tsx');
const analyticsDir = path.dirname(analyticsPath);
if (!fs.existsSync(analyticsDir)) {
  fs.mkdirSync(analyticsDir, { recursive: true });
}

const analyticsContent = `// @ts-nocheck
'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function Analytics() {
  const [stats, setStats] = useState({
    totalPosts: 0,
    published: 0,
    scheduled: 0,
    draft: 0,
    facebook: 0,
    instagram: 0,
    linkedin: 0,
    blog: 0
  })
  const [recentPosts, setRecentPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setLoading(false); return }
    const { data } = await supabase
      .from('content_calendar')
      .select('*')
      .eq('user_id', user.id)
      .order('scheduled_at', { ascending: false })
    if (data) {
      setStats({
        totalPosts: data.length,
        published: data.filter(p => p.status === 'published').length,
        scheduled: data.filter(p => p.status === 'scheduled').length,
        draft: data.filter(p => p.status === 'draft').length,
        facebook: data.filter(p => p.platform === 'facebook').length,
        instagram: data.filter(p => p.platform === 'instagram').length,
        linkedin: data.filter(p => p.platform === 'linkedin').length,
        blog: data.filter(p => p.platform === 'blog' || p.content_type === 'blog').length
      })
      setRecentPosts(data.slice(0, 5))
    }
    setLoading(false)
  }

  const statCards = [
    { label: 'Total Posts', value: stats.totalPosts, color: '#f97316', icon: 'SS' },
    { label: 'Published', value: stats.published, color: '#22c55e', icon: 'PB' },
    { label: 'Scheduled', value: stats.scheduled, color: '#3b82f6', icon: 'SC' },
    { label: 'Draft', value: stats.draft, color: '#94a3b8', icon: 'DR' }
  ]

  const platformCards = [
    { label: 'Facebook', value: stats.facebook, color: '#1877F2' },
    { label: 'Instagram', value: stats.instagram, color: '#E1306C' },
    { label: 'LinkedIn', value: stats.linkedin, color: '#0A66C2' },
    { label: 'Blog', value: stats.blog, color: '#f97316' }
  ]

  const statusColor = (s) => s === 'published' ? '#22c55e' : s === 'scheduled' ? '#f97316' : '#94a3b8'

  if (loading) return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#94a3b8' }}>Loading analytics...</div>
  )

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', padding: '40px 32px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 8px 0' }}>Performance Analytics</h1>
          <p style={{ color: '#94a3b8', margin: 0 }}>Track your content performance across all platforms</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {statCards.map(card => (
            <div key={card.label} style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', color: card.color, marginBottom: '4px' }}>{card.value}</div>
              <div style={{ fontSize: '13px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{card.label}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 16px 0' }}>Posts by Platform</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {platformCards.map(card => (
            <div key={card.label} style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px' }}>
              <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '16px' }}>{card.label}</div>
              <div style={{ fontSize: '36px', fontWeight: '800', color: card.color, marginBottom: '8px' }}>{card.value}</div>
              <div style={{ backgroundColor: '#1a1a1a', borderRadius: '4px', height: '6px', overflow: 'hidden' }}>
                <div style={{ height: '100%', borderRadius: '4px', backgroundColor: card.color, width: stats.totalPosts > 0 ? (card.value / stats.totalPosts * 100) + '%' : '0%' }} />
              </div>
              <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '6px' }}>
                {stats.totalPosts > 0 ? Math.round(card.value / stats.totalPosts * 100) : 0}% of total
              </div>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 20px 0' }}>Recent Activity</h2>
          {recentPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>No posts yet.</div>
          ) : recentPosts.map(post => (
            <div key={post.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 0', borderBottom: '1px solid #1f1f1f' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{post.title || 'Untitled Post'}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>{post.platform} -- {post.scheduled_at ? new Date(post.scheduled_at).toLocaleDateString() : '--'}</div>
              </div>
              <span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', backgroundColor: statusColor(post.status) + '22', color: statusColor(post.status) }}>{post.status}</span>
            </div>
          ))}
        </div>

        <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0' }}>Advanced Analytics</h2>
          <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 20px 0' }}>Google Search Console, social platform insights, and AI engine tracking coming in Phase 3.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {['Google Search Console', 'Social Platform Insights', 'AI Engine Tracking'].map(item => (
              <div key={item} style={{ backgroundColor: '#0a0a0a', borderRadius: '8px', border: '1px solid #1f1f1f', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>{item}</div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Coming in Phase 3</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
`;

// Fix Manage Billing button in billing page
const billingPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\billing\\page.tsx');
let billingContent = fs.readFileSync(billingPath, 'utf8');
billingContent = billingContent.replace(
  `backgroundColor: '#f97316', color: '#fff', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>
                Manage Billing
              </button>`,
  `backgroundColor: '#f97316', color: '#fff', cursor: 'not-allowed', fontSize: '14px', fontWeight: '600', opacity: '0.6' }}>
                Manage Billing (Phase 4)
              </button>`
);

fs.writeFileSync(analyticsPath, analyticsContent, 'utf8');
fs.writeFileSync(billingPath, billingContent, 'utf8');
console.log('DONE - Analytics page created and Billing button updated');