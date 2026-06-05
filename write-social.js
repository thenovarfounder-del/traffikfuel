const fs = require('fs')

const content = `// @ts-nocheck
'use client'
import { useState, useEffect, useRef } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const TONES = ['Professional', 'Friendly', 'Authoritative', 'Conversational']

const RADIUS = 54
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function OnePushPublish() {
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('Professional')
  const [profile, setProfile] = useState(null)
  const [step, setStep] = useState('idle')
  const [progress, setProgress] = useState(0)
  const [currentMsg, setCurrentMsg] = useState('')
  const [results, setResults] = useState(null)
  const [error, setError] = useState('')
  const [logs, setLogs] = useState([])

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase.from('business_profiles').select('*').eq('user_id', user.id).single()
      if (data) setProfile(data)
    }
    load()
  }, [])

  function addLog(msg, status) {
    setLogs(prev => [...prev, { msg, status, time: new Date().toLocaleTimeString() }])
  }

  async function handlePublish() {
    if (!topic) { setError('Please enter a topic.'); return }
    setError('')
    setStep('running')
    setLogs([])
    setResults(null)
    setProgress(0)

    try {
      const businessName = profile?.business_name || 'My Business'
      const industry = profile?.industry || 'Business'
      const city = profile?.phone || ''
      const websiteUrl = profile?.website || ''

      setCurrentMsg('Generating blog post...')
      setProgress(15)
      addLog('Generating blog post...', 'working')
      const blogRes = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, tone, businessName, industry, city, websiteUrl })
      })
      const blogData = await blogRes.json()
      if (!blogData.success) { addLog('Blog generation failed', 'error'); setStep('error'); return }
      addLog('Blog post generated: ' + blogData.post.title, 'done')
      setProgress(35)

      setCurrentMsg('Creating social media posts...')
      addLog('Generating social media posts...', 'working')
      const socialRes = await fetch('/api/generate-social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, tone, businessName, industry, city, websiteUrl, platform: 'All Platforms' })
      })
      const socialData = await socialRes.json()
      if (socialData.success) addLog('Social posts generated', 'done')
      setProgress(55)

      const { data: { user } } = await supabase.auth.getUser()

      setCurrentMsg('Publishing to WordPress...')
      addLog('Publishing to WordPress...', 'working')
      let wpUrl = null
      const wpCheck = await fetch('/api/wordpress?user_id=' + user.id)
      const wpData = await wpCheck.json()
      if (!wpData.connected) {
        addLog('WordPress not connected \u2014 skipping', 'skip')
      } else {
        const wpRes = await fetch('/api/wordpress/publish', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: user.id, title: blogData.post.title, content: blogData.post.content, status: 'publish' })
        })
        const wpResult = await wpRes.json()
        if (wpResult.success) { wpUrl = wpResult.url; addLog('Published to WordPress', 'done') }
        else addLog('WordPress publish failed', 'error')
      }
      setProgress(70)

      setCurrentMsg('Saving to content queue...')
      addLog('Saving blog to queue...', 'working')
      await supabase.from('content_calendar').insert({
        user_id: user.id,
        title: blogData.post.title,
        content_type: 'blog',
        platform: 'blog',
        status: wpUrl ? 'published' : 'draft',
        scheduled_at: new Date().toISOString(),
        published_at: wpUrl ? new Date().toISOString() : null,
        post_url: wpUrl,
        content: blogData.post.content,
      })
      addLog('Blog saved', 'done')
      setProgress(85)

      if (socialData.success) {
        const userPlatforms = (profile?.platforms || []).filter(p => p !== 'wordpress' && p !== 'google')
        for (const pid of userPlatforms) {
          const platformKey = pid.charAt(0).toUpperCase() + pid.slice(1)
          const postContent = socialData.posts[platformKey] || socialData.posts[Object.keys(socialData.posts)[0]]
          if (postContent) {
            await supabase.from('content_calendar').insert({
              user_id: user.id,
              title: topic + ' \u2014 ' + pid,
              content_type: 'social',
              platform: pid,
              status: 'scheduled',
              scheduled_at: new Date().toISOString(),
              content: postContent,
            })
            addLog(pid + ' post saved to queue', 'done')
          }
        }
      }

      setProgress(100)
      setCurrentMsg('All done!')
      addLog('All done!', 'done')
      setResults({ blog: blogData.post, social: socialData.posts, wpUrl })
      setTimeout(() => setStep('done'), 800)

    } catch(e) {
      addLog('Error: ' + e.message, 'error')
      setStep('error')
    }
  }

  const isRunning = step === 'running'
  const isDone = step === 'done'
  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <style>{\`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        @keyframes slideIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes spin { to{transform:rotate(360deg)} }
        .tone-btn { transition: all 0.18s; cursor: pointer; }
        .tone-btn:hover { transform: translateY(-1px); }
      \`}</style>

      {/* HEADER */}
      <div style={{ background: 'linear-gradient(135deg, #111 0%, #1a0e00 100%)', borderBottom: '1px solid #1e1e1e', padding: '32px 40px', marginBottom: '40px' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #E8610A, #ff8c42)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>\ud83d\ude80</div>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 900, color: '#fff', margin: 0 }}>One-Push Publish</h1>
            <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>One topic. Blog + all your platforms. One button.</p>
          </div>
          {profile?.business_name && (
            <div style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(232,97,10,0.1)', border: '1px solid rgba(232,97,10,0.3)', borderRadius: '20px', padding: '4px 14px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8610A' }} />
              <span style={{ fontSize: '12px', color: '#E8610A', fontWeight: 600 }}>{profile.business_name}</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 40px 60px', animation: 'slideIn 0.4s ease' }}>

        {/* INPUT CARD */}
        {step === 'idle' && (
          <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>

            <div style={{ marginBottom: '28px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#666', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Topic or Keyword</label>
              <input value={topic} onChange={e => setTopic(e.target.value)}
                placeholder="e.g. 5 reasons to hire a marketing agency in 2026"
                onKeyDown={e => e.key === 'Enter' && handlePublish()}
                style={{ width: '100%', background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '14px 16px', fontSize: '15px', color: '#fff', outline: 'none', fontFamily: "'DM Sans', sans-serif", boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = '#E8610A'}
                onBlur={e => e.target.style.borderColor = '#2a2a2a'} />
            </div>

            <div style={{ marginBottom: '32px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#666', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Tone</label>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {TONES.map(t => (
                  <button key={t} className="tone-btn" onClick={() => setTone(t)}
                    style={{
                      background: tone === t ? 'rgba(232,97,10,0.15)' : '#0a0a0a',
                      border: '1px solid ' + (tone === t ? '#E8610A' : '#2a2a2a'),
                      borderRadius: '10px', padding: '10px 20px',
                      color: tone === t ? '#E8610A' : '#555',
                      fontSize: '13px', fontWeight: tone === t ? 700 : 400,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {error && <p style={{ color: '#f87171', marginBottom: '16px', fontSize: '14px' }}>{error}</p>}

            <button onClick={handlePublish}
              style={{ width: '100%', padding: '18px', background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '17px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 24px rgba(232,97,10,0.4)', letterSpacing: '0.02em' }}>
              \ud83d\ude80 One-Push Publish
            </button>
          </div>
        )}

        {/* PROGRESS RING */}
        {(isRunning || step === 'error') && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 0', animation: 'slideIn 0.4s ease' }}>
            <div style={{ position: 'relative', width: '140px', height: '140px', marginBottom: '28px' }}>
              <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
                <circle cx="70" cy="70" r={RADIUS} fill="none" stroke="#1a1a1a" strokeWidth="10" />
                <circle cx="70" cy="70" r={RADIUS} fill="none" stroke="#E8610A" strokeWidth="10"
                  strokeDasharray={CIRCUMFERENCE}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  style={{ transition: 'stroke-dashoffset 0.6s ease' }} />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '26px', fontWeight: 800, color: '#E8610A', fontFamily: "'Playfair Display', serif" }}>{progress}%</span>
              </div>
            </div>
            <div style={{ fontSize: '15px', fontWeight: 600, color: '#fff', marginBottom: '8px' }}>{currentMsg}</div>
            <div style={{ fontSize: '12px', color: '#555' }}>Do not close this page</div>

            <div style={{ width: '100%', marginTop: '32px', background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '20px 24px' }}>
              {logs.map((log, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ fontSize: '13px' }}>{log.status === 'done' ? '\u2705' : log.status === 'error' ? '\u274c' : log.status === 'skip' ? '\u23ed\ufe0f' : '\u23f3'}</span>
                  <span style={{ fontSize: '13px', color: log.status === 'done' ? '#86efac' : log.status === 'error' ? '#f87171' : log.status === 'skip' ? '#888' : '#ccc', flex: 1 }}>{log.msg}</span>
                  <span style={{ fontSize: '11px', color: '#444' }}>{log.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DONE */}
        {isDone && results && (
          <div style={{ animation: 'slideIn 0.4s ease' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ fontSize: '52px', marginBottom: '12px' }}>\u2705</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>Published Successfully</h2>
              <p style={{ color: '#555', fontSize: '14px', margin: 0 }}>Your blog and social posts are live and queued.</p>
            </div>

            <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '14px', padding: '20px 24px', marginBottom: '16px', borderLeft: '3px solid #E8610A' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#E8610A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>Blog Post</div>
              <div style={{ color: '#ccc', fontSize: '14px', marginBottom: results.wpUrl ? '10px' : 0 }}>{results.blog.title}</div>
              {results.wpUrl && <a href={results.wpUrl} target="_blank" style={{ color: '#E8610A', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>View on WordPress \u2192</a>}
            </div>

            <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '14px', padding: '20px 24px', marginBottom: '28px', borderLeft: '3px solid #a855f7' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#a855f7', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Social Posts \u2014 Saved to Queue</div>
              {results.social && Object.keys(results.social).map(plat => (
                <div key={plat} style={{ fontSize: '13px', color: '#666', marginBottom: '4px' }}>\u2713 {plat}</div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => { setStep('idle'); setLogs([]); setResults(null); setTopic(''); setProgress(0) }}
                style={{ flex: 1, padding: '14px', background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                Publish Another
              </button>
              <a href="/dashboard/content/queue"
                style={{ flex: 1, padding: '14px', background: '#1a1a1a', color: '#fff', border: '1px solid #2a2a2a', borderRadius: '10px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans', sans-serif" }}>
                View Content Queue
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
`

fs.writeFileSync('C:\\\\Users\\\\randy\\\\traffikfuel\\\\src\\\\app\\\\dashboard\\\\publish\\\\page.tsx', content, 'utf8')
console.log('SUCCESS: One-Push Publish page rebuilt with progress ring')