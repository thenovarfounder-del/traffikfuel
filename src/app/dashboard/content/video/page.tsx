// @ts-nocheck
'use client'
import { useState, useEffect, useRef } from 'react'
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
  const intervalRef = useRef(null)
  const assemblingRef = useRef(false)

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUserId(user.id)
      const { data: biz } = await supabase.from('business_profiles').select('id').eq('user_id', user.id).single()
      if (biz) setBusinessId(biz.id)
      await loadHistory(user.id)
    }
    load()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  async function loadHistory(uid) {
    const id = uid || userId
    if (!id) return
    const { data } = await supabase.from('video_scripts').select('*').eq('user_id', id).order('created_at', { ascending: false }).limit(10)
    if (data) setHistory(data)
    return data
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

  function startPolling(videoId, scriptId) {
    if (intervalRef.current) clearInterval(intervalRef.current)
    setAssembleLoading(true)

    intervalRef.current = setInterval(async () => {
      try {
        const r = await fetch('/api/content/video/status?videoId=' + videoId + '&scriptId=' + scriptId)
        const d = await r.json()

        if (d.status === 'done') {
          clearInterval(intervalRef.current)
          intervalRef.current = null
          assemblingRef.current = false
          setAssembleLoading(false)
          setScript(prev => prev ? { ...prev, video_url: d.videoUrl, video_status: 'done' } : prev)
          loadHistory()
        }

        if (d.status === 'failed') {
          clearInterval(intervalRef.current)
          intervalRef.current = null
          assemblingRef.current = false
          setAssembleLoading(false)
          setError('Video rendering failed. Please try again.')
          await supabase.from('video_scripts').update({ video_status: 'failed' }).eq('id', scriptId)
          loadHistory()
        }
      } catch (pollErr) {
        console.error('Poll error:', pollErr)
      }
    }, 10000)
  }

  async function assembleVideo(s) {
    if (assemblingRef.current) return
    assemblingRef.current = true
    setError('')

    try {
      const res = await fetch('/api/content/video/assemble', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scriptId: s.id })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)

      startPolling(data.videoId, s.id)

    } catch (err) {
      assemblingRef.current = false
      setAssembleLoading(false)
      setError(err.message)
    }
  }

  const inputStyle = { width: '100%', padding: '10px 12px', border: '1px solid #d1d5db', borderRadius: '8px', fontSize: '14px', backgroundColor: 'white', color: '#111827', outline: 'none' }

  return (
    <div style={{ padding: '32px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px', color: '#111827' }}>Video Generator</h1>
      <p style={{ color: '#6b7280', marginBottom: '24px' }}>Generate a script, voiceover, and assembled video with an AI avatar.</p>

      <div style={{ background: 'white', borderRadius: '12px', padding: '24px', marginBottom: '24px', border: '1px solid #e5e7eb' }}>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#111827' }}>Topic</label>
          <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. Citizenship by investment" style={inputStyle} />
        </div>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#111827' }}>Platform</label>
            <select value={platform} onChange={e => setPlatform(e.target.value)} style={inputStyle}>
              <option>TikTok</option>
              <option>YouTube Shorts</option>
              <option>Instagram Reels</option>
              <option>LinkedIn</option>
            </select>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#111827' }}>Duration</label>
            <select value={duration} onChange={e => setDuration(e.target.value)} style={inputStyle}>
              <option value="30">30s</option>
              <option value="60">60s</option>
              <option value="90">90s</option>
            </select>
          </div>
        </div>
        <button onClick={generateScript} disabled={loading || !topic} style={{ backgroundColor: loading || !topic ? '#9ca3af' : '#f97316', color: 'white', padding: '10px 24px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: loading || !topic ? 'not-allowed' : 'pointer' }}>
          {loading ? 'Generating...' : 'Generate Script'}
        </button>
      </div>

      {error && <div style={{ background: '#fee2e2', color: '#dc2626', padding: '12px', borderRadius: '8px', marginBottom: '16px' }}>{error}</div>}

      {script && (
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', marginBottom: '24px', border: '1px solid #e5e7eb' }}>
          <div style={{ background: '#fff7ed', borderRadius: '8px', padding: '16px', marginBottom: '12px' }}>
            <div style={{ fontWeight: '700', color: '#f97316', marginBottom: '6px' }}>HOOK</div>
            <div style={{ color: '#111827' }}>{script.hook}</div>
          </div>
          <div style={{ background: '#eff6ff', borderRadius: '8px', padding: '16px', marginBottom: '12px' }}>
            <div style={{ fontWeight: '700', color: '#3b82f6', marginBottom: '6px' }}>BODY</div>
            <div style={{ color: '#111827' }}>{script.body}</div>
          </div>
          <div style={{ background: '#f0fdf4', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
            <div style={{ fontWeight: '700', color: '#22c55e', marginBottom: '6px' }}>CTA</div>
            <div style={{ color: '#111827' }}>{script.cta}</div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => generateVoiceover(script)} disabled={voiceoverLoading || script.audio_status === 'done'} style={{ backgroundColor: script.audio_status === 'done' ? '#6b7280' : '#3b82f6', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: 'pointer' }}>
              {voiceoverLoading ? 'Generating...' : script.audio_status === 'done' ? 'Voiceover Ready' : 'Generate Voiceover'}
            </button>
            {script.audio_status === 'done' && script.video_status !== 'done' && script.video_status !== 'rendering' && (
              <button onClick={() => assembleVideo(script)} disabled={assembleLoading} style={{ backgroundColor: assembleLoading ? '#9ca3af' : '#8b5cf6', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', fontWeight: '600', cursor: assembleLoading ? 'not-allowed' : 'pointer' }}>
                Assemble Video
              </button>
            )}
          </div>

          {script.audio_url && (
            <audio controls src={script.audio_url} style={{ width: '100%', marginBottom: '16px' }} />
          )}

          {assembleLoading && (
            <p style={{ color: '#f97316', fontWeight: '500', marginBottom: '12px' }}>Rendering video... this takes 3-5 minutes. Do not close this page.</p>
          )}

          {script.video_status === 'done' && script.video_url && (
            <div>
              <div style={{ fontWeight: '600', marginBottom: '8px', color: '#111827' }}>Your Video</div>
              <video controls src={script.video_url} style={{ width: '100%', borderRadius: '8px' }} />
            </div>
          )}
        </div>
      )}

      {history.length > 0 && (
        <div style={{ background: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px', color: '#111827' }}>History</h2>
          {history.map(h => (
            <div key={h.id} style={{ borderBottom: '1px solid #f3f4f6', paddingBottom: '16px', marginBottom: '16px' }}>
              <div style={{ fontWeight: '600', color: '#111827', marginBottom: '4px' }}>{h.topic}</div>
              <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>{h.platform} · {h.duration}s · {new Date(h.created_at).toLocaleDateString()}</div>
              {h.video_url && (
                <video controls src={h.video_url} style={{ width: '100%', borderRadius: '8px' }} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
