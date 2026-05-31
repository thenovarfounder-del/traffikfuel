// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

const PLATFORMS = ['All', 'Facebook', 'Instagram', 'Twitter', 'LinkedIn']
const STATUSES = ['All', 'scheduled', 'published', 'draft']

export default function ContentQueue() {
  const supabase = createClientComponentClient()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [filterPlatform, setFilterPlatform] = useState('All')
  const [filterStatus, setFilterStatus] = useState('All')
  const [selectedPost, setSelectedPost] = useState(null)
  const [deleting, setDeleting] = useState(null)
  const [publishing, setPublishing] = useState(null)

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { data, error } = await supabase
      .from('content_calendar')
      .select('*')
      .eq('user_id', user.id)
      .order('scheduled_at', { ascending: false })
    if (!error) setPosts(data || [])
    setLoading(false)
  }

  async function markPublished(id) {
    setPublishing(id)
    await supabase
      .from('content_calendar')
      .update({ status: 'published', published_at: new Date().toISOString() })
      .eq('id', id)
    await fetchPosts()
    setPublishing(null)
  }

  async function deletePost(id) {
    setDeleting(id)
    await supabase.from('content_calendar').delete().eq('id', id)
    await fetchPosts()
    setDeleting(null)
    if (selectedPost?.id === id) setSelectedPost(null)
  }

  const filtered = posts.filter(p => {
    const matchPlatform = filterPlatform === 'All' || p.platform === filterPlatform
    const matchStatus = filterStatus === 'All' || p.status === filterStatus
    return matchPlatform && matchStatus
  })

  const statusColor = (status) => {
    if (status === 'published') return '#22c55e'
    if (status === 'scheduled') return '#f97316'
    return '#94a3b8'
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', padding: '40px 32px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ marginBottom: '32px' }}>
          <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 8px 0' }}>Content Queue</h1>
          <p style={{ color: '#94a3b8', margin: 0 }}>Manage all your scheduled and published social posts</p>
        </div>

        <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <div>
            <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>PLATFORM</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {PLATFORMS.map(p => (
                <button key={p} onClick={() => setFilterPlatform(p)} style={{
                  padding: '6px 14px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: '500',
                  backgroundColor: filterPlatform === p ? '#f97316' : '#1a1a1a',
                  color: filterPlatform === p ? '#fff' : '#94a3b8'
                }}>{p}</button>
              ))}
            </div>
          </div>
          <div>
            <label style={{ fontSize: '12px', color: '#94a3b8', display: 'block', marginBottom: '6px' }}>STATUS</label>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {STATUSES.map(s => (
                <button key={s} onClick={() => setFilterStatus(s)} style={{
                  padding: '6px 14px', borderRadius: '20px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: '500',
                  backgroundColor: filterStatus === s ? '#f97316' : '#1a1a1a',
                  color: filterStatus === s ? '#fff' : '#94a3b8'
                }}>{s.charAt(0).toUpperCase() + s.slice(1)}</button>
              ))}
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#111', borderRadius: '8px', border: '1px solid #1f1f1f', marginBottom: '8px', padding: '12px 20px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 140px', gap: '12px', fontSize: '12px', color: '#94a3b8', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <span>Post</span>
          <span>Platform</span>
          <span>Status</span>
          <span>Scheduled</span>
          <span>Actions</span>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#94a3b8' }}>Loading posts...</div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#94a3b8' }}>No posts found.</div>
        ) : (
          filtered.map(post => (
            <div key={post.id} style={{ backgroundColor: '#111', borderRadius: '8px', border: '1px solid #1f1f1f', padding: '16px 20px', marginBottom: '8px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 140px', gap: '12px', alignItems: 'center' }}>
              <div>
                <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{post.title || 'Untitled Post'}</div>
                <div style={{ fontSize: '12px', color: '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px' }}>{post.content?.substring(0, 80)}...</div>
              </div>
              <div style={{ fontSize: '13px', color: '#e2e8f0' }}>{post.platform || '--'}</div>
              <div>
                <span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', backgroundColor: statusColor(post.status) + '22', color: statusColor(post.status) }}>
                  {post.status || 'draft'}
                </span>
              </div>
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>
                {post.scheduled_at ? new Date(post.scheduled_at).toLocaleDateString() : '--'}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => setSelectedPost(post)} style={{ padding: '5px 10px', borderRadius: '6px', border: '1px solid #333', backgroundColor: 'transparent', color: '#94a3b8', cursor: 'pointer', fontSize: '12px' }}>View</button>
                {post.status !== 'published' && (
                  <button onClick={() => markPublished(post.id)} style={{ padding: '5px 10px', borderRadius: '6px', border: 'none', backgroundColor: '#22c55e22', color: '#22c55e', cursor: 'pointer', fontSize: '12px' }}>
                    {publishing === post.id ? '...' : 'Publish'}
                  </button>
                )}
                <button onClick={() => deletePost(post.id)} style={{ padding: '5px 10px', borderRadius: '6px', border: 'none', backgroundColor: '#ef444422', color: '#ef4444', cursor: 'pointer', fontSize: '12px' }}>
                  {deleting === post.id ? '...' : 'Del'}
                </button>
              </div>
            </div>
          ))
        )}

        {selectedPost && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '20px' }}>
            <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '32px', maxWidth: '600px', width: '100%', maxHeight: '80vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h2 style={{ margin: 0, fontSize: '18px' }}>{selectedPost.title || 'Post Content'}</h2>
                <button onClick={() => setSelectedPost(null)} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '20px' }}>x</button>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <span style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '12px', backgroundColor: '#f9731622', color: '#f97316' }}>{selectedPost.platform}</span>
                <span style={{ padding: '4px 12px', borderRadius: '12px', fontSize: '12px', backgroundColor: statusColor(selectedPost.status) + '22', color: statusColor(selectedPost.status) }}>{selectedPost.status}</span>
              </div>
              <div style={{ backgroundColor: '#0a0a0a', borderRadius: '8px', padding: '16px', fontSize: '14px', lineHeight: '1.6', color: '#e2e8f0', whiteSpace: 'pre-wrap' }}>
                {selectedPost.content || 'No content available.'}
              </div>
              {selectedPost.post_url && (
                <a href={selectedPost.post_url} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '16px', color: '#f97316', fontSize: '13px' }}>View on WordPress</a>
              )}
              <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                {selectedPost.status !== 'published' && (
                  <button onClick={() => { markPublished(selectedPost.id); setSelectedPost(null) }} style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#22c55e', color: '#fff', cursor: 'pointer', fontWeight: '600' }}>Mark Published</button>
                )}
                <button onClick={() => { deletePost(selectedPost.id) }} style={{ padding: '10px 20px', borderRadius: '8px', border: 'none', backgroundColor: '#ef4444', color: '#fff', cursor: 'pointer', fontWeight: '600' }}>Delete</button>
                <button onClick={() => setSelectedPost(null)} style={{ padding: '10px 20px', borderRadius: '8px', border: '1px solid #333', backgroundColor: 'transparent', color: '#94a3b8', cursor: 'pointer' }}>Close</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
