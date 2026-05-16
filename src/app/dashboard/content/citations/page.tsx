'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface CitationResult {
  engine: string
  response: string
  mentioned: boolean
}

interface CheckResult {
  query: string
  businessName: string
  results: CitationResult[]
  mentionCount: number
  score: number
}

export default function CitationsPage() {
  const [loading, setLoading] = useState(false)
  const [checking, setChecking] = useState(false)
  const [query, setQuery] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [checkResult, setCheckResult] = useState<CheckResult | null>(null)
  const [history, setHistory] = useState<CheckResult[]>([])
  const [error, setError] = useState('')
  const [expandedEngine, setExpandedEngine] = useState<string | null>(null)

  useEffect(() => {
    loadBusiness()
  }, [])

  async function loadBusiness() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data } = await supabase
      .from('business_profiles')
      .select('business_name')
      .eq('user_id', user.id)
      .single()

    if (data) {
      setBusinessName(data.business_name || '')
    }
    setLoading(false)
  }

  async function runCheck() {
    if (!query.trim() || !businessName.trim()) return
    setChecking(true)
    setError('')
    setCheckResult(null)
    setExpandedEngine(null)

    try {
      const response = await fetch('/api/content/citations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, businessName }),
      })

      const data = await response.json()

      if (data.error) {
        setError(data.error)
      } else {
        setCheckResult(data)
        setHistory((prev) => [data, ...prev].slice(0, 10))
      }
    } catch {
      setError('Something went wrong. Please try again.')
    }

    setChecking(false)
  }

  function scoreColor(score: number) {
    if (score >= 66) return 'text-green-400'
    if (score >= 33) return 'text-yellow-400'
    return 'text-red-400'
  }

  function scoreBg(score: number) {
    if (score >= 66) return 'bg-green-900/40 border-green-500'
    if (score >= 33) return 'bg-yellow-900/40 border-yellow-500'
    return 'bg-red-900/40 border-red-500'
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-2">AI Citation Tracker</h1>
      <p className="text-gray-400 mb-6">
        Check if AI engines like ChatGPT, Gemini, and Perplexity mention your business when answering relevant questions.
      </p>

      {loading ? (
        <p className="text-gray-400">Loading business profile...</p>
      ) : (
        <>
          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Business Name Being Tracked
            </label>
            <input
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="block text-sm font-medium text-gray-300 mb-2">
              Query to Test
            </label>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Who are the best second passport consultants?"
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={runCheck}
              disabled={checking || !query.trim() || !businessName.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              {checking ? 'Checking AI Engines...' : 'Run Citation Check'}
            </button>
          </div>

          {error && (
            <div className="bg-red-900/40 border border-red-500 text-red-300 rounded-xl p-4 mb-6">
              {error}
            </div>
          )}

          {checkResult && (
            <div className="mb-6">
              <div className={`border rounded-xl p-6 mb-4 ${scoreBg(checkResult.score)}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm mb-1">AI Visibility Score</p>
                    <p className={`text-5xl font-bold ${scoreColor(checkResult.score)}`}>
                      {checkResult.score}%
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      Mentioned in {checkResult.mentionCount} of {checkResult.results.length} AI engines
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400 text-sm">Query tested:</p>
                    <p className="text-white text-sm font-medium max-w-xs">{checkResult.query}</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {checkResult.results.map((result) => (
                  <div
                    key={result.engine}
                    className="bg-gray-800 rounded-xl p-5"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-white font-semibold">{result.engine}</span>
                        {result.mentioned ? (
                          <span className="bg-green-900/60 text-green-400 text-xs font-semibold px-3 py-1 rounded-full">
                            ✅ Mentioned
                          </span>
                        ) : (
                          <span className="bg-red-900/60 text-red-400 text-xs font-semibold px-3 py-1 rounded-full">
                            ❌ Not Mentioned
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => setExpandedEngine(expandedEngine === result.engine ? null : result.engine)}
                        className="text-sm text-blue-400 hover:text-blue-300 transition"
                      >
                        {expandedEngine === result.engine ? 'Hide Response' : 'View Response'}
                      </button>
                    </div>

                    {expandedEngine === result.engine && (
                      <div className="bg-gray-900 rounded-lg p-4 text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                        {result.response}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {history.length > 1 && (
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-4">Recent Checks</h2>
              <div className="space-y-3">
                {history.slice(1).map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-700 rounded-lg px-4 py-3">
                    <p className="text-gray-300 text-sm truncate max-w-xs">{item.query}</p>
                    <span className={`font-bold text-sm ${scoreColor(item.score)}`}>
                      {item.score}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!checkResult && !checking && (
            <div className="bg-gray-800 rounded-xl p-6 text-center text-gray-500">
              <p>Enter a query above and click Run Citation Check.</p>
              <p className="text-sm mt-2">
                Test questions your potential clients are asking AI engines right now.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}