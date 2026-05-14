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
    { href: '/dashboard/content/blog', label: 'Blog Generator' },
    { href: '/dashboard/content/social', label: 'Social Media' },
    { href: '/dashboard/content/queue', label: 'Content Queue' },
    { href: '/dashboard/onboarding', label: 'Onboarding' },
    { href: '/dashboard/settings', label: 'Settings' },
    { href: '/dashboard/account', label: 'Account' },
    { href: '/dashboard/data', label: 'My Data' },
  ]

  return (
    <div style={{ display: 'flex', minHeight: '100vh', bac