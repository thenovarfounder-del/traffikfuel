// @ts-nocheck
'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })

  const handleSubmit = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
  }

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
        .contact-layout { max-width: 1060px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; border-bottom: 2.5px solid #111; }
        .contact-form { padding: 60px 40px; border-right: 2.5px solid #111; }
        .contact-form h2 { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 900; margin-bottom: 32px; }
        .field { margin-bottom: 24px; }
        .field label { display: block; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #111; margin-bottom: 8px; }
        .field input, .field textarea { width: 100%; padding: 14px 16px; border: 2.5px solid #111; font-family: 'DM Sans', sans-serif; font-size: 15px; color: #111; background: #fff; outline: none; resize: none; }
        .field input:focus, .field textarea:focus { border-color: #E8610A; }
        .submit-btn { width: 100%; padding: 16px; background: #111; color: #fff; border: 2.5px solid #111; font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; cursor: pointer; }
        .submit-btn:hover { background: #E8610A; border-color: #E8610A; }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .success-box { padding: 40px; background: #f9f9f9; border: 2.5px solid #111; text-align: center; }
        .success-box h3 { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 900; margin-bottom: 12px; }
        .success-box p { font-size: 16px; color: #555; line-height: 1.7; }
        .contact-info { padding: 60px 40px; }
        .contact-info h2 { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 900; margin-bottom: 8px; }
        .contact-info > p { font-size: 16px; color: #555; line-height: 1.7; margin-bottom: 40px; }
        .info-block { margin-bottom: 32px; padding-bottom: 32px; border-bottom: 2px solid #eee; }
        .info-block:last-child { border-bottom: none; margin-bottom: 0; }
        .info-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #E8610A; margin-bottom: 8px; }
        .info-block h3 { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; margin-bottom: 6px; }
        .info-block p { font-size: 15px; color: #555; line-height: 1.7; }
        .info-block a { color: #E8610A; text-decoration: none; font-weight: 600; }
        .info-block a:hover { text-decoration: underline; }
        .response-badge { display: inline-block; margin-top: 8px; padding: 6px 14px; background: #111; color: #fff; font-size: 12px; font-weight: 600; letter-spacing: 1px; }
        .footer { background: #111; border-top: 2.5px solid #333; padding: 18px 40px; display: flex; justify-content: space-between; align-items: center; }
        .footer-copy { font-size: 13px; color: #aaa; }
        .footer-links { display: flex; gap: 24px; list-style: none; }
        .footer-links a { font-size: 13px; color: #aaa; text-decoration: none; }
        .footer-links a:hover { color: #E8610A; }
        @media (max-width: 768px) {
          .nav { padding: 16px 20px; }
          .nav-links { display: none; }
          .hero { padding: 60px 20px; }
          .contact-layout { grid-template-columns: 1fr; }
          .contact-form { border-right: none; border-bottom: 2.5px solid #111; padding: 40px 20px; }
          .contact-info { padding: 40px 20px; }
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
        <div className="hero-label">Contact Us</div>
        <h1>Let's talk about <em>your growth.</em></h1>
        <p>Whether you have a question, need help choosing a plan, or just want to see Traffikora in action — we're here and we respond fast.</p>
      </div>

      <div className="contact-layout">
        <div className="contact-form">
          <h2>Send us a message</h2>
          {submitted ? (
            <div className="success-box">
              <h3>Message received. ✓</h3>
              <p>We'll be back in your inbox within 24 hours. In the meantime, explore what Traffikora can do for your business.</p>
            </div>
          ) : (
            <>
              <div className="field">
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={e => setForm({...form, name: e.target.value})}
                />
              </div>
              <div className="field">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="jane@yourbusiness.com"
                  value={form.email}
                  onChange={e => setForm({...form, email: e.target.value})}
                />
              </div>
              <div className="field">
                <label>Business Name</label>
                <input
                  type="text"
                  placeholder="Your Business LLC"
                  value={form.business}
                  onChange={e => setForm({...form, business: e.target.value})}
                />
              </div>
              <div className="field">
                <label>How Can We Help?</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your business and what you're trying to grow..."
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                />
              </div>
              <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
                {loading ? 'Sending...' : 'Send Message →'}
              </button>
            </>
          )}
        </div>

        <div className="contact-info">
          <h2>We're real people who care.</h2>
          <p>No bots. No ticket queues that go nowhere. When you reach out to Traffikora, a real human reads it and responds.</p>

          <div className="info-block">
            <div className="info-label">Email Support</div>
            <h3>support@traffikora.com</h3>
            <p>For account questions, billing, technical issues, or anything else. We monitor this inbox daily.</p>
            <span className="response-badge">⚡ Avg. Response: Under 24 Hours</span>
          </div>

          <div className="info-block">
            <div className="info-label">Sales & Partnerships</div>
            <h3>Interested in Agency or Enterprise?</h3>
            <p>If you're managing multiple locations or want a custom plan, reach out and we'll build something that fits. No pushy sales calls — just a real conversation.</p>
            <a href="mailto:support@traffikora.com">Start the conversation →</a>
          </div>

          <div className="info-block">
            <div className="info-label">Live Chat</div>
            <h3>Chat with us right now.</h3>
            <p>See the chat bubble in the bottom right corner? That's a real support line — not a FAQ bot. Use it anytime.</p>
          </div>

          <div className="info-block">
            <div className="info-label">Our Promise</div>
            <h3>No question is too small.</h3>
            <p>You're building something real. We take that seriously. Whether you're on the Starter plan or Enterprise — you get the same level of care from us.</p>
          </div>
        </div>
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