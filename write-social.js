const fs = require('fs');

const content = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function AutoRepairPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      {/* HERO */}
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Auto Repair Shops</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Get More Cars in Your Bay. Automatically.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora automates your marketing so drivers find your shop first on Google, Yelp, and every AI engine when their car needs service.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      {/* PROBLEM */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '20px', textAlign: 'center' }}>Auto Shops Lose Customers to Better-Marketed Competitors Every Day.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>You do quality work but if drivers cannot find you online, they go to the chain shop down the street. Traffikora fixes that automatically.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', marginTop: '56px' }}>
            {[
              { title: 'No Time to Market', body: 'You are under hoods and on lifts all day. Marketing is impossible. Traffikora posts, updates, and optimizes for you 24/7.' },
              { title: 'Invisible on AI Search', body: 'When someone asks ChatGPT or Google AI for an auto shop nearby, most shops never appear. Traffikora gets you in those results.' },
              { title: 'Losing on Reviews', body: 'One bad review without a response destroys trust. Traffikora monitors every platform and responds professionally within hours.' },
            ].map((item, i) => (
              <div key={i} style={{ border: '2.5px solid #111', padding: '36px', background: '#fff' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: '#f9f9f9', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>How It Works</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '56px' }}>Set It Once. It Markets Forever.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { step: '01', title: 'Connect Your Accounts', body: 'Link your Google Business Profile, Facebook, and Instagram in under 5 minutes.' },
              { step: '02', title: 'We Learn Your Shop', body: 'Traffikora reads your services, location, and reviews to build your marketing voice.' },
              { step: '03', title: 'Automation Goes Live', body: 'Daily posts, review responses, and AI optimization start immediately.' },
              { step: '04', title: 'You Get More Cars', body: 'Drivers find you first. Your bays fill up. You focus on the repairs.' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'left', padding: '32px', border: '2.5px solid #111', background: '#fff' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#E8610A', letterSpacing: '2px', marginBottom: '12px' }}>{item.step}</p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center' }}>Everything an Auto Shop Needs to Dominate Locally.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {[
              { title: 'Google Business Profile Automation', body: 'Weekly posts, photo uploads, and service updates keep your profile active and ranking above competitors.' },
              { title: 'AI Engine Optimization', body: 'Get recommended when drivers ask ChatGPT, Gemini, or Claude for an auto shop near them.' },
              { title: 'Daily Social Media Posts', body: 'Maintenance tips, seasonal reminders, and shop updates posted automatically every day.' },
              { title: 'Review Monitoring & Response', body: 'Every Google and Yelp review gets a professional response within hours, building trust with new customers.' },
              { title: 'Local SEO Signals', body: 'Citations, keywords, and backlinks built automatically to push your shop to page one.' },
              { title: 'Monthly Performance Reports', body: 'See exactly how many drivers found you, called you, and visited your shop each month.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '28px', border: '2.5px solid #111', background: '#fff' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '19px', fontWeight: 700, marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{ background: '#111', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '48px' }}>Auto Shops Using Traffikora Are Winning Locally.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px' }}>
            {[
              { quote: 'My bays used to have slow days. Now I am booked out 3 days in advance. Traffikora runs in the background and I just fix cars.', name: 'Tony M., Owner', location: 'Chicago, IL' },
              { quote: 'I was losing to the dealership service centers. Now I rank above them on Google. Did not touch a thing after setup.', name: 'James R., Owner', location: 'Houston, TX' },
              { quote: 'The review response feature alone is worth it. My rating went from 3.9 to 4.7 in two months.', name: 'Luis V., Owner', location: 'San Diego, CA' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#1a1a1a', border: '2.5px solid #333', padding: '36px', textAlign: 'left' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#ccc', lineHeight: 1.8, marginBottom: '20px' }}>{item.quote}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#E8610A' }}>{item.name}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#666' }}>{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to Fill Your Bays With More Customers?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync('src/app/solutions/auto-repair/page.tsx', content);
console.log('Written: src/app/solutions/auto-repair/page.tsx');