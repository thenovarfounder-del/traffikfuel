const fs = require('fs');

fs.writeFileSync('src/components/Nav.tsx', `// @ts-nocheck
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{\`
        .nav-links { display: flex; gap: 24px; align-items: center; }
        .nav-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; z-index: 100; position: relative; }
        .nav-cta-btn { display: block; }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-hamburger { display: block; }
          .nav-cta-btn { display: none; }
        }
        .mobile-menu a { display: block; color: #111; text-decoration: none; font-size: 20px; font-weight: 600; padding: 16px 0; border-bottom: 1px solid #f0f0f0; font-family: 'DM Sans', sans-serif; }
        .mobile-menu a.orange { color: #E8610A; }
      \`}</style>

      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '2.5px solid #111', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', height: '64px', fontFamily: "'DM Sans', sans-serif" }}>

        <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: '#111', textDecoration: 'none' }}>
          Traffik<span style={{ color: '#E8610A' }}>ora</span>
        </Link>

        <div className="nav-links">
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

        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
          <Link href="/signup" className="nav-cta-btn" style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', padding: '10px 22px', textDecoration: 'none', fontSize: '14px', fontWeight: 700, borderRadius: '8px', border: '2.5px solid #111' }}>Start Free Trial</Link>
          <button
            className="nav-hamburger"
            aria-label="Toggle menu"
            onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(prev => !prev); }}
            onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(prev => !prev); }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round">
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu" style={{ position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0, background: '#fff', zIndex: 49, padding: '24px 32px', overflowY: 'auto' }}>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/features" onClick={() => setOpen(false)}>Features</Link>
          <Link href="/solutions" onClick={() => setOpen(false)}>Solutions</Link>
          <Link href="/pricing" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/how-it-works" onClick={() => setOpen(false)}>How It Works</Link>
          <Link href="/why-traffikora" onClick={() => setOpen(false)}>Why Traffikora</Link>
          <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="orange">Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
          <div style={{ marginTop: '24px' }}>
            <Link href="/signup" onClick={() => setOpen(false)} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', padding: '16px 22px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, borderRadius: '8px', textAlign: 'center', display: 'block' }}>Start Free Trial</Link>
          </div>
        </div>
      )}
    </>
  )
}
`, 'utf8');

console.log('OK: src/components/Nav.tsx');