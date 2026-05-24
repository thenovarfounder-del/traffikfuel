const fs = require('fs');

const semrush = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function VsSemrushPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Traffikora vs Semrush</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Semrush shows you data. Traffikora does the work.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Semrush is a research tool. You still have to act on everything yourself. Traffikora automates your entire SEO and marketing execution — no agency needed.</p>
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
              <div style={{ padding: '20px 32px', fontFamily: 'DM Sans, sans-serif', fontSize: '18px', fontWeight: 700, color: '#555', borderLeft: '2.5px solid #333', textAlign: 'center' }}>Semrush</div>
            </div>
            {[
              { feature: 'Starting price', traffikora: '$97/mo', other: '$130+/mo' },
              { feature: 'SEO execution', traffikora: '\u2713 Fully automated', other: '\u2717 Manual — you do the work' },
              { feature: 'Content creation', traffikora: '\u2713 AI-generated and published', other: '\u2717 Not included' },
              { feature: 'Social media automation', traffikora: '\u2713 9+ platforms', other: '\u2717 Not included' },
              { feature: 'AI engine optimization', traffikora: '\u2713 Included', other: '\u2717 Not available' },
              { feature: 'Google Business Profile', traffikora: '\u2713 Automated', other: '\u2717 Not included' },
              { feature: 'Built for small businesses', traffikora: '\u2713 Yes', other: '\u2717 Built for SEO professionals' },
              { feature: 'Free trial', traffikora: '7 days free', other: '7-day trial' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '2.5px solid #111', background: i % 2 === 0 ? '#fff' : '#f7f7f7' }}>
                <div style={{ padding: '18px 32px', fontSize: '14px', color: '#555', fontWeight: 500 }}>{row.feature}</div>
                <div style={{ padding: '18px 32px', fontSize: '14px', color: '#E8610A', fontWeight: 700, borderLeft: '2.5px solid #111', textAlign: 'center' }}>{row.traffikora}</div>
                <div style={{ padding: '18px 32px', fontSize: '14px', color: '#999', fontWeight: 400, borderLeft: '2.5px solid #111', textAlign: 'center' }}>{row.other}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f7f7', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', color: '#E8610A', letterSpacing: '4px', marginBottom: '24px' }}>\u2605\u2605\u2605\u2605\u2605</div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#111', lineHeight: 1.7, marginBottom: '32px', fontStyle: 'italic' }}>"Semrush told me what keywords to target. I still had to write everything myself. Traffikora just does it all. My rankings went up and I spend zero time on SEO now."</p>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111' }}>Brian T.</div>
          <div style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>Seattle, WA — E-commerce Store Owner</div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px', lineHeight: 1.1 }}>Stop researching. Start ranking.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Try Traffikora free for 7 days and see the difference.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

const later = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function VsLaterPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Traffikora vs Later</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Later schedules Instagram. Traffikora dominates every channel.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Later is built for Instagram scheduling. Traffikora automates social, SEO, AI engines, blogs, and more — across 9+ platforms — for the same price.</p>
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
              <div style={{ padding: '20px 32px', fontFamily: 'DM Sans, sans-serif', fontSize: '18px', fontWeight: 700, color: '#555', borderLeft: '2.5px solid #333', textAlign: 'center' }}>Later</div>
            </div>
            {[
              { feature: 'Starting price', traffikora: '$97/mo', other: '$18+/mo (very limited)' },
              { feature: 'Content creation', traffikora: '\u2713 AI-generated automatically', other: '\u2717 You write everything' },
              { feature: 'Google SEO automation', traffikora: '\u2713 Included', other: '\u2717 Not available' },
              { feature: 'AI engine optimization', traffikora: '\u2713 Included', other: '\u2717 Not available' },
              { feature: 'Blog post automation', traffikora: '\u2713 Automated', other: '\u2717 Not included' },
              { feature: 'Google Business Profile', traffikora: '\u2713 Automated', other: '\u2717 Not included' },
              { feature: 'TikTok + YouTube', traffikora: '\u2713 Automated', other: 'Limited' },
              { feature: 'Schema markup', traffikora: '\u2713 Auto-injected', other: '\u2717 Not included' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '2.5px solid #111', background: i % 2 === 0 ? '#fff' : '#f7f7f7' }}>
                <div style={{ padding: '18px 32px', fontSize: '14px', color: '#555', fontWeight: 500 }}>{row.feature}</div>
                <div style={{ padding: '18px 32px', fontSize: '14px', color: '#E8610A', fontWeight: 700, borderLeft: '2.5px solid #111', textAlign: 'center' }}>{row.traffikora}</div>
                <div style={{ padding: '18px 32px', fontSize: '14px', color: '#999', fontWeight: 400, borderLeft: '2.5px solid #111', textAlign: 'center' }}>{row.other}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f7f7', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', color: '#E8610A', letterSpacing: '4px', marginBottom: '24px' }}>\u2605\u2605\u2605\u2605\u2605</div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#111', lineHeight: 1.7, marginBottom: '32px', fontStyle: 'italic' }}>"Later was fine for Instagram but I was still doing everything else myself. Traffikora replaced Later and five other tools. Now it all runs without me touching it."</p>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111' }}>Priya M.</div>
          <div style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>Austin, TX — Boutique Owner</div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px', lineHeight: 1.1 }}>Go beyond Instagram scheduling.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Try Traffikora free for 7 days and see what full automation looks like.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

