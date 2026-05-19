// @ts-nocheck
'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

const PLATFORMS = [
  { key: 'wordpress', label: 'WordPress', icon: '🌐' },
  { key: 'social', label: 'Social Media', icon: '📱' },
  { key: 'email', label: 'Email', icon: '📧' },
  { key: 'ads', label: 'Ads', icon: '📣' },
  { key: 'reddit', label: 'Reddit', icon: '🤖' },
  { key: 'video', label: 'Video Scripts', icon: '🎬' },
  { key: 'schema', label: 'Schema Markup', icon: '🧩' },
  { key: 'faq', label: 'FAQ Schema', icon: '❓' },
  { key: 'authority', label: 'Authority Content', icon: '📚' },
]

type StatusType = 'idle' | 'running' | 'success' | 'skipped' | 'error'

interface PlatformStatus {
  status: StatusType
  message: string
}

export default function PublishEnginePage() {
  const [publishing, setPublishing] = useState(false)
  const [statuses, setStatuses] = useState<Record<string, PlatformStatus>>(
    Object.fromEntries(PLATFORMS.map(p => [p.key, { status: 'idle', message: '' }]))
  )
  const [done, setDone] = useState(false)

  const updateStatus = (key: string, status: StatusType, message: string) => {
    setStatuses(prev => ({ ...prev, [key]: { status, message } }))
  }

  const handlePublish = async () => {
    setPublishing(true)
    setDone(false)
    setStatuses(Object.fromEntries(PLATFORMS.map(p => [p.key, { status: 'idle', message: '' }])))

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      alert('Not logged in.')
      setPublishing(false)
      return
    }

    const { data: profile } = await supabase
      .from('business_profiles')
      .select('*')
      .eq('user_id', user.id)
      .single()

    if (!profile) {
      alert('No business profile found. Please complete your Business Profile first.')
      setPublishing(false)
      return
    }

    for (const platform of PLATFORMS) {
      updateStatus(platform.key, 'running', 'Publishing...')
      try {
        const res = await fetch('/api/content/publish', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ platform: platform.key, userId: user.id, businessId: profile.id }),
        })
        const json = await res.json()
        if (res.ok && json.success) {
          updateStatus(platform.key, 'success', json.message || 'Published successfully')
        } else if (json.skipped) {
          updateStatus(platform.key, 'skipped', json.message || 'Skipped')
        } else {
          updateStatus(platform.key, 'error', json.error || 'Failed')
        }
      } catch (err) {
        updateStatus(platform.key, 'error', 'Network error')
      }
    }

    setPublishing(false)
    setDone(true)
  }

  const getIcon = (status: StatusType) => {
    if (status === 'idle') return '⬜'
    if (status === 'running') return '⏳'
    if (status === 'success') return '✅'
    if (status === 'skipped') return '🟡'
    if (status === 'error') return '🔴'
    return '⬜'
  }

  const getBg = (status: StatusType) => {
    if (status === 'success') return '#0f2a1a'
    if (status === 'error') return '#2a0f0f'
    if (status === 'skipped') return '#2a2200'
    if (status === 'running') return '#1a1a2a'
    return '#111'
  }

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', color: '#fff' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>🚀 One-Button Publish Engine</h1>
      <p style={{ color: '#aaa', marginBottom: '32px' }}>
        Publishes your content everywhere in one click — WordPress, social, email, ads, Reddit, video, schema, FAQ, and authority content.
      </p>

      <button
        onClick={handlePublish}
        disabled={publishing}
        style={{
          width: '100%',
          padding: '18px',
          fontSize: '20px',
          fontWeight: 'bold',
          background: publishing ? '#333' : 'linear-gradient(135deg, #ff6b00, #ff3300)',
          color: '#fff',
          border: 'none',
          borderRadius: '12px',
          cursor: publishing ? 'not-allowed' : 'pointer',
          marginBottom: '32px',
          letterSpacing: '0.5px',
        }}
      >
        {publishing ? '⏳ Publishing...' : '🚀 Publish Everything'}
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {PLATFORMS.map(platform => {
          const s = statuses[platform.key]
          return (
            <div
              key={platform.key}
              style={{
                background: getBg(s.status),
                border: '1px solid #333',
                borderRadius: '10px',
                padding: '14px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                transition: 'background 0.3s',
              }}
            >
              <span style={{ fontSize: '22px' }}>{platform.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 'bold', fontSize: '15px' }}>{platform.label}</div>
                {s.message && (
                  <div style={{ fontSize: '13px', color: '#aaa', marginTop: '2px' }}>{s.message}</div>
                )}
              </div>
              <span style={{ fontSize: '20px' }}>{getIcon(s.status)}</span>
            </div>
          )
        })}
      </div>

      {done && (
        <div style={{
          marginTop: '28px',
          padding: '16px',
          background: '#0f2a1a',
          border: '1px solid #1a5c2a',
          borderRadius: '10px',
          textAlign: 'center',
          fontSize: '16px',
          color: '#4ade80',
        }}>
          ✅ Publish run complete! Check each platform above for results.
        </div>
      )}
    </div>
  )
}
