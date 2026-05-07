'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [email, setEmail] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        router.push('/login')
      } else {
        setEmail(user.email || '')
      }
    }
    checkAuth()
  }, [router])

  const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: '🏠' },
    { label: 'Business Profile', href: '/dashboard/business', icon: '🏢' },
    { label: 'Onboarding', href: '/dashboard/onboarding', icon: '🚀' },
    { label: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
    { label: 'Security', href: '/dashboard/security', icon: '🔒' },
    { label: 'Download My Data', href: '/dashboard/data', icon: '📥' },
    { label: 'Delete Account', href: '/dashboard/delete-account', icon: '🗑️' },
  ]

  return (
    <div style={{display: 'flex', height: '100vh', background: '#0d0d0d', color: 'white', fontFamily: 'sans-serif'}}>
      {/* Sidebar */}
      <div style={{width: '220px', background: '#111', borderRight: '1px solid #222', display: 'flex', flexDirection: 'column', padding: '24px 0'}}>
        <div style={{fontSize: '20px', fontWeight: '700', color: '#ff4400', padding: '0 20px 24px'}}>TraffikFuel</div>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} style={{
            display: 'flex', alignItems: 'center', gap: '10px',
            padding: '10px 20px', textDecoration: 'none',
            color: pathname === item.href ? 'white' : '#888',
            background: pathname === item.href ? '#1a1a1a' : 'transparent',
            borderLeft: pathname === item.href ? '3px solid #ff4400' : '3px solid transparent',
            fontSize: '14px'
          }}>
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </div>

      {/* Main content */}
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
        {/* Top bar */}
        <div style={{height: '56px', borderBottom: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 24px', background: '#111'}}>
          <span style={{fontSize: '13px', color: '#888'}}>{email}</span>
        </div>
        {/* Page content */}
        <main style={{flex: 1, overflowY: 'auto'}}>
          {children}
        </main>
      </div>
    </div>
  )
}