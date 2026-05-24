const fs = require('fs');

const content = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function BlogPost1() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Local Marketing</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>How to Get More Google Reviews for Your Local Business</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Google reviews are the single most powerful trust signal for local businesses. Here is exactly how to get more of them.</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', lineHeight: 1.9, marginBottom: '32px' }}>If you run a local business, Google reviews are not optional. They determine whether a potential customer calls you or calls your competitor. Businesses with more reviews consistently outrank those with fewer.</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 900, color: '#111', marginBottom: '20px' }}>1. Ask Immediately After the Service</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', lineHeight: 1.9, marginBottom: '32px' }}>The best time to ask for a review is right after you complete a job. The customer is happy, the experience is fresh, and they are most likely to follow through. A simple script: "If you are happy with the work today, would you mind leaving us a quick Google review? It helps our small business more than you know."</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 900, color: '#111', marginBottom: '20px' }}>2. Send a Follow-Up Text or Email</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', lineHeight: 1.9, marginBottom: '32px' }}>Most people mean to leave a review but forget. A follow-up text or email sent within 24 hours dramatically increases your conversion rate. Keep it short, include a direct link to your Google review page, and make it easy to complete in under 60 seconds.</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 900, color: '#111', marginBottom: '20px' }}>3. Respond to Every Review You Already Have</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', lineHeight: 1.9, marginBottom: '32px' }}>When potential customers see that you respond to every review, they trust you more. Respond within 24 hours, thank positive reviewers by name, and address complaints professionally.</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 900, color: '#111', marginBottom: '20px' }}>4. Automate the Entire Process</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', lineHeight: 1.9, marginBottom: '32px' }}>Traffikora monitors your reviews across Google and Yelp and responds to every one automatically. Your reputation grows on autopilot while you focus on running your business.</p>
          <div style={{ background: '#f9f9f9', border: '2.5px solid #111', padding: '40px', marginTop: '48px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 900, marginBottom: '16px' }}>Want Your Reviews Managed Automatically?</h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', marginBottom: '28px' }}>Traffikora monitors and responds to every review on Google and Yelp automatically. Start your free 7-day trial today.</p>
            <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Trial</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Set It Once. It Markets Forever.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync('src/app/blog/how-to-get-more-google-reviews/page.tsx', content);
console.log('Written: src/app/blog/how-to-get-more-google-reviews/page.tsx');