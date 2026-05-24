const fs = require('fs');

const content = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function VsHootsuitePage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Traffikora vs Hootsuite</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Hootsuite schedules posts. Traffikora runs your entire marketing machine.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Hootsuite only handles social scheduling — and charges a fortune for it. Traffikora automates social, SEO, AI engines, and more for $97/mo.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>Side by Side</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center', lineHeight: 1.1 }}>How they stack up.</h2>
          <div style={{ border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#111' }}>
              <div style={{ padding: '20px 32px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#888' }}>Feature</div>
              <div style={{ padding: '20px 32px', fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#E8610A', borderLeft: '2.5px solid #333', textAlign: 'center' }}>Traffikora</div>
              <div style={{ padding: '20px 32px', fontFamily: 'DM Sans, sans-serif', fontSize: '18px', fontWeight: 700, color: '#555', borderLeft: '2.5px solid #333', textAlign: 'center' }}>Hootsuite</div>
            </div>
            {[
              { feature: 'Starting price', traffikora: '$97/mo', hootsuite: '$99/mo (far less included)' },
              { feature: 'Content creation', traffikora: '\u2713 AI-generated automatically', hootsuite: '\u2717 You write everything' },
              { feature: 'Google SEO automation', traffikora: '\u2713 Included', hootsuite: '\u2717 Not available' },
              { feature: 'AI engine optimization', traffikora: '\u2713 Included', hootsuite: '\u2717 Not available' },
              { feature: 'Blog post automation', traffikora: '\u2713 Automated', hootsuite: '\u2717 Not included' },
              { feature: 'Google Business Profile', traffikora: '\u2713 Automated', hootsuite: '\u2717 Not included' },
              { feature: 'TikTok + YouTube publishing', traffikora: '\u2713 Automated', hootsuite: 'Limited' },
              { feature: 'Schema markup', traffikora: '\u2713 Auto-injected', hootsuite: '\u2717 Not included' },
              { feature: 'Free trial', traffikora: '7 days free', hootsuite: '30-day trial (credit card required)' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '2.5px solid #111', background: i % 2 === 0 ? '#fff' : '#f7f7f7' }}>
                <div style={{ padding: '18px 32px', fontSize: '14px', color: '#555', fontWeight: 500 }}>{row.feature}</div>
                <div style={{ padding: '18px 32px', fontSize: '14px', color: '#E8610A', fontWeight: 700, borderLeft: '2.5px solid #111', textAlign: 'center' }}>{row.traffikora}</div>
                <div style={{ padding: '18px 32px', fontSize: '14px', color: '#999', fontWeight: 400, borderLeft: '2.5px solid #111', textAlign: 'center' }}>{row.hootsuite}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f7f7', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>Why Traffikora Wins</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center', lineHeight: 1.1 }}>Hootsuite schedules. Traffikora dominates.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { icon: '\u270d\ufe0f', title: 'Hootsuite still needs you', desc: 'With Hootsuite you still write every post yourself. Traffikora generates and publishes all your content automatically — zero effort.' },
              { icon: '\ud83e\udd16', title: 'AI engines — Hootsuite cannot', desc: 'Traffikora gets you found on ChatGPT, Claude, Gemini, and Perplexity. Hootsuite has no answer for the future of search.' },
              { icon: '\ud83d\udd0d', title: 'SEO and social in one', desc: 'Hootsuite only does social. Traffikora handles Google SEO, blog automation, schema markup, and social — all at once.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '40px 32px', borderRight: i < 2 ? '2.5px solid #111' : 'none', background: '#fff' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>{item.title}</div>
                <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', color: '#E8610A', letterSpacing: '4px', marginBottom: '24px' }}>\u2605\u2605\u2605\u2605\u2605</div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#111', lineHeight: 1.7, marginBottom: '32px', fontStyle: 'italic' }}>"I used Hootsuite for two years and still had to write every single post myself. Traffikora writes everything, posts everything, and even handles my Google SEO. It is not even close."</p>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111' }}>Kevin L.</div>
          <div style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>Denver, CO — Restaurant Owner</div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px', lineHeight: 1.1 }}>Do more than schedule posts.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Try Traffikora free for 7 days and see what full automation looks like.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync('src/app/compare/traffikora-vs-hootsuite/page.tsx', content, 'utf8');
console.log('Done');