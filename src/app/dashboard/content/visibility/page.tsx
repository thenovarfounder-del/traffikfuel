'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function VisibilityPage() {
  const [loading, setLoading] = useState(true)
  const [checks, setChecks] = useState<any[]>([])
  const [averageScore, setAverageScore] = useState(0)
  const [businessName, setBusinessName] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  async function loadData() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    const { data: profile } = await supabase
      .from('business_profiles')
      .select('business_name')
      .eq('user_id', user.id)
      .single()

    if (profile) setBusinessName(profile.business_name || '')

    const { data: citations, error: citError } = await supabase
      .from('citation_checks')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    console.log('Visibility citations:', citations)
    console.log('Visibility error:', citError)
    console.log('Visibility user id:', user.id)

    if (citations && citations.length > 0) {
      setChecks(citations)
      setAverageScore(Math.round(citations.reduce((sum: number, c: any) => sum + c.score, 0) / citations.length))
    }
    setLoading(false)
  }

  function scoreColor(score: number) {
    if (score >= 66) return 'text-green-400'
    if (score >= 33) return 'text-yellow-400'
    return 'text-red-400'
  }

  function scoreLabel(score: number) {
    if (score >= 66) return 'Strong'
    if (score >= 33) return 'Growing'
    return 'Low'
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-2">LLM Visibility Dashboard</h1>
      <p className="text-gray-400 text-sm mb-6">
        Track how often AI engines mention {businessName || 'your business'} over time.
      </p>

      {loading ? (
        <div className="text-gray-400 text-sm">Loading...</div>
      ) : checks.length === 0 ? (
        <div className="bg-gray-800 rounded-xl p-8 text-center">
          <p className="text-white font-semibold text-lg mb-2">No citation checks yet</p>
          <p className="text-gray-400 text-sm mb-4">Run your first check in the Citation Tracker to start tracking your AI visibility.</p>
          <a href="/dashboard/content/citations" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition on inline-block">Go to Citation Tracker</a>
        </div>
      ) : (
        <div className="space-y-6">

          <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
            <p className="text-gray-300 text-sm mb-1">Overall AI Visibility Score</p>
            <p className={`text-5xl font-bold ${scoreColor(averageScore)}`}>{averageScore}%</p>
            <p className={`text-sm mt-1 ${scoreColor(averageScore)}`}>{scoreLabel(averageScore)}</p>
          </div>

          <div className="space-y-4">
            {checks.map((check: any) => (
              <div key={check.id} className="bg-gray-800 rounded-xl p-5 border border-gray-700">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-white font-semibold">{check.query}</p>
                    <p className="text-gray-400 text-xs mt-1">{new Date(check.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-2xl font-bold ${scoreColor(check.score)}`}>{check.score}%</p>
                    <p className={`text-xs ${scoreColor(check.score)}`}>{check.mention_count}/{check.total_engines} engines</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {Array.isArray(check.results) && check.results.map((r: any) => (
                    <div key={r.engine} className={`rounded-lg p-2 text-center text-xs font-semibold ${r.mentioned ? 'bg-green-900 text-green-300' : 'bg-gray-700 text-gray-400'}`}>
                      {r.engine}<br />{r.mentioned ? '✓ Mentioned' : '✗ Not mentioned'}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      )}
    </div>
  )
}