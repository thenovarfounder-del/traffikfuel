// @ts-nocheck
'use client'

export default function AboutPage() {
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
        .hero { border-bottom: 2.5px solid #111; padding: 80px 40px; max-width: 1060px; margin: 0 auto; }
        .hero-label { font-size: 12px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #E8610A; margin-bottom: 20px; }
        .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(42px, 6vw, 72px); font-weight: 900; line-height: 1.05; color: #111; max-width: 700px; }
        .hero h1 em { font-style: italic; color: #E8610A; }
        .hero p { margin-top: 28px; font-size: 18px; line-height: 1.7; color: #444; max-width: 600px; }
        .section { max-width: 1060px; margin: 0 auto; padding: 80px 40px; border-bottom: 2.5px solid #111; }
        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #E8610A; margin-bottom: 16px; }
        .section h2 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 44px); font-weight: 900; color: #111; margin-bottom: 24px; }
        .section p { font-size: 17px; line-height: 1.8; color: #444; max-width: 680px; }
        .mission-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 2.5px solid #111; margin-top: 48px; }
        .mission-card { padding: 40px; border-right: 2.5px solid #111; }
        .mission-card:last-child { border-right: none; }
        .mission-card-num { font-family: 'Playfair Display', serif; font-size: 48px; font-weight: 900; color: #E8610A; line-height: 1; margin-bottom: 16px; }
        .mission-card h3 { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; margin-bottom: 12px; }
        .mission-card p { font-size: 15px; line-height: 1.7; color: #555; }
        .values-list { margin-top: 48px; display: flex; flex-direction: column; gap: 0; border: 2.5px solid #111; }
        .value-row { display: flex; align-items: flex-start; gap: 32px; padding: 32px 40px; border-bottom: 2.5px solid #111; }
        .value-row:last-child { border-bottom: none; }
        .value-icon { font-size: 28px; flex-shrink: 0; margin-top: 2px; }
        .value-row h3 { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; margin-bottom: 6px; }
        .value-row p { font-size: 15px; line-height: 1.7; color: #555; }
        .founder-block { margin-top: 48px; border: 2.5px solid #111; padding: 48px; display: flex; gap: 40px; align-items: flex-start; }
        .founder-avatar { width: 100px; height: 100px; border-radius: 50%; background: #111; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 900; color: #E8610A; }
        .founder-name { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 900; margin-bottom: 4px; }
        .founder-title { font-size: 13px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #E8610A; margin-bottom: 20px; }
        .founder-quote { font-size: 17px; line-height: 1.8; color: #444; font-style: italic; }
        .cta-band { background: #111; padding: 80px 40px; text-align: center; }
        .cta-band h2 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 48px); font-weight: 900; color: #fff; margin-bottom: 24px; }
        .cta-band h2 em { color: #E8610A; font-style: italic; }
        .cta-band a { display: inline-block; padding: 16px 40px; background: #E8610A; color: #fff; font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; text-decoration: none; border: 2.5px solid #E8610A; }
        .cta-band a:hover { background: #fff; color: #111; border-color: #fff; }
        .footer { background: #111; border-top: 2.5px solid #333; padding: 18px 40px; display: flex; justify-content: space-between; align-items: center; }
        .footer-copy { font-size: 13px; color: #aaa; }
        .footer-links { display: flex; gap: 24px; list-style: none; }
        .footer-links a { font-size: 13px; color: #aaa; text-decoration: none; }
        .footer-links a:hover { color: #E8610A; }
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

      <div style={{borderBottom: '2.5px solid #111'}}>
        <div className="hero">
          <div className="hero-label">Our Story</div>
          <h1>Built for the businesses <em>Google forgot.</em></h1>
          <p>Traffikora was born from a simple frustration: small businesses deserve the same marketing power as Fortune 500 companies — without the agency fees, the complexity, or the full-time employee.</p>
        </div>
      </div>

      <div className="section">
        <div className="section-label">The Mission</div>
        <h2>Marketing that works while you sleep.</h2>
        <p>We built Traffikora to be the world's first truly automated marketing machine — one that doesn't just optimize for Google, but for every AI engine your customers are using right now.</p>
        <div className="mission-grid">
          <div className="mission-card">
            <div className="mission-card-num">01</div>
            <h3>One Setup. Forever Running.</h3>
            <p>Connect your accounts once. Traffikora handles content creation, posting, SEO, and AI optimization on autopilot — every single day.</p>
          </div>
          <div className="mission-card">
            <div className="mission-card-num">02</div>
            <h3>Every Engine. Not Just Google.</h3>
            <p>Your customers are searching on Claude, ChatGPT, Gemini, Perplexity, and Copilot. We make sure they find you on all of them.</p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">What We Stand For</div>
        <h2>Our values are decisions, not a slide deck.</h2>
        <div className="values-list">
          <div className="value-row">
            <div className="value-icon">⚡</div>
            <div>
              <h3>Automation Over Effort</h3>
              <p>If a human has to do it every week, we haven't done our job. Every workflow we build is designed to run without you.</p>
            </div>
          </div>
          <div className="value-row">
            <div className="value-icon">🎯</div>
            <div>
              <h3>Results Over Reports</h3>
              <p>We don't sell dashboards. We sell growth. Every feature we ship has one question: does this get the client more customers?</p>
            </div>
          </div>
          <div className="value-row">
            <div className="value-icon">🔓</div>
            <div>
              <h3>Radical Transparency</h3>
              <p>No black boxes. You'll always know exactly what Traffikora is doing, why, and what it produced. Your data is yours.</p>
            </div>
          </div>
          <div className="value-row">
            <div className="value-icon">🌐</div>
            <div>
              <h3>Built for the AI Era</h3>
              <p>Search is changing faster than any agency can keep up with. We built Traffikora from day one to be native to the AI search landscape.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-label">The Founder</div>
        <h2>A builder who got tired of watching small businesses lose.</h2>
        <div className="founder-block">
          <div className="founder-avatar">R</div>
          <div>
            <div className="founder-name">Randy</div>
            <div className="founder-title">Founder & CEO, Traffikora</div>
            <p className="founder-quote">"I watched too many great businesses close their doors not because they had a bad product — but because nobody could find them. Traffikora is my answer to that. Every business deserves to be found."</p>
          </div>
        </div>
      </div>

      <div className="cta-band">
        <h2>Ready to put your marketing <em>on autopilot?</em></h2>
        <a href="/signup">Start Your Free Trial</a>
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