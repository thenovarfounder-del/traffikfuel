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
        .hero { padding: 80px 40px; max-width: 1060px; margin: 0 auto; }
        .hero-label { font-size: 12px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #E8610A; margin-bottom: 20px; }
        .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(42px, 6vw, 72px); font-weight: 900; line-height: 1.05; color: #111; max-width: 700px; }
        .hero h1 em { font-style: italic; color: #E8610A; }
        .hero p { margin-top: 28px; font-size: 18px; line-height: 1.7; color: #444; max-width: 600px; }
        .section { max-width: 1060px; margin: 0 auto; padding: 80px 40px; border-top: 2.5px solid #111; }
        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #E8610A; margin-bottom: 16px; }
        .section h2 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 44px); font-weight: 900; color: #111; margin-bottom: 24px; }
        .section p { font-size: 17px; line-height: 1.8; color: #444; max-width: 680px; }
        .origin-block { margin-top: 48px; display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 2.5px solid #111; }
        .origin-card { padding: 40px; border-right: 2.5px solid #111; }
        .origin-card:last-child { border-right: none; }
        .origin-year { font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 900; color: #E8610A; line-height: 1; margin-bottom: 16px; }
        .origin-card h3 { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; margin-bottom: 12px; }
        .origin-card p { font-size: 15px; line-height: 1.75; color: #555; }
        .pull-quote { margin-top: 48px; border-left: 6px solid #E8610A; padding: 32px 40px; background: #fafafa; }
        .pull-quote p { font-family: 'Playfair Display', serif; font-size: 22px; font-style: italic; line-height: 1.6; color: #111; }
        .team-grid { margin-top: 48px; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0; border: 2.5px solid #111; }
        .team-card { padding: 36px; border-right: 2.5px solid #111; }
        .team-card:last-child { border-right: none; }
        .team-icon { font-size: 36px; margin-bottom: 16px; }
        .team-card h3 { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; margin-bottom: 10px; }
        .team-card p { font-size: 15px; line-height: 1.75; color: #555; }
        .why-block { margin-top: 48px; border: 2.5px solid #111; }
        .why-row { display: grid; grid-template-columns: 200px 1fr; border-bottom: 2.5px solid #111; }
        .why-row:last-child { border-bottom: none; }
        .why-stat { padding: 40px; background: #111; display: flex; align-items: center; justify-content: center; border-right: 2.5px solid #111; }
        .why-stat span { font-family: 'Playfair Display', serif; font-size: 42px; font-weight: 900; color: #E8610A; text-align: center; line-height: 1.1; }
        .why-content { padding: 40px; }
        .why-content h3 { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; margin-bottom: 10px; }
        .why-content p { font-size: 15px; line-height: 1.75; color: #555; }
        .manifesto { margin-top: 48px; background: #111; padding: 60px; }
        .manifesto p { font-family: 'Playfair Display', serif; font-size: clamp(20px, 3vw, 28px); font-style: italic; line-height: 1.6; color: #fff; }
        .manifesto p em { color: #E8610A; font-style: normal; }
        .cta-band { background: #E8610A; padding: 80px 40px; text-align: center; border-top: 2.5px solid #111; }
        .cta-band h2 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 48px); font-weight: 900; color: #fff; margin-bottom: 8px; }
        .cta-band p { font-size: 18px; color: #fff; opacity: 0.85; margin-bottom: 32px; }
        .cta-band a { display: inline-block; padding: 16px 40px; background: #fff; color: #111; font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; text-decoration: none; border: 2.5px solid #fff; }
        .cta-band a:hover { background: #111; color: #fff; border-color: #111; }
        .footer { background: #111; border-top: 2.5px solid #333; padding: 18px 40px; display: flex; justify-content: space-between; align-items: center; }
        .footer-copy { font-size: 13px; color: #aaa; }
        .footer-links { display: flex; gap: 24px; list-style: none; }
        .footer-links a { font-size: 13px; color: #aaa; text-decoration: none; }
        .footer-links a:hover { color: #E8610A; }
        @media (max-width: 768px) {
          .nav { padding: 16px 20px; }
          .nav-links { display: none; }
          .hero { padding: 60px 20px; }
          .section { padding: 60px 20px; }
          .origin-block { grid-template-columns: 1fr; }
          .origin-card { border-right: none; border-bottom: 2.5px solid #111; }
          .origin-card:last-child { border-bottom: none; }
          .team-grid { grid-template-columns: 1fr; }
          .team-card { border-right: none; border-bottom: 2.5px solid #111; }
          .team-card:last-child { border-bottom: none; }
          .why-row { grid-template-columns: 1fr; }
          .why-stat { border-right: none; border-bottom: 2.5px solid #333; }
          .manifesto { padding: 40px 24px; }
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

      <div style={{borderBottom: '2.5px solid #111'}}>
        <div className="hero">
          <div className="hero-label">About Traffikora</div>
          <h1>We didn't build another marketing tool. We built an <em>unfair advantage.</em></h1>
          <p>While every other platform was fighting over Google clicks, we were watching the future arrive. AI search changed everything. We built Traffikora to make sure your business wins in both worlds.</p>
        </div>
      </div>

      {/* THE ORIGIN STORY */}
      <div className="section">
        <div className="section-label">The Origin Story</div>
        <h2>It started with a question nobody was asking.</h2>
        <p>Why do great businesses fail to grow — not because of their product, but because of their visibility? We watched it happen over and over. The answer became Traffikora.</p>
        <div className="origin-block">
          <div className="origin-card">
            <div className="origin-year">The Problem</div>
            <h3>Small businesses were being left behind.</h3>
            <p>Big brands could afford agencies, SEO teams, content writers, and social media managers. Everyone else had to choose between running their business and marketing it. That's an impossible choice — and it was killing good companies.</p>
          </div>
          <div className="origin-card">
            <div className="origin-year">The Shift</div>
            <h3>Then AI search arrived and changed everything.</h3>
            <p>Overnight, customers stopped Googling and started asking Claude, ChatGPT, and Gemini. Businesses that weren't optimized for AI engines became invisible. The playing field didn't level — it tilted further. We built Traffikora to tilt it back.</p>
          </div>
        </div>
        <div className="pull-quote">
          <p>"The businesses that survive the next decade won't be the ones with the biggest budgets. They'll be the ones that showed up everywhere, consistently, automatically — while their competitors were still doing it by hand."</p>
        </div>
      </div>

      {/* THE TEAM */}
      <div className="section">
        <div className="section-label">The Team</div>
        <h2>Small team. Singular obsession. Zero compromise.</h2>
        <p>We're not a bloated agency with 200 employees billing you for meetings. We're a tight, focused team that builds, ships, and improves — fast. Every person here has one job: make Traffikora the most powerful growth engine a small business has ever had access to.</p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-icon">🔧</div>
            <h3>The Builders</h3>
            <p>Our engineers live inside the same AI platforms your customers use. They don't just watch the landscape — they wire Traffikora directly into it. When Claude or ChatGPT updates how they surface businesses, we're already adapted before you notice a thing.</p>
          </div>
          <div className="team-card">
            <div className="team-icon">✍️</div>
            <h3>The Strategists</h3>
            <p>Content without strategy is just noise. Our team has spent years studying what actually converts — what makes someone stop scrolling, click, and call. Every piece of content Traffikora produces is built on that foundation, not templates.</p>
          </div>
          <div className="team-card">
            <div className="team-icon">📈</div>
            <h3>The Growth Obsessives</h3>
            <p>We don't celebrate impressions. We celebrate new customers, booked appointments, and phones ringing. Every feature we ship is pressure-tested against one question: does this actually grow the business? If the answer isn't clearly yes, it doesn't ship.</p>
          </div>
        </div>
      </div>

      {/* THE WHY */}
      <div className="section">
        <div className="section-label">The Why</div>
        <h2>We could have built for enterprise. We chose you instead.</h2>
        <p>Enterprise contracts are bigger. The sales cycle is longer, but the money is reliable. We chose the harder path — small and mid-size businesses — because that's where the impact is real and the stakes are personal.</p>
        <div className="why-block">
          <div className="why-row">
            <div className="why-stat"><span>60%</span></div>
            <div className="why-content">
              <h3>Of small businesses fail within their first five years.</h3>
              <p>Poor visibility is one of the leading causes. Not a bad product. Not a bad team. Just nobody finding them. Traffikora exists specifically to eliminate that excuse — forever.</p>
            </div>
          </div>
          <div className="why-row">
            <div className="why-stat"><span>6+</span></div>
            <div className="why-content">
              <h3>AI search engines your customers are using right now.</h3>
              <p>Claude, ChatGPT, Gemini, Copilot, Perplexity, and more. Every one of them surfaces different businesses for the same search. Traffikora makes sure yours shows up on all of them — not just the one your old agency knows about.</p>
            </div>
          </div>
          <div className="why-row">
            <div className="why-stat"><span>∞</span></div>
            <div className="why-content">
              <h3>The ROI of marketing that never stops.</h3>
              <p>Every other marketing spend stops working the moment you stop paying. A billboard goes dark. An ad campaign ends. Traffikora builds compounding visibility — content, SEO, and AI optimization that grows stronger every single month you're on the platform.</p>
            </div>
          </div>
        </div>
        <div className="manifesto">
          <p>
            "We believe <em>every business</em> deserves to be found. Not just the ones with a $50,000 marketing budget. Not just the ones in major cities. Not just the ones who got lucky with a viral post. <em>Every business.</em> The plumber who does exceptional work. The restaurant that's been in the family for three generations. The coach who changes lives one client at a time. They all deserve to be found — automatically, consistently, and on every platform their customers are searching. <em>That's why Traffikora exists.</em>"
          </p>
        </div>
      </div>

      <div className="cta-band">
        <h2>Your business deserves to be found.</h2>
        <p>Join thousands of businesses growing on autopilot.</p>
        <a href="/signup">Start Your Free 7-Day Trial</a>
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