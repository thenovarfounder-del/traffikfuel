// @ts-nocheck
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        .nav-links { display: flex; gap: 24px; align-items: center; }
        .nav-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
        .nav-cta { display: flex; justify-content: flex-end; }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-hamburger { display: block; }
          .nav-cta { display: none; }
        }
      `}</style>
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
          <Link href="/signup" className="nav-cta" style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', padding: '10px 22px', textDecoration: 'none', fontSize: '14px', fontWeight: 700, borderRadius: '8px', border: '2.5px solid #111' }}>Start Free Trial</Link>
          <button className="nav-hamburger" onClick={() => setOpen(!open)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round">
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
        <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0, background: '#fff', zIndex: 49, padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', fontFamily: "'DM Sans', sans-serif", overflowY: 'auto' }}>
          <Link href="/" style={{ color: '#111', textDecoration: 'none', fontSize: '20px', fontWeight: 600, borderBottom: '1px solid #f0f0f0', paddingBottom: '16px' }}>Home</Link>
          <Link href="/features" style={{ color: '#111', textDecoration: 'none', fontSize: '20px', fontWeight: 600, borderBottom: '1px solid #f0f0f0', paddingBottom: '16px' }}>Features</Link>
          <Link href="/solutions" style={{ color: '#111', textDecoration: 'none', fontSize: '20px', fontWeight: 600, borderBottom: '1px solid #f0f0f0', paddingBottom: '16px' }}>Solutions</Link>
          <Link href="/pricing" style={{ color: '#111', textDecoration: 'none', fontSize: '20px', fontWeight: 600, borderBottom: '1px solid #f0f0f0', paddingBottom: '16px' }}>Pricing</Link>
          <Link href="/how-it-works" style={{ color: '#111', textDecoration: 'none', fontSize: '20px', fontWeight: 600, borderBottom: '1px solid #f0f0f0', paddingBottom: '16px' }}>How It Works</Link>
          <Link href="/why-traffikora" style={{ color: '#111', textDecoration: 'none', fontSize: '20px', fontWeight: 600, borderBottom: '1px solid #f0f0f0', paddingBottom: '16px' }}>Why Traffikora</Link>
          <Link href="/faq" style={{ color: '#111', textDecoration: 'none', fontSize: '20px', fontWeight: 600, borderBottom: '1px solid #f0f0f0', paddingBottom: '16px' }}>FAQ</Link>
          <Link href="/blog" style={{ color: '#E8610A', textDecoration: 'none', fontSize: '20px', fontWeight: 600, borderBottom: '1px solid #f0f0f0', paddingBottom: '16px' }}>Blog</Link>
          <Link href="/contact" style={{ color: '#111', textDecoration: 'none', fontSize: '20px', fontWeight: 600, borderBottom: '1px solid #f0f0f0', paddingBottom: '16px' }}>Contact</Link>
          <Link href="/signup" style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', padding: '16px 22px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, borderRadius: '8px', textAlign: 'center', marginTop: '8px' }}>Start Free Trial</Link>
        </div>
      )}
    </>
  )
}
