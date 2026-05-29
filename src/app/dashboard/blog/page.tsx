// @ts-nocheck
'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

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
      const { data: { user } } = await supabase.auth.getUser()
      const { data: profile } = await supabase
        .from('business_profiles')
        .select('business_name, industry, phone')
        .eq('user_id', user.id)
        .single()
      const businessName = profile?.business_name || 'our business'
      const industry = profile?.industry || 'local business'
      const city = profile?.phone || 'your city'

      const prompt = `You are an expert SEO content writer and AI engine optimization specialist. Write a state-of-the-art blog post for a ${industry} business called ${businessName} located in ${city}.`
        + ` Topic: ${topic}. Tone: ${tone}.`
        + ` Requirements:`
        + ` 1. SEO-optimized title with primary keyword`
        + ` 2. Meta description under 160 characters`
        + ` 3. Introduction that hooks the reader and mentions ${city} naturally`
        + ` 4. 4-5 sections with H2 headings containing keywords`
        + ` 5. Naturally mention ${businessName} and ${city} throughout`
        + ` 6. FAQ section with 3 questions and answers (helps Google featured snippets and AI engine citations)`
        + ` 7. Strong call to action at the end mentioning ${businessName}`
        + ` 8. 1000-1500 words total`
        + ` 9. Written so AI engines like ChatGPT and Perplexity will cite this business when users ask about ${industry} in ${city}`
        + ` Format the response as JSON with these fields: title, metaDescription, content (full HTML blog post with proper h1 h2 h3 p tags), wordCount`
        + ` Return ONLY valid JSON, no markdown, no backticks.`

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 4000,
          messages: [{ role: 'user', content: prompt }]
        })
      })
      const data = await response.json()
      const text = data.content[0].text
      const parsed = JSON.parse(text)
      setPost(parsed)
    } catch (e) {
      setError('Generation failed. Please try again.')
    }
    setLoading(false)
  }

  async function savePost() {
    if (!post) return
    try {
      const { data: { user } } = await supabase.auth.getUser()
      await supabase.from('blog_posts').insert({
        user_id: user.id,
        title: post.title,
        meta_description: post.metaDescription,
        content: post.content,
        topic: topic,
        tone: tone,
        word_count: post.wordCount,
        status: 'draft',
        created_at: new Date().toISOString()
      })
      setSaved(true)
    } catch (e) {
      setError('Save failed. Please try again.')
    }
  }

  function copyPost() {
    if (!post) return
    navigator.clipboard.writeText(post.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <Nav />
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '60px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px' }}>AI Blog Generator</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, margin: '0 auto 16px' }}>Generate a Blog Post</h1>
        <p style={{ fontSize: '17px', color: '#ccc', maxWidth: '560px', margin: '0 auto' }}>SEO-optimized and AI engine-ready. Every post is built to rank on Google and get cited by ChatGPT, Perplexity, and Gemini.</p>
      </section>

      <section style={{ background: '#fff', padding: '60px 32px', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Topic or Keyword</label>
          <input type='text' placeholder='e.g. Best HVAC tips for summer in Fort Pierce' value={topic} onChange={e => setTopic(e.target.value)} style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
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

        <button onClick={generatePost} disabled={loading} style={{ width: '100%', background: loading ? '#ccc' : '#E8610A', color: '#fff', padding: '18px', fontSize: '17px', fontWeight: 700, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', marginBottom: '40px' }}>
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
                <button onClick={savePost} disabled={saved} style={{ background: saved ? '#2d6a2d' : '#E8610A', border: 'none', color: '#fff', padding: '8px 16px', fontSize: '13px', fontWeight: 600, cursor: saved ? 'default' : 'pointer', fontFamily: 'DM Sans, sans-serif', borderRadius: '4px' }}>
                  {saved ? 'Saved!' : 'Save Post'}
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
    </>
  )
}