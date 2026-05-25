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
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>4. Third-Party Platform Integrations</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>When you connect Google, Facebook, Instagram, or other third-party platforms to your Traffikora account, we access only the data and permissions necessary to provide the Service on your behalf. We act as an authorized agent for your accounts and store access tokens securely. Your use of those third-party platforms is governed by their respective privacy policies and terms of service. We are not responsible for the privacy practices of third-party platforms.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>5. Data Security</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We take the security of your data seriously and implement industry-standard measures to protect it, including encryption of data in transit using TLS, encryption of sensitive data at rest, secure access controls and authentication, regular security audits, and monitoring for unauthorized access. While we strive to protect your information, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but will notify you promptly in the event of a data breach affecting your information.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>6. Data Retention</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>We retain your personal information for as long as your account is active or as needed to provide the Service. If you cancel your account, we will delete your personal data within 90 days, except where we are required by law to retain it longer or where it is necessary to resolve disputes, enforce agreements, or protect our legal rights. Anonymized and aggregated data may be retained indefinitely for analytics purposes.</p>
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
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>9. Children\u2019s Privacy</h2>
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
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>By accessing or using Traffikora (\u201cthe Service\u201d), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the Service. These Terms constitute a legally binding agreement between you and Traffikora. We reserve the right to update these Terms at any time, and your continued use of the Service constitutes acceptance of the revised Terms.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>2. Description of Service</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>Traffikora is an automated marketing platform designed for small and mid-size businesses. The Service connects to your Google Business Profile, Facebook, Instagram, and other third-party platforms to automate marketing activities including content publishing, review generation, SEO optimization, AI engine optimization, and social media management. Features and functionality may be updated, modified, or discontinued at any time with reasonable notice.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>3. Account Registration and Security</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>To use the Service, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately at support@traffikora.com of any unauthorized use of your account. Traffikora will not be liable for any losses resulting from unauthorized use of your account due to your failure to maintain the security of your credentials.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>4. Subscription Plans and Billing</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>Traffikora offers multiple subscription tiers billed on a monthly basis. New accounts receive a 7-day free trial with full access to all features of the selected plan. After the trial period, your payment method will be charged automatically at the beginning of each billing cycle. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days\u2019 notice. Continued use after a price change constitutes acceptance of the new pricing.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>5. Cancellation and Termination</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>You may cancel your subscription at any time from your dashboard settings. Cancellation takes effect at the end of your current billing period \u2014 you will retain access to the Service until that date. No refunds are issued for partial billing periods. Traffikora reserves the right to suspend or terminate your account immediately for violation of these Terms, non-payment, or any activity that poses a risk to the Service or other users. Upon termination, your data will be deleted within 90 days.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>6. Acceptable Use Policy</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service to send spam or unsolicited communications; violate any third-party platform terms of service; engage in deceptive or fraudulent marketing practices; attempt to gain unauthorized access to any part of the Service or its infrastructure; reverse engineer, copy, or create derivative works of the Service; or use the Service in any way that could damage, disable, or impair it.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>7. Third-Party Platform Integrations</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>Traffikora integrates with Google, Facebook, Instagram, and other third-party platforms. By connecting these platforms, you authorize Traffikora to access and manage your accounts on your behalf within the scope of the permissions you grant. Your use of third-party platforms remains subject to their own terms of service and policies. Traffikora is not responsible for changes to third-party APIs, platform policies, or any resulting impact on the Service. We will make reasonable efforts to maintain integrations but cannot guarantee uninterrupted access to third-party platforms.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>8. Intellectual Property</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>All content, features, and functionality of the Traffikora platform, including but not limited to software, text, graphics, logos, and design, are the exclusive property of Traffikora and are protected by applicable intellectual property laws. You retain full ownership of your business content, data, and any content you provide to the Service. You grant Traffikora a limited license to use your content solely to provide the Service. This license terminates when you cancel your account.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>9. Disclaimer of Warranties</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>The Service is provided on an \u201cas is\u201d and \u201cas available\u201d basis without warranties of any kind, either express or implied. Traffikora does not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. We do not guarantee specific marketing results, rankings, or business outcomes. Your use of the Service is at your own risk. Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>10. Limitation of Liability</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>To the fullest extent permitted by law, Traffikora shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of or inability to use the Service. Our total cumulative liability to you for any claims arising from the Service shall not exceed the total amount paid by you to Traffikora in the three months immediately preceding the claim. These limitations apply regardless of the theory of liability.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>11. Indemnification</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>You agree to indemnify, defend, and hold harmless Traffikora and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable legal fees, arising out of or in any way connected with your access to or use of the Service, your violation of these Terms, or your violation of any rights of another person or entity.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>12. Governing Law</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>These Terms shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions. Any disputes arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the American Arbitration Association rules, except that either party may seek injunctive relief in a court of competent jurisdiction.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>13. Contact Us</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>If you have any questions about these Terms of Service, please contact us at support@traffikora.com. We are committed to resolving any concerns promptly and will respond to all inquiries within 2 business days.</p>
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