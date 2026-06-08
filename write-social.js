const fs = require('fs');

const content = `// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { PLAN_META } from '@/lib/plans'
import Breadcrumb from '@/components/Breadcrumb'

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
    { href: '/dashboard', icon: '\ud83c\udfe0', label: 'Dashboard' },
    { isSection: true, label: 'CONTENT' },
    { href: '/dashboard/content/blog', icon: '\u270f\ufe0f', label: 'Blog Generator' },
    { href: '/dashboard/social', icon: '\ud83d\udcf1', label: 'Social Media' },
    { href: '/dashboard/content/queue', icon: '\ud83d\udccb', label: 'Content Queue' },
    { isSection: true, label: 'PLATFORM' },
    { href: '/dashboard/scrape', icon: '\ud83e\udde0', label: 'Business Brain' },
    { href: '/dashboard/llm-engine', icon: '\u26a1', label: 'LLM Engine' },
    { href: '/dashboard/settings', icon: '\u2699\ufe0f', label: 'Business Settings' },
    { isSection: true, label: 'CONNECTIONS' },
    { href: '/dashboard/connect/google', icon: '\ud83d\udd35', label: 'Google' },
    { href: '/dashboard/connect/facebook', icon: '\ud83d\udcd8', label: 'Facebook' },
    { href: '/dashboard/connect/instagram', icon: '\ud83d\udcf8', label: 'Instagram' },
    { href: '/dashboard/connect/tiktok', icon: '\ud83c\udfb5', label: 'TikTok' },
    { href: '/dashboard/connect/twitter', icon: '\ud83d\udc26', label: 'X / Twitter' },
    { href: '/dashboard/connect/linkedin', icon: '\ud83d\udcbc', label: 'LinkedIn' },
    { href: '/dashboard/connect/wordpress', icon: '\ud83c\udf10', label: 'WordPress' },
  ]

  const agencyNav = isAgencyOrEnterprise ? [
    { isSection: true, label: 'AGENCY' },
    { href: '/dashboard/agency', icon: '\ud83d\udc65', label: 'Client Management' },
    { href: '/dashboard/agency/analytics', icon: '\ud83d\udcca', label: 'Agency Analytics' },
    { href: '/dashboard/agency/settings', icon: '\ud83c\udfa8', label: 'White-Label' },
    ...(isEnterprise ? [
      { href: '/dashboard/enterprise/voice', icon: '\ud83e\udde0', label: 'AI Voice Training' },
      { href: '/dashboard/enterprise/support', icon: '\ud83d\udc64', label: 'Account Manager' },
    ] : []),
  ] : []

  const accountNav = [
    { isSection: true, label: 'ACCOUNT' },
    { href: '/dashboard/billing', icon: '\ud83d\udcb3', label: 'Billing' },
    { href: '/dashboard/referral', icon: '\ud83c\udf81', label: 'Refer & Earn' },
    { href: '/dashboard/agents', icon: '\ud83e\udd16', label: 'AI Agents' },
    { href: '/dashboard/support', icon: '\ud83d\udcac', label: 'Support' },
  ]

  const nav = [...baseNav, ...agencyNav, ...accountNav]
  const planMeta = PLAN_META[userPlan] || PLAN_META.free
  const showNudge = userPlan === 'free' || userPlan === 'trial' || userPlan === 'starter'

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f7f7f7' }}>

      {/* MOBILE TOP BAR */}
      {isMobile && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '56px', background: '#111', borderBottom: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', zIndex: 100 }}>
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff' }}>Traffik<span style={{ color: '#E8610A' }}>ora</span></span>
          <button onClick={() => setMobileNavOpen(!mobileNavOpen)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '22px', padding: '4px 8px' }}>
            {mobileNavOpen ? '\u00d7' : '\u2630'}
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
            <div style={{ fontSize: '11px', color: '#ccc', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif' }}>{email}</div>
            {showNudge && (
              <Link href="/pricing" style={{ display: 'block', textDecoration: 'none', marginBottom: '10px' }}>
                <div style={{ background: '#E8610A', borderRadius: '10px', padding: '14px', position: 'relative', overflow: 'hidden', boxShadow: '0 6px 24px rgba(232,97,10,0.6)' }}>
                  <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                  <div style={{ fontSize: '20px', marginBottom: '4px' }}>{userPlan === 'starter' ? '\u26a1' : '\ud83d\ude80'}</div>
                  <div style={{ fontSize: '13px', color: '#fff', fontWeight: 900, marginBottom: '2px', lineHeight: 1.3, position: 'relative', zIndex: 1 }}>
                    {userPlan === 'starter' ? 'AI Agents 24/7' : 'Competitors pulling ahead'}
                  </div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.85)', marginBottom: '10px', position: 'relative', zIndex: 1 }}>
                    {userPlan === 'starter' ? 'Go fully hands-off from $97/mo' : 'Automate everything from $47/mo'}
                  </div>
                  <div style={{ background: '#fff', color: '#E8610A', padding: '9px', borderRadius: '6px', fontSize: '12px', fontWeight: 900, textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    {userPlan === 'starter' ? 'Go Pro Now \u2192' : 'Unlock Now \u2192'}
                  </div>
                </div>
              </Link>
            )}
            <button onClick={handleSignOut} style={{ background: '#1a1a1a', color: '#aaa', border: '1px solid #333', padding: '10px 16px', cursor: 'pointer', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, width: '100%', borderRadius: '4px' }}>
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
              {collapsed ? '\u2192' : '\u2190'}
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
                <div style={{ fontSize: '11px', color: '#ccc', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: planMeta.color + '22', border: '1px solid ' + planMeta.color + '55', borderRadius: '20px', padding: '3px 10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: planMeta.color }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: planMeta.color, fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.06em' }}>{planMeta.label.toUpperCase()}</span>
                  </div>
                  {planMeta.upgradeHref && (
                    <Link href={planMeta.upgradeHref} style={{ fontSize: '10px', color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.04em' }}>
                      UPGRADE \u2192
                    </Link>
                  )}
                </div>
                {showNudge && (
                  <Link href="/pricing" style={{ display: 'block', textDecoration: 'none', marginBottom: '8px' }}>
                    <div style={{ background: '#E8610A', borderRadius: '10px', padding: '12px', position: 'relative', overflow: 'hidden', boxShadow: '0 6px 24px rgba(232,97,10,0.6)' }}>
                      <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                      <div style={{ fontSize: '18px', marginBottom: '4px' }}>{userPlan === 'starter' ? '\u26a1' : '\ud83d\ude80'}</div>
                      <div style={{ fontSize: '12px', color: '#fff', fontWeight: 900, marginBottom: '2px', fontFamily: 'DM Sans, sans-serif', lineHeight: 1.3, position: 'relative', zIndex: 1 }}>
                        {userPlan === 'starter' ? 'AI Agents 24/7' : 'Competitors pulling ahead'}
                      </div>
                      <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.85)', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif', position: 'relative', zIndex: 1 }}>
                        {userPlan === 'starter' ? 'Fully hands-off from $97/mo' : 'Automate everything from $47/mo'}
                      </div>
                      <div style={{ background: '#fff', color: '#E8610A', padding: '7px', borderRadius: '6px', fontSize: '11px', fontWeight: 900, textAlign: 'center', fontFamily: 'DM Sans, sans-serif', position: 'relative', zIndex: 1 }}>
                        {userPlan === 'starter' ? 'Go Pro Now \u2192' : 'Unlock Now \u2192'}
                      </div>
                    </div>
                  </Link>
                )}
              </>
            )}
            <button onClick={handleSignOut} style={{ background: '#1a1a1a', color: '#aaa', border: '1px solid #333', padding: collapsed ? '8px' : '8px 16px', cursor: 'pointer', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600, width: '100%', borderRadius: '4px' }}>
              {collapsed ? '\u21a9' : 'Sign Out'}
            </button>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, overflowY: 'auto', minHeight: '100vh', marginTop: isMobile ? '56px' : 0 }}>
        <Breadcrumb />
        {children}
      </main>

    </div>
  )
}
`;

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', content, 'utf8');
console.log('SUCCESS: layout.tsx fully rewritten with upgrade nudge');