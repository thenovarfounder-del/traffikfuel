// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HowItWorksPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>How It Works</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Three steps. Then it runs itself.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora is the only marketing platform you set up once and never touch again.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', border: '2.5px solid #111' }}>
            {[
              { step: '01', title: 'Connect Your Accounts', desc: 'Link your Google Business Profile, Facebook, and Instagram in minutes. One-time setup. No technical skills needed.' },
              { step: '02', title: 'We Build Your Foundation', desc: 'Traffikora creates your SEO foundation, AI engine profiles, content calendar, and review strategy automatically.' },
              { step: '03', title: 'It Markets Forever', desc: 'Sit back. Traffikora posts content, responds to reviews, optimizes for AI engines, and drives traffic — every single day.' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '48px 36px', borderRight: i < 2 ? '2.5px solid #111' : 'none' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '64px', fontWeight: 900, color: '#E8610A', marginBottom: '16px', lineHeight: 1 }}>{item.step}</p>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>{item.title}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f8f8f8', padding: '80px 32px', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>What Happens After Setup</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 900, color: '#111' }}>Every day, Traffikora works for you.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }}>
            {[
              { title: 'Daily Content Publishing', desc: 'Fresh posts go live on your Google Business Profile, Facebook, and Instagram automatically.' },
              { title: 'Review Requests Sent', desc: 'Customers get automated review requests at the perfect moment — driving more 5-star reviews.' },
              { title: 'AI Engine Updates', desc: 'Your business profile stays optimized for Claude, ChatGPT, Gemini, and every major AI engine.' },
              { title: 'SEO Improvements', desc: 'Citations, backlinks, and content continuously optimized so you climb the rankings over time.' },
              { title: 'Performance Reports', desc: 'Monthly reports show you exactly what’s working and how your visibility is growing.' },
              { title: 'Zero Ongoing Work', desc: 'You focus on your business. Traffikora handles the marketing. Forever.' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#fff', border: '2.5px solid #111', padding: '32px 28px', display: 'flex', gap: '20px' }}>
                <div style={{ width: '12px', height: '12px', background: '#E8610A', flexShrink: 0, marginTop: '6px' }} />
                <div>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '19px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>{item.title}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to set it and forget it?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
