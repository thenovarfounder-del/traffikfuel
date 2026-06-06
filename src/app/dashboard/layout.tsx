// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { PLAN_META } from '@/lib/plans'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function DashboardLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [email, setEmail] = useState('')
  const [userPlan, setUserPlan] = useState('free')
  const [collapsed, setCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 900
      setIsMobile(mobile)
      if (mobile) setCollapsed(true)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    supabase.auth.getSession().then(async ({ data: { session } }) => {
      if (!session) { router.push('/login') }
      else {
        setEmail(session.user.email ?? '')
        const { data } = await supabase.from('users').select('status').eq('id', session.user.id).single()
        if (data?.status) setUserPlan(data.status)
      }
    })
  }, [router])

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const isActive = (href) => pathname === href
  const isAgencyOrEnterprise = userPlan === 'agency' || userPlan === 'enterprise'
  const isEnterprise = userPlan === 'enterprise'

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

  const baseNav = [
    { href: '/dashboard', icon: '🏠', label: 'Dashboard' },
    { isSection: true, label: 'CONTENT' },
    { href: '/dashboard/content/blog', icon: '✏️', label: 'Blog Generator' },
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
  ]

  const agencyNav = isAgencyOrEnterprise ? [
    { isSection: true, label: 'AGENCY' },
    { href: '/dashboard/agency', icon: '👥', label: 'Client Management' },
    { href: '/dashboard/agency/analytics', icon: '📊', label: 'Agency Analytics' },
    { href: '/dashboard/agency/settings', icon: '🎨', label: 'White-Label' },
    ...(isEnterprise ? [
      { href: '/dashboard/enterprise/voice', icon: '🧠', label: 'AI Voice Training' },
      { href: '/dashboard/enterprise/support', icon: '👤', label: 'Account Manager' },
    ] : []),
  ] : []

  const accountNav = [
    { isSection: true, label: 'ACCOUNT' },
    { href: '/dashboard/billing', icon: '💳', label: 'Billing' },
    { href: '/dashboard/referral', icon: '🎁', label: 'Refer & Earn' },
    { href: '/dashboard/agents', icon: '🤖', label: 'AI Agents' },
    { href: '/dashboard/support', icon: '💬', label: 'Support' },
  ]

  const nav = [...baseNav, ...agencyNav, ...accountNav]
  const planMeta = PLAN_META[userPlan] || PLAN_META.free

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f7f7f7' }}>

      {/* MOBILE TOP BAR */}
      {isMobile && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '56px', background: '#111', borderBottom: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', zIndex: 100 }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff' }}>Traffik<span style={{ color: '#E8610A' }}>ora</span></span>
          <button onClick={() => setMobileNavOpen(!mobileNavOpen)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '22px', padding: '4px 8px' }}>
            {mobileNavOpen ? '×' : '☰'}
          </button>
        </div>
      )}

      {/* MOBILE NAV OVERLAY */}
      {isMobile && mobileNavOpen && (
        <div style={{ position: 'fixed', top: '56px', left: 0, right: 0, bottom: 0, background: '#111', zIndex: 99, overflowY: 'auto' }}>
          <nav style={{ paddingTop: '8px' }}>
            {nav.map((item, i) => {
              if (item.isSection) return <div key={i} style={{ padding: '14px 20px 4px', fontSize: '10px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, letterSpacing: '0.12em', color: '#444', textTransform: 'uppercase' }}>{item.label}</div>
              return (
                <Link key={item.href} href={item.href} style={linkStyle(item.href)} onClick={() => setMobileNavOpen(false)}>
                  <span style={{ fontSize: '15px', flexShrink: 0 }}>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
          <div style={{ padding: '16px', borderTop: '1px solid #1e1e1e' }}>
            <div style={{ fontSize: '11px', color: '#555', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif' }}>{email}</div>
            {(userPlan === 'free' || userPlan === 'trial') && (
              <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '10px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '10px' }}>
                ⚡ Upgrade to Starter — $47/mo
              </Link>
            )}
            {userPlan === 'starter' && (
              <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '10px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '10px' }}>
                ⚡ Upgrade to Pro — $97/mo
              </Link>
            )}
            <button onClick={handleSignOut} style={{ background: '#1a1a1a', color: '#666', border: '1px solid #2a2a2a', padding: '10px 16px', cursor: 'pointer', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, width: '100%', borderRadius: '4px' }}>
              Sign Out
            </button>
          </div>
        </div>
      )}

      {/* DESKTOP SIDEBAR */}
      {!isMobile && (
        <div style={{ width: collapsed ? '56px' : '220px', minHeight: '100vh', background: '#111', display: 'flex', flexDirection: 'column', borderRight: '1px solid #222', transition: 'width 0.2s', flexShrink: 0, position: 'sticky', top: 0, height: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
          <div style={{ padding: '20px 20px 16px', borderBottom: '1px solid #1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
            {!collapsed && <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff' }}>Traffik<span style={{ color: '#E8610A' }}>ora</span></span>}
            <button onClick={() => setCollapsed(!collapsed)} style={{ background: 'none', border: 'none', color: '#666', cursor: 'pointer', fontSize: '16px', padding: '2px 4px', marginLeft: collapsed ? 'auto' : 0, marginRight: collapsed ? 'auto' : 0 }}>
              {collapsed ? '→' : '←'}
            </button>
          </div>
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
          <div style={{ padding: '16px', borderTop: '1px solid #1e1e1e', flexShrink: 0 }}>
            {!collapsed && (
              <>
                <div style={{ fontSize: '11px', color: '#555', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: planMeta.color + '22', border: '1px solid ' + planMeta.color + '55', borderRadius: '20px', padding: '3px 10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: planMeta.color }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: planMeta.color, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em' }}>{planMeta.label.toUpperCase()}</span>
                  </div>
                  {planMeta.upgradeHref && (
                    <Link href={planMeta.upgradeHref} style={{ fontSize: '10px', color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em' }}>
                      UPGRADE →
                    </Link>
                  )}
                </div>
                {(userPlan === 'free' || userPlan === 'trial') && (
                  <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '8px', boxShadow: '0 2px 10px rgba(232,97,10,0.3)' }}>
                    ⚡ Upgrade to Starter — $47/mo
                  </Link>
                )}
                {userPlan === 'starter' && (
                  <Link href="/pricing" style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '8px 12px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, textAlign: 'center', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '8px', boxShadow: '0 2px 10px rgba(232,97,10,0.3)' }}>
                    ⚡ Upgrade to Pro — $97/mo
                  </Link>
                )}
              </>
            )}
            <button onClick={handleSignOut} style={{ background: '#1a1a1a', color: '#666', border: '1px solid #2a2a2a', padding: collapsed ? '8px' : '8px 16px', cursor: 'pointer', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, width: '100%', borderRadius: '4px' }}>
              {collapsed ? '↩' : 'Sign Out'}
            </button>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, overflowY: 'auto', minHeight: '100vh', marginTop: isMobile ? '56px' : 0 }}>
        {children}
      </main>

    </div>
  )
}
