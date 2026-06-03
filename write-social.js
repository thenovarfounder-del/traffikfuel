const fs = require("fs");
const path = require("path");

const dir = path.join("C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\blog");

const content = `// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
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
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)
  const [copiedSocial, setCopiedSocial] = useState(false)
  const [copiedSchema, setCopiedSchema] = useState(false)
  const [activeTab, setActiveTab] = useState('post')
  const [profile, setProfile] = useState(null)
  const [publishing, setPublishing] = useState(false)
  const [publishMsg, setPublishMsg] = useState('')
  const [userStatus, setUserStatus] = useState('free')
  const [blogsUsed, setBlogsUsed] = useState(0)

  useEffect(() => {
    async function loadData() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data: bp } = await supabase.from('business_profiles').select('business_name, industry, phone, website').eq('user_id', user.id).single()
      if (bp) setProfile(bp)
      const { data: userData } = await supabase.from('users').select('status').eq('id', user.id).single()
      if (userData?.status) setUserStatus(userData.status)
      try {
        const now = new Date()
        const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()
        const { count } = await supabase.from('blog_generations').select('*', { count: 'exact', head: true }).eq('user_id', user.id).gte('created_at', firstOfMonth)
        setBlogsUsed(count || 0)
      } catch (e) { setBlogsUsed(0) }
    }
    loadData()
  }, [])

  const isPaid = userStatus && userStatus !== 'free'
  const freeLimit = 3
  const freeExceeded = !isPaid && blogsUsed >= freeLimit

  const businessName = profile?.business_name || 'My Business'
  const industry = profile?.industry || 'Business'
  const city = profile?.phone || ''
  const websiteUrl = profile?.website || ''

  async function generatePost() {
    if (!topic) { setError('Please enter a topic or keyword.'); return }
    if (freeExceeded) { setError('You have used all 3 free blogs this month. Upgrade to Starter for unlimited blogs.'); return }
    setLoading(true)
    setError('')
    setPost(null)
    setActiveTab('post')
    try {
      const response = await fetch('/api/generate-blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, tone, businessName, industry, city, websiteUrl })
      })
      const data = await response.json()
      if (!data.success) { setError('Generation failed: ' + (data.error || 'unknown error')); setLoading(false); return }
      setPost(data.post)
      if (!isPaid) setBlogsUsed(prev => prev + 1)
    } catch (e) { setError('Generation failed: ' + e.message) }
    setLoading(false)
  }

  async function publishToWordPress() {
    if (!post) return
    setPublishing(true)
    setPublishMsg('')
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setPublishMsg('Not logged in.'); setPublishing(false); return }
      const wpRes = await fetch('/api/wordpress?user_id=' + user.id)
      const wpData = await wpRes.json()
      if (!wpData.connected) { setPublishMsg('No WordPress site connected. Go to Connections > WordPress to connect your site.'); setPublishing(false); return }
      const res = await fetch('/api/wordpress/publish', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ user_id: user.id, title: post.title, content: post.content, status: 'publish' }) })
      const result = await res.json()
      if (result.success) { setPublishMsg('Published! View post: ' + result.url) } else { setPublishMsg('Publish failed: ' + (result.error || 'Unknown error')) }
    } catch (e) { setPublishMsg('Publish failed: ' + e.message) }
    setPublishing(false)
  }

  function copyPost() { if (!post) return; navigator.clipboard.writeText(post.content); setCopied(true); setTimeout(() => setCopied(false), 2000) }
  function copySocial() { if (!post) return; navigator.clipboard.writeText(post.socialCaption); setCopiedSocial(true); setTimeout(() => setCopiedSocial(false), 2000) }
  function copySchema() { if (!post) return; navigator.clipboard.writeText(post.schema); setCopiedSchema(true); setTimeout(() => setCopiedSchema(false), 2000) }

  const tabStyle = (tab) => ({
    padding: '10px 20px', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, cursor: 'pointer', border: 'none',
    borderBottom: activeTab === tab ? '3px solid #E8610A' : '3px solid transparent', background: 'transparent', color: activeTab === tab ? '#E8610A' : '#888'
  })

  return (
    <main suppressHydrationWarning>

      {/* HERO - Dark */}
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '60px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px' }}>AI Blog Generator</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, margin: '0 auto 16px', maxWidth: '700px' }}>Generate a Blog Post</h1>
        <p style={{ fontSize: '17px', color: '#ccc', maxWidth: '560px', margin: '0 auto' }}>SEO-optimized and AI engine-ready. Every post ranks on Google and gets cited by ChatGPT, Perplexity, and Gemini.</p>
        {!isPaid && (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 24, background: 'rgba(232,97,10,0.12)', border: '1px solid rgba(232,97,10,0.3)', borderRadius: 8, padding: '10px 20px' }}>
            <span style={{ color: '#E8610A', fontWeight: 700, fontSize: 14, fontFamily: 'DM Sans, sans-serif' }}>{blogsUsed}/{freeLimit} free blogs used this month</span>
            {freeExceeded && <a href='/pricing' style={{ background: '#E8610A', color: '#fff', padding: '4px 14px', borderRadius: 4, fontSize: 12, fontWeight: 700, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>Upgrade</a>}
          </div>
        )}
      </section>

      {/* INPUT SECTION */}
      <section style={{ background: '#f7f7f7', padding: '40px 32px', borderBottom: '2px solid #111' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 180px', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px', color: '#111' }}>Topic or Keyword</label>
              <input type='text' placeholder='e.g. Best marketing tips for small businesses' value={topic} onChange={e => setTopic(e.target.value)} onKeyDown={e => e.key === 'Enter' && generatePost()} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }} />
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
          <button onClick={generatePost} disabled={loading || freeExceeded} style={{ width: '100%', background: freeExceeded ? '#555' : loading ? '#999' : '#E8610A', color: '#fff', padding: '16px', fontSize: '16px', fontWeight: 700, border: 'none', cursor: (loading || freeExceeded) ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            {freeExceeded ? 'Monthly limit reached \u2014 Upgrade to continue' : loading ? 'Generating \u2014 optimizing for Google, ChatGPT, Perplexity...' : 'Generate Blog Post'}
          </button>
        </div>
      </section>

      {/* OUTPUT SECTION */}
      {post && (
        <section style={{ background: '#fff', maxWidth: '900px', margin: '0 auto', padding: '0 32px 80px' }}>
          <div style={{ borderBottom: '2px solid #eee', marginBottom: '32px', paddingTop: '32px' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button onClick={() => setActiveTab('post')} style={tabStyle('post')}>Blog Post</button>
              <button onClick={() => setActiveTab('social')} style={tabStyle('social')}>Social Caption {!isPaid ? '\u{1F512}' : ''}</button>
              <button onClick={() => setActiveTab('schema')} style={tabStyle('schema')}>Schema Markup {!isPaid ? '\u{1F512}' : ''}</button>
            </div>
          </div>

          {activeTab === 'post' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ background: '#E8610A', color: '#fff', fontSize: '11px', fontWeight: 700, padding: '4px 10px', letterSpacing: '1px', textTransform: 'uppercase' }}>Generated</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888' }}>{post.wordCount} words</span>
                    <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888' }}>{post.readingTime} min read</span>
                  </div>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: 900, color: '#111', lineHeight: 1.2, margin: '0 0 10px' }}>{post.title}</h2>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.7, margin: 0, borderLeft: '3px solid #E8610A', paddingLeft: '14px' }}>{post.metaDescription}</p>
                </div>
                {isPaid ? (
                  <button onClick={copyPost} style={{ background: '#111', border: 'none', color: '#fff', padding: '10px 20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', flexShrink: 0 }}>{copied ? 'Copied!' : 'Copy HTML'}</button>
                ) : (
                  <a href='/pricing' style={{ background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', padding: '10px 20px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', flexShrink: 0, textDecoration: 'none', borderRadius: 4 }}>Upgrade to Copy</a>
                )}
              </div>

              {/* Content with blur for free users */}
              <div style={{ position: 'relative' }}>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', lineHeight: 2, color: '#222', borderTop: '1px solid #eee', paddingTop: '32px', filter: isPaid ? 'none' : 'blur(5px)', pointerEvents: isPaid ? 'auto' : 'none', maxHeight: isPaid ? 'none' : '320px', overflow: 'hidden', userSelect: isPaid ? 'auto' : 'none' }} dangerouslySetInnerHTML={{ __html: post.content }} />
                {!isPaid && (
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, #fff 50%)', paddingTop: 120, paddingBottom: 48, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
                    <div style={{ fontSize: 40 }}>\u{1F512}</div>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 700, color: '#111', margin: 0, textAlign: 'center' }}>Your blog post is ready</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#666', margin: 0, textAlign: 'center', maxWidth: 400 }}>Upgrade to Starter to copy, publish to WordPress, and generate unlimited blogs</p>
                    <a href='/pricing' style={{ background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', padding: '14px 36px', borderRadius: 8, fontWeight: 700, fontSize: 16, textDecoration: 'none', boxShadow: '0 4px 20px rgba(232,97,10,0.35)', fontFamily: 'DM Sans, sans-serif' }}>Upgrade to Starter \u2014 $47/month</a>
                    <p style={{ color: '#aaa', fontSize: 12, margin: 0, fontFamily: 'DM Sans, sans-serif' }}>Unlimited blogs \u2022 Social content \u2022 Manual publish</p>
                  </div>
                )}
              </div>

              {isPaid && post.tags && post.tags.length > 0 && (
                <div style={{ marginTop: '40px', paddingTop: '28px', borderTop: '2px solid #111' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: '#E8610A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Keywords and Tags</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {post.tags.map((tag, i) => <span key={i} style={{ background: '#f5f5f5', border: '1.5px solid #ddd', color: '#333', fontSize: '13px', fontWeight: 500, padding: '6px 14px', fontFamily: 'DM Sans, sans-serif' }}>{tag}</span>)}
                  </div>
                </div>
              )}

              {isPaid && post.relatedTopics && post.relatedTopics.length > 0 && (
                <div style={{ marginTop: '32px', paddingTop: '28px', borderTop: '1px solid #eee' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: '#111', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Related Topics to Write Next</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {post.relatedTopics.map((t, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', background: '#f9f9f9', border: '1px solid #eee', cursor: 'pointer' }} onClick={() => { setTopic(t); window.scrollTo(0, 0) }}>
                        <span style={{ color: '#E8610A', fontWeight: 700, fontSize: '16px' }}>+</span>
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#333' }}>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {isPaid && (
                <div style={{ marginTop: '40px', background: '#111', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#fff', fontWeight: 700, margin: '0 0 4px' }}>Ready to publish?</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#aaa', margin: 0 }}>Publish directly to WordPress or copy the HTML.</p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button onClick={copyPost} style={{ background: 'transparent', border: '2px solid #fff', color: '#fff', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>{copied ? 'Copied!' : 'Copy HTML'}</button>
                    <button onClick={publishToWordPress} disabled={publishing} style={{ background: publishing ? '#555' : '#E8610A', border: 'none', color: '#fff', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: publishing ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>{publishing ? 'Publishing...' : 'Publish to WordPress'}</button>
                  </div>
                </div>
              )}
              {publishMsg && <div style={{ marginTop: '16px', padding: '14px 20px', background: publishMsg.includes('Published') ? '#f0fff4' : '#fef2f2', border: '1px solid ' + (publishMsg.includes('Published') ? '#86efac' : '#fca5a5'), borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: publishMsg.includes('Published') ? '#166534' : '#dc2626' }}>{publishMsg}</div>}
            </div>
          )}

          {activeTab === 'social' && (
            <div>
              {isPaid && post.socialCaption ? (
                <div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', marginBottom: '16px' }}>Ready-to-post caption for Facebook, Instagram, and X.</p>
                  <div style={{ background: '#f9f9f9', border: '2px solid #111', padding: '28px', marginBottom: '16px' }}>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#111', lineHeight: 1.8, margin: 0 }}>{post.socialCaption}</p>
                  </div>
                  <button onClick={copySocial} style={{ background: '#E8610A', border: 'none', color: '#fff', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>{copiedSocial ? 'Copied!' : 'Copy Caption'}</button>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px 32px' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>\u{1F512}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: '#111', marginBottom: 12 }}>Social Caption is a Starter Feature</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#666', marginBottom: 24 }}>Upgrade to get ready-to-post captions for Facebook, Instagram, X, LinkedIn and TikTok.</p>
                  <a href='/pricing' style={{ background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>Upgrade to Starter \u2014 $47/month</a>
                </div>
              )}
            </div>
          )}

          {activeTab === 'schema' && (
            <div>
              {isPaid && post.schema ? (
                <div>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', marginBottom: '16px' }}>Paste this JSON-LD schema in the head of your blog post page.</p>
                  <div style={{ background: '#0d0d0d', padding: '24px', marginBottom: '16px', overflowX: 'auto' }}>
                    <pre style={{ fontFamily: 'monospace', fontSize: '13px', color: '#a8ff78', margin: 0, whiteSpace: 'pre-wrap' }}>{post.schema}</pre>
                  </div>
                  <button onClick={copySchema} style={{ background: '#111', border: 'none', color: '#fff', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>{copiedSchema ? 'Copied!' : 'Copy Schema'}</button>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '60px 32px' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>\u{1F512}</div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, color: '#111', marginBottom: 12 }}>Schema Markup is a Starter Feature</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 14, color: '#666', marginBottom: 24 }}>Upgrade to get JSON-LD schema markup that helps Google understand and rank your content.</p>
                  <a href='/pricing' style={{ background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', padding: '14px 32px', borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none', fontFamily: 'DM Sans, sans-serif' }}>Upgrade to Starter \u2014 $47/month</a>
                </div>
              )}
            </div>
          )}
        </section>
      )}
    </main>
  )
}
`;

fs.writeFileSync(path.join(dir, "page.tsx"), content);
console.log("SUCCESS - Blog Generator restored with free user locks!");