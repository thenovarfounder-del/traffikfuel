// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function BlogPost() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Blog</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Local SEO Tips for Small Businesses That Actually Work in 2026</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>Ranking on Google Maps and local search doesn’t require an agency. Here’s what actually moves the needle.</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>Claim and complete your Google Business Profile</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>This is the single highest-leverage action any local business can take. A fully completed Google Business Profile — with photos, hours, services, and regular posts — dramatically improves your visibility in Google Maps and local search results.</p>
          </div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>Get more reviews consistently</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>Review velocity matters as much as total count. Ten new reviews this month beats 200 reviews from three years ago. Build a system for consistently requesting reviews from every customer and you’ll climb rankings faster than competitors.</p>
          </div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>Build local citations</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>Citations are mentions of your business name, address, and phone number across directories like Yelp, Yellow Pages, and industry-specific sites. Consistency across all citations is critical — even small variations can hurt your rankings.</p>
          </div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>Create locally-relevant content</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>Blog posts and landing pages that target your city and service area help Google understand where you operate and who you serve. A plumber in Austin writing about “Austin plumbing tips” will rank for Austin plumbing searches.</p>
          </div>
          <div style={{ borderTop: '2.5px solid #111', paddingTop: '40px', marginTop: '40px' }}>
            <Link href="/blog" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>← Back to Blog</Link>
          </div>
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
