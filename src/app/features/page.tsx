// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function FeaturesPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Features</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Everything your business needs to dominate online.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>One platform. Every channel. Fully automated from day one.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Core Features</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 900, color: '#111' }}>Set it once. It markets forever.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { title: 'AI Engine Optimization', desc: 'Get found on Claude, ChatGPT, Gemini, Copilot, and Perplexity — not just Google. We optimize your content for every major AI engine.' },
              { title: 'Google Business Profile', desc: 'Automated updates, posts, and review responses on your Google Business Profile — keeping you visible in local search 24/7.' },
              { title: 'Review Generation', desc: 'Automatically request and collect 5-star reviews from your customers across Google, Facebook, and more.' },
              { title: 'Social Media Automation', desc: 'Consistent, branded content posted to Facebook and Instagram automatically — without lifting a finger.' },
              { title: 'Local SEO', desc: 'Citations, backlinks, and on-page SEO optimized for your city and industry so you rank above competitors.' },
              { title: 'Content Marketing', desc: 'Blog posts, landing pages, and location pages written and published automatically to drive organic traffic.' },
              { title: 'Email Marketing', desc: 'Automated email sequences that nurture leads, win back customers, and keep your audience engaged.' },
              { title: 'Analytics Dashboard', desc: 'See exactly how your marketing is performing across every channel in one clean, simple dashboard.' },
              { title: 'Multi-Location Support', desc: 'Running more than one location? Traffikora scales seamlessly across all your locations from one account.' }
            ].map((item, i) => (
              <div key={i} style={{ border: '2.5px solid #111', padding: '36px 28px' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>{item.title}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f8f8f8', padding: '80px 32px', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>The Traffikora Difference</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 900, color: '#111', marginBottom: '24px' }}>We optimize for Google AND every AI engine.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.8 }}>Every other platform stops at Google. Traffikora goes further — optimizing your business to appear in AI-generated answers on Claude, ChatGPT, Gemini, Copilot, and Perplexity. That’s where your next customers are searching.</p>
          <Link href="/features/ai-engine-optimization" style={{ background: '#111', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #111', display: 'inline-block' }}>Learn About AI Engine Optimization</Link>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to automate your marketing?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
