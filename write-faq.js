const fs = require("fs");

const content = `// @ts-nocheck
'use client'

import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  {
    category: "General",
    questions: [
      { q: "What is Traffikora?", a: "Traffikora is an automated marketing platform built for small and mid-size businesses. You connect your accounts once — Google Business Profile, social media, review platforms — and Traffikora handles everything else automatically. It optimizes your visibility on Google and every major AI engine including ChatGPT, Perplexity, Gemini, Claude, and Copilot." },
      { q: "How is Traffikora different from other marketing tools?", a: "Every other platform optimizes for Google only. Traffikora optimizes for Google AND every major AI engine. In 2026, millions of people find local businesses by asking ChatGPT or Perplexity — not just Googling. Traffikora makes sure your business shows up in both places automatically." },
      { q: "Do I need any marketing experience to use Traffikora?", a: "None at all. Traffikora is built for business owners, not marketers. You connect your accounts, answer a few questions about your business, and the platform does the rest. No technical skills required." },
      { q: "What size businesses is Traffikora designed for?", a: "Traffikora is built for small and mid-size businesses — restaurants, retail stores, dental practices, law firms, gyms, home service businesses, and more. It also works for marketing agencies managing multiple clients." },
    ]
  },
  {
    category: "Features & How It Works",
    questions: [
      { q: "What does Traffikora actually do automatically?", a: "Once connected, Traffikora continuously optimizes your Google Business Profile, publishes content to your social media accounts on schedule, monitors and responds to reviews, builds your presence across AI engine databases, generates keyword-optimized content, and sends you monthly performance reports — all without you lifting a finger." },
      { q: "What is AI engine optimization and why does it matter?", a: "AI engine optimization (AEO) is the process of making your business visible when people search using AI tools like ChatGPT, Perplexity, Gemini, and Claude. When someone types 'best Italian restaurant near me' into ChatGPT, AI engine optimization determines whether your business gets recommended. Traffikora is the first platform built to optimize for both Google and AI engines simultaneously." },
      { q: "What is the difference between SEO and AI engine optimization?", a: "Traditional SEO optimizes your website to rank on Google's search results page. AI engine optimization (AEO) optimizes your business to be cited and recommended by AI tools when users ask questions. Both matter in 2026 — Traffikora handles both automatically." },
      { q: "What platforms does Traffikora connect to?", a: "Traffikora connects to Google Business Profile, Google Search Console, Google Analytics, Facebook, Instagram, TikTok, LinkedIn, Twitter/X, Yelp, TripAdvisor, and all major AI engine databases. More integrations are added regularly." },
      { q: "How long does setup take?", a: "Most businesses are fully set up in under 15 minutes. You connect your accounts, enter your business details, and Traffikora starts working immediately. There is no lengthy onboarding or configuration required." },
    ]
  },
  {
    category: "Pricing & Trial",
    questions: [
      { q: "Is there a free trial?", a: "Yes. Every plan includes a 7-day free trial with full access to all features. No credit card is required to start. You only pay if you decide to continue after the trial." },
      { q: "How much does Traffikora cost?", a: "Traffikora offers four plans: Starter at $97/month, Pro at $197/month, Agency at $797/month, and Enterprise at $1,497/month. Annual billing is available at a 20% discount. Every plan includes a 7-day free trial." },
      { q: "Can I cancel anytime?", a: "Yes. There are no contracts and no cancellation fees. You can cancel your subscription at any time from your account dashboard and you will not be charged again." },
      { q: "What happens when my free trial ends?", a: "At the end of your 7-day trial, you will receive an email asking if you want to continue. If you choose to subscribe, your selected plan will begin billing. If you do nothing, your account pauses — no charges, no surprises." },
      { q: "Do you offer refunds?", a: "Yes. If you are not satisfied within the first 30 days of a paid subscription, contact support@traffikora.com for a full refund. No questions asked." },
    ]
  },
  {
    category: "Industries & Use Cases",
    questions: [
      { q: "Does Traffikora work for restaurants?", a: "Yes. Restaurants are one of Traffikora's strongest use cases. The platform automatically manages your Google Business Profile hours, posts, and reviews, publishes social content promoting your menu and specials, and optimizes your visibility when people ask AI engines for restaurant recommendations in your city." },
      { q: "Can marketing agencies use Traffikora for clients?", a: "Yes. The Agency plan is built specifically for marketing agencies managing multiple client accounts. You get a single dashboard to manage all clients, white-label reporting, and bulk automation across all accounts." },
      { q: "Does Traffikora work for local service businesses?", a: "Absolutely. Traffikora is ideal for home service businesses, dental practices, law firms, gyms, real estate agents, and any business that relies on local customers finding them online. Local visibility is one of Traffikora's core strengths." },
    ]
  },
  {
    category: "Technical & Support",
    questions: [
      { q: "Is my data secure?", a: "Yes. Traffikora uses enterprise-grade security including encrypted data storage, secure OAuth connections to all third-party platforms, and strict data handling policies. We never sell your data to third parties. See our Privacy Policy for full details." },
      { q: "What support is available?", a: "All plans include live chat support via the Traffikora dashboard, plus email support at support@traffikora.com. Pro, Agency, and Enterprise plans include priority response times." },
      { q: "Do I need to install any software?", a: "No. Traffikora is entirely web-based. You access it from any browser on any device — no downloads, no plugins, no technical setup required." },
      { q: "What if I already have a marketing team or agency?", a: "Traffikora works alongside your existing team. Many businesses use Traffikora to handle the repetitive, time-consuming automation work so their marketing team can focus on strategy and creative. It is also significantly more cost-effective than paying agency fees for routine tasks." },
    ]
  }
]

function FAQItem({ q, a }: { q: string, a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '2px solid #eee' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}
      >
        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', fontWeight: 600, color: '#111', lineHeight: 1.4 }}>{q}</span>
        <span style={{ fontSize: '24px', color: '#E8610A', fontWeight: 700, flexShrink: 0 }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.7, paddingBottom: '20px', maxWidth: '760px' }}>{a}</p>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* NAV */}
      <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: '#fff', borderBottom: '2.5px solid #111', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', textDecoration: 'none' }}>Traffikora</Link>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link href="/features/ai-engine-optimization" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>Features</Link>
          <Link href="/pricing" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>Pricing</Link>
          <Link href="/how-it-works" style={{ color: '#111', textDecoration: 'none', fontSize: '15px' }}>How It Works</Link>
          <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '10px 22px', textDecoration: 'none', fontSize: '15px', fontWeight: 600, border: '2.5px solid #111' }}>Start Free Trial</Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '80px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Support</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '52px', fontWeight: 900, lineHeight: 1.1, marginBottom: '20px' }}>Frequently Asked Questions</h1>
        <p style={{ fontSize: '18px', color: '#ccc', maxWidth: '560px', margin: '0 auto' }}>Everything you need to know about Traffikora. Can't find your answer? Email us at support@traffikora.com.</p>
      </section>

      {/* FAQ CONTENT */}
      <section style={{ maxWidth: '860px', margin: '0 auto', padding: '80px 32px' }}>
        {faqs.map((section) => (
          <div key={section.category} style={{ marginBottom: '60px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '8px', paddingBottom: '16px', borderBottom: '2.5px solid #111' }}>{section.category}</h2>
            {section.questions.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        ))}

        {/* BOTTOM CTA */}
        <div style={{ background: '#111', padding: '48px', textAlign: 'center', marginTop: '40px' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Still have questions?</h2>
          <p style={{ color: '#ccc', fontSize: '16px', marginBottom: '32px' }}>Our team is happy to help. Or just start your free trial and see Traffikora in action.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:support@traffikora.com" style={{ background: '#fff', color: '#111', padding: '14px 32px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, border: '2.5px solid #fff' }}>Email Support</a>
            <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '14px 32px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, border: '2.5px solid #E8610A' }}>Start Free Trial</Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#111', borderTop: '2.5px solid #333', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ color: '#aaa', fontSize: '14px' }}>© 2026 Traffikora.com</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <Link href="/privacy" style={{ color: '#aaa', fontSize: '14px', textDecoration: 'none' }}>Privacy</Link>
          <Link href="/terms" style={{ color: '#aaa', fontSize: '14px', textDecoration: 'none' }}>Terms</Link>
          <Link href="/contact" style={{ color: '#aaa', fontSize: '14px', textDecoration: 'none' }}>Contact</Link>
          <Link href="/signup" style={{ color: '#E8610A', fontSize: '14px', textDecoration: 'none', fontWeight: 600 }}>Start Free Trial</Link>
        </div>
      </footer>
    </>
  )
}
`;

fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\app\\faq\\page.tsx", content, { encoding: "utf8" });
console.log("faq/page.tsx written");