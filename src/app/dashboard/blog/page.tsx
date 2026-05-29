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
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  async function generatePost() {
    if (!topic) { setError('Please enter a topic or keyword.'); return }
    setLoading(true)
    setError('')
    setPost(null)
    setSaved(false)
    try {
      const response = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic,
          tone,
          businessName: 'Traffikora',
          industry: 'Marketing Agency',
          city: 'Fort Pierce, Florida'
        })
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
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, margin: '0 auto 16px' }}>Generate a Blog Post</h1>
        <p style={{ fontSize: '17px', color: '#ccc', maxWidth: '560px', margin: '0 auto' }}>SEO-optimized and AI engine-ready. Every post is built to rank on Google and get cited by ChatGPT, Perplexity, and Gemini.</p>
      </section>
      <section style={{ background: '#fff', padding: '60px 32px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Topic or Keyword</label>
          <input type='text' placeholder='e.g. Best marketing tips for Fort Pierce businesses' value={topic} onChange={e => setTopic(e.target.value)} style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Tone</label>
          <select value={tone} onChange={e => setTone(e.target.value)} style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }}>
            <option>Professional</option>
            <option>Friendly</option>
            <option>Authoritative</option>
            <option>Conversational</option>
          </select>
        </div>
        {error && <p style={{ color: 'red', marginBottom: '16px', fontFamily: 'DM Sans, sans-serif' }}>{error}</p>}
        <button onClick={generatePost} disabled={loading} style={{ width: '100%', background: loading ? '#999' : '#E8610A', color: '#fff', padding: '18px', fontSize: '17px', fontWeight: 700, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', marginBottom: '40px' }}>
          {loading ? 'Generating your post...' : 'Generate Blog Post'}
        </button>
        {loading && (
          <div style={{ textAlign: 'center', padding: '40px', background: '#f9f9f9', border: '2px solid #eee', marginBottom: '32px' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', color: '#111', marginBottom: '8px' }}>Writing your post...</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#888' }}>Optimizing for Google, ChatGPT, Perplexity and Gemini. This takes about 15 seconds.</p>
          </div>
        )}
        {post && (
          <div style={{ border: '2.5px solid #111', borderRadius: '8px', overflow: 'hidden' }}>
            <div style={{ background: '#111', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Generated Post</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#aaa' }}>{post.wordCount} words</p>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={copyPost} style={{ background: 'transparent', border: '1.5px solid #666', color: '#fff', padding: '8px 16px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', borderRadius: '4px' }}>
                  {copied ? 'Copied!' : 'Copy HTML'}
                </button>
              </div>
            </div>
            <div style={{ padding: '24px', background: '#fafafa', borderBottom: '1.5px solid #eee' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#E8610A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>SEO Title</p>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#111', fontWeight: 700 }}>{post.title}</p>
            </div>
            <div style={{ padding: '24px', background: '#fafafa', borderBottom: '1.5px solid #eee' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, color: '#E8610A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Meta Description</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#444' }}>{post.metaDescription}</p>
            </div>
            <div style={{ padding: '32px', background: '#fff' }} dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        )}
      </section>
      <Footer />
    </main>
  )
}