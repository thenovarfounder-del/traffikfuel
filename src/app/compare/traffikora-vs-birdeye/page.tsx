// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function VsPage() {
  const rows = [
    { feature: 'Google SEO + AI Engine Optimization (ChatGPT, Claude, Gemini)', traffikora: true, competitor: false },
    { feature: 'Google Business Profile Automation', traffikora: true, competitor: false },
    { feature: 'Automated Review Generation', traffikora: true, competitor: false },
    { feature: 'Social Media Automation', traffikora: true, competitor: true },
    { feature: 'Local SEO', traffikora: true, competitor: false },
    { feature: 'Set It Once — Runs Forever', traffikora: true, competitor: false },
    { feature: 'Built for Small Business', traffikora: true, competitor: false },
    { feature: 'Free Plan', traffikora: true, competitor: false },
    { feature: 'No Monthly Contract', traffikora: true, competitor: false },
  ]

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Comparison</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Traffikora vs Birdeye</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>See why small businesses choose Traffikora over Birdeye for automated, AI-powered marketing.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Free Today</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0', border: '2.5px solid #111', marginBottom: '64px' }}>
            <div style={{ padding: '20px 24px', borderRight: '2.5px solid #111', background: '#f8f8f8' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: '#555' }}>Feature</p>
            </div>
            <div style={{ padding: '20px 24px', borderRight: '2.5px solid #111', background: '#E8610A', textAlign: 'center' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#fff' }}>Traffikora</p>
            </div>
            <div style={{ padding: '20px 24px', textAlign: 'center', background: '#f8f8f8' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, color: '#555' }}>Birdeye</p>
            </div>
            {rows.map((row, i) => (
              <>
                <div key={'a'+i} style={{ padding: '18px 24px', borderTop: '2.5px solid #111', borderRight: '2.5px solid #111' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#111' }}>{row.feature}</p>
                </div>
                <div key={'b'+i} style={{ padding: '18px 24px', borderTop: '2.5px solid #111', borderRight: '2.5px solid #111', textAlign: 'center', background: '#fff9f6' }}>
                  <p style={{ fontSize: '18px' }}>{row.traffikora ? '✅' : '❌'}</p>
                </div>
                <div key={'c'+i} style={{ padding: '18px 24px', borderTop: '2.5px solid #111', textAlign: 'center' }}>
                  <p style={{ fontSize: '18px' }}>{row.competitor ? '✅' : '❌'}</p>
                </div>
              </>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111', marginBottom: '16px' }}>The bottom line</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', maxWidth: '640px', margin: '0 auto 40px', lineHeight: 1.8 }}>Birdeye does some things well. But it wasn’t built for small businesses who need everything automated in one place — including Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini. Traffikora was.</p>
            <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #111', display: 'inline-block' }}>Try Traffikora Free for 7 Days</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to make the switch?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Today</Link>
      </section>

      <Footer />
    </>
  )
}
