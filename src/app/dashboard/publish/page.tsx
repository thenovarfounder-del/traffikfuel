// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const PLATFORMS = [
  { id: 'facebook', label: 'Facebook', color: '#1877F2', icon: '📘' },
  { id: 'instagram', label: 'Instagram', color: '#E1306C', icon: '📸' },
  { id: 'tiktok', label: 'TikTok', color: '#010101', icon: '🎵' },
  { id: 'twitter', label: 'X / Twitter', color: '#000000', icon: '🐦' },
  { id: 'linkedin', label: 'LinkedIn', color: '#0A66C2', icon: '💼' },
]

export default function OnePushPublish() {
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('Professional')
  const [profile, setProfile] = useState(null)
  const [userPlatforms, setUserPlatforms] = useState([])
  const [selectedPlatforms, setSelectedPlatforms] = useState([])
  const [publishBlog, setPublishBlog] = useState(true)
  const [step, setStep] = useState('idle')
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')
  const [logs, setLogs] = useState([])

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase.from('business_profiles').select('*').eq('user_id', user.id).single()
      if (data) {
        setProfile(data)
        const platforms = (data.platforms || []).filter(p => PLATFORMS.map(x => x.id).includes(p))
        setUserPlatforms(platforms)
        setSelectedPlatforms(platforms)
      }
    }
    load()
  }, [])

  function addLog(msg, status) {
    setLogs(prev => [...prev, { msg, status, time: new Date().toLocaleTimeString() }])
  }

  function togglePlatform(id) {
    setSelectedPlatforms(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  async function handlePublish() {
    if (!topic) { setError('Please enter a topic.'); return }
    setError('')
    setStep('generating')
    setLogs([])
    setResults(null)

    try {
      const businessName = profile?.business_name || 'My Business'
      const industry = profile?.industry || 'Business'
      const city = profile?.phone || ''
      const websiteUrl = profile?.website || ''

      addLog('Generating blog post...', 'working')
      const blogRes = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, tone, businessName, industry, city, websiteUrl })
      })
      const blogData = await blogRes.json()
      if (!blogData.success) { addLog('Blog generation failed', 'error'); setStep('error'); return }
      addLog('Blog post generated: ' + blogData.post.title, 'done')

      addLog('Generating social media posts...', 'working')
      const socialRes = await fetch('/api/generate-social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, tone, businessName, industry, city, websiteUrl, platform: 'All Platforms' })
      })
      const socialData = await socialRes.json()
      if (!socialData.success) { addLog('Social generation failed', 'error') }
      else { addLog('Social posts generated for all platforms', 'done') }

      const { data: { user } } = await supabase.auth.getUser()

      let wpUrl = null
      if (publishBlog) {
        addLog('Publishing to WordPress...', 'working')
        const wpCheck = await fetch('/api/wordpress?user_id=' + user.id)
        const wpData = await wpCheck.json()
        if (!wpData.connected) {
          addLog('WordPress not connected -- skipping', 'skip')
        } else {
          const wpRes = await fetch('/api/wordpress/publish', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id: user.id, title: blogData.post.title, content: blogData.post.content, status: 'publish' })
          })
          const wpResult = await wpRes.json()
          if (wpResult.success) { wpUrl = wpResult.url; addLog('Published to WordPress: ' + wpResult.url, 'done') }
          else { addLog('WordPress publish failed: ' + wpResult.error, 'error') }
        }
      }

      await supabase.from('content_calendar').insert({
        user_id: user.id,
        title: blogData.post.title,
        content_type: 'blog',
        platform: 'blog',
        status: publishBlog ? 'published' : 'draft',
        scheduled_at: new Date().toISOString(),
        published_at: publishBlog ? new Date().toISOString() : null,
        post_url: wpUrl,
        content: blogData.post.content,
      })

      if (selectedPlatforms.length > 0 && socialData.success) {
        for (const pid of selectedPlatforms) {
          addLog('Saving ' + pid + ' post to queue...', 'working')
          await supabase.from('content_calendar').insert({
            user_id: user.id,
            title: topic + ' -- ' + pid,
            content_type: 'social',
            platform: pid,
            status: 'scheduled',
            scheduled_at: new Date().toISOString(),
            content: socialData.posts[pid.charAt(0).toUpperCase() + pid.slice(1)] || socialData.posts[Object.keys(socialData.posts)[0]],
          })
          addLog(pid + ' post saved to content queue', 'done')
        }
      }

      addLog('All done!', 'done')
      setResults({ blog: blogData.post, social: socialData.posts, wpUrl })
      setStep('done')

    } catch(e) {
      addLog('Unexpected error: ' + e.message, 'error')
      setStep('error')
    }
  }

  const isRunning = step === 'generating'

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', padding: '32px 24px', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>

        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111', marginBottom: '4px' }}>One-Push Publish</h1>
          <p style={{ color: '#666', fontSize: '15px' }}>Enter one topic. Generate and publish your blog post and social media content in one click.</p>
        </div>

        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', marginBottom: '24px' }}>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', fontSize: '14px', color: '#333' }}>Topic or Keyword</label>
            <input
              type='text'
              value={topic}
              onChange={e => setTopic(e.target.value)}
              placeholder='e.g. 5 reasons to hire a marketing agency in 2026'
              disabled={isRunning}
              style={{ width: '100%', padding: '12px 16px', border: '2px solid #111', borderRadius: '8px', fontSize: '15px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif', outline: 'none' }}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', fontSize: '14px', color: '#333' }}>Tone</label>
            <select value={tone} onChange={e => setTone(e.target.value)} disabled={isRunning} style={{ width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif', background: '#fff' }}>
              <option>Professional</option>
              <option>Friendly</option>
              <option>Authoritative</option>
              <option>Conversational</option>
            </select>
          </div>

          <div style={{ borderTop: '1px solid #eee', paddingTop: '24px', marginBottom: '24px' }}>
            <p style={{ fontWeight: '700', fontSize: '14px', color: '#111', marginBottom: '16px' }}>What to publish:</p>

            <div
              onClick={() => !isRunning && setPublishBlog(!publishBlog)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 16px', border: '2px solid ' + (publishBlog ? '#E8610A' : '#e5e7eb'), borderRadius: '10px', marginBottom: '12px', cursor: 'pointer', background: publishBlog ? '#fff8f5' : '#fff' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '20px' }}>✍️</span>
                <div>
                  <p style={{ fontWeight: '600', color: '#111', margin: 0, fontSize: '14px' }}>Blog Post</p>
                  <p style={{ fontSize: '12px', color: '#888', margin: 0 }}>Generate and publish to WordPress</p>
                </div>
              </div>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid ' + (publishBlog ? '#E8610A' : '#ddd'), background: publishBlog ? '#E8610A' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {publishBlog && <span style={{ color: '#fff', fontSize: '12px', fontWeight: '700' }}>✓</span>}
              </div>
            </div>

            <p style={{ fontWeight: '600', fontSize: '13px', color: '#555', marginBottom: '10px' }}>Social Platforms:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
              {userPlatforms.length === 0 ? (
                <p style={{ fontSize: '13px', color: '#888' }}>No platforms selected. Go to Business Settings to add your platforms.</p>
              ) : (
                userPlatforms.map(pid => {
                  const p = PLATFORMS.find(x => x.id === pid)
                  if (!p) return null
                  const active = selectedPlatforms.includes(pid)
                  return (
                    <div key={pid} onClick={() => !isRunning && togglePlatform(pid)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderRadius: '20px', border: '2px solid ' + (active ? p.color : '#e5e7eb'), background: active ? p.color + '15' : '#fff', cursor: 'pointer', transition: 'all 0.15s' }}>
                      <span style={{ fontSize: '14px' }}>{p.icon}</span>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: active ? p.color : '#555' }}>{p.label}</span>
                      {active && <span style={{ fontSize: '11px', color: p.color }}>✓</span>}
                    </div>
                  )
                })
              )}
            </div>
          </div>

          {error && <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '12px', marginBottom: '16px', color: '#dc2626', fontSize: '14px' }}>{error}</div>}

          <button
            onClick={handlePublish}
            disabled={isRunning || !topic}
            style={{ width: '100%', padding: '16px', background: isRunning ? '#ccc' : '#E8610A', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: '700', cursor: isRunning ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}
          >
            {isRunning ? 'Publishing...' : 'One-Push Publish'}
          </button>
        </div>

        {logs.length > 0 && (
          <div style={{ background: '#111', borderRadius: '16px', padding: '24px', marginBottom: '24px' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: '700', color: '#E8610A', marginBottom: '16px', letterSpacing: '1px', textTransform: 'uppercase' }}>Live Progress</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {logs.map((log, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '14px' }}>{log.status === 'done' ? '✅' : log.status === 'error' ? '❌' : log.status === 'skip' ? '⏭️' : '⏳'}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: log.status === 'error' ? '#fca5a5' : log.status === 'done' ? '#86efac' : '#ccc' }}>{log.msg}</span>
                  <span style={{ fontSize: '11px', color: '#555', marginLeft: 'auto' }}>{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 'done' && results && (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
            <p style={{ fontWeight: '700', fontSize: '18px', color: '#111', marginBottom: '20px' }}>Published Successfully</p>

            <div style={{ background: '#f9fafb', borderRadius: '10px', padding: '16px', marginBottom: '16px', borderLeft: '4px solid #E8610A' }}>
              <p style={{ fontWeight: '700', color: '#111', marginBottom: '4px', fontSize: '14px' }}>Blog Post</p>
              <p style={{ color: '#555', fontSize: '14px', margin: '0 0 8px' }}>{results.blog.title}</p>
              {results.wpUrl && <a href={results.wpUrl} target='_blank' style={{ color: '#E8610A', fontSize: '13px', fontWeight: '600', textDecoration: 'none' }}>View on WordPress →</a>}
            </div>

            {results.social && Object.keys(results.social).length > 0 && (
              <div>
                <p style={{ fontWeight: '700', fontSize: '14px', color: '#111', marginBottom: '12px' }}>Social Posts (saved to Content Queue)</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {Object.entries(results.social).map(([plat, post]) => (
                    <div key={plat} style={{ padding: '12px 16px', background: '#f9fafb', borderRadius: '8px', borderLeft: '3px solid #8B5CF6' }}>
                      <p style={{ fontWeight: '600', fontSize: '12px', color: '#666', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{plat}</p>
                      <p style={{ fontSize: '13px', color: '#333', margin: 0, lineHeight: 1.6 }}>{typeof post === 'string' ? post.substring(0, 150) + '...' : ''}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ marginTop: '20px', display: 'flex', gap: '12px' }}>
              <button onClick={() => { setStep('idle'); setLogs([]); setResults(null); setTopic('') }} style={{ flex: 1, padding: '11px', background: '#E8610A', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>Publish Another</button>
              <a href='/dashboard/calendar' style={{ flex: 1, padding: '11px', background: '#111', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none', textAlign: 'center' }}>View Calendar</a>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
