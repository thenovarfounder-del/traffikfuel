// @ts-nocheck
'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function BlogGenerator() {
  const [topic, setTopic] = useState('')
  const [tone, setTone] = useState('Professional')
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  async function generatePost() {
    if (!topic) { setError('Please enter a topic or keyword.'); return }
    setLoading(true)
    setError('')
    setPost(null)
    try {
      const response = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, tone, businessName: 'Traffikora', industry: 'Marketing Agency', city: 'Fort Pierce, Florida' })
      })
      const data = await response.json()
      if (!data.success) { setError('Generation failed: ' + (data.error || 'unknown error')); setLoading(false); return }
      setPost(data.post)
    } catch (e) {
      setError('Generation failed: ' + e.message)
    }
    setLoading(false)
  }

  function copyPost() {
    if (!post) return
    navigator.clipboard.writeText(post.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main suppressHydrationWarning>
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '60px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px' }}>AI Blog Generator</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, margin: '0 auto 16px', maxWidth: '700px' }}>Generate a Blog Post</h1>
        <p style={{ fontSize: '17px', color: '#ccc', maxWidth: '560px', margin: '0 auto' }}>SEO-optimized and AI engine-ready. Every post ranks on Google and gets cited by ChatGPT, Perplexity, and Gemini.</p>
      </section>

      <section style={{ background: '#f7f7f7', padding: '48px 32px', borderBottom: '2px solid #111' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px', color: '#111' }}>Topic or Keyword</label>
              <input type='text' placeholder='e.g. Best marketing tips for Fort Pierce small businesses' value={topic} onChange={e => setTopic(e.target.value)} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }} />
            </div>
            <div>
              <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px', color: '#111' }}>Tone</label>
              <select value={tone} onChange={e => setTone(e.target.value)} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }}>
                <option>Professional</option>
                <option>Friendly</option>
                <option>Authoritative</option>
                <option>Conversational</option>
              </select>
            </div>
          </div>
          {error && <p style={{ color: 'red', marginBottom: '12px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>{error}</p>}
          <button onClick={generatePost} disabled={loading} style={{ width: '100%', background: loading ? '#999' : '#E8610A', color: '#fff', padding: '16px', fontSize: '16px', fontWeight: 700, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            {loading ? 'Generating — this takes about 15 seconds...' : 'Generate Blog Post'}
          </button>
        </div>
      </section>

      {post && (
        <section style={{ background: '#fff', padding: '0 32px 80px', maxWidth: '900px', margin: '0 auto' }}>

          <div style={{ borderBottom: '2px solid #111', padding: '32px 0 24px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ background: '#E8610A', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', letterSpacing: '1px', textTransform: 'uppercase' }}>Generated</span>
                <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888' }}>{post.wordCount} words</span>
              </div>
              <button onClick={copyPost} style={{ background: '#111', border: 'none', color: '#fff', padding: '10px 20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                {copied ? 'Copied!' : 'Copy HTML'}
              </button>
            </div>

            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 900, color: '#111', lineHeight: 1.2, margin: '0 0 12px' }}>{post.title}</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7, margin: 0, borderLeft: '3px solid #E8610A', paddingLeft: '16px' }}>{post.metaDescription}</p>
          </div>

          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', lineHeight: 1.9, color: '#222' }} dangerouslySetInnerHTML={{ __html: post.content }} />

          {post.tags && post.tags.length > 0 && (
            <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '2px solid #111' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: '#E8610A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>Keywords & Tags</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {post.tags.map((tag, i) => (
                  <span key={i} style={{ background: '#f0f0f0', border: '1.5px solid #ddd', color: '#333', fontSize: '13px', fontWeight: 500, padding: '6px 14px', fontFamily: 'DM Sans, sans-serif' }}>{tag}</span>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginTop: '40px', background: '#111', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#fff', fontWeight: 700, margin: '0 0 4px' }}>Ready to publish?</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#aaa', margin: 0 }}>Copy the HTML and paste into your WordPress or CMS.</p>
            </div>
            <button onClick={copyPost} style={{ background: '#E8610A', border: 'none', color: '#fff', padding: '14px 28px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
              {copied ? 'Copied!' : 'Copy HTML to Publish'}
            </button>
          </div>

        </section>
      )}

      <Footer />
    </main>
  )
}