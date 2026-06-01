const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\content\\queue\\page.tsx';

const content = `// @ts-nocheck
'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const PLATFORM_ICONS = {
  facebook: { icon: 'f', color: '#1877F2' },
  instagram: { icon: '\u{1F4F7}', color: '#E1306C' },
  twitter: { icon: 'X', color: '#000000' },
  linkedin: { icon: 'in', color: '#0A66C2' },
  tiktok: { icon: '\u{1F3B5}', color: '#010101' },
  blog: { icon: '\u{1F4DD}', color: '#E8610A' },
  google: { icon: 'G', color: '#4285F4' },
  social: { icon: '\u{1F4F1}', color: '#8B5CF6' },
}

const PLATFORMS = ['All', 'facebook', 'instagram', 'twitter', 'linkedin', 'tiktok', 'blog', 'google']
const STATUSES = ['All', 'scheduled', 'published', 'draft']

export default function ContentQueue() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterPlatform, setFilterPlatform] = useState('All')
  const [filterStatus, setFilterStatus] = useState('All')
  const [selectedPost, setSelectedPost] = useState(null)
  const [deleting, setDeleting] = useState(null)
  const [publishing, setPublishing] = useState(null)
  const [selected, setSelected] = useState([])
  const [bulkLoading, setBulkLoading] = useState(false)

  useEffect(() => { fetchPosts() }, [])

  async function fetchPosts() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setLoading(false); return }
    const { data } = await supabase.from('content_calendar').select('*').eq('user_id', user.id).order('scheduled_at', { ascending: false })
    setPosts(data || [])
    setLoading(false)
  }

  async function markPublished(id) {
    setPublishing(id)
    await supabase.from('content_calendar').update({ status: 'published', published_at: new Date().toISOString() }).eq('id', id)
    await fetchPosts()
    setPublishing(null)
  }

  async function deletePost(id) {
    setDeleting(id)
    await supabase.from('content_calendar').delete().eq('id', id)
    if (selectedPost?.id === id) setSelectedPost(null)
    await fetchPosts()
    setDeleting(null)
  }

  async function bulkApprove() {
    if (selected.length === 0) return
    setBulkLoading(true)
    for (const id of selected) {
      await supabase.from('content_calendar').update({ status: 'published', published_at: new Date().toISOString() }).eq('id', id)
    }
    setSelected([])
    await fetchPosts()
    setBulkLoading(false)
  }

  function toggleSelect(id) {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  function toggleSelectAll() {
    if (selected.length === filtered.length) {
      setSelected([])
    } else {
      setSelected(filtered.map(p => p.id))
    }
  }

  const filtered = posts.filter(p => {
    const matchPlatform = filterPlatform === 'All' || p.platform === filterPlatform
    const matchStatus = filterStatus === 'All' || p.status === filterStatus
    return matchPlatform && matchStatus
  })

  const statusColor = (s) => s === 'published' ? '#22c55e' : s === 'scheduled' ? '#f97316' : '#94a3b8'

  const PlatformBadge = ({ platform }) => {
    const p = PLATFORM_ICONS[platform?.toLowerCase()] || { icon: platform?.[0]?.toUpperCase() || '?', color: '#888' }
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: p.color + '22', border: '1px solid ' + p.color + '44', borderRadius: '6px', padding: '3px 8px' }}>
        <span style={{ fontSize: '11px', fontWeight: '700', color: p.color }}>{p.icon}</span>
        <span style={{ fontSize: '11px', color: p.color, fontWeight: '600', textTransform: 'capitalize' }}>{platform || '--'}</span>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', padding: '40px 32px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 8px 0' }}>Content Queue</h1>
            <p style={{ color: '#94a3b8', margin: 0 }}>Manage all your scheduled and published social posts</p>
          </div>
          {selected.length > 0 && (
            <button onClick={bulkApprove} disabled={bulkLoading} style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', background: '#22c55e', color: '#fff', fontWeight: '700', cursor: 'pointer', fontSize: '14px' }}>
              {bulkLoading ? 'Approving...' : 'Bulk Approve ' + selected.length + ' Posts'}
            </button>
          )}
        </div>

        <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <div>
            <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>PLATFORM</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {PLATFORMS.map(p => (
                <button key={p} onClick={() => setFilterPlatform(p)} style={{ padding: '6px 14px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: '500', backgroundColor: filterPlatform === p ? '#f97316' : '#1a1a1a', color: filterPlatform === p ? '#fff' : '#94a3b8', textTransform: 'capitalize' }}>{p}</button>
              ))}
            </div>
          </div>
          <div>
            <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>STATUS</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {STATUSES.map(s => (
                <button key={s} onClick={() => setFilterStatus(s)} style={{ padding: '6px 14px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: '500', backgroundColor: filterStatus === s ? '#f97316' : '#1a1a1a', color: filterStatus === s ? '#fff' : '#94a3b8' }}>{s.charAt(0).toUpperCase() + s.slice(1)}</button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#111', borderRadius: '8px', border: '1px solid #1f1f1f', marginBottom: '8px', padding: '12px 20px', display: 'grid', gridTemplateColumns: '40px 2fr 1fr 1fr 1fr 160px', gap: '12px', fontSize: '12px', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', alignItems: 'center' }}>
          <input type="checkbox" checked={selected.length === filtered.length && filtered.length > 0} onChange={toggleSelectAll} style={{ cursor: 'pointer', width: '16px', height: '16px' }} />
          <span>Post</span><span>Platform</span><span>Status</span><span>Scheduled</span><span>Actions</span>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#94a3b8' }}>Loading posts...</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#94a3b8' }}>No posts found.</div>
        ) : filtered.map(post => (
          <div key={post.id} style={{ backgroundColor: selected.includes(post.id) ? '#1a1a2e' : '#111', borderRadius: '8px', border: '1px solid ' + (selected.includes(post.id) ? '#E8610A44' : '#1f1f1f'), padding: '16px 20px', marginBottom: '8px', display: 'grid', gridTemplateColumns: '40px 2fr 1fr 1fr 1fr 160px', gap: '12px', alignItems: 'center' }}>
            <input type="checkbox" checked={selected.includes(post.id)} onChange={() => toggleSelect(post.id)} style={{ cursor: 'pointer', width: '16px', height: '16px' }} />
            <div>
              <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{post.title || 'Untitled Post'}</div>
              <div style={{ fontSize: '12px', color: '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{post.content?.substring(0, 80)}...</div>
            </div>
            <PlatformBadge platform={post.platform} />
            <div><span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', backgroundColor: statusColor(post.status) + '22', color: statusColor(post.status) }}>{post.status || 'draft'}</span></div>
            <div style={{ fontSize: '13px', color: '#94a3b8' }}>{post.scheduled_at ? new Date(post.scheduled_at).toLocaleDateString() : '--'}</div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button onClick={() => setSelectedPost(post)} style={{ padding: '5px 10px', borderRadius: '6px', border: '1px solid #333', backgroundColor: 'transparent', color: '#94a3b8', cursor: 'pointer', fontSize: '12px' }}>View</button>
              {post.status !== 'published' && (
                <button onClick={() => markPublished(post.id)} style={{ padding: '5px 10px', borderRadius: '6px', border: 'none', backgroundColor: '#22c55e22', color: '#22c55e', cursor: 'pointer', fontSize: '12px', fontWeight: '600' }}>{publishing === post.id ? '...' : '\u2713 Approve'}</button>
              )}
              <button onClick={() => deletePost(post.id)} style={{ padding: '5px 10px', borderRadius: '6px', border: 'none', backgroundColor: '#ef444422', color: '#ef4444', cursor: 'pointer', fontSize: '12px' }}>{deleting === post.id ? '...' : 'Del'}</button>
            </div>
          </div>
        ))}

        {selectedPost && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
            <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '32px', maxWidth: '600px', width: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0, fontSize: '18px' }}>{selectedPost.title || 'Post Content'}</h2>
                <button onClick={() => setSelectedPost(null)} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '20px' }}>x</button>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                <PlatformBadge platform={selectedPost.platform} />
                <span style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '12px', backgroundColor: statusColor(selectedPost.status) + '22', color: statusColor(selectedPost.status) }}>{selectedPost.status}</span>
              </div>
              <div style={{ backgroundColor: '#0a0a0a', borderRadius: '8px', padding: '16px', fontSize: '14px', lineHeight: '1.6', color: '#e2e8f0', whiteSpace: 'pre-wrap' }}>{selectedPost.content || 'No content available.'}</div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                {selectedPost.status !== 'published' && (
                  <button onClick={() => { markPublished(selectedPost.id); setSelectedPost(null) }} style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#22c55e', color: '#fff', cursor: 'pointer', fontWeight: '600' }}>Approve & Publish</button>
                )}
                <button onClick={() => deletePost(selectedPost.id)} style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#ef4444', color: '#fff', cursor: 'pointer', fontWeight: '600' }}>Delete</button>
                <button onClick={() => setSelectedPost(null)} style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #333', backgroundColor: 'transparent', color: '#94a3b8', cursor: 'pointer' }}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
`;

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: content queue updated with bulk approve and platform icons');