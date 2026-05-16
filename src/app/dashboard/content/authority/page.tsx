'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function AuthorityPage() {
  const [loading, setLoading] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [topic, setTopic] = useState('')
  const [article, setArticle] = useState('')
  const [title, setTitle] = useState('')
  const [copied, setCopied] = useState(false)
  const [businessName, setBusinessName] = useState('')
  const [brain, setBrain] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    loadBusiness()
  }, [])

  async function loadBusiness() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data } = await supabase
      .from('business_profiles')
      .select('business_name, brain')
      .eq('user_id', user.id)
      .single()

    if (data) {
      setBusinessName(data.business_name || '')
      setBrain(data.brain || '')
    }
    setLoading(false)
  }

  async function generateArticle() {
    if (!brain) {
      setError('No business brain found. Please complete your Business Profile first.')
      return
    }
    if (!topic.trim()) {
      setError('Please enter a topic for the article.')
      return
    }
    setGenerating(true)
    setError('')
    setArticle('')
    setTitle('')

    try {
      const res = await fetch('/api/content/authority', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brain, businessName, topic }),
      })

      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Generation failed')
      setTitle(json.title)
      setArticle(json.article)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setGenerating(false)
    }
  }

  async function copyArticle() {
    await navigator.clipboard.writeText(`${title}\n\n${article}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-1">Authority Content Generator</h1>
      <p className="text-gray-400 mb-6">
        Generate long-form SEO articles that position your business as the expert. Built for Google AND AI search engines.
      </p>

      {loading ? (
        <p className="text-gray-400">Loading your business profile...</p>
      ) : (
        <>
          {businessName && (
            <div className="bg-gray-800 rounded-lg p-4 mb-6 border border-gray-700">
              <p className="text-sm text-gray-400">Writing for:</p>
              <p className="text-white font-semibold text-lg">{businessName}</p>
            </div>
          )}

          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">Article Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. How to get a second passport through ancestry"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
            />
          </div>

          {error && (
            <div className="bg-red-900/40 border border-red-500 text-red-300 rounded-lg p-4 mb-6">
              {error}
            </div>
          )}

          <button
            onClick={generateArticle}
            disabled={generating || !brain || !topic.trim()}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg mb-6 transition-colors"
          >
            {generating ? 'Generating Article...' : 'Generate Authority Article'}
          </button>

          {article && (
            <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                <span className="text-sm text-gray-400 font-semibold">Generated Article</span>
                <button
                  onClick={copyArticle}
                  className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded transition-colors"
                >
                  {copied ? '✓ Copied!' : 'Copy Article'}
                </button>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-orange-400 mb-4">{title}</h2>
                <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                  {article}
                </div>
              </div>
            </div>
          )}

          {article && (
            <div className="mt-6 bg-blue-900/30 border border-blue-500/40 rounded-lg p-4">
              <h3 className="text-blue-300 font-semibold mb-2">What to do with this article</h3>
              <p className="text-gray-400 text-sm">
                Copy this article and publish it to your WordPress site, LinkedIn, or Medium.
                Long-form content with your business context signals expertise to both Google and AI engines like ChatGPT and Perplexity.
                WordPress auto-publishing is coming in Day 37.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}