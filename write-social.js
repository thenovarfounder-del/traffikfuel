const fs = require("fs");
const path = require("path");

function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content);
  console.log("DONE: " + filePath);
}

const base = "C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard";

// ============================================================
// 1. BUSINESS BRAIN (scrape) - dark theme
// ============================================================
write(base + "\\scrape\\page.tsx", `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function ScrapePage() {
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState('')
  const [brain, setBrain] = useState(null)
  const [loading, setLoading] = useState(false)
  const [businessId, setBusinessId] = useState('')

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase.from('business_profiles').select('id, website, brain').eq('user_id', user.id).single()
      if (data) {
        setBusinessId(data.id)
        setUrl(data.website || '')
        if (data.brain) setBrain(data.brain)
      }
    }
    load()
  }, [])

  const handleBuild = async () => {
    if (!url || !businessId) { setStatus('Missing URL or business profile.'); return }
    setLoading(true)
    setStatus('Building your brain...')
    setBrain(null)
    try {
      const res = await fetch('/api/scrape', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ businessId, url }) })
      const data = await res.json()
      if (!res.ok) { setStatus('Error: ' + (data.error || 'Unknown error')) }
      else { setBrain(data.brain); setStatus('Brain built successfully!') }
    } catch { setStatus('Error: Network failure') }
    setLoading(false)
  }

  return (
    <div style={{ minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"DM Sans, sans-serif" }}>
      <div style={{ background:"linear-gradient(135deg,#111 0%,#1a0e00 100%)", borderBottom:"1px solid #1e1e1e", padding:"32px 40px", marginBottom:"32px" }}>
        <div style={{ maxWidth:"860px", margin:"0 auto", display:"flex", alignItems:"center", gap:"14px" }}>
          <div style={{ width:"44px", height:"44px", background:"linear-gradient(135deg,#E8610A,#ff8c42)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>\u{1F9E0}</div>
          <div>
            <h1 style={{ fontFamily:"Playfair Display, serif", fontSize:"26px", fontWeight:900, color:"#fff", margin:0 }}>Business Brain</h1>
            <p style={{ color:"#666", fontSize:"13px", margin:0 }}>Enter your website URL and we\u2019ll build your AI marketing brain.</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:"860px", margin:"0 auto", padding:"0 40px 60px" }}>

        {/* Stats */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"12px", marginBottom:"28px" }}>
          {[
            { label:"AI Powered", value:"100%", icon:"\u{1F916}" },
            { label:"Data Sources", value:"6+", icon:"\u{1F4CA}" },
            { label:"Updates", value:"Real-time", icon:"\u26A1" },
          ].map(stat => (
            <div key={stat.label} style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"10px", padding:"16px 20px", display:"flex", alignItems:"center", gap:"12px" }}>
              <span style={{ fontSize:"20px" }}>{stat.icon}</span>
              <div>
                <div style={{ fontFamily:"Playfair Display, serif", fontSize:"20px", fontWeight:700, color:"#E8610A", lineHeight:1 }}>{stat.value}</div>
                <div style={{ fontSize:"11px", color:"#555", marginTop:"2px" }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", padding:"28px", marginBottom:"24px" }}>
          <label style={{ display:"block", fontSize:"12px", fontWeight:700, color:"#aaa", marginBottom:"10px", textTransform:"uppercase", letterSpacing:"0.08em" }}>Website URL</label>
          <div style={{ display:"flex", gap:"12px" }}>
            <input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://yourwebsite.com"
              style={{ flex:1, background:"#0a0a0a", border:"1px solid #2a2a2a", borderRadius:"8px", padding:"12px 16px", fontSize:"15px", color:"#fff", outline:"none", fontFamily:"DM Sans, sans-serif" }}
              onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
            <button onClick={handleBuild} disabled={loading}
              style={{ background:loading?"#2a2a2a":"linear-gradient(135deg,#E8610A,#C84E06)", color:loading?"#666":"#fff", border:"none", borderRadius:"8px", padding:"12px 28px", fontSize:"14px", fontWeight:700, cursor:loading?"not-allowed":"pointer", fontFamily:"DM Sans, sans-serif", whiteSpace:"nowrap", boxShadow:loading?"none":"0 4px 20px rgba(232,97,10,0.35)" }}>
              {loading ? "\u23F3 Building..." : "\u26A1 Build Brain"}
            </button>
          </div>
          {status && (
            <div style={{ marginTop:"14px", background:status.includes("success") ? "rgba(34,197,94,0.08)" : status.includes("Error") ? "rgba(239,68,68,0.08)" : "rgba(232,97,10,0.08)", border:"1px solid " + (status.includes("success") ? "rgba(34,197,94,0.2)" : status.includes("Error") ? "rgba(239,68,68,0.2)" : "rgba(232,97,10,0.2)"), borderRadius:"8px", padding:"10px 14px", fontSize:"13px", color:status.includes("success") ? "#4ade80" : status.includes("Error") ? "#f87171" : "#E8610A" }}>
              {status}
            </div>
          )}
        </div>

        {/* Brain Output */}
        {brain && (
          <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", overflow:"hidden" }}>
            <div style={{ background:"linear-gradient(135deg,#1a0e00,#111)", borderBottom:"1px solid #1e1e1e", padding:"18px 28px", display:"flex", alignItems:"center", gap:"10px" }}>
              <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#22c55e" }}></div>
              <span style={{ fontFamily:"DM Sans, sans-serif", fontSize:"13px", color:"#22c55e", fontWeight:600 }}>Brain built successfully</span>
            </div>
            <div style={{ padding:"24px 28px" }}>
              <h2 style={{ fontFamily:"Playfair Display, serif", fontSize:"18px", fontWeight:700, color:"#E8610A", marginBottom:"16px" }}>Your Business Brain</h2>
              <div style={{ background:"#0a0a0a", border:"1px solid #1e1e1e", borderRadius:"10px", padding:"20px", maxHeight:"400px", overflowY:"auto" }}>
                <pre style={{ fontSize:"13px", color:"#ccc", whiteSpace:"pre-wrap", margin:0, fontFamily:"monospace", lineHeight:1.7 }}>{JSON.stringify(brain, null, 2)}</pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}`);

