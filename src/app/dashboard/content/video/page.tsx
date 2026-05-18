// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function VideoPage() {
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState('YouTube')
  const [duration, setDuration] = useState('60')
  const [loading, setLoading] = useState(false)
  const [voiceoverLoading, setVoiceoverLoading] = useState(false)
  const [assembleLoading, setAssembleLoading] = useState(false)
  const [script, setScript] = useState(null)
  const [history, setHistory] = useState([])
  const [error, setError] = useState('')
  const [pollingId, setPollingId] = useState(null)
  const [pollingScriptId, setPollingScriptId] = useState(null)

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
    setScript(null)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not logged in')
      const { data: profile } = await supabase.from('business_profiles').select('*').eq('user_id', user.id).single()
      const res = await fetch('/api/content/video', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform, duration, userId: user.id, businessId: profile?.id, businessName: profile?.business_name }) })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setScript(data)
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
      const scriptText = scriptData.hook + ' ' + scriptData.body + ' ' + scriptData.cta
      const res = await fetch('/api/content/video/voiceover', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ scriptId: scriptData.id, scriptText: scriptText }) })
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
    setError('')
    try {
      const res = await fetch('/api/content/video/assemble', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ scriptId: scriptData.id, audioUrl: scriptData.audio_url }) })
      const data = await res.json()
      if (data.error) throw new Error(data.error)
      setPollingId(data.renderId)
      setPollingScriptId(scriptData.id)
      const interval = setInterval(async () => {
        const r = await fetch('/api/content/video/assemble?renderId=' + data.renderId + '&scriptId=' + scriptData.id)
        const d = await r.json()
        if (d.status === 'done') { clearInterval(interval); setAssembleLoading(false); setScript(prev => prev ? { ...prev, video_url: d.videoUrl, video_status: 'done' } : prev); }
        if (d.status === 'failed') { clearInterval(interval); setAssembleLoading(false); setError('Video assembly failed.') }
      }, 5000)
    } catch (err) {
      setError(err.message)
      setAssembleLoading(false)
    }
  }

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <h1 className='text-3xl font-bold text-white mb-2'>Video Scripts</h1>
      <p className='text-gray-400 mb-8'>Generate a script, add a voiceover, then assemble a real MP4 video.</p>
      <div className='bg-gray-900 rounded-xl p-6 mb-8 space-y-4'>
        <div>
          <label className='block text-sm text-gray-400 mb-1'>Topic</label>
          <input value={topic} onChange={e => setTopic(e.target.value)} placeholder='e.g. Why you need a second passport' className='w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:border-purple-500' />
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm text-gray-400 mb-1'>Platform</label>
            <select value={platform} onChange={e => setPlatform(e.target.value)} className='w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:border-purple-500'>
              <option>YouTube</option><option>TikTok</option><option>Instagram Reels</option><option>Facebook</option><option>LinkedIn</option>
            </select>
          </div>
          <div>
            <label className='block text-sm text-gray-400 mb-1'>Duration</label>
            <select value={duration} onChange={e => setDuration(e.target.value)} className='w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-700 focus:outline-none focus:border-purple-500'>
              <option value='30'>30 seconds</option><option value='60'>60 seconds</option><option value='90'>90 seconds</option><option value='120'>2 minutes</option>
            </select>
          </div>
        </div>
        <button onClick={generateScript} disabled={loading} className='w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition'>{loading ? 'Generating...' : 'Generate Script'}</button>
      </div>
      {error && <div className='bg-red-900 text-red-200 rounded-lg p-4 mb-6'>{error}</div>}
      {script && (
        <div className='bg-gray-900 rounded-xl p-6 mb-8 space-y-4'>
          <h2 className='text-xl font-bold text-white'>Generated Script</h2>
          <div>
            <p className='text-xs text-gray-500 uppercase mb-1'>Hook</p>
            <div className='bg-gray-800 rounded-lg p-4 text-white'>{script.hook}</div>
          </div>
          <div>
            <p className='text-xs text-gray-500 uppercase mb-1'>Body</p>
            <div className='bg-gray-800 rounded-lg p-4 text-white'>{script.body}</div>
          </div>
          <div>
            <p className='text-xs text-gray-500 uppercase mb-1'>CTA</p>
            <div className='bg-gray-800 rounded-lg p-4 text-white'>{script.cta}</div>
          </div>
          {!script.audio_url && <button onClick={() => generateVoiceover(script)} disabled={voiceoverLoading} className='w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition'>{voiceoverLoading ? 'Generating Voiceover...' : 'Generate Voiceover'}</button>}
          {script.audio_url && <audio controls src={script.audio_url} className='w-full mt-2' />}
          {script.audio_url && !script.video_url && <button onClick={() => assembleVideo(script)} disabled={assembleLoading} className='w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition'>{assembleLoading ? 'Assembling Video...' : 'Assemble Video'}</button>}
          {script.video_url && <video controls src={script.video_url} className='w-full mt-2 rounded-lg' />}
        </div>
      )}
      {history.length > 0 && (
        <div className='bg-gray-900 rounded-xl p-6'>
          <h2 className='text-xl font-bold text-white mb-4'>History</h2>
          <div className='space-y-3'>
            {history.map(h => (
              <div key={h.id} className='bg-gray-800 rounded-lg p-4'>
                <p className='text-white font-medium'>{h.topic}</p>
                <p className='text-gray-400 text-sm'>{h.platform} - {h.duration}s</p>
                {h.audio_url && <audio controls src={h.audio_url} className='w-full mt-2' />}
                {h.video_url && <video controls src={h.video_url} className='w-full mt-2 rounded-lg' />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
