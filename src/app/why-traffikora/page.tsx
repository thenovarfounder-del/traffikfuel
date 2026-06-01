// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function WhyTraffikoraPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      {/* HERO */}
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Why Traffikora</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Every other platform optimizes for Google. We optimize for everything.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '640px', margin: '0 auto 40px' }}>Google is still king. But ChatGPT, Claude, Gemini, Perplexity, and Copilot are where your next customers are searching right now. Traffikora is the only platform built to win on all of them simultaneously.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Free Today</Link>
      </section>

      {/* THE SHIFT */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>The way people find businesses has changed forever.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>In 2024, over 100 million people started using AI engines to find recommendations instead of typing into Google. By 2026, that number has grown dramatically. Most marketing platforms have not adapted. Traffikora was built specifically for this new reality.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { icon: '🔍', title: 'Then: Google only', body: 'For 20 years, winning local search meant one thing: ranking on Google. SEO agencies built entire businesses around this single channel.' },
              { icon: '🤖', title: 'Now: AI engines everywhere', body: 'Today your customers ask ChatGPT who to call, ask Perplexity what the best option is, and ask Gemini for recommendations. Most businesses are invisible on all of them.' },
              { icon: '⚡', title: 'Traffikora: built for both', body: 'Traffikora automates your Google presence AND your AI engine visibility simultaneously. No other platform does this for small and mid-size businesses.' },
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

      {/* THE PROBLEM WITH OTHER TOOLS */}
      <section style={{ background: '#f9f9f9', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>Other platforms were not built for this moment.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '700px', margin: '0 auto 56px' }}>HubSpot, Hootsuite, Mailchimp, SEMrush — these are great tools built for a world that is rapidly changing. None of them were designed to optimize your presence across AI engines. Traffikora was.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { tool: 'HubSpot', problem: 'Built for enterprise sales teams. Overwhelming for small businesses. No Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini. Starts at $800+/month for real features.' },
              { tool: 'Hootsuite', problem: 'A social media scheduler. Does not write your content, does not touch Google, does not do SEO, and has zero AI engine strategy.' },
              { tool: 'Mailchimp', problem: 'An email newsletter tool. Completely ignores Google, social media automation, local SEO, and AI engine visibility.' },
              { tool: 'SEMrush', problem: 'A powerful SEO research tool for experts. Requires significant marketing knowledge to use. Does not automate or publish anything for you.' },
              { tool: 'Yext', problem: 'Manages your business listings across directories. Does not create content, does not post to social media, and does not optimize for AI engines.' },
              { tool: 'Later', problem: 'A social media scheduling tool. You still have to create every piece of content yourself. No SEO, no Google, no Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini.' },
            ].map((item) => (
              <div key={item.tool} style={{ background: '#fff', border: '2.5px solid #111', padding: '28px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, marginBottom: '10px', color: '#111' }}>{item.tool}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.6 }}>{item.problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE TRAFFIKORA DIFFERENCE */}
      <section style={{ background: '#111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: '16px' }}>What makes Traffikora different.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#aaa', textAlign: 'center', maxWidth: '680px', margin: '0 auto 56px' }}>Four things that no other platform for small businesses does simultaneously.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { number: '01', title: 'It runs completely on autopilot', body: 'Connect your accounts once. Traffikora writes your content, publishes it, manages your Google profile, and builds your SEO automatically — forever. Zero ongoing effort required.' },
              { number: '02', title: 'It optimizes for AI engines', body: 'Traffikora is the only platform built to get small businesses recommended by ChatGPT, Claude, Gemini, Perplexity, and Copilot. This is the future of local discovery.' },
              { number: '03', title: 'It covers every channel', body: 'Social media, Google Business Profile, local SEO, AI engines, and reputation management — all in one platform, all automated, all working together.' },
              { number: '04', title: 'It was built for non-marketers', body: 'You do not need to understand SEO, content strategy, or social media algorithms. Traffikora handles all of it. You just run your business.' },
            ].map((item) => (
              <div key={item.number} style={{ borderTop: '4px solid #E8610A', paddingTop: '24px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#E8610A', letterSpacing: '2px', marginBottom: '12px' }}>{item.number}</p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#aaa', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section style={{ background: '#fff', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '24px' }}>Our vision: an automated marketing machine for every small business on earth.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', lineHeight: 1.8, marginBottom: '24px' }}>Small and mid-size businesses are the backbone of every community. But they have always been outgunned on marketing — outspent by big brands, overwhelmed by complexity, and underserved by tools built for enterprise teams.</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', lineHeight: 1.8, marginBottom: '24px' }}>Traffikora changes that. For the first time, a local restaurant, a family-owned salon, a two-person HVAC company, or a solo attorney can have the same marketing power as a national brand — running automatically, 24 hours a day, 7 days a week.</p>
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', fontStyle: 'italic' }}>Set it once. It markets forever.</p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: '#f9f9f9', padding: '80px 32px', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', textAlign: 'center' }}>
          {[
            { stat: '10+', label: 'Marketing channels automated' },
            { stat: '7 min', label: 'Average setup time' },
            { stat: '6', label: 'AI engines optimized' },
            { stat: '$97', label: 'Starting price per month' },
          ].map((item) => (
            <div key={item.label}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 900, color: '#E8610A', marginBottom: '8px' }}>{item.stat}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555' }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>The future of local marketing is automated. Start today.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No no credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Today</Link>
      </section>

      <Footer />
    </>
  )
}
