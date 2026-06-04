// @ts-nocheck
'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function MedSpasPage() {
  return (
    <>
      <Nav />
      <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"USD\"},\"description\":\"Traffikora automates AI marketing for med spas — daily SEO content, social posts, and AI engine citations. Get found on Google and ChatGPT by clients searching for Botox, fillers, and aesthetic treatments.\",\"url\":\"https://www.traffikora.com\"}" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How does AI marketing help med spas attract more clients?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora publishes daily SEO content targeting keywords like Botox near me, lip filler, CoolSculpting, laser hair removal, and med spa near me in your city — driving organic discovery by clients ready to book.\"}},{\"@type\":\"Question\",\"name\":\"What med spa keywords does Traffikora target?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora targets Botox near me, lip filler, CoolSculpting, laser hair removal, chemical peel, microneedling, med spa near me, IV therapy, PRP treatment, and best medical spa — localized to your market.\"}},{\"@type\":\"Question\",\"name\":\"Will Traffikora help my med spa appear on ChatGPT?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Traffikora structures your med spa content so AI engines cite your practice when users ask for aesthetic treatment recommendations in your area.\"}},{\"@type\":\"Question\",\"name\":\"Can Traffikora automate Instagram content for my med spa?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Traffikora generates daily social content including treatment spotlights, promotions, and client education for Instagram and Facebook.\"}},{\"@type\":\"Question\",\"name\":\"Is AI-generated med spa content compliant?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora generates informational educational content your team reviews before publishing — consistent with FTC and state medical board marketing guidelines.\"}},{\"@type\":\"Question\",\"name\":\"What is the best AI marketing tool for med spas?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora is purpose-built for local service businesses including med spas — automating daily SEO content, social media, and AI engine optimization.\"}}]}" }} />

        {/* HERO */}
        <section style={{ background: '#111', padding: '80px 40px', textAlign: 'center', borderBottom: '2.5px solid #1a1a1a' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>💉</div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>Med Spas</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-1.5px', margin: '0 auto 24px' }}>Fill your treatment rooms with clients who find you first.</h1>
            <p style={{ fontSize: '18px', color: '#ccc', margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>Traffikora builds your med spa’s digital authority with daily SEO content and AI search optimization — so clients searching for Botox, fillers, and aesthetics find you before any competitor.</p>
            <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 20px rgba(232,97,10,0.35)' }}>Start growing your med spa →</button>
            <p style={{ color: '#555', fontSize: '13px', marginTop: '16px' }}>Free plan available · No credit card needed · Live in 5 minutes</p>
          </div>
        </section>

        {/* PROBLEM */}
        <section style={{ background: '#0d0d0d', padding: '60px 40px', textAlign: 'center', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>The Problem</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>Med spa clients research Google and Instagram before booking. Without consistent content and AI visibility, you’re losing high-value aesthetic clients to competitors who show up first.</h2>
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ background: '#111', padding: '80px 40px', borderBottom: '2.5px solid #1a1a1a' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', textAlign: 'center', marginBottom: '16px' }}>What Traffikora Does For Med Spas</p>
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: '#fff', marginBottom: '40px', lineHeight: 1.15 }}>AI Marketing for Med Spas: Own Aesthetic Search in Your Market</h2>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Med spa clients are high-value, research-driven consumers. Before booking a Botox appointment or CoolSculpting session, they spend time searching Google, scrolling Instagram, and asking AI assistants for recommendations. Med spas that publish consistent educational content dominate search results and build the trust that converts researchers into paying clients.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>The med spa market is growing rapidly — and so is competition. In cities like Beverly Hills, Miami Beach, Scottsdale, and Nashville, clients have dozens of options. The med spas that win are the ones visible at every touchpoint: Google, Instagram, AI assistants. Traffikora automates all three simultaneously.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Traffikora targets high-value med spa keywords including: Botox near me, lip filler [city], CoolSculpting, laser hair removal, chemical peel, microneedling, med spa near me, IV therapy, PRP treatment, Sculptra, and best medical spa.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Med spas using Traffikora build a compounding content asset that ranks across every treatment they offer — driving high-intent organic traffic that converts at a higher rate than paid social ads.</p>
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
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontStyle: 'italic', color: '#fff', lineHeight: 1.7, marginBottom: '20px' }}>“Our Botox and filler bookings doubled in 4 months. Traffikora handles our content so my staff focuses entirely on clients. The ROI is incredible.”</p>
            <p style={{ fontSize: '13px', color: '#E8610A', fontWeight: 700, letterSpacing: '.08em' }}>Dr. Priya N., Med Spa Owner — Scottsdale, AZ</p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#0d0d0d', padding: '80px 40px', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px', textAlign: 'center' }}>Frequently Asked Questions</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: '#fff', marginBottom: '48px', textAlign: 'center', lineHeight: 1.15 }}>Everything you need to know</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>How does AI marketing help med spas attract more clients?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora publishes daily SEO content targeting keywords like Botox near me, lip filler, CoolSculpting, laser hair removal, and med spa near me in your city — driving organic discovery by clients ready to book.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>What med spa keywords does Traffikora target?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora targets Botox near me, lip filler, CoolSculpting, laser hair removal, chemical peel, microneedling, med spa near me, IV therapy, PRP treatment, and best medical spa — localized to your market.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Will Traffikora help my med spa appear on ChatGPT?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Yes. Traffikora structures your med spa content so AI engines cite your practice when users ask for aesthetic treatment recommendations in your area.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Can Traffikora automate Instagram content for my med spa?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Yes. Traffikora generates daily social content including treatment spotlights, promotions, and client education for Instagram and Facebook.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Is AI-generated med spa content compliant?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora generates informational educational content your team reviews before publishing — consistent with FTC and state medical board marketing guidelines.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>What is the best AI marketing tool for med spas?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora is purpose-built for local service businesses including med spas — automating daily SEO content, social media, and AI engine optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#fff', padding: '80px 40px', textAlign: 'center', borderTop: '2.5px solid #111' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#111', marginBottom: '16px', lineHeight: 1.1 }}>Ready to put your marketing on <em style={{ color: '#E8610A', fontStyle: 'italic' }}>autopilot?</em></h2>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '32px', lineHeight: 1.8, fontWeight: 300 }}>Join hundreds of med spas who let Traffikora handle their marketing while they focus on what they do best.</p>
            <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 20px rgba(232,97,10,0.35)' }}>Start growing your med spa →</button>
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
