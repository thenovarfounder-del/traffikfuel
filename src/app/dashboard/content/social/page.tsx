'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function SocialPage() {
  const [business, setBusiness] = useState<any>(null)
  const [posts, setPosts] = useState<any>({})
  const [loading, setLoading] = useState(false)
  const [topic, setTopic] = useState('')
  const [isAuto, setIsAuto] = useState(true)
  const [copied, setCopied] = useState<any>({})
  const [approved, setApproved] = useState<any>({})
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  const platforms = ['instagram', 'facebook', 'linkedin']

  const cfg: any = {
    instagram: { label: 'Instagram', color: '#E1306C', bg: 'rgba(225,48,108,0.1)', border: 'rgba(225,48,108,0.3)' },
    facebook: { label: 'Facebook', color: '#1877F2', bg: 'rgba(24,119,242,0.1)', border: 'rgba(24,119,242,0.3)' },
    linkedin: { label: 'LinkedIn', color: '#0A66C2', bg: 'rgba(10,102,194,0.1)', border: 'rgba(10,102,194,0.3)' },
  }

  useEffect(() => { loadBusiness() }, [])

  async function loadBusiness() {
    const res = await fetch('/api/business/profile')
    const data = await res.json()
    if (data && !data.error) setBusiness(data)
  }

  async function saveToQueue(platform: string, content: string) {
    const { data: { user } } = await supabase.auth.getUser()
    await supabase.from('social_posts').insert({ user_id: user?.id, platform, content, status: 'pending' })
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
        platforms.map(platform =>
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
      await Promise.all(platforms.map(p => saveToQueue(p, newPosts[p] || '')))
      setSaved(true)
    } catch (e) {
      setError('Generation failed.')
    } finally {
      setLoading(false)
    }
  }

  function copyPost(platform: string) {
    if (!posts[platform]) return
    navigator.clipboard.writeText(posts[platform])
    setCopied((c: any) => ({ ...c, [platform]: true }))
    setTimeout(() => setCopied((c: any) => ({ ...c, [platform]: false })), 2000)
  }

  function toggleApprove(platform: string) {
    setApproved((a: any) => ({ ...a, [platform]: !a[platform] }))
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2">Social Media Generator</h1>
      <p className="text-gray-400 mb-6">Generate optimized posts for Instagram, Facebook, and LinkedIn</p>
      <div className="bg-[#0f1225] rounded-lg p-4 mb-6 flex items-center gap-3">
        {business
          ? <span className="text-green-400 font-semibold">Brain loaded — {business.business_name}</span>
          : <span className="text-yellow-400">Loading business brain...</span>
        }
      </div>
      <div className="bg-[#0f1225] rounded-lg p-6 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-white font-semibold">Mode:</span>
          <button onClick={() => setIsAuto(true)} className={"px-4 py-2 rounded-lg font-semibold " + (isAuto ? 'bg-orange-500 text-white' : 'bg-[#1a1f3a] text-gray-400')}>Auto</button>
          <button onClick={() => setIsAuto(false)} className={"px-4 py-2 rounded-lg font-semibold " + (!isAuto ? 'bg-orange-500 text-white' : 'bg-[#1a1f3a] text-gray-400')}>Manual</button>
        </div>
        {!isAuto && <input type="text" value={topic} onChange={e => setTopic(e.target.value)} placeholder="Enter a topic..." className="w-full bg-[#1a1f3a] text-white rounded-lg px-4 py-3 mb-4 border border-gray-700 outline-none"/>}
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        {saved && <p className="text-green-400 text-sm mb-4">Posts saved to Content Queue!</p>}
        <button onClick={generate} disabled={loading || !business} className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 text-white font-bold py-3 rounded-lg">
          {loading ? 'Generating...' : isAuto ? 'Generate All 3 Posts Automatically' : 'Generate All 3 Posts'}
        </button>
      </div>
      {posts.instagram && (
        <div className="space-y-4">
          {platforms.map(platform => (
            <div key={platform} className="rounded-xl p-5" style={{ backgroundColor: cfg[platform].bg, border: '1px solid ' + (approved[platform] ? cfg[platform