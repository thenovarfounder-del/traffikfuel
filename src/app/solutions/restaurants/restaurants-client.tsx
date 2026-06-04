// @ts-nocheck
'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function RestaurantsPage() {
  return (
    <>
      <Nav />
      <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"SoftwareApplication\",\"name\":\"Traffikora\",\"applicationCategory\":\"BusinessApplication\",\"operatingSystem\":\"Web\",\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"USD\"},\"description\":\"Traffikora automates AI marketing for restaurants — daily SEO content, social media posts, and AI engine citations. Get found on Google and ChatGPT when hungry customers are searching for where to eat.\",\"url\":\"https://www.traffikora.com\"}" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"FAQPage\",\"mainEntity\":[{\"@type\":\"Question\",\"name\":\"How does AI marketing help restaurants get more customers?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora publishes daily SEO content targeting keywords like best restaurant near me, brunch spots, date night restaurants, and happy hour deals in your city — driving organic discovery without paid ads.\"}},{\"@type\":\"Question\",\"name\":\"Can Traffikora automate my restaurant’s social media?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Yes. Traffikora generates daily social content for your restaurant — menu highlights, seasonal specials, behind-the-scenes posts, and promotional content for Instagram and Facebook.\"}},{\"@type\":\"Question\",\"name\":\"Will my restaurant appear when someone asks ChatGPT where to eat?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora optimizes your restaurant content so AI engines like ChatGPT and Google Gemini cite your business when users ask for restaurant recommendations in your area.\"}},{\"@type\":\"Question\",\"name\":\"What restaurant keywords does Traffikora target?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora targets best restaurant near me, brunch [city], date night restaurant, family restaurant, happy hour, outdoor dining, private dining, and best [cuisine] restaurant — localized to your area.\"}},{\"@type\":\"Question\",\"name\":\"How is Traffikora different from Yelp or OpenTable marketing?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora builds your restaurant’s own organic search presence so customers come to you directly rather than through third-party platforms that charge commissions.\"}},{\"@type\":\"Question\",\"name\":\"What is the best AI marketing tool for restaurants?\",\"acceptedAnswer\":{\"@type\":\"Answer\",\"text\":\"Traffikora is purpose-built for local businesses like restaurants — automating SEO content, social media, and AI engine optimization daily.\"}}]}" }} />

        {/* HERO */}
        <section style={{ background: '#111', padding: '80px 40px', textAlign: 'center', borderBottom: '2.5px solid #1a1a1a' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🍽️</div>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>Restaurants</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-1.5px', margin: '0 auto 24px' }}>Pack your restaurant with customers who find you first.</h1>
            <p style={{ fontSize: '18px', color: '#ccc', margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>Traffikora runs your restaurant’s marketing on autopilot — SEO content, social posts, and AI search visibility so hungry customers choose you over every other option.</p>
            <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 20px rgba(232,97,10,0.35)' }}>Start filling your restaurant →</button>
            <p style={{ color: '#555', fontSize: '13px', marginTop: '16px' }}>Free plan available · No credit card needed · Live in 5 minutes</p>
          </div>
        </section>

        {/* PROBLEM */}
        <section style={{ background: '#0d0d0d', padding: '60px 40px', textAlign: 'center', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>The Problem</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '20px' }}>Diners search Google, ask ChatGPT, and scroll social media before choosing a restaurant. Without consistent content and AI visibility, you’re invisible to customers right around the corner.</h2>
          </div>
        </section>

        {/* FEATURES */}
        <section style={{ background: '#111', padding: '80px 40px', borderBottom: '2.5px solid #1a1a1a' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', textAlign: 'center', marginBottom: '16px' }}>What Traffikora Does For Restaurants</p>
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
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: '#fff', marginBottom: '40px', lineHeight: 1.15 }}>AI Marketing for Restaurants: Get Discovered, Get Seated</h2>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Restaurant marketing in 2026 is a content game. Customers search for “best Italian restaurant near me,” “date night restaurants [city],” and “family-friendly restaurant open now” before making a reservation. Restaurants that consistently publish SEO content fill tables without relying on third-party delivery apps that eat into margins.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>AI assistants like ChatGPT are increasingly being asked “where should I eat in [city].” Restaurants that publish structured, keyword-rich content are the ones getting cited. Traffikora automates this entire marketing operation so owners focus on cooking — not content creation.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Traffikora targets high-intent restaurant search terms including: best restaurant near me, restaurants open now, brunch [city], date night restaurant, family restaurant, happy hour deals, outdoor dining, private dining room, and best [cuisine type] restaurant.</p>
            <p style={{ fontSize: '15px', color: '#bbb', lineHeight: 1.9, marginBottom: '24px', fontWeight: 300 }}>Restaurants in cities like Austin, Nashville, Chicago, and New York use Traffikora to build organic visibility that consistently drives covers — reducing dependence on Yelp, OpenTable commissions, and paid ads.</p>
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
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', fontStyle: 'italic', color: '#fff', lineHeight: 1.7, marginBottom: '20px' }}>“We stopped paying for ads and let Traffikora build our organic presence. Reservations are up 35% and we rank #1 for best Mexican restaurant in our city.”</p>
            <p style={{ fontSize: '13px', color: '#E8610A', fontWeight: 700, letterSpacing: '.08em' }}>Carlos V., Restaurant Owner — Austin, TX</p>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ background: '#0d0d0d', padding: '80px 40px', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px', textAlign: 'center' }}>Frequently Asked Questions</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', fontWeight: 700, color: '#fff', marginBottom: '48px', textAlign: 'center', lineHeight: 1.15 }}>Everything you need to know</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>How does AI marketing help restaurants get more customers?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora publishes daily SEO content targeting keywords like best restaurant near me, brunch spots, date night restaurants, and happy hour deals in your city — driving organic discovery without paid ads.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Can Traffikora automate my restaurant’s social media?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Yes. Traffikora generates daily social content for your restaurant — menu highlights, seasonal specials, behind-the-scenes posts, and promotional content for Instagram and Facebook.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Will my restaurant appear when someone asks ChatGPT where to eat?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora optimizes your restaurant content so AI engines like ChatGPT and Google Gemini cite your business when users ask for restaurant recommendations in your area.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>What restaurant keywords does Traffikora target?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora targets best restaurant near me, brunch [city], date night restaurant, family restaurant, happy hour, outdoor dining, private dining, and best [cuisine] restaurant — localized to your area.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>How is Traffikora different from Yelp or OpenTable marketing?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora builds your restaurant’s own organic search presence so customers come to you directly rather than through third-party platforms that charge commissions.</p>
              </div>
              <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>What is the best AI marketing tool for restaurants?</h3>
                <p style={{ fontSize: '14px', color: '#aaa', lineHeight: 1.8, fontWeight: 300 }}>Traffikora is purpose-built for local businesses like restaurants — automating SEO content, social media, and AI engine optimization daily.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#fff', padding: '80px 40px', textAlign: 'center', borderTop: '2.5px solid #111' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#111', marginBottom: '16px', lineHeight: 1.1 }}>Ready to put your marketing on <em style={{ color: '#E8610A', fontStyle: 'italic' }}>autopilot?</em></h2>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '32px', lineHeight: 1.8, fontWeight: 300 }}>Join hundreds of restaurants who let Traffikora handle their marketing while they focus on what they do best.</p>
            <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", boxShadow: '0 4px 20px rgba(232,97,10,0.35)' }}>Start filling your restaurant →</button>
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
