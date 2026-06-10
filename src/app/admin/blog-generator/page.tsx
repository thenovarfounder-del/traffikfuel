// @ts-nocheck
'use client'
import { useState } from 'react'

const BATCH1 = [
  { title: 'What Is AI Marketing and Why Every Local Business Needs It in 2026', category: 'AI Marketing', keyword: 'AI marketing', relatedKeywords: 'AI marketing tools, artificial intelligence marketing, automated marketing, AI marketing platform' },
  { title: 'Marketing Automation: The Complete Guide for Local Business Owners', category: 'AI Marketing', keyword: 'marketing automation', relatedKeywords: 'automated marketing, marketing automation software, marketing automation for small business, local business marketing' },
  { title: 'Local SEO in 2026: Everything Local Businesses Need to Know', category: 'Local SEO', keyword: 'local SEO', relatedKeywords: 'local search optimization, Google local SEO, local business SEO, local SEO strategy 2026' },
  { title: 'The 10 Best AI Marketing Tools for Local Businesses in 2026', category: 'AI Marketing', keyword: 'AI marketing tools', relatedKeywords: 'best AI marketing software, AI marketing platform, marketing automation tools, AI tools for small business' },
  { title: 'Social Media Automation: How to Post to Every Platform Without Lifting a Finger', category: 'AI Marketing', keyword: 'social media automation', relatedKeywords: 'automated social media posting, social media scheduling, auto post social media, social media management automation' },
  { title: 'SEO Automation: How to Rank Higher on Google Without Doing It Manually', category: 'Local SEO', keyword: 'SEO automation', relatedKeywords: 'automated SEO, SEO automation tools, AI SEO, automated search engine optimization' },
  { title: 'AI Content Creation: How Local Businesses Are Using AI to Dominate Google', category: 'AI Marketing', keyword: 'AI content creation', relatedKeywords: 'AI generated content, automated content creation, AI blog writing, AI marketing content' },
  { title: 'Automated Marketing: The Unfair Advantage Small Businesses Now Have Over Big Corporations', category: 'AI Marketing', keyword: 'automated marketing', relatedKeywords: 'marketing automation, automated digital marketing, AI marketing automation, small business marketing automation' },
  { title: 'AI SEO: How Artificial Intelligence Is Changing How Local Businesses Rank', category: 'Local SEO', keyword: 'AI SEO', relatedKeywords: 'artificial intelligence SEO, AI search optimization, AI powered SEO, machine learning SEO' },
  { title: 'Business Automation: How to Run Your Marketing on Autopilot 24 7', category: 'AI Marketing', keyword: 'business automation', relatedKeywords: 'marketing on autopilot, automated business marketing, AI business automation, autopilot marketing' },
]

export default function BatchGenerator() {
  const [results, setResults] = useState([])
  const [running, setRunning] = useState(false)
  const [current, setCurrent] = useState('')
  const [done, setDone] = useState(0)
  const [errors, setErrors] = useState([])

  async function generateBatch() {
    setRunning(true)
    setResults([])
    setErrors([])
    setDone(0)
    for (let i = 0; i < BATCH1.length; i++) {
      const post = BATCH1[i]
      setCurrent('(' + (i+1) + '/10) ' + post.title)
      try {
        const res = await fetch('/api/blog/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post)
        })
        const data = await res.json()
        if (data.success) {
          setResults(prev => [...prev, { title: post.title, slug: data.slug, ok: true }])
        } else {
          setErrors(prev => [...prev, post.title + ': ' + data.error])
          setResults(prev => [...prev, { title: post.title, ok: false }])
        }
      } catch (e) {
        setErrors(prev => [...prev, post.title + ': ' + e.message])
        setResults(prev => [...prev, { title: post.title, ok: false }])
      }
      setDone(i + 1)
      await new Promise(r => setTimeout(r, 3000))
    }
    setRunning(false)
    setCurrent('Batch 1 complete!')
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: '40px' }}>
      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', color: '#E8610A', marginBottom: '8px' }}>Blog Batch Generator — Batch 1</h1>
      <p style={{ color: '#666', marginBottom: '8px' }}>Generating 10 highly optimized head keyword posts. 1400-1700 words each. FAQ sections. Fully SEO optimized.</p>
      <p style={{ color: '#444', fontSize: '13px', marginBottom: '32px' }}>Each post takes ~20 seconds. Total time: ~4 minutes.</p>

      {!running && done === 0 && (
        <button onClick={generateBatch} style={{ background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', border: 'none', borderRadius: '8px', padding: '16px 40px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', marginBottom: '32px' }}>
          ⚡ Generate Batch 1 — 10 Head Keyword Posts
        </button>
      )}

      {(running || done > 0) && (
        <div style={{ marginBottom: '24px' }}>
          <div style={{ background: '#111', borderRadius: '8px', padding: '20px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <span style={{ fontSize: '14px', color: '#E8610A', fontWeight: 700 }}>{done}/10 completed</span>
              <span style={{ fontSize: '14px', color: done === 10 ? '#22c55e' : '#888' }}>{done === 10 ? '✅ Done!' : 'Running...'}</span>
            </div>
            <div style={{ background: '#1a1a1a', borderRadius: '4px', height: '10px', marginBottom: '12px' }}>
              <div style={{ background: 'linear-gradient(135deg,#E8610A,#C84E06)', height: '100%', borderRadius: '4px', width: (done/10*100) + '%', transition: 'width 0.5s' }} />
            </div>
            <div style={{ fontSize: '13px', color: '#666' }}>{current}</div>
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div style={{ background: '#111', borderRadius: '8px', padding: '20px', marginBottom: '24px' }}>
          <div style={{ fontSize: '12px', color: '#555', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Results</div>
          {results.map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', borderBottom: '1px solid #1a1a1a' }}>
              <span style={{ fontSize: '16px' }}>{r.ok ? '✅' : '❌'}</span>
              <span style={{ fontSize: '13px', color: r.ok ? '#ccc' : '#ef4444', flex: 1 }}>{r.title}</span>
              {r.ok && r.slug && <a href={'/blog/' + r.slug} target='_blank' rel='noopener noreferrer' style={{ fontSize: '11px', color: '#E8610A', textDecoration: 'none', border: '1px solid #E8610A', padding: '2px 8px', borderRadius: '4px' }}>View</a>}
            </div>
          ))}
        </div>
      )}

      {errors.length > 0 && (
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '16px', marginBottom: '24px' }}>
          <div style={{ fontSize: '12px', color: '#ef4444', fontWeight: 700, marginBottom: '8px' }}>ERRORS</div>
          {errors.map((e, i) => <div key={i} style={{ fontSize: '12px', color: '#888', marginBottom: '4px' }}>{e}</div>)}
        </div>
      )}

      {done === 10 && (
        <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', padding: '24px' }}>
          <div style={{ color: '#22c55e', fontWeight: 700, fontSize: '18px', marginBottom: '12px' }}>✅ Batch 1 Complete!</div>
          <div style={{ color: '#888', fontSize: '14px', marginBottom: '16px' }}>10 highly optimized blog posts are now live. Next steps:</div>
          <div style={{ fontSize: '13px', color: '#666', lineHeight: 2 }}>
            1. Update sitemap.ts to include the new slugs<br/>
            2. Deploy the update<br/>
            3. Submit sitemap to Google Search Console<br/>
            4. Come back next week for Batch 2
          </div>
        </div>
      )}
    </div>
  )
}