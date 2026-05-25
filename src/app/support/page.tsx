// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function SupportPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Support</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>We’re here to help.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>Real support from real people. We respond fast.</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '64px' }}>
            {[
              { title: 'Email Support', desc: 'Send us a message anytime at support@traffikora.com and we’ll get back to you within 1 business day.', action: 'mailto:support@traffikora.com', label: 'Email Us' },
              { title: 'Live Chat', desc: 'Chat with us in real time using the chat widget in the bottom right corner of any page.', action: null, label: 'Open Chat' },
              { title: 'FAQ', desc: 'Browse our frequently asked questions for quick answers to the most common questions.', action: '/faq', label: 'View FAQ' }
            ].map((item, i) => (
              <div key={i} style={{ border: '2.5px solid #111', padding: '40px 32px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>{item.title}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7, marginBottom: '28px' }}>{item.desc}</p>
                {item.action ? (
                  <Link href={item.action} style={{ background: '#111', color: '#fff', padding: '12px 28px', textDecoration: 'none', fontSize: '15px', fontWeight: 600, border: '2.5px solid #111', display: 'inline-block' }}>{item.label}</Link>
                ) : (
                  <button onClick={() => { if (typeof window !== 'undefined' && window.$crisp) window.$crisp.push(['do', 'chat:open']) }} style={{ background: '#111', color: '#fff', padding: '12px 28px', fontSize: '15px', fontWeight: 600, border: '2.5px solid #111', cursor: 'pointer' }}>{item.label}</button>
                )}
              </div>
            ))}
          </div>

          <div style={{ borderTop: '2.5px solid #111', paddingTop: '64px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111' }}>Common Questions</h2>
            </div>
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              {[
                { q: 'How do I connect my Google Business Profile?', a: 'After signing up, go to your dashboard and click Connect Google. Follow the OAuth flow — it takes about 2 minutes.' },
                { q: 'Can I cancel anytime?', a: 'Yes. Cancel anytime from your dashboard settings. No contracts, no cancellation fees.' },
                { q: 'How long does setup take?', a: 'Most businesses are fully set up in under 10 minutes. Connect your accounts, answer a few questions, and Traffikora handles the rest.' },
                { q: 'What if I need help with setup?', a: 'Email us at support@traffikora.com or use the live chat. We’ll walk you through everything.' }
              ].map((item, i) => (
                <div key={i} style={{ borderBottom: '2.5px solid #111', padding: '28px 0' }}>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>{item.q}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Still have questions?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>We’re happy to help. Reach out anytime.</p>
        <Link href="/contact" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Contact Us</Link>
      </section>

      <Footer />
    </>
  )
}
