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
{ href: '/dashboard', label: '🏠 Dashboard' },
{ href: '/dashboard/business', label: '🏢 Business Profile' },
{ href: '/dashboard/scrape​​​​​​​​​​​​​​​​

