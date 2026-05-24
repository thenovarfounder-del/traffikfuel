const fs = require('fs');

const content = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function VsBirdeyePage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Comparison</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Traffikora vs Birdeye: Which Is Better for Local Business Marketing?</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Birdeye focuses on reviews. Traffikora automates your entire marketing presence. Here is the difference.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Try Traffikora Free for 7 Days</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center' }}>Feature-by-Feature Comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'DM Sans, sans-serif' }}>
              <thead>
                <tr style={{ background: '#111', color: '#fff' }}>
                  <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '15px', fontWeight: 600 }}>Feature</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontSize: '15px', fontWeight: 600, color: '#E8610A' }}>Traffikora</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontSize: '15px', fontWeight: 600 }}>Birdeye</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Review Monitoring', '\u2713', '\u2713'],
                  ['Review Response Automation', '\u2713', '\u2713'],
                  ['Google Business Profile Automation', '\u2713', 'Partial'],
                  ['Daily Social Media Posting', '\u2713', '\u2715'],
                  ['AI Engine Optimization', '\u2713', '\u2715'],
                  ['Local SEO Automation', '\u2713', 'Partial'],
                  ['Automated Content Creation', '\u2713', '\u2715'],
                  ['Starting Price', '$97/mo', '$299/mo'],
                  ['Free Trial', '7 Days', 'Demo Only'],
                  ['Setup Time', 'Under 5 Min', '30+ Min'],
                ].map(([feature, traffikora, birdeye], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '14px 24px', fontSize: '15px', color: '#111', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '14px 24px', textAlign: 'center', fontSize: '15px', color: traffikora === '\u2713' ? '#16a34a' : '#111', fontWeight: traffikora === '\u2713' ? 700 : 400 }}>{traffikora}</td>
                    <td style={{ padding: '14px 24px', textAlign: 'center', fontSize: '15px', color: birdeye === '\u2715' ? '#dc2626' : '#111' }}>{birdeye}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center' }}>Why Local Businesses Choose Traffikora Over Birdeye</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Birdeye Is Reputation Only', body: 'Birdeye built its product around review management. That is useful but it is only one piece of your marketing. Traffikora handles everything.' },
              { title: 'Traffikora Costs 3x Less', body: 'Birdeye starts at $299/month. Traffikora starts at $97/month and does far more. Social media, SEO, AI optimization, and reviews all in one.' },
              { title: 'AI Engine Optimization', body: 'Birdeye does not optimize you for ChatGPT, Gemini, or Claude. Traffikora does. That is where local search is heading.' },
              { title: 'No Setup Headaches', body: 'Birdeye requires onboarding calls and 30+ minutes of setup. Traffikora connects in under 5 minutes.' },
              { title: 'Social Media Included', body: 'Birdeye does not post to your social accounts. Traffikora creates and publishes daily content automatically.' },
              { title: 'Built for Small Business', body: 'Birdeye targets enterprise brands. Traffikora is purpose-built for independent local businesses.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '32px', border: '2.5px solid #111', background: '#fff' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '24px' }}>The Verdict</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#ccc', lineHeight: 1.8, marginBottom: '16px' }}>Birdeye is a solid review tool. But if you want your entire marketing presence automated, it falls short.</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#ccc', lineHeight: 1.8 }}>Traffikora automates social media, Google Business Profile, local SEO, AI engine optimization, and reviews. All for less than a third of the price.</p>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Switch to the Platform That Does More for Less.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync('src/app/compare/traffikora-vs-birdeye/page.tsx', content);
console.log('Written: src/app/compare/traffikora-vs-birdeye/page.tsx');