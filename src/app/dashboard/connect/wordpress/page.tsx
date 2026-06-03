// @ts-nocheck
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
        <div style={{ fontSize:"48px", marginBottom:"16px" }}>🌐</div>
        <h1 style={{ fontFamily:"Playfair Display, serif", fontSize:"36px", fontWeight:900, color:"#fff", margin:"0 0 12px" }}>Connect WordPress</h1>
        <p style={{ color:"#888", fontSize:"16px", maxWidth:"500px", margin:"0 auto" }}>Connect your WordPress site so Traffikora can publish blog posts automatically.</p>
      </div>

      <div style={{ maxWidth:"600px", margin:"0 auto", padding:"0 40px 60px" }}>

        {/* Status */}
        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"12px", padding:"16px 20px", marginBottom:"20px", display:"flex", alignItems:"center", gap:"10px" }}>
          <div style={{ width:"10px", height:"10px", borderRadius:"50%", background:connected?"#22c55e":"#555" }}></div>
          <span style={{ color:"#888", fontSize:"14px" }}>Status: <strong style={{ color:connected?"#22c55e":"#fff" }}>{connected ? "Connected — " + wpUrl : "Not connected"}</strong></span>
        </div>

        {/* How to get password */}
        <div style={{ background:"rgba(232,97,10,0.08)", border:"1px solid rgba(232,97,10,0.2)", borderRadius:"12px", padding:"20px 24px", marginBottom:"20px" }}>
          <p style={{ color:"#E8610A", fontWeight:700, fontSize:"14px", marginBottom:"12px" }}>How to get your Application Password</p>
          {["Log into your WordPress admin panel", "Go to Users → Profile", "Scroll down to Application Passwords", "Enter a name (e.g. Traffikora) and click Add New Application Password"].map((step, i) => (
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
}