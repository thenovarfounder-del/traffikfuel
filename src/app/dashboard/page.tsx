// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/me')
        if (!res.ok) {
          window.location.href = '/signup'
          return
        }
        const data = await res.json()
        setUser(data.user)
      } catch {
        window.location.href = '/signup'
      } finally {
        setLoading(false)
      }
    }
    checkAuth()
  }, [])

  const stats = [
    { label: 'Posts Published', value: '0', sub: 'This month' },
    { label: 'Reviews Monitored', value: '0', sub: 'All platforms' },
    { label: 'Profile Updates', value: '0', sub: 'Google Business' },
    { label: 'AI Engine Score', value: '--', sub: 'Optimization score' },
  ]

  const tasks = [
    { title: 'Connect Google Business Profile', done: false, href: '/dashboard/connect/google' },
    { title: 'Connect Facebook', done: false, href: '/dashboard/connect/facebook' },
    { title: 'Connect Instagram', done: false, href: '/dashboard/connect/instagram' },
    { title: 'Set your business category', done: false, href: '/dashboard/settings' },
    { title: 'Review your first automated post', done: false, href: '/dashboard/posts' },
  ]

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', background: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#666' }}>Loading your dashboard...</p>
      </div>
    )
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* TOP NAV */}
      <nav style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '0 32px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 900, color: '#111', textDecoration: 'none' }}>Traffikora</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#666' }}>{user?.email || ''}</span>
          <Link href="/api/logout" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#E8610A', textDecoration: 'none', fontWeight: 600 }}>Log Out</Link>
        </div>
      </nav>

      <div style={{ display: 'flex', minHeight: 'calc(100vh - 64px)', background: '#f9f9f9' }}>

        {/* SIDEBAR */}
        <aside style={{ width: '240px', background: '#111', padding: '32px 0', flexShrink: 0 }}>
          {[
            { label: 'Dashboard', href: '/dashboard' },
            { label: 'Posts', href: '/dashboard/posts' },
            { label: 'Reviews', href: '/dashboard/reviews' },
            { label: 'Google Profile', href: '/dashboard/google' },
            { label: 'Analytics', href: '/dashboard/analytics' },
            { label: 'Connections', href: '/dashboard/connect' },
            { label: 'Settings', href: '/dashboard/settings' },
            { label: 'Billing', href: '/dashboard/billing' },
          ].map((item, i) => (
            <Link key={i} href={item.href} style={{ display: 'block', padding: '12px 28px', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: i === 0 ? '#E8610A' : '#ccc', textDecoration: 'none', fontWeight: i === 0 ? 600 : 400 }}>{item.label}</Link>
          ))}
        </aside>

        {/* MAIN CONTENT */}
        <main style={{ flex: 1, padding: '40px' }}>

          {/* HEADER */}
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111', marginBottom: '8px' }}>Welcome to Traffikora</h1>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#666' }}>Your marketing automation is almost live. Complete the steps below to get started.</p>
          </div>

          {/* STATS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {stats.map((stat, i) => (
              <div key={i} style={{ background: '#fff', border: '2.5px solid #111', padding: '24px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#666', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</p>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111', marginBottom: '4px' }}>{stat.value}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#999' }}>{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* SETUP CHECKLIST */}
          <div style={{ background: '#fff', border: '2.5px solid #111', padding: '32px', marginBottom: '32px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 900, color: '#111', marginBottom: '24px' }}>Setup Checklist</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {tasks.map((task, i) => (
                <Link key={i} href={task.href} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', border: '1.5px solid #eee', textDecoration: 'none', background: '#fff' }}>
                  <div style={{ width: '24px', height: '24px', border: '2px solid #ddd', borderRadius: '50%', flexShrink: 0, background: task.done ? '#E8610A' : '#fff' }} />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#111', fontWeight: 500 }}>{task.title}</span>
                  <span style={{ marginLeft: 'auto', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#E8610A', fontWeight: 600 }}>Start →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* UPGRADE BANNER */}
          <div style={{ background: '#111', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>Your free trial ends in 7 days.</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc' }}>Add a payment method to keep your automation running after the trial.</p>
            </div>
            <Link href="/dashboard/billing" style={{ background: '#E8610A', color: '#fff', padding: '14px 32px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, border: '2.5px solid #E8610A', whiteSpace: 'nowrap' }}>Add Payment Method</Link>
          </div>

        </main>
      </div>
    </>
  )
}
