// @ts-nocheck
'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function DataDeletion() {
  const html = `
    <style>
      .dd-hero { background: #111; padding: 120px 24px 80px; text-align: center; border-bottom: 1px solid #222; }
      .dd-hero .eyebrow { font-family: DM Sans, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #E8610A; margin-bottom: 18px; }
      .dd-hero h1 { font-family: Playfair Display, serif; font-size: clamp(36px,6vw,64px); font-weight: 700; color: #fff; line-height: 1.15; max-width: 800px; margin: 0 auto 20px; }
      .dd-hero p { font-family: DM Sans, sans-serif; font-size: 18px; color: rgba(255,255,255,0.6); max-width: 560px; margin: 0 auto; line-height: 1.6; }
      .dd-body { background: #fff; color: #111; padding: 80px 24px 120px; }
      .dd-body .inner { max-width: 780px; margin: 0 auto; }
      .dd-body .updated { font-family: DM Sans, sans-serif; font-size: 13px; color: #888; margin-bottom: 48px; text-transform: uppercase; letter-spacing: 0.08em; }
      .dd-body h2 { font-family: Playfair Display, serif; font-size: 26px; font-weight: 700; color: #111; margin: 48px 0 16px; padding-bottom: 12px; border-bottom: 2px solid #E8610A; }
      .dd-body h3 { font-family: Playfair Display, serif; font-size: 19px; font-weight: 700; color: #111; margin: 32px 0 10px; }
      .dd-body p { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 16px; }
      .dd-body ul { margin: 12px 0 20px 24px; list-style: disc; }
      .dd-body ul li { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 8px; }
      .dd-body ol { margin: 12px 0 20px 24px; }
      .dd-body ol li { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 8px; }
      .dd-body a { color: #E8610A; }
      .dd-cta { margin-top: 56px; background: #111; border-radius: 12px; padding: 40px; text-align: center; }
      .dd-cta p { font-family: DM Sans, sans-serif; color: rgba(255,255,255,0.7); margin-bottom: 20px; }
      .dd-cta a { display: inline-block; background: #E8610A; color: #fff; font-family: DM Sans, sans-serif; font-weight: 600; font-size: 15px; padding: 14px 32px; border-radius: 8px; text-decoration: none; }
    </style>
    <section class='dd-hero'>
      <p class='eyebrow'>Privacy</p>
      <h1>Data Deletion</h1>
      <p>How to permanently delete your Traffikora account and personal data.</p>
    </section>
    <section class='dd-body'>
      <div class='inner'>
        <p class='updated'>Last updated: June 2025</p>
        <h2>Your Right to Delete</h2>
        <p>You have the right to request deletion of your personal data from Traffikora at any time. We take this right seriously and make the process straightforward.</p>
        <h2>What Gets Deleted</h2>
        <p>When you request account deletion, we will permanently remove:</p>
        <ul>
          <li>Your name and email address</li>
          <li>Your hashed password and authentication tokens</li>
          <li>Your connected social media account tokens and profiles</li>
          <li>Your scheduled and published content history within Traffikora</li>
          <li>Your analytics data tied to your account</li>
          <li>Your saved preferences and settings</li>
          <li>Your live chat history within Crisp</li>
        </ul>
        <h2>What May Be Retained</h2>
        <p>Certain data may be retained after deletion where required by law:</p>
        <ul>
          <li><strong>Billing records</strong> - Required for up to 7 years for tax and accounting compliance. Held by Stripe and does not include your password, social accounts, or content.</li>
          <li><strong>Anonymized analytics</strong> - Aggregated, non-identifiable data may be retained to understand overall product usage trends.</li>
          <li><strong>Legal holds</strong> - If your account is subject to an ongoing dispute or legal proceeding, we may retain relevant data until resolved.</li>
        </ul>
        <h2>How to Request Deletion</h2>
        <h3>Option 1: Self-Service (Fastest)</h3>
        <p>Log into your Traffikora account and go to Settings, then Account, then Delete Account. Your account and all associated personal data will be permanently deleted within 30 days. This action is irreversible.</p>
        <h3>Option 2: Email Request</h3>
        <p>Send an email to <a href='mailto:support@traffikora.com'>support@traffikora.com</a> with the subject line Data Deletion Request and include your registered email address. We will confirm receipt within 2 business days and complete the deletion within 30 days.</p>
        <h3>Option 3: Contact Form</h3>
        <p>Use our <a href='/contact'>contact page</a> and include Data Deletion Request in your message. We will respond within 2 business days.</p>
        <h2>Facebook / Meta Data Deletion</h2>
        <p>If you connected Traffikora via Facebook Login and wish to delete the data we received from Facebook, follow these steps:</p>
        <ol>
          <li>Go to your Facebook Settings</li>
          <li>Click Security and Login, then Apps and Websites</li>
          <li>Find Traffikora and click Remove</li>
          <li>Select Delete all your Facebook activity for this app</li>
        </ol>
        <p>Alternatively, email <a href='mailto:support@traffikora.com'>support@traffikora.com</a> with the subject Facebook Data Deletion and your Facebook-connected email address.</p>
        <h2>Confirmation</h2>
        <p>Upon completion of your deletion request, we will send a confirmation email to the address associated with your account. If the email has already been deleted, we will confirm via the channel through which you submitted the request.</p>
        <div class='dd-cta'>
          <p>Ready to delete your account or have questions?</p>
          <a href='/contact'>Submit Deletion Request</a>
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