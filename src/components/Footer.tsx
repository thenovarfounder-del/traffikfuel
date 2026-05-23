// @ts-nocheck
'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#111', borderTop: '2.5px solid #333', padding: '48px 32px 24px' }}>
      <div style={{ maxWidth: '1060px', margin: '0 auto' }}>

        {/* TOP ROW */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '40px', marginBottom: '48px' }}>

          {/* BRAND */}
          <div>
            <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#fff', textDecoration: 'none' }}>Traffikora</Link>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#aaa', lineHeight: 1.7, marginTop: '16px', maxWidth: '280px' }}>The automated marketing machine for small and mid-size businesses. Set it once. It markets forever.</p>
            <Link href="/signup" style={{ display: 'inline-block', marginTop: '20px', background: '#E8610A', color: '#fff', padding: '10px 24px', textDecoration: 'none', fontSize: '14px', fontWeight: 600, border: '2px solid #E8610A' }}>Start Free Trial</Link>
          </div>

          {/* FEATURES */}
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Features</p>
            {[
              { label: 'AI Engine Optimization', href: '/features/ai-engine-optimization' },
              { label: 'Google Business Profile', href: '/features/google-business-profile' },
              { label: 'Local SEO Automation', href: '/features/local-seo-automation' },
              { label: 'Social Media Automation', href: '/features/social-media-automation' },
              { label: 'How It Works', href: '/how-it-works' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#aaa', textDecoration: 'none', marginBottom: '10px' }}>{link.label}</Link>
            ))}
          </div>

          {/* SOLUTIONS */}
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Solutions</p>
            {[
              { label: 'Small Businesses', href: '/solutions/small-businesses' },
              { label: 'Restaurants', href: '/solutions/restaurants' },
              { label: 'Marketing Agencies', href: '/solutions/marketing-agencies' },
              { label: 'Dentists', href: '/solutions/dentists' },
              { label: 'Home Services', href: '/solutions/home-services' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#aaa', textDecoration: 'none', marginBottom: '10px' }}>{link.label}</Link>
            ))}
          </div>

          {/* COMPANY */}
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Company</p>
            {[
              { label: 'Why Traffikora', href: '/why-traffikora' },
              { label: 'Pricing', href: '/pricing' },
              { label: 'FAQ', href: '/faq' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
              { label: 'Privacy Policy', href: '/privacy' },
              { label: 'Terms of Service', href: '/terms' },
            ].map(link => (
              <Link key={link.href} href={link.href} style={{ display: 'block', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#aaa', textDecoration: 'none', marginBottom: '10px' }}>{link.label}</Link>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div style={{ borderTop: '1px solid #333', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontFamily: 'DM Sans, sans-serif', color: '#666', fontSize: '13px' }}>© 2026 Traffikora.com — All rights reserved.</span>
          <span style={{ fontFamily: 'DM Sans, sans-serif', color: '#666', fontSize: '13px' }}>Set it once. It markets forever.</span>
        </div>
      </div>
    </footer>
  )
}
