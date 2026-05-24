// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function VsConstantContactPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Traffikora vs Constant Contact</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Constant Contact Sends Emails. Traffikora Grows Your Business.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '640px', margin: '0 auto 40px' }}>Constant Contact is an email newsletter tool from 2001. Traffikora is a full marketing automation platform built for 2026 — automating social media, local SEO, Google Business Profile, and AI engine optimization on complete autopilot.</p>
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
                  <th style={{ padding: '18px 24px', textAlign: 'center', fontSize: '15px', fontWeight: 700 }}>Constant Contact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Social Media Automation', '✅ Fully automated', '⚠️ Basic scheduling only'],
                  ['Google Business Profile Management', '✅ Weekly automated posts', '❌ Not included'],
                  ['Local SEO Optimization', '✅ Built in', '❌ Not included'],
                  ['AI Engine Optimization', '✅ ChatGPT, Claude, Gemini, Perplexity', '❌ Not included'],
                  ['Email Marketing', '✅ Included', '✅ Core feature'],
                  ['Review Generation', '✅ Automated', '❌ Not included'],
                  ['Content Written For You', '✅ AI writes everything', '⚠️ Templates only'],
                  ['Setup Time', '✅ Under 10 minutes', '⚠️ Hours of configuration'],
                  ['Ongoing Manual Work Required', '✅ None', '❌ Must build every campaign'],
                  ['Built for Local Businesses', '✅ Yes, specifically', '⚠️ General purpose'],
                  ['Starting Price', '$97/month flat', '$12 to $80+/month plus overages'],
                ].map(([feature, traffikora, cc], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '16px 24px', fontSize: '15px', color: '#111', fontWeight: 500 }}>{feature}</td>
                    <td style={{ padding: '16px 24px', fontSize: '15px', color: '#111', textAlign: 'center' }}>{traffikora}</td>
                    <td style={{ padding: '16px 24px', fontSize: '15px', color: '#666', textAlign: 'center' }}>{cc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>Constant Contact has not changed. Your customers have.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>In 2026, your customers find businesses on Google, Instagram, and AI engines like ChatGPT. They are not waiting for your email newsletter. Traffikora meets them where they actually are.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Constant Contact requires constant effort', body: 'Every campaign has to be built, written, and sent manually. Traffikora automates your entire marketing operation so you never have to think about it again.' },
              { title: 'Constant Contact ignores Google entirely', body: 'Your Google Business Profile, local search rankings, and map pack visibility are completely outside what Constant Contact does. Traffikora handles all of it automatically.' },
              { title: 'Constant Contact has no AI engine presence', body: 'When a potential customer asks ChatGPT or Perplexity to recommend a business like yours, Constant Contact does nothing. Traffikora optimizes you across every major AI engine.' },
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
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>What Traffikora does that Constant Contact never will.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '620px', margin: '0 auto 56px' }}>Traffikora was built for the full picture of local business marketing in 2026. Not just email.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Automated Social Media', body: 'Traffikora writes and publishes to Instagram, Facebook, and Google every week automatically. Constant Contact offers basic social scheduling with no content creation.' },
              { title: 'Google Business Profile Automation', body: 'Weekly GBP posts, photo uploads, and review responses keep your Google profile active and ranking. Constant Contact does not touch Google Business Profile.' },
              { title: 'Local SEO Built In', body: 'Traffikora builds citations, targets local keywords, and monitors your rankings automatically. Constant Contact has zero local SEO capability.' },
              { title: 'AI Engine Optimization', body: 'Traffikora gets you recommended by ChatGPT, Claude, Gemini, and Perplexity. Constant Contact has no strategy for AI-driven discovery.' },
              { title: 'Review Generation', body: 'Automated review requests after every customer interaction build your 5-star reputation without any manual effort. Constant Contact does not include this.' },
              { title: 'Zero Ongoing Effort', body: 'Traffikora runs on complete autopilot once connected. Constant Contact requires you to manually create every email campaign from scratch.' },
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
              { quote: 'I used Constant Contact for four years and my customer list never really grew. Traffikora got me to page one of Google in 90 days. That is where the new customers come from.', name: 'Patricia H.', location: 'Boutique Owner, Charleston SC' },
              { quote: 'Constant Contact felt like shouting into the void. Traffikora made my business show up where people are actually searching. My phone rings every week from new customers now.', name: 'Tony M.', location: 'Plumbing Company, Las Vegas NV' },
              { quote: 'I was paying $80 a month for Constant Contact and doing all the work myself. Traffikora costs $97 and does everything for me. It is not even a comparison.', name: 'Rachel B.', location: 'Yoga Studio Owner, Austin TX' },
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
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px' }}>Traffikora starts at $97/month. Constant Contact charges more for less.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '640px', margin: '0 auto 40px' }}>Constant Contact pricing climbs fast as your list grows and you still do all the work yourself. Traffikora is one flat price that runs your entire marketing operation automatically.</p>
        <Link href="/pricing" style={{ background: '#111', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #111', display: 'inline-block', marginRight: '16px' }}>See Pricing</Link>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Stop writing newsletters. Start growing automatically.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
