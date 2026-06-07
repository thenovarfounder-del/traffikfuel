const fs = require('fs')
const path = require('path')

const filePath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\support\\page.tsx')
const content = `// @ts-nocheck
'use client'
import { useRef, useState } from 'react'

export default function SupportPage() {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const subjectRef = useRef(null)
  const messageRef = useRef(null)
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit() {
    const name = nameRef.current?.value?.trim()
    const email = emailRef.current?.value?.trim()
    const subject = subjectRef.current?.value?.trim()
    const message = messageRef.current?.value?.trim()
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
                  <input ref={nameRef} defaultValue="" placeholder="Randy" style={inputStyle}
                    onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
                </div>
                <div>
                  <label style={labelStyle}>Email *</label>
                  <input ref={emailRef} defaultValue="" type="email" placeholder="you@example.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Subject</label>
                <input ref={subjectRef} defaultValue="" placeholder="What do you need help with?" style={inputStyle}
                  onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
              </div>
              <div>
                <label style={labelStyle}>Message *</label>
                <textarea ref={messageRef} rows={5} placeholder="Describe your issue or question..."
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

        <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
          {[
            { icon:"\u{1F4E7}", title:"Email Support", desc:"support@traffikora.com", sub:"Response within 24 hours" },
            { icon:"\u{1F4AC}", title:"Live Chat", desc:"Chat with CYRA", sub:"Click the chat bubble bottom right" },
            { icon:"\u{1F4CB}", title:"Common Issues", desc:"Billing, connections, content", sub:"Most answers are in our FAQ" },
            { icon:"\u{1F6E0}", title:"Account Issues", desc:"Login, password, plan changes", sub:"We\u2019ll fix it fast \u2014 usually same day" },
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
}`

fs.writeFileSync(filePath, content, 'utf8')
console.log('Written:', filePath)