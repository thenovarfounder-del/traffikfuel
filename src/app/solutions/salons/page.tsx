// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function SalonsPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>For Salons & Spas</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Your Salon Markets Itself. You Focus on Clients.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora automates your social media, Google ranking, and AI engine visibility so new clients find you every week — without you lifting a finger.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>You cannot grow a salon by posting manually.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px' }}>Between back-to-back appointments, managing staff, and ordering supplies, there is no time left to run a marketing strategy. Traffikora handles it all automatically.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { icon: '📅', title: 'Inconsistent Posting', body: 'You post when you remember, which means weeks go by with zero content. Traffikora publishes for you on a consistent schedule, every week.' },
              { icon: '🔍', title: 'Invisible on Google', body: 'If you are not in the top 3 Google results for salons near me, you are losing clients daily. Traffikora optimizes your local SEO automatically.' },
              { icon: '🤖', title: 'Missing AI Searches', body: 'When someone asks ChatGPT or Claude to recommend a salon, is your name coming up? Traffikora makes sure it does.' },
            ].map((item) => (
              <div key={item.title} style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '56px' }}>Set it once. Traffikora runs forever.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { step: '01', title: 'Connect Your Accounts', body: 'Link your Google Business Profile, Instagram, and Facebook in under 10 minutes.' },
              { step: '02', title: 'We Write Your Content', body: 'Our AI writes salon-specific posts, captions, and promotions tailored to your brand and city.' },
              { step: '03', title: 'We Publish for You', body: 'Posts go out on schedule across every platform. No drafts to review. No buttons to push.' },
              { step: '04', title: 'New Clients Find You', body: 'Google ranks you higher. AI engines recommend you. Clients book directly from your profile.' },
            ].map((item) => (
              <div key={item.step} style={{ borderTop: '4px solid #E8610A', paddingTop: '24px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#E8610A', letterSpacing: '2px', marginBottom: '12px' }}>STEP {item.step}</p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px', color: '#111' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>Everything your salon needs to dominate locally.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '620px', margin: '0 auto 56px' }}>One platform. Every marketing channel. Zero effort on your part.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'AI Social Content', body: 'Before-and-after posts, seasonal promotions, stylist spotlights, and more — written and posted automatically.' },
              { title: 'Google Business Profile Management', body: 'Weekly posts, review responses, and photo uploads to keep your GBP active and ranking.' },
              { title: 'Local SEO Automation', body: 'Citation building, keyword targeting, and competitor tracking so you outrank other salons in your city.' },
              { title: 'AI Engine Optimization', body: 'Get recommended by ChatGPT, Claude, Gemini, and Perplexity when locals search for salons.' },
              { title: 'Reputation Monitoring', body: 'Every new review flagged instantly. Positive reviews amplified. Negative ones addressed before they spread.' },
              { title: 'Monthly Reports', body: 'A clear snapshot of your rankings, reach, and new client growth delivered to your inbox every month.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#f9f9f9', border: '2.5px solid #111', padding: '28px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, marginBottom: '10px', color: '#111' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '56px' }}>Salon owners are already growing with Traffikora.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { quote: 'I went from 12 Google reviews to 47 in two months. I did not ask a single client. Traffikora handled everything.', name: 'Maria L.', location: 'Salon Owner, Tampa FL' },
              { quote: 'My Instagram used to be dead. Now it posts three times a week automatically. I get DMs from new clients asking to book.', name: 'Jessica T.', location: 'Hair Studio Owner, Austin TX' },
              { quote: 'Someone told me they found me on ChatGPT. I did not even know that was possible until Traffikora made it happen.', name: 'Danielle R.', location: 'Spa Owner, Atlanta GA' },
            ].map((item) => (
              <div key={item.name} style={{ background: '#1a1a1a', border: '2.5px solid #333', padding: '32px', textAlign: 'left' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#ddd', lineHeight: 1.7, marginBottom: '20px' }}>“{item.quote}”</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#E8610A' }}>{item.name}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888' }}>{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px' }}>Starts at $97/month. Less than one new client.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '600px', margin: '0 auto 40px' }}>A single new regular client covers the entire cost of Traffikora. Everything else is pure growth.</p>
        <Link href="/pricing" style={{ background: '#111', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #111', display: 'inline-block', marginRight: '16px' }}>See Pricing</Link>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Your next 50 clients are already searching for you.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
