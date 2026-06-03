const fs = require("fs");
const path = require("path");

const base = "C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard";

// Helper to write file
function write(filePath, content) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, content);
  console.log("DONE: " + filePath);
}

// SHARED STYLES
const darkPage = `minHeight:"100vh",background:"#0a0a0a",color:"#fff",fontFamily:"DM Sans, sans-serif"`;
const card = `background:"#111",border:"1px solid #1e1e1e",borderRadius:"14px",padding:"28px"`;
const orangeBtn = `background:"linear-gradient(135deg,#E8610A,#C84E06)",color:"#fff",border:"none",borderRadius:"8px",padding:"12px 28px",fontSize:"14px",fontWeight:700,cursor:"pointer",fontFamily:"DM Sans, sans-serif"`;
const header = (icon, title, sub) => `
      <div style={{ background:"linear-gradient(135deg,#111 0%,#1a0e00 100%)",borderBottom:"1px solid #1e1e1e",padding:"32px 40px",marginBottom:"32px" }}>
        <div style={{ maxWidth:"860px",margin:"0 auto",display:"flex",alignItems:"center",gap:"14px" }}>
          <div style={{ width:"44px",height:"44px",background:"linear-gradient(135deg,#E8610A,#ff8c42)",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px" }}>${icon}</div>
          <div>
            <h1 style={{ fontFamily:"Playfair Display, serif",fontSize:"26px",fontWeight:900,color:"#fff",margin:0 }}>${title}</h1>
            <p style={{ color:"#666",fontSize:"13px",margin:0,fontFamily:"DM Sans, sans-serif" }}>${sub}</p>
          </div>
        </div>
      </div>`;

// ============================================================
// 1. SUPPORT PAGE
// ============================================================
write(base + "\\support\\page.tsx", `// @ts-nocheck
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
          <div style={{ width:"44px", height:"44px", background:"linear-gradient(135deg,#E8610A,#ff8c42)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>\u{1F4AC}</div>
          <div>
            <h1 style={{ fontFamily:"Playfair Display, serif", fontSize:"26px", fontWeight:900, color:"#fff", margin:0 }}>Support</h1>
            <p style={{ color:"#666", fontSize:"13px", margin:0 }}>We\u2019re here to help. Send us a message and we\u2019ll get back to you fast.</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth:"860px", margin:"0 auto", padding:"0 40px 60px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"24px" }}>

        {/* Contact Form */}
        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", padding:"28px" }}>
          <h2 style={{ fontFamily:"Playfair Display, serif", fontSize:"20px", fontWeight:700, color:"#fff", marginBottom:"20px" }}>Send a Message</h2>
          {sent ? (
            <div style={{ textAlign:"center", padding:"40px 0" }}>
              <div style={{ fontSize:48, marginBottom:16 }}>\u2705</div>
              <p style={{ fontFamily:"Playfair Display, serif", fontSize:20, color:"#fff", marginBottom:8 }}>Message sent!</p>
              <p style={{ color:"#888", fontSize:14 }}>We\u2019ll get back to you within 24 hours.</p>
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
                {loading ? "Sending..." : "Send Message \u2192"}
              </button>
            </div>
          )}
        </div>

        {/* Help Links */}
        <div style={{ display:"flex", flexDirection:"column", gap:"16px" }}>
          {[
            { icon:"\u{1F4E7}", title:"Email Support", desc:"support@traffikora.com", sub:"Response within 24 hours" },
            { icon:"\u{1F4AC}", title:"Live Chat", desc:"Chat with CYRA", sub:"Available in the bottom right corner" },
            { icon:"\u{1F4DA}", title:"Documentation", desc:"docs.traffikora.com", sub:"Guides, tutorials, and FAQs" },
            { icon:"\u{1F4F9}", title:"Video Tutorials", desc:"YouTube Channel", sub:"Step-by-step walkthroughs" },
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
}`);

// ============================================================
// 2. SOCIAL MEDIA PAGE - dark theme upgrade
// ============================================================
write(base + "\\social\\page.tsx", `// @ts-nocheck
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
          <div style={{ width:"44px", height:"44px", background:"linear-gradient(135deg,#E8610A,#ff8c42)", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px" }}>\u{1F4F1}</div>
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
            {loading ? 'Generating posts for all platforms...' : '\u26A1 Generate Social Posts'}
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
                <div style={{ fontSize:36, marginBottom:12 }}>\u{1F512}</div>
                <h3 style={{ fontFamily:"Playfair Display, serif", fontSize:20, color:"#fff", marginBottom:8 }}>Unlock Unlimited Social Posts</h3>
                <p style={{ color:"#888", fontSize:13, marginBottom:20 }}>Upgrade to Starter to generate unlimited posts and schedule them across all platforms.</p>
                <a href="/pricing" style={{ background:"linear-gradient(135deg,#E8610A,#C84E06)", color:"#fff", padding:"12px 32px", borderRadius:8, fontWeight:700, fontSize:14, textDecoration:"none" }}>Upgrade to Starter \u2014 $47/month</a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}`);

