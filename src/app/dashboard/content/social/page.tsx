'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

const PLATFORMS = ['instagram', 'facebook', 'linkedin'] as const
type Platform = typeof PLATFORMS[number]

const PLATFORM_CONFIG: Record<Platform, { label: string; color: string; bg: string; border: string; icon: React.ReactNode }> = {
  instagram: {
    label: 'Instagram',
    color: '#E1306C',
    bg: 'rgba(225,48,108,0.1)',
    border: 'rgba(225,48,108,0.3)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="#E1306C" strokeWidth="2"/>
        <circle cx="12" cy="12" r="4" stroke="#E1306C" strokeWidth="2"/>
        <circle cx="17.5" cy="6.5" r="1" fill="#E1306C"/>
      </svg>
    ),
  },
  facebook: {
    label: 'Facebook',
    color: '#1877F2',
    bg: 'rgba(24,119,242,0.1)',
    border: 'rgba(24,119,242,0.3)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#1877F2" strokeWidth="2"/>
        <path d="M13.5 8H15V5.5H13C11.3 5.5 10 6.8 10 8.5V10H8V13H10V19H13V13H15L15.5 10H13V8.5C13 8.2 13.2 8 13.5 8Z" fill="#1877F2"/>
      </svg>
    ),
  },
  linkedin: {
    label: 'LinkedIn',
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.1)',
    border: 'rgba(10,102,194,0.3)',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="4" stroke="#0A66C2" strokeWidth="2"/>
        <circle cx="7.5" cy="8" r="1.5" fill="#0A66C2"/>
        <path d="M6 11H9V18H6V11Z" fill="#0A66C2"/>
        <path d="M11 11H14V12.5C14.5 11.5 15.5 11 16.5 11C18.4 11 19 12.3 19 14V18H16V14.5C16 13.7 15.7 13 14.8 13C13.9 13 14 13.9 14 14.5V18H11V11Z" fill="#0A66C2"/>
      </svg>
    ),
  },
}

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
      await Promise.all(
        PLATFORMS.map(platform => saveToQueue(platform, newPosts[platform] || ''))
      )
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
    setApproved((a: any) => ({ ...a, [platform]: !a[platform] }))
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-2">Social Media Generator</h1>
      <p className="text-gray-400 mb-6">Generate optimized posts for Instagram, Facebook, and LinkedIn</p>

      <div className="bg-[#0f1225] rounded-lg p-4 mb-6 flex items-center gap-3">
        {business ? (
          <>
            <span className="text-green-400 font-bold text-lg">✅</span>
            <span className="text-green-400 font-semibold">Brain loaded — {business.business_name}</span>
          </>
