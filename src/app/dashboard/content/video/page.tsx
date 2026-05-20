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
  const [history, setHistory] = useState([])

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUserId(user.id)
      const { data: biz } = await supabase.from('business_profiles').select('id').eq('user_id', user.id).single()
      if (biz) setBusinessId(biz.id)
      loadHistory(user.id)
    }
    load()
  }, [])

  async function loadHistory(uid) {
    const id = uid || userId
    if (!id) return
    const { data } = await supabase.from('video_scripts').select('*').eq('user_id', id).order('created_at', { ascending: false }).limit(10)
    if (data) setHistory(data)
  }

  async function generateScript() {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/content/video', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, businessId, topic, platform, duration }) })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setScript(data.script || data)
      loadHistory()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function generateVoiceover(s) {
    setVoiceoverLoading(true)
    setError('')
    try {
      const scriptText = s.hook + ' ' + s.body + ' ' + s.cta
      const res = await fetch('/api/content/video/voiceover', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ scriptId: s.id, scriptText }) })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setScript(prev => prev ? { ...prev, audio_url: data.audioUrl, audio_status: 'done' } : prev)
      loadHistory()
    } catch (err) {
      setError(err.message)
    } finally {
      setVoiceoverLoading(false)
    }
  }

  async function assembleVideo(s) {
    setAssembleLoading(true)
    setError('')
    try {
      const res = await fetch('/api/content/video/assemble', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scriptId: s.id })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      const renderId = data.videoId
      if (!renderId) throw new Error('No render ID returned')
      const interval = setInterval(async () => {
        try {
          const r = await fetch('/api/content/video/assemble', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ videoId: renderId, scriptId: s.id })
          })
          const d = await r.json()
          if (d.status === 'succeeded') {
            clearInterval(interval)
            setAssembleLoading(false)
            setScript(prev => prev ? { ...prev, video_url: d.videoUrl, video_status: 'done' } : prev)
            loadHistory()
          } else if (d.status === 'failed') {
            clearInterval(interval)
            setAssembleLoading(false)
            setError('Video assembly failed.')
          }
        } catch (pollErr) {
          clearInterval(interval)
          setAssembleLoading(false)
          setError('Polling error: ' + pollErr.message)
        }
      }, 5000)
    } catch (err) {
      setError(err.message)
      setAssembleLoading(false)
    }
  }

  const inputStyle = { width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', backgroundColor: 'white', color: '#111827', outline: 'none', boxSizing: 'border-box' }

  return (
    <div style={{ padding: '32px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>Video Generator</h1>
      <p style={{ color: '#6b7280', marginBottom: '24px' }}>Generate a script, voiceover, and assembled video with stock footage.</p>

      <div style={{ background: 'white', borderRadius: '12px', padding: '24px', marginBottom: '24px', border: '1px solid #e5e7eb' }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Topic</label>
          <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. second passport benefits" style={inputStyle} />
        </div>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Platform</label>
            <select value={platform} onChange={e => setPlatform(e.target.value)} style={inputStyle}>
              <option>TikTok</option>
              <option>Instagram Reels</option>
              <option>YouTube Shorts</option>
              <option>LinkedIn</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Duration (seconds)</label>
            <select value={duration} onChange={e => setDuration(e.target.value)} style={inputStyle}>
              <option value="30">30s</option>
              <option value="60">60s</option>
              <option value="90">90s</option>
            </select>
          </div>
        </div>
        <button onClick={generateScript} disabled={loading} style={{ backgroundColor: '#f97316', color: 'white', padding: '10px 24px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
          {loading ? 'Generating...' : 'Generate Script'}
        </button>
      </div>

      {error && <div style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#dc2626', padding: '12px 16px', borderRadius: '8px', marginBottom: '16px' }}>{error}</div>}

      {script && (
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', marginBottom: '24px', border: '1px solid #e5e7eb' }}>
          <div style={{ background: '#fff7ed', color: '#111827', borderRadius: '8px', padding: '16px', marginBottom: '12px' }}>
            <div style={{ fontWeight: '700', color: '#ea580c', marginBottom: '6px' }}>HOOK</div>
            <div>{script.hook}</div>
          </div>
          <div style={{ background: '#eff6ff', color: '#111827', borderRadius: '8px', padding: '16px', marginBottom: '12px' }}>
            <div style={{ fontWeight: '700', color: '#2563eb', marginBottom: '6px' }}>BODY</div>
            <div>{script.body}</div>
          </div>
          <div style={{ background: '#f0fdf4', color: '#111827', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <div style={{ fontWeight: '700', color: '#16a34a', marginBottom: '6px' }}>CTA</div>
            <div>{script.cta}</div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {script.audio_status === 'done' ? (
              <button disabled style={{ backgroundColor: '#6b7280', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '600' }}>Voiceover Ready</button>
            ) : (
              <button onClick={() => generateVoiceover(script)} disabled={voiceoverLoading} style={{ backgroundColor: '#7c3aed', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
                {voiceoverLoading ? 'Generating Voiceover...' : 'Generate Voiceover'}
              </button>
            )}

            {script.audio_status === 'done' && (
              <button onClick={() => assembleVideo(script)} disabled={assembleLoading} style={{ backgroundColor: '#2563eb', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
                {assembleLoading ? 'Assembling...' : 'Assemble Video'}
              </button>
            )}
          </div>

          {script.audio_url && (
            <audio controls src={script.audio_url} style={{ width: '100%', marginTop: '16px' }} />
          )}

          {assembleLoading && (
            <div style={{ marginTop: '12px', color: '#f97316', fontWeight: '600' }}>Rendering video... this takes 1-2 minutes.</div>
          )}

          {script.video_url && (
            <div style={{ marginTop: '16px' }}>
              <div style={{ fontWeight: '600', marginBottom: '8px' }}>Your Video is Ready!</div>
              <video controls src={script.video_url} style={{ width: '100%', borderRadius: '8px' }} />
            </div>
          )}
        </div>
      )}

      {history.length > 0 && (
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '16px' }}>Recent Scripts</h2>
          {history.map(s => (
            <div key={s.id} onClick={() => setScript(s)} style={{ padding: '12px', border: '1px solid #e5e7eb', borderRadius: '8px', marginBottom: '8px', cursor: 'pointer' }}>
              <div style={{ fontWeight: '600' }}>{s.topic}</div>
              <div style={{ color: '#6b7280', fontSize: '13px' }}>{s.platform} - {s.duration}s - {s.audio_status === 'done' ? 'Voiceover ready' : 'No voiceover'} - {s.video_status === 'done' ? 'Video ready' : 'No video'}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}