// ============================================================
// CONNECT PAGES - dark theme for all 6
// ============================================================
const connectPages = [
  { folder: "google", icon: "\u{1F537}", title: "Connect Google", sub: "Connect Google Business Profile to display stats and reviews", step: "1 of 6", coming: false, note: "Connects your Google Business Profile for review management and analytics." },
  { folder: "facebook", icon: "\u{1F4D8}", title: "Connect Facebook", sub: "Connect your Facebook Page for reach and engagement data", step: "2 of 6", coming: false },
  { folder: "instagram", icon: "\u{1F4F8}", title: "Connect Instagram", sub: "Connect Instagram Business for follower and engagement insights", step: "3 of 6", coming: false },
  { folder: "tiktok", icon: "\u{1F3B5}", title: "Connect TikTok", sub: "Publish videos and track TikTok performance automatically", step: "4 of 6", coming: true, comingNote: "TikTok API application is pending approval. You will be notified when available." },
  { folder: "twitter", icon: "\u{1F426}", title: "Connect X / Twitter", sub: "Auto-publish tweets and track engagement", step: "5 of 6", coming: true, comingNote: "X API application is pending approval. You will be notified when available." },
  { folder: "linkedin", icon: "\u{1F4BC}", title: "Connect LinkedIn", sub: "Publish content to your LinkedIn company page", step: "6 of 6", coming: true, comingNote: "LinkedIn connection available once your company page is established." },
];

connectPages.forEach(({ folder, icon, title, sub, step, coming, comingNote }) => {
  write(base + "\\connect\\" + folder + "\\page.tsx", `// @ts-nocheck
'use client'
export default function Connect${folder.charAt(0).toUpperCase() + folder.slice(1)}() {
  return (
    <div style={{ minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"DM Sans, sans-serif" }}>
      <div style={{ background:"linear-gradient(135deg,#111 0%,#1a0e00 100%)", borderBottom:"1px solid #1e1e1e", padding:"32px 40px", marginBottom:"40px", textAlign:"center" }}>
        <p style={{ fontSize:"12px", fontWeight:700, color:"#E8610A", textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"12px" }}>STEP ${step} \u2014 ACCOUNT SETUP</p>
        <div style={{ fontSize:"48px", marginBottom:"16px" }}>${icon}</div>
        <h1 style={{ fontFamily:"Playfair Display, serif", fontSize:"36px", fontWeight:900, color:"#fff", margin:"0 0 12px" }}>${title}</h1>
        <p style={{ color:"#888", fontSize:"16px", maxWidth:"500px", margin:"0 auto" }}>${sub}</p>
      </div>

      <div style={{ maxWidth:"600px", margin:"0 auto", padding:"0 40px 60px" }}>
        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", padding:"28px", marginBottom:"20px" }}>
          <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"20px" }}>
            <div style={{ width:"10px", height:"10px", borderRadius:"50%", background:"#555" }}></div>
            <span style={{ color:"#888", fontSize:"14px" }}>Status: <strong style={{ color:"#fff" }}>Not connected</strong></span>
          </div>
          ${coming ? `
          <div style={{ background:"rgba(232,97,10,0.08)", border:"1px solid rgba(232,97,10,0.2)", borderRadius:"10px", padding:"20px", marginBottom:"20px", textAlign:"center" }}>
            <div style={{ fontSize:32, marginBottom:12 }}>\u23F3</div>
            <p style={{ color:"#E8610A", fontWeight:700, fontSize:15, marginBottom:8 }}>Coming Soon</p>
            <p style={{ color:"#888", fontSize:13 }}>${comingNote}</p>
          </div>
          <button disabled style={{ width:"100%", background:"#2a2a2a", color:"#555", border:"none", borderRadius:"8px", padding:"14px", fontSize:"14px", fontWeight:700, cursor:"not-allowed", fontFamily:"DM Sans, sans-serif" }}>Connect ${title.replace("Connect ","")} \u2014 Coming Soon</button>
          ` : `
          <button style={{ width:"100%", background:"linear-gradient(135deg,#E8610A,#C84E06)", color:"#fff", border:"none", borderRadius:"8px", padding:"14px", fontSize:"14px", fontWeight:700, cursor:"pointer", fontFamily:"DM Sans, sans-serif", boxShadow:"0 4px 20px rgba(232,97,10,0.35)" }}>Connect ${title.replace("Connect ","")} Account</button>
          `}
        </div>

        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", padding:"24px" }}>
          <p style={{ fontSize:"12px", fontWeight:700, color:"#E8610A", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"16px" }}>What Traffikora will access</p>
          ${folder === "google" ? `
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>business.manage</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Read your business name, location, rating, review count, and profile stats</p></div>
          </div>` : folder === "facebook" ? `
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>pages_read_engagement</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Read engagement data from your Facebook Page</p></div>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>pages_show_list</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Show the list of Pages so you can select which to connect</p></div>
          </div>` : folder === "instagram" ? `
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>instagram_basic</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Read basic profile info and media from your Instagram Business account</p></div>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>instagram_manage_insights</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Read follower count, post reach, and engagement rate</p></div>
          </div>` : folder === "tiktok" ? `
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>video.upload</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Post videos to your TikTok account automatically</p></div>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>video.list</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Read your TikTok video list and performance data</p></div>
          </div>` : folder === "twitter" ? `
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>tweet.read</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Read your tweets and engagement data</p></div>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>tweet.write</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Post tweets on your behalf automatically</p></div>
          </div>` : `
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>w_member_social</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Post content to LinkedIn on your behalf</p></div>
            <div style={{ borderLeft:"3px solid #E8610A", paddingLeft:"14px" }}><p style={{ color:"#fff", fontSize:"14px", fontWeight:600, margin:"0 0 2px" }}>r_organization_social</p><p style={{ color:"#666", fontSize:"12px", margin:0 }}>Read your LinkedIn company page data and analytics</p></div>
          </div>`}
        </div>
      </div>
    </div>
  )
}`);
});

console.log("\n\u2705 ALL PAGES REBUILT WITH DARK THEME!");
console.log("Pages updated: Support, Social Media, Google, Facebook, Instagram, TikTok, Twitter, LinkedIn");