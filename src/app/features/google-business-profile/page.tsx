// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function GBPPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <Nav />

      {/* HERO */}
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Google Business Profile</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Your Google Business Profile — optimized, active, and ranking. Automatically.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora manages and optimizes your Google Business Profile around the clock so you rank higher in local search and on Google Maps — without lifting a finger.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
          <Link href="/how-it-works" style={{ background: 'transparent', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>See How It Works</Link>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#111', padding: '0 32px 80px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>76%</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>of people who search for a local business on Google visit within 24 hours</p>
            </div>
            <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>88%</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>of consumers trust online reviews as much as personal recommendations</p>
            </div>
            <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>4x</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>more likely to be considered reputable with a complete GBP listing</p>
            </div>
        </div>
      </section>

      {/* WHAT IS GBP */}
      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px' }}>Why It Matters</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 700, color: '#111', marginBottom: '24px', lineHeight: 1.2 }}>Your GBP listing is your most powerful local marketing asset.</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>When someone searches for a business like yours on Google, your Google Business Profile is the first thing they see — before your website, before your ads, before anything else. It shows your hours, location, photos, reviews, and recent posts.</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8, marginBottom: '32px' }}>Google ranks businesses with active, complete, optimized GBP listings higher in local search and on Google Maps. Most small businesses set it up once and never touch it again. Traffikora keeps yours continuously optimized — automatically.</p>
            <Link href="/signup" style={{ background: '#111', color: '#fff', padding: '14px 32px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, border: '2.5px solid #111', display: 'inline-block' }}>Get Started Free</Link>
          </div>
          <div style={{ background: '#f9f9f9', border: '2.5px solid #111', padding: '40px' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '20px' }}>A neglected GBP costs you customers</p>
            {["Ranks lower in local search and Google Maps", "Missing posts signal an inactive business to Google", "Unanswered reviews damage trust and conversions", "Outdated hours and info frustrate customers", "Competitors with active listings rank above you"].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <span style={{ color: '#cc0000', fontSize: '16px', marginTop: '2px' }}>✗</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555' }}>{item}</p>
              </div>
            ))}
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', margin: '28px 0 20px' }}>Traffikora fixes all of this automatically</p>
            {["Continuous optimization keeps you ranking higher", "Weekly posts signal activity to Google", "Instant review alerts so you never miss feedback", "Business info monitored and kept accurate", "You stay ahead of competitors who do nothing"].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <span style={{ color: '#E8610A', fontSize: '16px', marginTop: '2px' }}>✓</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#111' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section style={{ background: '#f9f9f9', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>What Traffikora Does</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>Everything your GBP needs. Done automatically.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              <div style={{ border: '2.5px solid #111', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Automated GBP Posts</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Traffikora publishes fresh posts to your Google Business Profile on a consistent schedule — promotions, updates, events, and more — without you writing a single word.</p>
              </div>
              <div style={{ border: '2.5px solid #111', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Review Monitoring & Alerts</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Every new review is monitored in real time. You get instant alerts so you never miss customer feedback and can respond before it affects your reputation.</p>
              </div>
              <div style={{ border: '2.5px solid #111', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Photo Optimization</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Traffikora ensures your GBP always has fresh, optimized photos that signal to Google your business is active and engaged.</p>
              </div>
              <div style={{ border: '2.5px solid #111', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Keyword Optimization</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Your business description, services, and posts are continuously optimized with the keywords your customers are actually searching for.</p>
              </div>
              <div style={{ border: '2.5px solid #111', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Business Info Accuracy</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Hours, address, phone number, and category are monitored and kept accurate across Google — because inconsistent info kills local rankings.</p>
              </div>
              <div style={{ border: '2.5px solid #111', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Q&A Management</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Traffikora monitors and responds to questions on your Google Business Profile, keeping your listing complete and authoritative.</p>
              </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>How It Works</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '56px' }}>Connect once. Google rewards you forever.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>01</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Connect your Google Business Profile</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Link your GBP account in minutes. One-time setup, no technical skills required.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>02</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Traffikora audits your current listing</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>We identify gaps, missing information, outdated content, and optimization opportunities.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>03</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Optimization runs automatically</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Posts go live on schedule, reviews are monitored, keywords are updated, and your listing stays fresh — all without you doing anything.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>04</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Your local rankings improve</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Google rewards active, complete, optimized listings with higher placement in local search results and Google Maps.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f9f9f9', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>FAQ</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>Common questions about GBP.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>What is Google Business Profile?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Google Business Profile (formerly Google My Business) is the free listing that appears when someone searches for your business or a business like yours on Google Search and Google Maps. It shows your hours, address, phone number, reviews, photos, and posts. It is one of the most important local SEO assets a small business can have.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Why does my Google Business Profile matter?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Your GBP listing is often the first thing a potential customer sees when they search for your business. A complete, optimized, active listing ranks higher in local search, appears more prominently on Google Maps, and converts more visitors into customers than an incomplete or neglected one.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>How often does Traffikora post to my GBP?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Traffikora publishes posts to your Google Business Profile on a regular schedule — typically weekly — which is the frequency Google recommends for maximum visibility. The exact schedule depends on your plan.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Can Traffikora respond to my Google reviews?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Traffikora monitors all incoming reviews and alerts you instantly. Automated response drafts are available on higher plans. Responding to reviews is one of the strongest signals Google uses to rank local businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Start ranking higher on Google today.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
