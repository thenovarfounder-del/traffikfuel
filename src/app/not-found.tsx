// @ts-nocheck
'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '2.5px solid #111', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', textDecoration: 'none' }}>Traffikora</Link>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link href="/features/ai-engine-optimization" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>Features</Link>
          <Link href="/pricing" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>Pricing</Link>
          <Link href="/how-it-works" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>How It Works</Link>
          <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '10px 22px', textDecoration: 'none', fontSize: '15px', fontWeight: 600, border: '2.5px solid #111' }}>Start Free Trial</Link>
        </div>
      </nav>

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '120px 32px' }}>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '140px', fontWeight: 900, color: '#E8610A', lineHeight: 1 }}>404</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 700, marginTop: '24px', marginBottom: '16px' }}>Looks like this page got lost in the algorithm.</h1>
        <p style={{ fontSize: '18px', color: '#ccc', maxWidth: '480px', margin: '0 auto 48px' }}>Don't worry — Traffikora still has you covered. Head back home or start your free trial.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ background: '#fff', color: '#111', padding: '14px 32px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, border: '2.5px solid #fff' }}>Go Home</Link>
          <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '14px 32px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, border: '2.5px solid #E8610A' }}>Start Free Trial</Link>
        </div>
      </section>

      <footer style={{ background: '#111', borderTop: '2.5px solid #333', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ color: '#aaa', fontSize: '14px' }}>© 2026 Traffikora.com</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link href="/privacy" style={{ color: '#aaa', fontSize: '14px', textDecoration: 'none' }}>Privacy</Link>
          <Link href="/terms" style={{ color: '#aaa', fontSize: '14px', textDecoration: 'none' }}>Terms</Link>
          <Link href="/contact" style={{ color: '#aaa', fontSize: '14px', textDecoration: 'none' }}>Contact</Link>
          <Link href="/signup" style={{ color: '#E8610A', fontSize: '14px', textDecoration: 'none', fontWeight: 600 }}>Start Free Trial</Link>
        </div>
      </footer>
    </>
  )
}
