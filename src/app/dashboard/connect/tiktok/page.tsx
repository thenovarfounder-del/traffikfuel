// @ts-nocheck
'use client'
export default function ConnectTiktok() {
  return (
    <div style={{ minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"DM Sans, sans-serif" }}>
      <div style={{ background:"linear-gradient(135deg,#111 0%,#1a0e00 100%)", borderBottom:"1px solid #1e1e1e", padding:"32px 40px", marginBottom:"40px", textAlign:"center" }}>
        <p style={{ fontSize:"12px", fontWeight:700, color:"#E8610A", textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"12px" }}>STEP 4 of 6 — ACCOUNT SETUP</p>
        <div style={{ fontSize:"48px", marginBottom:"16px" }}>🎵</div>
        <h1 style={{ fontFamily:"Playfair Display, serif", fontSize:"36px", fontWeight:900, color:"#fff", margin:"0 0 12px" }}>Connect TikTok</h1>
        <p style={{ color:"#888", fontSize:"16px", maxWidth:"500px", margin:"0 auto" }}>Publish videos and track TikTok performance automatically</p>
      </div>

      <div style={{ maxWidth:"600px", margin:"0 auto", padding:"0 40px 60px" }}>
        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", padding:"28px", marginBottom:"20px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"20px" }}>
            <div style={{ width:"10px", height:"10px", borderRadius:"50%", background:"#555" }}></div>
            <span style={{ color:"#888", fontSize:"14px" }}>Status: <strong style={{ color:"#fff" }}>Not connected</strong></span>
          </div>
          
          <div style={{ background:"rgba(232,97,10,0.08)", border:"1px solid rgba(232,97,10,0.2)", borderRadius:"10px", padding:"20px", marginBottom:"20px", textAlign:"center" }}>
            <div style={{ fontSize:32, marginBottom:12 }}>⏳</div>
            <p style={{ color:"#E8610A", fontWeight:700, fontSize:15, marginBottom:8 }}>Coming Soon</p>
            <p style={{ color:"#888", fontSize:13 }}>TikTok API application is pending approval. You will be notified when available.</p>
          </div>
          <button disabled style={{ width:"100%", background:"#2a2a2a", color:"#555", border:"none", borderRadius:"8px", padding:"14px", fontSize:"14px", fontWeight:700, cursor:"not-allowed", fontFamily:"DM Sans, sans-serif" }}>Connect TikTok — Coming Soon</button>
          
        </div>

        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", padding:"24px" }}>
          <p style={{ fontSize:"12px", fontWeight:700, color:"#E8610A", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"16px" }}>What Traffikora will access</p>
          
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>video.upload</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Post videos to your TikTok account automatically</p></div>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>video.list</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Read your TikTok video list and performance data</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}