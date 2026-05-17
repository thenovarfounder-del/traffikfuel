'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface RedditDraft {
  id: string
  subreddit: string
  title: string
  body: string
  topic: string
  created_at: string
}

export default function RedditPage() {
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [drafts, setDrafts] = useState<RedditDraft[]>([])
  const [history, setHistory] = useState<RedditDraft[]>([])
  const [error, setError] = useState('')
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    loadHistory()
  }, [])

  async function loadHistory() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { data } = await supabase
      .from('reddit_drafts')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(20)
    if (data) setHistory(data)
  }

  async function generateDrafts() {
    setError('')
    setDrafts([])
    if (!topic.trim()) {
      setError('Please enter a topic or keyword.')
      return
    }
    setLoading(true)
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        setError('Not logged in.')
        setLoading(false)
        return
      }
      const res = await fetch('/api/content/reddit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, userId: user.id }),
      })
      const json = await res.json()
      if (!res.ok) {
        setError(json.error || 'Something went wrong.')
        setLoading(false)
        return
      }
      setDrafts(json.drafts)
      loadHistory()
    } catch {
      setError('Network error. Please try again.')
    }
    setLoading(false)
  }

  function copyText(id: string, text: string) {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  function openInReddit(draft: RedditDraft) {
    const fullText = `${draft.title}\n\n${draft.body}`
    navigator.clipboard.writeText(fullText)
    const url = `https://www.reddit.com/r/${draft.subreddit}/submit?title=${encodeURIComponent(draft.title)}`
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Reddit Amplifier</h1>
          <p className="text-gray-400">Generate authentic Reddit posts that naturally mention your business and boost your AI visibility.</p>
        </div>

        {/* Input */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-8">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Topic or Keyword
          </label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && generateDrafts()}
            placeholder="e.g. second passport, offshore banking, expat taxes"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 mb-4"
          />
          {error && (
            <p className="text-red-400 text-sm mb-4">{error}</p>
          )}
          <button
            onClick={generateDrafts}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            {loading ? 'Generating...' : 'Generate Reddit Drafts'}
          </button>
        </div>

        {/* Generated Drafts */}
        {drafts.length > 0 && (
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-white mb-4">Generated Drafts</h2>
            <div className="space-y-6">
              {drafts.map((draft) => (
                <div key={draft.id} className="bg-gray-900 border border-orange-500/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-orange-400 font-medium text-sm">r/{draft.subreddit}</span>
                    <span className="text-gray-500 text-xs">Draft saved</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-3">{draft.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 whitespace-pre-wrap">{draft.body}</p>
                  <div className="flex gap-3 flex-wrap">
                    <button
                      onClick={() => copyText(draft.id + '-title', draft.title)}
                      className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      {copied === draft.id + '-title' ? '✓ Copied Title' : 'Copy Title'}
                    </button>
                    <button
                      onClick={() => copyText(draft.id + '-body', draft.body)}
                      className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      {copied === draft.id + '-body' ? '✓ Copied Body' : 'Copy Body'}
                    </button>
                    <button
                      onClick={() => copyText(draft.id + '-full', `${draft.title}\n\n${draft.body}`)}
                      className="text-xs bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg transition-colors"
                    >
                      {copied === draft.id + '-full' ? '✓ Copied!' : 'Copy Full Post'}
                    </button>
                    <button
                      onClick={() => openInReddit(draft)}
                      className="text-xs bg-orange-600 hover:bg-orange-700 text-white font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                    >
                      🚀 Open in Reddit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* History */}
        {history.length > 0 && drafts.length === 0 && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">Previous Drafts</h2>
            <div className="space-y-4">
              {history.map((draft) => (
                <div key={draft.id} className="bg-gray-900 border border-gray-800 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-orange-400 text-sm font-medium">r/{draft.subreddit}</span>
                    <span className="text-gray-500 text-xs">{new Date(draft.created_at).toLocaleDateString()}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-2">Topic: {draft.topic}</p>
                  <h3 className="text-white font-medium mb-2">{draft.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-3">{draft.body}</p>
                  <div className="flex gap-3 flex-wrap">
                    <button
                      onClick={() => copyText(draft.id + '-full', `${draft.title}\n\n${draft.body}`)}
                      className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1.5 rounded-lg transition-colors"
                    >
                      {copied === draft.id + '-full' ? '✓ Copied!' : 'Copy Full Post'}
                    </button>
                    <button
                      onClick={() => openInReddit(draft)}
                      className="text-xs bg-orange-600 hover:bg-orange-700 text-white font-semibold px-3 py-1.5 rounded-lg transition-colors"
                    >
                      🚀 Open in Reddit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}