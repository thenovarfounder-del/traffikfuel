'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [email, setEmail] = useState('')

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/login')
      } else {
        setEmail(session.user.email ?? '')
      }
    })
  }, [router])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const navLinks = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/business', label: 'Business Profile' },
    { href: '/dashboard/scrape', label: 'Business Brain' },
    { href: '/dashboard/billing', label: 'Billing' },
    { href: '/dashboard/onboarding', label: 'Onboarding' },
    { href: '/dashboard/settings', label: 'Settings' },
    { href: '/dashboard/account', label: 'Account' },
    { href: '/dashboard/data', label: 'My Data' },
  ]

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0a0a0a', color: '#fff', fontFamily: 'sans-serif' }}>
      <div style={{ width: '220px', background: '#111', display: 'flex', flexDirection: 'column', padding: '24px 0', borderRight: '1px solid #222' }}>
        <div style={{ padding: '0 24px 24px', fontSize: '20px', fontWeight: 'bold', color: '#f97316' }}>
          TraffikFuel
        </div>
        <nav style={{ flex: 1 }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'block',
                padding: '10px 24px',
                color: pathname === link.href ? '#f97316' : '#ccc',
                background: pathname === link.href ? '#1a1a1a' : 'transparent',
                textDecoration: 'none',
                fontSize: '14px',
                borderLeft: pathname === link.href ? '3px solid #f97316' : '3px solid transparent',
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div style={{ padding: '24px', borderTop: '1px solid #222' }}>
          <div style={{ fontSize: '12px', color: '#888', marginBottom: '8px' }}>{email}</div>
          <button
            onClick={handleSignOut}
            style={{ background: '#f97316', color: '#fff', border: 'none', borderRadius: '6px', padding: '8px 16px', cursor: 'pointer', fontSize: '13px', width: '100%' }}
          >
            Sign Out
          </button>
        </div>
      </div>
      <main style={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  )
}