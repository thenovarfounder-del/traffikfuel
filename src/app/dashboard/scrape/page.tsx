// @ts-nocheck
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
          <div style={{ width:"44px", height:"44px", background:"linear-gradient(135deg,#E8610A,#ff8c42)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>🧠</div>
          <div>
            <h1 style={{ fontFamily:"Playfair Display, serif", fontSize:"26px", fontWeight:900, color:"#fff", margin:0 }}>Business Brain</h1>
            <p style={{ color:"#666", fontSize:"13px", margin:0 }}>Enter your website URL and we’ll build your AI marketing brain.</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:"860px", margin:"0 auto", padding:"0 40px 60px" }}>

        {/* Stats */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"12px", marginBottom:"28px" }}>
          {[
            { label:"AI Powered", value:"100%", icon:"🤖" },
            { label:"Data Sources", value:"6+", icon:"📊" },
            { label:"Updates", value:"Real-time", icon:"⚡" },
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
              {loading ? "⏳ Building..." : "⚡ Build Brain"}
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
}