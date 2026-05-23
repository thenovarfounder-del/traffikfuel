// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function AEOPage() {
  return (
    <>
      

      <Nav />

      {/* HERO */}
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>AI Engine Optimization</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Get your business recommended by ChatGPT, Perplexity, Gemini, Claude, and Copilot — automatically.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Millions of people now find local businesses by asking AI tools instead of Googling. Traffikora is the only platform built to make your business visible on every major AI engine.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
          <Link href="/how-it-works" style={{ background: 'transparent', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>See How It Works</Link>
        </div>
      </section>

      {/* WHAT IS AEO */}
      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px' }}>What is AEO?</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 700, color: '#111', marginBottom: '24px', lineHeight: 1.2 }}>The new way customers find local businesses.</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>In 2026, a growing percentage of local business searches happen inside AI tools — not on Google. Someone types "best Italian restaurant near downtown Chicago" into ChatGPT and gets a direct recommendation. No search results page. No clicking through links. Just a name.</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8, marginBottom: '32px' }}>AI engine optimization is the process of building the signals, data, and content that cause AI tools to recommend your business by name. Traffikora does this automatically, continuously, for every major AI engine simultaneously.</p>
            <Link href="/signup" style={{ background: '#111', color: '#fff', padding: '14px 32px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, border: '2.5px solid #111', display: 'inline-block' }}>Get Started Free</Link>
          </div>
          <div style={{ background: '#111', padding: '40px' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '20px' }}>Without Traffikora</p>
            {["AI engines have no data about your business", "ChatGPT recommends your competitors", "You are invisible to the fastest growing search channel", "You lose customers you never knew existed"].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                <span style={{ color: '#cc0000', fontSize: '16px' }}>✗</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc' }}>{item}</p>
              </div>
            ))}
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', margin: '28px 0 20px' }}>With Traffikora</p>
            {["AI engines know exactly who you are and what you offer", "ChatGPT recommends your business by name", "You appear in the fastest growing search channel", "You capture customers your competitors miss"].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '14px' }}>
                <span style={{ color: '#E8610A', fontSize: '16px' }}>✓</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#fff' }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI ENGINES */}
      <section style={{ background: '#111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Every Major AI Engine</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: '16px' }}>One platform. All AI engines.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#aaa', textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px' }}>Traffikora optimizes your visibility across every major AI engine simultaneously — not just one.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              <div style={{ border: '2.5px solid #333', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#E8610A', marginBottom: '12px' }}>ChatGPT</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.7 }}>The most widely used AI tool in the world. When users ask ChatGPT for business recommendations, Traffikora ensures your business is in the answer.</p>
              </div>
              <div style={{ border: '2.5px solid #333', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#E8610A', marginBottom: '12px' }}>Perplexity</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.7 }}>The fastest growing AI search engine. Perplexity cites specific businesses by name. Traffikora builds the signals that get you cited.</p>
              </div>
              <div style={{ border: '2.5px solid #333', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#E8610A', marginBottom: '12px' }}>Google Gemini</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.7 }}>Google's own AI engine pulls from the same signals as Google Search — and more. Traffikora covers both simultaneously.</p>
              </div>
              <div style={{ border: '2.5px solid #333', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#E8610A', marginBottom: '12px' }}>Claude</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.7 }}>Anthropic's Claude is used by millions for research and recommendations. Traffikora optimizes your structured data so Claude can find and reference your business.</p>
              </div>
              <div style={{ border: '2.5px solid #333', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#E8610A', marginBottom: '12px' }}>Microsoft Copilot</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.7 }}>Built into Windows and Microsoft 365, Copilot reaches hundreds of millions of users. Traffikora ensures your business is visible here too.</p>
              </div>
              <div style={{ border: '2.5px solid #333', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#E8610A', marginBottom: '12px' }}>Google AI Overviews</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#ccc', lineHeight: 1.7 }}>Google now shows AI-generated summaries at the top of search results. Traffikora's content strategy is built to get your business featured in these overviews.</p>
              </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: '#fff', padding: '80px 32px', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>How It Works</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '56px' }}>Set it once. AI visibility grows forever.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>01</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Connect your accounts</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Link your Google Business Profile, website, and social accounts in minutes. One-time setup.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>02</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Traffikora audits your AI visibility</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>We analyze how visible your business currently is across every major AI engine and identify the gaps.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>03</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Structured data is built automatically</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Traffikora generates and publishes the schema markup, entity data, and content signals AI engines use to identify and cite businesses.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>04</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Content is optimized for AI citation</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>We create and publish content in the exact format AI engines prefer — direct answers, clear facts, structured Q&A.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#E8610A', lineHeight: 1, flexShrink: 0 }}>05</span>
              <div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Your visibility grows every month</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>AI engine optimization compounds over time. The longer Traffikora runs, the more AI engines cite your business.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ background: '#f9f9f9', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Why It Matters</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '56px' }}>Built for businesses that want to win in 2026.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
              <div style={{ borderLeft: '4px solid #E8610A', paddingLeft: '24px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>Be recommended, not just ranked</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>When someone asks an AI engine for the best plumber, dentist, or restaurant in your city — Traffikora makes sure your business gets recommended by name.</p>
              </div>
              <div style={{ borderLeft: '4px solid #E8610A', paddingLeft: '24px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>Zero effort required</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>AI engine optimization runs automatically in the background. You connect your accounts once and Traffikora handles everything else forever.</p>
              </div>
              <div style={{ borderLeft: '4px solid #E8610A', paddingLeft: '24px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>Works alongside your Google SEO</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>Traffikora does not replace your Google strategy — it extends it. The same content signals that help AI engines also strengthen your Google rankings.</p>
              </div>
              <div style={{ borderLeft: '4px solid #E8610A', paddingLeft: '24px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>Built for local businesses</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>AI engine optimization is especially powerful for local businesses. When users ask AI tools for recommendations near them, local businesses with strong AEO signals win.</p>
              </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#fff', padding: '80px 32px', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>FAQ</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>Common questions about AEO.</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>What is AI engine optimization?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>AI engine optimization (AEO) is the process of making your business visible and citable by AI tools like ChatGPT, Perplexity, Gemini, Claude, and Copilot. When users ask these tools for business recommendations, AEO determines whether your business gets mentioned.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>How is AEO different from SEO?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Traditional SEO optimizes your website to rank on Google search results pages. AEO optimizes your business to be cited and recommended by AI tools when users ask conversational questions. Both matter in 2026 — Traffikora handles both automatically.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>How long does it take to see results?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>Most businesses see measurable improvement in AI engine visibility within 60 to 90 days. AEO compounds over time — the longer Traffikora runs, the stronger your visibility becomes.</p>
            </div>
            <div style={{ borderBottom: '2px solid #eee', paddingBottom: '28px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>Do I need a website for AI engine optimization?</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>A website helps but is not required. Traffikora builds AI visibility signals through your Google Business Profile, structured data, content publishing, and entity data — all of which work with or without a dedicated website.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Start showing up where your customers are looking.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
