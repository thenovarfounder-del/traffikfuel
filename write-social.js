const fs = require('fs')
const path = require('path')

function makePage(slug, name, price, tagline, pain, traffikoraWins, competitorWins, verdict) {
  const dir = `C:/Users/randy/traffikfuel/src/app/vs/${slug}`
  fs.mkdirSync(dir, { recursive: true })

  const winsJSX = traffikoraWins.map(w => `
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', fontSize: '14px', color: '#ddd', lineHeight: '1.5' }}>
                <span style={{ color: '#22c55e', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>\u2713</span>
                <span>${w}</span>
              </div>`).join('')

  const compJSX = competitorWins.map(w => `
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', fontSize: '14px', color: '#94a3b8', lineHeight: '1.5' }}>
                <span style={{ color: '#64748b', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>\u2022</span>
                <span>${w}</span>
              </div>`).join('')

  const content = `// @ts-nocheck
'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Vs${name.replace(/[^a-zA-Z]/g, '')}() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <Nav />
      <div style={{ textAlign: 'center', padding: '100px 32px 60px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '16px' }}>Comparison</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '56px', fontWeight: '700', margin: '0 0 16px 0', letterSpacing: '-2px', color: '#fff', lineHeight: 1.1 }}>
          Traffikora vs <em style={{ color: '#f97316', fontStyle: 'italic' }}>${name}</em>
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', margin: '0 auto 32px', maxWidth: '600px', lineHeight: '1.75' }}>
          ${pain}
        </p>
        <Link href="/signup" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: '12px', background: 'linear-gradient(135deg, #f97316, #ea6a0a)', color: '#fff', fontSize: '16px', fontWeight: '700', textDecoration: 'none' }}>
          Start Free \u2014 No Credit Card Needed \u2192
        </Link>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto 80px', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
          <div style={{ backgroundColor: '#111', borderRadius: '16px', border: '1px solid #f97316', overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(135deg, #f97316, #ea6a0a)', padding: '20px 24px' }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Winner</div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: '#fff' }}>Traffikora</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginTop: '4px' }}>Starts free \u2014 Pro at $97/mo</div>
            </div>
            <div style={{ padding: '24px' }}>${winsJSX}</div>
          </div>
          <div style={{ backgroundColor: '#111', borderRadius: '16px', border: '1px solid #2a2a2a', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#1a1a1a', padding: '20px 24px' }}>
              <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Competitor</div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: '#fff' }}>${name}</div>
              <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>From ${price}</div>
            </div>
            <div style={{ padding: '24px' }}>${compJSX}
              <div style={{ marginTop: '16px', padding: '14px', backgroundColor: '#0a0a0a', borderRadius: '8px', fontSize: '13px', color: '#64748b', fontStyle: 'italic' }}>
                ${tagline}
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#111', borderRadius: '16px', border: '1px solid #f9731630', padding: '32px', marginBottom: '48px', background: 'linear-gradient(135deg, #111 0%, #0f0a00 100%)' }}>
          <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>Our Verdict</div>
          <p style={{ fontSize: '16px', color: '#ddd', lineHeight: '1.8', margin: 0 }}>${verdict}</p>
        </div>

        <div style={{ textAlign: 'center', padding: '48px', backgroundColor: '#111', borderRadius: '16px', border: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: '700', margin: '0 0 16px 0' }}>
            Ready to switch to <em style={{ color: '#f97316', fontStyle: 'italic' }}>Traffikora?</em>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', margin: '0 0 28px 0' }}>Start free today. No credit card. Live in 5 minutes.</p>
          <Link href="/signup" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: '12px', background: 'linear-gradient(135deg, #f97316, #ea6a0a)', color: '#fff', fontSize: '16px', fontWeight: '700', textDecoration: 'none', marginRight: '16px' }}>
            Start Free Today \u2192
          </Link>
          <Link href="/pricing" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: '12px', border: '1px solid #2a2a2a', color: '#aaa', fontSize: '16px', fontWeight: '700', textDecoration: 'none' }}>
            View Pricing
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
`
  fs.writeFileSync(path.join(dir, 'page.tsx'), content)
  console.log(`SUCCESS: /vs/${slug} created`)
}

makePage('hubspot', 'HubSpot', '$800+/mo',
  'Built for enterprise sales teams. Overwhelming for small businesses.',
  'HubSpot charges $800-$3,200/mo and requires a dedicated marketing team to operate. Most small businesses use 10% of its features and pay for 100% of the cost.',
  ['Starts free — no credit card ever needed', 'Built specifically for small business owners', 'AI runs everything automatically — no team needed', 'Live in 5 minutes vs weeks of HubSpot onboarding', 'Optimizes for AI engines — ChatGPT, Claude, Gemini', 'No contracts — cancel in one click'],
  ['Better CRM and sales pipeline tools', 'More enterprise integrations', 'Larger support team'],
  'If you run a small business and need automated marketing without a team or a massive budget, Traffikora wins every time. HubSpot is built for companies with dedicated marketing departments.'
)

makePage('hootsuite', 'Hootsuite', '$99+/mo',
  'A scheduling tool that still requires you to create all the content yourself.',
  'Hootsuite lets you schedule content — but you still have to write every single post yourself. There is no AI content generation, no blog automation, and no AI engine optimization.',
  ['AI generates all your content automatically', 'Publishes blog posts to WordPress automatically', 'Optimizes for ChatGPT, Claude, Gemini citations', 'AI Agents run at 6am every day — fully hands off', 'Cheaper starting price with more features', 'No content creation required from you'],
  ['More social platform integrations', 'Better analytics reporting', 'Longer track record'],
  'Hootsuite is a scheduling tool. Traffikora is a full marketing automation engine. If you want to stop creating content manually and let AI handle everything, Traffikora is the clear choice.'
)

makePage('buffer', 'Buffer', '$60+/mo',
  'Great for scheduling. Zero help with creating content or ranking on Google.',
  'Buffer is a clean, simple scheduling tool — but it does absolutely nothing to help you create content, rank on Google, or get found by AI engines. You still do all the work.',
  ['AI writes and publishes all your content', 'Full Google SEO automation included', 'AI Engine Optimization for ChatGPT and Gemini', 'Blog post automation to WordPress', 'Free plan available — no credit card needed', 'AI Agents run 24/7 on autopilot'],
  ['Simpler interface', 'Better Instagram direct scheduling', 'Cheaper for basic scheduling only'],
  'Buffer helps you post. Traffikora helps you grow. If your goal is more leads and more visibility — not just scheduled posts — Traffikora is the better investment.'
)

makePage('later', 'Later', '$25+/mo',
  'An Instagram-first tool with no AI, no SEO, and no content creation.',
  'Later is built primarily for Instagram scheduling and visual planning. It has no AI content generation, no Google SEO features, and no ability to get your business found on AI engines.',
  ['Covers 9+ platforms vs Later Instagram focus', 'AI generates all content — you create nothing', 'Full Google SEO and AI engine optimization', 'Blog automation to WordPress included', 'TikTok and YouTube Shorts publishing', 'Free plan with no credit card required'],
  ['Better visual Instagram grid planning', 'Stronger Instagram analytics', 'More affordable for Instagram-only users'],
  'Later is perfect if Instagram scheduling is all you need. But if you want your business found everywhere — Google, ChatGPT, TikTok, YouTube, and more — Traffikora is in a completely different league.'
)

console.log('ALL 4 COMPETITOR PAGES DONE')