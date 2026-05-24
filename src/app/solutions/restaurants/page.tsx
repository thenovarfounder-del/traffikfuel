// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function RestaurantsPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Restaurants</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Fill more tables. Without lifting a finger.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora automates your restaurant marketing across Google, social media, and AI engines — so you can focus on the food.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>The Problem</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '24px', lineHeight: 1.1 }}>Hungry customers are searching right now. Are they finding you?</h2>
          <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.8, maxWidth: '700px', marginBottom: '48px' }}>90% of diners research a restaurant online before visiting. If you are not showing up on Google, TikTok, and AI engines — they are walking into your competitor.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { stat: '90%', label: 'of diners research restaurants online before visiting' },
              { stat: '3x', label: 'more reservations for restaurants with active social media' },
              { stat: '64%', label: 'of people use Google to find restaurants near them' },
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
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>What Traffikora Does For You</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center', lineHeight: 1.1 }}>Your restaurant. Everywhere online.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { icon: '🔍', title: 'Google SEO', desc: 'Rank for searches like "best restaurant in [city]" with automated SEO content published to your site every week.' },
              { icon: '📱', title: 'TikTok and Instagram', desc: 'Food content performs incredibly well on social. Traffikora creates and posts it automatically — no filming required.' },
              { icon: '🤖', title: 'AI Engine Optimization', desc: 'When someone asks ChatGPT where to eat in your city, Traffikora makes sure your restaurant is in the answer.' },
              { icon: '📍', title: 'Google Business Profile', desc: 'Automated weekly posts to your Google Business Profile keep your listing fresh and boost your local map ranking.' },
              { icon: '⭐', title: 'Review Generation', desc: 'Automated follow-up sequences encourage happy diners to leave Google reviews — building your reputation on autopilot.' },
              { icon: '📈', title: 'Analytics Dashboard', desc: 'See how your marketing is performing across every platform in one simple dashboard.' },
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
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#111', lineHeight: 1.7, marginBottom: '32px', fontStyle: 'italic' }}>"We went from 200 to 600 Google reviews in 4 months. Our TikTok has 12,000 followers now and we did not post a single thing ourselves. Traffikora did everything."</p>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111' }}>Marco V.</div>
          <div style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>Miami, FL — Restaurant Owner</div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px', lineHeight: 1.1 }}>More customers. Zero extra work.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