const yext = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function VsYextPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Traffikora vs Yext</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Yext manages your listings. Traffikora grows your entire business.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Yext syncs your business info across directories — and charges $500+/mo for it. Traffikora does that and automates your full marketing machine for $97/mo.</p>
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
              <div style={{ padding: '20px 32px', fontFamily: 'DM Sans, sans-serif', fontSize: '18px', fontWeight: 700, color: '#555', borderLeft: '2.5px solid #333', textAlign: 'center' }}>Yext</div>
            </div>
            {[
              { feature: 'Starting price', traffikora: '$97/mo', other: '$500+/mo' },
              { feature: 'Content creation', traffikora: '\u2713 AI-generated automatically', other: '\u2717 Not included' },
              { feature: 'Google SEO automation', traffikora: '\u2713 Included', other: '\u2717 Not included' },
              { feature: 'AI engine optimization', traffikora: '\u2713 Included', other: '\u2717 Not available' },
              { feature: 'Social media automation', traffikora: '\u2713 9+ platforms', other: '\u2717 Not included' },
              { feature: 'Blog post automation', traffikora: '\u2713 Automated', other: '\u2717 Not included' },
              { feature: 'Google Business Profile posts', traffikora: '\u2713 Automated', other: 'Listing sync only' },
              { feature: 'Built for small businesses', traffikora: '\u2713 Yes', other: '\u2717 Enterprise pricing' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '2.5px solid #111', background: i % 2 === 0 ? '#fff' : '#f7f7f7' }}>
                <div style={{ padding: '18px 32px', fontSize: '14px', color: '#555', fontWeight: 500 }}>{row.feature}</div>
                <div style={{ padding: '18px 32px', fontSize: '14px', color: '#E8610A', fontWeight: 700, borderLeft: '2.5px solid #111', textAlign: 'center' }}>{row.traffikora}</div>
                <div style={{ padding: '18px 32px', fontSize: '14px', color: '#999', fontWeight: 400, borderLeft: '2.5px solid #111', textAlign: 'center' }}>{row.other}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f7f7', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', color: '#E8610A', letterSpacing: '4px', marginBottom: '24px' }}>\u2605\u2605\u2605\u2605\u2605</div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#111', lineHeight: 1.7, marginBottom: '32px', fontStyle: 'italic' }}>"Yext was costing me $600 a month just to keep my business info synced. Traffikora does that and a hundred other things for $97. It was the easiest decision I ever made."</p>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111' }}>Carol H.</div>
          <div style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>Orlando, FL — Spa Owner</div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px', lineHeight: 1.1 }}>Stop paying $500/mo just to sync a listing.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Try Traffikora free for 7 days and get your full marketing machine.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync('src/app/compare/traffikora-vs-semrush/page.tsx', semrush, 'utf8');
fs.writeFileSync('src/app/compare/traffikora-vs-later/page.tsx', later, 'utf8');
fs.writeFileSync('src/app/compare/traffikora-vs-yext/page.tsx', yext, 'utf8');
console.log('Done');