// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HvacPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>For HVAC Companies</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>More Service Calls. Zero Marketing Effort.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora automates your Google ranking, social media, and AI engine visibility so homeowners find your HVAC company first — every single time.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>Your competitors are showing up. You are not.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px' }}>When a homeowner searches for AC repair or furnace installation, the top 3 Google results get 80% of the calls. Traffikora puts you there and keeps you there.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { icon: '📉', title: 'Losing Leads to Competitors', body: 'If your Google Business Profile is inactive or your website ranks on page 2, homeowners are calling your competitors. Traffikora fixes this automatically.' },
              { icon: '📱', title: 'No Time for Social Media', body: 'Running a crew leaves zero time to post online. Traffikora writes and publishes HVAC content for you on a consistent weekly schedule.' },
              { icon: '🤖', title: 'Not Found on AI Engines', body: 'Homeowners are asking ChatGPT and Google Gemini to recommend HVAC companies. Traffikora makes sure your company gets recommended.' },
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
              { step: '01', title: 'Connect Your Accounts', body: 'Link your Google Business Profile, Facebook, and website in under 10 minutes.' },
              { step: '02', title: 'We Build Your Content', body: 'Our AI writes HVAC-specific posts, seasonal promotions, and service spotlights for your market.' },
              { step: '03', title: 'We Publish Automatically', body: 'Content goes live on schedule across every platform. No approvals needed. No effort required.' },
              { step: '04', title: 'Homeowners Call You', body: 'Google ranks you higher. AI engines recommend you. Your phone rings with qualified service calls.' },
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
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>Every channel. Every platform. One tool.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '620px', margin: '0 auto 56px' }}>Traffikora covers every marketing channel your HVAC company needs to dominate your local market.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Google Business Profile Automation', body: 'Weekly GBP posts, Q and A updates, and photo uploads that keep your profile active and ranking at the top of local search.' },
              { title: 'Local SEO Domination', body: 'Keyword targeting for AC repair, furnace installation, heat pump service, and every other term your customers search for.' },
              { title: 'Seasonal Campaign Automation', body: 'Summer AC tune-up specials and winter heating promotions go out automatically at the right time every year.' },
              { title: 'AI Engine Optimization', body: 'Get recommended when homeowners ask ChatGPT, Claude, Gemini, or Perplexity for HVAC companies near them.' },
              { title: 'Review Generation', body: 'Automated follow-ups after every job request 5-star reviews and build your reputation without any manual effort.' },
              { title: 'Competitor Tracking', body: 'See exactly where your competitors rank and what keywords they target. Traffikora helps you outrank them automatically.' },
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
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '56px' }}>HVAC owners are booking more jobs with Traffikora.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { quote: 'We went from 18 Google reviews to 61 in 90 days. Our call volume went up 40 percent. I did not change anything except adding Traffikora.', name: 'Mike D.', location: 'HVAC Owner, Orlando FL' },
              { quote: 'I had no idea what to post on Facebook. Now Traffikora handles it every week. Customers mention they saw us online before they called.', name: 'Carlos R.', location: 'AC Service Company, Houston TX' },
              { quote: 'A homeowner told me ChatGPT recommended us. That blew my mind. Traffikora made that happen without me doing a single thing.', name: 'Steve M.', location: 'Heating and Cooling Co., Denver CO' },
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
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px' }}>Starts at $97/month. Less than one service call.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '600px', margin: '0 auto 40px' }}>One new HVAC customer covers your entire Traffikora subscription. Every additional job after that is pure profit.</p>
        <Link href="/pricing" style={{ background: '#111', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #111', display: 'inline-block', marginRight: '16px' }}>See Pricing</Link>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Your next 100 service calls are out there searching for you.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
