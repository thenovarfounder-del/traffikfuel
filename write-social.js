const fs = require('fs');

// ============ BLOG GENERATOR ============
fs.writeFileSync('src/app/dashboard/blog/page.tsx', `// @ts-nocheck
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

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase
        .from('business_profiles')
        .select('business_name, industry, phone, website')
        .eq('user_id', user.id)
        .single()
      if (data) setProfile(data)
    }
    loadProfile()
  }, [])

  const businessName = profile?.business_name || 'My Business'
  const industry = profile?.industry || 'Business'
  const city = profile?.phone || ''
  const websiteUrl = profile?.website || ''

  async function generatePost() {
    if (!topic) { setError('Please enter a topic or keyword.'); return }
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
    } catch (e) {
      setError('Generation failed: ' + e.message)
    }
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
      if (!wpData.connected) {
        setPublishMsg('No WordPress site connected. Go to Connections > WordPress to connect your site.')
        setPublishing(false)
        return
      }
      const res = await fetch('/api/wordpress/publish', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: user.id, title: post.title, content: post.content, status: 'publish' })
      })
      const result = await res.json()
      if (result.success) {
        setPublishMsg('Published! View post: ' + result.url)
      } else {
        setPublishMsg('Publish failed: ' + (result.error || 'Unknown error'))
      }
    } catch (e) {
      setPublishMsg('Publish failed: ' + e.message)
    }
    setPublishing(false)
  }

  function copyPost() {
    if (!post) return
    navigator.clipboard.writeText(post.content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  function copySocial() {
    if (!post) return
    navigator.clipboard.writeText(post.socialCaption)
    setCopiedSocial(true)
    setTimeout(() => setCopiedSocial(false), 2000)
  }

  function copySchema() {
    if (!post) return
    navigator.clipboard.writeText(post.schema)
    setCopiedSchema(true)
    setTimeout(() => setCopiedSchema(false), 2000)
  }

  const tabStyle = (tab) => ({
    padding: '10px 20px',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '13px',
    fontWeight: 700,
    cursor: 'pointer',
    border: 'none',
    borderBottom: activeTab === tab ? '3px solid #E8610A' : '3px solid transparent',
    background: 'transparent',
    color: activeTab === tab ? '#E8610A' : '#888'
  })

  return (
    <main suppressHydrationWarning>
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '60px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px' }}>AI Blog Generator</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, margin: '0 auto 16px', maxWidth: '700px' }}>Generate a Blog Post</h1>
        <p style={{ fontSize: '17px', color: '#ccc', maxWidth: '560px', margin: '0 auto' }}>SEO-optimized and AI engine-ready. Every post ranks on Google and gets cited by ChatGPT, Perplexity, and Gemini.</p>
        {profile && (
          <p style={{ marginTop: '16px', fontSize: '13px', color: '#E8610A', fontFamily: 'DM Sans, sans-serif' }}>
            Generating for: {businessName} -- {industry} -- {city}
          </p>
        )}
      </section>

      <section style={{ background: '#f7f7f7', padding: '40px 32px', borderBottom: '2px solid #111' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 180px', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px', color: '#111' }}>Topic or Keyword</label>
              <input type='text' placeholder='e.g. Best marketing tips for small businesses' value={topic} onChange={e => setTopic(e.target.value)} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }} />
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
            {loading ? 'Generating -- optimizing for Google, ChatGPT, Perplexity...' : 'Generate Blog Post'}
          </button>
        </div>
      </section>

      {post && (
        <section style={{ background: '#fff', maxWidth: '900px', margin: '0 auto', padding: '0 32px 80px' }}>
          <div style={{ borderBottom: '2px solid #eee', marginBottom: '32px', paddingTop: '32px' }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              <button onClick={() => setActiveTab('post')} style={tabStyle('post')}>Blog Post</button>
              <button onClick={() => setActiveTab('social')} style={tabStyle('social')}>Social Caption</button>
              <button onClick={() => setActiveTab('schema')} style={tabStyle('schema')}>Schema Markup</button>
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
                <button onClick={copyPost} style={{ background: '#111', border: 'none', color: '#fff', padding: '10px 20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', flexShrink: 0 }}>
                  {copied ? 'Copied!' : 'Copy HTML'}
                </button>
              </div>

              <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', lineHeight: 2, color: '#222', borderTop: '1px solid #eee', paddingTop: '32px' }} dangerouslySetInnerHTML={{ __html: post.content }} />

              {post.tags && post.tags.length > 0 && (
                <div style={{ marginTop: '40px', paddingTop: '28px', borderTop: '2px solid #111' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, color: '#E8610A', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Keywords and Tags</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {post.tags.map((tag, i) => (
                      <span key={i} style={{ background: '#f5f5f5', border: '1.5px solid #ddd', color: '#333', fontSize: '13px', fontWeight: 500, padding: '6px 14px', fontFamily: 'DM Sans, sans-serif' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              {post.relatedTopics && post.relatedTopics.length > 0 && (
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

              <div style={{ marginTop: '40px', background: '#111', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#fff', fontWeight: 700, margin: '0 0 4px' }}>Ready to publish?</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#aaa', margin: 0 }}>Publish directly to WordPress or copy the HTML.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <button onClick={copyPost} style={{ background: 'transparent', border: '2px solid #fff', color: '#fff', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                    {copied ? 'Copied!' : 'Copy HTML'}
                  </button>
                  <button onClick={publishToWordPress} disabled={publishing} style={{ background: publishing ? '#555' : '#E8610A', border: 'none', color: '#fff', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: publishing ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                    {publishing ? 'Publishing...' : 'Publish to WordPress'}
                  </button>
                </div>
              </div>
              {publishMsg && (
                <div style={{ marginTop: '16px', padding: '14px 20px', background: publishMsg.includes('Published') ? '#f0fff4' : '#fef2f2', border: '1px solid ' + (publishMsg.includes('Published') ? '#86efac' : '#fca5a5'), borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: publishMsg.includes('Published') ? '#166534' : '#dc2626' }}>
                  {publishMsg}
                </div>
              )}
            </div>
          )}

          {activeTab === 'social' && post.socialCaption && (
            <div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', marginBottom: '16px' }}>Ready-to-post caption for Facebook, Instagram, and X.</p>
              <div style={{ background: '#f9f9f9', border: '2px solid #111', padding: '28px', marginBottom: '16px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#111', lineHeight: 1.8, margin: 0 }}>{post.socialCaption}</p>
              </div>
              <button onClick={copySocial} style={{ background: '#E8610A', border: 'none', color: '#fff', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                {copiedSocial ? 'Copied!' : 'Copy Caption'}
              </button>
            </div>
          )}

          {activeTab === 'schema' && post.schema && (
            <div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', marginBottom: '16px' }}>Paste this JSON-LD schema in the head of your blog post page.</p>
              <div style={{ background: '#0d0d0d', padding: '24px', marginBottom: '16px', overflowX: 'auto' }}>
                <pre style={{ fontFamily: 'monospace', fontSize: '13px', color: '#a8ff78', margin: 0, whiteSpace: 'pre-wrap' }}>{post.schema}</pre>
              </div>
              <button onClick={copySchema} style={{ background: '#111', border: 'none', color: '#fff', padding: '12px 24px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                {copiedSchema ? 'Copied!' : 'Copy Schema'}
              </button>
            </div>
          )}
        </section>
      )}
    </main>
  )
}
`);

