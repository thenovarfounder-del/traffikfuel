// @ts-nocheck
'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '2.5px solid #111', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', textDecoration: 'none' }}>Traffikora</Link>
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <Link href="/features/ai-engine-optimization" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>Features</Link>
          <Link href="/solutions/small-businesses" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>Solutions</Link>
          <Link href="/pricing" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>Pricing</Link>
          <Link href="/how-it-works" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>How It Works</Link>
          <Link href="/why-traffikora" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>Why Traffikora</Link>
          <Link href="/faq" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>FAQ</Link>
          <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '10px 22px', textDecoration: 'none', fontSize: '15px', fontWeight: 600, border: '2.5px solid #111' }}>Start Free Trial</Link>
        </div>
      </nav>
    </>
  )
}
