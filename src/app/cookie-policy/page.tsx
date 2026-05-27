// @ts-nocheck
'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function CookiePolicy() {
  const html = `
    <style>
      .cp-hero { background: #111; padding: 120px 24px 80px; text-align: center; border-bottom: 1px solid #222; }
      .cp-hero .eyebrow { font-family: DM Sans, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #E8610A; margin-bottom: 18px; }
      .cp-hero h1 { font-family: Playfair Display, serif; font-size: clamp(36px,6vw,64px); font-weight: 700; color: #fff; line-height: 1.15; max-width: 800px; margin: 0 auto 20px; }
      .cp-hero p { font-family: DM Sans, sans-serif; font-size: 18px; color: rgba(255,255,255,0.6); max-width: 560px; margin: 0 auto; line-height: 1.6; }
      .cp-body { background: #fff; color: #111; padding: 80px 24px 120px; }
      .cp-body .inner { max-width: 780px; margin: 0 auto; }
      .cp-body .updated { font-family: DM Sans, sans-serif; font-size: 13px; color: #888; margin-bottom: 48px; text-transform: uppercase; letter-spacing: 0.08em; }
      .cp-body h2 { font-family: Playfair Display, serif; font-size: 26px; font-weight: 700; color: #111; margin: 48px 0 16px; padding-bottom: 12px; border-bottom: 2px solid #E8610A; }
      .cp-body h3 { font-family: Playfair Display, serif; font-size: 19px; font-weight: 700; color: #111; margin: 32px 0 10px; }
      .cp-body p { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 16px; }
      .cp-body ul { margin: 12px 0 20px 24px; list-style: disc; }
      .cp-body ul li { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 8px; }
      .cp-body a { color: #E8610A; }
      .cp-cta { margin-top: 56px; background: #111; border-radius: 12px; padding: 40px; text-align: center; }
      .cp-cta p { font-family: DM Sans, sans-serif; color: rgba(255,255,255,0.7); margin-bottom: 20px; }
      .cp-cta a { display: inline-block; background: #E8610A; color: #fff; font-family: DM Sans, sans-serif; font-weight: 600; font-size: 15px; padding: 14px 32px; border-radius: 8px; text-decoration: none; }
    </style>
    <section class='cp-hero'>
      <p class='eyebrow'>Legal</p>
      <h1>Cookie Policy</h1>
      <p>How Traffikora uses cookies and tracking technologies on our website.</p>
    </section>
    <section class='cp-body'>
      <div class='inner'>
        <p class='updated'>Last updated: June 2025</p>
        <h2>What Are Cookies</h2>
        <p>Cookies are small text files placed on your device when you visit a website. They help us deliver a functional, personalized, and secure experience. Traffikora uses both first-party cookies (set by us) and third-party cookies (set by our service partners).</p>
        <h2>Types of Cookies We Use</h2>
        <h3>Strictly Necessary Cookies</h3>
        <p>These cookies are required for the website to function. They enable core features such as page navigation, form submission, and security. You cannot opt out of these cookies.</p>
        <h3>Analytics Cookies (Google Analytics 4)</h3>
        <p>We use Google Analytics 4 (GA4) with measurement ID G-Z6THVW5RJ1 to understand how visitors interact with our site. GA4 collects anonymized data including pages visited, session duration, and device type. Cookies such as _ga and _gid persist for up to 2 years.</p>
        <p>You can opt out via <a href='https://tools.google.com/dlpage/gaoptout' target='_blank'>Google's opt-out tool</a>.</p>
        <h3>Live Chat Cookies (Crisp)</h3>
        <p>We use Crisp to power our live chat widget. Crisp sets cookies to maintain your chat session and recognize returning visitors. These expire when you close your browser or within 6 months of inactivity.</p>
        <h3>Marketing Cookies (Meta Pixel)</h3>
        <p>We use the Meta (Facebook) Pixel to measure the effectiveness of our ad campaigns. The pixel tracks events such as page views and sign-ups and may be used to show targeted ads on Facebook and Instagram. Meta sets cookies including _fbp and _fbc, persisting up to 90 days.</p>
        <p>Manage your ad preferences at <a href='https://www.facebook.com/settings?tab=ads' target='_blank'>facebook.com/settings</a>.</p>
        <h2>Cookie Consent</h2>
        <p>When you first visit Traffikora, you will see a cookie consent banner. Accepting enables analytics and marketing cookies as described above. Strictly necessary cookies are always active. You may withdraw consent at any time by adjusting your browser settings or contacting us.</p>
        <h2>Managing Cookies in Your Browser</h2>
        <p>You can control and delete cookies through your browser settings. Disabling cookies may affect certain features on our site.</p>
        <ul>
          <li><a href='https://support.google.com/chrome/answer/95647' target='_blank'>Google Chrome</a></li>
          <li><a href='https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences' target='_blank'>Mozilla Firefox</a></li>
          <li><a href='https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac' target='_blank'>Apple Safari</a></li>
          <li><a href='https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge' target='_blank'>Microsoft Edge</a></li>
        </ul>
        <h2>Updates to This Policy</h2>
        <p>We may update this Cookie Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the site after changes constitutes acceptance of the revised policy.</p>
        <div class='cp-cta'>
          <p>Questions about our cookie practices?</p>
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