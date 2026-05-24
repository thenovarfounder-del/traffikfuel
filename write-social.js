const fs = require('fs');

const content = `// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      const { supabase } = await import('@/lib/supabase')
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        window.location.href = '/login'
        return
      }
      setUser(session.user)
      setLoading(false)
    }
    checkAuth()
  }, [])

  if (loading) {
    return (
      <>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
        <Nav />
        <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#666' }}>Loading...</p>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', padding: '60px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px' }}>Dashboard</p>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 900, marginBottom: '8px' }}>Welcome back.</h1>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#ccc' }}>{user?.email}</p>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '60px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>Connect Accounts</h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', marginBottom: '20px' }}>Link your Google, Facebook, and Instagram accounts to get started.</p>
              <Link href="/dashboard/connect/google" style={{ background: '#E8610A', color: '#fff', padding: '12px 24px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'inline-block' }}>Connect Now</Link>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>Business Settings</h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', marginBottom: '20px' }}>Set up your business name, category, and location.</p>
              <Link href="/dashboard/settings" style={{ background: '#111', color: '#fff', padding: '12px 24px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'inline-block' }}>Go to Settings</Link>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>Support</h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', marginBottom: '20px' }}>Need help? Our team is standing by.</p>
              <Link href="/support" style={{ background: '#111', color: '#fff', padding: '12px 24px', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'inline-block' }}>Get Help</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync('src/app/dashboard/page.tsx', content);
console.log('Written: src/app/dashboard/page.tsx');