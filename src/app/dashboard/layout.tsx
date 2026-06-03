// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function DashboardLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [email, setEmail] = useState('')
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.push('/login') }
      else { setEmail(session.user.email ?? '') }
    })
  }, [router])

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const isActive = (href) => pathname === href

  const linkStyle = (href) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '9px 20px',
    color: isActive(href) ? '#E8610A' : '#aaa',
    background: isActive(href) ? 'rgba(232,97,10,0.08)' : 'transparent',
    textDecoration: 'none',
    fontSize: '13px',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: isActive(href) ? 700 : 400,
    borderLeft: isActive(href) ? '3px solid #E8610A' : '3px solid transparent',
    transition: 'all 0.15s',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  })

  const sectionLabel = (text) => (
    { label: text, isSection: true }
  )

  const nav = [
    { href: '/dashboard', icon: '🏠', label: 'Dashboard' },
    { isSection: true, label: 'CONTENT' },
    { href: '/dashboard/content/blog', icon: '✍️', label: 'Blog Generator' },
    { href: '/dashboard/social', icon: '📱', label: 'Social Media' },
    { href: '/dashboard/content/queue', icon: '📋', label: 'Content Queue' },
    { isSection: true, label: 'PLATFORM' },
    { href: '/dashboard/scrape', icon: '🧠', label: 'Business Brain' },
    { href: '/dashboard/llm-engine', icon: '⚡', label: 'LLM Engine' },
    { href: '/dashboard/settings', icon: '⚙️', label: 'Business Settings' },
    { isSection: true, label: 'CONNECTIONS' },
    { href: '/dashboard/connect/google', icon: '🔵', label: 'Google' },
    { href: '/dashboard/connect/facebook', icon: '📘', label: 'Facebook' },
    { href: '/dashboard/connect/instagram', icon: '📸', label: 'Instagram' },
    { href: '/dashboard/connect/tiktok', icon: '🎵', label: 'TikTok' },
    { href: '/dashboard/connect/twitter', icon: '🐦', label: 'X / Twitter' },
    { href: '/dashboard/connect/linkedin', icon: '💼', label: 'LinkedIn' },
    { href: '/dashboard/connect/wordpress', icon: '🌐', label: 'WordPress' },
    { isSection: true, label: 'ACCOUNT' },
    { href: '/dashboard/billing', icon: '💳', label: 'Billing' },
    { href: '/dashboard/referral', icon: '🎁', label: 'Refer & Earn' },
    { href: '/dashboard/agents', icon: '🤖', label: 'AI Agents' },
    { href: '/dashboard/support', icon: '💬', label: 'Support' },
  ]

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f7f7f7' }}>

      {/* SIDEBAR */}
      <div style={{ width: collapsed ? '56px' : '220px', minHeight: '100vh', background: '#111', display: 'flex', flexDirection: 'column', borderRight: '1px solid #222', transition: 'width 0.2s', flexShrink: 0, position: 'sticky', top: 0, height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>

        {/* Logo */}
        <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid #1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          {!collapsed && <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff' }}>Traffik<span style={{ color: '#E8610A' }}>ora</span></span>}
          <button onClick={() => setCollapsed(!collapsed)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '16px', padding: '2px 4px', marginLeft: collapsed ? 'auto' : 0, marginRight: collapsed ? 'auto' : 0 }}>
            {collapsed ? '→' : '←'}
          </button>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, paddingTop: '8px' }}>
          {nav.map((item, i) => {
            if (item.isSection) {
              if (collapsed) return null
              return <div key={i} style={{ padding: '14px 20px 4px', fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase' }}>{item.label}</div>
            }
            return (
              <Link key={item.href} href={item.href} style={linkStyle(item.href)} title={collapsed ? item.label : undefined}>
                <span style={{ fontSize: '15px', flexShrink: 0 }}>{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            )
          })}
        </nav>

        {/* User footer */}
        <div style={{ padding: '16px', borderTop: '1px solid #1e1e1e', flexShrink: 0 }}>
          {!collapsed && <div style={{ fontSize: '11px', color: '#555', marginBottom: '10px', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email}</div>}
          <button onClick={handleSignOut} style={{ background: '#E8610A', color: '#fff', border: 'none', padding: collapsed ? '8px' : '8px 16px', cursor: 'pointer', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, width: '100%', borderRadius: '4px' }}>
            {collapsed ? '↩' : 'Sign Out'}
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, overflowY: 'auto', minHeight: '100vh' }}>
        {children}
      </main>

    </div>
  )
}