// ============ SOCIAL GENERATOR ============
fs.writeFileSync('src/app/dashboard/social/page.tsx', `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function SocialGenerator() {
  const [topic, setTopic] = useState('')
  const [platform, setPlatform] = useState('All Platforms')
  const [tone, setTone] = useState('Professional')
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState(null)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState('')
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase
        .from('business_profiles')
        .select('business_name, industry, phone, website')
        .eq('user_id', user.id)
        .single()
      if (data) setProfile(data)
    }
    loadProfile()
  }, [])

  const businessName = profile?.business_name || 'My Business'
  const industry = profile?.industry || 'Business'
  const city = profile?.phone || ''
  const websiteUrl = profile?.website || ''

  async function generatePosts() {
    if (!topic) { setError('Please enter a topic or keyword.'); return }
    setLoading(true); setError(''); setPosts(null)
    try {
      const response = await fetch('/api/generate-social', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic, platform, tone, businessName, industry, city, websiteUrl })
      })
      const data = await response.json()
      if (!data.success) { setError('Generation failed: ' + (data.error || 'unknown error')); setLoading(false); return }
      setPosts(data.posts)
    } catch (e) { setError('Generation failed: ' + e.message) }
    setLoading(false)
  }

  function copyPost(text, key) {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(''), 2000)
  }

  const platformColors = { Facebook: '#1877F2', Instagram: '#E1306C', TikTok: '#010101', X: '#000000', LinkedIn: '#0A66C2' }

  return (
    <main suppressHydrationWarning>
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '60px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px' }}>AI Social Media Generator</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, margin: '0 auto 16px', maxWidth: '700px' }}>Generate Social Posts</h1>
        <p style={{ fontSize: '17px', color: '#ccc', maxWidth: '560px', margin: '0 auto' }}>One topic. Five platforms. Every post optimized for maximum reach and engagement.</p>
        {profile && (
          <p style={{ marginTop: '16px', fontSize: '13px', color: '#E8610A', fontFamily: 'DM Sans, sans-serif' }}>
            Generating for: {businessName} -- {industry} -- {city}
          </p>
        )}
      </section>
      <section style={{ background: '#f7f7f7', padding: '40px 32px', borderBottom: '2px solid #111' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px 180px', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px', color: '#111' }}>Topic or Keyword</label>
              <input type='text' placeholder='e.g. 5 marketing tips for small businesses' value={topic} onChange={e => setTopic(e.target.value)} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }} />
            </div>
            <div>
              <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px', color: '#111' }}>Platform</label>
              <select value={platform} onChange={e => setPlatform(e.target.value)} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }}>
                <option>All Platforms</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>TikTok</option>
                <option>X</option>
                <option>LinkedIn</option>
              </select>
            </div>
            <div>
              <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px', color: '#111' }}>Tone</label>
              <select value={tone} onChange={e => setTone(e.target.value)} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }}>
                <option>Professional</option>
                <option>Friendly</option>
                <option>Bold</option>
                <option>Conversational</option>
              </select>
            </div>
          </div>
          {error && <p style={{ color: 'red', marginBottom: '12px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>{error}</p>}
          <button onClick={generatePosts} disabled={loading} style={{ width: '100%', background: loading ? '#999' : '#E8610A', color: '#fff', padding: '16px', fontSize: '16px', fontWeight: 700, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            {loading ? 'Generating posts for all platforms...' : 'Generate Social Posts'}
          </button>
        </div>
      </section>
      {posts && (
        <section style={{ background: '#fff', padding: '40px 32px', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {Object.entries(posts).map(([plat, post]) => (
              <div key={plat} style={{ border: '2px solid #e8e8e8', borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ background: platformColors[plat] || '#111', padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#fff', margin: 0 }}>{plat}</p>
                  <button onClick={() => copyPost(post, plat)} style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff', padding: '6px 14px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', borderRadius: '4px' }}>
                    {copied === plat ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#222', lineHeight: 1.8, margin: 0 }}>{post}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
`);

