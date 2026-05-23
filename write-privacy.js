const fs = require('fs');
const nav = `
      <nav>
        <a href="/" class="nav-logo">Traffik<span>ora</span></a>
        <div class="nav-links">
          <a href="/how-it-works">How It Works</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
        </div>
        <div class="nav-btns">
          <a href="/login" class="nav-login">Log In</a>
          <a href="/signup" class="nav-cta">Start Free Trial</a>
        </div>
      </nav>`;

const footer = `
      <footer style={{background:'#111',borderTop:'1px solid #333',padding:'14px 60px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'8px'}}>
        <span style={{color:'#aaa',fontSize:'13px'}}>&copy; 2026 Traffikora.com</span>
        <div style={{display:'flex',gap:'24px'}}>
          <a href="/privacy" style={{color:'#aaa',fontSize:'13px',textDecoration:'none'}}>Privacy Policy</a>
          <a href="/terms" style={{color:'#aaa',fontSize:'13px',textDecoration:'none'}}>Terms of Service</a>
          <a href="/support" style={{color:'#aaa',fontSize:'13px',textDecoration:'none'}}>Support</a>
          <a href="/contact" style={{color:'#aaa',fontSize:'13px',textDecoration:'none'}}>Contact Us</a>
        </div>
      </footer>`;

