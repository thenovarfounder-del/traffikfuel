// @ts-nocheck
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function DashboardSettings() {
  const router = useRouter()
  const [businessName, setBusinessName] = useState('')
  const [category, setCategory] = useState('')
  const [city, setCity] = useState('')
  const [website, setWebsite] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit() {
    if (!businessName || !category || !city) {
      setError('Please fill in Business Name, Category, and City.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setError('Not logged in.'); setLoading(false); return }
      const { error: upsertError } = await supabase
        .from('business_settings')
        .upsert({
          user_id: user.id,
          business_name: businessName,
          category: category,
          city: city,
          website: website,
          updated_at: new Date().toISOString()
        }, { onConflict: 'user_id' })
      if (upsertError) { setError('Save failed: ' + upsertError.message); setLoading(false); return }
      router.push('/dashboard')
    } catch (e) {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <Nav />
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Business Setup</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Tell Us About Your Business</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>This helps Traffikora create content that matches your brand, industry, and customers.</p>
      </section>
      <section style={{ background: '#fff', padding: '80px 32px', maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Business Name</label>
          <input type='text' placeholder='e.g. Randy Auto Repair' value={businessName} onChange={e => setBusinessName(e.target.value)} style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '32px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Business Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }}>
            <option value=''>Select your category...</option>
            <option>Restaurant</option>
            <option>Dental Practice</option>
            <option>Real Estate</option>
            <option>Salon or Spa</option>
            <option>HVAC</option>
            <option>Plumbing</option>
            <option>Auto Repair</option>
            <option>Law Firm</option>
            <option>Chiropractic</option>
            <option>Marketing Agency</option>
            <option>Other</option>
          </select>
        </div>
        <div style={{ marginBottom: '32px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>City and State</label>
          <input type='text' placeholder='e.g. Tampa, FL' value={city} onChange={e => setCity(e.target.value)} style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
        </div>
        <div style={{ marginBottom: '48px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Website URL (optional)</label>
          <input type='text' placeholder='e.g. https://www.yourbusiness.com' value={website} onChange={e => setWebsite(e.target.value)} style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
        </div>
        {error && <p style={{ color: 'red', marginBottom: '16px', fontFamily: 'DM Sans, sans-serif' }}>{error}</p>}
        <button onClick={handleSubmit} disabled={loading} style={{ display: 'block', width: '100%', background: loading ? '#ccc' : '#E8610A', color: '#fff', padding: '20px', fontSize: '18px', fontWeight: 700, border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', textAlign: 'center', boxSizing: 'border-box' }}>
          {loading ? 'Saving...' : 'Finish Setup'}
        </button>
      </section>
      <Footer />
    </>
  )
}