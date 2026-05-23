// @ts-nocheck


// @ts-nocheck
'use client'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (e) {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <main style={{ fontFamily: 'DM Sans, sans-serif', background: '#fff', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');
        nav { position: sticky; top: 0; background: #fff; border-bottom: 2.5px solid #111; z-index: 100; padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 64px; }
        .nav-logo { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 700; color: #111; text-decoration: none; }
        .nav-links { display: flex; gap: 2rem; align-items: center; }
        .nav-links a { color: #111; text-decoration: none; font-size: 0.95rem; }
        .nav-cta { background: #E8610A; color: #fff !important; padding: 0.5rem 1.25rem; border: 2.5px solid #111; font-weight: 600; }
        .page-wrap { max-width: 1060px; margin: 0 auto; padding: 4rem 2rem; }
        .page-title { font-family: 'Playfair Display', serif; font-size: 2.8rem; font-weight: 700; color: #111; margin-bottom: 0.5rem; }
        .page-sub { color: #555; font-size: 1.1rem; margin-bottom: 3rem; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .form-section h3 { font-family: 'Playfair Display', serif; font-size: 1.5rem; margin-bottom: 1.5rem; }
        .field { margin-bottom: 1.25rem; }
        .field label { display: block; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.4rem; color: #111; }
        .field input, .field textarea { width: 100%; padding: 0.75rem 1rem; border: 2.5px solid #111; font-family: 'DM Sans', sans-serif; font-size: 1rem; background: #fff; box-sizing: border-box; }
        .field textarea { height: 140px; resize: vertical; }
        .submit-btn { background: #E8610A; color: #fff; border: 2.5px solid #111; padding: 0.85rem 2rem; font-size: 1rem; font-weight: 600; font-family: 'DM Sans', sans-serif; cursor: pointer; width: 100%; margin-top: 0.5rem; }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .success-box { border: 2.5px solid #111; padding: 2rem; text-align: center; }
        .success-box h3 { font-family: 'Playfair Display', serif; font-size: 1.6rem; margin-bottom: 0.5rem; }
        .error-msg { color: #c00; font-size: 0.9rem; margin-top: 0.5rem; }
        .info-section h2 { font-family: 'Playfair Display', serif; font-size: 1.8rem; margin-bottom: 1rem; }
        .info-block { border-top: 2px solid #eee; padding: 1.5rem 0; }
        .info-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: #E8610A; text-transform: uppercase; margin-bottom: 0.5rem; }
        .info-block h4 { font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 0.4rem; }
        .info-block p { color: #555; font-size: 0.95rem; }
        .info-block a { color: #E8610A; }
        .response-badge { display: inline-block; background: #111; color: #fff; font-size: 0.8rem; padding: 0.3rem 0.75rem; margin-top: 0.5rem; }
        footer { background: #111; color: #fff; padding: 1.25rem 2rem; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; margin-top: 4rem; }
        footer a { color: #fff; text-decoration: none; margin-left: 1.5rem; }
      `}</style>

      <nav>
        <a href="/" className="nav-logo">Traffikora</a>
        <div className="nav-links">
          <a href="/features">Features</a>
          <a href="/how-it-works">How It Works</a>
          <a href="/about">About</a>
          <a href="/signup" className="nav-cta">Get Started</a>
        </div>
      </nav>

      <div className="page-wrap">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-sub">We read every message and respond within 24 hours.</p>

        <div className="contact-grid">
          <div className="form-section">
            <h3>Send us a message</h3>
            {submitted ? (
              <div className="success-box">
                <h3>Message received. ✓</h3>
                <p>We will be back in your inbox within 24 hours. In the meantime, explore what Traffikora can do for your business.</p>
              </div>
            ) : (
              <>
                <div className="field">
                  <label>Name *</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your name" />
                </div>
                <div className="field">
                  <label>Email *</label>
                  <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" />
                </div>
                <div className="field">
                  <label>Company</label>
                  <input type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} placeholder="Your company name" />
                </div>
                <div className="field">
                  <label>Subject</label>
                  <input type="text" value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} placeholder="What is this about?" />
                </div>
                <div className="field">
                  <label>Message *</label>
                  <textarea value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Tell us how we can help..." />
                </div>
                {error && <p className="error-msg">{error}</p>}
                <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>
              </>
            )}
          </div>

          <div className="info-section">
            <h2>We are real people who care.</h2>
            <p style={{color:'#555',marginBottom:'1.5rem'}}>No bots. No ticket queues that go nowhere. When you reach out to Traffikora, a real human reads it and responds.</p>
            <div className="info-block">
              <div className="info-label">Email Support</div>
              <h4>support@traffikora.com</h4>
              <p>For account questions, billing, technical issues, or anything else. We monitor this inbox daily.</p>
              <span className="response-badge">⚡ Avg. Response: Under 24 Hours</span>
            </div>
            <div className="info-block">
              <div className="info-label">Sales & Partnerships</div>
              <h4>Interested in Agency or Enterprise?</h4>
              <p>If you are managing multiple locations or want a custom plan, reach out and we will build something that fits. No pushy sales calls — just a real conversation.</p>
              <a href="/signup?plan=agency">Start the conversation →</a>
            </div>
            <div className="info-block">
              <div className="info-label">Live Chat</div>
              <h4>Chat with us right now.</h4>
              <p>See the chat bubble in the bottom right corner? That is a real support line — not a FAQ bot. Use it anytime.</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <span>© 2026 Traffikora.com</span>
        <div>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </main>
  )
}