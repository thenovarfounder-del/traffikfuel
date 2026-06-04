// @ts-nocheck
'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ChiropractorsPage() {
  return (
    <>
      <Nav />
      <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"USD\"},\"description\":\"Traffikora automates AI marketing for chiropractic offices — daily SEO content, social posts, and AI engine citations. Get found on Google and ChatGPT by patients searching for a chiropractor near them.\",\"url\":\"https://www.traffikora.com\"}" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How does AI marketing help chiropractors get more patients?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora publishes daily SEO content targeting keywords like chiropractor near me, back pain treatment, neck pain chiropractor, and sports injury chiropractic in your city — building organic authority that books new patients.\"}},{\"@type\":\"Question\",\"name\":\"Will Traffikora help my chiropractic office appear on ChatGPT?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Traffikora structures your chiropractic content so AI engines like ChatGPT and Google Gemini cite your practice when patients ask for chiropractor recommendations in your area.\"}},{\"@type\":\"Question\",\"name\":\"What chiropractic keywords does Traffikora target?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora targets chiropractor near me, back pain treatment, neck pain chiropractor, sports injury chiropractor, chiropractic adjustment, sciatica treatment, auto accident chiropractor, pediatric chiropractor, and best chiropractor — localized to your city.\"}},{\"@type\":\"Question\",\"name\":\"Is AI-generated chiropractic content compliant?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora generates informational health content your team reviews before publishing — consistent with FTC and state healthcare marketing guidelines.\"}},{\"@type\":\"Question\",\"name\":\"How long before my chiropractic practice ranks on Google?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Most chiropractic practices see measurable improvements within 60 to 90 days of consistent daily publishing.\"}},{\"@type\":\"Question\",\"name\":\"What is the best AI marketing software for chiropractors?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora is purpose-built for local healthcare businesses including chiropractic offices — automating daily SEO content, social media, and AI engine optimization.\"}}]}" }} />

        {/* HERO */}
        <section style={{ background: '#111', padding: '80px 40px', textAlign: 'center', borderBottom: '2.5px solid #1a1a1a' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🩺</div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>Chiropractors</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-1.5px', margin: '0 auto 24px' }}>Fill your treatment schedule with patients who find you first.</h1>
            <p style={{ fontSize: '18px', color: '#ccc', margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>Traffikora builds your chiropractic practice’s digital authority with daily SEO content and AI search optimization — so new patients find you before any other chiropractor in town.</p>
            <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 20px rgba(232,97,10,0.35)' }}>Start growing your chiropractic practice →</button>
            <p style={{ color: '#555', fontSize: '13px', marginTop: '16px' }}>Free plan available · No credit card needed · Live in 5 minutes</p>
          </div>
        </section>

        {/* PROBLEM */}
        <section style={{ background: '#0d0d0d', padding: '60px 40px', textAlign: 'center', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>The Problem</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>Patients search Google and ask AI for chiropractor recommendations before booking. Without consistent SEO content and AI visibility, new patients choose a competitor before they ever hear your name.</h2>
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ background: '#111', padding: '80px 40px', borderBottom: '2.5px solid #1a1a1a' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', textAlign: 'center', marginBottom: '16px' }}>What Traffikora Does For Chiropractors</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: '48px', lineHeight: 1.1 }}>Everything running automatically. <em style={{ color: '#E8610A', fontStyle: 'italic' }}>Every day.</em></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '28px' }}><div style={{ fontSize: '32px', marginBottom: '16px' }}>🔍</div><h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Local SEO Domination</h3><p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.7, fontWeight: 300 }}>Daily blog content targeting your industry’s highest-value keywords in your city.</p></div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '28px' }}><div style={{ fontSize: '32px', marginBottom: '16px' }}>🤖</div><h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>ChatGPT and AI Citations</h3><p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.7, fontWeight: 300 }}>Optimized so AI engines recommend your business when locals search for help.</p></div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '28px' }}><div style={{ fontSize: '32px', marginBottom: '16px' }}>📱</div><h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Social Media on Autopilot</h3><p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.7, fontWeight: 300 }}>Seasonal content, promotions, and trust-building posts across all major platforms.</p></div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '28px' }}><div style={{ fontSize: '32px', marginBottom: '16px' }}>📞</div><h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>24/7 Lead Generation</h3><p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.7, fontWeight: 300 }}>Content published around the clock so leads find you day or night.</p></div>
            </div>
          </div>
        </section>

        {/* LONG-FORM SEO CONTENT */}
        <section style={{ background: '#0d0d0d', padding: '80px 40px', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: '#fff', marginBottom: '40px', lineHeight: 1.15 }}>AI Marketing for Chiropractors: Get Found, Get Booked</h2>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Over 35 million Americans visit chiropractors annually, and the vast majority find their chiropractor through online search. When someone experiences back pain or a sports injury, they search “chiropractor near me” or “best chiropractor in [city].” Chiropractic offices that publish consistent educational content dominate these searches and book new patients on autopilot.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>In 2026, patients are also asking ChatGPT and Google Gemini for chiropractor recommendations. Traffikora optimizes your practice’s content so AI engines cite you when patients ask for help — building a digital referral engine that works 24/7.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Traffikora targets high-intent chiropractic keywords including: chiropractor near me, back pain treatment [city], neck pain chiropractor, sports injury chiropractor, chiropractic adjustment, sciatica treatment, auto accident chiropractor, pediatric chiropractor, and best chiropractor.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Chiropractic offices in cities like Nashville, Dallas, Denver, and Tampa use Traffikora to build the content authority that books new patients consistently — without relying on referrals alone.</p>
          </div>
        </section>

        {/* STATS BAR */}
        <section style={{ background: '#E8610A', padding: '40px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '40px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}><div style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>9+</div><div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>Platforms automated</div></div>
            <div style={{ textAlign: 'center' }}><div style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>24/7</div><div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>Marketing running</div></div>
            <div style={{ textAlign: 'center' }}><div style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>5 min</div><div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>To go live</div></div>
            <div style={{ textAlign: 'center' }}><div style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#fff', lineHeight: 1 }}>Free</div><div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '4px' }}>Plan to start</div></div>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section style={{ background: '#111', padding: '60px 40px', borderBottom: '2.5px solid #1a1a1a' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '20px' }}>★★★★★</div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontStyle: 'italic', color: '#fff', lineHeight: 1.7, marginBottom: '20px' }}>“New patient appointments are up 45% since using Traffikora. We rank for every chiropractic keyword in our city. It’s like having a full marketing team for $97 a month.”</p>
            <p style={{ fontSize: '13px', color: '#E8610A', fontWeight: 700, letterSpacing: '.08em' }}>Dr. Kevin M., Chiropractor — Nashville, TN</p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#0d0d0d', padding: '80px 40px', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px', textAlign: 'center' }}>Frequently Asked Questions</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: '#fff', marginBottom: '48px', textAlign: 'center', lineHeight: 1.15 }}>Everything you need to know</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>How does AI marketing help chiropractors get more patients?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora publishes daily SEO content targeting keywords like chiropractor near me, back pain treatment, neck pain chiropractor, and sports injury chiropractic in your city — building organic authority that books new patients.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Will Traffikora help my chiropractic office appear on ChatGPT?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Yes. Traffikora structures your chiropractic content so AI engines like ChatGPT and Google Gemini cite your practice when patients ask for chiropractor recommendations in your area.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>What chiropractic keywords does Traffikora target?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora targets chiropractor near me, back pain treatment, neck pain chiropractor, sports injury chiropractor, chiropractic adjustment, sciatica treatment, auto accident chiropractor, pediatric chiropractor, and best chiropractor — localized to your city.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Is AI-generated chiropractic content compliant?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora generates informational health content your team reviews before publishing — consistent with FTC and state healthcare marketing guidelines.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>How long before my chiropractic practice ranks on Google?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Most chiropractic practices see measurable improvements within 60 to 90 days of consistent daily publishing.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>What is the best AI marketing software for chiropractors?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora is purpose-built for local healthcare businesses including chiropractic offices — automating daily SEO content, social media, and AI engine optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#fff', padding: '80px 40px', textAlign: 'center', borderTop: '2.5px solid #111' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#111', marginBottom: '16px', lineHeight: 1.1 }}>Ready to put your marketing on <em style={{ color: '#E8610A', fontStyle: 'italic' }}>autopilot?</em></h2>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '32px', lineHeight: 1.8, fontWeight: 300 }}>Join hundreds of chiropractors who let Traffikora handle their marketing while they focus on what they do best.</p>
            <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 20px rgba(232,97,10,0.35)' }}>Start growing your chiropractic practice →</button>
            <p style={{ color: '#888', fontSize: '13px', marginTop: '16px' }}>Free plan available · No credit card needed · Cancel anytime</p>
            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
              <a href="/pricing" style={{ color: '#E8610A', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>View Pricing →</a>
              <a href="/solutions" style={{ color: '#E8610A', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>All Industries →</a>
              <a href="/signup" style={{ color: '#E8610A', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>Start Free →</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
