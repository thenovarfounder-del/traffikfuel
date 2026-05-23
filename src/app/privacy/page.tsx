// @ts-nocheck
'use client'

import { useEffect } from 'react'

export default function PrivacyPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main style={{fontFamily:"'DM Sans', sans-serif", color:'#111', background:'#fff', minHeight:'100vh'}}>
      <style>{`n        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .priv-hero { background:#111; padding:80px 24px; text-align:center; }
        .priv-hero h1 { font-family:'Playfair Display',serif; font-size:52px; font-weight:700; color:#fff; margin:0 0 16px; }
        .priv-hero p { color:#aaa; font-size:16px; margin:0; }
        .priv-body { max-width:800px; margin:0 auto; padding:72px 24px; }
        .priv-section { margin-bottom:48px; border-bottom:2.5px solid #111; padding-bottom:48px; }
        .priv-section:last-child { border-bottom:none; }
        .priv-section h2 { font-family:'Playfair Display',serif; font-size:28px; font-weight:700; margin:0 0 16px; }
        .priv-section p { font-size:16px; line-height:1.85; color:#333; margin:0 0 12px; }
        .priv-section ul { padding-left:20px; margin:0 0 12px; }
        .priv-section ul li { font-size:16px; line-height:1.85; color:#333; margin-bottom:6px; }
        .priv-highlight { background:#f9f9f9; border-left:4px solid #E8610A; padding:16px 20px; border-radius:0 6px 6px 0; margin-bottom:12px; }
        a { color:#E8610A; text-decoration:none; }
        a:hover { text-decoration:underline; }
      `}</style>

      <div className='priv-hero'>
        <h1>Privacy Policy</h1>
        <p>Last updated: May 2026 — We take your privacy seriously.</p>
      </div>

      <div className='priv-body'>
        <div className='priv-section'>
          <h2>1. Information We Collect</h2>
          <p>When you sign up for Traffikora, we collect the following information:</p>
          <ul>
            <li>Name and email address</li>
            <li>Business name, address, and contact details</li>
            <li>Payment information (processed securely by Stripe)</li>
            <li>Connected account credentials for Google, social media, and other platforms</li>
            <li>Usage data and analytics about how you use the platform</li>
          </ul>
        </div>

        <div className='priv-section'>
          <h2>2. How We Use Your Information</h2>
          <p>Your information is used exclusively to provide and improve the Traffikora service:</p>
          <ul>
            <li>To automate your marketing across Google and AI platforms</li>
            <li>To process payments and manage your subscription</li>
            <li>To send you account updates, reports, and platform notifications</li>
            <li>To improve platform features and fix issues</li>
            <li>To provide customer support</li>
          </ul>
        </div>

        <div className='priv-section'>
          <h2>3. Data Sharing</h2>
          <div className='priv-highlight'><strong>We do not sell your data. Ever.</strong></div>
          <p>We share data only with trusted third-party providers that are essential to running the platform:</p>
          <ul>
            <li><strong>Supabase</strong> — secure database and authentication</li>
            <li><strong>Stripe</strong> — payment processing</li>
            <li><strong>Resend</strong> — transactional email delivery</li>
            <li><strong>Twilio</strong> — SMS verification and 2FA</li>
          </ul>
          <p>All providers are contractually bound to protect your data and use it only as directed by us.</p>
        </div>

        <div className='priv-section'>
          <h2>4. Cookies</h2>
          <p>We use cookies to keep you logged in and to understand how the platform is being used. Cookies help us deliver a faster, more personalized experience.</p>
          <p>You can disable cookies in your browser settings at any time, though this may affect certain platform functionality.</p>
        </div>

        <div className='priv-section'>
          <h2>5. Data Security</h2>
          <p>We use industry-standard encryption and security practices to protect your data. All data is stored securely via Supabase with row-level security enabled. Payment data is handled entirely by Stripe and never stored on our servers.</p>
        </div>

        <div className='priv-section'>
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your account and all associated data</li>
            <li>Export your data at any time</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href='mailto:support@traffikora.com'>support@traffikora.com</a>.</p>
        </div>

        <div className='priv-section'>
          <h2>7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes via email or a notice on the platform. Continued use of Traffikora after changes constitutes acceptance of the updated policy.</p>
        </div>

        <div className='priv-section'>
          <h2>8. Contact Us</h2>
          <p>Questions or concerns about this Privacy Policy? We are here to help.</p>
          <p><strong>Email:</strong> <a href='mailto:support@traffikora.com'>support@traffikora.com</a><br/><strong>Website:</strong> <a href='/contact'>traffikora.com/contact</a></p>
        </div>
      </div>
    </main>
  )
}
