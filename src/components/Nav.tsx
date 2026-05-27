// @ts-nocheck
'use client'
import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        .nav-links { display: flex; gap: 24px; align-items: center; }
        .nav-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 8px; }
        .nav-cta-btn { display: block; }
        .mobile-menu { display: none; position: fixed; top: 64px; left: 0; right: 0; bottom: 0; background: #fff; z-index: 999; padding: 24px 32px; overflow-y: auto; flex-direction: column; }
        .mobile-menu.is-open { display: flex; }
        .mobile-menu a { display: block; color: #111; text-decoration: none; font-size: 22px; font-weight: 600; padding: 18px 0; border-bottom: 1px solid #f0f0f0; font-family: 'DM Sans', sans-serif; }
        .mobile-menu a.orange { color: #E8610A; }
        .mobile-menu a.cta-mobile { background: linear-gradient(135deg,#E8610A,#c94e08); color: #fff !important; padding: 16px 22px; font-size: 18px; border-radius: 8px; text-align: center; margin-top: 24px; border-bottom: none; }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-hamburger { display: block; }
          .nav-cta-btn { display: none; }
        }
      `}</style>

      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '2.5px solid #111', padding: '0 32px', display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', height: '64px', fontFamily: "'DM Sans', sans-serif" }}>

        <Link href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 700, color: '#111', textDecoration: 'none' }}>
          Traffik<span style={{ color: '#E8610A' }}>ora</span><sup style={{ fontSize: '10px', fontFamily: "'DM Sans', sans-serif", fontWeight: 400, color: '#111', verticalAlign: 'super', marginLeft: '1px' }}>™</sup>
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
            onClick={() => {
              const menu = document.getElementById('mobile-nav-menu')
              if (menu) menu.classList.toggle('is-open')
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <div id="mobile-nav-menu" className="mobile-menu">
        <a href="/" style={{ fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: '#111', marginBottom: '8px', display: 'block', borderBottom: '2.5px solid #111', paddingBottom: '16px' }}>Traffik<span style={{ color: '#E8610A' }}>ora</span><sup style={{ fontSize: '10px', fontWeight: 400, verticalAlign: 'super' }}>™</sup></a>
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/solutions">Solutions</a>
        <a href="/pricing">Pricing</a>
        <a href="/how-it-works">How It Works</a>
        <a href="/why-traffikora">Why Traffikora</a>
        <a href="/faq">FAQ</a>
        <a href="/blog" class="orange">Blog</a>
        <a href="/contact">Contact</a>
        <a href="/about">About Us</a>
        <a href="/signup" class="cta-mobile">Start Free Trial</a>
      </div>
    </>
  )
}
