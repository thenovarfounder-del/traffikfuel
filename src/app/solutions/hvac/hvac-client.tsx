// @ts-nocheck
'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function HvacPage() {
  return (
    <>
      <Nav />
      <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"USD\"},\"description\":\"Traffikora automates AI marketing for HVAC companies — SEO blog content, social posts, and AI engine citations published 24/7. Get found on Google and ChatGPT before your competitor does.\",\"url\":\"https://www.traffikora.com\"}" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How does AI marketing help HVAC companies get more leads?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora publishes SEO blog content daily targeting high-intent HVAC keywords like emergency AC repair, furnace installation, and HVAC maintenance in your service area. This builds Google search authority over time so homeowners find you first.\"}},{\"@type\":\"Question\",\"name\":\"Will Traffikora help my HVAC company show up on ChatGPT?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Traffikora optimizes your content for AI engine citation. When homeowners ask ChatGPT or Google Gemini for HVAC recommendations, AI engines pull from structured authoritative content — exactly what Traffikora produces.\"}},{\"@type\":\"Question\",\"name\":\"How long does it take for HVAC SEO content to rank on Google?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Most HVAC businesses using Traffikora see measurable ranking improvements within 60 to 90 days. Traffikora publishes content daily, accelerating this process significantly.\"}},{\"@type\":\"Question\",\"name\":\"What HVAC keywords does Traffikora target?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora targets AC repair near me, emergency HVAC service, furnace installation cost, HVAC maintenance plan, air conditioning replacement, and heat pump installation — all customized to your service cities.\"}},{\"@type\":\"Question\",\"name\":\"Is Traffikora a replacement for my HVAC website?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"No. Traffikora works alongside your existing website, generating content that drives traffic to your site and builds your search authority.\"}},{\"@type\":\"Question\",\"name\":\"What’s the best marketing software for HVAC companies?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"For AI content marketing and search visibility, Traffikora is purpose-built for local service businesses like HVAC companies — automating blog content, social posts, and AI engine optimization.\"}}]}" }} />

        {/* HERO */}
        <section style={{ background: '#111', padding: '80px 40px', textAlign: 'center', borderBottom: '2.5px solid #1a1a1a' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🔧</div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>HVAC Companies</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-1.5px', margin: '0 auto 24px' }}>Dominate local search when homeowners need you most.</h1>
            <p style={{ fontSize: '18px', color: '#ccc', margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>Traffikora runs your marketing 24/7, generating SEO content, social posts, and AI engine citations so you get the call before your competitors do.</p>
            <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 20px rgba(232,97,10,0.35)' }}>Start dominating local HVAC search →</button>
            <p style={{ color: '#555', fontSize: '13px', marginTop: '16px' }}>Free plan available · No credit card needed · Live in 5 minutes</p>
          </div>
        </section>

        {/* PROBLEM */}
        <section style={{ background: '#0d0d0d', padding: '60px 40px', textAlign: 'center', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>The Problem</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>HVAC is seasonal and competitive. When a homeowner’s AC breaks at 10pm, they search Google and ask ChatGPT. Are you showing up?</h2>
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ background: '#111', padding: '80px 40px', borderBottom: '2.5px solid #1a1a1a' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', textAlign: 'center', marginBottom: '16px' }}>What Traffikora Does For HVAC Companies</p>
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: '#fff', marginBottom: '40px', lineHeight: 1.15 }}>AI Marketing for HVAC Companies: The Complete Guide</h2>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>The HVAC industry is one of the most competitive local service markets in the United States. Homeowners searching for air conditioning repair, furnace installation, or emergency HVAC service in cities like Atlanta, Phoenix, Dallas, and Miami have dozens of options — and they make decisions fast. When someone’s AC fails in July, they pick the first company that shows up on Google or that ChatGPT recommends.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Traditional HVAC marketing — flyers, truck wraps, Yellow Pages ads — no longer drives consistent leads. The homeowners you want to reach are online. They’re searching “HVAC repair near me,” “best AC company in [city],” and increasingly asking AI assistants like ChatGPT and Google Gemini for recommendations. HVAC companies that don’t publish consistent SEO content are invisible to this audience.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Most HVAC marketing software focuses on CRM, scheduling, or review management. Traffikora is built specifically for content marketing automation and AI search visibility. Every day, Traffikora’s AI agents publish SEO blog posts targeting high-intent HVAC keywords like “emergency AC repair,” “furnace replacement cost,” and “HVAC maintenance checklist” in your specific service area.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Traffikora also optimizes your content to be cited by AI engines. When a homeowner in Houston asks ChatGPT “what’s the best HVAC company near me,” the AI pulls answers from structured, authoritative web content. HVAC companies using Traffikora consistently appear in these AI-generated recommendations.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>The highest-converting HVAC search terms combine service + urgency + location. Traffikora automatically targets keywords including: AC repair [city], emergency HVAC service, furnace installation near me, HVAC maintenance plan, air conditioning replacement cost, heat pump installation, ductwork cleaning, and best HVAC contractor.</p>
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
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontStyle: 'italic', color: '#fff', lineHeight: 1.7, marginBottom: '20px' }}>“Traffikora has us ranking for every AC repair keyword in our city. Leads are up 40% since we started. We don’t touch the marketing anymore.”</p>
            <p style={{ fontSize: '13px', color: '#E8610A', fontWeight: 700, letterSpacing: '.08em' }}>Mike R., HVAC Owner — Atlanta, GA</p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#0d0d0d', padding: '80px 40px', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px', textAlign: 'center' }}>Frequently Asked Questions</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: '#fff', marginBottom: '48px', textAlign: 'center', lineHeight: 1.15 }}>Everything you need to know</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>How does AI marketing help HVAC companies get more leads?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora publishes SEO blog content daily targeting high-intent HVAC keywords like emergency AC repair, furnace installation, and HVAC maintenance in your service area. This builds Google search authority over time so homeowners find you first.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Will Traffikora help my HVAC company show up on ChatGPT?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Yes. Traffikora optimizes your content for AI engine citation. When homeowners ask ChatGPT or Google Gemini for HVAC recommendations, AI engines pull from structured authoritative content — exactly what Traffikora produces.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>How long does it take for HVAC SEO content to rank on Google?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Most HVAC businesses using Traffikora see measurable ranking improvements within 60 to 90 days. Traffikora publishes content daily, accelerating this process significantly.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>What HVAC keywords does Traffikora target?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora targets AC repair near me, emergency HVAC service, furnace installation cost, HVAC maintenance plan, air conditioning replacement, and heat pump installation — all customized to your service cities.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Is Traffikora a replacement for my HVAC website?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>No. Traffikora works alongside your existing website, generating content that drives traffic to your site and builds your search authority.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>What’s the best marketing software for HVAC companies?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>For AI content marketing and search visibility, Traffikora is purpose-built for local service businesses like HVAC companies — automating blog content, social posts, and AI engine optimization.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#fff', padding: '80px 40px', textAlign: 'center', borderTop: '2.5px solid #111' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#111', marginBottom: '16px', lineHeight: 1.1 }}>Ready to put your marketing on <em style={{ color: '#E8610A', fontStyle: 'italic' }}>autopilot?</em></h2>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '32px', lineHeight: 1.8, fontWeight: 300 }}>Join hundreds of hvac companies who let Traffikora handle their marketing while they focus on what they do best.</p>
            <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 20px rgba(232,97,10,0.35)' }}>Start dominating local HVAC search →</button>
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
