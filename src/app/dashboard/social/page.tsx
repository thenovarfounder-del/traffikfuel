// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function SocialGenerator() {
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState('All Platforms')
  const [tone, setTone] = useState('Professional')
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState('')
  const [profile, setProfile] = useState(null)
  const [userStatus, setUserStatus] = useState('free')

  useEffect(() => {
    async function loadData() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data: bp } = await supabase.from('business_profiles').select('business_name, industry, phone, website').eq('user_id', user.id).single()
      if (bp) setProfile(bp)
      const { data: userData } = await supabase.from('users').select('status').eq('id', user.id).single()
      if (userData?.status) setUserStatus(userData.status)
    }
    loadData()
  }, [])

  const isPaid = userStatus && userStatus !== 'free'
  const businessName = profile?.business_name || 'My Business'
  const industry = profile?.industry || 'Business'
  const city = profile?.phone || ''
  const websiteUrl = profile?.website || ''

  async function generatePosts() {
    if (!topic) { setError('Please enter a topic or keyword.'); return }
    setLoading(true); setError(''); setPosts(null)
    try {
      const response = await fetch('/api/generate-social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform, tone, businessName, industry, city, websiteUrl }) })
      const data = await response.json()
      if (!data.success) { setError('Generation failed: ' + (data.error || 'unknown error')); setLoading(false); return }
      setPosts(data.posts)
    } catch (e) { setError('Generation failed: ' + e.message) }
    setLoading(false)
  }

  function copyPost(text, key) { navigator.clipboard.writeText(text); setCopied(key); setTimeout(() => setCopied(''), 2000) }

  const platformColors = { Facebook: '#1877F2', Instagram: '#E1306C', TikTok: '#010101', X: '#000000', LinkedIn: '#0A66C2' }

  return (
    <div style={{ minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"DM Sans, sans-serif" }}>

      {/* Header */}
      <div style={{ background:"linear-gradient(135deg,#111 0%,#1a0e00 100%)", borderBottom:"1px solid #1e1e1e", padding:"32px 40px", marginBottom:"32px" }}>
        <div style={{ maxWidth:"900px", margin:"0 auto", display:"flex", alignItems:"center", gap:"14px" }}>
          <div style={{ width:"44px", height:"44px", background:"linear-gradient(135deg,#E8610A,#ff8c42)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>📱</div>
          <div>
            <h1 style={{ fontFamily:"Playfair Display, serif", fontSize:"26px", fontWeight:900, color:"#fff", margin:0 }}>Social Media Generator</h1>
            <p style={{ color:"#666", fontSize:"13px", margin:0 }}>One topic. Five platforms. Every post optimized for maximum reach.</p>
          </div>
          {profile?.business_name && (
            <div style={{ marginLeft:"auto", display:"inline-flex", alignItems:"center", gap:"6px", background:"rgba(232,97,10,0.1)", border:"1px solid rgba(232,97,10,0.3)", borderRadius:"20px", padding:"4px 14px" }}>
              <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#E8610A" }}></div>
              <span style={{ fontSize:"12px", color:"#E8610A", fontWeight:600 }}>{profile.business_name}</span>
            </div>
          )}
        </div>
      </div>

      {/* Input */}
      <div style={{ maxWidth:"900px", margin:"0 auto", padding:"0 40px 40px" }}>
        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", padding:"28px", marginBottom:"24px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 200px 180px", gap:"16px", marginBottom:"16px" }}>
            {[
              { label:"Topic or Keyword", val:topic, set:setTopic, placeholder:"e.g. 5 marketing tips for small businesses", type:"input" },
            ].map(({label,val,set,placeholder}) => (
              <div key={label}>
                <label style={{ display:"block", fontSize:"12px", fontWeight:700, color:"#aaa", marginBottom:"8px", textTransform:"uppercase", letterSpacing:"0.08em" }}>{label}</label>
                <input value={val} onChange={e => set(e.target.value)} placeholder={placeholder}
                  style={{ width:"100%", background:"#0a0a0a", border:"1px solid #2a2a2a", borderRadius:"8px", padding:"11px 14px", fontSize:"14px", color:"#fff", outline:"none", fontFamily:"DM Sans, sans-serif", boxSizing:"border-box" }}
                  onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
              </div>
            ))}
            <div>
              <label style={{ display:"block", fontSize:"12px", fontWeight:700, color:"#aaa", marginBottom:"8px", textTransform:"uppercase", letterSpacing:"0.08em" }}>Platform</label>
              <select value={platform} onChange={e => setPlatform(e.target.value)}
                style={{ width:"100%", background:"#0a0a0a", border:"1px solid #2a2a2a", borderRadius:"8px", padding:"11px 14px", fontSize:"14px", color:"#fff", outline:"none", fontFamily:"DM Sans, sans-serif", boxSizing:"border-box" }}>
                {['All Platforms','Facebook','Instagram','TikTok','X / Twitter','LinkedIn'].map(p => <option key={p}>{p}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display:"block", fontSize:"12px", fontWeight:700, color:"#aaa", marginBottom:"8px", textTransform:"uppercase", letterSpacing:"0.08em" }}>Tone</label>
              <select value={tone} onChange={e => setTone(e.target.value)}
                style={{ width:"100%", background:"#0a0a0a", border:"1px solid #2a2a2a", borderRadius:"8px", padding:"11px 14px", fontSize:"14px", color:"#fff", outline:"none", fontFamily:"DM Sans, sans-serif", boxSizing:"border-box" }}>
                {['Professional','Friendly','Bold','Conversational'].map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
          {error && <p style={{ color:"#f87171", marginBottom:"12px", fontSize:"14px" }}>{error}</p>}
          <button onClick={generatePosts} disabled={loading}
            style={{ width:"100%", background:loading?"#2a2a2a":"linear-gradient(135deg,#E8610A,#C84E06)", color:loading?"#666":"#fff", padding:"14px", fontSize:"15px", fontWeight:700, border:"none", cursor:loading?"not-allowed":"pointer", fontFamily:"DM Sans, sans-serif", borderRadius:"8px", boxShadow:loading?"none":"0 4px 20px rgba(232,97,10,0.35)" }}>
            {loading ? 'Generating posts for all platforms...' : '⚡ Generate Social Posts'}
          </button>
        </div>

        {/* Results */}
        {posts && (
          <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
            {Object.entries(posts).map(([plat, post]) => (
              <div key={plat} style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"12px", overflow:"hidden" }}>
                <div style={{ background:platformColors[plat] || "#333", padding:"14px 20px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <p style={{ fontSize:"14px", fontWeight:700, color:"#fff", margin:0 }}>{plat}</p>
                  <button onClick={() => copyPost(post, plat)}
                    style={{ background:"rgba(255,255,255,0.2)", border:"1px solid rgba(255,255,255,0.4)", color:"#fff", padding:"6px 14px", fontSize:"12px", fontWeight:600, cursor:"pointer", fontFamily:"DM Sans, sans-serif", borderRadius:"4px" }}>
                    {copied === plat ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div style={{ padding:"20px" }}>
                  <p style={{ fontSize:"15px", color:"#ccc", lineHeight:1.8, margin:0 }}>{post}</p>
                </div>
              </div>
            ))}
            {!isPaid && (
              <div style={{ background:"linear-gradient(135deg,rgba(232,97,10,0.1),rgba(200,78,6,0.05))", border:"1px solid rgba(232,97,10,0.3)", borderRadius:"12px", padding:"24px", textAlign:"center" }}>
                <div style={{ fontSize:36, marginBottom:12 }}>🔒</div>
                <h3 style={{ fontFamily:"Playfair Display, serif", fontSize:20, color:"#fff", marginBottom:8 }}>Unlock Unlimited Social Posts</h3>
                <p style={{ color:"#888", fontSize:13, marginBottom:20 }}>Upgrade to Starter to generate unlimited posts and schedule them across all platforms.</p>
                <a href="/pricing" style={{ background:"linear-gradient(135deg,#E8610A,#C84E06)", color:"#fff", padding:"12px 32px", borderRadius:8, fontWeight:700, fontSize:14, textDecoration:"none" }}>Upgrade to Starter — $47/month</a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}