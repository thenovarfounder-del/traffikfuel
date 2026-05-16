'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function FAQPage() {
  const [loading, setLoading] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([])
  const [schema, setSchema] = useState('')
  const [copiedSchema, setCopiedSchema] = useState(false)
  const [businessName, setBusinessName] = useState('')
  const [brain, setBrain] = useState('')
  const [error, setError] = useState('')
  const [view, setView] = useState<'faqs' | 'schema'>('faqs')

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

  async function generateFAQs() {
    if (!brain) {
      setError('No business brain found. Please complete your Business Profile first.')
      return
    }
    setGenerating(true)
    setError('')
    setFaqs([])
    setSchema('')

    try {
      const res = await fetch('/api/content/faq', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ brain, businessName }),
      })

      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Generation failed')
      setFaqs(json.faqs)
      setSchema(json.schema)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setGenerating(false)
    }
  }

  async function copySchema() {
    await navigator.clipboard.writeText(schema)
    setCopiedSchema(true)
    setTimeout(() => setCopiedSchema(false), 2000)
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-white mb-1">FAQ & Structured Data Publisher</h1>
      <p className="text-gray-400 mb-6">
        Generate FAQ schema markup to appear in AI answers, Google featured snippets, and voice search results.
      </p>

      {loading ? (
        <p className="text-gray-400">Loading your business profile...</p>
      ) : (
        <>
          {businessName && (
            <div className="bg-gray-800 rounded-lg p-4 mb-6 border border-gray-700">
              <p className="text-sm text-gray-400">Generating FAQs for:</p>
              <p className="text-white font-semibold text-lg">{businessName}</p>
            </div>
          )}

          {error && (
            <div className="bg-red-900/40 border border-red-500 text-red-300 rounded-lg p-4 mb-6">
              {error}
            </div>
          )}

          <button
            onClick={generateFAQs}
            disabled={generating || !brain}
            className="bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold px-6 py-3 rounded-lg mb-6 transition-colors"
          >
            {generating ? 'Generating FAQs...' : 'Generate FAQ Schema'}
          </button>

          {faqs.length > 0 && (
            <>
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setView('faqs')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${view === 'faqs' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                >
                  FAQ Preview
                </button>
                <button
                  onClick={() => setView('schema')}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${view === 'schema' ? 'bg-orange-500 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                >
                  Schema Markup
                </button>
              </div>

              {view === 'faqs' && (
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="bg-gray-800 border border-gray-700 rounded-lg p-5">
                      <p className="text-orange-400 font-semibold mb-2">Q: {faq.question}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">A: {faq.answer}</p>
                    </div>
                  ))}
                </div>
              )}

              {view === 'schema' && (
                <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
                    <span className="text-sm text-gray-400 font-mono">FAQPage JSON-LD Schema</span>
                    <button
                      onClick={copySchema}
                      className="text-sm bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded transition-colors"
                    >
                      {copiedSchema ? '✓ Copied!' : 'Copy'}
                    </button>
                  </div>
                  <pre className="p-4 text-green-400 text-sm overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed">
                    {schema}
                  </pre>
                </div>
              )}

              <div className="mt-6 bg-blue-900/30 border border-blue-500/40 rounded-lg p-4">
                <h3 className="text-blue-300 font-semibold mb-2">How to use this schema</h3>
                <p className="text-gray-400 text-sm">
                  Paste the schema markup inside a <code className="text-orange-400">&lt;script type="application/ld+json"&gt;</code> tag
                  on your FAQ page. This makes your answers eligible for Google featured snippets, AI overviews, and voice search results.
                </p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  )
}