// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function DataUse() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Transparency</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', maxWidth: '820px', margin: '0 auto 24px' }}>How We Use Your Data</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 0' }}>A plain-English explanation of every permission Traffikora requests and exactly what we do with it.</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', marginBottom: '64px', lineHeight: 1.8 }}>
            When you connect your Google, Facebook, or Instagram accounts to Traffikora, we request specific permissions from each platform. This page explains exactly what those permissions are, why we need them, and what we do — and don’t do — with the data we access.
          </p>

          <div style={{ borderTop: '2.5px solid #111', paddingTop: '48px', marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ background: '#E8610A', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#fff', fontSize: '22px', fontWeight: 900 }}>G</span>
              </div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111', margin: 0 }}>Google Business Profile</h2>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E8610A', marginBottom: '12px' }}>Permission Requested</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#111', background: '#f5f5f5', padding: '16px 20px', borderLeft: '4px solid #E8610A', margin: 0 }}>business.manage — Read and manage your Google Business Profile</p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '12px' }}>Why We Need It</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.8, margin: 0 }}>We use this permission to read your business name, location, star rating, review count, and profile view statistics. This data is displayed in your Traffikora dashboard so you can monitor your Google presence in one place.</p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '12px' }}>What We Do With It</h3>
              <ul style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 2, paddingLeft: '20px', margin: 0 }}>
                <li>Display your Google Business Profile stats in your dashboard</li>
                <li>Show your current rating and review count</li>
                <li>Track profile view trends over time</li>
              </ul>
            </div>

            <div style={{ background: '#f9f9f9', border: '2px solid #eee', padding: '24px', borderRadius: '2px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '12px' }}>What We Never Do</h3>
              <ul style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 2, paddingLeft: '20px', margin: 0 }}>
                <li>We never sell your Google data to third parties</li>
                <li>We never post to your Google Business Profile without your explicit instruction</li>
                <li>We never share your data with advertisers</li>
                <li>We never store data beyond what is needed to display your dashboard</li>
              </ul>
            </div>
          </div>

          <div style={{ borderTop: '2.5px solid #111', paddingTop: '48px', marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ background: '#1877F2', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#fff', fontSize: '22px', fontWeight: 900 }}>f</span>
              </div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111', margin: 0 }}>Facebook Pages</h2>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E8610A', marginBottom: '12px' }}>Permissions Requested</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#111', background: '#f5f5f5', padding: '16px 20px', borderLeft: '4px solid #1877F2', margin: 0 }}>pages_read_engagement — Read engagement data from your Facebook Page</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#111', background: '#f5f5f5', padding: '16px 20px', borderLeft: '4px solid #1877F2', margin: 0 }}>pages_show_list — Show the list of Pages you manage</p>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '12px' }}>Why We Need It</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.8, margin: 0 }}>We use these permissions to read your Facebook Page’s reach, engagement rate, and follower count. This data is displayed in your Traffikora dashboard so you can monitor your Facebook performance alongside your other marketing channels.</p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '12px' }}>What We Do With It</h3>
              <ul style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 2, paddingLeft: '20px', margin: 0 }}>
                <li>Display your Facebook Page reach and engagement in your dashboard</li>
                <li>Show follower count and growth trends</li>
                <li>Surface post performance data</li>
              </ul>
            </div>

            <div style={{ background: '#f9f9f9', border: '2px solid #eee', padding: '24px', borderRadius: '2px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '12px' }}>What We Never Do</h3>
              <ul style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 2, paddingLeft: '20px', margin: 0 }}>
                <li>We never sell your Facebook data to third parties</li>
                <li>We never post to your Facebook Page without your explicit instruction</li>
                <li>We never access your personal Facebook profile — only your business Page</li>
                <li>We never share your data with advertisers</li>
              </ul>
            </div>
          </div>

          <div style={{ borderTop: '2.5px solid #111', paddingTop: '48px', marginBottom: '64px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
              <div style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#fff', fontSize: '20px', fontWeight: 900 }}>ig</span>
              </div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111', margin: 0 }}>Instagram Business</h2>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#E8610A', marginBottom: '12px' }}>Permissions Requested</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#111', background: '#f5f5f5', padding: '16px 20px', borderLeft: '4px solid #dc2743', margin: 0 }}>instagram_basic — Read basic profile info and media</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#111', background: '#f5f5f5', padding: '16px 20px', borderLeft: '4px solid #dc2743', margin: 0 }}>instagram_manage_insights — Read Instagram account insights and analytics</p>
              </div>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '12px' }}>Why We Need It</h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.8, margin: 0 }}>We use these permissions to read your Instagram account’s follower count, post reach, and engagement rate. This data is displayed in your Traffikora dashboard alongside your other marketing channels.</p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '12px' }}>What We Do With It</h3>
              <ul style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 2, paddingLeft: '20px', margin: 0 }}>
                <li>Display your Instagram follower count and growth trends</li>
                <li>Show post reach and engagement rate in your dashboard</li>
                <li>Surface top-performing content insights</li>
              </ul>
            </div>

            <div style={{ background: '#f9f9f9', border: '2px solid #eee', padding: '24px', borderRadius: '2px' }}>
              <h3 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#111', marginBottom: '12px' }}>What We Never Do</h3>
              <ul style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 2, paddingLeft: '20px', margin: 0 }}>
                <li>We never sell your Instagram data to third parties</li>
                <li>We never post to your Instagram account without your explicit instruction</li>
                <li>We never access private messages or personal account data</li>
                <li>We never share your data with advertisers</li>
              </ul>
            </div>
          </div>

          <div style={{ borderTop: '2.5px solid #111', paddingTop: '48px', marginBottom: '64px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111', marginBottom: '24px' }}>Data Storage and Retention</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>OAuth access tokens from Google, Facebook, and Instagram are stored securely in our database (Supabase), hosted on enterprise-grade infrastructure. Tokens are encrypted at rest and in transit.</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '16px' }}>We retain your OAuth tokens only while your Traffikora account is active. If you disconnect a platform or cancel your account, your tokens are deleted from our system within 30 days.</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.8, margin: 0 }}>You can revoke Traffikora’s access to any connected platform at any time from your dashboard settings, or directly from the platform’s own security settings.</p>
          </div>

          <div style={{ borderTop: '2.5px solid #111', paddingTop: '48px', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 900, color: '#111', marginBottom: '24px' }}>Questions?</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.8, marginBottom: '24px' }}>If you have any questions about how Traffikora uses your data, contact us at <a href="mailto:support@traffikora.com" style={{ color: '#E8610A', textDecoration: 'none', fontWeight: 600 }}>support@traffikora.com</a> or visit our <Link href="/privacy" style={{ color: '#E8610A', textDecoration: 'none', fontWeight: 600 }}>Privacy Policy</Link>.</p>
          </div>

        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to connect your accounts?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
