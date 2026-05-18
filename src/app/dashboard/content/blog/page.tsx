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
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Blog Generator</h1>
      <p className="text-gray-500 mb-6">Generate SEO-optimized blog posts for your business.</p>

      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Blog Topic</label>
        <input
          type="text"
          placeholder="e.g. How to get a second passport in 2025"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mb-4"
        />
        <button
          onClick={generate}
          disabled={generating}
          className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50"
        >
          {generating ? "Generating..." : "Generate Blog Post"}
        </button>
        {message && <p className="mt-3 text-sm text-red-500">{message}</p>}
      </div>

      {post && (
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-2">{post.title}</h2>
          <div className="text-sm text-gray-700 whitespace-pre-wrap mb-6">{post.content}</div>
          <button
            onClick={publishToWordPress}
            disabled={publishing}
            className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-green-700 disabled:opacity-50"
          >
            {publishing ? "Publishing..." : "Publish to WordPress"}
          </button>
          {wpMessage && (
            <p className={`mt-3 text-sm ${wpMessage.startsWith("Error") ? "text-red-500" : "text-green-600"}`}>
              {wpMessage}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
