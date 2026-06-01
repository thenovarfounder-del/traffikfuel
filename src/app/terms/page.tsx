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
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>Last updated: May 26, 2026</p>
      </section>
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>1. Acceptance of Terms</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>By accessing or using Traffikora (“the Service”), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the Service. These Terms constitute a legally binding agreement between you and Traffikora. We reserve the right to update these Terms at any time, and your continued use of the Service constitutes acceptance of the revised Terms.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>2. Description of Service</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>Traffikora is an automated marketing platform designed for small and mid-size businesses. The Service connects to your Google Business Profile, Facebook, Instagram, and other third-party platforms to automate marketing activities including content publishing, review generation, SEO optimization, Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini, and social media management. Features and functionality may be updated, modified, or discontinued at any time with reasonable notice.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>3. Account Registration and Security</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>To use the Service, you must create an account and provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately at support@traffikora.com of any unauthorized use of your account. Traffikora will not be liable for any losses resulting from unauthorized use of your account due to your failure to maintain the security of your credentials.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>4. Subscription Plans and Billing</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>Traffikora offers multiple subscription tiers billed on a monthly basis. New accounts receive a Free plan available with full access to all features of the selected plan. After the trial period, your payment method will be charged automatically at the beginning of each billing cycle. All fees are non-refundable except as required by law. We reserve the right to change pricing with 30 days’ notice. Continued use after a price change constitutes acceptance of the new pricing.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>5. Cancellation and Termination</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>You may cancel your subscription at any time from your dashboard settings. Cancellation takes effect at the end of your current billing period — you will retain access to the Service until that date. No refunds are issued for partial billing periods. Traffikora reserves the right to suspend or terminate your account immediately for violation of these Terms, non-payment, or any activity that poses a risk to the Service or other users. Upon termination, your data will be deleted within 90 days.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>6. Acceptable Use Policy</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service to send spam or unsolicited communications; violate any third-party platform terms of service; engage in deceptive or fraudulent marketing practices; attempt to gain unauthorized access to any part of the Service or its infrastructure; reverse engineer, copy, or create derivative works of the Service; or use the Service in any way that could damage, disable, or impair it.</p>
          </div>
          <div style={{ marginBottom: '40px', background: '#f9f9f9', border: '2.5px solid #111', padding: '32px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>7. Third-Party Platform Integrations</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>Traffikora integrates with Google, Facebook, Instagram, and other third-party platforms. By connecting these platforms, you authorize Traffikora to access and manage your accounts on your behalf within the scope of the permissions you grant. Your use of third-party platforms remains subject to their own terms of service and policies.</p>

            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Connected Account Data Upon Cancellation</h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>When you cancel your Traffikora account or disconnect a connected platform, Traffikora will revoke its access to that platform and delete your stored OAuth tokens within 30 days. Any data retrieved from connected platforms — such as Google Business Profile statistics, Facebook Page insights, or Instagram engagement data — that has been stored in your Traffikora account will also be deleted within 90 days of account termination. You are responsible for exporting any data you wish to retain before cancelling. Traffikora is not liable for any loss of data following cancellation.</p>

            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Third-Party API Changes and Deprecation</h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.8, marginBottom: '20px' }}>Traffikora’s integrations depend on APIs and developer programs operated by Google, Facebook, Instagram, and other third-party platforms. These platforms may change, restrict, deprecate, or discontinue their APIs at any time without notice to Traffikora. Traffikora is not responsible for any interruption, degradation, or loss of functionality caused by third-party platform changes, API deprecation, policy updates, or access revocation by those platforms. We will make commercially reasonable efforts to maintain integrations and notify users of material disruptions, but we cannot guarantee uninterrupted access to any third-party platform feature.</p>

            <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>Data Use and Permissions</h3>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.8 }}>For a full description of every permission Traffikora requests from connected platforms and how that data is used, see our <Link href="/data-use" style={{ color: '#E8610A', fontWeight: 600, textDecoration: 'none' }}>Data Use page</Link>. We request only the minimum permissions necessary to provide the features you use. We do not sell data obtained from connected platforms to any third party.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>8. Intellectual Property</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>All content, features, and functionality of the Traffikora platform, including but not limited to software, text, graphics, logos, and design, are the exclusive property of Traffikora and are protected by applicable intellectual property laws. You retain full ownership of your business content, data, and any content you provide to the Service. You grant Traffikora a limited license to use your content solely to provide the Service. This license terminates when you cancel your account.</p>
          </div>
          <div style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>9. Disclaimer of Warranties</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8 }}>The Service is provided on an “as is” and “as available” basis without warranties of any kind, either express or implied. Traffikora does not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. We do not guarantee specific marketing results, rankings, or business outcomes. Your use of the Service is at your own risk. Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.</p>
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
          <div style={{ borderTop: '2.5px solid #111', paddingTop: '40px', display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <Link href="/privacy" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>Privacy Policy</Link>
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
