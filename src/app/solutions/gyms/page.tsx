// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function GymsPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>For Gyms</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Automated Marketing for Gyms.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Keep your gym packed with members. Traffikora runs your marketing every day so you can focus on running your facility.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Free Today</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px', textAlign: 'center' }}>The Problem Every Gym Owner Knows</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>Members churn. New signups slow down. And there’s never enough time to post consistently, run promotions, and manage your online reputation all at once.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Member Churn', body: 'Without consistent engagement, members lose motivation and cancel. Regular content keeps your community active.' },
              { title: 'Slow New Signups', body: 'If your Google profile and social pages are quiet, potential members choose the gym that looks more active.' },
              { title: 'Invisible on AI Search', body: 'When someone asks ChatGPT for the best gym nearby, you need to be the answer that comes up.' },
            ].map((card) => (
              <div key={card.title} style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f7f7', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px', textAlign: 'center' }}>What Traffikora Does for Gyms</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '640px', margin: '0 auto 56px', textAlign: 'center' }}>Connect your accounts once. Everything below runs automatically, every day.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Google Business Profile', body: 'Automated posts, class schedules, and promos keep your profile fresh and ranking at the top of local search.' },
              { title: 'Review Generation', body: 'Automated requests go out to members after milestones and check-ins. More reviews mean more new signups.' },
              { title: 'Google SEO + AI Engine Optimization', body: 'Your gym gets optimized to appear when people ask ChatGPT, Gemini, or Perplexity for gym recommendations nearby.' },
              { title: 'Social Media Content', body: 'Workout tips, member spotlights, class announcements, and promotions posted to Facebook and Instagram automatically.' },
              { title: 'Local SEO', body: 'Ongoing optimization so you rank when people in your area search for gyms, fitness centers, or personal training.' },
              { title: 'Reputation Monitoring', body: 'Every review tracked across Google and Facebook. Get alerted instantly so you can respond and protect your brand.' },
            ].map((item) => (
              <div key={item.title} style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#111', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>A Full Gym Starts With Being Found</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#ccc', maxWidth: '580px', margin: '0 auto 40px' }}>Set it once. Traffikora markets your gym every single day without you lifting a finger.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Free Today</Link>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Your next member is searching right now.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free free plan. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Today</Link>
      </section>

      <Footer />
    </>
  )
}
