// @ts-nocheck
'use client'

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function LLMEngine() {
  const [user, setUser] = useState(null)
  const [plan, setPlan] = useState("free")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setLoading(false); return }
      setUser(user)
      const { data: profile } = await supabase
        .from("profiles")
        .select("plan")
        .eq("id", user.id)
        .single()
      if (profile?.plan) setPlan(profile.plan)
      setLoading(false)
    }
    load()
  }, [])

  const isPro = plan === "pro" || plan === "agency" || plan === "enterprise"

  if (loading) return (
    <div style={{ minHeight: "100vh", background: "#111111", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ color: "#E8610A", fontSize: 18, fontFamily: "DM Sans, sans-serif" }}>Loading LLM Engine...</div>
    </div>
  )

  return (
    <div style={{ minHeight: "100vh", background: "#111111", padding: "40px 32px", fontFamily: "DM Sans, sans-serif" }}>

      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, #E8610A, #C84E06)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>
            🧠
          </div>
          <div>
            <h1 style={{ color: "#ffffff", fontSize: 28, fontWeight: 700, margin: 0, fontFamily: "Playfair Display, serif" }}>
              LLM Engine
            </h1>
            <p style={{ color: "#888", fontSize: 14, margin: 0 }}>Your business’s own custom AI model</p>
          </div>
          {!isPro && (
            <div style={{ marginLeft: "auto", background: "linear-gradient(135deg, #E8610A, #C84E06)", borderRadius: 20, padding: "6px 16px", fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: 1 }}>
              PRO FEATURE
            </div>
          )}
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 32, filter: isPro ? "none" : "blur(4px)", pointerEvents: isPro ? "auto" : "none" }}>
        {[
          { label: "Training Documents", value: "247", icon: "📄" },
          { label: "Model Accuracy", value: "94.7%", icon: "🎯" },
          { label: "Tokens Trained", value: "1.2M", icon: "⚡" },
          { label: "Last Updated", value: "Today", icon: "🔄" },
        ].map((stat, i) => (
          <div key={i} style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 12, padding: "20px 24px" }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{stat.icon}</div>
            <div style={{ color: "#E8610A", fontSize: 24, fontWeight: 700 }}>{stat.value}</div>
            <div style={{ color: "#888", fontSize: 13 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ position: "relative" }}>

        {/* Blurred Preview for free users */}
        <div style={{ filter: isPro ? "none" : "blur(6px)", pointerEvents: isPro ? "auto" : "none" }}>

          {/* Training Data Panel */}
          <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 16, padding: 28, marginBottom: 24 }}>
            <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 20, fontFamily: "Playfair Display, serif" }}>
              🧬 Training Data Sources
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { source: "Business Profile", docs: 12, status: "Trained", color: "#22c55e" },
                { source: "Blog Content", docs: 48, status: "Trained", color: "#22c55e" },
                { source: "Social Posts", docs: 187, status: "Trained", color: "#22c55e" },
                { source: "Reviews & Replies", docs: 94, status: "Processing", color: "#E8610A" },
                { source: "Website Copy", docs: 31, status: "Trained", color: "#22c55e" },
                { source: "Custom Knowledge", docs: 8, status: "Pending", color: "#888" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#111", border: "1px solid #2a2a2a", borderRadius: 10, padding: "16px 18px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>{item.source}</div>
                    <div style={{ color: "#666", fontSize: 12 }}>{item.docs} documents</div>
                  </div>
                  <div style={{ color: item.color, fontSize: 11, fontWeight: 700, background: item.color + "22", borderRadius: 20, padding: "4px 10px" }}>{item.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Test Console */}
          <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 16, padding: 28, marginBottom: 24 }}>
            <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 8, fontFamily: "Playfair Display, serif" }}>
              ⚡ Live AI Console
            </h2>
            <p style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>Test your custom AI model in real time</p>
            <div style={{ background: "#111", border: "1px solid #333", borderRadius: 10, padding: 20, marginBottom: 16, minHeight: 120 }}>
              <div style={{ color: "#E8610A", fontSize: 12, fontWeight: 700, marginBottom: 12 }}>YOUR AI →</div>
              <div style={{ color: "#ccc", fontSize: 14, lineHeight: 1.7 }}>
                Based on your business data, I can generate hyper-personalized content that sounds exactly like your brand voice. I know your services, your location, your customers, and your unique value proposition. Every piece of content I create is trained specifically on your business’s DNA...
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ flex: 1, background: "#111", border: "1px solid #333", borderRadius: 8, padding: "12px 16px", color: "#555", fontSize: 14 }}>
                Ask your AI anything about your business...
              </div>
              <div style={{ background: "linear-gradient(135deg, #E8610A, #C84E06)", borderRadius: 8, padding: "12px 24px", color: "#fff", fontWeight: 700, fontSize: 14 }}>
                Send
              </div>
            </div>
          </div>

          {/* Model Performance */}
          <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 16, padding: 28 }}>
            <h2 style={{ color: "#fff", fontSize: 18, fontWeight: 700, marginBottom: 20, fontFamily: "Playfair Display, serif" }}>
              📊 Model Performance
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                { label: "Brand Voice Match", pct: 94 },
                { label: "SEO Optimization", pct: 88 },
                { label: "Engagement Score", pct: 91 },
              ].map((item, i) => (
                <div key={i} style={{ background: "#111", borderRadius: 10, padding: "20px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                    <span style={{ color: "#ccc", fontSize: 13 }}>{item.label}</span>
                    <span style={{ color: "#E8610A", fontWeight: 700 }}>{item.pct}%</span>
                  </div>
                  <div style={{ background: "#222", borderRadius: 99, height: 6 }}>
                    <div style={{ width: item.pct + "%", height: 6, borderRadius: 99, background: "linear-gradient(90deg, #E8610A, #C84E06)" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Lock Overlay for free users */}
        {!isPro && (
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(17,17,17,0.7)", borderRadius: 16, zIndex: 10 }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>🔒</div>
            <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 700, margin: "0 0 12px", fontFamily: "Playfair Display, serif", textAlign: "center" }}>
              Your Business Deserves Its Own AI
            </h2>
            <p style={{ color: "#aaa", fontSize: 16, marginBottom: 32, textAlign: "center", maxWidth: 480, lineHeight: 1.6 }}>
              The LLM Engine trains a custom AI model on your business data. Every blog, every post, every reply — sounds exactly like you. No other tool does this.
            </p>
            <a href="/pricing" style={{ background: "linear-gradient(135deg, #E8610A, #C84E06)", color: "#fff", padding: "16px 40px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 4px 24px rgba(232,97,10,0.4)" }}>
              Upgrade to Pro — $97/month
            </a>
            <p style={{ color: "#555", fontSize: 13, marginTop: 16 }}>Cancel anytime. Instant access.</p>
          </div>
        )}

      </div>
    </div>
  )
}
