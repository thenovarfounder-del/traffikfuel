// @ts-nocheck
'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
export default function ConnectWordPress() {
  const [siteUrl, setSiteUrl] = useState('')
  const [username, setUsername] = useState('')
  const [appPassword, setAppPassword] = useState('')
  const [testing, setTesting] = useState(false)
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState(null)
  const [error, setError] = useState('')
  async function testConnection() {
    if (!siteUrl || !username || !appPassword) { setError('Please fill in all fields.'); return }
    setTesting(true); setError(''); setStatus(null)
    try {
      const url = siteUrl.replace(/\/$/, '') + '/wp-json/wp/v2/posts?per_page=1'
      const creds = btoa(username + ':' + appPassword)
      const res = await fetch(url, { headers: { Authorization: 'Basic ' + creds } })
      if (res.ok) { setStatus('success') } else { setError('Connection failed. Check your credentials and try again.') }
    } catch (e) { setError('Could not reach that WordPress site. Check the URL and try again.') }
    setTesting(false)
  }
  async function saveConnection() {
    setSaving(true); setError('')
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setError('Not logged in.'); setSaving(false); return }
      await supabase.from('wordpress_connections').upsert({ user_id: user.id, site_url: siteUrl, username: username, app_password: appPassword, connected_at: new Date().toISOString() }, { onConflict: 'user_id' })
      window.location.href = '/dashboard'
    } catch (e) { setError('Save failed. Please try again.') }
    setSaving(false)
  }
  return (
    <main suppressHydrationWarning>
      <Nav />
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '80px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '12px' }}>WordPress Connection</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, margin: '0 auto 16px' }}>Connect WordPress</h1>
        <p style={{ fontSize: '17px', color: '#ccc', maxWidth: '520px', margin: '0 auto' }}>Connect your WordPress site so Traffikora can publish blog posts automatically.</p>
      </section>
      <section style={{ background: '#fff', padding: '60px 32px', maxWidth: '680px', margin: '0 auto' }}>
        <div style={{ background: '#fff8f0', border: '2px solid #E8610A', borderRadius: '8px', padding: '20px 24px', marginBottom: '32px' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#E8610A', margin: '0 0 8px' }}>How to get your Application Password</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#555', margin: '0 0 6px', lineHeight: 1.7 }}>1. Log into your WordPress admin panel</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#555', margin: '0 0 6px', lineHeight: 1.7 }}>2. Go to Users &rarr; Profile</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#555', margin: '0 0 6px', lineHeight: 1.7 }}>3. Scroll down to Application Passwords</p>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#555', margin: '0', lineHeight: 1.7 }}>4. Enter a name (e.g. Traffikora) and click Add New Application Password</p>
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>WordPress Site URL</label>
          <input type='text' placeholder='https://www.yoursite.com' value={siteUrl} onChange={e => setSiteUrl(e.target.value)} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>WordPress Username</label>
          <input type='text' placeholder='Your WordPress admin username' value={username} onChange={e => setUsername(e.target.value)} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Application Password</label>
          <input type='password' placeholder='xxxx xxxx xxxx xxxx xxxx xxxx' value={appPassword} onChange={e => setAppPassword(e.target.value)} style={{ width: '100%', padding: '13px 16px', fontSize: '15px', border: '2px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
        </div>
        {error && <p style={{ color: 'red', marginBottom: '16px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px' }}>{error}</p>}
        {status === 'success' && <p style={{ color: '#2d6a2d', marginBottom: '16px', fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700 }}>Connection successful! Click Save to continue.</p>}
        <button onClick={testConnection} disabled={testing} style={{ display: 'block', width: '100%', background: testing ? '#ccc' : '#111', color: '#fff', padding: '16px', fontSize: '16px', fontWeight: 700, border: 'none', cursor: testing ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', marginBottom: '12px' }}>
          {testing ? 'Testing connection...' : 'Test Connection'}
        </button>
        {status === 'success' && (
          <button onClick={saveConnection} disabled={saving} style={{ display: 'block', width: '100%', background: saving ? '#ccc' : '#E8610A', color: '#fff', padding: '16px', fontSize: '16px', fontWeight: 700, border: 'none', cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', marginBottom: '32px' }}>
            {saving ? 'Saving...' : 'Save and Continue'}
          </button>
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
          <a href="/dashboard/connect/linkedin" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888', textDecoration: 'none' }}>&larr; Back</a>
          <a href="/dashboard" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888', textDecoration: 'none' }}>Skip for now &rarr;</a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
