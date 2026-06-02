// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>About Us</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>We built the marketing machine small businesses deserve.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora automates your entire marketing presence across Google, AI engines, and social media — forever.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block', borderRadius: '8px' }}>Start Free Today →</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Our Mission</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 900, color: '#111', lineHeight: 1.15, marginBottom: '24px' }}>Set it once. It markets forever.</h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>Small businesses are getting crushed by marketing complexity. Between Google, Facebook, Instagram, AI search engines, and review platforms — it’s impossible to keep up without a full marketing team.</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>Traffikora changes that. Connect your accounts once and our platform handles everything automatically — content, SEO, AI engine optimization, social media, and more — every single day.</p>
            </div>
            <div style={{ background: '#f8f8f8', border: '2.5px solid #111', padding: '48px 40px' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '32px' }}>By the numbers</p>
              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', marginBottom: '4px' }}>9+</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555' }}>Platforms automated simultaneously</p>
              </div>
              <div style={{ marginBottom: '28px' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', marginBottom: '4px' }}>24/7</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555' }}>AI agents running while you sleep</p>
              </div>
              <div>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', marginBottom: '4px' }}>$0</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555' }}>Free plan — no credit card ever needed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#f8f8f8', padding: '80px 32px', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Why We Built This</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 900, color: '#111', marginBottom: '24px' }}>Every other platform optimizes for Google only.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.8 }}>We built Traffikora to optimize for Google AND every major AI engine — Claude, ChatGPT, Gemini, Copilot, Perplexity, and more. Because that’s where your customers are searching now.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { title: 'AI Engine Optimization', desc: 'Get found on Claude, ChatGPT, Gemini, Copilot, and Perplexity — not just Google.' },
              { title: 'Full Marketing Automation', desc: 'Content, social media, SEO, blog posts — all handled automatically after a one-time setup.' },
              { title: 'Built for Small Business', desc: 'No agencies, no complexity, no ongoing work. Just results that grow your business every day.' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', border: '2.5px solid #111', padding: '36px 28px', textAlign: 'left' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>{item.title}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#0a0a0a', padding: '80px 32px', borderTop: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Our Story</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 900, color: '#fff', marginBottom: '24px' }}>Built by marketers. For business owners.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#ccc', lineHeight: 1.9, marginBottom: '20px' }}>
                Traffikora was built because small business owners deserve the same marketing firepower as the big guys — without the agency price tag or the learning curve.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#ccc', lineHeight: 1.9, marginBottom: '20px' }}>
                We watched thousands of small businesses struggle to keep up with daily content creation, SEO updates, and social media posting while trying to run their actual businesses. It was unsustainable.
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#ccc', lineHeight: 1.9 }}>
                So we built a platform that does it all automatically. Connect once. Set your preferences. Then watch your online presence grow across Google, AI engines, and every social platform — without lifting a finger.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '🎯', title: 'Our Goal', desc: 'Make professional marketing automation accessible to every small business owner in America.' },
                { icon: '🚀', title: 'Our Promise', desc: 'You will never have to manually post content again. Traffikora handles it all, every single day.' },
                { icon: '💪', title: 'Our Advantage', desc: 'The only platform that optimizes for Google AND AI engines like ChatGPT, Claude, and Gemini simultaneously.' }
              ].map((item, i) => (
                <div key={i} style={{ background: '#111', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '28px', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>{item.title}</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#94a3b8', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to put your marketing on autopilot?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free plan available — no credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block', borderRadius: '8px' }}>Start Free Today →</Link>
      </section>

      <Footer />
    </>
  )
}
