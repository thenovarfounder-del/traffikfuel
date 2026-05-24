const fs = require('fs');
const content = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function VsMailchimpPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Traffikora vs Mailchimp</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Mailchimp Sends Emails. Traffikora Grows Your Business.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '640px', margin: '0 auto 40px' }}>Mailchimp is an email tool. Traffikora is a full marketing automation platform that handles social media, local SEO, Google Business Profile, and AI engine optimization \u2014 all on autopilot.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '56px' }}>Side by side. No spin.</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'DM Sans, sans-serif' }}>
              <thead>
                <tr style={{ background: '#111', color: '#fff' }}>
                  <th style={{ padding: '18px 24px', textAlign: 'left', fontSize: '15px', fontWeight: 700 }}>Feature</th>
                  <th style={{ padding: '18px 24px', textAlign: 'center', fontSize: '15px', fontWeight: 700, color: '#E8610A' }}>Traffikora</th>
                  <th style={{ padding: '18px 24px', textAlign: 'center', fontSize: '15px', fontWeight: 700 }}>Mailchimp</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Social Media Automation', '\u2705 Fully automated', '\u274C Not included'],
                  ['Google Business Profile Management', '\u2705 Weekly automated posts', '\u274C Not included'],
                  ['Local SEO Optimization', '\u2705 Built in', '\u274C Not included'],
                  ['AI Engine Optimization', '\u2705 ChatGPT, Claude, Gemini, Perplexity', '\u274C Not included'],
                  ['Email Marketing', '\u2705 Included', '\u2705 Core feature'],
                  ['Review Generation', '\u2705 Automated', '\u274C Not included'],
                  ['Content Written For You', '\u2705 AI writes everything', '\u26A0\uFE0F Templates only'],
                  ['Setup Time', '\u2705 Under 10 minutes', '\u26A0\uFE0F Hours of configuration'],
                  ['Ongoing Manual Work Required', '\u2705 None', '\u274C Must build every campaign'],
                  ['Built for Local Businesses', '\u2705 Yes, specifically', '\u26A0\uFE0F General purpose'],
                  ['Starting Price', '$97/month', 'Free to $350+/month'],
                ].map(([feature, traffikora, mailchimp], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '16px 24px', fontSize: '15px', color: '#111', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '16px 24px', fontSize: '15px', color: '#111', textAlign: 'center' }}>{traffikora}</td>
                    <td style={{ padding: '16px 24px', fontSize: '15px', color: '#666', textAlign: 'center' }}>{mailchimp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>Mailchimp is great at one thing. Traffikora does everything.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>Mailchimp built its reputation on email newsletters. But email alone does not grow a local business in 2026. You need Google, social media, AI engines, and reviews working together. That is what Traffikora delivers.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Mailchimp requires you to do the work', body: 'Every email campaign in Mailchimp has to be built, written, designed, and sent by you. Traffikora writes and publishes everything automatically with zero effort on your part.' },
              { title: 'Mailchimp does not touch Google', body: 'Your Google Business Profile, local SEO, and Google rankings are completely outside what Mailchimp does. Traffikora automates all of it.' },
              { title: 'Mailchimp has no AI engine strategy', body: 'When customers ask ChatGPT or Perplexity for a recommendation, Mailchimp does nothing. Traffikora optimizes your presence across every major AI engine.' },
            ].map((item) => (
              <div key={item.title} style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px', color: '#111' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>What Traffikora does that Mailchimp never will.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '620px', margin: '0 auto 56px' }}>Traffikora was built for local business growth from the ground up. Not retrofitted from an email tool.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Automated Social Media', body: 'Traffikora writes and publishes to Instagram, Facebook, and Google every week. Mailchimp does not touch social media.' },
              { title: 'Google Business Profile Automation', body: 'Weekly GBP posts and updates keep your Google profile active and ranking. This is completely outside Mailchimp\u2019s scope.' },
              { title: 'Local SEO Built In', body: 'Traffikora builds citations, targets local keywords, and tracks your rankings automatically. Mailchimp has no SEO features.' },
              { title: 'AI Engine Optimization', body: 'Traffikora gets you recommended by ChatGPT, Claude, Gemini, and Perplexity. Mailchimp has zero AI engine strategy.' },
              { title: 'Review Generation', body: 'Automated review requests after every customer interaction build your reputation on autopilot. Mailchimp does not do this.' },
              { title: 'Zero Ongoing Effort', body: 'Traffikora runs completely on autopilot once set up. Mailchimp requires you to build every campaign from scratch every time.' },
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
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '56px' }}>Business owners who switched are growing faster.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { quote: 'I used Mailchimp for years and my business stayed flat. Three months with Traffikora and I am ranking on page one of Google for the first time. Completely different league.', name: 'Amanda T.', location: 'Boutique Owner, Scottsdale AZ' },
              { quote: 'Mailchimp was always sitting there waiting for me to do something. Traffikora just runs. My Google reviews went from 11 to 58 without me asking a single customer.', name: 'Robert C.', location: 'Restaurant Owner, Miami FL' },
              { quote: 'I was paying for Mailchimp and barely using it. Traffikora replaced it and three other tools. Now everything is automated and I actually show up when people search for me.', name: 'Karen L.', location: 'Spa Owner, San Diego CA' },
            ].map((item) => (
              <div key={item.name} style={{ background: '#1a1a1a', border: '2.5px solid #333', padding: '32px', textAlign: 'left' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#ddd', lineHeight: 1.7, marginBottom: '20px' }}>\u201C{item.quote}\u201D</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#E8610A' }}>{item.name}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888' }}>{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px' }}>Both start at $97/month. Only one does everything.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '640px', margin: '0 auto 40px' }}>Mailchimp\u2019s paid plans can run $300+ per month for a list of any size \u2014 and you still have to do all the work yourself. Traffikora starts at $97 and runs your entire marketing operation automatically.</p>
        <Link href="/pricing" style={{ background: '#111', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #111', display: 'inline-block', marginRight: '16px' }}>See Pricing</Link>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Stop building campaigns. Start growing automatically.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;
fs.writeFileSync('src/app/compare/traffikora-vs-mailchimp/page.tsx', content);
console.log('page.tsx written');