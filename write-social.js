const fs = require('fs')

const content = `// @ts-nocheck
'use client'
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function BlogPage() {
  const [userId, setUserId] = useState("")
  const [businessId, setBusinessId] = useState("")
  const [topic, setTopic] = useState("")
  const [generating, setGenerating] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [post, setPost] = useState(null)
  const [message, setMessage] = useState("")
  const [wpMessage, setWpMessage] = useState("")
  const [businessName, setBusinessName] = useState("")
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUserId(user.id)
      const { data } = await supabase
        .from("business_profiles")
        .select("id, business_name")
        .eq("user_id", user.id)
        .single()
      if (data) {
        setBusinessId(data.id)
        setBusinessName(data.business_name || "")
      }
    }
    load()
  }, [])

  const generate = async () => {
    if (!topic.trim()) return
    setGenerating(true)
    setMessage("")
    setPost(null)
    setWpMessage("")
    try {
      const res = await fetch("/api/content/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, businessId, topic })
      })
      const data = await res.json()
      if (data.error) { setMessage(data.error) }
      else { setPost(data) }
    } catch (e) {
      setMessage("Something went wrong. Try again.")
    }
    setGenerating(false)
  }

  const publishToWordPress = async () => {
    if (!post) return
    setPublishing(true)
    setWpMessage("")
    try {
      const res = await fetch("/api/content/wordpress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: post.id, userId })
      })
      const data = await res.json()
      if (data.error) { setWpMessage("Error: " + data.error) }
      else { setWpMessage("Published! View post: " + data.wpPostUrl) }
    } catch (e) {
      setWpMessage("Something went wrong. Try again.")
    }
    setPublishing(false)
  }

  const handleTopicChange = (e) => {
    setTopic(e.target.value)
    setCharCount(e.target.value.length)
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", padding: "0" }}>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #111 0%, #1a0e00 100%)", borderBottom: "1px solid #1e1e1e", padding: "32px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <div style={{ width: "36px", height: "36px", background: "linear-gradient(135deg,#E8610A,#ff8c42)", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>\u270f\ufe0f</div>
            <div>
              <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "26px", fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.1 }}>Blog Generator</h1>
              <p style={{ color: "#666", fontSize: "13px", margin: 0, fontFamily: "DM Sans, sans-serif" }}>Powered by your Business Brain \u2014 AI that knows your business</p>
            </div>
          </div>
          {businessName && (
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "rgba(232,97,10,0.1)", border: "1px solid rgba(232,97,10,0.3)", borderRadius: "20px", padding: "4px 14px", marginTop: "12px" }}>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#E8610A" }}></div>
              <span style={{ fontSize: "12px", color: "#E8610A", fontFamily: "DM Sans, sans-serif", fontWeight: 600 }}>{businessName}</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "32px 40px" }}>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "28px" }}>
          {[
            { label: "SEO Optimized", value: "100%", icon: "\ud83d\udcc8" },
            { label: "Avg Word Count", value: "900+", icon: "\ud83d\udcdd" },
            { label: "AI Platforms", value: "6+", icon: "\ud83e\udd16" },
          ].map((stat) => (
            <div key={stat.label} style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: "10px", padding: "16px 20px", display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "20px" }}>{stat.icon}</span>
              <div>
                <div style={{ fontFamily: "Playfair Display, serif", fontSize: "20px", fontWeight: 700, color: "#E8610A", lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: "11px", color: "#555", fontFamily: "DM Sans, sans-serif", marginTop: "2px" }}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Input card */}
        <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: "14px", padding: "28px", marginBottom: "24px" }}>
          <label style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#aaa", marginBottom: "10px", fontFamily: "DM Sans, sans-serif", letterSpacing: "0.08em", textTransform: "uppercase" }}>Blog Topic</label>
          <div style={{ position: "relative" }}>
            <textarea
              rows={3}
              placeholder="e.g. 5 reasons local businesses need AI marketing in 2026..."
              value={topic}
              onChange={handleTopicChange}
              style={{ width: "100%", background: "#0a0a0a", border: "1px solid #2a2a2a", borderRadius: "10px", padding: "14px 16px", fontSize: "15px", color: "#fff", resize: "vertical", boxSizing: "border-box", fontFamily: "DM Sans, sans-serif", outline: "none", lineHeight: 1.6, transition: "border-color 0.2s" }}
              onFocus={e => e.target.style.borderColor = "#E8610A"}
              onBlur={e => e.target.style.borderColor = "#2a2a2a"}
            />
            <div style={{ position: "absolute", bottom: "10px", right: "14px", fontSize: "11px", color: "#444" }}>{charCount} chars</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "16px", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["AI Marketing Tips", "Local SEO Guide", "Why Choose Us", "Customer Success"].map(s => (
                <button key={s} onClick={() => { setTopic(s); setCharCount(s.length) }} style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "20px", padding: "5px 12px", fontSize: "11px", color: "#888", cursor: "pointer", fontFamily: "DM Sans, sans-serif", transition: "all 0.15s" }}
                  onMouseEnter={e => { e.target.style.borderColor = "#E8610A"; e.target.style.color = "#E8610A" }}
                  onMouseLeave={e => { e.target.style.borderColor = "#2a2a2a"; e.target.style.color = "#888" }}
                >{s}</button>
              ))}
            </div>
            <button
              onClick={generate}
              disabled={generating || !topic.trim()}
              style={{ background: generating ? "#2a2a2a" : "linear-gradient(135deg,#E8610A,#ff8c42)", color: generating ? "#666" : "#fff", padding: "12px 28px", borderRadius: "8px", fontSize: "14px", fontWeight: 700, border: "none", cursor: generating ? "not-allowed" : "pointer", fontFamily: "DM Sans, sans-serif", display: "flex", alignItems: "center", gap: "8px", transition: "all 0.2s", boxShadow: generating ? "none" : "0 4px 20px rgba(232,97,10,0.35)" }}
            >
              {generating ? (
                <>\u23f3 Generating...</>
              ) : (
                <>\u26a1 Generate Blog Post</>
              )}
            </button>
          </div>
          {message && (
            <div style={{ marginTop: "14px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "8px", padding: "10px 14px", fontSize: "13px", color: "#f87171", fontFamily: "DM Sans, sans-serif" }}>{message}</div>
          )}
        </div>

        {/* Generating state */}
        {generating && (
          <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: "14px", padding: "40px", textAlign: "center", marginBottom: "24px" }}>
            <div style={{ fontSize: "36px", marginBottom: "16px" }}>\u270f\ufe0f</div>
            <p style={{ fontFamily: "Playfair Display, serif", fontSize: "20px", color: "#fff", marginBottom: "8px" }}>Writing your blog post...</p>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", color: "#555" }}>Your Business Brain is crafting SEO-optimized content tailored to your business.</p>
            <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "20px" }}>
              {[0,1,2].map(i => (
                <div key={i} style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#E8610A", opacity: 0.7 }} />
              ))}
            </div>
          </div>
        )}

        {/* Result card */}
        {post && (
          <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: "14px", overflow: "hidden", marginBottom: "24px" }}>

            {/* Result header */}
            <div style={{ background: "linear-gradient(135deg,#1a0e00,#111)", borderBottom: "1px solid #1e1e1e", padding: "20px 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }}></div>
                <span style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", color: "#22c55e", fontWeight: 600 }}>Blog post ready</span>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={publishToWordPress}
                  disabled={publishing}
                  style={{ background: publishing ? "#1a1a1a" : "linear-gradient(135deg,#16a34a,#15803d)", color: publishing ? "#555" : "#fff", padding: "9px 20px", borderRadius: "7px", fontSize: "13px", fontWeight: 700, border: "none", cursor: publishing ? "not-allowed" : "pointer", fontFamily: "DM Sans, sans-serif", display: "flex", alignItems: "center", gap: "6px" }}
                >
                  {publishing ? "\u23f3 Publishing..." : "\ud83c\udf10 Publish to WordPress"}
                </button>
              </div>
            </div>

            {/* Post title */}
            <div style={{ padding: "24px 28px 0" }}>
              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "22px", fontWeight: 900, color: "#fff", margin: "0 0 16px", lineHeight: 1.3 }}>{post.title}</h2>
              <div style={{ height: "1px", background: "linear-gradient(90deg,#E8610A,transparent)", marginBottom: "20px" }}></div>
            </div>

            {/* Post content */}
            <div style={{ padding: "0 28px 28px" }}>
              <div style={{ background: "#0a0a0a", border: "1px solid #1e1e1e", borderRadius: "10px", padding: "20px", maxHeight: "400px", overflowY: "auto" }}>
                <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "14px", color: "#ccc", lineHeight: 1.85, whiteSpace: "pre-wrap", margin: 0 }}>{post.content}</p>
              </div>
            </div>

            {wpMessage && (
              <div style={{ margin: "0 28px 24px", background: wpMessage.startsWith("Error") ? "rgba(239,68,68,0.08)" : "rgba(34,197,94,0.08)", border: \`1px solid \${wpMessage.startsWith("Error") ? "rgba(239,68,68,0.2)" : "rgba(34,197,94,0.2)"}\`, borderRadius: "8px", padding: "12px 16px", fontSize: "13px", color: wpMessage.startsWith("Error") ? "#f87171" : "#4ade80", fontFamily: "DM Sans, sans-serif" }}>
                {wpMessage}
              </div>
            )}
          </div>
        )}

        {/* Tips */}
        {!post && !generating && (
          <div style={{ background: "#111", border: "1px solid #1e1e1e", borderRadius: "14px", padding: "24px 28px" }}>
            <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "12px", fontWeight: 700, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>Pro Tips</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { icon: "\ud83c\udfaf", tip: "Be specific with your topic for better SEO targeting" },
                { icon: "\ud83d\udcc8", tip: "Include your city or region for local SEO boost" },
                { icon: "\ud83e\udd16", tip: "Your Brain auto-injects your business context" },
                { icon: "\ud83c\udf10", tip: "Publish directly to WordPress with one click" },
              ].map(({ icon, tip }) => (
                <div key={tip} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "16px", flexShrink: 0 }}>{icon}</span>
                  <p style={{ fontFamily: "DM Sans, sans-serif", fontSize: "13px", color: "#555", margin: 0, lineHeight: 1.6 }}>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
`

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\content\\blog\\page.tsx', content)
console.log('SUCCESS - Blog page redesigned with dark theme')