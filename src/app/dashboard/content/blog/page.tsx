'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function BlogGeneratorPage() {
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [article, setArticle] = useState(null as any)
  const [error, setError] = useState('')
  const [userId, setUserId] = useState('')
  const [businessId, setBusinessId] = useState('')

  useEffect(() => {
    async function loadUser() {
      const result = await supabase.auth.getUser()
      const user = result.data.user
      if (user) {
        setUserId(user.id)
        const profileResult = await supabase
          .from('business_profiles')
          .select('id, business_name')
          .eq('user_id', user.id)
        const profiles = profileResult.data
        if (profiles && profiles.length > 0) {
          setBusinessId(profiles[0].id)
        }
      }
    }
    loadUser()
  }, [])

  async function generateArticle() {
    if (!topic.trim()) { setError('Please enter a topic.'); return }
    setLoading(true)
    setError('')
    setArticle(null)
    try {
      const res = await fetch('/api/content/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim(), businessId, userId }),
      })
      const data = await res.json()
      if (!res.ok || data.error) { setError(data.error || 'Something went wrong.'); return }
      setArticle(data.article)
    } catch { setError('Failed to generate article.') }
    finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Blog Article Generator</h1>
        <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6 mb-6">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter article topic..."
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white mb-4"
          />
          {error && <p className="text-red-400 mb-4">{error}</p>}
          <button
            onClick={generateArticle}
            disabled={loading || !topic.trim()}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 text-white font-semibold py-3 rounded-lg"
          >
            {loading ? 'Generating...' : 'Generate Article'}
          </button>
        </div>
        {article && (
          <div className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
            <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{article.word_count} words</p>
            <div className="text-gray-300 whitespace-pre-wrap">{article.content}</div>
          </div>
        )}
      </div>
    </div>
  )
}

