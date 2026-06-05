// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const PLATFORMS = [
  { id: 'facebook', label: 'Facebook', color: '#1877F2', icon: '📵' },
  { id: 'instagram', label: 'Instagram', color: '#E1306C', icon: '📸' },
  { id: 'tiktok', label: 'TikTok', color: '#888', icon: '🎵' },
  { id: 'twitter', label: 'X / Twitter', color: '#555', icon: '✕' },
  { id: 'linkedin', label: 'LinkedIn', color: '#0A66C2', icon: '💼' },
]

const TONES = ['Professional', 'Friendly', 'Authoritative', 'Conversational']

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
          addLog('WordPress not connected — skipping', 'skip')
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
            title: topic + ' — ' + pid,
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
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        @keyframes slideIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .plat-btn { transition: all 0.18s; cursor: pointer; }
        .plat-btn:hover { transform: translateY(-2px); }
        .pub-btn { transition: all 0.2s; }
        .pub-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 8px 32px rgba(232,97,10,0.4) !important; }
      `}</style>

      {/* HEADER */}
      <div style={{ background: 'linear-gradient(135deg, #111 0%, #1a0e00 100%)', borderBottom: '1px solid #1e1e1e', padding: '32px 40px', marginBottom: '32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #E8610A, #ff8c42)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>🚀</div>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 900, color: '#fff', margin: 0 }}>One-Push Publish</h1>
            <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>One topic. Blog + all social posts. Published in one click.</p>
          </div>
          {profile?.business_name && (
            <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(232,97,10,0.1)', border: '1px solid rgba(232,97,10,0.3)', borderRadius: '20px', padding: '4px 14px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8610A' }} />
              <span style={{ fontSize: '12px', color: '#E8610A', fontWeight: 600 }}>{profile.business_name}</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 40px 60px', animation: 'slideIn 0.4s ease' }}>

        {/* MAIN CARD */}
        <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '16px', padding: '28px', marginBottom: '24px' }}>

          {/* TOPIC */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#666', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Topic or Keyword</label>
            <input
              type="text"
              value={topic}
              onChange={e => setTopic(e.target.value)}
              placeholder="e.g. 5 reasons to hire a marketing agency in 2026"
              disabled={isRunning}
              style={{ width: '100%', background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '13px 16px', fontSize: '14px', color: '#fff', outline: 'none', fontFamily: "'DM Sans', sans-serif", boxSizing: 'border-box', opacity: isRunning ? 0.5 : 1 }}
              onFocus={e => e.target.style.borderColor = '#E8610A'}
              onBlur={e => e.target.style.borderColor = '#2a2a2a'}
            />
          </div>

          {/* TONE */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#666', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Tone</label>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {TONES.map(t => (
                <button key={t} className="plat-btn"
                  onClick={() => !isRunning && setTone(t)}
                  style={{
                    background: tone === t ? 'rgba(232,97,10,0.15)' : '#0a0a0a',
                    border: '1px solid ' + (tone === t ? '#E8610A' : '#2a2a2a'),
                    borderRadius: '10px', padding: '9px 18px',
                    color: tone === t ? '#E8610A' : '#555',
                    fontSize: '13px', fontWeight: tone === t ? 700 : 400,
                    fontFamily: "'DM Sans', sans-serif",
                  }}>
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* WHAT TO PUBLISH */}
          <div style={{ borderTop: '1px solid #1e1e1e', paddingTop: '24px', marginBottom: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>What to publish</div>

            {/* BLOG TOGGLE */}
            <div onClick={() => !isRunning && setPublishBlog(!publishBlog)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', border: '2px solid ' + (publishBlog ? '#E8610A' : '#2a2a2a'), borderRadius: '12px', marginBottom: '16px', cursor: 'pointer', background: publishBlog ? 'rgba(232,97,10,0.06)' : '#0a0a0a', transition: 'all 0.18s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: publishBlog ? 'rgba(232,97,10,0.15)' : '#1a1a1a', border: '1px solid ' + (publishBlog ? '#E8610A40' : '#2a2a2a'), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>✏️</div>
                <div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '14px' }}>Blog Post</div>
                  <div style={{ fontSize: '12px', color: '#555' }}>Generate and publish to WordPress</div>
                </div>
              </div>
              <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid ' + (publishBlog ? '#E8610A' : '#333'), background: publishBlog ? '#E8610A' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {publishBlog && <span style={{ color: '#fff', fontSize: '12px', fontWeight: 900 }}>✓</span>}
              </div>
            </div>

            {/* SOCIAL PLATFORMS */}
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>Social Platforms</div>
            {userPlatforms.length === 0 ? (
              <div style={{ background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '16px', fontSize: '13px', color: '#555' }}>
                No platforms connected. Go to <a href="/dashboard/settings" style={{ color: '#E8610A', textDecoration: 'none', fontWeight: 600 }}>Business Settings</a> to add your platforms.
              </div>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {userPlatforms.map(pid => {
                  const p = PLATFORMS.find(x => x.id === pid)
                  if (!p) return null
                  const active = selectedPlatforms.includes(pid)
                  return (
                    <button key={pid} className="plat-btn"
                      onClick={() => !isRunning && togglePlatform(pid)}
                      style={{
                        background: active ? p.color : '#0a0a0a',
                        border: '2px solid ' + (active ? p.color : '#2a2a2a'),
                        borderRadius: '10px', padding: '10px 18px',
                        color: active ? '#fff' : '#555',
                        fontSize: '13px', fontWeight: active ? 700 : 500,
                        fontFamily: "'DM Sans', sans-serif",
                        display: 'flex', alignItems: 'center', gap: '8px',
                        boxShadow: active ? '0 4px 16px ' + p.color + '50' : 'none',
                      }}>
                      <span style={{ fontSize: '15px' }}>{p.icon}</span>
                      {p.label}
                      {active && <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.25)', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>✓</span>}
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {error && <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', color: '#f87171', fontSize: '14px' }}>{error}</div>}

          {/* PUBLISH BUTTON */}
          <button className="pub-btn" onClick={handlePublish} disabled={isRunning || !topic}
            style={{
              width: '100%', padding: '16px',
              background: isRunning ? '#1a1a1a' : 'linear-gradient(135deg, #E8610A, #C84E06)',
              color: isRunning ? '#444' : '#fff',
              border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700,
              cursor: isRunning ? 'not-allowed' : 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: isRunning ? 'none' : '0 4px 24px rgba(232,97,10,0.4)',
              letterSpacing: '0.02em',
            }}>
            {isRunning ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <span style={{ display: 'inline-block', width: '14px', height: '14px', border: '2px solid #444', borderTopColor: '#E8610A', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                Publishing…
              </span>
            ) : '🚀 One-Push Publish'}
          </button>
        </div>

        {/* LIVE PROGRESS */}
        {logs.length > 0 && (
          <div style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: '16px', padding: '24px', marginBottom: '24px', animation: 'slideIn 0.3s ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: isRunning ? '#E8610A' : '#22c55e', animation: isRunning ? 'pulse 1.2s ease-in-out infinite' : 'none' }} />
              <span style={{ fontSize: '11px', fontWeight: 700, color: isRunning ? '#E8610A' : '#22c55e', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
                {isRunning ? 'Live Progress' : 'Complete'}
              </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {logs.map((log, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '14px', flexShrink: 0 }}>
                    {log.status === 'done' ? '✅' : log.status === 'error' ? '❌' : log.status === 'skip' ? '⏭️' : '⏳'}
                  </span>
                  <span style={{ fontSize: '13px', color: log.status === 'error' ? '#f87171' : log.status === 'done' ? '#86efac' : log.status === 'skip' ? '#888' : '#ccc', flex: 1 }}>{log.msg}</span>
                  <span style={{ fontSize: '11px', color: '#444', flexShrink: 0 }}>{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESULTS */}
        {step === 'done' && results && (
          <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '16px', padding: '28px', animation: 'slideIn 0.4s ease' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>✓</div>
              <span style={{ fontSize: '18px', fontWeight: 700, color: '#fff' }}>Published Successfully</span>
            </div>

            <div style={{ background: '#0a0a0a', border: '1px solid #1e1e1e', borderLeft: '3px solid #E8610A', borderRadius: '10px', padding: '16px 20px', marginBottom: '16px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#E8610A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Blog Post</div>
              <div style={{ color: '#ccc', fontSize: '14px', marginBottom: results.wpUrl ? '10px' : 0 }}>{results.blog.title}</div>
              {results.wpUrl && <a href={results.wpUrl} target="_blank" style={{ color: '#E8610A', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>View on WordPress →</a>}
            </div>

            {results.social && Object.keys(results.social).length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, color: '#666', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>Social Posts — Saved to Content Queue</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {Object.entries(results.social).map(([plat, post]) => (
                    <div key={plat} style={{ padding: '14px 18px', background: '#0a0a0a', borderRadius: '10px', borderLeft: '3px solid #a855f7' }}>
                      <div style={{ fontWeight: 700, fontSize: '11px', color: '#a855f7', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{plat}</div>
                      <div style={{ fontSize: '13px', color: '#888', lineHeight: 1.6 }}>{typeof post === 'string' ? post.substring(0, 160) + '…' : ''}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => { setStep('idle'); setLogs([]); setResults(null); setTopic('') }}
                style={{ flex: 1, padding: '12px', background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                Publish Another
              </button>
              <a href="/dashboard/content/queue"
                style={{ flex: 1, padding: '12px', background: '#1a1a1a', color: '#fff', border: '1px solid #2a2a2a', borderRadius: '10px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", textDecoration: 'none', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                View Content Queue
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
