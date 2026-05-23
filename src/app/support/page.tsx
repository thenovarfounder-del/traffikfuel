// @ts-nocheck
// @ts-nocheck
'use client'

import { useState } from 'react'

export default function SupportPage() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  const faqs = [
    {
      q: "How do I connect my Google Business Profile?",
      a: "From your Traffikora dashboard, go to Connections and click Google Business Profile. You will be prompted to sign in with your Google account and authorize access. The entire process takes under 2 minutes."
    },
    {
      q: "How long before I see results?",
      a: "Most clients begin seeing measurable visibility improvements within 30 days. AI engine presence typically builds within 60-90 days. SEO results compound over time — the longer you are on Traffikora, the stronger your visibility becomes."
    },
    {
      q: "Can I approve content before it gets published?",
      a: "Yes. You can set your account to require approval before any content goes live, or you can let Traffikora publish automatically on your schedule. Both options are available in your dashboard settings."
    },
    {
      q: "What social media platforms does Traffikora post to?",
      a: "Traffikora supports Facebook, Instagram, TikTok, YouTube, LinkedIn, X (Twitter), and Pinterest. You can connect any combination of these platforms from your dashboard."
    },
    {
      q: "How do I cancel my subscription?",
      a: "You can cancel anytime from your account dashboard under Billing, or by emailing support@traffikora.com. Your access continues until the end of your current billing period. No cancellation fees, ever."
    },
    {
      q: "What happens to my content if I cancel?",
      a: "All content published to your connected platforms stays live — it belongs to you. Your Traffikora account data is retained for 90 days after cancellation, after which it is permanently deleted. You can export your data at any time."
    },
    {
      q: "Does Traffikora work for any type of business?",
      a: "Traffikora is built for local and regional small to mid-size businesses across all industries — restaurants, healthcare, home services, retail, professional services, fitness, beauty, legal, and more. If customers search for your type of business online, Traffikora can grow your visibility."
    },
    {
      q: "How does Traffikora get my business into AI search engines?",
      a: "AI engines like Claude, ChatGPT, and Gemini surface businesses based on content authority, structured data, online reputation, and consistency of information across the web. Traffikora builds and continuously maintains all of these signals to make your business the recommended result in your category and location."
    },
    {
      q: "Is my business data safe?",
      a: "Yes. Traffikora uses industry-standard encryption, secure database storage via Supabase, and strict access controls. We never sell your data. See our Privacy Policy for full details."
    },
    {
      q: "Can I upgrade or downgrade my plan?",
      a: "Yes, you can change your plan at any time from your dashboard under Billing. Upgrades take effect immediately. Downgrades take effect at your next billing cycle."
    }
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; color: #111; }
        .nav { display: flex; justify-content: space-between; align-items: center; padding: 18px 40px; border-bottom: 2.5px solid #111; position: sticky; top: 0; background: #fff; z-index: 100; }
        .nav-logo { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 900; color: #111; text-decoration: none; }
        .nav-logo span { color: #E8610A; }
        .nav-links { display: flex; gap: 32px; align-items: center; list-style: none; }
        .nav-links a { font-size: 14px; font-weight: 500; color: #111; text-decoration: none; }
        .nav-links a:hover { color: #E8610A; }
        .nav-btn { padding: 10px 22px; border: 2.5px solid #111; background: #111; color: #fff; font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; text-decoration: none; }
        .nav-btn:hover { background: #E8610A; border-color: #E8610A; }
        .hero { padding: 80px 40px; max-width: 1060px; margin: 0 auto; border-bottom: 2.5px solid #111; }
        .hero-label { font-size: 12px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #E8610A; margin-bottom: 20px; }
        .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(42px, 6vw, 68px); font-weight: 900; line-height: 1.05; color: #111; max-width: 700px; }
        .hero h1 em { font-style: italic; color: #E8610A; }
        .hero p { margin-top: 24px; font-size: 18px; line-height: 1.7; color: #444; max-width: 560px; }
        .channels { max-width: 1060px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 2.5px solid #111; }
        .channel { padding: 48px 40px; border-right: 2.5px solid #111; }
        .channel:last-child { border-right: none; }
        .channel-icon { font-size: 36px; margin-bottom: 20px; }
        .channel-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #E8610A; margin-bottom: 10px; }
        .channel h3 { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 900; margin-bottom: 12px; }
        .channel p { font-size: 15px; line-height: 1.75; color: #555; margin-bottom: 20px; }
        .channel a { display: inline-block; padding: 12px 24px; background: #111; color: #fff; font-size: 14px; font-weight: 600; text-decoration: none; border: 2px solid #111; }
        .channel a:hover { background: #E8610A; border-color: #E8610A; }
        .channel-badge { display: inline-block; padding: 6px 14px; background: #f0f0f0; color: #555; font-size: 12px; font-weight: 600; }
        .faq-section { max-width: 1060px; margin: 0 auto; padding: 80px 40px; border-bottom: 2.5px solid #111; }
        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #E8610A; margin-bottom: 16px; }
        .faq-section h2 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 44px); font-weight: 900; color: #111; margin-bottom: 48px; }
        .faq-item { border: 2.5px solid #111; margin-bottom: -2.5px; cursor: pointer; }
        .faq-q { padding: 24px 32px; font-size: 17px; font-weight: 600; color: #111; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
        .faq-q span { font-size: 20px; color: #E8610A; flex-shrink: 0; }
        .faq-a { padding: 0 32px 24px; font-size: 15px; line-height: 1.8; color: #555; }
        .status-section { max-width: 1060px; margin: 0 auto; padding: 80px 40px; border-bottom: 2.5px solid #111; }
        .status-section h2 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 44px); font-weight: 900; color: #111; margin-bottom: 48px; }
        .status-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border: 2.5px solid #111; }
        .status-card { padding: 32px; border-right: 2.5px solid #111; }
        .status-card:last-child { border-right: none; }
        .status-dot { width: 12px; height: 12px; border-radius: 50%; background: #22c55e; display: inline-block; margin-right: 8px; }
        .status-card h3 { font-size: 16px; font-weight: 700; margin-bottom: 6px; display: flex; align-items: center; }
        .status-card p { font-size: 13px; color: #888; }
        .cta-band { background: #111; padding: 80px 40px; text-align: center; }
        .cta-band h2 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 44px); font-weight: 900; color: #fff; margin-bottom: 8px; }
        .cta-band h2 em { color: #E8610A; font-style: italic; }
        .cta-band p { font-size: 17px; color: #aaa; margin-bottom: 32px; }
        .cta-band a { display: inline-block; padding: 16px 40px; background: #E8610A; color: #fff; font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; text-decoration: none; border: 2.5px solid #E8610A; }
        .cta-band a:hover { background: #fff; color: #111; border-color: #fff; }
        .footer { background: #111; border-top: 2.5px solid #333; padding: 18px 40px; display: flex; justify-content: space-between; align-items: center; }
        .footer-copy { font-size: 13px; color: #aaa; }
        .footer-links { display: flex; gap: 24px; list-style: none; }
        .footer-links a { font-size: 13px; color: #aaa; text-decoration: none; }
        .footer-links a:hover { color: #E8610A; }
        @media (max-width: 768px) {
          .nav { padding: 16px 20px; }
          .nav-links { display: none; }
          .hero { padding: 60px 20px; }
          .channels { grid-template-columns: 1fr; }
          .channel { border-right: none; border-bottom: 2.5px solid #111; }
          .channel:last-child { border-bottom: none; }
          .faq-section { padding: 60px 20px; }
          .status-section { padding: 60px 20px; }
          .status-grid { grid-template-columns: 1fr; }
          .status-card { border-right: none; border-bottom: 2.5px solid #111; }
          .status-card:last-child { border-bottom: none; }
          .faq-q { padding: 20px 20px; font-size: 15px; }
          .faq-a { padding: 0 20px 20px; }
          .footer { flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>

      <nav className="nav">
        <a href="/" className="nav-logo">Traffik<span>ora</span></a>
        <ul className="nav-links">
          <li><a href="/#features">Features</a></li>
          <li><a href="/#how">How It Works</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/login" className="nav-btn">Login</a></li>
        </ul>
      </nav>

      <div className="hero">
        <div className="hero-label">Support</div>
        <h1>We are here. <em>Ask us anything.</em></h1>
        <p>Real support from real people. Browse the most common questions below or reach out directly — we respond fast and we actually help.</p>
      </div>

      <div className="channels">
        <div className="channel">
          <div className="channel-icon">💬</div>
          <div className="channel-label">Fastest</div>
          <h3>Live Chat</h3>
          <p>Click the chat bubble in the bottom right corner of any page. A real support agent responds — not a bot, not a FAQ carousel.</p>
          <span className="channel-badge">⚡ Usually under 5 minutes</span>
        </div>
        <div className="channel">
          <div className="channel-icon">✉️</div>
          <div className="channel-label">Email Support</div>
          <h3>support@traffikora.com</h3>
          <p>For detailed questions, billing issues, account help, or anything that needs a thorough answer. We monitor this inbox every day.</p>
          <a href="mailto:support@traffikora.com">Send an Email →</a>
        </div>
        <div className="channel">
          <div className="channel-icon">📋</div>
          <div className="channel-label">Contact Form</div>
          <h3>Tell Us What You Need</h3>
          <p>Fill out our contact form and give us full context. We will respond with a complete, personalized answer within 24 hours.</p>
          <a href="/contact">Open Contact Form →</a>
        </div>
      </div>

      <div className="faq-section">
        <div className="section-label">FAQ</div>
        <h2>Questions we get asked every day.</h2>
        {faqs.map((faq, i) => (
          <div className="faq-item" key={i} onClick={() => toggle(i)}>
            <div className="faq-q">
              {faq.q}
              <span>{open === i ? '−' : '+'}</span>
            </div>
            {open === i && <div className="faq-a">{faq.a}</div>}
          </div>
        ))}
      </div>

      <div className="status-section">
        <div className="section-label">Platform Status</div>
        <h2>Everything is running smoothly.</h2>
        <div className="status-grid">
          <div className="status-card">
            <h3><span className="status-dot"></span>Core Platform</h3>
            <p>All systems operational</p>
          </div>
          <div className="status-card">
            <h3><span className="status-dot"></span>Content Publishing</h3>
            <p>All systems operational</p>
          </div>
          <div className="status-card">
            <h3><span className="status-dot"></span>Social Integrations</h3>
            <p>All systems operational</p>
          </div>
          <div className="status-card">
            <h3><span className="status-dot"></span>AI Optimization</h3>
            <p>All systems operational</p>
          </div>
          <div className="status-card">
            <h3><span className="status-dot"></span>Billing & Payments</h3>
            <p>All systems operational</p>
          </div>
          <div className="status-card">
            <h3><span className="status-dot"></span>Analytics Dashboard</h3>
            <p>All systems operational</p>
          </div>
        </div>
      </div>

      <div className="cta-band">
        <h2>Still have a question? <em>We have an answer.</em></h2>
        <p>Our support team is standing by. No ticket queues. No bots. Just help.</p>
        <a href="mailto:support@traffikora.com">Email Us Now →</a>
      </div>

      <footer className="footer">
        <span className="footer-copy">© 2026 Traffikora.com</span>
        <ul className="footer-links">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </footer>
    </>
  )
}