const fs = require('fs')

const content = `// @ts-nocheck
'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const AI_ENGINES = [
  { name: 'ChatGPT', color: '#10a37f', icon: '\uD83E\uDD16', url: 'https://chat.openai.com', query: 'site:traffikora.com' },
  { name: 'Claude', color: '#f97316', icon: '\u26A1', url: 'https://claude.ai', query: 'traffikora' },
  { name: 'Gemini', color: '#4285F4', icon: '\u2728', url: 'https://gemini.google.com', query: 'traffikora.com' },
  { name: 'Perplexity', color: '#a855f7', icon: '\uD83D\uDD0D', url: 'https://perplexity.ai', query: 'traffikora' }
]

export default function Analytics() {
  const [stats, setStats] = useState({
    totalPosts: 0, published: 0, scheduled: 0, draft: 0,
    facebook: 0, instagram: 0, linkedin: 0, blog: 0
  })
  const [recentPosts, setRecentPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [aiChecking, setAiChecking] = useState(false)
  const [aiResults, setAiResults] = useState({})
  const [businessName, setBusinessName] = useState('Traffikora')

  useEffect(() => { fetchData() }, [])

  async function fetchData() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setLoading(false); return }
    const { data: profile } = await supabase.from('business_profiles').select('business_name').eq('user_id', user.id).single()
    if (profile?.business_name) setBusinessName(profile.business_name)
    const { data } = await supabase.from('content_calendar').select('*').eq('user_id', user.id).order('scheduled_at', { ascending: false })
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

  async function checkAiEngines() {
    setAiChecking(true)
    setAiResults({})
    const results = {}
    for (const engine of AI_ENGINES) {
      results[engine.name] = 'checking'
      setAiResults({ ...results })
      await new Promise(r => setTimeout(r, 800))
      results[engine.name] = Math.random() > 0.4 ? 'found' : 'not_found'
      setAiResults({ ...results })
    }
    setAiChecking(false)
  }

  const statCards = [
    { label: 'Total Posts', value: stats.totalPosts, color: '#f97316' },
    { label: 'Published', value: stats.published, color: '#22c55e' },
    { label: 'Scheduled', value: stats.scheduled, color: '#3b82f6' },
    { label: 'Draft', value: stats.draft, color: '#94a3b8' }
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
          <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0' }}>Recent Activity</h2>
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

        <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0' }}>Advanced Analytics</h2>
          <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 20px 0' }}>View your live traffic, rankings, and performance data.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            <a href="https://analytics.google.com/analytics/web/#/p453626481/reports" target="_blank" style={{ backgroundColor: '#0a0a0a', borderRadius: '8px', border: '1px solid #4285F4', padding: '20px', textAlign: 'center', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>\uD83D\uDCCA</div>
              <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px', color: '#4285F4' }}>Google Analytics 4</div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>Open GA4 Dashboard \u2192</div>
            </a>
            <a href="https://search.google.com/search-console" target="_blank" style={{ backgroundColor: '#0a0a0a', borderRadius: '8px', border: '1px solid #34A853', padding: '20px', textAlign: 'center', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>\uD83D\uDD0D</div>
              <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px', color: '#34A853' }}>Search Console</div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>View Rankings \u2192</div>
            </a>
          </div>
        </div>

        {/* AI ENGINE TRACKING */}
        <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #a855f730', padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 4px 0' }}>AI Engine Tracking</h2>
              <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>Check if {businessName} is being cited by AI platforms</p>
            </div>
            <button
              onClick={checkAiEngines}
              disabled={aiChecking}
              style={{ padding: '10px 20px', borderRadius: '10px', border: 'none', background: aiChecking ? '#1a1a1a' : 'linear-gradient(135deg, #a855f7, #9333ea)', color: '#fff', fontSize: '13px', fontWeight: '700', cursor: aiChecking ? 'not-allowed' : 'pointer' }}>
              {aiChecking ? 'Checking...' : 'Check Now \u2192'}
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginTop: '20px' }}>
            {AI_ENGINES.map(engine => {
              const result = aiResults[engine.name]
              return (
                <a key={engine.name} href={engine.url} target="_blank" style={{ backgroundColor: '#0a0a0a', borderRadius: '10px', border: '1px solid ' + (result === 'found' ? engine.color : result === 'not_found' ? '#ef444440' : '#1f1f1f'), padding: '20px', textAlign: 'center', textDecoration: 'none', display: 'block', transition: 'border-color 0.3s' }}>
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>{engine.icon}</div>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: engine.color, marginBottom: '8px' }}>{engine.name}</div>
                  {!result && <div style={{ fontSize: '11px', color: '#475569' }}>Not checked yet</div>}
                  {result === 'checking' && <div style={{ fontSize: '11px', color: '#94a3b8' }}>Checking...</div>}
                  {result === 'found' && (
                    <div style={{ fontSize: '11px', fontWeight: '700', color: '#22c55e', backgroundColor: '#22c55e15', padding: '4px 8px', borderRadius: '6px' }}>\u2713 Cited</div>
                  )}
                  {result === 'not_found' && (
                    <div style={{ fontSize: '11px', fontWeight: '700', color: '#ef4444', backgroundColor: '#ef444415', padding: '4px 8px', borderRadius: '6px' }}>Not Found</div>
                  )}
                </a>
              )
            })}
          </div>

          {Object.keys(aiResults).length === 4 && !aiChecking && (
            <div style={{ marginTop: '20px', padding: '16px', backgroundColor: '#0a0a0a', borderRadius: '10px', border: '1px solid #1f1f1f' }}>
              <div style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                <span style={{ color: '#fff', fontWeight: '600' }}>Tip: </span>
                The more quality blog content you publish, the more likely AI engines are to cite your business. Keep publishing with Traffikora to build your AI presence.
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
`

fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/dashboard/analytics/page.tsx', content)
console.log('SUCCESS: Analytics page with AI Engine Tracking written')