// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ChiropractorsPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>For Chiropractic Offices</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Fill Your Appointment Book. Without Lifting a Finger.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora automates your Google rankings, social media, and AI engine visibility so new patients find your chiropractic practice first — every single week.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>Patients are searching. The question is whether they find you.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px' }}>Every day, people in your city search for a chiropractor near me. If you are not in the top 3 Google results, those patients are booking with your competitors. Traffikora fixes that automatically.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { icon: '📉', title: 'Empty Slots in Your Schedule', body: 'Inconsistent patient flow means inconsistent revenue. Traffikora keeps your practice visible year-round so your calendar stays full.' },
              { icon: '📱', title: 'No Time for Marketing', body: 'Between adjustments, notes, and managing your office, marketing never gets done. Traffikora does it all automatically while you focus on patients.' },
              { icon: '🤖', title: 'Missing AI Referrals', body: 'When someone asks ChatGPT or Gemini to find a chiropractor nearby, is your name coming up? Traffikora makes sure it does.' },
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
              { step: '01', title: 'Connect Your Accounts', body: 'Link your Google Business Profile, Facebook, and Instagram in under 10 minutes.' },
              { step: '02', title: 'We Write Your Content', body: 'Our AI creates chiropractic-specific posts, patient education content, and seasonal promotions for your market.' },
              { step: '03', title: 'We Publish Automatically', body: 'Content goes live on schedule every week across every platform. No effort required from you or your staff.' },
              { step: '04', title: 'New Patients Book With You', body: 'Google ranks you higher. AI engines recommend you. New patients find your practice and book appointments.' },
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
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>Everything your practice needs to dominate local search.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '620px', margin: '0 auto 56px' }}>One platform. Every marketing channel your chiropractic office needs. Zero effort from your team.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Google Business Profile Management', body: 'Weekly posts, service updates, photo uploads, and review responses that keep your GBP active and ranking at the top of local search.' },
              { title: 'Chiropractic SEO Automation', body: 'Keyword targeting for back pain relief, spinal adjustment, sports injury chiropractor, and every term your patients search for.' },
              { title: 'Patient Education Content', body: 'Wellness tips, posture guides, and condition-specific posts that position you as the trusted expert in your community.' },
              { title: 'AI Engine Optimization', body: 'Get recommended when patients ask ChatGPT, Claude, Gemini, or Perplexity for chiropractors in your area.' },
              { title: 'Review Generation Automation', body: 'Automated follow-up requests after appointments build your 5-star reputation without any manual work from your front desk.' },
              { title: 'Monthly Performance Reports', body: 'A clear breakdown of your Google rankings, profile views, and new patient growth delivered to your inbox every month.' },
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
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '56px' }}>Chiropractors are growing their practices with Traffikora.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { quote: 'I went from 22 Google reviews to 74 in three months. New patients mention they found me on Google every single week now.', name: 'Dr. Kevin T.', location: 'Chiropractic Office, Charlotte NC' },
              { quote: 'My front desk used to spend hours trying to manage our online presence. Traffikora replaced all of that automatically. We just focus on patients now.', name: 'Dr. Lisa M.', location: 'Family Chiropractic, Portland OR' },
              { quote: 'A patient said they asked Perplexity for the best chiropractor in our city and we came up first. That was a first for us and it keeps happening.', name: 'Dr. Anthony R.', location: 'Sports Chiropractic, Dallas TX' },
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
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px' }}>Starts at $97/month. Less than two patient visits.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '600px', margin: '0 auto 40px' }}>Two new patients cover your entire Traffikora subscription. Every new patient after that is pure growth for your practice.</p>
        <Link href="/pricing" style={{ background: '#111', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #111', display: 'inline-block', marginRight: '16px' }}>See Pricing</Link>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Your next 50 patients are already searching for you.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
