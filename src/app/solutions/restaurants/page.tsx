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

      {/* HERO */}
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>For Restaurants</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Fill more tables. Without touching your phone.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora handles your restaurant marketing automatically — social media, Google Business Profile, local SEO, and AI search — so you can focus on the food and your guests.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
          <Link href="/pricing" style={{ background: 'transparent', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>See Pricing</Link>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#111', padding: '0 32px 80px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>90%</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>of diners research a restaurant online before visiting</p>
          </div>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>4x</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>more likely customers choose a restaurant with active social media</p>
          </div>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>68%</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>of restaurant discoveries now happen on Google Maps and AI search</p>
          </div>
        </div>
      </section>

      {/* WHAT TRAFFIKORA DOES */}
      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>What Traffikora Does</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>Every marketing channel. Done for you.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Social Media Posts</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Mouth-watering posts about your dishes, specials, and events published to Instagram, Facebook, TikTok, and more — every week, automatically.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Google Business Profile</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Weekly GBP posts, menu updates, photo uploads, and review responses keep your restaurant ranking at the top of local search.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Local SEO</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Citation building and keyword optimization ensure your restaurant shows up when locals search for places to eat near them.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>AI Engine Optimization</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>When someone asks ChatGPT or Perplexity where to eat, your restaurant gets recommended. Traffikora optimizes for every AI search engine.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Review Management</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Automated responses to Google reviews keep your reputation strong and show new customers you care about their experience.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Monthly Reports</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>See exactly how many people found your restaurant, what content performed best, and how your rankings improved — every month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section style={{ background: '#f9f9f9', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div style={{ background: '#fff', border: '2.5px solid #111', padding: '40px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#111', marginBottom: '24px' }}>Without Traffikora</h3>
            {['Posting food photos sporadically between shifts', 'Google Business Profile outdated or ignored', 'Invisible when locals search for restaurants nearby', 'Losing customers to competitors with better online presence', 'Paying for ads with no clear return', 'No time to respond to reviews'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <span style={{ color: '#cc0000', fontSize: '16px', marginTop: '2px' }}>X</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555' }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#111', border: '2.5px solid #111', padding: '40px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#E8610A', marginBottom: '24px' }}>With Traffikora</h3>
            {['Consistent posts showcasing your food every week', 'GBP fully optimized and updated automatically', 'Ranking at the top when locals search for food nearby', 'Standing out with an active, professional online presence', 'Organic visibility growing without ad spend', 'Reviews responded to automatically — every one'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <span style={{ color: '#E8610A', fontSize: '16px', marginTop: '2px' }}>O</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>FAQ</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>Questions from restaurant owners.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Can Traffikora post about our specials and menu items?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Yes. During onboarding you share your menu, specials, and brand details. Traffikora uses that to create posts about your actual food, offers, and events — not generic content.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Will this work for a small local restaurant?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Absolutely. Traffikora is built for local businesses. The local SEO and Google Business Profile features are especially powerful for restaurants competing in their neighborhood.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>How much time does setup take?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>About 15 minutes. Connect your accounts, answer a few questions about your restaurant, and Traffikora takes it from there. No ongoing effort required from you.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Does Traffikora work for multiple locations?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Yes. Multi-location restaurants can manage all locations under one Traffikora account. Each location gets its own optimized profiles and content strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>More diners. Less marketing work.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
