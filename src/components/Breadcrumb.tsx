// @ts-nocheck
'use client'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'

const LABELS = {
  'dashboard': 'Dashboard',
  'content': 'Dashboard',
  'blog': 'Blog Generator',
  'queue': 'Content Queue',
  'social': 'Social Media',
  'publish': 'One-Push Publish',
  'calendar': 'Content Calendar',
  'scrape': 'Business Brain',
  'llm-engine': 'LLM Engine',
  'settings': 'Business Settings',
  'billing': 'Billing',
  'referral': 'Refer & Earn',
  'agents': 'AI Agents',
  'support': 'Support',
  'agency': 'Agency',
  'analytics': 'Analytics',
  'connect': 'Dashboard',
  'google': 'Google',
  'facebook': 'Facebook',
  'instagram': 'Instagram',
  'tiktok': 'TikTok',
  'twitter': 'Connections',
  'linkedin': 'LinkedIn',
  'wordpress': 'WordPress',
  'enterprise': 'Enterprise',
  'voice': 'AI Voice Training',
  'white-label': 'White-Label',
}

export default function Breadcrumb() {
  const pathname = usePathname()
  const router = useRouter()
  const segments = pathname.split('/').filter(Boolean)
  const isDashboardHome = pathname === '/dashboard'

  if (isDashboardHome) return null

  const allCrumbs = segments.map((seg, i) => ({
    label: LABELS[seg] || seg.charAt(0).toUpperCase() + seg.slice(1),
    href: '/' + segments.slice(0, i + 1).join('/'),
    isLast: i === segments.length - 1
  }))
  // Remove duplicate labels (e.g. Dashboard > Dashboard)
  const crumbs = allCrumbs.filter((crumb, i) => {
    if (i === 0) return true
    return crumb.label !== allCrumbs[i - 1].label
  })

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 32px', background: '#0d0d0d', borderBottom: '1px solid #1a1a1a', flexWrap: 'wrap', gap: '8px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
        {/* Back button */}
        <button onClick={() => router.back()}
          style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '6px', padding: '4px 10px', color: '#aaa', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', marginRight: '8px' }}>
          ← Back
        </button>
        {/* Breadcrumbs */}
        {crumbs.map((crumb, i) => (
          <span key={crumb.href} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {i > 0 && <span style={{ color: '#333', fontSize: '12px' }}>/</span>}
            {crumb.isLast ? (
              <span style={{ fontSize: '12px', color: '#E8610A', fontWeight: 700, fontFamily: 'DM Sans, sans-serif' }}>{crumb.label}</span>
            ) : (
              <Link href={crumb.href} style={{ fontSize: '12px', color: '#666', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = '#666'}>
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </div>
      {/* Home link */}
      <a href="https://www.traffikora.com" target="_blank" rel="noopener noreferrer"
        style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#444', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
        onMouseEnter={e => e.currentTarget.style.color = '#E8610A'}
        onMouseLeave={e => e.currentTarget.style.color = '#444'}>
        <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: '12px' }}>Traffik<span style={{ color: '#E8610A' }}>ora</span></span>
        <span>↗</span>
      </a>
    </div>
  )
}
