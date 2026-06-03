// @ts-nocheck
'use client'
import { useState } from "react"

export default function SupportPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    if (!name || !email || !message) return
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
  }

  return (
    <div style={{ minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"DM Sans, sans-serif" }}>
      <div style={{ background:"linear-gradient(135deg,#111 0%,#1a0e00 100%)", borderBottom:"1px solid #1e1e1e", padding:"32px 40px", marginBottom:"32px" }}>
        <div style={{ maxWidth:"860px", margin:"0 auto", display:"flex", alignItems:"center", gap:"14px" }}>
          <div style={{ width:"44px", height:"44px", background:"linear-gradient(135deg,#E8610A,#ff8c42)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>💬</div>
          <div>
            <h1 style={{ fontFamily:"Playfair Display, serif", fontSize:"26px", fontWeight:900, color:"#fff", margin:0 }}>Support</h1>
            <p style={{ color:"#666", fontSize:"13px", margin:0 }}>We’re here to help. Send us a message and we’ll get back to you fast.</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:"860px", margin:"0 auto", padding:"0 40px 60px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"24px" }}>

        {/* Contact Form */}
        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", padding:"28px" }}>
          <h2 style={{ fontFamily:"Playfair Display, serif", fontSize:"20px", fontWeight:700, color:"#fff", marginBottom:"20px" }}>Send a Message</h2>
          {sent ? (
            <div style={{ textAlign:"center", padding:"40px 0" }}>
              <div style={{ fontSize:48, marginBottom:16 }}>✅</div>
              <p style={{ fontFamily:"Playfair Display, serif", fontSize:20, color:"#fff", marginBottom:8 }}>Message sent!</p>
              <p style={{ color:"#888", fontSize:14 }}>We’ll get back to you within 24 hours.</p>
            </div>
          ) : (
            <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
              {[{label:"Your Name", val:name, set:setName, placeholder:"Randy"}, {label:"Email", val:email, set:setEmail, placeholder:"you@example.com"}].map(({label,val,set,placeholder}) => (
                <div key={label}>
                  <label style={{ display:"block", fontSize:"12px", fontWeight:700, color:"#aaa", marginBottom:"6px", textTransform:"uppercase", letterSpacing:"0.08em" }}>{label}</label>
                  <input value={val} onChange={e => set(e.target.value)} placeholder={placeholder}
                    style={{ width:"100%", background:"#0a0a0a", border:"1px solid #2a2a2a", borderRadius:"8px", padding:"11px 14px", fontSize:"14px", color:"#fff", outline:"none", fontFamily:"DM Sans, sans-serif", boxSizing:"border-box" }}
                    onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
                </div>
              ))}
              <div>
                <label style={{ display:"block", fontSize:"12px", fontWeight:700, color:"#aaa", marginBottom:"6px", textTransform:"uppercase", letterSpacing:"0.08em" }}>Message</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} rows={5} placeholder="How can we help you?"
                  style={{ width:"100%", background:"#0a0a0a", border:"1px solid #2a2a2a", borderRadius:"8px", padding:"11px 14px", fontSize:"14px", color:"#fff", outline:"none", fontFamily:"DM Sans, sans-serif", resize:"vertical", boxSizing:"border-box" }}
                  onFocus={e => e.target.style.borderColor="#E8610A"} onBlur={e => e.target.style.borderColor="#2a2a2a"} />
              </div>
              <button onClick={handleSubmit} disabled={loading}
                style={{ background:loading?"#2a2a2a":"linear-gradient(135deg,#E8610A,#C84E06)", color:loading?"#666":"#fff", border:"none", borderRadius:"8px", padding:"13px", fontSize:"14px", fontWeight:700, cursor:loading?"not-allowed":"pointer", fontFamily:"DM Sans, sans-serif", boxShadow:loading?"none":"0 4px 20px rgba(232,97,10,0.35)" }}>
                {loading ? "Sending..." : "Send Message →"}
              </button>
            </div>
          )}
        </div>

        {/* Help Links */}
        <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
          {[
            { icon:"📧", title:"Email Support", desc:"support@traffikora.com", sub:"Response within 24 hours" },
            { icon:"💬", title:"Live Chat", desc:"Chat with CYRA", sub:"Available in the bottom right corner" },
            { icon:"📚", title:"Documentation", desc:"docs.traffikora.com", sub:"Guides, tutorials, and FAQs" },
            { icon:"📹", title:"Video Tutorials", desc:"YouTube Channel", sub:"Step-by-step walkthroughs" },
          ].map((item, i) => (
            <div key={i} style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"12px", padding:"20px 24px", display:"flex", alignItems:"center", gap:"16px" }}>
              <div style={{ fontSize:28, flexShrink:0 }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight:700, color:"#fff", fontSize:15, marginBottom:2 }}>{item.title}</div>
                <div style={{ color:"#E8610A", fontSize:13, marginBottom:2 }}>{item.desc}</div>
                <div style={{ color:"#555", fontSize:12 }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}