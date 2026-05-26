const fs = require('fs');
const content = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Security() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Trust & Safety</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>Security at Traffikora</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 0' }}>How we protect your data, your connected accounts, and your business.</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', marginBottom: '64px', lineHeight: 1.8 }}>
            Security is not an afterthought at Traffikora \u2014 it is built into every layer of our platform. This page explains how we store your data, protect your connected accounts, and keep your business information safe.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', marginBottom: '64px' }}>
            {[
              { title: 'Encrypted Data Storage', body: 'All data stored in Traffikora \u2014 including OAuth tokens from Google, Facebook, and Instagram \u2014 is encrypted at rest using AES-256 encryption. Your credentials are never stored in plain text.' },
              { title: 'HTTPS Everywhere', body: 'All traffic between your browser and Traffikora is encrypted in transit using TLS 1.2+. We enforce HTTPS on every page and API endpoint \u2014 there is no unencrypted access.' },
              { title: 'SOC2-Grade Infrastructure', body: 'Traffikora is hosted on Vercel and Supabase \u2014 both enterprise-grade platforms with SOC2 Type II compliance, 99.9% uptime SLAs, and automatic security patching.' },
              { title: 'OAuth Token Security', body: 'We use industry-standard OAuth 2.0 to connect your Google, Facebook, and Instagram accounts. We never see or store your passwords. Tokens are scoped to only the permissions you approve.' },
              { title: 'Zero Data Selling', body: 'Traffikora does not sell, rent, or share your data with any third party for advertising or marketing purposes. Your data is used exclusively to power your own dashboard.' },
              { title: 'Access Controls', body: 'Your account is protected by email and password authentication with phone verification via SMS. Each user can only access their own data \u2014 there is no cross-account data access.' },
            ].map((card) => (
              <div key={card.title} style={{ border: '2.5px solid #111', padding: '32px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.8, margin: 0 }}>{card.body}</p>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '2.5px solid #111', paddingTop: '48px', marginBottom: '64px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111', marginBottom: '24px' }}>Your Connected Accounts</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>When you connect Google, Facebook, or Instagram to Traffikora, we request only the minimum permissions required to display your marketing data. We do not request write access unless a specific feature requires it, and we will always tell you exactly what we are accessing and why.</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>You can disconnect any connected platform at any time from your dashboard settings. When you disconnect, your OAuth tokens are revoked and deleted from our system within 30 days.</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.8, margin: 0 }}>For a full breakdown of every permission we request and why, see our <Link href="/data-use" style={{ color: '#E8610A', textDecoration: 'none', fontWeight: 600 }}>Data Use page</Link>.</p>
          </div>

          <div style={{ borderTop: '2.5px solid #111', paddingTop: '48px', marginBottom: '64px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111', marginBottom: '24px' }}>Infrastructure Partners</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
              {[
                { name: 'Vercel', role: 'Hosting & Deployment', detail: 'SOC2 Type II certified. Enterprise-grade CDN. Automatic HTTPS. 99.99% uptime.' },
                { name: 'Supabase', role: 'Database & Authentication', detail: 'PostgreSQL database with row-level security. Encrypted at rest. SOC2 compliant.' },
                { name: 'Stripe', role: 'Payment Processing', detail: 'PCI DSS Level 1 certified. We never store your credit card data \u2014 Stripe handles all payment processing.' },
                { name: 'Twilio', role: 'SMS Verification', detail: 'Phone verification via Twilio Verify. Your phone number is used only for account security.' },
              ].map((partner) => (
                <div key={partner.name} style={{ background: '#f9f9f9', border: '2px solid #eee', padding: '24px' }}>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E8610A', marginBottom: '4px' }}>{partner.role}</p>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', marginBottom: '12px' }}>{partner.name}</h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.7, margin: 0 }}>{partner.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '2.5px solid #111', paddingTop: '48px', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111', marginBottom: '24px' }}>Report a Security Issue</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '24px' }}>If you discover a security vulnerability or have a concern about how your data is being handled, please contact us immediately at <a href="mailto:support@traffikora.com" style={{ color: '#E8610A', textDecoration: 'none', fontWeight: 600 }}>support@traffikora.com</a>. We take all reports seriously and will respond within 24 hours.</p>
          </div>

        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Your data is safe with us.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;

fs.writeFileSync('src/app/security/page.tsx', content);
console.log('Written: src/app/security/page.tsx');