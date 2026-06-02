// @ts-nocheck
'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HowItWorksPage() {
  return (
    <>
      <Nav />
      <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

        <section style={{ background: '#111', padding: '80px 40px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>How It Works</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-1.5px', margin: '0 auto 20px', maxWidth: '800px' }}>
            Set it once. <em style={{ color: '#E8610A', fontStyle: 'italic' }}>It runs forever.</em>
          </h1>
          <p style={{ fontSize: '18px', color: '#ccc', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>
            Three steps and you are completely automated across 9 or more platforms. No tech skills required.
          </p>
        </section>

        <section style={{ background: '#fff', padding: '80px 40px', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '60px' }}>
              Up and running in <em style={{ color: '#E8610A', fontStyle: 'italic' }}>under 5 minutes</em>
            </h2>
            {[
              { step: '1', title: 'Connect your accounts', desc: 'Link your website, Google Search Console, Facebook, Instagram, TikTok, YouTube, and any other platforms you use. It takes less than 5 minutes and requires no technical skills. We walk you through every step with a guided setup wizard.', detail: 'Traffikora connects to 9+ platforms through secure OAuth. You authorize once and we handle everything from there.' },
              { step: '2', title: 'Tell us about your business', desc: 'Answer a few simple questions: What do you do? Who are your customers? Where are you located? What makes you different? Our AI uses this to learn your brand voice, target audience, and competitive positioning.', detail: 'The more detail you provide, the better your content performs. Most customers complete setup in under 3 minutes. You can update your business profile any time.' },
              { step: '3', title: 'Watch it work forever', desc: 'Traffikora starts generating and publishing content immediately. Blog posts, social media updates, schema markup, Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini all happening automatically, every single day, while you focus on running your business.', detail: 'Most customers see their first content published within minutes of completing setup. Rankings typically start improving within 2 to 4 weeks. AI engine citations begin appearing within 30 days.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '32px', marginBottom: '60px', alignItems: 'flex-start' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: i === 0 ? '#E8610A' : '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontSize: '24px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>{item.step}</div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '26px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>{item.title}</h3>
                  <p style={{ fontSize: '16px', color: '#444', lineHeight: 1.85, marginBottom: '12px', fontWeight: 300 }}>{item.desc}</p>
                  <p style={{ fontSize: '14px', color: '#777', lineHeight: 1.75, fontStyle: 'italic', fontWeight: 300 }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#111', padding: '80px 40px', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#fff', marginBottom: '52px' }}>
              What happens after you <em style={{ color: '#E8610A', fontStyle: 'italic' }}>start today</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
              {[
                { day: 'Day 1', title: "You're live", desc: 'Connect your accounts. Traffikora learns your business and starts publishing immediately.' },
                { day: 'Day 7', title: 'Content wave', desc: 'Blog posts, social content, and schema markup all published. Google starts indexing.' },
                { day: 'Day 14', title: 'Rankings move', desc: 'Search Console shows impressions climbing. TikTok and YouTube gaining traction.' },
                { day: 'Day 30', title: 'Findable everywhere', desc: 'Google rankings up. AI engines recommending you. New leads coming in on autopilot.' },
              ].map((item) => (
                <div key={item.day} style={{ background: '#141414', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px 20px' }}>
                  <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '10px' }}>{item.day}</p>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: '#aaa', lineHeight: 1.65, fontWeight: 300 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>
            Ready to start in <em style={{ color: '#E8610A', fontStyle: 'italic' }}>5 minutes?</em>
          </h2>
          <p style={{ fontSize: '16px', color: '#555', maxWidth: '440px', margin: '0 auto 32px', lineHeight: 1.8 }}>Free plan available. Free plan available. No credit card required. Cancel anytime.</p>
          <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            Start Free — No Card Needed
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}
