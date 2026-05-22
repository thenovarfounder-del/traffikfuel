// @ts-nocheck
'use client'

export default function PrivacyPage() {
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
        .hero { padding: 60px 40px; max-width: 1060px; margin: 0 auto; border-bottom: 2.5px solid #111; }
        .hero-label { font-size: 12px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #E8610A; margin-bottom: 16px; }
        .hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(32px, 5vw, 52px); font-weight: 900; line-height: 1.1; color: #111; }
        .hero p { margin-top: 16px; font-size: 15px; color: #777; }
        .content { max-width: 1060px; margin: 0 auto; display: grid; grid-template-columns: 240px 1fr; border-bottom: 2.5px solid #111; }
        .sidebar { padding: 48px 32px; border-right: 2.5px solid #111; position: sticky; top: 72px; align-self: start; }
        .sidebar-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #E8610A; margin-bottom: 16px; }
        .sidebar ul { list-style: none; }
        .sidebar ul li { margin-bottom: 12px; }
        .sidebar ul li a { font-size: 14px; color: #555; text-decoration: none; font-weight: 500; }
        .sidebar ul li a:hover { color: #E8610A; }
        .doc { padding: 48px 48px 80px; }
        .doc-section { margin-bottom: 48px; }
        .doc-section h2 { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 900; color: #111; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 2px solid #eee; }
        .doc-section p { font-size: 15px; line-height: 1.85; color: #444; margin-bottom: 14px; }
        .doc-section ul { margin-left: 20px; margin-bottom: 14px; }
        .doc-section ul li { font-size: 15px; line-height: 1.85; color: #444; margin-bottom: 6px; }
        .doc-section a { color: #E8610A; text-decoration: none; }
        .doc-section a:hover { text-decoration: underline; }
        .highlight-box { background: #fafafa; border-left: 4px solid #E8610A; padding: 20px 24px; margin: 20px 0; }
        .highlight-box p { margin-bottom: 0; font-size: 15px; color: #333; }
        .footer { background: #111; border-top: 2.5px solid #333; padding: 18px 40px; display: flex; justify-content: space-between; align-items: center; }
        .footer-copy { font-size: 13px; color: #aaa; }
        .footer-links { display: flex; gap: 24px; list-style: none; }
        .footer-links a { font-size: 13px; color: #aaa; text-decoration: none; }
        .footer-links a:hover { color: #E8610A; }
        @media (max-width: 768px) {
          .nav { padding: 16px 20px; }
          .nav-links { display: none; }
          .hero { padding: 40px 20px; }
          .content { grid-template-columns: 1fr; }
          .sidebar { display: none; }
          .doc { padding: 32px 20px; }
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
        <div className="hero-label">Legal</div>
        <h1>Privacy Policy</h1>
        <p>Last updated: May 22, 2026 &nbsp;·&nbsp; Effective immediately upon account creation.</p>
      </div>

      <div className="content">
        <div className="sidebar">
          <div className="sidebar-label">Contents</div>
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#collect">What We Collect</a></li>
            <li><a href="#use">How We Use It</a></li>
            <li><a href="#share">Who We Share With</a></li>
            <li><a href="#cookies">Cookies</a></li>
            <li><a href="#retention">Data Retention</a></li>
            <li><a href="#rights">Your Rights</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#children">Children</a></li>
            <li><a href="#changes">Changes</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="doc">
          <div className="doc-section" id="overview">
            <h2>Overview</h2>
            <p>Traffikora.com ("Traffikora," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services.</p>
            <p>By creating an account or using Traffikora, you agree to the collection and use of information as described in this policy. If you do not agree, please do not use our services.</p>
            <div className="highlight-box">
              <p><strong>The short version:</strong> We collect only what we need to run your marketing automation. We never sell your data. Ever. Your business information is yours — we use it only to power your growth.</p>
            </div>
          </div>

          <div className="doc-section" id="collect">
            <h2>What We Collect</h2>
            <p>We collect information in the following categories:</p>
            <ul>
              <li><strong>Account Information:</strong> Your name, email address, business name, phone number, and billing details when you create an account.</li>
              <li><strong>Business Information:</strong> Details about your business including location, services, target audience, and industry — used to power your marketing automation.</li>
              <li><strong>Connected Account Data:</strong> When you connect third-party accounts (Google, Facebook, Instagram, TikTok, etc.), we access only the permissions required to publish and manage content on your behalf.</li>
              <li><strong>Usage Data:</strong> How you interact with the Traffikora dashboard, including pages visited, features used, and actions taken.</li>
              <li><strong>Device & Technical Data:</strong> IP address, browser type, operating system, and referring URLs — collected automatically when you use our platform.</li>
              <li><strong>Communications:</strong> Any messages you send to our support team.</li>
            </ul>
          </div>

          <div className="doc-section" id="use">
            <h2>How We Use It</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Operate, maintain, and improve the Traffikora platform</li>
              <li>Create, publish, and optimize marketing content on your behalf</li>
              <li>Process payments and manage your subscription</li>
              <li>Send you account-related notifications, updates, and support responses</li>
              <li>Analyze platform performance and fix bugs</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and protect the security of our platform</li>
            </ul>
            <p>We do not use your data to train AI models. We do not sell your data to advertisers. We do not share your business information with competitors.</p>
          </div>

          <div className="doc-section" id="share">
            <h2>Who We Share With</h2>
            <p>We share your information only in the following limited circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted third-party vendors who help us operate our platform — including Supabase (database), Vercel (hosting), Stripe (payments), Resend (email), and Twilio (SMS). These providers are bound by confidentiality agreements and may not use your data for any other purpose.</li>
              <li><strong>Connected Platforms:</strong> When you authorize Traffikora to post on your behalf, we share relevant content with the platforms you've connected (Google, Meta, TikTok, etc.).</li>
              <li><strong>Legal Requirements:</strong> If required by law, court order, or governmental authority.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred. We will notify you before this occurs.</li>
            </ul>
            <p>We never sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </div>

          <div className="doc-section" id="cookies">
            <h2>Cookies</h2>
            <p>Traffikora uses cookies and similar tracking technologies to operate and improve our platform. Cookies we use include:</p>
            <ul>
              <li><strong>Essential Cookies:</strong> Required for the platform to function. These cannot be disabled.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform so we can improve it.</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences across sessions.</li>
            </ul>
            <p>You can control cookies through your browser settings. Disabling certain cookies may affect platform functionality.</p>
          </div>

          <div className="doc-section" id="retention">
            <h2>Data Retention</h2>
            <p>We retain your personal information for as long as your account is active or as needed to provide our services. If you cancel your account, we will delete or anonymize your data within 90 days, except where we are required to retain it by law.</p>
            <p>Content published on third-party platforms (Google, social media) on your behalf may remain on those platforms after cancellation, as it is subject to those platforms' own policies.</p>
          </div>

          <div className="doc-section" id="rights">
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information.</li>
              <li><strong>Deletion:</strong> Request that we delete your personal data ("right to be forgotten").</li>
              <li><strong>Portability:</strong> Request your data in a portable, machine-readable format.</li>
              <li><strong>Objection:</strong> Object to certain types of processing, including direct marketing.</li>
              <li><strong>Restriction:</strong> Request that we limit how we use your data in certain circumstances.</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:support@traffikora.com">support@traffikora.com</a>. We will respond within 30 days.</p>
          </div>

          <div className="doc-section" id="security">
            <h2>Security</h2>
            <p>We take the security of your data seriously. Traffikora uses industry-standard security measures including encrypted data transmission (SSL/TLS), secure database storage via Supabase, and access controls that limit who within our team can view your data.</p>
            <p>However, no method of transmission over the internet is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security. If you suspect a security issue with your account, contact us immediately at <a href="mailto:support@traffikora.com">support@traffikora.com</a>.</p>
          </div>

          <div className="doc-section" id="children">
            <h2>Children</h2>
            <p>Traffikora is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.</p>
          </div>

          <div className="doc-section" id="changes">
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page and notify you via email if the changes are material. Your continued use of Traffikora after changes are posted constitutes your acceptance of the updated policy.</p>
          </div>

          <div className="doc-section" id="contact">
            <h2>Contact Us</h2>
            <p>If you have questions, concerns, or requests related to this Privacy Policy, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:support@traffikora.com">support@traffikora.com</a></li>
              <li><strong>Website:</strong> <a href="/contact">traffikora.com/contact</a></li>
            </ul>
            <p>We take privacy seriously and will respond to all inquiries within 2 business days.</p>
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