// ============================================================
// 2. BUSINESS SETTINGS - dark theme
// ============================================================
write(base + "\\settings\\page.tsx", `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function DashboardSettings() {
  const [businessName, setBusinessName] = useState('')
  const [industry, setIndustry] = useState('')
  const [city, setCity] = useState('')
  const [website, setWebsite] = useState('')
  const [autoMode, setAutoMode] = useState(false)
  const [platforms, setPlatforms] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase.from('business_profiles').select('*').eq('user_id', user.id).single()
      if (data) {
        setBusinessName(data.business_name || '')
        setIndustry(data.industry || '')
        setCity(data.phone || '')
        setWebsite(data.website || '')
        setAutoMode(data.auto_mode || false)
        setPlatforms(data.platforms || [])
      }
    }
    loadProfile()
  }, [])

  async function handleSubmit() {
    if (!businessName || !industry || !city) { setError('Please fill in Business Name, Category, and City.'); return }
    setLoading(true); setError(''); setSuccess('')
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setError('Not logged in.'); setLoading(false); return }
      const { error: upsertError } = await supabase.from('business_profiles').upsert({ user_id: user.id, business_name: businessName, industry, website, phone: city, auto_mode: autoMode, platforms }, { onConflict: 'user_id' })
      if (upsertError) { setError('Save failed: ' + upsertError.message); setLoading(false); return }
      setSuccess('Settings saved!')
      setTimeout(() => setSuccess(''), 3000)
    } catch (e) { setError('Something went wrong. Please try again.') }
    setLoading(false)
  }

  const inputStyle = { width:"100%", background:"#0a0a0a", border:"1px solid #2a2a2a", borderRadius:"8px", padding:"12px 16px", fontSize:"14px", color:"#fff", outline:"none", fontFamily:"DM Sans, sans-serif", boxSizing:"border-box" }
  const labelStyle = { display:"block", fontSize:"12px", fontWeight:700, color:"#aaa", marginBottom:"8px", textTransform:"uppercase", letterSpacing:"0.08em" }

  return (
    <div style={{ minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"DM Sans, sans-serif" }}>
      <div style={{ background:"linear-gradient(135deg,#111 0%,#1a0e00 100%)", borderBottom:"1px solid #1e1e1e", padding:"32px 40px", marginBottom:"32px" }}>
        <div style={{ maxWidth:"700px", margin:"0 auto", display:"flex", alignItems:"center", gap:"14px" }}>
          <div style={{ width:"44px", height:"44px", background:"linear-gradient(135deg,#E8610A,#ff8c42)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>\u2699\uFE0F</div>
          <div>
            <h1 style={{ fontFamily:"Playfair Display, serif", fontSize:"26px", fontWeight:900, color:"#fff", margin:0 }}>Business Settings</h1>
            <p style={{ color:"#666", fontSize:"13px", margin:0 }}>This information personalizes all your generated content.</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:"700px", margin:"0 auto", padding:"0 40px 60px" }}>
        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", padding:"32px", marginBottom:"24px" }}>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px", marginBottom:"20px" }}>
            <div>
              <label style={labelStyle}>Business Name</label>
              <input type="text" placeholder="e.g. Randy Auto Repair" value={businessName} onChange={e => setBusinessName(e.target.value)} style={inputStyle}
                onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
            </div>
            <div>
              <label style={labelStyle}>Business Category</label>
              <select value={industry} onChange={e => setIndustry(e.target.value)} style={{ ...inputStyle, cursor:"pointer" }}>
                <option value="">Select category...</option>
                {["Restaurant","Dental Practice","Real Estate","Salon or Spa","HVAC","Plumbing","Auto Repair","Law Firm","Chiropractic","Marketing Agency","Other"].map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>City and State</label>
              <input type="text" placeholder="e.g. Tampa, FL" value={city} onChange={e => setCity(e.target.value)} style={inputStyle}
                onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
            </div>
            <div>
              <label style={labelStyle}>Website URL</label>
              <input type="text" placeholder="https://www.yourbusiness.com" value={website} onChange={e => setWebsite(e.target.value)} style={inputStyle}
                onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
            </div>
          </div>

          <div style={{ borderTop:"1px solid #1e1e1e", paddingTop:"24px", marginBottom:"24px" }}>
            <p style={{ fontWeight:700, color:"#fff", marginBottom:"4px", fontSize:"15px" }}>My Social Platforms</p>
            <p style={{ fontSize:"13px", color:"#666", marginBottom:"16px" }}>Select platforms so your calendar shows relevant options.</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:"10px" }}>
              {[
                { id:"facebook", label:"Facebook", color:"#1877F2" },
                { id:"instagram", label:"Instagram", color:"#E1306C" },
                { id:"tiktok", label:"TikTok", color:"#ff6550" },
                { id:"twitter", label:"X / Twitter", color:"#888" },
                { id:"linkedin", label:"LinkedIn", color:"#0A66C2" },
                { id:"google", label:"Google Business", color:"#4285F4" },
                { id:"wordpress", label:"WordPress", color:"#21759B" },
              ].map(p => (
                <div key={p.id} onClick={() => setPlatforms(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])}
                  style={{ display:"flex", alignItems:"center", gap:"8px", padding:"8px 14px", borderRadius:"20px", border:"2px solid " + (platforms.includes(p.id) ? p.color : "#2a2a2a"), background:platforms.includes(p.id) ? p.color + "22" : "#0a0a0a", cursor:"pointer", transition:"all 0.15s" }}>
                  <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:p.color }} />
                  <span style={{ fontSize:"13px", fontWeight:600, color:platforms.includes(p.id) ? p.color : "#666" }}>{p.label}</span>
                  {platforms.includes(p.id) && <span style={{ fontSize:"12px", color:p.color }}>\u2713</span>}
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop:"1px solid #1e1e1e", paddingTop:"24px", marginBottom:"24px" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div>
                <p style={{ fontWeight:700, color:"#fff", marginBottom:"4px", fontSize:"15px" }}>Publishing Mode</p>
                <p style={{ fontSize:"13px", color:"#666", margin:0 }}>{autoMode ? "Auto Mode \u2014 Content publishes automatically" : "Manual Mode \u2014 You approve each post before publishing"}</p>
              </div>
              <div onClick={() => setAutoMode(!autoMode)}
                style={{ width:"52px", height:"28px", borderRadius:"14px", background:autoMode?"#E8610A":"#333", cursor:"pointer", position:"relative", transition:"background 0.2s", flexShrink:0 }}>
                <div style={{ position:"absolute", top:"3px", left:autoMode?"27px":"3px", width:"22px", height:"22px", borderRadius:"50%", background:"#fff", transition:"left 0.2s", boxShadow:"0 1px 3px rgba(0,0,0,0.3)" }} />
              </div>
            </div>
          </div>

          {error && <div style={{ background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.2)", borderRadius:"8px", padding:"12px", marginBottom:"16px", color:"#f87171", fontSize:"14px" }}>{error}</div>}
          {success && <div style={{ background:"rgba(34,197,94,0.08)", border:"1px solid rgba(34,197,94,0.2)", borderRadius:"8px", padding:"12px", marginBottom:"16px", color:"#4ade80", fontSize:"14px" }}>{success}</div>}

          <button onClick={handleSubmit} disabled={loading}
            style={{ width:"100%", padding:"14px", background:loading?"#2a2a2a":"linear-gradient(135deg,#E8610A,#C84E06)", color:loading?"#666":"#fff", border:"none", borderRadius:"8px", fontSize:"15px", fontWeight:700, cursor:loading?"not-allowed":"pointer", fontFamily:"DM Sans, sans-serif", boxShadow:loading?"none":"0 4px 20px rgba(232,97,10,0.35)" }}>
            {loading ? "Saving..." : "Save Settings"}
          </button>
        </div>
      </div>
    </div>
  )
}`);

