// @ts-nocheck
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '2.5px solid #111', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', height: '64px', fontFamily: "'DM Sans', sans-serif" }}>

        {/* Logo - left */}
        <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: '#111', textDecoration: 'none' }}>
          Traffik<span style={{ color: '#E8610A' }}>ora</span>
        </Link>

        {/* Links - center */}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="/" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Home</Link>
          <Link href="/features" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Features</Link>
          <Link href="/solutions" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Solutions</Link>
          <Link href="/pricing" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Pricing</Link>
          <Link href="/how-it-works" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>How It Works</Link>
          <Link href="/why-traffikora" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Why Traffikora</Link>
          <Link href="/faq" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>FAQ</Link>
          <Link href="/blog" style={{ color: '#E8610A', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Blog</Link>
          <Link href="/contact" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Contact</Link>
        </div>

        {/* CTA - right */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link href="/signup" style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', padding: '10px 22px', textDecoration: 'none', fontSize: '14px', fontWeight: 700, borderRadius: '8px', border: '2.5px solid #111' }}>Start Free Trial</Link>
        </div>

      </nav>

      {open && (
        <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, background: '#fff', borderBottom: '2.5px solid #111', zIndex: 49, padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: '20px', fontFamily: "'DM Sans', sans-serif" }}>
          <Link href="/" onClick={() => setOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Home</Link>
          <Link href="/features" onClick={() => setOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Features</Link>
          <Link href="/solutions" onClick={() => setOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Solutions</Link>
          <Link href="/pricing" onClick={() => setOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Pricing</Link>
          <Link href="/how-it-works" onClick={() => setOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>How It Works</Link>
          <Link href="/why-traffikora" onClick={() => setOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Why Traffikora</Link>
          <Link href="/faq" onClick={() => setOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>FAQ</Link>
          <Link href="/blog" onClick={() => setOpen(false)} style={{ color: '#E8610A', textDecoration: 'none', fontSize: '16px', fontWeight: 600 }}>Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)} style={{ color: '#111', textDecoration: 'none', fontSize: '16px', fontWeight: 500 }}>Contact</Link>
          <Link href="/signup" onClick={() => setOpen(false)} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', padding: '14px 22px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, borderRadius: '8px', textAlign: 'center' }}>Start Free Trial</Link>
        </div>
      )}
    </>
  )
}
