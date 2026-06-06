// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function EnterpriseVoice() {
  const router = useRouter()
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [selected, setSelected] = useState(null)
  const [voiceData, setVoiceData] = useState({ tone: '', keywords: '', avoid: '', sample: '' })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

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
      if (userData?.status !== 'enterprise') { router.push('/pricing'); return }
      const { data } = await supabase.from('agency_clients').select('*').eq('owner_id', user.id).order('created_at', { ascending: false })
      setClients(data || [])
      setLoading(false)
    }
    load()
  }, [])

  async function saveVoice() {
    if (!selected) return
    setSaving(true)
    await supabase.from('agency_clients').update({ business_type: selected.business_type }).eq('id', selected.id)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
    setSaving(false)
  }

  const inputStyle = { width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', resize: 'vertical' }
  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 600, color: '#888', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.06em' }

  if (loading) return <div style={{ minHeight: '100vh', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ color: '#E8610A' }}>Loading...</div></div>

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: isMobile ? '24px 16px' : '40px 32px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', color: '#a855f7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>Enterprise — Custom AI Voice</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '36px', fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>AI Voice Training</h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 300 }}>Train the AI to write in each client’s unique brand voice.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '280px 1fr', gap: '20px' }}>
          {/* Client selector */}
          <div>
            <div style={{ fontSize: '11px', color: '#555', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: '12px' }}>Select Client</div>
            {clients.length === 0 ? (
              <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', color: '#555', marginBottom: '12px' }}>No clients yet.</div>
                <Link href="/dashboard/agency" style={{ color: '#E8610A', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>Add clients →</Link>
              </div>
            ) : clients.map(client => (
              <div key={client.id} onClick={() => { setSelected(client); setVoiceData({ tone: '', keywords: '', avoid: '', sample: '' }); setSaved(false) }}
                style={{ background: selected?.id === client.id ? '#1a0800' : '#111', border: '1px solid ' + (selected?.id === client.id ? '#E8610A60' : '#1a1a1a'), borderRadius: '10px', padding: '14px 16px', marginBottom: '8px', cursor: 'pointer' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>{client.client_name}</div>
                <div style={{ fontSize: '11px', color: '#555' }}>{client.business_type || 'No type set'}</div>
              </div>
            ))}
          </div>

          {/* Voice editor */}
          <div>
            {!selected ? (
              <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '60px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>🧠</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Select a client</div>
                <div style={{ fontSize: '13px', color: '#555' }}>Choose a client on the left to configure their AI voice.</div>
              </div>
            ) : (
              <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '24px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>🎨 Voice Profile — {selected.client_name}</div>
                {saved && <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', padding: '10px 14px', marginBottom: '16px', fontSize: '13px', color: '#22c55e' }}>✓ Voice profile saved!</div>}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={labelStyle}>Brand Tone</label>
                    <input value={voiceData.tone} onChange={e => setVoiceData(p => ({ ...p, tone: e.target.value }))} placeholder="e.g. Professional, friendly, authoritative..." style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Key Brand Keywords</label>
                    <input value={voiceData.keywords} onChange={e => setVoiceData(p => ({ ...p, keywords: e.target.value }))} placeholder="e.g. trusted, local, expert, fast..." style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Words/Phrases to Avoid</label>
                    <input value={voiceData.avoid} onChange={e => setVoiceData(p => ({ ...p, avoid: e.target.value }))} placeholder="e.g. cheap, discount, generic..." style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Sample Content (optional)</label>
                    <textarea value={voiceData.sample} onChange={e => setVoiceData(p => ({ ...p, sample: e.target.value }))} placeholder="Paste a sample of their existing content so the AI can learn their voice..." style={{ ...inputStyle, minHeight: '120px' }} />
                  </div>
                  <button onClick={saveVoice} disabled={saving} style={{ background: saving ? '#444' : 'linear-gradient(135deg,#a855f7,#7c3aed)', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '14px', fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                    {saving ? 'Saving...' : 'Save Voice Profile'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
