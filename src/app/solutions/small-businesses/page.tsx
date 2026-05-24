// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function SmallBusinessesPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Small Businesses</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Your big marketing machine. Small business price.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora gives small businesses the same automated marketing power as Fortune 500 companies — starting at $97/mo.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>The Problem</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '24px', lineHeight: 1.1 }}>You did not start a business to spend all day on marketing.</h2>
          <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.8, maxWidth: '700px', marginBottom: '48px' }}>Most small business owners spend 10+ hours a week on marketing — and still feel like they are falling behind. Traffikora eliminates that entirely. Set it once, and it runs forever.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { stat: '10+', label: 'hours per week small business owners spend on marketing' },
              { stat: '6x', label: 'more online visibility with consistent automated marketing' },
              { stat: '$0', label: 'extra staff needed — Traffikora runs everything automatically' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '40px 32px', borderRight: i < 2 ? '2.5px solid #111' : 'none', background: '#fff' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1 }}>{item.stat}</div>
                <div style={{ fontSize: '15px', color: '#555', marginTop: '12px', lineHeight: 1.6 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f7f7', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>Everything Included</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center', lineHeight: 1.1 }}>One platform. Every channel.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { icon: '🔍', title: 'Google SEO Automation', desc: 'Rank higher on Google with automated blog posts, schema markup, and SEO content published every week.' },
              { icon: '📲', title: 'Social Media Autopilot', desc: 'Facebook, Instagram, TikTok, YouTube, LinkedIn — your content goes everywhere, every day, without you.' },
              { icon: '🤖', title: 'AI Engine Optimization', desc: 'Get found on ChatGPT, Claude, Gemini, and Perplexity — the future of how customers find businesses.' },
              { icon: '📍', title: 'Google Business Profile', desc: 'Automated posts keep your Google listing active and push you higher in local map pack results.' },
              { icon: '📝', title: 'Blog Content Automation', desc: 'Fresh SEO blog posts published to your website automatically — no writer needed.' },
              { icon: '📈', title: 'Simple Analytics', desc: 'See your performance across every platform in one clean dashboard. No agency required.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '36px 32px', borderRight: i % 2 === 0 ? '2.5px solid #111' : 'none', borderBottom: i < 4 ? '2.5px solid #111' : 'none', background: '#fff' }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>{item.title}</div>
                <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', color: '#E8610A', letterSpacing: '4px', marginBottom: '24px' }}>★★★★★</div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#111', lineHeight: 1.7, marginBottom: '32px', fontStyle: 'italic' }}>"I run a plumbing business by myself. I had zero time for marketing. Traffikora handles everything now — Google, social, all of it. My phone rings every single day."</p>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111' }}>Tony R.</div>
          <div style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>Dallas, TX — Plumbing Business Owner</div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px', lineHeight: 1.1 }}>Set it once. It markets forever.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
