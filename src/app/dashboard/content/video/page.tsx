// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function VideoPage() {
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState('instagram')
  const [duration, setDuration] = useState('60')
  const [loading, setLoading] = useState(false)
  const [voiceoverLoading, setVoiceoverLoading] = useState(false)
  const [assembleLoading, setAssembleLoading] = useState(false)
  const [script, setScript] = useState(null)
  const [history, setHistory] = useState([])
  const [error, setError] = useState('')
  const [assembleResult, setAssembleResult] = useState(null)

  useEffect(() => { loadHistory() }, [])

  async function loadHistory() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { data } = await supabase.from('video_scripts').select('*').eq('user_id', user.id).order('created_at', { ascending: false }).limit(10)
    if (data) setHistory(data)
  }

  async function generateScript() {
    if (!topic) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/content/video', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform, duration }) })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setScript(data.script)
      setAssembleResult(null)
      loadHistory()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  async function generateVoiceover(scriptData) {
    setVoiceoverLoading(true)
    setError('')
    try {
      const res = await fetch('/api/content/video/voiceover', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ scriptId: scriptData.id }) })
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

  async function assembleVideo(scriptData) {
    setAssembleLoading(true)
    setAssembleResult(null)
    setError('')
    try {
      const res = await fetch('/api/content/video/assemble', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ script_id: scriptData.id }) })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setAssembleResult(data)
      setScript(prev => prev ? { ...prev, video_status: 'ready' } : prev)
      loadHistory()
    } catch (err) {
      setError(err.message)
    } finally {
      setAssembleLoading(false)
    }
  }

  const inputStyle = { width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px', background: 'white', color: '#111', boxSizing: 'border-box' }
  const selectStyle = { width: '100%', padding: '10px 14px', borderRadius: '8px', border: '1px solid #d1d5db', fontSize: '15px', background: 'white', color: '#111', cursor: 'pointer', appearance: 'auto' }
  const labelStyle = { display: 'block', fontWeight: '600', fontSize: '14px', marginBottom: '6px', color: '#374151' }

  return (
    <div style={{ padding: '32px', maxWidth: '860px', margin: '0 auto', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '26px', fontWeight: '700', marginBottom: '6px', color: '#111' }}>Video Scripts + Voiceover + Assembly</h1>
      <p style={{ color: '#6b7280', marginBottom: '28px', fontSize: '15px' }}>Generate a script, add AI voiceover, then assemble with Pexels stock footage.</p>

      <div style={{ background: '#f9fafb', borderRadius: '12px', padding: '24px', marginBottom: '24px', border: '1px solid #e5e7eb' }}>
        <div style={{ marginBottom: '18px' }}>
          <label style={labelStyle}>Topic</label>
          <input
            type="text"
            value={topic}
            onChange={e => setTopic(e.target.value)}
            placeholder="e.g. Benefits of a second passport"
            style={inputStyle}
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
          <div>
            <label style={labelStyle}>Platform</label>
            <select value={platform} onChange={e => setPlatform(e.target.value)} style={selectStyle}>
              <option value="instagram">Instagram</option>
              <option value="tiktok">TikTok</option>
              <option value="youtube">YouTube</option>
              <option value="linkedin">LinkedIn</option>
              <option value="facebook">Facebook</option>
            </select>
          </div>
          <div>
            <label style={labelStyle}>Duration</label>
            <select value={duration} onChange={e => setDuration(e.target.value)} style={selectStyle}>
              <option value="30">30 seconds</option>
              <option value="60">60 seconds</option>
              <option value="90">90 seconds</option>
              <option value="180">3 minutes</option>
            </select>
          </div>
        </div>
        <button
          onClick={generateScript}
          disabled={loading || !topic}
          style={{ background: loading || !topic ? '#9ca3af' : '#f97316', color: 'white', padding: '12px 28px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '15px', cursor: loading || !topic ? 'not-allowed' : 'pointer' }}
        >
          {loading ? 'Generating Script...' : 'Generate Script'}
        </button>
      </div>

      {error && (
        <div style={{ background: '#fef2f2', color: '#dc2626', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #fecaca', fontSize: '14px' }}>
          {error}
        </div>
      )}

      {script && (
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px', marginBottom: '28px' }}>
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '16px', color: '#111' }}>Generated Script</h2>
          <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <div style={{ marginBottom: '10px' }}><span style={{ fontWeight: '700', color: '#f97316' }}>Hook: </span>{script.hook}</div>
            <div style={{ marginBottom: '10px' }}><span style={{ fontWeight: '700', color: '#6366f1' }}>Body: </span>{script.body}</div>
            <div><span style={{ fontWeight: '700', color: '#10b981' }}>CTA: </span>{script.cta}</div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <button
              onClick={() => generateVoiceover(script)}
              disabled={voiceoverLoading || script.audio_status === 'done'}
              style={{ background: script.audio_status === 'done' ? '#6b7280' : '#6366f1', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '14px', cursor: script.audio_status === 'done' ? 'default' : 'pointer' }}
            >
              {voiceoverLoading ? 'Generating Voiceover...' : script.audio_status === 'done' ? '🎙 Voiceover Ready' : 'Generate Voiceover'}
            </button>
            {script.audio_url && (
              <button
                onClick={() => assembleVideo(script)}
                disabled={assembleLoading}
                style={{ background: assembleLoading ? '#9ca3af' : '#10b981', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '14px', cursor: assembleLoading ? 'not-allowed' : 'pointer' }}
              >
                {assembleLoading ? 'Assembling Video...' : '🎬 Assemble Video with Pexels'}
              </button>
            )}
          </div>
          {script.audio_url && (
            <div style={{ marginTop: '4px' }}>
              <label style={{ ...labelStyle, marginBottom: '8px' }}>Voiceover Audio</label>
              <audio controls src={script.audio_url} style={{ width: '100%' }} />
            </div>
          )}
          {assembleResult && (
            <div style={{ marginTop: '20px', background: '#f0fdf4', borderRadius: '10px', padding: '16px', border: '1px solid #bbf7d0' }}>
              <div style={{ fontWeight: '700', color: '#16a34a', marginBottom: '12px', fontSize: '15px' }}>✅ {assembleResult.message}</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                {assembleResult.video_clips && assembleResult.video_clips.slice(0, 3).map((clip, i) => (
                  <div key={i}>
                    <video src={clip.url} poster={clip.thumbnail} controls style={{ width: '100%', borderRadius: '8px', background: '#000' }} />
                    <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '4px' }}>Clip {i + 1} — {clip.duration}s</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {history.length > 0 && (
        <div>
          <h2 style={{ fontSize: '17px', fontWeight: '700', marginBottom: '14px', color: '#111' }}>Recent Scripts</h2>
          {history.map(s => (
            <div
              key={s.id}
              onClick={() => { setScript(s); setAssembleResult(null) }}
              style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '14px 16px', marginBottom: '10px', cursor: 'pointer', transition: 'border-color 0.15s' }}
            >
              <div style={{ fontWeight: '600', color: '#111', marginBottom: '4px' }}>{s.topic}</div>
              <div style={{ fontSize: '13px', color: '#6b7280' }}>
                {s.platform} &middot; {s.duration}s &middot; {s.audio_status === 'done' ? '🎙 Voiceover ready' : 'No voiceover'} &middot; {s.video_status === 'ready' ? '🎬 Video ready' : 'No video'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
