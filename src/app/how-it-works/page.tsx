// @ts-nocheck
'use client'

export default function HowItWorksPage() {
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
        .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(42px, 6vw, 68px); font-weight: 900; line-height: 1.05; color: #111; max-width: 800px; }
        .hero h1 em { font-style: italic; color: #E8610A; }
        .hero p { margin-top: 24px; font-size: 18px; line-height: 1.7; color: #444; max-width: 600px; }
        .steps-section { max-width: 1060px; margin: 0 auto; padding: 80px 40px; border-bottom: 2.5px solid #111; }
        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #E8610A; margin-bottom: 16px; }
        .steps-section h2 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 44px); font-weight: 900; color: #111; margin-bottom: 48px; }
        .step { display: grid; grid-template-columns: 120px 1fr; border: 2.5px solid #111; margin-bottom: -2.5px; }
        .step-num { background: #111; display: flex; align-items: center; justify-content: center; border-right: 2.5px solid #111; }
        .step-num span { font-family: 'Playfair Display', serif; font-size: 52px; font-weight: 900; color: #E8610A; }
        .step-body { padding: 40px; }
        .step-body h3 { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 900; margin-bottom: 12px; }
        .step-body p { font-size: 16px; line-height: 1.8; color: #555; margin-bottom: 16px; }
        .step-body p:last-child { margin-bottom: 0; }
        .step-detail { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
        .step-chip { padding: 6px 14px; border: 2px solid #111; font-size: 13px; font-weight: 600; color: #111; }
        .timeline { max-width: 1060px; margin: 0 auto; padding: 80px 40px; border-bottom: 2.5px solid #111; }
        .timeline h2 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 44px); font-weight: 900; color: #111; margin-bottom: 48px; }
        .timeline-grid { display: grid; grid-template-columns: repeat(4, 1fr); border: 2.5px solid #111; }
        .tl-card { padding: 36px 28px; border-right: 2.5px solid #111; }
        .tl-card:last-child { border-right: none; }
        .tl-time { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #E8610A; margin-bottom: 12px; }
        .tl-card h3 { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; margin-bottom: 12px; }
        .tl-card p { font-size: 14px; line-height: 1.75; color: #555; }
        .faq-section { max-width: 1060px; margin: 0 auto; padding: 80px 40px; border-bottom: 2.5px solid #111; }
        .faq-section h2 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 44px); font-weight: 900; color: #111; margin-bottom: 48px; }
        .faq-item { border: 2.5px solid #111; margin-bottom: -2.5px; }
        .faq-q { padding: 24px 32px; font-family: 'Playfair Display', serif; font-size: 19px; font-weight: 700; color: #111; border-bottom: 2px solid #eee; }
        .faq-a { padding: 24px 32px; font-size: 15px; line-height: 1.8; color: #555; }
        .cta-band { background: #111; padding: 80px 40px; text-align: center; }
        .cta-band h2 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 4vw, 48px); font-weight: 900; color: #fff; margin-bottom: 8px; }
        .cta-band h2 em { color: #E8610A; font-style: italic; }
        .cta-band p { font-size: 18px; color: #aaa; margin-bottom: 32px; }
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
          .steps-section { padding: 60px 20px; }
          .timeline { padding: 60px 20px; }
          .faq-section { padding: 60px 20px; }
          .step { grid-template-columns: 80px 1fr; }
          .step-num span { font-size: 36px; }
          .step-body { padding: 24px 20px; }
          .timeline-grid { grid-template-columns: 1fr 1fr; }
          .tl-card:nth-child(2) { border-right: none; }
          .tl-card:nth-child(3) { border-right: 2.5px solid #111; border-top: 2.5px solid #111; }
          .tl-card:nth-child(4) { border-top: 2.5px solid #111; border-right: none; }
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
        <div className="hero-label">How It Works</div>
        <h1>Set it once. It markets <em>forever.</em></h1>
        <p>No technical skills required. No ongoing effort. You connect your business once — Traffikora handles everything else automatically, every single day, indefinitely.</p>
      </div>

      <div className="steps-section">
        <div className="section-label">The Process</div>
        <h2>Four steps. Then you're done.</h2>

        <div className="step">
          <div className="step-num"><span>01</span></div>
          <div className="step-body">
            <h3>Connect Your Business</h3>
            <p>Sign up and tell Traffikora about your business — your name, location, industry, services, and target customers. This takes about 10 minutes. It's a one-time setup. You'll never do it again.</p>
            <p>Then connect your existing accounts. Google Business Profile, your social media channels, your website. Traffikora integrates directly — no technical knowledge needed, just a few clicks to authorize each connection.</p>
            <div className="step-detail">
              <span className="step-chip">Google Business Profile</span>
              <span className="step-chip">Facebook & Instagram</span>
              <span className="step-chip">TikTok</span>
              <span className="step-chip">YouTube</span>
              <span className="step-chip">LinkedIn</span>
              <span className="step-chip">Your Website</span>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-num"><span>02</span></div>
          <div className="step-body">
            <h3>Traffikora Learns Your Business</h3>
            <p>Our AI analyzes your business, your competitors, your local market, and the search landscape across both Google and every major AI engine. It builds a complete growth strategy — customized specifically for your business, your city, and your industry.</p>
            <p>It identifies the exact keywords, topics, and content types that will drive customers to you. Then it builds your entire content calendar, SEO structure, and AI optimization plan automatically. No agency meetings. No strategy decks. It just figures it out.</p>
          </div>
        </div>

        <div className="step">
          <div className="step-num"><span>03</span></div>
          <div className="step-body">
            <h3>The Machine Turns On</h3>
            <p>Traffikora begins executing — immediately and continuously. SEO-optimized blog posts go live on your website. Social content gets published across every connected platform on the optimal schedule. Your Google Business Profile gets updated with fresh posts, photos, and Q&As.</p>
            <p>Your business gets submitted and synced across hundreds of local directories. Your schema markup gets built and maintained. Your AI engine presence gets optimized so Claude, ChatGPT, Gemini, and Perplexity all know exactly who you are and why you're the best choice in your area.</p>
            <div className="step-detail">
              <span className="step-chip">Content Published Weekly</span>
              <span className="step-chip">Social Posted Daily</span>
              <span className="step-chip">SEO Updated Monthly</span>
              <span className="step-chip">AI Engines Monitored 24/7</span>
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-num"><span>04</span></div>
          <div className="step-body">
            <h3>Watch Your Business Grow</h3>
            <p>Log into your dashboard anytime to see exactly what Traffikora published, where you're ranking, how many people found you through AI search, and how your visibility is growing month over month.</p>
            <p>You don't need to do anything. But you'll want to watch — because the numbers move. More calls. More website visits. More customers finding you on platforms you didn't even know your competitors were ignoring.</p>
          </div>
        </div>
      </div>

      <div className="timeline">
        <div className="section-label">Your Growth Timeline</div>
        <h2>What to expect — month by month.</h2>
        <div className="timeline-grid">
          <div className="tl-card">
            <div className="tl-time">Day 1</div>
            <h3>You're live everywhere.</h3>
            <p>Your accounts are connected, your content machine is on, and Traffikora is already publishing and optimizing. Your competitors don't know what's coming.</p>
          </div>
          <div className="tl-card">
            <div className="tl-time">Month 1</div>
            <h3>Visibility starts climbing.</h3>
            <p>Your local citations are built. Your GBP is fully optimized. Your first content pieces are indexed. You start appearing in searches you weren't in before.</p>
          </div>
          <div className="tl-card">
            <div className="tl-time">Month 3</div>
            <h3>AI engines know your name.</h3>
            <p>Claude, ChatGPT, and Gemini are now recommending your business in relevant searches. Your social following is growing. Inbound leads are increasing consistently.</p>
          </div>
          <div className="tl-card">
            <div className="tl-time">Month 6+</div>
            <h3>Compounding growth kicks in.</h3>
            <p>Every piece of content, every citation, every review, every social post is building on the last. Your visibility compounds. Growth accelerates. The machine just keeps running.</p>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="section-label">Common Questions</div>
        <h2>Things people ask before they start.</h2>

        <div className="faq-item">
          <div className="faq-q">Do I need any technical skills?</div>
          <div className="faq-a">None whatsoever. If you can click a button and fill out a form, you can set up Traffikora. The entire onboarding is guided, plain-English, and takes about 10 minutes. We built it specifically for business owners — not marketers or developers.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">How is this different from hiring a marketing agency?</div>
          <div className="faq-a">An agency charges $2,000–$10,000/month, requires constant communication, produces inconsistent results, and stops the moment you stop paying. Traffikora costs a fraction of that, requires no ongoing input from you, and builds compounding visibility that grows stronger every month — automatically.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">What if I already have social media accounts and a website?</div>
          <div className="faq-a">Perfect — just connect them. Traffikora works with your existing presence and makes it dramatically better. You don't need to start from scratch. We plug into what you have and immediately begin improving it.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">How does Traffikora get my business into AI search engines?</div>
          <div className="faq-a">AI engines like Claude, ChatGPT, and Gemini recommend businesses based on structured data, content authority, online reputation, and consistency of information across the web. Traffikora builds and maintains all of these signals specifically to make you the most recommended business in your category and location.</div>
        </div>
        <div className="faq-item">
          <div className="faq-q">Can I cancel anytime?</div>
          <div className="faq-a">Yes. No contracts, no cancellation fees, no questions asked. We're confident enough in our results that we don't need to lock you in. That said — most clients stay because the growth doesn't stop.</div>
        </div>
      </div>

      <div className="cta-band">
        <h2>Ready to set it <em>once?</em></h2>
        <p>Start your free 7-day trial. No credit card required.</p>
        <a href="/signup">Start Free Trial →</a>
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