const content = `// @ts-nocheck
'use client'

import { useEffect } from 'react'

export default function PrivacyPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    window.openMobileMenu = function() { const m = document.getElementById('mobileMenu'); if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden' } }
    window.closeMobileMenu = function() { const m = document.getElementById('mobileMenu'); if (m) { m.classList.remove('open'); document.body.style.overflow = '' } }
  }, [])

  return (
    <main style={{fontFamily:"'DM Sans',sans-serif",color:'#111',background:'#fff',minHeight:'100vh'}}>
      <style>{\`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}
        body{background:#fff;color:#111;font-family:'DM Sans',sans-serif;font-weight:300;overflow-x:hidden}
        nav{display:flex;align-items:center;justify-content:space-between;padding:18px 60px;border-bottom:2.5px solid #111;background:#fff;position:sticky;top:0;z-index:200}
        .nav-logo{font-family:'Playfair Display',serif;font-size:30px;font-weight:700;letter-spacing:-1px;color:#111;text-decoration:none}
        .nav-logo span{color:#E8610A}
        .nav-links{display:flex;gap:28px}
        .nav-links a{font-size:14px;color:#111;text-decoration:none;font-weight:500;transition:color .2s}
        .nav-links a:hover{color:#E8610A}
        .nav-btns{display:flex;gap:10px;align-items:center}
        .nav-login{background:transparent;color:#111;border:1.5px solid #bbb;padding:9px 20px;border-radius:6px;font-size:13px;font-family:'DM Sans',sans-serif;font-weight:500;cursor:pointer;text-decoration:none}
        .nav-cta{background:#E8610A;color:#fff;border:none;padding:10px 22px;border-radius:6px;font-size:13px;font-family:'DM Sans',sans-serif;font-weight:600;cursor:pointer;text-decoration:none}
        .pp-hero{background:#111;padding:90px 24px 70px;text-align:center}
        .pp-hero h1{font-family:'Playfair Display',serif;font-size:52px;font-weight:700;color:#fff;margin:0 0 16px;letter-spacing:-1px}
        .pp-hero p{color:#aaa;font-size:15px;margin:0}
        .pp-wrap{max-width:800px;margin:0 auto;padding:64px 24px 96px}
        .pp-toc{background:#f9f9f9;border:2.5px solid #111;border-radius:12px;padding:32px 40px;margin-bottom:64px}
        .pp-toc h3{font-family:'Playfair Display',serif;font-size:20px;margin:0 0 16px}
        .pp-toc li{font-size:14px;line-height:2.2}
        .pp-toc a{color:#E8610A;text-decoration:none;font-weight:500}
        .pp-sec{margin-bottom:56px;padding-bottom:56px;border-bottom:2.5px solid #111}
        .pp-sec:last-child{border-bottom:none}
        .pp-sec h2{font-family:'Playfair Display',serif;font-size:30px;font-weight:700;margin:0 0 6px;scroll-margin-top:80px}
        .pp-tag{font-size:11px;color:#E8610A;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:18px;display:block}
        .pp-sec p{font-size:15px;line-height:1.9;color:#333;margin:0 0 14px}
        .pp-sec ul{padding-left:22px;margin:0 0 14px}
        .pp-sec ul li{font-size:15px;line-height:1.9;color:#333;margin-bottom:4px}
        .pp-box{background:#fff7f2;border:2px solid #E8610A;border-radius:8px;padding:20px 24px;margin-bottom:20px}
        .pp-box b{color:#E8610A;display:block;margin-bottom:6px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
        .pp-table{width:100%;border-collapse:collapse;margin-bottom:20px;font-size:14px}
        .pp-table th{background:#111;color:#fff;padding:10px 16px;text-align:left;font-size:13px}
        .pp-table td{padding:10px 16px;border-bottom:1px solid #e5e5e5;color:#333;vertical-align:top}
        .pp-dark{background:#111;border-radius:12px;padding:40px}
        .pp-dark h2{font-family:'Playfair Display',serif;font-size:30px;color:#fff;margin:0 0 6px}
        .pp-dark p{color:#aaa;font-size:15px;line-height:1.9;margin:0 0 12px}
        .pp-dark a{color:#E8610A}
        .pp-dark b{color:#fff}
        a{color:#E8610A;text-decoration:none}
        a:hover{text-decoration:underline}
      \`}</style>

      <nav>
        <a href="/" className="nav-logo">Traffik<span>ora</span></a>
        <div className="nav-links">
          <a href="/how-it-works">How It Works</a>
          <a href="/features">Features</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
        </div>
        <div className="nav-btns">
          <a href="/login" className="nav-login">Log In</a>
          <a href="/signup" className="nav-cta">Start Free Trial</a>
        </div>
      </nav>

      <div className="pp-hero">
        <h1>Privacy Policy</h1>
        <p>Effective Date: May 23, 2026 &bull; Last Updated: May 23, 2026 &bull; Traffikora.com</p>
      </div>

      <div className="pp-wrap">
        <div className="pp-toc">
          <h3>Table of Contents</h3>
          <ol>
            <li><a href="#s1">Scope and Applicability</a></li>
            <li><a href="#s2">Information We Collect</a></li>
            <li><a href="#s3">How We Use Your Information</a></li>
            <li><a href="#s4">Data Sharing and Disclosure</a></li>
            <li><a href="#s5">Data Retention</a></li>
            <li><a href="#s6">Security Measures</a></li>
            <li><a href="#s7">Cookies and Tracking</a></li>
            <li><a href="#s8">Your Privacy Rights</a></li>
            <li><a href="#s9">Children Privacy</a></li>
            <li><a href="#s10">Changes to This Policy</a></li>
            <li><a href="#s11">Contact and Data Controller</a></li>
          </ol>
        </div>

        <div className="pp-sec" id="s1">
          <h2>1. Scope and Applicability</h2>
          <span className="pp-tag">Governs all Traffikora services</span>
          <p>This Privacy Policy is issued by Traffikora and applies to all information collected through our website at www.traffikora.com, our marketing automation platform, and any related services. By using our Services, you agree to the collection and use of your information as described here.</p>
          <p>This Policy is designed to comply with the <strong>California Consumer Privacy Act (CCPA)</strong>, the <strong>General Data Protection Regulation (GDPR)</strong> where applicable, and the <strong>CAN-SPAM Act</strong>.</p>
        </div>

        <div className="pp-sec" id="s2">
          <h2>2. Information We Collect</h2>
          <span className="pp-tag">Transparent data collection</span>
          <p><strong>A. Information You Provide Directly</strong></p>
          <ul>
            <li>Full name, business name, email address, and phone number</li>
            <li>Business address and industry type</li>
            <li>Account credentials stored with industry-standard encryption</li>
            <li>Payment and billing information processed securely by Stripe</li>
            <li>Connected third-party account credentials (Google Business Profile, social media)</li>
            <li>Communications sent to our support team</li>
          </ul>
          <p><strong>B. Information Collected Automatically</strong></p>
          <ul>
            <li>IP address and approximate geographic location</li>
            <li>Browser type, device type, and operating system</li>
            <li>Pages visited, features used, and time spent on the platform</li>
            <li>Session identifiers and authentication tokens</li>
          </ul>
        </div>

        <div className="pp-sec" id="s3">
          <h2>3. How We Use Your Information</h2>
          <span className="pp-tag">Lawful basis for all processing</span>
          <table className="pp-table">
            <thead><tr><th>Purpose</th><th>Lawful Basis</th></tr></thead>
            <tbody>
              <tr><td>Providing and operating the Traffikora platform</td><td>Performance of contract</td></tr>
              <tr><td>Processing payments and managing subscriptions</td><td>Performance of contract</td></tr>
              <tr><td>Automating your marketing across Google and AI platforms</td><td>Performance of contract</td></tr>
              <tr><td>Sending transactional emails and account notifications</td><td>Performance of contract</td></tr>
              <tr><td>Improving platform features and fixing issues</td><td>Legitimate interest</td></tr>
              <tr><td>Complying with legal obligations</td><td>Legal obligation</td></tr>
            </tbody>
          </table>
        </div>

        <div className="pp-sec" id="s4">
          <h2>4. Data Sharing and Disclosure</h2>
          <span className="pp-tag">We never sell your data</span>
          <div className="pp-box"><b>Our commitment</b><p>We do not sell, rent, or trade your personal information to any third party. Ever.</p></div>
          <p>We share data only with trusted service providers who are contractually bound to protect your data:</p>
          <ul>
            <li><strong>Supabase</strong> — secure database hosting and authentication</li>
            <li><strong>Stripe</strong> — payment processing (PCI-DSS Level 1 compliant)</li>
            <li><strong>Resend</strong> — transactional email delivery</li>
            <li><strong>Twilio</strong> — SMS verification and two-factor authentication</li>
            <li><strong>Vercel</strong> — platform hosting and deployment</li>
          </ul>
          <p>We may disclose information if required by law, court order, or to protect the rights and safety of Traffikora, our users, or the public.</p>
        </div>

        <div className="pp-sec" id="s5">
          <h2>5. Data Retention</h2>
          <span className="pp-tag">We keep data only as long as needed</span>
          <p>We retain your personal data for as long as your account is active or as needed to provide the Services. If you cancel your account, we will delete or anonymize your personal data within <strong>90 days</strong>, except where required for legal or financial compliance such as payment records retained for up to 7 years as required by law.</p>
        </div>

        <div className="pp-sec" id="s6">
          <h2>6. Security Measures</h2>
          <span className="pp-tag">Industry-standard protection</span>
          <ul>
            <li>All data is encrypted in transit using TLS 1.2 or higher</li>
            <li>Database access is protected by row-level security via Supabase</li>
            <li>Payment data is never stored on our servers and is handled entirely by Stripe</li>
            <li>Two-factor authentication is available for all accounts</li>
            <li>Regular security reviews and access controls are enforced</li>
          </ul>
        </div>

        <div className="pp-sec" id="s7">
          <h2>7. Cookies and Tracking Technologies</h2>
          <span className="pp-tag">Minimal, purposeful tracking</span>
          <ul>
            <li><strong>Authentication cookies</strong> — to keep you securely logged in</li>
            <li><strong>Preference cookies</strong> — to remember your settings</li>
            <li><strong>Analytics cookies</strong> — to understand platform usage and improve performance</li>
          </ul>
          <p>You can control or disable cookies through your browser settings at any time.</p>
        </div>

        <div className="pp-sec" id="s8">
          <h2>8. Your Privacy Rights</h2>
          <span className="pp-tag">CCPA and GDPR compliant</span>
          <ul>
            <li><strong>Right to Access</strong> — Request a copy of the personal data we hold about you</li>
            <li><strong>Right to Correction</strong> — Request correction of inaccurate or incomplete data</li>
            <li><strong>Right to Deletion</strong> — Request deletion of your personal data</li>
            <li><strong>Right to Portability</strong> — Request your data in a machine-readable format</li>
            <li><strong>Right to Opt-Out</strong> — Opt out of any marketing communications at any time</li>
            <li><strong>Right to Non-Discrimination</strong> — We will never discriminate against you for exercising your privacy rights</li>
          </ul>
          <p>To exercise any of these rights, email us at <a href="mailto:support@traffikora.com">support@traffikora.com</a>. We will respond within <strong>30 days</strong>.</p>
        </div>

        <div className="pp-sec" id="s9">
          <h2>9. Children Privacy</h2>
          <span className="pp-tag">Platform not intended for minors</span>
          <p>Traffikora is a business platform intended solely for users who are 18 years of age or older. We do not knowingly collect personal information from children under 18. If you believe a minor has provided us with personal information, please contact us at <a href="mailto:support@traffikora.com">support@traffikora.com</a>.</p>
        </div>

        <div className="pp-sec" id="s10">
          <h2>10. Changes to This Policy</h2>
          <span className="pp-tag">We will notify you of material changes</span>
          <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email and post a notice on the platform at least <strong>30 days</strong> before the changes take effect. Your continued use of the Services after the effective date constitutes your acceptance of the updated Policy.</p>
        </div>

        <div className="pp-dark" id="s11">
          <h2>11. Contact and Data Controller</h2>
          <span className="pp-tag" style={{color:'#E8610A'}}>We are here to help</span>
          <p>If you have any questions or requests regarding this Privacy Policy, please contact us:</p>
          <p><b>Traffikora</b><br/>Email: <a href="mailto:support@traffikora.com">support@traffikora.com</a><br/>Website: <a href="/contact">traffikora.com/contact</a><br/>Response time: within 2 business days</p>
          <p style={{fontSize:'13px',color:'#666',marginTop:'24px',borderTop:'1px solid #333',paddingTop:'24px'}}>This Privacy Policy was last reviewed by Traffikora on May 23, 2026 and is effective as of that date.</p>
        </div>
      </div>

      <footer style={{background:'#111',borderTop:'1px solid #333',padding:'14px 60px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'8px'}}>
        <span style={{color:'#aaa',fontSize:'13px'}}>&copy; 2026 Traffikora.com</span>
        <div style={{display:'flex',gap:'24px'}}>
          <a href="/privacy" style={{color:'#aaa',fontSize:'13px',textDecoration:'none'}}>Privacy Policy</a>
          <a href="/terms" style={{color:'#aaa',fontSize:'13px',textDecoration:'none'}}>Terms of Service</a>
          <a href="/support" style={{color:'#aaa',fontSize:'13px',textDecoration:'none'}}>Support</a>
          <a href="/contact" style={{color:'#aaa',fontSize:'13px',textDecoration:'none'}}>Contact Us</a>
        </div>
      </footer>
    </main>
  )
}
`;
fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/privacy/page.tsx', content, {encoding:'utf8'});
console.log('Privacy page written successfully');