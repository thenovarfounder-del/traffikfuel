const fs = require('fs');

// FIX FOOTER - responsive grid
fs.writeFileSync('src/components/Footer.tsx', `// @ts-nocheck
'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#111', color: '#fff', padding: '64px 32px 32px', borderTop: '2.5px solid #333' }}>
      <style>{\`
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 40px;
          margin-bottom: 56px;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
        .footer-bottom {
          border-top: 1px solid #333;
          padding-top: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      \`}</style>
      <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
        <div className="footer-grid">
          <div className="footer-brand">
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>Traffikora</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#888', lineHeight: 1.7, marginBottom: '20px' }}>Set it once. It markets forever. AI-powered marketing automation for small businesses.</p>
            <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '10px 22px', textDecoration: 'none', fontSize: '13px', fontWeight: 700, border: '2.5px solid #E8610A', borderRadius: '6px', display: 'inline-block' }}>Start Free Trial</Link>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Features</p>
            <div style={{ marginBottom: '10px' }}><Link href="/features" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>All Features</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/features" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Social Media Automation</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/features" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Google SEO Automation</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/features" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>AI Engine Optimization</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/features" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Blog Automation</Link></div>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Solutions</p>
            <div style={{ marginBottom: '10px' }}><Link href="/solutions/small-businesses" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Small Businesses</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/solutions/restaurants" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Restaurants</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/solutions/real-estate" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Real Estate</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/solutions/chiropractors" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Chiropractors</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/solutions/auto-repair" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Auto Repair</Link></div>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Compare</p>
            <div style={{ marginBottom: '10px' }}><Link href="/compare/traffikora-vs-hubspot" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>vs HubSpot</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/compare/traffikora-vs-hootsuite" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>vs Hootsuite</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/compare/traffikora-vs-semrush" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>vs Semrush</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/compare/traffikora-vs-later" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>vs Later</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/compare/traffikora-vs-yext" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>vs Yext</Link></div>
          </div>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Company</p>
            <div style={{ marginBottom: '10px' }}><Link href="/pricing" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Pricing</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/why-traffikora" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Why Traffikora</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/faq" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>FAQ</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/about" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>About Us</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/contact" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Contact Us</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/privacy" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Privacy Policy</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/terms" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Terms of Service</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/data-use" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Data Use</Link></div>
          </div>
        </div>
        <div className="footer-bottom">
          <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#666', fontSize: '13px' }}>&copy; 2026 Traffikora.com - All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/privacy" style={{ fontFamily: "'DM Sans', sans-serif", color: '#666', fontSize: '13px', textDecoration: 'underline' }}>Do Not Sell My Personal Information</Link>
            <span style={{ fontFamily: "'DM Sans', sans-serif", color: '#666', fontSize: '13px' }}>Set it once. It markets forever.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
`, 'utf8');

// FIX NAV - hamburger menu
fs.writeFileSync('src/components/Nav.tsx', `// @ts-nocheck
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
      <style>{\`
        .nav-links { display: flex; gap: 24px; align-items: center; }
        .nav-hamburger { display: none; background: none; border: none; cursor: pointer; padding: 4px; }
        .nav-cta { display: flex; justify-content: flex-end; }
        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-hamburger { display: block; }
          .nav-cta { display: none; }
        }
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
`, 'utf8');

console.log('OK: src/components/Footer.tsx');
console.log('OK: src/components/Nav.tsx');