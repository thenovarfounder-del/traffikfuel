// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function DashboardSettings() {
  const router = useRouter()
  const [businessName, setBusinessName] = useState('')
  const [industry, setIndustry] = useState('')
  const [city, setCity] = useState('')
  const [website, setWebsite] = useState('')
  const [autoMode, setAutoMode] = useState(false)
  const [platforms, setPlatforms] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    async function loadProfile() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase
        .from('business_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single()
      if (data) {
        setBusinessName(data.business_name || '')
        setIndustry(data.industry || '')
        setCity(data.phone || '')
        setWebsite(data.website || '')
        setAutoMode(data.auto_mode || false)
        setPlatforms(data.platforms || [])
      }
    }
    loadProfile()
  }, [])

  async function handleSubmit() {
    if (!businessName || !industry || !city) {
      setError('Please fill in Business Name, Category, and City.')
      return
    }
    setLoading(true)
    setError('')
    setSuccess('')
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { setError('Not logged in.'); setLoading(false); return }
      const { error: upsertError } = await supabase
        .from('business_profiles')
        .upsert({
          user_id: user.id,
          business_name: businessName,
          industry: industry,
          website: website,
          phone: city,
          auto_mode: autoMode,
          platforms: platforms,
        }, { onConflict: 'user_id' })
      if (upsertError) { setError('Save failed: ' + upsertError.message); setLoading(false); return }
      setSuccess('Settings saved!')
      setTimeout(() => setSuccess(''), 3000)
    } catch (e) {
      setError('Something went wrong. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f9fafb', padding: '40px 24px', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#111', marginBottom: '4px' }}>Business Settings</h1>
        <p style={{ color: '#666', marginBottom: '32px', fontSize: '15px' }}>This information is used to personalize all your generated content.</p>

        <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', marginBottom: '24px' }}>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#333', fontSize: '14px' }}>Business Name</label>
            <input type='text' placeholder='e.g. Randy Auto Repair' value={businessName} onChange={e => setBusinessName(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }} />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#333', fontSize: '14px' }}>Business Category</label>
            <select value={industry} onChange={e => setIndustry(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif', background: '#fff' }}>
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

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#333', fontSize: '14px' }}>City and State</label>
            <input type='text' placeholder='e.g. Tampa, FL' value={city} onChange={e => setCity(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }} />
          </div>

          <div style={{ marginBottom: '32px' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', color: '#333', fontSize: '14px' }}>Website URL (optional)</label>
            <input type='text' placeholder='e.g. https://www.yourbusiness.com' value={website} onChange={e => setWebsite(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif' }} />
          </div>

          <div style={{ borderTop: '1px solid #eee', paddingTop: '24px', marginBottom: '24px' }}>
            <p style={{ fontWeight: '700', color: '#111', marginBottom: '4px', fontSize: '15px' }}>My Social Platforms</p>
            <p style={{ fontSize: '13px', color: '#666', marginBottom: '16px' }}>Select the platforms you use so your calendar only shows relevant options.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
              {[
                { id: 'facebook', label: 'Facebook', color: '#1877F2' },
                { id: 'instagram', label: 'Instagram', color: '#E1306C' },
                { id: 'tiktok', label: 'TikTok', color: '#010101' },
                { id: 'twitter', label: 'X / Twitter', color: '#000000' },
                { id: 'linkedin', label: 'LinkedIn', color: '#0A66C2' },
                { id: 'google', label: 'Google Business', color: '#4285F4' },
                { id: 'wordpress', label: 'WordPress', color: '#21759B' },
              ].map(p => (
                <div
                  key={p.id}
                  onClick={() => setPlatforms(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])}
                  style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderRadius: '20px', border: '2px solid ' + (platforms.includes(p.id) ? p.color : '#e5e7eb'), background: platforms.includes(p.id) ? p.color + '15' : '#fff', cursor: 'pointer', transition: 'all 0.15s' }}
                >
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: p.color }} />
                  <span style={{ fontSize: '13px', fontWeight: '600', color: platforms.includes(p.id) ? p.color : '#666' }}>{p.label}</span>
                  {platforms.includes(p.id) && <span style={{ fontSize: '12px', color: p.color }}>✓</span>}
                </div>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid #eee', paddingTop: '24px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontWeight: '700', color: '#111', marginBottom: '4px', fontSize: '15px' }}>Publishing Mode</p>
                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>{autoMode ? 'Auto Mode -- Content publishes automatically without review' : 'Manual Mode -- You approve each post before it publishes'}</p>
              </div>
              <div
                onClick={() => setAutoMode(!autoMode)}
                style={{ width: '52px', height: '28px', borderRadius: '14px', background: autoMode ? '#E8610A' : '#ccc', cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}
              >
                <div style={{ position: 'absolute', top: '3px', left: autoMode ? '27px' : '3px', width: '22px', height: '22px', borderRadius: '50%', background: '#fff', transition: 'left 0.2s', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
              </div>
            </div>
          </div>

          {error && <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', padding: '12px', marginBottom: '16px', color: '#dc2626', fontSize: '14px' }}>{error}</div>}
          {success && <div style={{ background: '#f0fff4', border: '1px solid #86efac', borderRadius: '8px', padding: '12px', marginBottom: '16px', color: '#166534', fontSize: '14px' }}>{success}</div>}

          <button onClick={handleSubmit} disabled={loading} style={{ width: '100%', padding: '12px', background: loading ? '#ccc' : '#E8610A', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            {loading ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  )
}
