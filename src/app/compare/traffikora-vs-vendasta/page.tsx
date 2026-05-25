// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function VendastaComparePage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Traffikora vs Vendasta</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Traffikora vs Vendasta: Which Is Right for Your Business?</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Vendasta is built for agencies reselling to clients. Traffikora is built for small businesses who want marketing that runs itself.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Try Traffikora Free for 7 Days</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center' }}>Side-by-Side Comparison</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'DM Sans, sans-serif' }}>
              <thead>
                <tr style={{ background: '#111', color: '#fff' }}>
                  <th style={{ padding: '16px 24px', textAlign: 'left', fontSize: '15px' }}>Feature</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontSize: '15px' }}>Traffikora</th>
                  <th style={{ padding: '16px 24px', textAlign: 'center', fontSize: '15px' }}>Vendasta</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Built for small businesses', '✅', '❌'],
                  ['AI engine optimization (ChatGPT, Gemini)', '✅', '❌'],
                  ['Fully automated — no manual work', '✅', '❌'],
                  ['Google Business Profile automation', '✅', '✅'],
                  ['Review generation', '✅', '✅'],
                  ['Social media automation', '✅', '✅'],
                  ['Simple setup — no agency needed', '✅', '❌'],
                  ['Transparent flat-rate pricing', '✅', '❌'],
                  ['7-day free trial', '✅', '❌'],
                ].map(([feature, traffikora, vendasta], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? '#f7f7f7' : '#fff', borderBottom: '1px solid #e5e5e5' }}>
                    <td style={{ padding: '16px 24px', fontSize: '15px', color: '#111' }}>{feature}</td>
                    <td style={{ padding: '16px 24px', textAlign: 'center', fontSize: '18px' }}>{traffikora}</td>
                    <td style={{ padding: '16px 24px', textAlign: 'center', fontSize: '18px' }}>{vendasta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f7f7', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px', textAlign: 'center' }}>The Key Difference</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>Vendasta is a white-label platform designed for marketing agencies to resell services. It’s complex, requires agency involvement, and wasn’t built with the small business owner in mind. Traffikora is the opposite.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'No Agency Required', body: 'Traffikora connects directly to your accounts. No middleman, no markup, no waiting on an agency to make changes.' },
              { title: 'AI Search Built In', body: 'Traffikora optimizes your business for ChatGPT, Gemini, Perplexity, and every major AI engine. Vendasta does not.' },
              { title: 'Set It and Forget It', body: 'Traffikora runs fully automatically after a one-time setup. Vendasta requires ongoing agency management to deliver results.' },
            ].map((card) => (
              <div key={card.title} style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>The smarter choice for small businesses.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
