// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const PLATFORMS = [
  { id: 'facebook', label: 'Facebook', color: '#1877F2', icon: '🔵' },
  { id: 'instagram', label: 'Instagram', color: '#E1306C', icon: '📸' },
  { id: 'tiktok', label: 'TikTok', color: '#888', icon: '🎵' },
  { id: 'twitter', label: 'X / Twitter', color: '#555', icon: '✕' },
  { id: 'linkedin', label: 'LinkedIn', color: '#0A66C2', icon: '💼' },
  { id: 'google', label: 'Google Business', color: '#4285F4', icon: '📍' },
]

const RADIUS = 54
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const TOTAL_STEPS = 5

export default function Onboarding() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [user, setUser] = useState(null)
  const [businessId, setBusinessId] = useState(null)
  const [websiteUrl, setWebsiteUrl] = useState('')
  const [brainBuilding, setBrainBuilding] = useState(false)
  const [brainDone, setBrainDone] = useState(false)
  const [brainError, setBrainError] = useState('')
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
      if (bp) {
        setBusinessId(bp.id)
        setWebsiteUrl(bp.website || '')
        if (bp.platforms?.length > 0) setPlatforms(bp.platforms)
      }
    }
    load()
  }, [])

  function togglePlatform(id) {
    setPlatforms(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  function addLog(msg, status) {
    setLogs(prev => [...prev, { msg, status }])
  }

  async function handleBuildBrain() {
    if (!websiteUrl) { setBrainError('Please enter your website URL.'); return }
    setBrainError('')
    setBrainBuilding(true)
    try {
      const { data: bp } = await supabase.from('business_profiles').upsert({
        user_id: user.id,
        website: websiteUrl,
        business_name: 'My Business',
        industry: 'Business',
        platforms: [],
        auto_mode: true,
      }, { onConflict: 'user_id' }).select().single()
      if (bp) setBusinessId(bp.id)
      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ businessId: bp?.id || businessId, url: websiteUrl })
      })
      if (!res.ok) {
        setBrainError('Could not read your website. You can skip this and add it later.')
        setBrainBuilding(false)
        return
      }
      setBrainDone(true)
      setBrainBuilding(false)
      setTimeout(() => setStep(3), 800)
    } catch {
      setBrainError('Could not reach your website. You can skip this step.')
      setBrainBuilding(false)
    }
  }

  async function handleSkipBrain() {
    const { data: bp } = await supabase.from('business_profiles').upsert({
      user_id: user.id,
      website: websiteUrl || '',
      business_name: 'My Business',
      industry: 'Business',
      platforms: [],
      auto_mode: true,
    }, { onConflict: 'user_id' }).select().single()
    if (bp) setBusinessId(bp.id)
    setStep(3)
  }

  async function savePlatformsAndGenerate() {
    if (platforms.length === 0) { setError('Please select at least one platform.'); return }
    setError('')
    await supabase.from('business_profiles').upsert({
      user_id: user.id,
      website: websiteUrl || '',
      business_name: 'My Business',
      industry: 'Business',
      platforms,
      auto_mode: true,
    }, { onConflict: 'user_id' })
    setStep(4)
    setProgress(0)
    setLogs([])
    try {
      const { data: bp } = await supabase.from('business_profiles').select('*').eq('user_id', user.id).single()
      const businessName = bp?.business_name || 'My Business'
      const industry = bp?.industry || 'Business'
      const city = bp?.phone || ''
      setCurrentMsg('Building your first blog post...')
      setProgress(20)
      addLog('Generating your first blog post...', 'working')
      const blogRes = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: 'Why ' + businessName + ' is the best choice for ' + industry + ' in ' + (city || 'your area'),
          tone: 'Professional',
          businessName, industry, city, websiteUrl
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
      setProgress(55)
      setCurrentMsg('Creating your social posts...')
      addLog('Creating social posts for your platforms...', 'working')
      const socialRes = await fetch('/api/generate-social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: 'Why ' + businessName + ' is the best choice for ' + industry,
          tone: 'Professional',
          businessName, industry, city, websiteUrl,
          platform: 'All Platforms'
        })
      })
      const socialData = await socialRes.json()
      if (socialData.success) {
        addLog('Social posts created for all platforms', 'done')
        for (const pid of platforms) {
          const key = pid.charAt(0).toUpperCase() + pid.slice(1)
          const postContent = socialData.posts[key] || socialData.posts[Object.keys(socialData.posts)[0]]
          if (postContent) {
            await supabase.from('content_calendar').insert({
              user_id: user.id,
              title: businessName + ' — ' + pid,
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
      setCurrentMsg('Activating your AI agents...')
      addLog('Turning on Auto Mode — your agents run daily from now on', 'working')
      await supabase.from('users').update({ onboarding_complete: true }).eq('id', user.id)
      addLog('Auto Mode ON — AI runs every day automatically', 'done')
      setProgress(100)
      setCurrentMsg('You’re live!')
      setTimeout(() => setStep(5), 1000)
    } catch(e) {
      addLog('Error: ' + e.message, 'error')
    }
  }

  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: "'DM Sans', system-ui, sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        @keyframes slideIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .plat-btn { transition: all 0.18s; cursor: pointer; }
        .plat-btn:hover { transform: translateY(-2px); }
        .ob-input:focus { border-color: #E8610A !important; outline: none; }
      `}</style>

      <div style={{ width: '100%', maxWidth: '560px', animation: 'slideIn 0.4s ease' }}>

        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{ fontSize: '26px', fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
            Traffik<span style={{ color: '#E8610A' }}>ora</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '36px', gap: '4px' }}>
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div key={i} style={{ flex: 1, height: '3px', borderRadius: '2px', background: i + 1 <= step ? '#E8610A' : '#1e1e1e', transition: 'background 0.3s' }} />
          ))}
        </div>

        <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: '20px', padding: '40px', boxShadow: '0 0 60px rgba(232,97,10,0.06)' }}>

          {step === 1 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '52px', marginBottom: '20px' }}>🚀</div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>Welcome to Traffikora!</h1>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.7, margin: '0 0 28px' }}>
                Let’s get you set up in 2 minutes. Your AI will be running automatically before you finish.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '32px', textAlign: 'left' }}>
                {[
                  { icon: '🧠', text: 'We’ll learn your business from your website', num: '1' },
                  { icon: '📱', text: 'Choose which platforms to post on', num: '2' },
                  { icon: '⚡', text: 'Watch your first AI content generate live', num: '3' },
                  { icon: '🤖', text: 'Your AI agents run automatically every day', num: '4' },
                ].map(item => (
                  <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '14px', background: '#0a0a0a', border: '1px solid #1e1e1e', borderRadius: '10px', padding: '12px 16px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#E8610A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 800, color: '#fff', flexShrink: 0 }}>{item.num}</div>
                    <span style={{ fontSize: '14px', color: '#aaa' }}>{item.text}</span>
                  </div>
                ))}
              </div>
              <button onClick={() => setStep(2)}
                style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 24px rgba(232,97,10,0.35)' }}>
                Let’s Go →
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <div style={{ fontSize: '44px', marginBottom: '14px' }}>🧠</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 10px' }}>Tell Us About Your Business</h2>
                <p style={{ color: '#666', fontSize: '14px', margin: 0, lineHeight: 1.6 }}>Enter your website and our AI will learn everything about your business automatically.</p>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#555', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Your Website URL</label>
                <input type="text" className="ob-input" value={websiteUrl} onChange={e => setWebsiteUrl(e.target.value)}
                  placeholder="https://yourbusiness.com"
                  style={{ width: '100%', background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '14px 16px', fontSize: '15px', color: '#fff', fontFamily: "'DM Sans', sans-serif", transition: 'border-color 0.2s', boxSizing: 'border-box' }} />
                {brainError && <p style={{ color: '#f87171', fontSize: '12px', marginTop: '8px' }}>{brainError}</p>}
              </div>
              {brainDone && (
                <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '10px', padding: '12px 16px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ color: '#22c55e', fontSize: '18px' }}>✅</span>
                  <span style={{ fontSize: '13px', color: '#86efac', fontWeight: 600 }}>Business Brain built — AI knows your business!</span>
                </div>
              )}
              <button onClick={handleBuildBrain} disabled={brainBuilding}
                style={{ width: '100%', padding: '15px', background: brainBuilding ? '#1a1a1a' : 'linear-gradient(135deg,#E8610A,#C84E06)', color: brainBuilding ? '#444' : '#fff', border: 'none', borderRadius: '12px', fontSize: '15px', fontWeight: 700, cursor: brainBuilding ? 'not-allowed' : 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: brainBuilding ? 'none' : '0 4px 24px rgba(232,97,10,0.35)', marginBottom: '12px' }}>
                {brainBuilding ? '🧠 Learning your business...' : '⚡ Build My AI Brain'}
              </button>
              <button onClick={handleSkipBrain}
                style={{ width: '100%', padding: '12px', background: 'transparent', color: '#444', border: '1px solid #1e1e1e', borderRadius: '12px', fontSize: '14px', fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                I don’t have a website — skip this step
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <div style={{ fontSize: '44px', marginBottom: '14px' }}>📱</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 10px' }}>Where Do You Want to Post?</h2>
                <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>Select your platforms. Traffikora posts to all of them automatically every day.</p>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px', justifyContent: 'center' }}>
                {PLATFORMS.map(p => {
                  const isSelected = platforms.includes(p.id)
                  return (
                    <button key={p.id} className="plat-btn" onClick={() => togglePlatform(p.id)}
                      style={{ background: isSelected ? p.color : '#0a0a0a', border: '2px solid ' + (isSelected ? p.color : '#2a2a2a'), borderRadius: '10px', padding: '11px 20px', color: isSelected ? '#fff' : '#555', fontSize: '13px', fontWeight: isSelected ? 700 : 500, fontFamily: "'DM Sans', sans-serif", display: 'flex', alignItems: 'center', gap: '8px', boxShadow: isSelected ? '0 4px 16px ' + p.color + '50' : 'none' }}>
                      <span style={{ fontSize: '16px' }}>{p.icon}</span>
                      {p.label}
                      {isSelected && <span style={{ fontSize: '14px' }}>✓</span>}
                    </button>
                  )
                })}
              </div>
              {platforms.length > 0 && (
                <p style={{ textAlign: 'center', fontSize: '12px', color: '#E8610A', fontWeight: 700, marginBottom: '16px' }}>
                  {platforms.length} platform{platforms.length > 1 ? 's' : ''} selected — AI will post to all of them daily
                </p>
              )}
              {error && <p style={{ color: '#f87171', fontSize: '13px', textAlign: 'center', marginBottom: '12px' }}>{error}</p>}
              <button onClick={savePlatformsAndGenerate} disabled={platforms.length === 0}
                style={{ width: '100%', padding: '16px', background: platforms.length > 0 ? 'linear-gradient(135deg,#E8610A,#C84E06)' : '#1a1a1a', color: platforms.length > 0 ? '#fff' : '#444', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: platforms.length > 0 ? 'pointer' : 'not-allowed', fontFamily: "'DM Sans', sans-serif", boxShadow: platforms.length > 0 ? '0 4px 24px rgba(232,97,10,0.35)' : 'none' }}>
                ⚡ Generate My First Content
              </button>
            </div>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 8px' }}>Creating Your Content</h2>
              <p style={{ color: '#555', fontSize: '13px', margin: '0 0 32px' }}>Sit tight — this takes about 30 seconds.</p>
              <div style={{ position: 'relative', width: '140px', height: '140px', margin: '0 auto 28px' }}>
                <svg width="140" height="140" style={{ transform: 'rotate(-90deg)' }}>
                  <circle cx="70" cy="70" r={RADIUS} fill="none" stroke="#1a1a1a" strokeWidth="10" />
                  <circle cx="70" cy="70" r={RADIUS} fill="none" stroke="#E8610A" strokeWidth="10"
                    strokeDasharray={CIRCUMFERENCE} strokeDashoffset={strokeDashoffset} strokeLinecap="round"
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
                    <span style={{ fontSize: '13px' }}>{log.status === 'done' ? '✅' : log.status === 'error' ? '❌' : '⏳'}</span>
                    <span style={{ fontSize: '13px', color: log.status === 'done' ? '#86efac' : log.status === 'error' ? '#f87171' : '#ccc', flex: 1 }}>{log.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 5 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '52px', marginBottom: '16px' }}>🎉</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>You’re Live!</h2>
              <p style={{ color: '#666', fontSize: '15px', lineHeight: 1.7, margin: '0 0 20px' }}>
                Your AI is running. Every day it writes and queues new content for all your platforms automatically.
              </p>
              <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '12px', padding: '16px 20px', marginBottom: '20px', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 1.5s infinite' }} />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#22c55e', letterSpacing: '0.1em' }}>AUTO MODE ACTIVE</span>
                </div>
                {[
                  '✓ AI agents run daily automatically',
                  '✓ New blogs and social posts every single day',
                  '✓ Content queued for all your platforms',
                ].map(item => (
                  <div key={item} style={{ fontSize: '13px', color: '#86efac', marginBottom: '4px' }}>{item}</div>
                ))}
              </div>
              {generatedTitle && (
                <div style={{ background: '#0a0a0a', border: '1px solid #1e1e1e', borderLeft: '3px solid #E8610A', borderRadius: '10px', padding: '14px 18px', marginBottom: '20px', textAlign: 'left' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#E8610A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>First Blog Post Ready</div>
                  <div style={{ fontSize: '14px', color: '#ccc' }}>{generatedTitle}</div>
                </div>
              )}
              <button onClick={() => router.push('/dashboard')}
                style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 24px rgba(232,97,10,0.35)' }}>
                Go to My Dashboard →
              </button>
              <p style={{ fontSize: '12px', color: '#333', marginTop: '12px' }}>You can connect your social media accounts in the dashboard settings.</p>
            </div>
          )}

        </div>

        <p style={{ textAlign: 'center', color: '#333', fontSize: '12px', marginTop: '20px' }}>Step {step} of {TOTAL_STEPS}</p>
      </div>
    </div>
  )
}
