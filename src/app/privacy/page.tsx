// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Legal</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Privacy Policy</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>Last updated: May 26, 2026</p>
      </section>
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>1. Information We Collect</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We collect information you provide directly to us when you create an account, including your name, email address, phone number, and business information. We also collect information automatically when you use the Service, including log data, device information, and usage data. When you connect third-party platforms such as Google Business Profile, Facebook, or Instagram, we collect data from those platforms as necessary to provide the Service.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>2. How We Use Your Information</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We use the information we collect to provide, maintain, and improve the Service; process transactions and send related information including confirmations and receipts; send transactional and promotional communications; respond to comments and questions; monitor and analyze usage patterns and trends; detect and prevent fraudulent transactions and abuse; and comply with legal obligations. We do not use your information for any purpose not described in this policy without your consent.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>3. Information Sharing and Disclosure</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted third-party service providers who assist us in operating our platform, including Stripe for payment processing, Twilio for SMS verification, Resend for email delivery, and Supabase for data storage. These providers are contractually obligated to keep your information confidential and use it only to provide services to us. We may also disclose your information if required by law or to protect the rights and safety of Traffikora and its users.</p>
          </div>
          <div style={{ marginBottom: '40px', background: '#f9f9f9', border: '2.5px solid #111', padding: '32px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>4. Third-Party Platform Integrations</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>When you connect third-party platforms to Traffikora, we request only the minimum permissions required to provide the Service. Below is a plain-English description of each platform integration. For the full technical breakdown of every permission and scope, see our <Link href="/data-use" style={{ color: '#E8610A', fontWeight: 600, textDecoration: 'none' }}>Data Use page</Link>.</p>

            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '8px', marginTop: '24px' }}>Google Business Profile</h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: '16px' }}>We request the <strong>business.manage</strong> scope to read your business name, location, star rating, review count, and profile view statistics. This data is displayed in your Traffikora dashboard only. We do not post to your Google Business Profile, sell your data, or share it with any third party. You can revoke access at any time from your dashboard settings or directly from your Google Account security settings at myaccount.google.com.</p>

            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Facebook Pages</h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: '16px' }}>We request <strong>pages_read_engagement</strong> and <strong>pages_show_list</strong> permissions to read your Facebook Page’s reach, engagement, and follower count. We access your business Page only — never your personal Facebook profile. This data is displayed in your dashboard only and is not sold or shared. You can revoke access at any time from your dashboard settings or from Facebook’s Apps and Websites settings.</p>

            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Instagram Business</h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: '24px' }}>We request <strong>instagram_basic</strong> and <strong>instagram_manage_insights</strong> permissions to read your follower count, post reach, and engagement rate. We do not access private messages or personal account data. This data is displayed in your dashboard only and is not sold or shared. You can revoke access at any time from your dashboard settings or from Instagram’s Apps and Websites settings.</p>

            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>OAuth Token Storage and Retention</h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.8 }}>OAuth access tokens from all connected platforms are stored securely in our database, encrypted at rest. We retain tokens only while your Traffikora account is active. If you disconnect a platform or cancel your account, your tokens are deleted from our system within 30 days. We are not responsible for the privacy practices of Google, Facebook, or Instagram — your use of those platforms is governed by their respective privacy policies.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>5. Data Security</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We take the security of your data seriously and implement industry-standard measures to protect it, including encryption of data in transit using TLS, encryption of sensitive data at rest, secure access controls and authentication, regular security audits, and monitoring for unauthorized access. While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but will notify you promptly in the event of a data breach affecting your information. For more details, see our <Link href="/security" style={{ color: '#E8610A', fontWeight: 600, textDecoration: 'none' }}>Security page</Link>.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>6. Data Retention</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We retain your personal information for as long as your account is active or as needed to provide the Service. If you cancel your account, we will delete your personal data within 90 days, except where we are required by law to retain it longer or where it is necessary to resolve disputes, enforce agreements, or protect our legal rights. Anonymized and aggregated data may be retained indefinitely for analytics purposes. OAuth tokens from connected platforms are deleted within 30 days of disconnection or account cancellation.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>7. Cookies and Tracking Technologies</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We use cookies and similar tracking technologies to operate and improve the Service, remember your preferences, analyze usage patterns, and deliver relevant content. We also use Google Analytics (GA4) to understand how users interact with our platform. You can control cookies through your browser settings, but disabling cookies may affect the functionality of the Service. By using Traffikora, you consent to our use of cookies as described in this policy.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>8. Your Rights and Choices</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>You have the right to access the personal information we hold about you; correct inaccurate or incomplete information; request deletion of your personal information; opt out of marketing communications at any time by clicking the unsubscribe link in any email; and data portability where technically feasible. To exercise any of these rights, contact us at support@traffikora.com. We will respond to all requests within 30 days.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>9. Children’s Privacy</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>The Service is not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that a child under 13 has provided us with personal information, we will take steps to delete such information promptly. If you believe we may have collected information from a child under 13, please contact us at support@traffikora.com.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>10. Changes to This Privacy Policy</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will notify you by email and by posting a notice on our website at least 14 days before the changes take effect. Your continued use of the Service after the effective date of the revised policy constitutes your acceptance of the changes.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>11. Contact Us</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at support@traffikora.com. We are committed to resolving any privacy concerns you may have and will respond to all inquiries within 2 business days.</p>
          </div>
          <div style={{ borderTop: '2.5px solid #111', paddingTop: '40px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/terms" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>Terms of Service</Link>
            <Link href="/data-use" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>Data Use</Link>
            <Link href="/security" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>Security</Link>
            <Link href="/contact" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>Contact Us</Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
