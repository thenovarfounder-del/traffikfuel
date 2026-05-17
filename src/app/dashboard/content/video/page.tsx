'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface VideoScript {
  id: string
  topic: string
  hook: string
  body: string
  cta: string
  created_at: string
  audio_url: string | null
  audio_status: string | null
}

export default function VideoScriptsPage() {
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState('YouTube')
  const [duration, setDuration] = useState('60')
  const [loading, setLoading] = useState(false)
  const [voiceoverLoading, setVoiceoverLoading] = useState<string | null>(null)
  const [result, setResult] = useState<VideoScript | null>(null)
  const [history, setHistory] = useState<VideoScript[]>([])
  const [error, setError] = useState('')
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    loadHistory()
  }, [])

  async function loadHistory() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { data } = await supabase
      .from('video_scripts')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(10)
    if (data) setHistory(data)
  }

  async function handleGenerate() {
    if (!topic.trim()) return
    setLoading(true)
    setError('')
    setResult(null)

    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) throw new Error('Not logged in')

      const { data: profile } = await supabase
        .from('business_profiles')
        .select('business_name')
        .eq('user_id', user.id)
        .single()

      const response = await fetch('/api/content/video', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          platform,
          duration,
          businessName: profile?.business_name || 'my business',
          userId: user.id,
        }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Failed to generate')
      setResult(data.script || data)
      loadHistory()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  async function handleVoiceover(script: VideoScript) {
    setVoiceoverLoading(script.id)
    setError('')

    try {
      const fullScript = `${script.hook}\n\n${script.body}\n\n${script.cta}`
      const response = await fetch('/api/content/video/voiceover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          scriptId: script.id,
          scriptText: fullScript,
        }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || 'Failed to generate voiceover')

      if (result?.id === script.id) {
        setResult({ ...result, audio_url: data.audioUrl, audio_status: 'ready' })
      }
      loadHistory()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Voiceover failed')
    } finally {
      setVoiceoverLoading(null)
    }
  }

  function copyText(text: string, key: string) {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  function getFullScript(script: VideoScript) {
    return `HOOK:\n${script.hook}\n\nBODY:\n${script.body}\n\nCTA:\n${script.cta}`
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-white mb-2">🎬 Video Script Generator</h1>
      <p className="text-gray-400 mb-8">Generate AI-powered video scripts with voiceover</p>

      <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">Video Topic</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. How to get a second passport legally"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Platform</label>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
            >
              <option value="YouTube">YouTube</option>
              <option value="TikTok">TikTok</option>
              <option value="Instagram">Instagram Reels</option>
              <option value="Facebook">Facebook</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Duration (seconds)</label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500"
            >
              <option value="30">30 seconds</option>
              <option value="60">60 seconds</option>
              <option value="90">90 seconds</option>
              <option value="120">2 minutes</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading || !topic.trim()}
          className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:text-gray-500 text-white font-semibold py-3 rounded-lg transition-colors"
        >
          {loading ? '✨ Generating Script...' : '🎬 Generate Video Script'}
        </button>
      </div>

      {error && (
        <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 mb-6 text-red-400">
          {error}
        </div>
      )}

      {result && (
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-white">📄 {result.topic}</h2>
            <button
              onClick={() => copyText(getFullScript(result), 'full')}
              className="text-sm bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-lg transition-colors"
            >
              {copied === 'full' ? '✅ Copied!' : '📋 Copy All'}
            </button>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-orange-400 font-medium text-sm">🎯 HOOK</span>
                <button onClick={() => copyText(result.hook, 'hook')} className="text-xs text-gray-500 hover:text-gray-300">
                  {copied === 'hook' ? '✅' : '📋'}
                </button>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{result.hook}</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-400 font-medium text-sm">📝 BODY</span>
                <button onClick={() => copyText(result.body, 'body')} className="text-xs text-gray-500 hover:text-gray-300">
                  {copied === 'body' ? '✅' : '📋'}
                </button>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{result.body}</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-green-400 font-medium text-sm">🚀 CTA</span>
                <button onClick={() => copyText(result.cta, 'cta')} className="text-xs text-gray-500 hover:text-gray-300">
                  {copied === 'cta' ? '✅' : '📋'}
                </button>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{result.cta}</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-4">
            {result.audio_status === 'ready' && result.audio_url ? (
              <div>
                <p className="text-green-400 text-sm font-medium mb-2">🎙️ Voiceover Ready</p>
                <audio controls className="w-full" src={result.audio_url}>
                  Your browser does not support the audio element.
                </audio>
              </div>
            ) : (
              <button
                onClick={() => handleVoiceover(result)}
                disabled={voiceoverLoading === result.id}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:text-gray-500 text-white font-semibold py-3 rounded-lg transition-colors"
              >
                {voiceoverLoading === result.id ? '🎙️ Generating Voiceover...' : '🎙️ Generate Voiceover'}
              </button>
            )}
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">📚 Past Scripts</h2>
          <div className="space-y-3">
            {history.map((script) => (
              <div key={script.id} className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-medium text-sm">{script.topic}</h3>
                  <span className="text-gray-500 text-xs">
                    {new Date(script.created_at).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-400 text-xs mb-3 line-clamp-2">{script.hook}</p>

                {script.audio_status === 'ready' && script.audio_url ? (
                  <audio controls className="w-full mt-2">
                    <source src={script.audio_url} type="audio/mpeg" />
                  </audio>
                ) : (
                  <button
                    onClick={() => handleVoiceover(script)}
                    disabled={voiceoverLoading === script.id}
                    className="text-sm bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:text-gray-500 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    {voiceoverLoading === script.id ? '🎙️ Generating...' : '🎙️ Generate Voiceover'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
