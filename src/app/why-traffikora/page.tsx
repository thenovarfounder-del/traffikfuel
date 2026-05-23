// @ts-nocheck
'use client'

import Link from 'next/link'

export default function WhyTraffikoraPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '2.5px solid #111', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', textDecoration: 'none' }}>Traffikora</Link>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link href="/features/ai-engine-optimization" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>Features</Link>
          <Link href="/pricing" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>Pricing</Link>
          <Link href="/how-it-works" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>How It Works</Link>
          <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '10px 22px', textDecoration: 'none', fontSize: '15px', fontWeight: 600, border: '2.5px solid #111' }}>Start Free Trial</Link>
        </div>
      </nav>

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Why Traffikora</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '800px', margin: '0 auto 24px' }}>The smartest marketing decision a small business can make in 2026.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '600px', margin: '0 auto 40px' }}>Not another tool. Not another agency. An automated marketing machine that runs forever — for less than you spend on lunch each week.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Your Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>The Math</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '56px' }}>$97/mo vs $2,000+/mo. Same results.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', border: '2.5px solid #111' }}>
            <div style={{ background: '#f5f5f5', padding: '20px 32px', borderBottom: '2.5px solid #111', borderRight: '2.5px solid #111' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#666' }}>Marketing Agency</p>
            </div>
            <div style={{ background: '#111', padding: '20px 32px', borderBottom: '2.5px solid #111' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E8610A' }}>Traffikora</p>
            </div>
              <>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #eee', borderRight: '2.5px solid #111', background: '#fff' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#666' }}>✗ $2,000 – $5,000/month</p>
                </div>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #222', background: '#111' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#fff' }}>✓ $97 – $1,497/month</p>
                </div>
              </>
              <>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #eee', borderRight: '2.5px solid #111', background: '#fff' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#666' }}>✗ 3–6 month contracts</p>
                </div>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #222', background: '#111' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#fff' }}>✓ Cancel anytime</p>
                </div>
              </>
              <>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #eee', borderRight: '2.5px solid #111', background: '#fff' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#666' }}>✗ Google only</p>
                </div>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #222', background: '#111' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#fff' }}>✓ Google + all AI engines</p>
                </div>
              </>
              <>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #eee', borderRight: '2.5px solid #111', background: '#fff' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#666' }}>✗ Manual work, slow updates</p>
                </div>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #222', background: '#111' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#fff' }}>✓ Fully automated, 24/7</p>
                </div>
              </>
              <>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #eee', borderRight: '2.5px solid #111', background: '#fff' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#666' }}>✗ Monthly reports, delayed</p>
                </div>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #222', background: '#111' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#fff' }}>✓ Real-time dashboard</p>
                </div>
              </>
              <>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #eee', borderRight: '2.5px solid #111', background: '#fff' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#666' }}>✗ You depend on their team</p>
                </div>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #222', background: '#111' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#fff' }}>✓ Set it once, runs forever</p>
                </div>
              </>
              <>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #eee', borderRight: '2.5px solid #111', background: '#fff' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#666' }}>✗ Optimizes for yesterday</p>
                </div>
                <div style={{ padding: '18px 32px', borderBottom: '1px solid #222', background: '#111' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#fff' }}>✓ Built for 2026 and beyond</p>
                </div>
              </>
          </div>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '80px 32px', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>Then vs Now</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '56px' }}>The old way is broken.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div style={{ background: '#fff', border: '2.5px solid #111', padding: '40px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#111', marginBottom: '24px' }}>The Old Way</h3>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#cc0000', fontSize: '18px', marginTop: '2px' }}>✗</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.5 }}>Hire an agency for $2,000+/month</p>
                </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#cc0000', fontSize: '18px', marginTop: '2px' }}>✗</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.5 }}>Wait weeks for content to go live</p>
                </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#cc0000', fontSize: '18px', marginTop: '2px' }}>✗</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.5 }}>Only optimized for Google search</p>
                </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#cc0000', fontSize: '18px', marginTop: '2px' }}>✗</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.5 }}>AI engines have never heard of you</p>
                </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#cc0000', fontSize: '18px', marginTop: '2px' }}>✗</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.5 }}>Miss customer reviews for days</p>
                </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#cc0000', fontSize: '18px', marginTop: '2px' }}>✗</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.5 }}>Pay for reports you don't understand</p>
                </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#cc0000', fontSize: '18px', marginTop: '2px' }}>✗</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.5 }}>Renew contracts you're locked into</p>
                </div>
            </div>
            <div style={{ background: '#111', border: '2.5px solid #111', padding: '40px' }}>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#E8610A', marginBottom: '24px' }}>The Traffikora Way</h3>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#E8610A', fontSize: '18px', marginTop: '2px' }}>✓</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#ccc', lineHeight: 1.5 }}>Connect once. Automated forever.</p>
                </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#E8610A', fontSize: '18px', marginTop: '2px' }}>✓</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#ccc', lineHeight: 1.5 }}>Content goes live on schedule, always</p>
                </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#E8610A', fontSize: '18px', marginTop: '2px' }}>✓</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#ccc', lineHeight: 1.5 }}>Google AND every major AI engine</p>
                </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#E8610A', fontSize: '18px', marginTop: '2px' }}>✓</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#ccc', lineHeight: 1.5 }}>ChatGPT, Perplexity, Gemini, Claude cite your business</p>
                </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#E8610A', fontSize: '18px', marginTop: '2px' }}>✓</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#ccc', lineHeight: 1.5 }}>Reviews monitored and flagged instantly</p>
                </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#E8610A', fontSize: '18px', marginTop: '2px' }}>✓</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#ccc', lineHeight: 1.5 }}>Simple dashboard, real results</p>
                </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ color: '#E8610A', fontSize: '18px', marginTop: '2px' }}>✓</span>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#ccc', lineHeight: 1.5 }}>Cancel anytime. No contracts.</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>The Differentiator</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '24px' }}>Why Google + AI engines together?</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', lineHeight: 1.8, maxWidth: '760px', margin: '0 auto 40px', textAlign: 'center' }}>In 2026, your customers find businesses two ways: Google and AI tools like ChatGPT, Perplexity, and Gemini. Most platforms only handle Google. Traffikora wins in both places simultaneously.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
              <div style={{ border: '2.5px solid #111', padding: '32px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '8px' }}>Google Search</p>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#111', lineHeight: 1 }}>8.5B</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#666', marginBottom: '16px' }}>searches per day</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.5 }}>Traditional SEO — Traffikora has you covered.</p>
              </div>
              <div style={{ border: '2.5px solid #111', padding: '32px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '8px' }}>ChatGPT + Perplexity</p>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#111', lineHeight: 1 }}>100M+</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#666', marginBottom: '16px' }}>AI searches daily</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.5 }}>The fastest growing discovery channel. Traffikora optimizes for this.</p>
              </div>
              <div style={{ border: '2.5px solid #111', padding: '32px', textAlign: 'center' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '8px' }}>Gemini + Copilot</p>
                <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, color: '#111', lineHeight: 1 }}>2026</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#666', marginBottom: '16px' }}>is the tipping point</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.5 }}>AI search is now mainstream. Miss it and you miss customers.</p>
              </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px' }}>What You Get</p>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#fff', marginBottom: '56px' }}>Real outcomes. Zero effort.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', textAlign: 'left' }}>
              <div style={{ borderLeft: '4px solid #E8610A', paddingLeft: '24px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>More visibility on Google</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#aaa', lineHeight: 1.7 }}>Your Google Business Profile is continuously optimized — posts, photos, hours, reviews, and keywords — so you rank higher in local search results.</p>
              </div>
              <div style={{ borderLeft: '4px solid #E8610A', paddingLeft: '24px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Cited by AI engines</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#aaa', lineHeight: 1.7 }}>Traffikora builds the structured data and content signals that cause ChatGPT, Perplexity, and Gemini to recommend your business when users ask for local options.</p>
              </div>
              <div style={{ borderLeft: '4px solid #E8610A', paddingLeft: '24px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Social media on autopilot</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#aaa', lineHeight: 1.7 }}>Content is created and published to your social accounts on a consistent schedule without you writing a single post.</p>
              </div>
              <div style={{ borderLeft: '4px solid #E8610A', paddingLeft: '24px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Review management</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#aaa', lineHeight: 1.7 }}>Every new review across Google, Yelp, and other platforms is monitored in real time so you never miss customer feedback again.</p>
              </div>
              <div style={{ borderLeft: '4px solid #E8610A', paddingLeft: '24px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>More traffic, more calls</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#aaa', lineHeight: 1.7 }}>Higher visibility on Google and AI engines means more people find your business, visit your website, and call your phone number.</p>
              </div>
              <div style={{ borderLeft: '4px solid #E8610A', paddingLeft: '24px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Monthly performance reports</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#aaa', lineHeight: 1.7 }}>A clear, simple report shows you exactly what Traffikora has done and what results it has driven — no jargon, just numbers.</p>
              </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to stop paying agency fees?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Start your free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial — It is Free for 7 Days</Link>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#fff', opacity: 0.7, marginTop: '16px' }}>Join businesses already running on Traffikora</p>
      </section>

      <footer style={{ background: '#111', borderTop: '2.5px solid #333', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ color: '#aaa', fontSize: '14px' }}>© 2026 Traffikora.com</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link href="/privacy" style={{ color: '#aaa', fontSize: '14px', textDecoration: 'none' }}>Privacy</Link>
          <Link href="/terms" style={{ color: '#aaa', fontSize: '14px', textDecoration: 'none' }}>Terms</Link>
          <Link href="/faq" style={{ color: '#aaa', fontSize: '14px', textDecoration: 'none' }}>FAQ</Link>
          <Link href="/signup" style={{ color: '#E8610A', fontSize: '14px', textDecoration: 'none', fontWeight: 600 }}>Start Free Trial</Link>
        </div>
      </footer>
    </>
  )
}
