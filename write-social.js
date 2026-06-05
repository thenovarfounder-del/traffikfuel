const fs = require('fs')

const content = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const PLATFORMS = [
  { id: 'facebook', label: 'Facebook', color: '#1877F2', icon: '\ud83d\udcf5' },
  { id: 'instagram', label: 'Instagram', color: '#E1306C', icon: '\ud83d\udcf8' },
  { id: 'tiktok', label: 'TikTok', color: '#888', icon: '\ud83c\udfb5' },
  { id: 'twitter', label: 'X / Twitter', color: '#555', icon: '\u2715' },
  { id: 'linkedin', label: 'LinkedIn', color: '#0A66C2', icon: '\ud83d\udcbc' },
  { id: 'google', label: 'Google Business', color: '#4285F4', icon: '\ud83d\udd0d' },
]

const RADIUS = 54
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function Onboarding() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [platforms, setPlatforms] = useState([])
  const [progress, setProgress] = useState(0)
  const [currentMsg, setCurrentMsg] = useState('')
  const [logs, setLogs] = useState([])
  const [generatedTitle, setGeneratedTitle] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      setUser(user)
      const { data: userData } = await supabase.from('users').select('onboarding_complete').eq('id', user.id).single()
      if (userData?.onboarding_complete) { router.push('/dashboard'); return }
      const { data: bp } = await supabase.from('business_profiles').select('*').eq('user_id', user.id).single()
      if (bp) setProfile(bp)
    }
    load()
  }, [])

  function togglePlatform(id) {
    setPlatforms(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  function addLog(msg, status) {
    setLogs(prev => [...prev, { msg, status, time: new Date().toLocaleTimeString() }])
  }

  async function savePlatformsAndGenerate() {
    if (platforms.length === 0) { setError('Please select at least one platform.'); return }
    setError('')

    // Save platforms to business_profiles
    await supabase.from('business_profiles').upsert({
      user_id: user.id,
      business_name: profile?.business_name || 'My Business',
      industry: profile?.industry || 'Business',
      phone: profile?.phone || '',
      website: profile?.website || '',
      platforms,
      auto_mode: false,
    }, { onConflict: 'user_id' })

    setStep(3)
    setProgress(0)
    setLogs([])

    try {
      const businessName = profile?.business_name || 'My Business'
      const industry = profile?.industry || 'Business'
      const city = profile?.phone || ''
      const websiteUrl = profile?.website || ''

      setCurrentMsg('Generating your first blog post...')
      setProgress(20)
      addLog('Generating your first blog post...', 'working')

      const blogRes = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: 'Why ' + businessName + ' is the best ' + industry + ' in ' + city,
          tone: 'Professional',
          businessName,
          industry,
          city,
          websiteUrl
        })
      })
      const blogData = await blogRes.json()
      if (blogData.success) {
        setGeneratedTitle(blogData.post.title)
        addLog('Blog post created: ' + blogData.post.title, 'done')
        await supabase.from('content_calendar').insert({
          user_id: user.id,
          title: blogData.post.title,
          content_type: 'blog',
          platform: 'blog',
          status: 'draft',
          scheduled_at: new Date().toISOString(),
          content: blogData.post.content,
        })
      }
      setProgress(50)

      setCurrentMsg('Creating your first social posts...')
      addLog('Creating social posts for your platforms...', 'working')

      const socialRes = await fetch('/api/generate-social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: 'Why ' + businessName + ' is the best ' + industry + ' in ' + city,
          tone: 'Professional',
          businessName,
          industry,
          city,
          websiteUrl,
          platform: 'All Platforms'
        })
      })
      const socialData = await socialRes.json()
      if (socialData.success) {
        addLog('Social posts created for all your platforms', 'done')
        for (const pid of platforms) {
          const platformKey = pid.charAt(0).toUpperCase() + pid.slice(1)
          const postContent = socialData.posts[platformKey] || socialData.posts[Object.keys(socialData.posts)[0]]
          if (postContent) {
            await supabase.from('content_calendar').insert({
              user_id: user.id,
              title: businessName + ' \u2014 ' + pid,
              content_type: 'social',
              platform: pid,
              status: 'scheduled',
              scheduled_at: new Date().toISOString(),
              content: postContent,
            })
          }
        }
      }
      setProgress(85)

      setCurrentMsg('Setting up your account...')
      addLog('Finalizing your account...', 'working')
      await supabase.from('users').update({ onboarding_complete: true }).eq('id', user.id)
      addLog('Account ready!', 'done')
      setProgress(100)
      setCurrentMsg('You\u2019re live!')

      setTimeout(() => setStep(4), 1000)

    } catch(e) {
      addLog('Error: ' + e.message, 'error')
    }
  }

  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: "'DM Sans', system-ui, sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <style>{\`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        @keyframes slideIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .plat-btn { transition: all 0.18s; cursor: pointer; }
        .plat-btn:hover { transform: translateY(-2px); }
      \`}</style>

      <div style={{ width: '100%', maxWidth: '560px', animation: 'slideIn 0.4s ease' }}>

        {/* LOGO */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
            Traffik<span style={{ color: '#E8610A' }}>ora</span>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '40px' }}>
          {[1,2,3,4].map(s => (
            <div key={s} style={{ flex: 1, height: '3px', borderRadius: '2px', background: s <= step ? '#E8610A' : '#1e1e1e', transition: 'background 0.3s' }} />
          ))}
        </div>

        <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '20px', padding: '40px', boxShadow: '0 0 60px rgba(232,97,10,0.06)' }}>

          {/* STEP 1 — WELCOME */}
          {step === 1 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '52px', marginBottom: '20px' }}>\ud83d\ude80</div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#fff', margin: '0 0 14px' }}>Welcome to Traffikora!</h1>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.7, margin: '0 0 32px' }}>
                Let\u2019s get you set up in 60 seconds. Your first piece of AI content will be ready before you finish.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px', textAlign: 'left' }}>
                {[
                  { icon: '\ud83d\udcf1', text: 'Choose your social platforms' },
                  { icon: '\u26a1', text: 'Watch your first content generate live' },
                  { icon: '\u2705', text: 'Land in your dashboard ready to go' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#0a0a0a', border: '1px solid #1e1e1e', borderRadius: '10px', padding: '12px 16px' }}>
                    <span style={{ fontSize: '18px' }}>{item.icon}</span>
                    <span style={{ fontSize: '14px', color: '#aaa' }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setStep(2)}
                style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 24px rgba(232,97,10,0.35)' }}>
                Let\u2019s Go \u2192
              </button>
            </div>
          )}

          {/* STEP 2 — PLATFORMS */}
          {step === 2 && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <div style={{ fontSize: '44px', marginBottom: '16px' }}>\ud83d\udcf1</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 10px' }}>Select Your Platforms</h2>
                <p style={{ color: '#555', fontSize: '14px', margin: 0 }}>Traffikora will create content for these platforms automatically.</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px', justifyContent: 'center' }}>
                {PLATFORMS.map(p => {
                  const isSelected = platforms.includes(p.id)
                  return (
                    <button key={p.id} className="plat-btn" onClick={() => togglePlatform(p.id)}
                      style={{
                        background: isSelected ? p.color : '#0a0a0a',
                        border: '2px solid ' + (isSelected ? p.color : '#2a2a2a'),
                        borderRadius: '10px', padding: '11px 20px',
                        color: isSelected ? '#fff' : '#555',
                        fontSize: '13px', fontWeight: isSelected ? 700 : 500,
                        fontFamily: "'DM Sans', sans-serif",
                        display: 'flex', alignItems: 'center', gap: '8px',
                        boxShadow: isSelected ? '0 4px 16px ' + p.color + '50' : 'none',
                      }}>
                      <span style={{ fontSize: '16px' }}>{p.icon}</span>
                      {p.label}
                      {isSelected && <span style={{ fontSize: '11px', background: 'rgba(255,255,255,0.25)', borderRadius: '50%', width: '16px', height: '16px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>\u2713</span>}
                    </button>
                  )
                })}
              </div>

              {platforms.length > 0 && (
                <p style={{ textAlign: 'center', fontSize: '12px', color: '#E8610A', fontWeight: 700, marginBottom: '20px' }}>
                  {platforms.length} platform{platforms.length > 1 ? 's' : ''} selected
                </p>
              )}

              {error && <p style={{ color: '#f87171', fontSize: '13px', textAlign: 'center', marginBottom: '16px' }}>{error}</p>}

              <button onClick={savePlatformsAndGenerate}
                style={{ width: '100%', padding: '16px', background: platforms.length > 0 ? 'linear-gradient(135deg, #E8610A, #C84E06)' : '#1a1a1a', color: platforms.length > 0 ? '#fff' : '#444', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: platforms.length > 0 ? 'pointer' : 'not-allowed', fontFamily: "'DM Sans', sans-serif", boxShadow: platforms.length > 0 ? '0 4px 24px rgba(232,97,10,0.35)' : 'none' }}>
                \u26a1 Generate My First Content
              </button>
            </div>
          )}

          {/* STEP 3 — GENERATING */}
          {step === 3 && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>Creating Your Content</h2>
              <p style={{ color: '#555', fontSize: '13px', margin: '0 0 32px' }}>Sit tight \u2014 this takes about 30 seconds.</p>

              <div style={{ position: 'relative', width: '140px', height: '140px', margin: '0 auto 28px' }}>
                <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="70" cy="70" r={RADIUS} fill="none" stroke="#1a1a1a" strokeWidth="10" />
                  <circle cx="70" cy="70" r={RADIUS} fill="none" stroke="#E8610A" strokeWidth="10"
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 0.8s ease' }} />
                </svg>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '24px', fontWeight: 800, color: '#E8610A', fontFamily: "'Playfair Display', serif" }}>{progress}%</span>
                </div>
              </div>

              <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '24px' }}>{currentMsg}</div>

              <div style={{ background: '#0a0a0a', border: '1px solid #1e1e1e', borderRadius: '12px', padding: '16px 20px', textAlign: 'left' }}>
                {logs.map((log, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: i < logs.length - 1 ? '8px' : 0 }}>
                    <span style={{ fontSize: '13px' }}>{log.status === 'done' ? '\u2705' : log.status === 'error' ? '\u274c' : '\u23f3'}</span>
                    <span style={{ fontSize: '13px', color: log.status === 'done' ? '#86efac' : log.status === 'error' ? '#f87171' : '#ccc', flex: 1 }}>{log.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 4 — DONE */}
          {step === 4 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '52px', marginBottom: '20px' }}>\u2705</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#fff', margin: '0 0 14px' }}>You\u2019re Live!</h2>
              <p style={{ color: '#555', fontSize: '15px', lineHeight: 1.7, margin: '0 0 24px' }}>
                Your first content is ready and waiting in your dashboard.
              </p>
              {generatedTitle && (
                <div style={{ background: '#0a0a0a', border: '1px solid #1e1e1e', borderLeft: '3px solid #E8610A', borderRadius: '10px', padding: '14px 18px', marginBottom: '28px', textAlign: 'left' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#E8610A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>First Blog Post Ready</div>
                  <div style={{ fontSize: '14px', color: '#ccc' }}>{generatedTitle}</div>
                </div>
              )}
              <button onClick={() => router.push('/dashboard')}
                style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 24px rgba(232,97,10,0.35)' }}>
                Go to My Dashboard \u2192
              </button>
            </div>
          )}

        </div>

        <p style={{ textAlign: 'center', color: '#333', fontSize: '12px', marginTop: '20px' }}>Step {step} of 4</p>
      </div>
    </div>
  )
}
`

fs.writeFileSync('C:\\\\Users\\\\randy\\\\traffikfuel\\\\src\\\\app\\\\onboarding\\\\page.tsx', content, 'utf8')
console.log('SUCCESS: onboarding page rebuilt - 4 steps with live content generation')