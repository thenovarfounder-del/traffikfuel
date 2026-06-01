// @ts-nocheck
'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function FeaturesPage() {
  const features = [
    { icon: '🔍', name: 'Google SEO Automation', desc: 'Traffikora publishes keyword-optimized blog posts, schema markup, and location pages to your website automatically every single day. Most businesses see Google ranking improvements within 2 to 4 weeks.' },
    { icon: '✏️', name: 'Blog Automation', desc: 'Fresh SEO blog content published to your WordPress site daily. Each post is written for your specific industry, location, and target customers. No writing required from you.' },
    { icon: '🎬', name: 'TikTok Publishing', desc: 'Short-form video content pushed directly to your TikTok business account automatically. Reach millions of local buyers without touching a camera.' },
    { icon: '▶️', name: 'YouTube Shorts', desc: 'Auto-upload video content to YouTube Shorts to capture search traffic and build authority on the world second-largest search engine.' },
    { icon: '🤖', name: 'Google SEO + AI Engine Optimization', desc: 'Get found when people ask ChatGPT, Claude, Gemini, or Perplexity to recommend a business like yours. This is the most powerful and most ignored marketing channel available today.' },
    { icon: '💬', name: 'Reddit Amplifier', desc: 'Build brand authority through strategic Reddit presence. Traffikora places your business in front of highly engaged local communities the kind Google and AI engines trust.' },
    { icon: '📋', name: 'Schema Markup', desc: 'Structured data injected into your website automatically. Tells Google exactly who you are, where you are, and what you do so you show up in rich results and local packs.' },
    { icon: '📊', name: 'Google Search Console', desc: 'Direct integration with your Google Search Console account. Track your keyword rankings, click-through rates, and impressions all inside your Traffikora dashboard.' },
    { icon: '📱', name: 'Instagram and Facebook', desc: 'Daily posts to your Instagram and Facebook business accounts. Captions, hashtags, and visuals all handled automatically on brand every time.' },
    { icon: '📈', name: 'Analytics Dashboard', desc: 'See everything in one place: posts published, platforms active, ranking improvements, impressions, and AI engine citations. No spreadsheets required.' },
    { icon: '🔗', name: 'One-Click Connections', desc: 'Connect your Google, Facebook, Instagram, TikTok, YouTube, and website in minutes. Traffikora handles the rest. No developer needed.' },
    { icon: '⚡', name: 'Live in 5 Minutes', desc: 'Answer a few questions about your business, connect your accounts, and Traffikora starts publishing immediately. Most customers are fully live within 5 minutes of signing up.' },
  ]

  return (
    <>
      <Nav />
      <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

        <section style={{ background: '#111', padding: '80px 40px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>Everything Included</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-1.5px', marginBottom: '20px', maxWidth: '800px', margin: '0 auto 20px' }}>
            One platform. <em style={{ color: '#E8610A', fontStyle: 'italic' }}>Every channel.</em>
          </h1>
          <p style={{ fontSize: '18px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>
            Traffikora automates your marketing across Google, TikTok, YouTube, Instagram, Facebook, Reddit, ChatGPT, Claude, Gemini, and more from a single dashboard.
          </p>
          <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            Start Free Today
          </button>
        </section>

        <section style={{ background: '#fff', padding: '80px 40px', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '12px' }}>
              Every feature you need to <em style={{ color: '#E8610A', fontStyle: 'italic' }}>dominate your market</em>
            </h2>
            <p style={{ fontSize: '16px', color: '#555', textAlign: 'center', marginBottom: '52px', lineHeight: 1.7 }}>No add-ons. No hidden fees. Everything below is included in every Traffikora plan.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              {features.map((f) => (
                <div key={f.name} style={{ border: '1.5px solid #e8e8e8', borderRadius: '12px', padding: '28px 24px' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{f.icon}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#111', marginBottom: '10px' }}>{f.name}</h3>
                  <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.75, fontWeight: 300 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#0d0d0d', padding: '80px 40px', textAlign: 'center', borderBottom: '2.5px solid #111' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>Our Number 1 Differentiator</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#fff', marginBottom: '20px', maxWidth: '700px', margin: '0 auto 20px' }}>
            The only platform that optimizes for <em style={{ color: '#E8610A', fontStyle: 'italic' }}>AI search engines</em>
          </h2>
          <p style={{ fontSize: '16px', color: '#bbb', maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.85, fontWeight: 300 }}>
            73% of local searches now happen on AI engines like ChatGPT, Claude, and Gemini. Every other marketing platform ignores this. Traffikora was built specifically to make your business visible there.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {['ChatGPT', 'Claude', 'Gemini', 'Perplexity', 'Copilot', 'Google'].map(p => (
              <span key={p} style={{ background: 'rgba(255,255,255,.06)', border: '1px solid #333', borderRadius: '8px', padding: '10px 18px', fontSize: '14px', color: '#ddd', fontWeight: 500 }}>{p}</span>
            ))}
          </div>
        </section>

        <section style={{ background: '#fff', padding: '80px 40px', textAlign: 'center', borderTop: '2.5px solid #111' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>
            Ready to put your marketing <em style={{ color: '#E8610A', fontStyle: 'italic' }}>on autopilot?</em>
          </h2>
          <p style={{ fontSize: '16px', color: '#555', maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.8 }}>Free plan available. No credit card required. Cancel anytime with one click.</p>
          <button onClick={() => window.location.href='/signup'} style={{ background: '#111', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            Start Free Today
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}