// ============================================================
// 3. WORDPRESS CONNECT - dark theme
// ============================================================
write(base + "\\connect\\wordpress\\page.tsx", `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function ConnectWordPress() {
  const [wpUrl, setWpUrl] = useState('')
  const [wpUser, setWpUser] = useState('')
  const [wpPass, setWpPass] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [connected, setConnected] = useState(false)
  const [userId, setUserId] = useState('')

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUserId(user.id)
      const res = await fetch('/api/wordpress?user_id=' + user.id)
      const data = await res.json()
      if (data.connected) {
        setConnected(true)
        setWpUrl(data.wp_url || '')
      }
    }
    load()
  }, [])

  async function handleConnect() {
    if (!wpUrl || !wpUser || !wpPass) { setMessage('Please fill in all fields.'); return }
    setSaving(true); setMessage('')
    try {
      const res = await fetch('/api/wordpress/connect', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ user_id: userId, wp_url: wpUrl, wp_username: wpUser, wp_app_password: wpPass }) })
      const data = await res.json()
      if (data.success) { setConnected(true); setMessage('WordPress connected successfully!') }
      else { setMessage('Error: ' + (data.error || 'Connection failed')) }
    } catch (e) { setMessage('Connection failed. Please try again.') }
    setSaving(false)
  }

  const inputStyle = { width:"100%", background:"#0a0a0a", border:"1px solid #2a2a2a", borderRadius:"8px", padding:"12px 16px", fontSize:"14px", color:"#fff", outline:"none", fontFamily:"DM Sans, sans-serif", boxSizing:"border-box" }
  const labelStyle = { display:"block", fontSize:"12px", fontWeight:700, color:"#aaa", marginBottom:"8px", textTransform:"uppercase", letterSpacing:"0.08em" }

  return (
    <div style={{ minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"DM Sans, sans-serif" }}>
      <div style={{ background:"linear-gradient(135deg,#111 0%,#1a0e00 100%)", borderBottom:"1px solid #1e1e1e", padding:"32px 40px", marginBottom:"40px", textAlign:"center" }}>
        <p style={{ fontSize:"12px", fontWeight:700, color:"#E8610A", textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"12px" }}>WORDPRESS CONNECTION</p>
        <div style={{ fontSize:"48px", marginBottom:"16px" }}>\u{1F310}</div>
        <h1 style={{ fontFamily:"Playfair Display, serif", fontSize:"36px", fontWeight:900, color:"#fff", margin:"0 0 12px" }}>Connect WordPress</h1>
        <p style={{ color:"#888", fontSize:"16px", maxWidth:"500px", margin:"0 auto" }}>Connect your WordPress site so Traffikora can publish blog posts automatically.</p>
      </div>

      <div style={{ maxWidth:"600px", margin:"0 auto", padding:"0 40px 60px" }}>

        {/* Status */}
        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"12px", padding:"16px 20px", marginBottom:"20px", display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{ width:"10px", height:"10px", borderRadius:"50%", background:connected?"#22c55e":"#555" }}></div>
          <span style={{ color:"#888", fontSize:"14px" }}>Status: <strong style={{ color:connected?"#22c55e":"#fff" }}>{connected ? "Connected \u2014 " + wpUrl : "Not connected"}</strong></span>
        </div>

        {/* How to get password */}
        <div style={{ background:"rgba(232,97,10,0.08)", border:"1px solid rgba(232,97,10,0.2)", borderRadius:"12px", padding:"20px 24px", marginBottom:"20px" }}>
          <p style={{ color:"#E8610A", fontWeight:700, fontSize:"14px", marginBottom:"12px" }}>How to get your Application Password</p>
          {["Log into your WordPress admin panel", "Go to Users \u2192 Profile", "Scroll down to Application Passwords", "Enter a name (e.g. Traffikora) and click Add New Application Password"].map((step, i) => (
            <div key={i} style={{ display:"flex", gap:"10px", marginBottom:"8px", alignItems:"flex-start" }}>
              <span style={{ color:"#E8610A", fontWeight:700, fontSize:"13px", flexShrink:0 }}>{i+1}.</span>
              <span style={{ color:"#ccc", fontSize:"13px" }}>{step}</span>
            </div>
          ))}
        </div>

        {/* Form */}
        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", padding:"28px" }}>
          <div style={{ display:"flex", flexDirection:"column", gap:"16px", marginBottom:"20px" }}>
            <div>
              <label style={labelStyle}>WordPress Site URL</label>
              <input type="text" value={wpUrl} onChange={e => setWpUrl(e.target.value)} placeholder="https://www.yoursite.com" style={inputStyle}
                onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
            </div>
            <div>
              <label style={labelStyle}>WordPress Username</label>
              <input type="text" value={wpUser} onChange={e => setWpUser(e.target.value)} placeholder="Your WordPress admin username" style={inputStyle}
                onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
            </div>
            <div>
              <label style={labelStyle}>Application Password</label>
              <input type="password" value={wpPass} onChange={e => setWpPass(e.target.value)} placeholder="xxxx xxxx xxxx xxxx xxxx xxxx" style={inputStyle}
                onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
            </div>
          </div>

          {message && (
            <div style={{ background:message.includes("success") ? "rgba(34,197,94,0.08)" : "rgba(239,68,68,0.08)", border:"1px solid " + (message.includes("success") ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.2)"), borderRadius:"8px", padding:"12px 16px", marginBottom:"16px", fontSize:"13px", color:message.includes("success") ? "#4ade80" : "#f87171" }}>
              {message}
            </div>
          )}

          <button onClick={handleConnect} disabled={saving}
            style={{ width:"100%", background:saving?"#2a2a2a":"linear-gradient(135deg,#E8610A,#C84E06)", color:saving?"#666":"#fff", border:"none", borderRadius:"8px", padding:"14px", fontSize:"14px", fontWeight:700, cursor:saving?"not-allowed":"pointer", fontFamily:"DM Sans, sans-serif", boxShadow:saving?"none":"0 4px 20px rgba(232,97,10,0.35)" }}>
            {saving ? "Connecting..." : connected ? "Update Connection" : "Connect WordPress"}
          </button>
        </div>
      </div>
    </div>
  )
}`);

