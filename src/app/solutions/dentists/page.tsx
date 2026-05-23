// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const features = [
  { title: 'Google Business Profile', desc: 'We keep your listing updated with fresh posts, accurate hours, services, and photos every single week.' },
  { title: 'Local SEO Automation', desc: 'Rank higher when patients search dentist near me. We optimize your local presence across every directory.' },
  { title: 'AI Engine Optimization', desc: 'When patients ask ChatGPT or Perplexity for a dentist, Traffikora helps your practice get recommended.' },
  { title: 'Social Media Posting', desc: 'We create and publish dental tips, promotions, and practice content to Facebook, Instagram, and more.' },
  { title: 'Review Management', desc: 'We help you collect more 5-star reviews and respond automatically to protect your online reputation.' },
  { title: 'Blog & Content Creation', desc: 'SEO-optimized blog posts published to your site every month without you writing a single word.' },
];

const steps = [
  { step: '01', title: 'Connect your accounts', desc: 'Link your Google Business Profile, social media, and website in minutes. No tech skills needed.' },
  { step: '02', title: 'We learn your practice', desc: 'Traffikora reads your services, location, and brand voice to create content that sounds like you.' },
  { step: '03', title: 'Marketing runs automatically', desc: 'Posts go out, SEO updates happen, AI engines get fed every day without you lifting a finger.' },
  { step: '04', title: 'New patients find you', desc: 'Your practice shows up on Google, in AI answers, and on social and your phone starts ringing.' },
];

const problems = [
  'Your Google Business Profile goes stale',
  'Competitors outrank you in local search',
  'AI engines recommend practices with more content',
  'Social media goes weeks without a post',
  'New patients choose someone else',
];

const testimonials = [
  { quote: 'We went from 12 Google reviews to 94 in four months. New patient calls doubled. I did not change a thing — Traffikora just ran.', name: 'Dr. Sandra M.', practice: 'Family Dentistry, Austin TX' },
  { quote: 'I used to spend my Sunday nights writing social posts. Now I do not touch it. Traffikora handles everything and our online presence has never been stronger.', name: 'Dr. James T.', practice: 'Cosmetic Dental Studio, Denver CO' },
  { quote: 'Our practice started showing up when people asked AI assistants for dentists near us. That never happened before Traffikora.', name: 'Dr. Priya K.', practice: 'Smile Dental Group, Atlanta GA' },
];

export default function DentistsPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>For Dental Practices</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Your dental practice, marketed automatically.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora handles your Google Business Profile, local SEO, social media, and AI engine visibility so you can focus on patients, not marketing.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>The Problem</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, lineHeight: 1.15, marginBottom: '24px', color: '#111' }}>Patients search online first. Most dental practices are invisible.</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.7, marginBottom: '16px' }}>When someone needs a dentist, they ask Google or an AI. If your practice is not showing up with great reviews, updated hours, and consistent content, they book your competitor.</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.7 }}>Most dentists do not have time to post on social media, respond to reviews, update their Google listing, and optimize for AI search engines. Traffikora does all of it automatically.</p>
          </div>
          <div style={{ background: '#f7f7f7', border: '2.5px solid #111', padding: '40px', borderRadius: '2px' }}>
            {problems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '20px' }}>
                <span style={{ color: '#E8610A', fontSize: '20px', fontWeight: 900, lineHeight: 1 }}>x</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#333', lineHeight: 1.5, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f7f7', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>What Traffikora Does For Dentists</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 900, textAlign: 'center', marginBottom: '56px', color: '#111' }}>Everything your practice needs. Done automatically.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {features.map((f, i) => (
              <div key={i} style={{ background: '#fff', border: '2.5px solid #111', padding: '32px', borderRadius: '2px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px', color: '#111' }}>{f.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>How It Works</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 900, marginBottom: '56px', color: '#111' }}>Set it up once. It runs forever.</h2>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '40px', textAlign: 'left' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#E8610A', minWidth: '52px' }}>{s.step}</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '8px', color: '#111' }}>{s.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#f7f7f7', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 900, textAlign: 'center', marginBottom: '56px', color: '#111' }}>Dental practices love Traffikora.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: '#fff', border: '2.5px solid #111', padding: '32px', borderRadius: '2px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#333', lineHeight: 1.7, marginBottom: '24px', fontStyle: 'italic' }}>"{t.quote}"</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#111', margin: 0 }}>{t.name}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888', margin: 0 }}>{t.practice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to fill your schedule automatically?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
