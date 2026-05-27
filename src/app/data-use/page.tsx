// @ts-nocheck
'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function DataUse() {
  const html = `
    <style>
      .du-hero { background: #111; padding: 120px 24px 80px; text-align: center; border-bottom: 1px solid #222; }
      .du-hero .eyebrow { font-family: DM Sans, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #E8610A; margin-bottom: 18px; }
      .du-hero h1 { font-family: Playfair Display, serif; font-size: clamp(36px,6vw,64px); font-weight: 700; color: #fff; line-height: 1.15; max-width: 800px; margin: 0 auto 20px; }
      .du-hero p { font-family: DM Sans, sans-serif; font-size: 18px; color: rgba(255,255,255,0.6); max-width: 560px; margin: 0 auto; line-height: 1.6; }
      .du-body { background: #fff; color: #111; padding: 80px 24px 120px; }
      .du-body .inner { max-width: 780px; margin: 0 auto; }
      .du-body .updated { font-family: DM Sans, sans-serif; font-size: 13px; color: #888; margin-bottom: 48px; text-transform: uppercase; letter-spacing: 0.08em; }
      .du-body h2 { font-family: Playfair Display, serif; font-size: 26px; font-weight: 700; color: #111; margin: 48px 0 16px; padding-bottom: 12px; border-bottom: 2px solid #E8610A; }
      .du-body h3 { font-family: Playfair Display, serif; font-size: 19px; font-weight: 700; color: #111; margin: 32px 0 10px; }
      .du-body p { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 16px; }
      .du-body ul { margin: 12px 0 20px 24px; list-style: disc; }
      .du-body ul li { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 8px; }
      .du-body a { color: #E8610A; }
      .du-cta { margin-top: 56px; background: #111; border-radius: 12px; padding: 40px; text-align: center; }
      .du-cta p { font-family: DM Sans, sans-serif; color: rgba(255,255,255,0.7); margin-bottom: 20px; }
      .du-cta a { display: inline-block; background: #E8610A; color: #fff; font-family: DM Sans, sans-serif; font-weight: 600; font-size: 15px; padding: 14px 32px; border-radius: 8px; text-decoration: none; }
    </style>
    <section class='du-hero'>
      <p class='eyebrow'>Privacy</p>
      <h1>Data Use Policy</h1>
      <p>How we collect, use, and protect your personal information.</p>
    </section>
    <section class='du-body'>
      <div class='inner'>
        <p class='updated'>Last updated: June 2025</p>
        <h2>Overview</h2>
        <p>Traffikora is committed to being transparent about how we collect, use, and protect your personal information. This page explains the data we collect, why we collect it, and your rights as a user.</p>
        <h2>Data We Collect</h2>
        <h3>Account Information</h3>
        <p>When you create a Traffikora account, we collect your name, email address, and password (hashed). If you connect a social media account, we collect the access tokens and profile information provided by that platform.</p>
        <h3>Usage Data</h3>
        <p>We automatically collect information about how you use Traffikora, including features accessed, content published, scheduling actions, and session activity. This helps us improve the platform and provide better recommendations.</p>
        <h3>Billing Information</h3>
        <p>Payment processing is handled by Stripe. Traffikora does not store your full credit card number. Stripe provides us a tokenized reference, the last four digits of your card, and billing address for verification.</p>
        <h3>Communications</h3>
        <p>If you contact us via email or live chat (Crisp), we store the content of those conversations to provide support and improve our service quality.</p>
        <h3>Analytics Data</h3>
        <p>We use Google Analytics 4 to collect anonymized behavioral data including device type, browser, pages visited, and geographic region. This data is aggregated and not used to identify individuals.</p>
        <h2>How We Use Your Data</h2>
        <ul>
          <li>To create and manage your account</li>
          <li>To deliver the Traffikora service, including content scheduling and analytics</li>
          <li>To process payments and manage subscriptions</li>
          <li>To send transactional emails such as receipts, password resets, and onboarding</li>
          <li>To provide customer support</li>
          <li>To improve our product based on aggregated usage patterns</li>
          <li>To comply with legal obligations</li>
        </ul>
        <h2>Data Sharing</h2>
        <p>We do not sell your personal data. We share data only with trusted service partners who help us operate Traffikora:</p>
        <ul>
          <li><strong>Supabase</strong> - Database and authentication infrastructure</li>
          <li><strong>Stripe</strong> - Payment processing</li>
          <li><strong>Resend</strong> - Transactional email delivery</li>
          <li><strong>Twilio</strong> - SMS notifications</li>
          <li><strong>Crisp</strong> - Live chat support</li>
          <li><strong>Google</strong> - Analytics via GA4</li>
          <li><strong>Meta</strong> - Advertising pixel measurement</li>
          <li><strong>Vercel</strong> - Hosting infrastructure</li>
        </ul>
        <p>All partners are contractually bound to process your data only for the purposes we specify and in compliance with applicable privacy law.</p>
        <h2>Data Retention</h2>
        <p>We retain your account data for as long as your account is active. If you cancel, we delete your personal data within 30 days, except where required for legal or tax purposes (typically 7 years for billing records).</p>
        <h2>Your Rights</h2>
        <p>Depending on your jurisdiction, you may have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to or restrict processing of your data</li>
          <li>Data portability - receive a copy of your data in a machine-readable format</li>
        </ul>
        <p>To exercise any of these rights, visit our <a href='/data-deletion'>Data Deletion page</a> or contact us directly.</p>
        <h2>Security</h2>
        <p>We use industry-standard security measures including encrypted data storage, HTTPS-only connections, hashed passwords, and role-based access controls. No system is 100% secure, and we encourage you to use a strong, unique password for your Traffikora account.</p>
        <div class='du-cta'>
          <p>Questions about how we use your data?</p>
          <a href='/contact'>Contact Us</a>
        </div>
      </div>
    </section>
  `;
  return (
    <>
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
    </>
  );
}