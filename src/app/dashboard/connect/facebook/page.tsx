// @ts-nocheck
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function ConnectFacebook() {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Step 2 of 3 — Account Setup</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Connect Facebook Page</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>Traffikora reads your Facebook Page performance to display reach, engagement, and follower data in your dashboard.</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', padding: '16px 20px', background: '#f5f5f5', border: '2px solid #ddd' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ccc', flexShrink: 0 }}></div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#666', margin: 0 }}>Status: <strong style={{ color: '#111' }}>Not connected</strong></p>
          </div>

          <div style={{ border: '2.5px solid #111', padding: '40px', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', fontWeight: 700, color: '#111', marginBottom: '24px' }}>Permissions Traffikora will request</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              <div style={{ padding: '16px 20px', background: '#f9f9f9', borderLeft: '4px solid #1877F2' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#111', margin: '0 0 4px' }}>pages_read_engagement</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', margin: 0, lineHeight: 1.6 }}>Read engagement data from your Facebook Page — reach, reactions, and follower count</p>
              </div>
              <div style={{ padding: '16px 20px', background: '#f9f9f9', borderLeft: '4px solid #1877F2' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#111', margin: '0 0 4px' }}>pages_show_list</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', margin: 0, lineHeight: 1.6 }}>Show the list of Pages you manage so you can select which one to connect</p>
              </div>
            </div>

            <button
              onClick={() => setExpanded(!expanded)}
              style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#E8610A', background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginBottom: expanded ? '20px' : '0' }}
            >
              {expanded ? '▲ Hide details' : '▼ Why we need this'}
            </button>

            {expanded && (
              <div style={{ background: '#f9f9f9', border: '2px solid #eee', padding: '24px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.8, marginBottom: '12px' }}>We use these permissions to read your Facebook Page’s reach, engagement rate, and follower count and display them in your Traffikora dashboard.</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.8, marginBottom: '12px' }}>We access your business Page only — never your personal Facebook profile. We never post to your Page without your explicit instruction, and we never sell your data.</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', lineHeight: 1.8, margin: 0 }}>You can disconnect at any time from dashboard settings or from Facebook’s Apps and Websites settings. For the full breakdown, see our <Link href="/data-use" style={{ color: '#E8610A', fontWeight: 600, textDecoration: 'none' }}>Data Use page</Link>.</p>
              </div>
            )}
          </div>

          <button
            onClick={() => window.location.href = '/dashboard/connect/instagram'}
            style={{ width: '100%', background: '#E8610A', color: '#fff', padding: '20px', fontSize: '18px', fontWeight: 700, border: '2.5px solid #E8610A', cursor: 'pointer', marginBottom: '16px', fontFamily: 'DM Sans, sans-serif' }}
          >
            Connect Facebook Page →
          </button>

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888', textAlign: 'center', marginBottom: '24px', lineHeight: 1.6 }}>
            You will be redirected to Facebook to approve access. Traffikora only receives the permissions listed above.
          </p>

          <div style={{ borderTop: '2px solid #eee', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/dashboard/connect/google" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#888', textDecoration: 'none' }}>← Back</Link>
            <Link href="/dashboard/connect/instagram" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#666', textDecoration: 'underline' }}>Skip for now</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
