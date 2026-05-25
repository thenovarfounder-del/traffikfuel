const fs = require('fs')

const privacy = `// @ts-nocheck
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
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>1. Information We Collect</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We collect information you provide when creating an account including name, email, phone number, and business information. We also collect data from third-party platforms you connect such as Google Business Profile and social media accounts.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>2. How We Use Your Information</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We use your information to provide and improve the Service, send transactional and marketing emails, connect to third-party platforms on your behalf, and communicate with you about your account.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>3. Information Sharing</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We do not sell your personal information. We share data only with service providers who help us operate the Service such as Stripe, Twilio, and Resend, and only as necessary.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>4. Data Security</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We implement industry-standard security measures including encryption in transit and at rest. No method of internet transmission is 100% secure.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>5. Your Rights</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>You have the right to access, correct, or delete your personal information at any time. Contact us at support@traffikora.com to exercise these rights.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>6. Contact</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>For questions about this Privacy Policy contact us at support@traffikora.com.</p>
          </div>
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
`

const terms = `// @ts-nocheck
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
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>1. Acceptance of Terms</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>By accessing or using Traffikora you agree to be bound by these Terms of Service. If you do not agree do not use the Service.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>2. Description of Service</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>Traffikora is an automated marketing platform that connects to your Google Business Profile, social media accounts, and other third-party services to automate your marketing activities.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>3. Subscription and Billing</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>Traffikora offers paid subscription plans billed monthly. A 7-day free trial is available for new accounts. After the trial your selected plan will be charged automatically. You may cancel at any time.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>4. Acceptable Use</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>You agree not to use the Service for any unlawful purpose, to spam or harass others, to violate any third-party platform terms, or to attempt unauthorized access to any part of the Service.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>5. Limitation of Liability</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>Traffikora shall not be liable for any indirect, incidental, special, or consequential damages. Our total liability shall not exceed the amount paid by you in the 3 months preceding the claim.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>6. Contact</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>For questions about these terms contact us at support@traffikora.com.</p>
          </div>
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
`

fs.writeFileSync('src/app/privacy/page.tsx', privacy)
console.log('Written: src/app/privacy/page.tsx')
fs.writeFileSync('src/app/terms/page.tsx', terms)
console.log('Written: src/app/terms/page.tsx')