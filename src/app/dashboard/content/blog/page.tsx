'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function BlogGenerator() {
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [brain, setBrain] = useState<any>(null)

  useEffect(() => {
    const loadBrain = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return
      const { data } = await supabase
        .from('business_profiles')
        .select('brain')
        .eq('user_id', session.user.id)
        .single()
      if (data?.brain) setBrain(data.brain)
    }
    loadBrain()
  }, [])

  const generate = async () => {
    if (!topic.trim()) return
    setLoading(true)
    setResult('')
    try {
      const response = await fetch('/api/content/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, brain }),
      })
      const data = await response.json()
      setResult(data.content)
    } catch (err) {
      setResult('Error generating content. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div style={{ padding: '40px', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', color: '#fff' }}>Blog Post Generator</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>Generate SEO-optimized blog posts using your Business Brain</p>

      {brain && (
        <div style={{ background: '#1a1a1a', border: '1px solid #222', borderRadius: '8px', padding: '12px 16px', marginBottom: '24px', fontSize: '13px', color: '#aaa' }}>
          Business Brain loaded: <span style={{ color: '#f97316' }}>{brain.businessName}</span>
        </div>
      )}

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', color: '#ccc', marginBottom: '8px', fontSize: '14px' }}>Blog Topic</label>
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="e.g. 5 reasons to hire a local plumber"
          style={{ width: '100%', padding: '12px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: '#fff', fontSize: '14px' }}
        />
      </div>

      <button
        onClick={generate}
        disabled={loading || !topic.trim()}
        style={{ background: loading ? '#555' : '#f97316', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 24px', fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer', marginBottom: '32px' }}
      >
        {loading ? 'Generating...' : 'Generate Blog Post'}
      </button>

      {result && (
        <div style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ color: '#f97316', fontWeight: 'bold' }}>Generated Blog Post</span>
            <button
              onClick={() => navigator.clipboard.writeText(result)}
              style={{ background: '#333', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px' }}
            >
              Copy
            </button>
          </div>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#ddd', fontSize: '14px', lineHeight: '1.7' }}>{result}</pre>
        </div>
      )}
    </div>
  )
}