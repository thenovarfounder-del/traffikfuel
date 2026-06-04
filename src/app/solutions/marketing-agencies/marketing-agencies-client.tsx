// @ts-nocheck
'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function MarketingAgenciesPage() {
  return (
    <>
      <Nav />
      <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"USD\"},\"description\":\"Traffikora is the white label AI content platform built for marketing agencies. Scale client content production, deliver more value, and grow agency revenue with Traffikora’s agency plan.\",\"url\":\"https://www.traffikora.com\"}" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"Can marketing agencies white label Traffikora for clients?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Traffikora’s Agency plan includes white label capabilities so agencies deliver Traffikora-powered content under their own brand.\"}},{\"@type\":\"Question\",\"name\":\"How many clients can an agency manage with Traffikora?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"The Agency plan supports up to 10 client accounts. The Enterprise plan supports unlimited clients with custom AI training for each.\"}},{\"@type\":\"Question\",\"name\":\"What content does Traffikora produce for agency clients?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora produces daily SEO blog posts, social media captions across 9 platforms, AI engine optimization content, and performance reports — tailored to each client’s industry and keywords.\"}},{\"@type\":\"Question\",\"name\":\"How does Traffikora help agencies scale without adding headcount?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"By automating content production for every client account, Traffikora eliminates the manual writing bottleneck. One account manager can handle 10x more clients when AI handles content generation.\"}},{\"@type\":\"Question\",\"name\":\"What is the ROI for agencies using Traffikora?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Agencies typically charge clients $500 to $2,000 per month for AI content services while paying $297/month for the Agency plan — a significant margin on recurring revenue.\"}},{\"@type\":\"Question\",\"name\":\"What is the best white label AI content platform for marketing agencies?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora is purpose-built for agency scale with multi-client management, white label reporting, per-client AI training, and bulk content automation.\"}}]}" }} />

        {/* HERO */}
        <section style={{ background: '#111', padding: '80px 40px', textAlign: 'center', borderBottom: '2.5px solid #1a1a1a' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>📊</div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>Marketing Agencies</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-1.5px', margin: '0 auto 24px' }}>Scale your agency with AI content that delivers real results.</h1>
            <p style={{ fontSize: '18px', color: '#ccc', margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>Traffikora is the white label AI content platform built for marketing agencies — so you deliver more content, more value, and more revenue without adding headcount.</p>
            <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 20px rgba(232,97,10,0.35)' }}>Scale your agency with Traffikora →</button>
            <p style={{ color: '#555', fontSize: '13px', marginTop: '16px' }}>Free plan available · No credit card needed · Live in 5 minutes</p>
          </div>
        </section>

        {/* PROBLEM */}
        <section style={{ background: '#0d0d0d', padding: '60px 40px', textAlign: 'center', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>The Problem</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>Content production is the bottleneck for every growing agency. Manual writing and platform management eat margins. AI automation is the only path to profitability at scale.</h2>
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ background: '#111', padding: '80px 40px', borderBottom: '2.5px solid #1a1a1a' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', textAlign: 'center', marginBottom: '16px' }}>What Traffikora Does For Marketing Agencies</p>
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: '#fff', marginBottom: '40px', lineHeight: 1.15 }}>White Label AI Marketing Platform for Agencies: Scale Without Limits</h2>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>The marketing agency model is being transformed by AI. Agencies that rely on manual content writers are operating at a significant cost disadvantage versus agencies using AI content automation. In 2026, the most profitable digital marketing agencies produce 10x the content at a fraction of the previous cost.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Traffikora’s Agency plan gives marketing agencies a white label AI content engine deployable across up to 10 client accounts simultaneously. Each client gets their own Business Brain — a dedicated AI trained on their industry, brand voice, and target keywords.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Traffikora’s agency features include: multi-client dashboard management, white label reporting, per-client Business Brain AI training, bulk content generation, social media automation across 9 platforms, WordPress auto-publish, and monthly performance reporting.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Marketing agencies using Traffikora charge clients $500 to $2,000 per month for AI content marketing services while running their entire content operation on the $297/month Agency plan — building a highly profitable recurring revenue model.</p>
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
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontStyle: 'italic', color: '#fff', lineHeight: 1.7, marginBottom: '20px' }}>“We went from 8 clients to 22 in 6 months without hiring a single writer. Traffikora is our agency’s unfair advantage. Clients love the results and we love the margins.”</p>
            <p style={{ fontSize: '13px', color: '#E8610A', fontWeight: 700, letterSpacing: '.08em' }}>Rachel S., Agency Owner — New York, NY</p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#0d0d0d', padding: '80px 40px', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px', textAlign: 'center' }}>Frequently Asked Questions</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: '#fff', marginBottom: '48px', textAlign: 'center', lineHeight: 1.15 }}>Everything you need to know</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Can marketing agencies white label Traffikora for clients?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Yes. Traffikora’s Agency plan includes white label capabilities so agencies deliver Traffikora-powered content under their own brand.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>How many clients can an agency manage with Traffikora?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>The Agency plan supports up to 10 client accounts. The Enterprise plan supports unlimited clients with custom AI training for each.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>What content does Traffikora produce for agency clients?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora produces daily SEO blog posts, social media captions across 9 platforms, AI engine optimization content, and performance reports — tailored to each client’s industry and keywords.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>How does Traffikora help agencies scale without adding headcount?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>By automating content production for every client account, Traffikora eliminates the manual writing bottleneck. One account manager can handle 10x more clients when AI handles content generation.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>What is the ROI for agencies using Traffikora?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Agencies typically charge clients $500 to $2,000 per month for AI content services while paying $297/month for the Agency plan — a significant margin on recurring revenue.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>What is the best white label AI content platform for marketing agencies?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora is purpose-built for agency scale with multi-client management, white label reporting, per-client AI training, and bulk content automation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#fff', padding: '80px 40px', textAlign: 'center', borderTop: '2.5px solid #111' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#111', marginBottom: '16px', lineHeight: 1.1 }}>Ready to put your marketing on <em style={{ color: '#E8610A', fontStyle: 'italic' }}>autopilot?</em></h2>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '32px', lineHeight: 1.8, fontWeight: 300 }}>Join hundreds of marketing agencies who let Traffikora handle their marketing while they focus on what they do best.</p>
            <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 20px rgba(232,97,10,0.35)' }}>Scale your agency with Traffikora →</button>
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
