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
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/content/video', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform, duration }) })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setScript(data.script)
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

  return (
    <div style={{ padding: '32px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px' }}>Video Scripts + Voiceover + Assembly</h1>
      <p style={{ color: '#666', marginBottom: '32px' }}>Generate a video script, add AI voiceover, then assemble with Pexels stock footage.</p>

      <div style={{ background: '#f9f9f9', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Topic</label>
          <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. Benefits of second passport" style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px' }} />
        </div>
        <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Platform</label>
            <select value={platform} onChange={e => setPlatform(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px' }}>
              <option value="instagram">Instagram</option>
              <option value="tiktok">TikTok</option>
              <option value="youtube">YouTube</option>
              <option value="linkedin">LinkedIn</option>
              <option value="facebook">Facebook</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px' }}>Duration (seconds)</label>
            <select value={duration} onChange={e => setDuration(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '15px' }}>
              <option value="30">30s</option>
              <option value="60">60s</option>
              <option value="90">90s</option>
              <option value="180">3 min</option>
            </select>
          </div>
        </div>
        <button onClick={generateScript} disabled={loading || !topic} style={{ background: '#f97316', color: 'white', padding: '12px 28px', borderRadius: '8px', border: 'none', fontWeight: '600', fontSize: '15px', cursor: 'pointer' }}>
          {loading ? 'Generating...' : 'Generate Script'}
        </button>
      </div>

      {error && <div style={{ background: '#fee2e2', color: '#dc2626', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>{error}</div>}

      {script && (
        <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Generated Script</h2>
          <div style={{ marginBottom: '12px' }}><strong>Hook:</strong> {script.hook}</div>
          <div style={{ marginBottom: '12px' }}><strong>Body:</strong> {script.body}</div>
          <div style={{ marginBottom: '20px' }}><strong>CTA:</strong> {script.cta}</div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={() => generateVoiceover(script)} disabled={voiceoverLoading || script.audio_status === 'done'} style={{ background: '#6366f1', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
              {voiceoverLoading ? 'Generating Voiceover...' : script.audio_status === 'done' ? 'Voiceover Done ✓' : 'Generate Voiceover'}
            </button>
            {script.audio_url && (
              <button onClick={() => assembleVideo(script)} disabled={assembleLoading} style={{ background: '#10b981', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
                {assembleLoading ? 'Assembling...' : 'Assemble Video with Pexels'}
              </button>
            )}
          </div>
          {script.audio_url && (
            <div style={{ marginTop: '16px' }}>
              <strong>Voiceover:</strong>
              <audio controls src={script.audio_url} style={{ display: 'block', marginTop: '8px', width: '100%' }} />
            </div>
          )}
          {assembleResult && (
            <div style={{ marginTop: '20px', background: '#f0fdf4', borderRadius: '8px', padding: '16px' }}>
              <strong style={{ color: '#16a34a' }}>✅ {assembleResult.message}</strong>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap' }}>
                {assembleResult.video_clips && assembleResult.video_clips.slice(0, 3).map((clip, i) => (
                  <video key={i} src={clip.url} poster={clip.thumbnail} controls style={{ width: '200px', borderRadius: '8px' }} />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {history.length > 0 && (
        <div>
          <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Recent Scripts</h2>
          {history.map(s => (
            <div key={s.id} onClick={() => setScript(s)} style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '16px', marginBottom: '12px', cursor: 'pointer' }}>
              <div style={{ fontWeight: '600' }}>{s.topic}</div>
              <div style={{ color: '#666', fontSize: '13px' }}>{s.platform} · {s.duration}s · {s.audio_status === 'done' ? '🎙 Voiceover ready' : 'No voiceover'} · {s.video_status === 'ready' ? '🎬 Video ready' : 'No video'}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