// ============ WORDPRESS PUBLISH API ============
fs.mkdirSync('src/app/api/wordpress/publish', { recursive: true });
fs.writeFileSync('src/app/api/wordpress/publish/route.ts', `// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req: NextRequest) {
  try {
    const { user_id, title, content, status } = await req.json();

    const { data: wp, error } = await supabase
      .from('wordpress_connections')
      .select('*')
      .eq('user_id', user_id)
      .single();

    if (error || !wp) {
      return NextResponse.json({ error: 'No WordPress connection found' }, { status: 400 });
    }

    const credentials = Buffer.from(wp.username + ':' + wp.app_password).toString('base64');

    const response = await fetch(wp.site_url + '/wp-json/wp/v2/posts', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + credentials,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
        status: status || 'publish',
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: result.message || 'WordPress publish failed' }, { status: 400 });
    }

    return NextResponse.json({ success: true, url: result.link, id: result.id });
  } catch (err) {
    return NextResponse.json({ error: 'Server error: ' + err.message }, { status: 500 });
  }
}
`);

// ============ SETTINGS PAGE WITH AUTO/MANUAL TOGGLE ============
fs.writeFileSync('src/app/dashboard/settings/page.tsx', `// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function DashboardSettings() {
  const router = useRouter()
  const [businessName, setBusinessName] = useState('')
  const [industry, setIndustry] = useState('')
  const [city, setCity] = useState('')
  const [website, setWebsite] = useState('')
  const [autoMode, setAutoMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase
        .from('business_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single()
      if (data) {
        setBusinessName(data.business_name || '')
        setIndustry(data.industry || '')
        setCity(data.phone || '')
        setWebsite(data.website || '')
        setAutoMode(data.auto_mode || false)
      }
    }
    loadProfile()
  }, [])

  async function handleSubmit() {
    if (!businessName || !industry || !city) {
      setError('Please fill in Business Name, Category, and City.')
      return
    }
    setLoading(true)
    setError('')
    setSuccess('')
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setError('Not logged in.'); setLoading(false); return }
      const { error: upsertError } = await supabase
        .from('business_profiles')
        .upsert({
          user_id: user.id,
          business_name: businessName,
          industry: industry,
          website: website,
          phone: city,
          auto_mode: autoMode,
        }, { onConflict: 'user_id' })
      if (upsertError) { setError('Save failed: ' + upsertError.message); setLoading(false); return }
      setSuccess('Settings saved!')
      setTimeout(() => setSuccess(''), 3000)
    } catch (e) {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', padding: '40px 24px', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111', marginBottom: '4px' }}>Business Settings</h1>
        <p style={{ color: '#666', marginBottom: '32px', fontSize: '15px' }}>This information is used to personalize all your generated content.</p>

        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', marginBottom: '24px' }}>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#333', fontSize: '14px' }}>Business Name</label>
            <input type='text' placeholder='e.g. Randy Auto Repair' value={businessName} onChange={e => setBusinessName(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }} />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#333', fontSize: '14px' }}>Business Category</label>
            <select value={industry} onChange={e => setIndustry(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif', background: '#fff' }}>
              <option value=''>Select your category...</option>
              <option>Restaurant</option>
              <option>Dental Practice</option>
              <option>Real Estate</option>
              <option>Salon or Spa</option>
              <option>HVAC</option>
              <option>Plumbing</option>
              <option>Auto Repair</option>
              <option>Law Firm</option>
              <option>Chiropractic</option>
              <option>Marketing Agency</option>
              <option>Other</option>
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#333', fontSize: '14px' }}>City and State</label>
            <input type='text' placeholder='e.g. Tampa, FL' value={city} onChange={e => setCity(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }} />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#333', fontSize: '14px' }}>Website URL (optional)</label>
            <input type='text' placeholder='e.g. https://www.yourbusiness.com' value={website} onChange={e => setWebsite(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }} />
          </div>

          <div style={{ borderTop: '1px solid #eee', paddingTop: '24px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontWeight: '700', color: '#111', marginBottom: '4px', fontSize: '15px' }}>Publishing Mode</p>
                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>{autoMode ? 'Auto Mode -- Content publishes automatically without review' : 'Manual Mode -- You approve each post before it publishes'}</p>
              </div>
              <div
                onClick={() => setAutoMode(!autoMode)}
                style={{ width: '52px', height: '28px', borderRadius: '14px', background: autoMode ? '#E8610A' : '#ccc', cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}
              >
                <div style={{ position: 'absolute', top: '3px', left: autoMode ? '27px' : '3px', width: '22px', height: '22px', borderRadius: '50%', background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
              </div>
            </div>
          </div>

          {error && <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '12px', marginBottom: '16px', color: '#dc2626', fontSize: '14px' }}>{error}</div>}
          {success && <div style={{ background: '#f0fff4', border: '1px solid #86efac', borderRadius: '8px', padding: '12px', marginBottom: '16px', color: '#166534', fontSize: '14px' }}>{success}</div>}

          <button onClick={handleSubmit} disabled={loading} style={{ width: '100%', padding: '12px', background: loading ? '#ccc' : '#E8610A', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            {loading ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  )
}
`);

console.log('DONE -- Blog, Social, WordPress Publish API, and Settings all written');