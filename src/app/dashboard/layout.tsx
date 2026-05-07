'use client'

import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
const router = useRouter()
const pathname = usePathname()
const [user, setUser] = useState<any>(null)
const [businesses, setBusinesses] = useState<any[]>([])
const [activeBusiness, setActiveBusiness] = useState<any>(null)
const [showSwitcher, setShowSwitcher] = useState(false)
const [sidebarOpen, setSidebarOpen] = useState(false)

useEffect(() => {
checkUser()
}, [])

async function checkUser() {
const { data: { user } } = await supabase.auth.getUser()
if (!user) { router.push('/login'); return }
setUser(user)
const { data } = await supabase
.from('business_profiles')
.select('*')
.eq('user_id', user.id)
if (data && data.length > 0) {
setBusinesses(data)
setActiveBusiness(data[0])
}
}

async function handleSignOut() {
await supabase.auth.signOut()
router.push('/login')
}

const navItems = [
{ label: 'Dashboard', href: '/dashboard', icon: '📊' },
{ label: 'Business Profile', href: '/dashboard/business', icon: '🏢' },
{ label: 'Onboarding', href: '/dashboard/onboarding', icon: '🚀' },
{ label: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
{ label: 'Security', href: '/dashboard/settings', icon: '🔒' },
{ label: 'Download My Data', href: '/dashboard/data', icon: '📥' },
{ label: 'Delete Account', href: '/dashboard/account', icon: '🗑️' },
]

return (
<div className="min-h-screen bg-gray-950 flex">
{/* Sidebar */}
<aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 border-r border-gray-800 transform transition-transform duration-200 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:flex lg:flex-col`}>
<div className="p-6 border-b border-gray-800">
<span className="text-white font-bold text-xl">TraffikFuel</span>
</div>
<nav className="flex-1 p-4 space-y-1">
{navItems.map((item) => (
<Link
key={item.href + item.label}
href={item.href}
onClick={() => setSidebarOpen(false)}
className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${pathname === item.href ? 'bg-blue-600 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'}`}
>
<span>{item.icon}</span>
{item.label}
</Link>
))}
</nav>
<div className="p-4 border-t border-gray-800">
<Link href="/dashboard/onboarding" className="flex items-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition mb-2">
🚀 Get Started
</Link>
<button onClick={handleSignOut} className="w-full text-left text-gray-400 hover:text-white text-sm px-3 py-2 rounded-lg hover:bg-gray-800 transition">
Sign Out
</button>
</div>
</aside>

{/* Overlay for mobile */}
{sidebarOpen && (
<div className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setSidebarOpen(false)} />
)}

{/* Main content */}
<div className="flex-1 flex flex-col min-h-screen">
{/* Top bar */}
<header className="h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-4 lg:px-6">
<div className="flex items-center gap-4">
<button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden text-gray-400 hover:text-white">
☰
</button>
{/* Business Switcher */}
<div className="relative">
<button
onClick={() => setShowSwitcher(!showSwitcher)}
className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg text-sm transition"
>
{activeBusiness?.logo_url ? (
<img src={activeBusiness.logo_url} alt="logo" className="w-5 h-5 rounded object-cover" />
) : (
<span className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center text-xs">B</span>
)}
<span>{activeBusiness?.business_name || 'My Business'}</span>
<span className="text-gray-400">▾</span>
</button>
{showSwitcher && (
<div className="absolute top-full left-0 mt-1 w-56 bg-gray-800 rounded-xl shadow-xl border border-gray-700 z-50 overflow-hidden">
{businesses.map((biz) => (
<button
key={biz.id}
onClick={() => { setActiveBusiness(biz); setShowSwitcher(false) }}
className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white hover:bg-gray-700 transition"
>
{biz.logo_url ? (
<img src={biz.logo_url} alt="logo" className="w-6 h-6 rounded object-cover" />
) : (
<span className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-xs">B</span>
)}
{biz.business_name || 'Unnamed Business'}
</button>
))}
<div className="border-t border-gray-700">
<Link href="/dashboard/business" onClick={() => setShowSwitcher(false)} className="block px-4 py-3 text-sm text-blue-400 hover:bg-gray-700 transition">
+ Add Business
</Link>
</div>
</div>
)}
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-gray-400 text-sm hidden sm:block">{user?.email}</span>
</div>
</header>

{/* Page content */}
<main className="flex-1 p-6">
{children}
</main>
</div>
</div>
)
}
