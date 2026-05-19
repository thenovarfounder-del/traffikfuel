// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

const PLATFORMS = [
  { key: 'wordpress', label: 'WordPress', icon: '🌐' },
  { key: 'social', label: 'Social Media', icon: '📱' },
  { key: 'email', label: 'Email', icon: '📧' },
  { key: 'ads', label: 'Ads', icon: '🎯' },
  { key: 'reddit', label: 'Reddit', icon: '🤖' },
  { key: 'video', label: 'Video Scripts', icon: '🎬' },
  { key: 'schema', label: 'Schema Markup', icon: '🧩' },
  { key: 'faq', label: 'FAQ Schema', icon: '❓' },
  { key: 'authority', label: 'Authority Content', icon: '📣' },
]

export default function PublishEnginePage() {
  const [publishing, setPublishing] = useState(false)
  const [statuses, setStatuses] = useState({})
  const [userId, setUserId] = useState(null)
  const [businessId, setBusinessId] = useState(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUserId(user.id)
      const { data: profile } = await supabase
        .from('business_profiles')
        .select('id')
        .eq('user_id', user.id)
        .single()
      if (profile) setBusinessId(profile.id)
    }
    load()
  }, [])

  async function handlePublish() {
    if (!userId || !businessId) {
      alert('No business profile found. Please complete your Business Profile first.')
      return
    }
    setPublishing(true)
    setDone(false)
    setStatuses({})
    try {
      const res = await fetch('/api/content/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, business_id: businessId })
      })
      const data = await res.json()
      if (data.results) {
        setStatuses(data.results)
      } else {
        alert(data.error || 'Publish failed')
      }
    } catch (e) {
      alert('Network error — please try again')
    }
    setPublishing(false)
    setDone(true)
  }

  function getColor(status) {
    if (status === 'success') return '#22c55e'
    if (status === 'skipped') return '#f59e0b'
    if (status === 'error') return '#ef4444'
    return '#6b7280'
  }

  function getDot(status) {
    if (status === 'success') return '✅'
    if (status === 'skipped') return '⏭'
    if (status === 'error') return '❌'
    return '⚪'
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>🚀 One-Button Publish Engine</h1>
      <p style={{ color: '#9ca3af', marginBottom: '1.5rem' }}>Publishes your content everywhere in one click.</p>

      <button
        onClick={handlePublish}
        disabled={publishing}
        style={{ width: '100%', padding: '1rem', background: publishing ? '#374151' : '#f97316', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', borderRadius: '8px', border: 'none', cursor: publishing ? 'not-allowed' : 'pointer', marginBottom: '1.5rem' }}
      >
        {publishing ? '⏳ Publishing...' : '🚀 Publish Everything'}
      </button>

      {PLATFORMS.map(p => {
        const s = statuses[p.key]
        return (
          <div key={p.key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#1f2937', borderRadius: '8px', padding: '1rem 1.2rem', marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.3rem' }}>{p.icon}</span>
              <div>
                <div style={{ fontWeight: 'bold' }}>{p.label}</div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{s ? s.message : 'Ready'}</div>
              </div>
            </div>
            <span style={{ fontSize: '1.4rem' }}>{s ? getDot(s.status) : '⚪'}</span>
          </div>
        )
      })}

      {done && <p style={{ textAlign: 'center', color: '#4ade80', marginTop: '1rem' }}>✅ Publish run complete! Check each platform above for results.</p>}
    </div>
  )
}
