// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function LocalSEOPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Local SEO Automation</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Rank higher in local search. Automatically.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora automates every aspect of local SEO — citations, keywords, schema markup, and content — so more local customers find your business on Google and AI engines.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
          <Link href="/how-it-works" style={{ background: 'transparent', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>See How It Works</Link>
        </div>
      </section>
      <section style={{ background: '#111', padding: '0 32px 80px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>46%</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>of all Google searches have local intent</p>
          </div>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>28%</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>of local searches result in a purchase within 24 hours</p>
          </div>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>5x</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>more visibility for businesses with consistent citations</p>
          </div>
        </div>
      </section>
      <section style={{ background: '#f9f9f9', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>What Traffikora Does</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>Every local SEO task. Automated.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Citation Building</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Traffikora builds and maintains your business listings across hundreds of directories — Google, Yelp, Apple Maps, Bing Places, and more — keeping your NAP data consistent everywhere.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Keyword Rank Tracking</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Track exactly where your business ranks for your most important local keywords and watch your position climb as Traffikora optimizes your presence month after month.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Local Content Publishing</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Traffikora creates and publishes locally optimized content — blog posts, GBP updates, social posts — that targets the keywords your local customers are searching for.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>NAP Consistency Monitoring</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Your business Name, Address, and Phone number must be identical everywhere online. Traffikora monitors and corrects inconsistencies that silently kill your local rankings.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Competitor Analysis</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>See exactly how your local competitors are ranking and what they are doing. Traffikora uses this data to identify opportunities and keep you ahead.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Schema Markup Automation</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Traffikora automatically generates and maintains LocalBusiness schema markup on your website — the structured data Google uses to understand and rank local businesses.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>How It Works</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '56px' }}>Set it once. Rankings improve forever.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>01</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Connect your business</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Tell Traffikora your business name, address, phone number, category, and target service area. One-time setup.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>02</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Full local SEO audit</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Traffikora scans your current local presence — citations, rankings, GBP status, competitor positions, and schema markup — and identifies every gap.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>03</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Automated optimization begins</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Citations are built, keywords are targeted, content is published, and schema is deployed — all automatically on an ongoing basis.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>04</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Rankings climb month over month</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Local SEO compounds over time. Traffikora keeps optimizing so your rankings improve every month, not just once.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: '#f9f9f9', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>FAQ</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>Common questions about local SEO.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>What is local SEO?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Local SEO is the process of optimizing your online presence so your business appears in search results when people in your area search for products or services you offer. It covers Google Business Profile, local citations, keyword rankings, online reviews, and schema markup — all of which Traffikora automates.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>What is a citation in local SEO?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>A citation is any online mention of your business name, address, and phone number (NAP). Citations on directories like Yelp, Apple Maps, Bing Places, and hundreds of others tell Google your business is legitimate and help determine your local search ranking. Inconsistent citations are one of the most common reasons businesses rank poorly in local search.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>How long does local SEO take to work?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Most businesses see meaningful ranking improvements within 60 to 90 days of consistent local SEO work. Because Traffikora runs continuously and automatically, results compound over time — the longer it runs, the stronger your local presence becomes.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Does Traffikora work for businesses with multiple locations?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Yes. Traffikora supports multi-location businesses and marketing agencies managing multiple clients. Each location gets its own optimized GBP, citations, and local SEO strategy.</p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Start ranking higher in local search today.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>
      <Footer />
    </>
  )
}
