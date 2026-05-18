// @ts-nocheck
'use client'
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"

export default function SettingsPage() {
  const [userId, setUserId] = useState("")
  const [wpSiteUrl, setWpSiteUrl] = useState("")
  const [wpUsername, setWpUsername] = useState("")
  const [wpAppPassword, setWpAppPassword] = useState("")
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUserId(user.id)
      const { data } = await supabase
        .from("business_profiles")
        .select("wp_site_url, wp_username, wp_app_password")
        .eq("user_id", user.id)
        .single()
      if (data) {
        setWpSiteUrl(data.wp_site_url || "")
        setWpUsername(data.wp_username || "")
        setWpAppPassword(data.wp_app_password || "")
      }
    }
    load()
  }, [])

  const save = async () => {
    setSaving(true)
    setMessage("")
    const { error } = await supabase
      .from("business_profiles")
      .update({ wp_site_url: wpSiteUrl, wp_username: wpUsername, wp_app_password: wpAppPassword })
      .eq("user_id", userId)
    setSaving(false)
    setMessage(error ? "Error saving. Try again." : "Settings saved!")
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "24px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>Settings</h1>
      <p style={{ color: "#6b7280", marginBottom: "32px" }}>Manage your integrations and account settings.</p>

      <div style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "24px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "4px", color: "#111827" }}>WordPress Integration</h2>
        <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "20px" }}>Connect your WordPress site to publish blog posts with one click.</p>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>WordPress Site URL</label>
          <input
            type="text"
            placeholder="https://yourclientsite.com"
            value={wpSiteUrl}
            onChange={(e) => setWpSiteUrl(e.target.value)}
            style={{ width: "100%", border: "1px solid #d1d5db", borderRadius: "8px", padding: "10px 12px", fontSize: "14px", color: "#111827", background: "#fff", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>WordPress Username</label>
          <input
            type="text"
            placeholder="admin"
            value={wpUsername}
            onChange={(e) => setWpUsername(e.target.value)}
            style={{ width: "100%", border: "1px solid #d1d5db", borderRadius: "8px", padding: "10px 12px", fontSize: "14px", color: "#111827", background: "#fff", boxSizing: "border-box" }}
          />
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={{ display: "block", fontSize: "14px", fontWeight: "500", color: "#374151", marginBottom: "6px" }}>WordPress Application Password</label>
          <input
            type="password"
            placeholder="xxxx xxxx xxxx xxxx xxxx xxxx"
            value={wpAppPassword}
            onChange={(e) => setWpAppPassword(e.target.value)}
            style={{ width: "100%", border: "1px solid #d1d5db", borderRadius: "8px", padding: "10px 12px", fontSize: "14px", color: "#111827", background: "#fff", boxSizing: "border-box" }}
          />
          <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "4px" }}>Generate this in WordPress under Users - Profile - Application Passwords.</p>
        </div>

        <button
          onClick={save}
          disabled={saving}
          style={{ background: saving ? "#93c5fd" : "#2563eb", color: "#fff", padding: "10px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: "500", border: "none", cursor: "pointer" }}
        >
          {saving ? "Saving..." : "Save Settings"}
        </button>

        {message && (
          <p style={{ marginTop: "12px", fontSize: "14px", color: message.includes("Error") ? "#ef4444" : "#16a34a" }}>
            {message}
          </p>
        )}
      </div>
    </div>
  )
}
