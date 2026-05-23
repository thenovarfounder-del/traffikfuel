const fs = require('fs');

const page = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function SmallBusinessesPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      {/* HERO */}
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>For Small Businesses</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Marketing that runs itself. Built for small businesses.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora gives small businesses the same marketing power as big brands — at a fraction of the cost, with zero time required from you.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
          <Link href="/pricing" style={{ background: 'transparent', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>See Pricing</Link>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#111', padding: '0 32px 80px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>70%</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>of small businesses say they do not have time to market consistently</p>
          </div>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>$3k+</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>per month is what agencies charge for the same services Traffikora automates</p>
          </div>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>24/7</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>Traffikora markets your business around the clock, every day of the year</p>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>The Problem</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '16px' }}>Small businesses get left behind on marketing.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8, maxWidth: '700px', margin: '0 auto 48px', textAlign: 'center' }}>You started your business to do what you love — not to spend hours every week posting on social media, managing your Google profile, and trying to figure out SEO. But if you do not market consistently, your competitors win.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { title: 'No Time', desc: 'Running a small business leaves little room for consistent marketing. Most owners skip it entirely or do it inconsistently.' },
              { title: 'No Budget', desc: 'Agencies charge $2,000 to $10,000 per month. Hiring in-house is even more. Neither is realistic for most small businesses.' },
              { title: 'No Results', desc: 'DIY marketing tools require expertise you do not have. Without strategy and consistency, the results never come.' },
            ].map((item, i) => (
              <div key={i} style={{ border: '2.5px solid #111', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SOLUTION */}
      <section style={{ background: '#f9f9f9', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>The Solution</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>Everything done for you. Automatically.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Social Media</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Posts created and published to Facebook, Instagram, TikTok, LinkedIn, and more — every week, automatically.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Google Business Profile</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Weekly posts, photo uploads, and review responses keep your GBP active and ranking above local competitors.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Local SEO</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Citation building, keyword tracking, and schema markup run continuously to grow your local search rankings.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>AI Engine Optimization</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Get found in ChatGPT, Perplexity, Gemini, and Google AI Overviews — where your customers are increasingly searching.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Brand Voice</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Every post sounds like you. Traffikora learns your tone, style, and messaging during onboarding and applies it consistently.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Monthly Reports</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>A clear monthly report shows exactly what Traffikora did, what grew, and what is improving — no guesswork.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div style={{ background: '#f9f9f9', border: '2.5px solid #111', padding: '40px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#111', marginBottom: '24px' }}>Without Traffikora</h3>
            {['Posting sporadically or not at all', 'Paying an agency thousands per month', 'Spending your evenings on social media instead of your family', 'Invisible on Google compared to bigger competitors', 'Missing out on AI search traffic entirely', 'No idea if your marketing is working'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <span style={{ color: '#cc0000', fontSize: '16px', marginTop: '2px' }}>X</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555' }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#111', border: '2.5px solid #111', padding: '40px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#E8610A', marginBottom: '24px' }}>With Traffikora</h3>
            {['Consistent marketing running every week automatically', 'Agency-level results at a small business price', 'Your evenings back — Traffikora handles the marketing', 'Google Business Profile active and ranking locally', 'Showing up in ChatGPT, Perplexity, and AI search', 'Monthly reports showing exactly what is working'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <span style={{ color: '#E8610A', fontSize: '16px', marginTop: '2px' }}>O</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#f9f9f9', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>FAQ</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>Questions from small business owners.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>I am not tech savvy. Can I still use Traffikora?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Yes. Traffikora is built for business owners, not marketers. Setup takes about 15 minutes and after that the system runs automatically. No technical knowledge required.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>How much time will this save me?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Most small business owners spend 6 to 10 hours per week on marketing tasks. Traffikora brings that to zero — everything runs automatically after the initial setup.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Is Traffikora affordable for a small business?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Yes. Plans start at $97/month — less than what most agencies charge for a single blog post. And you get everything: social media, SEO, Google Business Profile, and AI engine optimization.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>What kinds of small businesses does Traffikora work for?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Traffikora works for any local or service-based small business — restaurants, retail stores, gyms, law firms, home services, dental practices, real estate agents, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Your business deserves consistent marketing.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync('src/app/solutions/small-businesses/page.tsx', page);
console.log('done');