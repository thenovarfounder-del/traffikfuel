// @ts-nocheck
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
        setCity(data.city || data.phone || '')
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
      const { error: upsertError } = await supabase.from('business_profiles').upsert({ user_id: user.id, business_name: businessName, industry, website, city: city, phone: city, auto_mode: autoMode, platforms }, { onConflict: 'user_id' })
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
          <div style={{ width:"44px", height:"44px", background:"linear-gradient(135deg,#E8610A,#ff8c42)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>⚙️</div>
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
                  {platforms.includes(p.id) && <span style={{ fontSize:"12px", color:p.color }}>✓</span>}
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop:"1px solid #1e1e1e", paddingTop:"24px", marginBottom:"24px" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div>
                <p style={{ fontWeight:700, color:"#fff", marginBottom:"4px", fontSize:"15px" }}>Publishing Mode</p>
                <p style={{ fontSize:"13px", color:"#666", margin:0 }}>{autoMode ? "Auto Mode — Content publishes automatically" : "Manual Mode — You approve each post before publishing"}</p>
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
}