// ============================================================
// 4. SUPPORT PAGE - with working email via API
// ============================================================
write(base + "\\support\\page.tsx", `// @ts-nocheck
'use client'
import { useState } from 'react'

export default function SupportPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit() {
    if (!name || !email || !message) { setError('Please fill in all required fields.'); return }
    setLoading(true); setError('')
    try {
      const res = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message })
      })
      const data = await res.json()
      if (data.success) { setSent(true) }
      else { setError('Failed to send. Please email support@traffikora.com directly.') }
    } catch (e) { setError('Failed to send. Please email support@traffikora.com directly.') }
    setLoading(false)
  }

  const inputStyle = { width:"100%", background:"#0a0a0a", border:"1px solid #2a2a2a", borderRadius:"8px", padding:"12px 16px", fontSize:"14px", color:"#fff", outline:"none", fontFamily:"DM Sans, sans-serif", boxSizing:"border-box" }
  const labelStyle = { display:"block", fontSize:"12px", fontWeight:700, color:"#aaa", marginBottom:"8px", textTransform:"uppercase", letterSpacing:"0.08em" }

  return (
    <div style={{ minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"DM Sans, sans-serif" }}>
      <div style={{ background:"linear-gradient(135deg,#111 0%,#1a0e00 100%)", borderBottom:"1px solid #1e1e1e", padding:"32px 40px", marginBottom:"32px" }}>
        <div style={{ maxWidth:"900px", margin:"0 auto", display:"flex", alignItems:"center", gap:"14px" }}>
          <div style={{ width:"44px", height:"44px", background:"linear-gradient(135deg,#E8610A,#ff8c42)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>\u{1F4AC}</div>
          <div>
            <h1 style={{ fontFamily:"Playfair Display, serif", fontSize:"26px", fontWeight:900, color:"#fff", margin:0 }}>Support</h1>
            <p style={{ color:"#666", fontSize:"13px", margin:0 }}>We\u2019re here to help. Send us a message and we\u2019ll get back to you within 24 hours.</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:"900px", margin:"0 auto", padding:"0 40px 60px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"24px" }}>

        {/* Form */}
        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", padding:"28px" }}>
          <h2 style={{ fontFamily:"Playfair Display, serif", fontSize:"20px", fontWeight:700, color:"#fff", marginBottom:"20px" }}>Send a Message</h2>
          {sent ? (
            <div style={{ textAlign:"center", padding:"40px 0" }}>
              <div style={{ fontSize:56, marginBottom:16 }}>\u2705</div>
              <p style={{ fontFamily:"Playfair Display, serif", fontSize:22, color:"#fff", marginBottom:8 }}>Message sent!</p>
              <p style={{ color:"#888", fontSize:14 }}>We\u2019ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px" }}>
                <div>
                  <label style={labelStyle}>Your Name *</label>
                  <input value={name} onChange={e => setName(e.target.value)} placeholder="Randy" style={inputStyle}
                    onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Subject</label>
                <input value={subject} onChange={e => setSubject(e.target.value)} placeholder="What do you need help with?" style={inputStyle}
                  onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
              </div>
              <div>
                <label style={labelStyle}>Message *</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} rows={5} placeholder="Describe your issue or question..."
                  style={{ ...inputStyle, resize:"vertical" }}
                  onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
              </div>
              {error && <div style={{ background:"rgba(239,68,68,0.08)", border:"1px solid rgba(239,68,68,0.2)", borderRadius:"8px", padding:"10px 14px", fontSize:"13px", color:"#f87171" }}>{error}</div>}
              <button onClick={handleSubmit} disabled={loading}
                style={{ background:loading?"#2a2a2a":"linear-gradient(135deg,#E8610A,#C84E06)", color:loading?"#666":"#fff", border:"none", borderRadius:"8px", padding:"13px", fontSize:"14px", fontWeight:700, cursor:loading?"not-allowed":"pointer", fontFamily:"DM Sans, sans-serif", boxShadow:loading?"none":"0 4px 20px rgba(232,97,10,0.35)" }}>
                {loading ? "Sending..." : "Send Message \u2192"}
              </button>
            </div>
          )}
        </div>

        {/* Help Cards */}
        <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
          {[
            { icon:"\u{1F4E7}", title:"Email Support", desc:"support@traffikora.com", sub:"Response within 24 hours" },
            { icon:"\u{1F4AC}", title:"Live Chat", desc:"Chat with CYRA", sub:"Click the chat bubble bottom right" },
            { icon:"\u{1F4CB}", title:"Common Issues", desc:"Billing, connections, content", sub:"Most answers are in our FAQ" },
            { icon:"\u{1F6E0}\uFE0F", title:"Account Issues", desc:"Login, password, plan changes", sub:"We\u2019ll fix it fast \u2014 usually same day" },
          ].map((item, i) => (
            <div key={i} style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"12px", padding:"18px 20px", display:"flex", alignItems:"center", gap:"14px" }}>
              <div style={{ fontSize:26, flexShrink:0 }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight:700, color:"#fff", fontSize:14, marginBottom:2 }}>{item.title}</div>
                <div style={{ color:"#E8610A", fontSize:13, marginBottom:2 }}>{item.desc}</div>
                <div style={{ color:"#555", fontSize:12 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}`);

console.log("\n✅ ALL 4 PAGES REBUILT!");
console.log("Business Brain, Business Settings, WordPress Connect, Support");