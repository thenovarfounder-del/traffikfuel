// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function BlogPost() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Blog</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>The Small Business Marketing Problem Nobody Talks About</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>Small businesses are losing to chains and franchises not because of price or quality — but because of marketing. Here’s the real problem.</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>The playing field is not level</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>A national chain has a full marketing team, a six-figure ad budget, and dedicated SEO specialists. A local business has the owner — who is also the salesperson, accountant, and customer service rep. The game is rigged. And most small businesses don’t even know it.</p>
          </div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>Complexity is the real enemy</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>Google Business Profile. Facebook. Instagram. Reviews. SEO. AI engines. Email marketing. Social media. Each one is a part-time job on its own. Trying to do all of them while running a business is impossible — so most businesses do none of them well.</p>
          </div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>The solution isn’t more effort</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>Working harder on marketing doesn’t work. The answer is automation. When your marketing runs itself — posting content, generating reviews, optimizing for search — you get the benefits without the time investment.</p>
          </div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>This is exactly why we built Traffikora</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>Traffikora gives every small business the marketing firepower of a full agency — at a fraction of the cost, with zero ongoing work. Set it up once. It markets forever. That’s the only way to level the playing field.</p>
          </div>
          <div style={{ borderTop: '2.5px solid #111', paddingTop: '40px', marginTop: '40px' }}>
            <Link href="/blog" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>← Back to Blog</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to automate your marketing?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No no credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Today</Link>
      </section>

      <Footer />
    </>
  )
}
