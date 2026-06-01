// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ContractorsPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>For Contractors</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Automated Marketing for Contractors.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Win more jobs without chasing leads. Traffikora runs your marketing around the clock so you can stay on the job site.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Free Today</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px', textAlign: 'center' }}>The Problem Every Contractor Knows</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>You’re great at the work. But when the job ends, the phone goes quiet. Marketing falls through the cracks because there’s no time left in the day.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'No Time to Post', body: 'You’re on job sites 10 hours a day. Social media and Google updates never happen.' },
              { title: 'Reviews Go Uncollected', body: 'Happy customers forget to leave reviews. Your competitors with worse work rank higher.' },
              { title: 'Invisible on AI Search', body: 'When homeowners ask ChatGPT or Google who to hire, your name never comes up.' },
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
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px', textAlign: 'center' }}>What Traffikora Does for Contractors</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '640px', margin: '0 auto 56px', textAlign: 'center' }}>Connect your accounts once. Everything below runs automatically, every day.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Google Business Profile', body: 'Posts, updates, and photos published automatically to keep your profile active and ranked.' },
              { title: 'Review Generation', body: 'Automated review requests sent to every customer after job completion. More 5-star reviews, less effort.' },
              { title: 'AI Engine Optimization', body: 'Your business gets optimized to appear when homeowners ask ChatGPT, Gemini, or Perplexity for contractor recommendations.' },
              { title: 'Social Media Posts', body: 'Before-and-after project photos, seasonal promotions, and local content posted to Facebook and Instagram.' },
              { title: 'Local SEO', body: 'Ongoing keyword optimization so you rank higher when people in your area search for your services.' },
              { title: 'Reputation Monitoring', body: 'Every new review tracked across Google and Facebook. You’re alerted instantly to anything negative.' },
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
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Built for Contractors Who Are Too Busy to Market</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#ccc', maxWidth: '580px', margin: '0 auto 40px' }}>Set it once. Traffikora markets your contracting business every day without you lifting a finger.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Free Today</Link>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Your next customer is searching right now.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No no credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Today</Link>
      </section>

      <Footer />
    </>
  )
}
