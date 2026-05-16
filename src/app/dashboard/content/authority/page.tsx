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

  // WordPress state
  const [wpSiteUrl, setWpSiteUrl] = useState('')
  const [wpUsername, setWpUsername] = useState('')
  const [wpAppPassword, setWpAppPassword] = useState('')
  const [wpPublishing, setWpPublishing] = useState(false)
  const [wpResult, setWpResult] = useState<{ success?: boolean; postUrl?: string; editUrl?: string; error?: string } | null>(null)
  const [showWpForm, setShowWpForm] = useState(false)

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
    if (!topic.trim()) return
    setGenerating(true)
    setError('')
    setArticle('')
    setTitle('')
    setWpResult(null)

    try {
      const response = await fetch('/api/content/authority', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, businessName, brain }),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
      } else {
        setTitle(data.title || '')
        setArticle(data.article || '')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }

    setGenerating(false)
  }

  async function publishToWordPress() {
    if (!wpSiteUrl || !wpUsername || !wpAppPassword) {
      setWpResult({ error: 'Please fill in all WordPress fields.' })
      return
    }

    setWpPublishing(true)
    setWpResult(null)

    try {
      const response = await fetch('/api/content/wordpress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteUrl: wpSiteUrl,
          username: wpUsername,
          appPassword: wpAppPassword,
          title: title,
          content: article,
          status: 'draft',
        }),
      })

      const data = await response.json()

      if (data.error) {
        setWpResult({ error: data.error })
      } else {
        setWpResult({ success: true, postUrl: data.postUrl, editUrl: data.editUrl })
      }
    } catch {
      setWpResult({ error: 'Failed to connect to WordPress. Check your site URL and credentials.' })
    }

    setWpPublishing(false)
  }

  function copyArticle() {
    navigator.clipboard.writeText(`${title}\n\n${article}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-2">Authority Content Generator</h1>
      <p className="text-gray-400 mb-6">Generate long-form SEO articles that rank on Google and get cited by AI engines.</p>

      {loading ? (
        <p className="text-gray-400">Loading business profile...</p>
      ) : (
        <>
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">Article Topic</label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g. How to get a second passport legally"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={generateArticle}
              disabled={generating || !topic.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              {generating ? 'Generating Article...' : 'Generate Article'}
            </button>
          </div>

          {error && (
            <div className="bg-red-900/40 border border-red-500 text-red-300 rounded-xl p-4 mb-6">
              {error}
            </div>
          )}

          {article && (
            <div className="bg-gray-800 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-white">Generated Article</h2>
                <button
                  onClick={copyArticle}
                  className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition"
                >
                  {copied ? 'Copied!' : 'Copy Article'}
                </button>
              </div>

              {title && (
                <h3 className="text-xl font-bold text-blue-400 mb-4">{title}</h3>
              )}

              <div className="text-gray-300 whitespace-pre-wrap text-sm leading-relaxed mb-6">
                {article}
              </div>

              {/* WordPress Publish Section */}
              <div className="border-t border-gray-700 pt-6">
                <button
                  onClick={() => setShowWpForm(!showWpForm)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition mb-4"
                >
                  {showWpForm ? 'Hide WordPress Settings' : '🚀 Publish to WordPress'}
                </button>

                {showWpForm && (
                  <div className="bg-gray-900 rounded-xl p-5 mt-2">
                    <p className="text-gray-400 text-sm mb-4">Enter your WordPress site details. Use an Application Password — not your regular login password.</p>

                    <div className="grid grid-cols-1 gap-4 mb-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-1">WordPress Site URL</label>
                        <input
                          type="text"
                          value={wpSiteUrl}
                          onChange={(e) => setWpSiteUrl(e.target.value)}
                          placeholder="https://yoursite.com"
                          className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-1">WordPress Username</label>
                        <input
                          type="text"
                          value={wpUsername}
                          onChange={(e) => setWpUsername(e.target.value)}
                          placeholder="your-wp-username"
                          className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-1">Application Password</label>
                        <input
                          type="password"
                          value={wpAppPassword}
                          onChange={(e) => setWpAppPassword(e.target.value)}
                          placeholder="xxxx xxxx xxxx xxxx xxxx xxxx"
                          className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>

                    <button
                      onClick={publishToWordPress}
                      disabled={wpPublishing}
                      className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-lg transition"
                    >
                      {wpPublishing ? 'Publishing...' : 'Publish as Draft'}
                    </button>

                    {wpResult?.error && (
                      <div className="mt-4 bg-red-900/40 border border-red-500 text-red-300 rounded-lg p-4">
                        {wpResult.error}
                      </div>
                    )}

                    {wpResult?.success && (
                      <div className="mt-4 bg-green-900/40 border border-green-500 text-green-300 rounded-lg p-4">
                        <p className="font-semibold mb-2">✅ Published to WordPress as draft!</p>
                        {wpResult.editUrl && (
                          <a href={wpResult.editUrl} target="_blank" rel="noopener noreferrer" className="text-green-400 underline text-sm">
                            Edit post in WordPress →
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {!article && !generating && (
            <div className="bg-gray-800 rounded-xl p-6 text-center text-gray-500">
              <p>Enter a topic above and click Generate Article to get started.</p>
              <p className="text-sm mt-2">Long-form content with your business context signals expertise to both Google and AI engines like ChatGPT and Perplexity.</p>
            </div>
          )}
        </>
      )}
    </div>
  )
}