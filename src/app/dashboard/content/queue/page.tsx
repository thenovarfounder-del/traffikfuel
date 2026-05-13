'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

const PLATFORM_CONFIG: Record<string, { label: string; color: string; icon: React.ReactNode }> = {
  instagram: {
    label: 'Instagram',
    color: '#E1306C',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#E1306C" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="#E1306C" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#E1306C"/>
      </svg>
    ),
  },
  facebook: {
    label: 'Facebook',
    color: '#1877F2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#1877F2" strokeWidth="2"/>
        <path d="M13.5 8H15V5.5H13C11.3 5.5 10 6.8 10 8.5V10H8V13H10V19H13V13H15L15.5 10H13V8.5C13 8.2 13.2 8 13.5 8Z" fill="#1877F2"/>
      </svg>
    ),
  },
  linkedin: {
    label: 'LinkedIn',
    color: '#0A66C2',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="#0A66C2" strokeWidth="2"/>
        <circle cx="7.5" cy="8" r="1.5" fill="#0A66C2"/>
        <path d="M6 11H9V18H6V11Z" fill="#0A66C2"/>
        <path d="M11 11H14V12.5C14.5 11.5 15.5 11 16.5 11C18.4 11 19 12.3 19 14V18H16V14.5C16 13.7 15.7 13 14.8 13C13.9 13 14 13.9 14 14.5V18H11V11Z" fill="#0A66C2"/>
      </svg>
    ),
  },
}

const STATUS_CONFIG: Record<string, { label: string; bg: string; text: string }> = {
  pending: { label: 'Pending', bg: 'bg-yellow-500/20', text: 'text-yellow-400' },
  approved: { label: 'Approved', bg: 'bg-green-500/20', text: 'text-green-400' },
  rejected: { label: 'Rejected', bg: 'bg-red-500/20', text: 'text-red-400' },
  published: { label: 'Published', bg: 'bg-blue-500/20', text: 'text-blue-400' },
}

export default function ContentQueuePage() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [platformFilter, setPlatformFilter] = useState('all')
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => { loadPosts() }, [])

  async function loadPosts() {
    setLoading(true)
    const { data, error } = await supabase
      .from('social_posts')
      .select('*')
      .order('created_at', { ascending: false })
    if (!error && data) setPosts(data)
    setLoading(false)
  }

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase
      .from('social_posts')
      .update({ status })
      .eq('id', id)
    if (!error) setPosts(posts.map(p => p.id === id ? { ...p, status } : p))
  }

  async function deletePost(id: string) {
    const { error } = await supabase
      .from('social_posts')
      .delete()
      .eq('id', id)
    if (!error) setPosts(posts.filter(p => p.id !== id))
  }

  function copyPost(id: string, content: string) {
    navigator.clipboard.writeText(content)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const filtered = posts.filter(p => {
    const statusMatch = filter === 'all' || p.status === filter
    const platformMatch = platformFilter === 'all' || p.platform === platformFilter
    return statusMatch && platformMatch
  })

  const counts = {
    all: posts.length,
    pending: posts.filter(p => p.status === 'pending').length,
    approved: posts.filter(p => p.status === 'approved').length,
    rejected: posts.filter(p => p.status === 'rejected').length,
    published: posts.filter(p => p.status === 'published').length,
  }

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Content Queue</h1>
        <p className="text-gray-400">Review, approve, and manage your generated social posts</p>
      </div>

      <div className="grid grid-cols-5 gap-3 mb-6">
        {Object.entries(counts).map(([key, count]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`rounded-lg p-3 text-center transition-all border ${
              filter === key
                ? 'border-orange-500 bg-orange-500/10'
                : 'border-gray-700 bg-[#0f1225] hover:border-gray-500'
            }`}
          >
            <div className="text-2xl font-bold text-white">{count}</div>
            <div className="text-xs text-gray-400 capitalize">{key}</div>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2 mb-6">
        <span className="text-gray-400 text-sm">Platform:</span>
        {['all', 'instagram', 'facebook', 'linkedin'].map(p => (
          <button
            key={p}
            onClick={() => setPlatformFilter(p)}
            className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all capitalize ${
              platformFilter === p
                ? 'bg-orange-500 text-white'
                : 'bg-[#0f1225] text-gray-400 hover:text-white border border-gray-700'
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center text-gray-400 py-20">Loading queue...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 bg-[#0f1225] rounded-xl border border-gray-800">
          <div className="text-4xl mb-3">📭</div>
          <p className="text-gray-400">No posts in queue yet.</p>
          <p className="text-gray-600 text-sm mt-1">Generate posts from the Social Media Generator to see them here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map(post => {
            const config = PLATFORM_CONFIG[post.platform] || { label: post.platform, color: '#888', icon: null }
            const statusCfg = STATUS_CONFIG[post.status] || STATUS_CONFIG.pending
            const isCopied = copied === post.id

            return (
              <div key={post.id} className="bg-[#0f1225] rounded-xl border border-gray-800 p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {config.icon}
                    <span className="font-bold text-white">{config.label}</span>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${statusCfg.bg} ${statusCfg.text}`}>
                      {statusCfg.label}
                    </span>
                  </div>
                  <span className="text-gray-600 text-xs">
                    {new Date(post.created_at).toLocaleDateString('en-US', {
                      month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                    })}
                  </span>
                </div>

                <p className="text-gray-200 text-sm whitespace-pre-wrap leading-relaxed mb-4">
                  {post.content}
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    onClick={() => updateStatus(post.id, post.status === 'approved' ? 'pending' : 'approved')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                      post.status === 'approved'
                        ? 'bg-green-500 text-white'
                        : 'bg-[#1a1f3a] text-gray-400 hover:text-green-400 border border-gray-700'
                    }`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {post.status === 'approved' ? 'Approved' : 'Approve'}
                  </button>

                  <button
                    onClick={() => updateStatus(post.id, post.status === 'rejected' ? 'pending' : 'rejected')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                      post.status === 'rejected'
                        ? 'bg-red-500 text-white'
                        : 'bg-[#1a1f3a] text-gray-400 hover:text-red-400 border border-gray-700'
                    }`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                    {post.status === 'rejected' ? 'Rejected' : 'Reject'}
                  </button>

                  <button
                    onClick={() => copyPost(post.id, post.content)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all border ${
                      isCopied
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-[#1a1f3a] text-gray-400 hover:text-white border-gray-700'
                    }`}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M5 15H4C2.9 15 2 14.1 2 13V4C2 2.9 2.9 2 4 2H13C14.1 2 15 2.9 15 4V5" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    {isCopied ? 'Copied!' : 'Copy'}
                  </button>

                  <button
                    onClick={() => deletePost(post.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all bg-[#1a1f3a] text-gray-400 hover:text-red-400 border border-gray-700 ml-auto"
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <path d="M3 6H21M8 6V4H16V6M19 6L18 20H6L5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}