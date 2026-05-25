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
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>Last updated: May 25, 2026</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {[
            { title: '1. Information We Collect', body: 'We collect information you provide directly to us, such as your name, email address, phone number, and business information when you create an account. We also collect information from third-party platforms you connect, such as Google Business Profile and social media accounts.' },
            { title: '2. How We Use Your Information', body: 'We use your information to provide and improve the Service, send you transactional emails and marketing updates, connect to third-party platforms on your behalf, analyze usage patterns to improve performance, and communicate with you about your account.' },
            { title: '3. Information Sharing', body: 'We do not sell your personal information. We share your information only with third-party service providers who help us operate the Service (such as Stripe for payments, Twilio for SMS, and Resend for email), and only as necessary to provide the Service.' },
            { title: '4. Third-Party Platforms', body: 'When you connect Google, Facebook, Instagram, or other platforms, we access only the data necessary to provide the Service. Your use of those platforms is governed by their own privacy policies.' },
            { title: '5. Data Security', body: 'We implement industry-standard security measures to protect your data, including encryption in transit and at rest. However, no method of transmission over the internet is 100% secure.' },
            { title: '6. Data Retention', body: 'We retain your data for as long as your account is active. If you cancel your account, we will delete your data within 90 days, except where required by law.' },
            { title: '7. Cookies', body: 'We use cookies and similar tracking technologies to analyze usage and improve the Service. You can control cookies through your browser settings.' },
            { title: '8. Your Rights', body: 'You have the right to access, correct, or delete your personal information at any time. Contact us at support@traffikora.com to exercise these rights.' },
            { title: '9. Children’s Privacy', body: 'The Service is not directed to children under 13. We do not knowingly collect personal information from children under 13.' },
            { title: '10. Changes to This Policy', body: 'We may update this Privacy Policy from time to time. We will notify you of significant changes via email or a notice on our website.' },
            { title: '11. Contact', body: 'For questions about this Privacy Policy, contact us at support@traffikora.com.' }
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>{item.title}</h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>{item.body}</p>
            </div>
          ))}
          <div style={{ borderTop: '2.5px solid #111', paddingTop: '40px', display: 'flex', gap: '24px' }}>
            <Link href="/terms" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600 }}>Terms of Service</Link>
            <Link href="/contact" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600 }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
