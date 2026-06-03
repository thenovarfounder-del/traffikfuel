const fs = require("fs");
const path = require("path");

const dir = path.join("C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\llm-engine");

const content = `// @ts-nocheck
'use client'

import { useEffect, useState, useRef } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function LLMEngine() {
  const [user, setUser] = useState(null)
  const [status, setStatus] = useState("free")
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [question, setQuestion] = useState("")
  const [chatHistory, setChatHistory] = useState([])
  const [aiLoading, setAiLoading] = useState(false)
  const chatEndRef = useRef(null)

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setLoading(false); return }
      setUser(user)
      const { data: userData } = await supabase
        .from("users")
        .select("status")
        .eq("id", user.id)
        .single()
      if (userData?.status) setStatus(userData.status)
      const { data: bp } = await supabase
        .from("business_profiles")
        .select("*")
        .eq("user_id", user.id)
        .single()
      if (bp) setProfile(bp)
      setLoading(false)
    }
    load()
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatHistory])

  const isPro = status && status !== "free"

  async function askAI() {
    if (!question.trim() || aiLoading) return
    const userMsg = question.trim()
    setQuestion("")
    setChatHistory(prev => [...prev, { role: "user", content: userMsg }])
    setAiLoading(true)
    try {
      const systemPrompt = \`You are the custom AI model for \${profile?.business_name || "this business"}, a \${profile?.industry || "local"} business located in \${profile?.city || ""}, \${profile?.state || ""}. 
Their website is \${profile?.website || "not provided"}. 
Business description: \${profile?.description || "A great local business serving the community."}.
You know everything about this business and speak in their brand voice. You help generate content, answer questions about the business, and provide marketing advice tailored specifically to them.
Always be helpful, specific to their business, and actionable.\`
      const response = await fetch("/api/llm-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemPrompt,
          messages: [
            ...chatHistory.map(m => ({ role: m.role, content: m.content })),
            { role: "user", content: userMsg }
          ]
        })
      })
      const data = await response.json()
      const reply = data.success ? data.reply : "I couldn\u2019t generate a response. Please try again."
      setChatHistory(prev => [...prev, { role: "assistant", content: reply }])
    } catch (e) {
      setChatHistory(prev => [...prev, { role: "assistant", content: "Connection error. Please try again." }])
    }
    setAiLoading(false)
  }

  if (loading) return (
    <div style={{ minHeight: "100vh", background: "#111111", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ color: "#E8610A", fontSize: 18, fontFamily: "DM Sans, sans-serif" }}>Loading LLM Engine...</div>
    </div>
  )

  const trainingSources = [
    { source: "Business Profile", status: profile?.business_name ? "Trained" : "Pending", color: profile?.business_name ? "#22c55e" : "#888", detail: profile?.business_name ? "Name, industry, location loaded" : "Complete your business profile" },
    { source: "Description & Voice", status: profile?.description ? "Trained" : "Pending", color: profile?.description ? "#22c55e" : "#888", detail: profile?.description ? "Brand voice captured" : "Add a business description" },
    { source: "Location Data", status: profile?.city ? "Trained" : "Pending", color: profile?.city ? "#22c55e" : "#888", detail: profile?.city ? profile.city + ", " + profile.state : "Add your city and state" },
    { source: "Website", status: profile?.website ? "Trained" : "Pending", color: profile?.website ? "#22c55e" : "#888", detail: profile?.website || "Add your website URL" },
    { source: "Contact Info", status: profile?.phone ? "Trained" : "Pending", color: profile?.phone ? "#22c55e" : "#888", detail: profile?.phone ? "Phone and email loaded" : "Add contact details" },
    { source: "Industry Profile", status: profile?.industry ? "Trained" : "Pending", color: profile?.industry ? "#22c55e" : "#888", detail: profile?.industry || "Add your industry" },
  ]

  const trainedCount = trainingSources.filter(s => s.status === "Trained").length
  const accuracyPct = Math.round((trainedCount / trainingSources.length) * 100)

  return (
    <div style={{ minHeight: "100vh", background: "#111111", padding: "40px 32px", fontFamily: "DM Sans, sans-serif" }}>

      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, #E8610A, #C84E06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
            \u{1F9E0}
          </div>
          <div>
            <h1 style={{ color: "#ffffff", fontSize: 28, fontWeight: 700, margin: 0, fontFamily: "Playfair Display, serif" }}>LLM Engine</h1>
            <p style={{ color: "#888", fontSize: 14, margin: 0 }}>
              {isPro ? (profile?.business_name ? "Custom AI trained on " + profile.business_name : "Your custom AI model") : "Your business\u2019s own custom AI model"}
            </p>
          </div>
          {!isPro && (
            <div style={{ marginLeft: "auto", background: "linear-gradient(135deg, #E8610A, #C84E06)", borderRadius: 20, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: 1 }}>
              PRO FEATURE
            </div>
          )}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32, filter: isPro ? "none" : "blur(4px)", pointerEvents: isPro ? "auto" : "none" }}>
        {[
          { label: "Training Sources", value: trainedCount + "/6", icon: "\u{1F4C4}" },
          { label: "Model Accuracy", value: accuracyPct + "%", icon: "\u{1F3AF}" },
          { label: "Business", value: profile?.business_name ? profile.business_name.split(" ")[0] : "\u2014", icon: "\u{1F3E2}" },
          { label: "Industry", value: profile?.industry || "\u2014", icon: "\u{1F4CA}" },
        ].map((stat, i) => (
          <div key={i} style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 12, padding: "20px 24px" }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{stat.icon}</div>
            <div style={{ color: "#E8610A", fontSize: 22, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{stat.value}</div>
            <div style={{ color: "#888", fontSize: 13 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div style={{ position: "relative" }}>
        <div style={{ filter: isPro ? "none" : "blur(6px)", pointerEvents: isPro ? "auto" : "none" }}>

          <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 16, padding: 28, marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: 0, fontFamily: "Playfair Display, serif" }}>\u{1F9EC} Training Data Sources</h2>
              <div style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 8, padding: "6px 14px", fontSize: 13, color: "#E8610A", fontWeight: 700 }}>{trainedCount}/6 Sources Active</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {trainingSources.map((item, i) => (
                <div key={i} style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                    <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>{item.source}</div>
                    <div style={{ color: item.color, fontSize: 11, fontWeight: 700, background: item.color + "22", borderRadius: 20, padding: "3px 10px" }}>{item.status}</div>
                  </div>
                  <div style={{ color: "#666", fontSize: 12 }}>{item.detail}</div>
                </div>
              ))}
            </div>
            {trainedCount < 6 && (
              <div style={{ marginTop: 16, background: "#1a1a1a", border: "1px solid #E8610A33", borderRadius: 10, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 18 }}>\u26A1</span>
                <span style={{ color: "#ccc", fontSize: 13 }}>Complete your <a href="/dashboard/business" style={{ color: "#E8610A", textDecoration: "none", fontWeight: 700 }}>Business Profile</a> to improve your AI model accuracy.</span>
              </div>
            )}
          </div>

          <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 16, padding: 28, marginBottom: 24 }}>
            <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 4, fontFamily: "Playfair Display, serif" }}>\u26A1 Live AI Console</h2>
            <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>Ask your custom AI anything about your business. It knows your brand, location, and industry.</p>
            <div style={{ background: "#111", border: "1px solid #222", borderRadius: 10, padding: 20, minHeight: 200, maxHeight: 400, overflowY: "auto", marginBottom: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              {chatHistory.length === 0 && (
                <div style={{ color: "#555", fontSize: 14, textAlign: "center", marginTop: 60 }}>Ask your AI anything\u2026 try \u201CWrite me a Facebook post about our services\u201D</div>
              )}
              {chatHistory.map((msg, i) => (
                <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start" }}>
                  <div style={{ maxWidth: "80%", background: msg.role === "user" ? "linear-gradient(135deg, #E8610A, #C84E06)" : "#1a1a1a", border: msg.role === "assistant" ? "1px solid #2a2a2a" : "none", borderRadius: msg.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px", padding: "12px 16px", color: "#fff", fontSize: 14, lineHeight: 1.6 }}>
                    {msg.role === "assistant" && <div style={{ color: "#E8610A", fontSize: 11, fontWeight: 700, marginBottom: 6, letterSpacing: 1 }}>YOUR AI \u2192</div>}
                    {msg.content}
                  </div>
                </div>
              ))}
              {aiLoading && (
                <div style={{ display: "flex", justifyContent: "flex-start" }}>
                  <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "16px 16px 16px 4px", padding: "12px 20px", color: "#E8610A", fontSize: 14 }}>Thinking\u2026</div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <input value={question} onChange={e => setQuestion(e.target.value)} onKeyDown={e => e.key === "Enter" && askAI()} placeholder="Ask your AI anything about your business..." style={{ flex: 1, background: "#111", border: "1px solid #333", borderRadius: 8, padding: "13px 16px", color: "#fff", fontSize: 14, outline: "none", fontFamily: "DM Sans, sans-serif" }} />
              <button onClick={askAI} disabled={aiLoading || !question.trim()} style={{ background: aiLoading ? "#333" : "linear-gradient(135deg, #E8610A, #C84E06)", border: "none", borderRadius: 8, padding: "13px 28px", color: "#fff", fontWeight: 700, fontSize: 14, cursor: aiLoading ? "not-allowed" : "pointer", fontFamily: "DM Sans, sans-serif", whiteSpace: "nowrap" }}>
                {aiLoading ? "..." : "Ask AI"}
              </button>
            </div>
            <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
              {["Write a Facebook post about my services", "Give me 5 blog topic ideas", "Write a Google review response", "What makes my business unique?"].map((prompt, i) => (
                <button key={i} onClick={() => setQuestion(prompt)} style={{ background: "#111", border: "1px solid #333", borderRadius: 20, padding: "6px 14px", color: "#888", fontSize: 12, cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>{prompt}</button>
              ))}
            </div>
          </div>

          <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 20, fontFamily: "Playfair Display, serif" }}>\u{1F4CA} Model Readiness</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                { label: "Brand Voice Match", pct: accuracyPct },
                { label: "Local SEO Targeting", pct: profile?.city ? 90 : 40 },
                { label: "Content Personalization", pct: profile?.description ? 88 : 30 },
              ].map((item, i) => (
                <div key={i} style={{ background: "#111", borderRadius: 10, padding: "20px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ color: "#ccc", fontSize: 13 }}>{item.label}</span>
                    <span style={{ color: "#E8610A", fontWeight: 700 }}>{item.pct}%</span>
                  </div>
                  <div style={{ background: "#222", borderRadius: 99, height: 6 }}>
                    <div style={{ width: item.pct + "%", height: 6, borderRadius: 99, background: "linear-gradient(90deg, #E8610A, #C84E06)", transition: "width 1s ease" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {!isPro && (
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(17,17,17,0.75)", borderRadius: 16, zIndex: 10 }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>\u{1F512}</div>
            <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 700, margin: "0 0 12px", fontFamily: "Playfair Display, serif", textAlign: "center" }}>Your Business Deserves Its Own AI</h2>
            <p style={{ color: "#aaa", fontSize: 16, marginBottom: 32, textAlign: "center", maxWidth: 480, lineHeight: 1.6 }}>The LLM Engine trains a custom AI model on your business data. Every blog, every post, every reply \u2014 sounds exactly like you. No other tool does this.</p>
            <a href="/pricing" style={{ background: "linear-gradient(135deg, #E8610A, #C84E06)", color: "#fff", padding: "16px 40px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 4px 24px rgba(232,97,10,0.4)" }}>Upgrade to Pro \u2014 $97/month</a>
            <p style={{ color: "#555", fontSize: 13, marginTop: 16 }}>Cancel anytime. Instant access.</p>
          </div>
        )}
      </div>
    </div>
  )
}
`;

fs.writeFileSync(path.join(dir, "page.tsx"), content);
console.log("SUCCESS - LLM Engine updated to use API route!");