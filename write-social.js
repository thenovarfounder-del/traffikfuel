const fs = require('fs');

const content = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function SocialPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      {/* HERO */}
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Social Media Automation</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Social media that runs itself. Every platform. Every week.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora creates and publishes content to your social media accounts on a consistent schedule — without you writing a single post.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
          <Link href="/how-it-works" style={{ background: 'transparent', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>See How It Works</Link>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#111', padding: '0 32px 80px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>5B+</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>people use social media worldwide in 2026</p>
          </div>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>54%</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>of consumers research businesses on social before buying</p>
          </div>
          <div style={{ textAlign: 'center', padding: '40px 24px', border: '2.5px solid #333' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1, marginBottom: '12px' }}>6hrs</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.6 }}>per week saved by businesses using social automation</p>
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Platforms</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '16px' }}>Every platform your customers use.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8, maxWidth: '600px', margin: '0 auto 48px', textAlign: 'center' }}>Traffikora publishes to all major social platforms simultaneously.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {['Facebook', 'Instagram', 'TikTok', 'LinkedIn', 'Twitter / X', 'Google Business Profile'].map((platform, i) => (
              <div key={i} style={{ border: '2.5px solid #111', padding: '28px 32px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111' }}>{platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section style={{ background: '#f9f9f9', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>What Traffikora Does</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>Everything social. Nothing manual.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Automated Content Creation</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Traffikora generates on-brand posts for your business tailored to your industry and audience.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Scheduled Publishing</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Posts go live at the optimal time for your audience on every platform automatically.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Multi-Platform Publishing</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Content adapted and published across all platforms formatted correctly for each one automatically.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Hashtag Optimization</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Every post includes researched hashtags that maximize organic reach without any manual work.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Performance Reporting</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Monthly reports show reach, engagement, and follower growth so you always know what is working.</p>
            </div>
            <div style={{ border: '2.5px solid #111', padding: '32px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Brand Voice Consistency</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Traffikora maintains your brand voice consistently across every post and every platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          <div style={{ background: '#f9f9f9', border: '2.5px solid #111', padding: '40px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#111', marginBottom: '24px' }}>Without Traffikora</h3>
            {['Spending hours every week creating content', 'Posting inconsistently or not at all', 'Missing the best times to post for reach', 'Managing 5 different platform dashboards', 'Losing followers to competitors who post regularly', 'No idea what content is actually working'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <span style={{ color: '#cc0000', fontSize: '16px', marginTop: '2px' }}>X</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555' }}>{item}</p>
              </div>
            ))}
          </div>
          <div style={{ background: '#111', border: '2.5px solid #111', padding: '40px' }}>
            <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#E8610A', marginBottom: '24px' }}>With Traffikora</h3>
            {['Content created and published automatically every week', 'Consistent posting schedule across all platforms', 'Posts go live at peak engagement times', 'One dashboard for all platforms', 'Your profiles stay active and grow organically', 'Monthly reports show exactly what is working'].map((item, i) => (
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
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>Common questions about social media automation.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Does Traffikora create the content or do I have to write it?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Traffikora creates the content automatically. You provide basic information about your business during setup and Traffikora generates on-brand posts tailored to your industry and audience.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>How many posts does Traffikora publish per week?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Posting frequency depends on your plan. All plans include regular posting across your connected platforms. Higher plans include more frequent posting and more platforms.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Can I review posts before they go live?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Yes. You can review and approve posts before they publish, or let Traffikora publish automatically on your behalf. Full automation or approval-first — the choice is yours.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Which social media platforms does Traffikora support?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Traffikora currently supports Facebook, Instagram, TikTok, LinkedIn, Twitter/X, and Google Business Profile. Additional platforms are added regularly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Stop doing social media manually.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync('src/app/features/social-media-automation/page.tsx', content);
console.log('Done!');