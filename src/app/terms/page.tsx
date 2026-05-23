// @ts-nocheck


// @ts-nocheck
'use client'

export default function TermsPage() {
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
        <h1>Terms of Service</h1>
        <p>Last updated: May 22, 2026 &nbsp;·&nbsp; By using Traffikora, you agree to these terms.</p>
      </div>

      <div className="content">
        <div className="sidebar">
          <div className="sidebar-label">Contents</div>
          <ul>
            <li><a href="#agreement">Agreement</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#account">Your Account</a></li>
            <li><a href="#billing">Billing & Payments</a></li>
            <li><a href="#trial">Free Trial</a></li>
            <li><a href="#cancellation">Cancellation</a></li>
            <li><a href="#content">Your Content</a></li>
            <li><a href="#prohibited">Prohibited Use</a></li>
            <li><a href="#ip">Intellectual Property</a></li>
            <li><a href="#liability">Liability</a></li>
            <li><a href="#termination">Termination</a></li>
            <li><a href="#governing">Governing Law</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="doc">
          <div className="doc-section" id="agreement">
            <h2>Agreement to Terms</h2>
            <p>These Terms of Service ("Terms") constitute a legally binding agreement between you and Traffikora.com ("Traffikora," "we," "us," or "our") governing your access to and use of the Traffikora platform and all related services.</p>
            <p>By creating an account, clicking "I agree," or using any part of our service, you confirm that you have read, understood, and agree to be bound by these Terms. If you do not agree, do not use our services.</p>
            <div className="highlight-box">
              <p><strong>Plain English:</strong> These are the rules for using Traffikora. They protect you and us. Read them — they are fair and straightforward.</p>
            </div>
          </div>

          <div className="doc-section" id="services">
            <h2>Our Services</h2>
            <p>Traffikora provides an automated marketing platform for small and mid-size businesses, including but not limited to:</p>
            <ul>
              <li>AI-powered content creation and publishing</li>
              <li>Search engine optimization (SEO) management</li>
              <li>AI search engine optimization across multiple platforms</li>
              <li>Social media account management and posting</li>
              <li>Google Business Profile optimization</li>
              <li>Local citation building and management</li>
              <li>Reputation monitoring and review management</li>
              <li>Analytics and performance reporting</li>
            </ul>
            <p>We reserve the right to modify, suspend, or discontinue any feature or service at any time with reasonable notice. We will not materially reduce the core functionality of your plan without notifying you first.</p>
          </div>

          <div className="doc-section" id="account">
            <h2>Your Account</h2>
            <p>To use Traffikora, you must create an account and provide accurate, complete, and current information. You are responsible for:</p>
            <ul>
              <li>Maintaining the confidentiality of your login credentials</li>
              <li>All activity that occurs under your account</li>
              <li>Notifying us immediately of any unauthorized access at <a href="mailto:support@traffikora.com">support@traffikora.com</a></li>
              <li>Ensuring your account information remains accurate and up to date</li>
            </ul>
            <p>You must be at least 18 years old to create an account. By creating an account, you represent that you are legally authorized to enter into this agreement on behalf of yourself or the business you represent.</p>
          </div>

          <div className="doc-section" id="billing">
            <h2>Billing & Payments</h2>
            <p>Traffikora offers the following subscription plans, billed monthly:</p>
            <ul>
              <li><strong>Starter:</strong> $97/month</li>
              <li><strong>Pro:</strong> $197/month</li>
              <li><strong>Agency:</strong> $797/month</li>
              <li><strong>Enterprise:</strong> $1,497/month</li>
            </ul>
            <p>All payments are processed securely through Stripe. By providing your payment information, you authorize Traffikora to charge your payment method on a recurring monthly basis until you cancel.</p>
            <p>Subscription fees are non-refundable except as required by law or as stated in our refund policy. We do not offer prorated refunds for partial months.</p>
            <p>If a payment fails, we will attempt to charge your payment method again. If payment cannot be collected after reasonable attempts, your account may be suspended until payment is resolved.</p>
          </div>

          <div className="doc-section" id="trial">
            <h2>Free Trial</h2>
            <p>Traffikora offers a 7-day free trial for new accounts. During the trial period, you have full access to the features of your selected plan at no charge.</p>
            <p>At the end of your trial, your selected payment method will be charged automatically unless you cancel before the trial period ends. We will send you a reminder email before your trial expires.</p>
            <p>Free trials are available to new customers only. One trial per person or business. We reserve the right to modify or discontinue the free trial offer at any time.</p>
          </div>

          <div className="doc-section" id="cancellation">
            <h2>Cancellation</h2>
            <p>You may cancel your Traffikora subscription at any time from your account dashboard or by contacting us at <a href="mailto:support@traffikora.com">support@traffikora.com</a>.</p>
            <p>Cancellations take effect at the end of your current billing period. You will retain full access to your account through the end of the period you have already paid for. We do not offer partial-month refunds upon cancellation.</p>
            <p>After cancellation, your account data will be retained for 90 days, during which time you may reactivate your account. After 90 days, your data will be permanently deleted.</p>
          </div>

          <div className="doc-section" id="content">
            <h2>Your Content</h2>
            <p>You retain full ownership of your business information, brand assets, and any content you provide to Traffikora. By using our platform, you grant Traffikora a limited, non-exclusive license to use your content solely for the purpose of delivering our services — including creating and publishing marketing content on your behalf.</p>
            <p>You are responsible for ensuring that any content you provide or authorize us to publish does not infringe on third-party intellectual property rights, violate any laws, or violate the terms of any connected platform (Google, Meta, TikTok, etc.).</p>
            <p>Traffikora is not liable for content published on third-party platforms at your direction. You are responsible for reviewing and approving the marketing strategy and content direction you authorize us to execute.</p>
          </div>

          <div className="doc-section" id="prohibited">
            <h2>Prohibited Use</h2>
            <p>You agree not to use Traffikora to:</p>
            <ul>
              <li>Violate any applicable law, regulation, or third-party rights</li>
              <li>Publish false, misleading, or deceptive content about your business or competitors</li>
              <li>Spam, harass, or send unsolicited communications to any person</li>
              <li>Engage in any activity that violates the terms of connected platforms (Google, Meta, TikTok, etc.)</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
              <li>Reverse engineer, decompile, or copy any part of the Traffikora platform</li>
              <li>Use our services for any illegal business or activity</li>
              <li>Resell or sublicense access to Traffikora without written permission</li>
            </ul>
            <p>Violation of these prohibitions may result in immediate account termination without refund.</p>
          </div>

          <div className="doc-section" id="ip">
            <h2>Intellectual Property</h2>
            <p>The Traffikora platform, including its design, code, features, branding, and proprietary methodology, is owned by Traffikora and protected by intellectual property laws. You may not copy, reproduce, distribute, or create derivative works from our platform without express written permission.</p>
            <p>AI-generated content created by Traffikora on your behalf becomes your property upon creation and delivery. Traffikora retains no ownership over marketing content produced specifically for your business.</p>
          </div>

          <div className="doc-section" id="liability">
            <h2>Limitation of Liability</h2>
            <p>Traffikora provides its services "as is" and makes no guarantees regarding specific marketing results, search engine rankings, or business growth outcomes. Marketing results vary by industry, location, competition, and many factors outside our control.</p>
            <p>To the maximum extent permitted by law, Traffikora shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our services.</p>
            <p>Our total liability to you for any claim arising from these Terms shall not exceed the amount you paid to Traffikora in the 3 months preceding the claim.</p>
          </div>

          <div className="doc-section" id="termination">
            <h2>Termination</h2>
            <p>Either party may terminate this agreement at any time. You may cancel your account as described above. We may suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or if continuing to provide services would expose us to legal liability.</p>
            <p>Upon termination, your right to access and use Traffikora ceases immediately. Sections of these Terms that by their nature should survive termination — including intellectual property, limitation of liability, and governing law — will survive.</p>
          </div>

          <div className="doc-section" id="governing">
            <h2>Governing Law</h2>
            <p>These Terms are governed by the laws of the State of Florida, United States, without regard to its conflict of law principles. Any disputes arising from these Terms or your use of Traffikora shall be resolved through binding arbitration in Florida, except where prohibited by law.</p>
            <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
          </div>

          <div className="doc-section" id="contact">
            <h2>Contact Us</h2>
            <p>If you have questions about these Terms of Service, please contact us:</p>
            <ul>
              <li><strong>Email:</strong> <a href="mailto:support@traffikora.com">support@traffikora.com</a></li>
              <li><strong>Website:</strong> <a href="/contact">traffikora.com/contact</a></li>
            </ul>
            <p>We will respond to all legal inquiries within 5 business days.</p>
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