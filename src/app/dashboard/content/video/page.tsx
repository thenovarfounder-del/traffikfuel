'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface VideoScript {
  id: string
  topic: string
  platform: string
  duration: number
  hook: string
  body: string
  cta: string
  created_at: string
}

export default function VideoScriptsPage() {
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState('YouTube Shorts')
  const [duration, setDuration] = useState(30)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentScript, setCurrentScript] = useState<VideoScript | null>(null)
  const [history, setHistory] = useState<VideoScript[]>([])
  const [historyLoading, setHistoryLoading] = useState(true)
  const [copied, setCopied] = useState<string>('')

  useEffect(() => {
    loadHistory()
  }, [])

  async function loadHistory() {
    setHistoryLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const res = await fetch(`/api/content/video?userId=${user.id}`)
    const json = await res.json()
    if (json.scripts) setHistory(json.scripts)
    setHistoryLoading(false)
  }

  async function handleGenerate() {
    if (!topic.trim()) {
      setError('Please enter a topic or keyword.')
      return
    }
    setError('')
    setLoading(true)
    setCurrentScript(null)

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      setError('Not logged in.')
      setLoading(false)
      return
    }

    const res = await fetch('/api/content/video', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, platform, duration, userId: user.id })
    })

    const json = await res.json()
    if (!res.ok) {
      setError(json.error || 'Something went wrong.')
    } else {
      setCurrentScript(json.script)
      setHistory(prev => [json.script, ...prev])
    }
    setLoading(false)
  }

  function copyText(text: string, label: string) {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(''), 2000)
  }

  function getFullScript(script: VideoScript) {
    return `HOOK:\n${script.hook}\n\nBODY:\n${script.body}\n\nCALL TO ACTION:\n${script.cta}`
  }

  const platformColors: Record<string, string> = {
    'YouTube Shorts': 'bg-red-100 text-red-700',
    'TikTok': 'bg-purple-100 text-purple-700',
    'Instagram Reels': 'bg-pink-100 text-pink-700'
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Video Script Generator</h1>
        <p className="text-gray-500 mt-1">Generate short-form video scripts for YouTube Shorts, TikTok, and Instagram Reels.</p>
      </div>

      {/* Generator Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Topic */}
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Topic or Keyword</label>
            <input
              type="text"
              value={topic}
              onChange={e => setTopic(e.target.value)}
              placeholder="e.g. Why every business needs a second passport"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Platform */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
            <select
              value={platform}
              onChange={e => setPlatform(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>YouTube Shorts</option>
              <option>TikTok</option>
              <option>Instagram Reels</option>
            </select>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Video Length</label>
            <select
              value={duration}
              onChange={e => setDuration(Number(e.target.value))}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={30}>30 seconds</option>
              <option value={60}>60 seconds</option>
              <option value={90}>90 seconds</option>
            </select>
          </div>

          {/* Button */}
          <div className="flex items-end">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-semibold rounded-lg px-4 py-2.5 text-sm transition-colors"
            >
              {loading ? 'Generating...' : '⚡ Generate Script'}
            </button>
          </div>
        </div>

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}
      </div>

      {/* Generated Script */}
      {loading && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8 text-center">
          <div className="animate-pulse text-gray-400 text-sm">Writing your script...</div>
        </div>
      )}

      {currentScript && !loading && (
        <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">{currentScript.topic}</h2>
              <div className="flex gap-2 mt-1">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${platformColors[currentScript.platform] || 'bg-gray-100 text-gray-600'}`}>
                  {currentScript.platform}
                </span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                  {currentScript.duration}s
                </span>
              </div>
            </div>
            <button
              onClick={() => copyText(getFullScript(currentScript), 'full')}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium border border-blue-200 rounded-lg px-3 py-1.5"
            >
              {copied === 'full' ? '✓ Copied!' : 'Copy All'}
            </button>
          </div>

          <div className="space-y-4">
            {/* Hook */}
            <div className="bg-yellow-50 border border-yellow-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-yellow-700 uppercase tracking-wide">🎣 Hook</span>
                <button
                  onClick={() => copyText(currentScript.hook, 'hook')}
                  className="text-xs text-yellow-700 hover:text-yellow-900 font-medium"
                >
                  {copied === 'hook' ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">{currentScript.hook}</p>
            </div>

            {/* Body */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wide">📋 Body</span>
                <button
                  onClick={() => copyText(currentScript.body, 'body')}
                  className="text-xs text-blue-700 hover:text-blue-900 font-medium"
                >
                  {copied === 'body' ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">{currentScript.body}</p>
            </div>

            {/* CTA */}
            <div className="bg-green-50 border border-green-100 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-green-700 uppercase tracking-wide">🚀 Call to Action</span>
                <button
                  onClick={() => copyText(currentScript.cta, 'cta')}
                  className="text-xs text-green-700 hover:text-green-900 font-medium"
                >
                  {copied === 'cta' ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">{currentScript.cta}</p>
            </div>
          </div>
        </div>
      )}

      {/* History */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Past Scripts</h2>

        {historyLoading && (
          <p className="text-gray-400 text-sm">Loading history...</p>
        )}

        {!historyLoading && history.length === 0 && (
          <p className="text-gray-400 text-sm">No scripts yet. Generate your first one above.</p>
        )}

        <div className="space-y-3">
          {history.map(script => (
            <div
              key={script.id}
              onClick={() => setCurrentScript(script)}
              className="bg-white border border-gray-100 rounded-xl p-4 cursor-pointer hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-900">{script.topic}</p>
                  <div className="flex gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${platformColors[script.platform] || 'bg-gray-100 text-gray-600'}`}>
                      {script.platform}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                      {script.duration}s
                    </span>
                  </div>
                </div>
                <p className="text-xs text-gray-400">
                  {new Date(script.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}