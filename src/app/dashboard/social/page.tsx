// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function SocialGenerator() {
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState('All Platforms')
  const [tone, setTone] = useState('Professional')
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState('')
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase
        .from('business_profiles')
        .select('business_name, industry, phone, website')
        .eq('user_id', user.id)
        .single()
      if (data) setProfile(data)
    }
    loadProfile()
  }, [])

  const businessName = profile?.business_name || 'My Business'
  const industry = profile?.industry || 'Business'
  const city = profile?.phone || ''
  const websiteUrl = profile?.website || ''

  async function generatePosts() {
    if (!topic) { setError('Please enter a topic or keyword.'); return }
    setLoading(true); setError(''); setPosts(null)
    try {
      const response = await fetch('/api/generate-social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, platform, tone, businessName, industry, city, websiteUrl })
      })
      const data = await response.json()
      if (!data.success) { setError('Generation failed: ' + (data.error || 'unknown error')); setLoading(false); return }
      setPosts(data.posts)
    } catch (e) { setError('Generation failed: ' + e.message) }
    setLoading(false)
  }

  function copyPost(text, key) {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(''), 2000)
  }

  const platformColors = { Facebook: '#1877F2', Instagram: '#E1306C', TikTok: '#010101', X: '#000000', LinkedIn: '#0A66C2' }

  return (
    <main suppressHydrationWarning>
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '60px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px' }}>AI Social Media Generator</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, margin: '0 auto 16px', maxWidth: '700px' }}>Generate Social Posts</h1>
        <p style={{ fontSize: '17px', color: '#ccc', maxWidth: '560px', margin: '0 auto' }}>One topic. Five platforms. Every post optimized for maximum reach and engagement.</p>
        {profile && (
          <p style={{ marginTop: '16px', fontSize: '13px', color: '#E8610A', fontFamily: 'DM Sans, sans-serif' }}>
            Generating for: {businessName} -- {industry} -- {city}
          </p>
        )}
      </section>
      <section style={{ background: '#f7f7f7', padding: '40px 32px', borderBottom: '2px solid #111' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px 180px', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px', color: '#111' }}>Topic or Keyword</label>
              <input type='text' placeholder='e.g. 5 marketing tips for small businesses' value={topic} onChange={e => setTopic(e.target.value)} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }} />
            </div>
            <div>
              <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px', color: '#111' }}>Platform</label>
              <select value={platform} onChange={e => setPlatform(e.target.value)} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }}>
                <option>All Platforms</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>TikTok</option>
                <option>X</option>
                <option>LinkedIn</option>
              </select>
            </div>
            <div>
              <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px', color: '#111' }}>Tone</label>
              <select value={tone} onChange={e => setTone(e.target.value)} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }}>
                <option>Professional</option>
                <option>Friendly</option>
                <option>Bold</option>
                <option>Conversational</option>
              </select>
            </div>
          </div>
          {error && <p style={{ color: 'red', marginBottom: '12px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>{error}</p>}
          <button onClick={generatePosts} disabled={loading} style={{ width: '100%', background: loading ? '#999' : '#E8610A', color: '#fff', padding: '16px', fontSize: '16px', fontWeight: 700, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            {loading ? 'Generating posts for all platforms...' : 'Generate Social Posts'}
          </button>
        </div>
      </section>
      {posts && (
        <section style={{ background: '#fff', padding: '40px 32px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {Object.entries(posts).map(([plat, post]) => (
              <div key={plat} style={{ border: '2px solid #e8e8e8', borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ background: platformColors[plat] || '#111', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#fff', margin: 0 }}>{plat}</p>
                  <button onClick={() => copyPost(post, plat)} style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', padding: '6px 14px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', borderRadius: '4px' }}>
                    {copied === plat ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#222', lineHeight: 1.8, margin: 0 }}>{post}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
