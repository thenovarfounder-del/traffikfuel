'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user || !user.email_confirmed_at) {
        router.push('/login')
        return
      }
      setEmail(user.email || '')
    }
    checkUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <main style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Dashboard</h1>
      <p>Welcome, {email}!</p>
      <p style={{ marginTop: '16px' }}>
        You are successfully logged in to TraffikFuel.
      </p>
      <button onClick={handleLogout}
        style={{ marginTop: '24px', padding: '10px 20px', background: '#e00',
          color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Log Out
      </button>
    </main>
  )
}