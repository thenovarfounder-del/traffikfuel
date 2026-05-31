// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      const { supabase } = await import('@/lib/supabase')
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) { window.location.href = '/login'; return }
      setUser(session.user)
      setLoading(false)
    }
    checkAuth()
  }, [])

  if (loading) return <div style={{ padding: '40px', fontFamily: 'DM Sans, sans-serif', color: '#666' }}>Loading...</div>

  const cards = [
    { title: 'Blog Generator', desc: 'Generate SEO-optimized blog posts with one click. Ranks on Google and gets cited by ChatGPT.', href: '/dashboard/blog', btn: 'Generate Post', color: '#E8610A' },
    { title: 'Business Brain', desc: 'Enter your website URL and AI builds your complete marketing profile automatically.', href: '/dashboard/scrape', btn: 'Build Brain', color: '#fff' },
    { title: 'Business Settings', desc: 'Set up your business name, category, city and website.', href: '/dashboard/settings', btn: 'Go to Settings', color: '#fff' },
    { title: 'Connect Google', desc: 'Link your Google Business Profile to track ratings, reviews and visibility.', href: '/dashboard/connect/google', btn: 'Connect', color: '#4285F4' },
    { title: 'Connect Facebook', desc: 'Link your Facebook Page to track reach, engagement and follower data.', href: '/dashboard/connect/facebook', btn: 'Connect', color: '#1877F2' },
    { title: 'Connect Instagram', desc: 'Link your Instagram Business account to track follower count and reach.', href: '/dashboard/connect/instagram', btn: 'Connect', color: '#E1306C' },
    { title: 'Connect TikTok', desc: 'Link your TikTok account to auto-publish videos and track performance.', href: '/dashboard/connect/tiktok', btn: 'Connect', color: '#010101' },
    { title: 'Connect X / Twitter', desc: 'Link your X account to publish posts and track engagement.', href: '/dashboard/connect/twitter', btn: 'Connect', color: '#fff' },
    { title: 'Connect LinkedIn', desc: 'Link your LinkedIn page to publish content and grow your professional network.', href: '/dashboard/connect/linkedin', btn: 'Connect', color: '#0A66C2' },
    { title: 'Connect WordPress', desc: 'Link your WordPress site so Traffikora can publish blog posts automatically.', href: '/dashboard/connect/wordpress', btn: 'Connect', color: '#21759B' },
    { title: 'Billing', desc: 'Manage your subscription, view invoices, and update payment details.', href: '/dashboard/billing', btn: 'View Billing', color: '#fff' },
    { title: 'Support', desc: 'Need help? Our team is standing by.', href: '/support', btn: 'Get Help', color: '#fff' },
  ]

  return (
    <main style={{ background: '#f7f7f7', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ background: '#111', padding: '40px 40px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '8px' }}>Dashboard</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#fff', marginBottom: '6px' }}>Welcome back.</h1>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#888' }}>{user?.email}</p>
      </div>

      {/* Cards */}
      <div style={{ padding: '32px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' }}>
          {cards.map((card, i) => (
            <div key={i} style={{ background: '#0a0a0a', border: '2px solid #e8e8e8', padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff', margin: 0 }}>{card.title}</h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#666', lineHeight: 1.6, margin: 0, flex: 1 }}>{card.desc}</p>
              <Link href={card.href} style={{ background: card.color, color: '#fff', padding: '10px 18px', textDecoration: 'none', fontSize: '13px', fontWeight: 700, display: 'inline-block', fontFamily: 'DM Sans, sans-serif', marginTop: '4px', alignSelf: 'flex-start' }}>
                {card.btn}
              </Link>
            </div>
          ))}
        </div>
      </div>

    </main>
  )
}