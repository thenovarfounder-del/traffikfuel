// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function AgencySettings() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({ agency_name: '', agency_logo_url: '', primary_color: '#E8610A', support_email: '', custom_domain: '' })

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data: userData } = await supabase.from('users').select('status').eq('id', user.id).single()
      if (userData?.status !== 'agency' && userData?.status !== 'enterprise') { router.push('/pricing'); return }
      const { data } = await supabase.from('agency_settings').select('*').eq('user_id', user.id).single()
      if (data) setForm({ agency_name: data.agency_name || '', agency_logo_url: data.logo_url || '', primary_color: data.primary_color || '#E8610A', support_email: data.support_email || '', custom_domain: data.custom_domain || '' })
    }
    load()
  }, [])

  async function save() {
    setSaving(true)
    const { data: { user } } = await supabase.auth.getUser()
    await supabase.from('agency_settings').upsert({ user_id: user.id, agency_name: form.agency_name, logo_url: form.agency_logo_url, primary_color: form.primary_color, support_email: form.support_email, custom_domain: form.custom_domain }, { onConflict: 'user_id' })
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
    setSaving(false)
  }

  const inputStyle = { width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }
  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 600, color: '#888', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.06em' }

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: isMobile ? '24px 16px' : '40px 32px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>White-Label Settings</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '36px', fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>Brand Your Dashboard</h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 300 }}>Customize how your clients see the platform.</p>
        </div>

        {saved && <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#22c55e' }}>✓ Settings saved successfully!</div>}

        <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={labelStyle}>Agency Name</label>
            <input value={form.agency_name} onChange={e => setForm(p => ({ ...p, agency_name: e.target.value }))} placeholder="Your Agency Name" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Logo URL</label>
            <input value={form.agency_logo_url} onChange={e => setForm(p => ({ ...p, agency_logo_url: e.target.value }))} placeholder="https://youragency.com/logo.png" style={inputStyle} />
            <div style={{ fontSize: '11px', color: '#555', marginTop: '6px' }}>Paste a direct link to your logo image.</div>
          </div>
          <div>
            <label style={labelStyle}>Primary Brand Color</label>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <input type="color" value={form.primary_color} onChange={e => setForm(p => ({ ...p, primary_color: e.target.value }))} style={{ width: '48px', height: '48px', borderRadius: '8px', border: '1px solid #2a2a2a', background: 'none', cursor: 'pointer', padding: '2px' }} />
              <input value={form.primary_color} onChange={e => setForm(p => ({ ...p, primary_color: e.target.value }))} placeholder="#E8610A" style={{ ...inputStyle, width: 'auto', flex: 1 }} />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Support Email</label>
            <input value={form.support_email} onChange={e => setForm(p => ({ ...p, support_email: e.target.value }))} placeholder="support@youragency.com" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Custom Domain (optional)</label>
            <input value={form.custom_domain} onChange={e => setForm(p => ({ ...p, custom_domain: e.target.value }))} placeholder="app.youragency.com" style={inputStyle} />
            <div style={{ fontSize: '11px', color: '#555', marginTop: '6px' }}>Contact support to activate custom domain routing.</div>
          </div>
          <button onClick={save} disabled={saving} style={{ background: saving ? '#444' : 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '14px', fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  )
}
