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
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>How to Get More Google Reviews (Without Asking Awkwardly)</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>Google reviews are the single biggest driver of local search rankings. Here’s how to get them on autopilot.</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>Why Google reviews matter so much</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>Google uses review quantity, recency, and rating as major ranking factors for local search. A business with 200 reviews almost always outranks one with 20 — even if the product is identical. Reviews also build trust instantly with new customers.</p>
          </div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>The problem with asking manually</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>Most businesses know they should ask for reviews. But it’s awkward to ask in person, easy to forget to follow up, and impossible to do at scale. The businesses with the most reviews have a system — not just good intentions.</p>
          </div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>The right time to ask</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>Timing is everything. The best moment to request a review is right after a positive experience — when the customer is still happy. A text message sent within an hour of a completed service converts dramatically better than an email sent days later.</p>
          </div>
          <div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>How Traffikora automates review generation</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>Traffikora automatically sends review requests to your customers at exactly the right moment. No awkward asking. No manual follow-up. Just a steady stream of new 5-star reviews building your reputation on autopilot.</p>
          </div>
          <div style={{ borderTop: '2.5px solid #111', paddingTop: '40px', marginTop: '40px' }}>
            <Link href="/blog" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>← Back to Blog</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to automate your marketing?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No no credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Today</Link>
      </section>

      <Footer />
    </>
  )
}
