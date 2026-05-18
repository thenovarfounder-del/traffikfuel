// @ts-nocheck
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

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUserId(user.id)
      const { data } = await supabase
        .from("business_profiles")
        .select("id")
        .eq("user_id", user.id)
        .single()
      if (data) setBusinessId(data.id)
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

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Blog Generator</h1>
      <p style={{ color: "#6b7280", marginBottom: "24px" }}>Generate SEO-optimized blog posts for your business.</p>

      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "24px", marginBottom: "24px" }}>
        <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>Blog Topic</label>
        <textarea
          rows={3}
          placeholder="e.g. How to get a second passport in 2025"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          style={{ width: "100%", border: "1px solid #d1d5db", borderRadius: "8px", padding: "10px 12px", fontSize: "14px", marginBottom: "16px", color: "#111827", background: "#fff", resize: "vertical", boxSizing: "border-box" }}
        />
        <button
          onClick={generate}
          disabled={generating}
          style={{ background: generating ? "#93c5fd" : "#2563eb", color: "#fff", padding: "10px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", border: "none", cursor: "pointer" }}
        >
          {generating ? "Generating..." : "Generate Blog Post"}
        </button>
        {message && <p style={{ marginTop: "12px", fontSize: "14px", color: "#ef4444" }}>{message}</p>}
      </div>

      {post && (
        <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "24px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "12px", color: "#111827" }}>{post.title}</h2>
          <div style={{ fontSize: "14px", color: "#374151", whiteSpace: "pre-wrap", marginBottom: "24px" }}>{post.content}</div>
          <button
            onClick={publishToWordPress}
            disabled={publishing}
            style={{ background: publishing ? "#86efac" : "#16a34a", color: "#fff", padding: "10px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", border: "none", cursor: "pointer" }}
          >
            {publishing ? "Publishing..." : "Publish to WordPress"}
          </button>
          {wpMessage && (
            <p style={{ marginTop: "12px", fontSize: "14px", color: wpMessage.startsWith("Error") ? "#ef4444" : "#16a34a" }}>
              {wpMessage}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
