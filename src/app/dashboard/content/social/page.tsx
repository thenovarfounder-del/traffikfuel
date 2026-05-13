'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

const PLATFORMS = ['instagram', 'facebook', 'linkedin'] as const
type Platform = typeof PLATFORMS[number]

export default function SocialMediaPage() {
  const [business, setBusiness] = useState<any>(null)
  const [topic, setTopic] = useState('')
  const [isAuto, setIsAuto] = useState(true)
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<Record<Platform, string | null>>({ instagram: null, facebook: null, linkedin: null })
  const [approved, setApproved] = useState<Record<Platform, boolean>>({ instagram: false, facebook: false, linkedin: false })
  const [copied, setCopied] = useState<Record<Platform, boolean>>({ instagram: false, facebook: false, linkedin: false })
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => { loadBusiness() }, [])

  async function loadBusiness() {
    const res = await fetch('/api/business/profile')
    const data = await res.json()
    if (data && !data.error) setBusiness(data)
  }

  async function saveToQueue(platform: Platform, content: string) {
    const { data: { user } } = await supabase.auth.getUser()
    await supabase.from('social_posts').insert({
      user_id: user?.id,
      platform,
      content,
      status: 'pending',
    })
  }

  async function generate() {
    if (!business) { setError('No business profile found.'); return }
    if (!isAuto && !topic.trim()) { setError('Please enter a topic.'); return }
    setError('')
    setSaved(false)
    setLoading(true)
    setApproved({ instagram: false, facebook: false, linkedin: false })
    try {
      const brain = typeof business.brain === 'string' ? JSON.parse(business.brain) : business.brain
      const results = await Promise.all(
        PLATFORMS.map(platform =>
          fetch('/api/content/social', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ platform, brain, topic: isAuto ? '' : topic })
          }).then(r => r.json())
        )
      )
      const newPosts = {
        instagram: results[0].post || results[0].error || 'Error',
        facebook: results[1].post || results[1].error || 'Error',
        linkedin: results[2].post || results[2].error || 'Error',
      }
      setPosts(newPosts)
      await Promise.all(PLATFORMS.map(p => saveToQueue(p, newPosts[p] || '')))
      setSaved(true)
    } catch (e) {
      setError('Generation failed.')
    } finally {
      setLoading(false)
    }
  }

  function copyPost(platform: Platform) {
    if (!posts[platform]) return
    navigator.clipboard.writeText(posts[platform]!)
    setCopied(c => ({ ...c, [platform]: true }))
    setTimeout(() => setCopied(c => ({ ...c, [platform]: false })), 2000)
  }

  function toggleApprove(platform: Platform) {
    setApproved(a => ({ ...a, [platform]: !a[platform] }))
  }

  const platformConfig: Record<Platform, { label: string; color: string; bg: string; border: string }> = {
    instagram: { label: 'Instagram', color: '#E1306C', bg: 'rgba(225,48,108,0.1)', border: 'rgba(225,48,108,0.3)' },
    facebook: { label: 'Facebook', color: '#1877F2', bg: 'rgba(24,119,242,0.1)', border: 'rgba(24,119,242,0.3)' },
    linkedin: { label: 'LinkedIn', color: '#0A66C2', bg: 'rgba(10,102,194,0.1)', border: 'rgba(10,102,194,0.3)' },
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2">Social Media Generator</h1>
      <p className="text-gray-400 mb-6">Generate optimized posts for Instagram, Facebook, and LinkedIn</p>

      <div className="bg-[#0f1225] rounded-lg p-4 mb-6 flex items-center gap-3">
        {business ? (
          <span className="text-green-400 font-semibold">Brain loaded — {business.business_name}</span>
        ) : (
          <span className="text-yellow-400">Loading business brain...</span>
        )}
      </div>

      <div className="bg-[#0f1225] rounded-lg p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-white font-semibold">Mode:</span>
          <button onClick={() => setIsAuto(true)} className={"px-4 py-2 rounded-lg font-semibold transition-all " + (isAuto ? 'bg-orange-500 text-white' : 'bg-[#1a1f3a] text-gray-400')}>Auto</button>
          <button onClick={() => setIsAuto(false)} className={"px-4 py-2 rounded-lg font-semibold transition-all " + (!isAuto ? 'bg-orange-500 text-white' : 'bg-[#1a1f3a] text-gray-400')}>Manual</button>
        </div>
        {!isAuto && (
          <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="Enter a topic..." className="w-full bg-[#1a1f3a] text-white rounded-lg px-4 py-3 mb-4 border border-gray-700 outline-none"/>
        )}
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        {saved && <p className="text-green-400 text-sm mb-4">Posts saved to Content Queue!</p>}
        <button onClick={generate} disabled={loading || !business} className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition-all">
          {loading ? 'Generating...' : isAuto ? 'Generate All 3 Posts Automatically' : 'Generate All 3 Posts'}
        </button>
      </div>

      {posts.instagram && (
        <div className="space-y-4">
          {PLATFORMS.map(platform => {
            const cfg = platformConfig[platform]
            const post = posts[platform]
            const isApproved = approved[platform]
            const isCopied = copied[platform]
            return (
              <div key={platform} className="rounded-xl p-5" style={{ backgroundColor: cfg.bg, border: '1px solid ' + (isApproved ? cfg.color : cfg.border) }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-white">{cfg.label}</span>
                  <div className="flex gap-2">
                    <button onClick={() => copyPost(platform)} className="px-3 py-1.5 rounded-lg text-sm font-semibold" style={{ backgroundColor: isCopied ? '#16a34a' : '#1a1f3a', color: isCopied ? '#fff' : '#9ca3af', border: '1px solid #374151' }}>
                      {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                    <button onClick={() => toggleApprove(platform)} className="px-3 py-1.5 rounded-lg text-sm font-semibold" style={{ backgroundColor: isApproved ? cfg.color : '#1a1f3a', color: isApproved ? '#fff' : '#9ca3af', border: '1px solid #374151' }}>
                      {isApproved ? 'Approved' : 'Approve'}
                    </button>
                  </div>
                </div>
                <p className="text-gray-200 text-sm whitespace-pre-wrap leading-relaxed">{post}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
