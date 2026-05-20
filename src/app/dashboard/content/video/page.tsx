// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function VideoPage() {
  const [userId, setUserId] = useState('')
  const [businessId, setBusinessId] = useState('')
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState('TikTok')
  const [duration, setDuration] = useState('60')
  const [script, setScript] = useState(null)
  const [loading, setLoading] = useState(false)
  const [voiceoverLoading, setVoiceoverLoading] = useState(false)
  const [assembleLoading, setAssembleLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUserId(user.id)
      const { data: biz } = await supabase.from('business_profiles').select('id').eq('user_id', user.id).single()
      if (biz) setBusinessId(biz.id)
    }
    load()
  }, [])

  async function generateScript() {
    if (!topic) { setError('Please enter a topic'); return }
    setScript(null)
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/content/video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, businessId, topic, platform, duration })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setScript(data.script || data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function generateVoiceover() {
    if (!script) return
    setVoiceoverLoading(true)
    setError('')
    try {
      const scriptText = (script.hook || '') + ' ' + (script.body || '') + ' ' + (script.cta || '')
      const res = await fetch('/api/content/video/voiceover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scriptId: script.id, scriptText: scriptText.trim() })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setScript(prev => ({ ...prev, audio_url: data.audioUrl, audio_status: 'done' }))
    } catch (err) {
      setError(err.message)
    } finally {
      setVoiceoverLoading(false)
    }
  }

  async function assembleVideo() {
    if (!script) return
    setAssembleLoading(true)
    setError('')
    try {
      const res = await fetch('/api/content/video/assemble', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scriptId: script.id })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      const renderId = data.renderId
      const interval = setInterval(async () => {
        const r = await fetch('/api/content/video/assemble?renderId=' + renderId + '&scriptId=' + script.id)
        const d = await r.json()
        if (d.status === 'succeeded') {
          clearInterval(interval)
          setAssembleLoading(false)
          setScript(prev => ({ ...prev, video_url: d.videoUrl, video_status: 'done' }))
        }
        if (d.status === 'failed') {
          clearInterval(interval)
          setAssembleLoading(false)
          setError('Video assembly failed.')
        }
      }, 5000)
    } catch (err) {
      setError(err.message)
      setAssembleLoading(false)
    }
  }

  return (
    <div style={{ padding: '32px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Video Generator</h1>
      <p style={{ color: '#6b7280', marginBottom: '24px' }}>Generate a script, voiceover, and assembled video with stock footage.</p>

      <div style={{ background: 'white', borderRadius: '12px', padding: '24px', marginBottom: '24px', border: '1px solid #e5e7eb' }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Topic</label>
          <input
            type="text"
            value={topic}
            onChange={e => setTopic(e.target.value)}
            placeholder="e.g. second passport benefits"
            style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', backgroundColor: 'white', color: '#111827', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Platform</label>
            <select value={platform} onChange={e => setPlatform(e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', backgroundColor: 'white', color: '#111827', outline: 'none', boxSizing: 'border-box' }}>
              <option value="TikTok">TikTok</option>
              <option value="Instagram Reels">Instagram Reels</option>
              <option value="YouTube Shorts">YouTube Shorts</option>
              <option value="LinkedIn">LinkedIn</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Duration (seconds)</label>
            <select value={duration} onChange={e => setDuration(e.target.value)} style={{ width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', backgroundColor: 'white', color: '#111827', outline: 'none', boxSizing: 'border-box' }}>
              <option value="30">30s</option>
              <option value="60">60s</option>
              <option value="90">90s</option>
            </select>
          </div>
        </div>
        <button onClick={generateScript} disabled={loading || !businessId} style={{ background: loading ? '#9ca3af' : '#f97316', color: 'white', padding: '10px 24px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '14px', cursor: loading ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Generating...' : 'Generate Script'}
        </button>
        {!businessId && <p style={{ color: '#9ca3af', fontSize: '13px', marginTop: '8px' }}>Loading your business profile...</p>}
      </div>

      {error && <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '12px', color: '#dc2626', marginBottom: '16px' }}>{error}</div>}

      {script && (
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', marginBottom: '24px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '16px' }}>Generated Script</h2>
          <div style={{ marginBottom: '16px', padding: '16px', background: '#fff7ed', borderRadius: '8px', border: '1px solid #fed7aa' }}>
            <div style={{ color: '#f97316', fontWeight: '700', marginBottom: '8px' }}>HOOK</div>
            <div style={{ lineHeight: '1.6', color: '#111827' }}>{script.hook}</div>
          </div>
          <div style={{ marginBottom: '16px', padding: '16px', background: '#eff6ff', borderRadius: '8px', border: '1px solid #bfdbfe' }}>
            <div style={{ color: '#3b82f6', fontWeight: '700', marginBottom: '8px' }}>BODY</div>
            <div style={{ lineHeight: '1.6', color: '#111827' }}>{script.body}</div>
          </div>
          <div style={{ marginBottom: '24px', padding: '16px', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
            <div style={{ color: '#10b981', fontWeight: '700', marginBottom: '8px' }}>CTA</div>
            <div style={{ lineHeight: '1.6', color: '#111827' }}>{script.cta}</div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={generateVoiceover} disabled={voiceoverLoading || script.audio_status === 'done'} style={{ background: script.audio_status === 'done' ? '#6b7280' : '#10b981', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '14px', cursor: voiceoverLoading ? 'not-allowed' : 'pointer' }}>
              {voiceoverLoading ? 'Generating Voiceover...' : script.audio_status === 'done' ? 'Voiceover Ready' : 'Generate Voiceover'}
            </button>
            {script.audio_status === 'done' && (
              <button onClick={assembleVideo} disabled={assembleLoading} style={{ background: assembleLoading ? '#9ca3af' : '#6366f1', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '14px', cursor: assembleLoading ? 'not-allowed' : 'pointer' }}>
                {assembleLoading ? 'Assembling...' : 'Assemble Video with Pexels'}
              </button>
            )}
          </div>
          {script.audio_url && (
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontWeight: '600', marginBottom: '8px' }}>Voiceover Audio</div>
              <audio controls src={script.audio_url} style={{ width: '100%' }} />
            </div>
          )}
          {script.video_status === 'done' && script.video_url && (
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontWeight: '600', marginBottom: '8px', color: '#10b981' }}>Final Video</div>
              <video controls src={script.video_url} style={{ width: '100%', borderRadius: '8px' }} />
              <a href={script.video_url} download style={{ display: 'inline-block', marginTop: '8px', background: '#3b82f6', color: 'white', padding: '8px 16px', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>Download Video</a>
            </div>
          )}
          {assembleLoading && <div style={{ marginTop: '12px', color: '#f97316', fontWeight: '600' }}>Rendering video... this takes 1-2 minutes.</div>}
        </div>
      )}
    </div>
  )
}
