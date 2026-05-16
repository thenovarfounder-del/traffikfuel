'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function SchemaPage() {
  const [loading, setLoading] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [schema, setSchema] = useState('')
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

  async function generateSchema() {
    if (!brain) {
      setError('No business brain found. Please complete your Business Profile first.')
      return
    }
    setGenerating(true)
    setError('')
    setSchema('')

    try {
      const res = await fetch('/api/content/schema', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brain, businessName }),
      })

      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Generation failed')
      setSchema(json.schema)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setGenerating(false)
    }
  }

  async function copyToClipboard() {
    await navigator.clipboard.writeText(schema)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-1">Entity Authority Builder</h1>
      <p className="text-gray-400 mb-6">
        Generate JSON-LD schema markup so AI engines recognize your business as a trusted entity.
      </p>

      {loading ? (
        <p className="text-gray-400">Loading your business profile...</p>
      ) : (
        <>
          {businessName && (
            <div className="bg-gray-800 rounded-lg p-4 mb-6 border border-gray-700">
              <p className="text-sm text-gray-400">Generating schema for:</p>
              <p className="text-white font-semibold text-lg">{businessName}</p>
            </div>
          )}

          {error && (
            <div className="bg-red-900/40 border border-red-500 text-red-300 rounded-lg p-4 mb-6">
              {error}
            </div>
          )}

          <button
            onClick={generateSchema}
            disabled={generating || !brain}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg mb-6 transition-colors"
          >
            {generating ? 'Generating Schema...' : 'Generate Schema Markup'}
          </button>

          {schema && (
            <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                <span className="text-sm text-gray-400 font-mono">JSON-LD Schema Markup</span>
                <button
                  onClick={copyToClipboard}
                  className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded transition-colors"
                >
                  {copied ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="p-4 text-green-400 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">
                {schema}
              </pre>
            </div>
          )}

          {schema && (
            <div className="mt-6 bg-blue-900/30 border border-blue-500/40 rounded-lg p-4">
              <h3 className="text-blue-300 font-semibold mb-2">How to use this schema</h3>
              <p className="text-gray-400 text-sm">
                Paste this code inside a <code className="text-orange-400">&lt;script type="application/ld+json"&gt;</code> tag
                in the <code className="text-orange-400">&lt;head&gt;</code> section of your website. This tells Google,
                ChatGPT, Perplexity, and other AI engines exactly who your business is.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  )
}