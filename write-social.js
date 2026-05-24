const fs = require('fs');

const restaurants = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function RestaurantsPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Restaurants</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Fill more tables. Without lifting a finger.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora automates your restaurant marketing across Google, social media, and AI engines — so you can focus on the food.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>The Problem</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '24px', lineHeight: 1.1 }}>Hungry customers are searching right now. Are they finding you?</h2>
          <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.8, maxWidth: '700px', marginBottom: '48px' }}>90% of diners research a restaurant online before visiting. If you are not showing up on Google, TikTok, and AI engines — they are walking into your competitor.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { stat: '90%', label: 'of diners research restaurants online before visiting' },
              { stat: '3x', label: 'more reservations for restaurants with active social media' },
              { stat: '64%', label: 'of people use Google to find restaurants near them' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '40px 32px', borderRight: i < 2 ? '2.5px solid #111' : 'none', background: '#fff' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1 }}>{item.stat}</div>
                <div style={{ fontSize: '15px', color: '#555', marginTop: '12px', lineHeight: 1.6 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f7f7', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>What Traffikora Does For You</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center', lineHeight: 1.1 }}>Your restaurant. Everywhere online.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { icon: '\ud83d\udd0d', title: 'Google SEO', desc: 'Rank for searches like "best restaurant in [city]" with automated SEO content published to your site every week.' },
              { icon: '\ud83d\udcf1', title: 'TikTok and Instagram', desc: 'Food content performs incredibly well on social. Traffikora creates and posts it automatically — no filming required.' },
              { icon: '\ud83e\udd16', title: 'AI Engine Optimization', desc: 'When someone asks ChatGPT where to eat in your city, Traffikora makes sure your restaurant is in the answer.' },
              { icon: '\ud83d\udccd', title: 'Google Business Profile', desc: 'Automated weekly posts to your Google Business Profile keep your listing fresh and boost your local map ranking.' },
              { icon: '\u2b50', title: 'Review Generation', desc: 'Automated follow-up sequences encourage happy diners to leave Google reviews — building your reputation on autopilot.' },
              { icon: '\ud83d\udcc8', title: 'Analytics Dashboard', desc: 'See how your marketing is performing across every platform in one simple dashboard.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '36px 32px', borderRight: i % 2 === 0 ? '2.5px solid #111' : 'none', borderBottom: i < 4 ? '2.5px solid #111' : 'none', background: '#fff' }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>{item.title}</div>
                <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', color: '#E8610A', letterSpacing: '4px', marginBottom: '24px' }}>\u2605\u2605\u2605\u2605\u2605</div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#111', lineHeight: 1.7, marginBottom: '32px', fontStyle: 'italic' }}>"We went from 200 to 600 Google reviews in 4 months. Our TikTok has 12,000 followers now and we did not post a single thing ourselves. Traffikora did everything."</p>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111' }}>Marco V.</div>
          <div style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>Miami, FL — Restaurant Owner</div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px', lineHeight: 1.1 }}>More customers. Zero extra work.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

const smallBiz = `// @ts-nocheck
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

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Small Businesses</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Your big marketing machine. Small business price.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora gives small businesses the same automated marketing power as Fortune 500 companies — starting at $97/mo.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>The Problem</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '24px', lineHeight: 1.1 }}>You did not start a business to spend all day on marketing.</h2>
          <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.8, maxWidth: '700px', marginBottom: '48px' }}>Most small business owners spend 10+ hours a week on marketing — and still feel like they are falling behind. Traffikora eliminates that entirely. Set it once, and it runs forever.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { stat: '10+', label: 'hours per week small business owners spend on marketing' },
              { stat: '6x', label: 'more online visibility with consistent automated marketing' },
              { stat: '$0', label: 'extra staff needed — Traffikora runs everything automatically' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '40px 32px', borderRight: i < 2 ? '2.5px solid #111' : 'none', background: '#fff' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1 }}>{item.stat}</div>
                <div style={{ fontSize: '15px', color: '#555', marginTop: '12px', lineHeight: 1.6 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f7f7', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>Everything Included</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center', lineHeight: 1.1 }}>One platform. Every channel.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { icon: '\ud83d\udd0d', title: 'Google SEO Automation', desc: 'Rank higher on Google with automated blog posts, schema markup, and SEO content published every week.' },
              { icon: '\ud83d\udcf2', title: 'Social Media Autopilot', desc: 'Facebook, Instagram, TikTok, YouTube, LinkedIn — your content goes everywhere, every day, without you.' },
              { icon: '\ud83e\udd16', title: 'AI Engine Optimization', desc: 'Get found on ChatGPT, Claude, Gemini, and Perplexity — the future of how customers find businesses.' },
              { icon: '\ud83d\udccd', title: 'Google Business Profile', desc: 'Automated posts keep your Google listing active and push you higher in local map pack results.' },
              { icon: '\ud83d\udcdd', title: 'Blog Content Automation', desc: 'Fresh SEO blog posts published to your website automatically — no writer needed.' },
              { icon: '\ud83d\udcc8', title: 'Simple Analytics', desc: 'See your performance across every platform in one clean dashboard. No agency required.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '36px 32px', borderRight: i % 2 === 0 ? '2.5px solid #111' : 'none', borderBottom: i < 4 ? '2.5px solid #111' : 'none', background: '#fff' }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>{item.title}</div>
                <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', color: '#E8610A', letterSpacing: '4px', marginBottom: '24px' }}>\u2605\u2605\u2605\u2605\u2605</div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#111', lineHeight: 1.7, marginBottom: '32px', fontStyle: 'italic' }}>"I run a plumbing business by myself. I had zero time for marketing. Traffikora handles everything now — Google, social, all of it. My phone rings every single day."</p>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111' }}>Tony R.</div>
          <div style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>Dallas, TX — Plumbing Business Owner</div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px', lineHeight: 1.1 }}>Set it once. It markets forever.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

const agencies = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function MarketingAgenciesPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Marketing Agencies</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Scale your agency without scaling your team.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora lets you manage 10+ clients from one dashboard — delivering full marketing automation with white-label reports and zero extra headcount.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>The Problem</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '24px', lineHeight: 1.1 }}>More clients means more work. Until now.</h2>
          <p style={{ fontSize: '18px', color: '#555', lineHeight: 1.8, maxWidth: '700px', marginBottom: '48px' }}>Every new client used to mean more staff, more hours, more chaos. Traffikora automates the execution so you can take on more clients without burning out your team.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { stat: '10x', label: 'more clients manageable per team member with Traffikora' },
              { stat: '80%', label: 'reduction in manual content creation time' },
              { stat: '$797', label: 'per month for Agency plan — manages up to 10 clients' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '40px 32px', borderRight: i < 2 ? '2.5px solid #111' : 'none', background: '#fff' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', lineHeight: 1 }}>{item.stat}</div>
                <div style={{ fontSize: '15px', color: '#555', marginTop: '12px', lineHeight: 1.6 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f7f7', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px', textAlign: 'center' }}>Built for Agencies</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#111', marginBottom: '48px', textAlign: 'center', lineHeight: 1.1 }}>Everything your clients need. Delivered automatically.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', border: '2.5px solid #111', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { icon: '\ud83d\udcca', title: 'White-Label Reports', desc: 'Send clients beautiful branded reports showing their SEO rankings, social growth, and AI engine visibility — all auto-generated.' },
              { icon: '\ud83d\udc65', title: 'Multi-Client Dashboard', desc: 'Manage all your clients from one central dashboard. Switch between accounts instantly. No more juggling logins.' },
              { icon: '\ud83e\udd16', title: 'AI Engine Optimization', desc: 'Offer your clients something no other agency can — visibility on ChatGPT, Claude, Gemini, and Perplexity.' },
              { icon: '\ud83d\udd0d', title: 'SEO and Content Automation', desc: 'Traffikora generates and publishes SEO content for every client automatically — no writers, no approvals, no delays.' },
              { icon: '\ud83d\udcf1', title: 'Social Media for Every Client', desc: 'All 9+ platforms handled automatically for each client. Post daily to every channel without a social media manager.' },
              { icon: '\u26a1', title: 'Instant Onboarding', desc: 'New client? Connect their accounts and Traffikora starts working within minutes. No complex setup or training required.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '36px 32px', borderRight: i % 2 === 0 ? '2.5px solid #111' : 'none', borderBottom: i < 4 ? '2.5px solid #111' : 'none', background: '#fff' }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>{item.title}</div>
                <div style={{ fontSize: '14px', color: '#666', lineHeight: 1.8 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', borderBottom: '2.5px solid #111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '20px', color: '#E8610A', letterSpacing: '4px', marginBottom: '24px' }}>\u2605\u2605\u2605\u2605\u2605</div>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: '#111', lineHeight: 1.7, marginBottom: '32px', fontStyle: 'italic' }}>"We went from 8 clients to 22 clients without hiring a single new person. Traffikora handles all the execution. My team just focuses on strategy and relationships now."</p>
          <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111' }}>Lisa K.</div>
          <div style={{ fontSize: '14px', color: '#888', marginTop: '4px' }}>Atlanta, GA — Marketing Agency Owner</div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px', lineHeight: 1.1 }}>Grow your agency. Not your overhead.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync('src/app/solutions/restaurants/page.tsx', restaurants, 'utf8');
fs.writeFileSync('src/app/solutions/small-businesses/page.tsx', smallBiz, 'utf8');
fs.writeFileSync('src/app/solutions/marketing-agencies/page.tsx', agencies, 'utf8');
console.log('Done');