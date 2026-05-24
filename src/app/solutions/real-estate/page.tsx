// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function RealEstatePage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      {/* HERO */}
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Real Estate Agents</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>More listings. More buyers. Zero extra work.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora automates your entire online presence — Google, social media, AI engines, and more — so you can focus on closing deals.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      {/* PROBLEM */}
      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>The Problem</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '24px', lineHeight: 1.1 }}>Buyers and sellers search online first. Are you showing up?</h2>
          <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.8, maxWidth: '700px', marginBottom: '48px' }}>93% of home buyers start their search online. If your name isn't appearing on Google, TikTok, YouTube, and AI engines like ChatGPT — you're invisible to your next client.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { stat: '93%', label: 'of buyers search online before contacting an agent' },
              { stat: '4x', label: 'more leads for agents with consistent content marketing' },
              { stat: '72%', label: 'of sellers hire the first agent they find online' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '40px 32px', borderRight: i < 2 ? '2.5px solid #111' : 'none', background: '#fff' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1 }}>{item.stat}</div>
                <div style={{ fontSize: '15px', color: '#555', marginTop: '12px', lineHeight: 1.6 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: '#f7f7f7', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>What Traffikora Does For You</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center', lineHeight: 1.1 }}>Your full marketing machine. Automated.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { icon: '🏡', title: 'Listing Content Automation', desc: 'Turn every new listing into SEO blog posts, social media content, and video scripts — automatically published across all platforms.' },
              { icon: '🔍', title: 'Google SEO Domination', desc: 'Rank for searches like "best real estate agent in [city]" with automated SEO content and schema markup injected into your site.' },
              { icon: '🤖', title: 'AI Engine Optimization', desc: 'When someone asks ChatGPT or Claude to recommend a real estate agent, Traffikora makes sure your name comes up.' },
              { icon: '📱', title: 'Social Media on Autopilot', desc: 'Facebook, Instagram, TikTok, YouTube Shorts, LinkedIn — your content goes everywhere, every day, without you touching it.' },
              { icon: '⭐', title: 'Google Business Profile', desc: 'Automated posts to your Google Business Profile keep your listing fresh and boost your local map pack rankings.' },
              { icon: '📊', title: 'Analytics and Reporting', desc: 'See exactly how your marketing is performing across every platform — all in one clean dashboard.' },
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

      {/* HOW IT WORKS */}
      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>How It Works</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center', lineHeight: 1.1 }}>Up and running in minutes.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { n: '1', title: 'Connect your accounts', desc: 'Link your website, Google Business Profile, and social accounts in one click. Takes under 5 minutes.' },
              { n: '2', title: 'Tell us about your market', desc: 'Answer a few questions about your city, specialty, and ideal clients. Our AI learns your voice.' },
              { n: '3', title: 'Watch the leads come in', desc: 'Traffikora starts publishing content immediately and never stops — 24/7, 365 days a year.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '46px 34px', textAlign: 'center', borderRight: i < 2 ? '2.5px solid #111' : 'none', background: '#fff' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: i === 0 ? '#E8610A' : '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#fff' }}>{item.n}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>{item.title}</div>
                <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ background: '#f7f7f7', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', color: '#E8610A', letterSpacing: '4px', marginBottom: '24px' }}>★★★★★</div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#111', lineHeight: 1.7, marginBottom: '32px', fontStyle: 'italic' }}>"I listed a property on Monday. By Wednesday Traffikora had published 6 blog posts, 12 social posts, and a YouTube Short. I got two buyer inquiries that week from people who found me on Google."</p>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111' }}>David R.</div>
          <div style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>Tampa, FL — Real Estate Agent</div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px', lineHeight: 1.1 }}>Your next client is searching right now.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
