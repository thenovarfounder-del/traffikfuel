// @ts-nocheck
'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#111', color: '#fff', padding: '64px 32px 32px', borderTop: '2.5px solid #333' }}>
      <style>{`
        .footer-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 40px; margin-bottom: 56px; }
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; } .footer-brand { grid-column: 1 / -1; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr; } }
        .footer-bottom { border-top: 1px solid #333; padding-top: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
        @media (max-width: 768px) { .footer-bottom { flex-direction: column; align-items: flex-start; } }
      `}</style>
      <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
        <div className="footer-grid">
          <div className="footer-brand">
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>
              Traffik<span style={{ color: '#E8610A' }}>ora</span><sup style={{ fontSize: '10px', fontFamily: "'DM Sans', sans-serif", fontWeight: 400, color: '#fff', verticalAlign: 'super', marginLeft: '1px' }}>™</sup>
            </p>
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
