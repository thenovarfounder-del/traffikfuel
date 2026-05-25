// @ts-nocheck
// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Legal</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Terms of Service</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>Last updated: May 25, 2026</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          {[
            { title: '1. Acceptance of Terms', body: 'By accessing or using Traffikora (“the Service”), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service.' },
            { title: '2. Description of Service', body: 'Traffikora is an automated marketing platform that connects to your Google Business Profile, social media accounts, and other third-party services to automate your marketing activities.' },
            { title: '3. Account Registration', body: 'You must create an account to use Traffikora. You are responsible for maintaining the security of your account and all activities that occur under it. You must provide accurate information during registration.' },
            { title: '4. Subscription and Billing', body: 'Traffikora offers paid subscription plans billed monthly. A 7-day free trial is available for new accounts. After the trial, your selected plan will be charged automatically. You may cancel at any time.' },
            { title: '5. Acceptable Use', body: 'You agree not to use the Service for any unlawful purpose, to spam or harass others, to violate any third-party platform terms of service, or to attempt to gain unauthorized access to any part of the Service.' },
            { title: '6. Third-Party Integrations', body: 'Traffikora connects to Google, Facebook, Instagram, and other third-party platforms. Your use of those platforms is governed by their respective terms of service. Traffikora is not responsible for changes to third-party APIs or services.' },
            { title: '7. Intellectual Property', body: 'All content, features, and functionality of Traffikora are owned by Traffikora and are protected by applicable intellectual property laws. You retain ownership of your business content and data.' },
            { title: '8. Limitation of Liability', body: 'Traffikora shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount paid by you in the 3 months preceding the claim.' },
            { title: '9. Termination', body: 'We reserve the right to suspend or terminate your account at any time for violation of these terms. You may cancel your account at any time from your dashboard settings.' },
            { title: '10. Changes to Terms', body: 'We may update these terms from time to time. Continued use of the Service after changes constitutes acceptance of the new terms. We will notify you of significant changes via email.' },
            { title: '11. Contact', body: 'For questions about these terms, contact us at support@traffikora.com.' }
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '40px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>{item.title}</h2>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>{item.body}</p>
            </div>
          ))}
          <div style={{ borderTop: '2.5px solid #111', paddingTop: '40px', display: 'flex', gap: '24px' }}>
            <Link href="/privacy" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600 }}>Privacy Policy</Link>
            <Link href="/contact" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600 }}>Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
