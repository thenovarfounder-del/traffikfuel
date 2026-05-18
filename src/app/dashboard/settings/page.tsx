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
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-2">Settings</h1>
      <p className="text-gray-500 mb-8">Manage your integrations and account settings.</p>
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-1">WordPress Integration</h2>
        <p className="text-sm text-gray-500 mb-4">Connect your WordPress site to publish blog posts with one click.</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">WordPress Site URL</label>
            <input type="text" placeholder="https://yourclientsite.com" value={wpSiteUrl} onChange={(e) => setWpSiteUrl(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">WordPress Username</label>
            <input type="text" placeholder="admin" value={wpUsername} onChange={(e) => setWpUsername(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">WordPress Application Password</label>
            <input type="password" placeholder="xxxx xxxx xxxx xxxx xxxx xxxx" value={wpAppPassword} onChange={(e) => setWpAppPassword(e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
            <p className="text-xs text-gray-400 mt-1">Generate this in WordPress under Users - Profile - Application Passwords.</p>
          </div>
        </div>
        <button onClick={save} disabled={saving} className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 disabled:opacity-50">
          {saving ? "Saving..." : "Save Settings"}
        </button>
        {message && <p className="mt-3 text-sm text-green-600">{message}</p>}
      </div>
    </div>
  )
}
