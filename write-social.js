const fs = require('fs');
const content = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '120px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>404 Error</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '72px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px' }}>Page Not Found</h1>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#ccc', maxWidth: '520px', margin: '0 auto 48px' }}>The page you\u2019re looking for doesn\u2019t exist or has been moved. Let\u2019s get you back on track.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Go Home</Link>
          <Link href="/dashboard" style={{ background: 'transparent', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Go to Dashboard</Link>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111', marginBottom: '40px' }}>Try one of these instead</h2>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '800px', margin: '0 auto' }}>
          {[
            { label: 'Features', href: '/features' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'How It Works', href: '/how-it-works' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
            { label: 'Support', href: '/support' },
          ].map((link) => (
            <Link key={link.href} href={link.href} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', fontWeight: 600, color: '#111', textDecoration: 'none', border: '2.5px solid #111', padding: '12px 28px', display: 'inline-block' }}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Still need help?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Our support team is here. Reach out and we\u2019ll get you sorted fast.</p>
        <Link href="/contact" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Contact Support</Link>
      </section>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync('src/app/not-found.tsx', content);
console.log('Written: src/app/not-found.tsx');