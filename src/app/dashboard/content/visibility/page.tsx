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
    const { data: citations } = await supabase
      .from('citation_checks')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
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

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-2">LLM Visibility Dashboard</h1>
      <p className="text-gray-400 mb-6">Track how often AI engines mention {businessName || 'your business'} over time.</p>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : checks.length === 0 ? (
        <div className="bg-gray-800 rounded-xl p-8 text-center">
          <p className="text-white font-semibold text-lg mb-2">No citation checks yet</p>
          <p className="text-gray-400 text-sm mb-4">Run your first check in the Citation Tracker to start tracking your AI visibility.</p>
          <a href="/dashboard/content/citations" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition inline-block">Go to Citation Tracker</a>
        </div>
      ) : (
        <div>
          <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700">
            <p className="text-gray-300 text-sm mb-1">Overall AI Visibility Score</p>
            <p className={"text-6xl font-bold " + scoreColor(averageScore)}>{averageScore}%</p>
            <p className="text-gray-400 text-sm mt-2">{checks.length} checks run across 4 AI engines</p>
            <a href="/dashboard/content/citations" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition">Run New Check</a>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 mb-6">
            <h2 className="text-lg font-semibold text-white mb-4">Check History</h2>
            <div className="space-y-3">
              {checks.map((check) => (
                <div key={check.id} className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-white text-sm font-medium truncate flex-1 mr-4">{check.query}</p>
                    <span className={"text-2xl font-bold " + scoreColor(check.score)}>{check.score}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
                    <div
                      className={"h-2 rounded-full " + (check.score >= 66 ? 'bg-green-500' : check.score >= 33 ? 'bg-yellow-500' : 'bg-red-500')}
                      style={{ width: check.score + '%' }}
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {check.results && check.results.map((r: any) => (
                      <span key={r.engine} className={"text-xs px-2 py-1 rounded-full font-medium " + (r.mentioned ? 'bg-green-900/60 text-green-400' : 'bg-gray-700 text-gray-500')}>
                        {r.mentioned ? '✅' : '❌'} {r.engine}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-white mb-3">How to Improve Your Score</h2>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✍️ Publish more Authority Content articles targeting your key topics</li>
              <li>📋 Add Schema Markup and FAQ Schema to your website</li>
              <li>🔗 Get mentioned on authoritative sites in your niche</li>
              <li>🔄 Run citation checks weekly to track your progress</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}