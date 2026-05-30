// @ts-nocheck
'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
export default function ConnectTwitter() {
  return (
    <main suppressHydrationWarning>
      <Nav />
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '80px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px' }}>Step 5 of 6 — Account Setup</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, margin: '0 auto 16px' }}>Connect X / Twitter</h1>
        <p style={{ fontSize: '17px', color: '#ccc', maxWidth: '520px', margin: '0 auto' }}>Traffikora publishes posts to your X account automatically every day.</p>
      </section>
      <section style={{ background: '#fff', padding: '60px 32px', maxWidth: '680px', margin: '0 auto' }}>
        <div style={{ background: '#f7f7f7', border: '2px solid #eee', padding: '16px 20px', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ccc', flexShrink: 0 }}></div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#555', margin: 0 }}>Status: <strong>Not connected</strong></p>
        </div>
        <div style={{ border: '2px solid #111', borderRadius: '8px', overflow: 'hidden', marginBottom: '32px' }}>
          <div style={{ background: '#111', padding: '16px 20px' }}>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#fff', margin: 0 }}>Permissions Traffikora will request</p>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ borderLeft: '3px solid #E8610A', paddingLeft: '14px', marginBottom: '16px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#111', margin: '0 0 4px' }}>tweet.read</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#666', margin: 0 }}>Read your tweets and engagement data</p>
            </div>
            <div style={{ borderLeft: '3px solid #E8610A', paddingLeft: '14px', marginBottom: '16px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#111', margin: '0 0 4px' }}>tweet.write</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#666', margin: 0 }}>Post tweets on your behalf automatically</p>
            </div>
            <div style={{ borderLeft: '3px solid #E8610A', paddingLeft: '14px' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#111', margin: '0 0 4px' }}>users.read</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#666', margin: 0 }}>Read your profile info and follower count</p>
            </div>
          </div>
        </div>
        <button disabled style={{ display: 'block', width: '100%', background: '#ccc', color: '#fff', padding: '18px', fontSize: '17px', fontWeight: 700, border: 'none', fontFamily: 'DM Sans, sans-serif', marginBottom: '12px', cursor: 'not-allowed' }}>
          Connect X Account — Coming Soon
        </button>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: '#999', textAlign: 'center', marginBottom: '32px' }}>X API application is pending approval. You will be notified when this is available.</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <a href="/dashboard/connect/tiktok" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888', textDecoration: 'none' }}>&larr; Back</a>
          <a href="/dashboard/connect/linkedin" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888', textDecoration: 'none' }}>Skip for now &rarr;</a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
