'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  async function handleSignOut() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/dashboard/business', label: 'Business Profile' },
    { href: '/dashboard/scrape', label: 'Business Brain' },
    { href: '/dashboard/billing', label: 'Billing' },
    { href: '/dashboard/content/blog', label: 'Blog Generator' },
    { href: '/dashboard/content/social', label: 'Social Media' },
    { href: '/dashboard/content/queue', label: 'Content Queue' },
    { href: '/dashboard/content/schema', label: 'Schema Markup' },
    { href: '/dashboard/content/faq', label: 'FAQ Schema' },
    { href: '/dashboard/content/authority', label: 'Authority Content' },
    { href: '/dashboard/content/citations', label: 'Citation Tracker' },
    { href: '/dashboard/onboarding', label: 'Onboarding' },
    { href: '/dashboard/settings', label: 'Settings' },
    { href: '/dashboard/account', label: 'Account' },
    { href: '/dashboard/data', label: 'My Data' },
  ]

  function navClass(href: string) {
    const active = href === '/dashboard' ? pathname === '/dashboard' : pathname.startsWith(href)
    return active
      ? 'block px-3 py-2 rounded-lg text-sm bg-gray-700 text-white transition'
      : 'block px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white transition'
  }

  const sidebar = (
    <div className="flex flex-col h-full bg-gray-900 border-r border-gray-800 w-64 p-4">
      <div className="mb-6">
        <span className="text-white font-bold text-xl">TraffikFuel</span>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={navClass(link.href)}>
            {link.label}
          </a>
        ))}
      </nav>
      <button
        onClick={handleSignOut}
        className="mt-4 text-sm text-gray-500 hover:text-white transition text-left px-3 py-2"
      >
        Sign Out
      </button>
    </div>
  )

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      {/* Desktop sidebar */}
      <div className="hidden md:flex flex-shrink-0">
        {sidebar}
      </div>

      {/* Mobile sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="flex-shrink-0">{sidebar}</div>
          <div className="flex-1 bg-black/50" onClick={() => setMobileOpen(false)} />
        </div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-800">
          <span className="text-white font-bold">TraffikFuel</span>
          <button onClick={() => setMobileOpen(true)} className="text-gray-400 hover:text-white">
            ☰
          </button>
        </div>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

