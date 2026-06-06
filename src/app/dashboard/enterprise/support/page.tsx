// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function EnterpriseSupport() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [form, setForm] = useState({ subject: '', message: '', priority: 'normal' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    async function check() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data } = await supabase.from('users').select('status').eq('id', user.id).single()
      if (data?.status !== 'enterprise') { router.push('/pricing') }
    }
    check()
  }, [])

  async function send() {
    if (!form.subject || !form.message) return
    setSending(true)
    await new Promise(r => setTimeout(r, 1000))
    setSent(true)
    setSending(false)
  }

  const inputStyle = { width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }
  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 600, color: '#888', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.06em' }

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: isMobile ? '24px 16px' : '40px 32px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', color: '#a855f7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>Enterprise — Priority Support</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '36px', fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>Dedicated Account Manager</h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 300 }}>Direct access to your account manager. Response within 2 hours.</p>
        </div>

        {/* Account manager card */}
        <div style={{ background: 'linear-gradient(135deg,#0d0614,#111)', border: '1px solid #a855f730', borderRadius: '14px', padding: '24px', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg,#a855f7,#7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', flexShrink: 0 }}>
            👤
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Your Account Manager</div>
            <div style={{ fontSize: '13px', color: '#888', marginBottom: '4px' }}>Traffikora Enterprise Team</div>
            <div style={{ fontSize: '13px', color: '#a855f7', fontWeight: 600 }}>support@traffikora.com • Response ≤ 2 hours</div>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#22c55e18', border: '1px solid #22c55e35', borderRadius: '20px', padding: '6px 14px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: 700 }}>Online Now</span>
            </div>
          </div>
        </div>

        {/* SLA info */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '12px', marginBottom: '28px' }}>
          {[
            { icon: '⚡', label: 'Response Time', value: '< 2 Hours' },
            { icon: '📞', label: 'Priority Queue', value: 'First in Line' },
            { icon: '🛡️', label: 'SLA Uptime', value: '99.9%' },
            { icon: '📅', label: 'Availability', value: 'Mon–Fri' },
          ].map(item => (
            <div key={item.label} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
              <div style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '4px', fontWeight: 600 }}>{item.label}</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#a855f7' }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Contact form */}
        {sent ? (
          <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '14px', padding: '48px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Message sent!</div>
            <div style={{ fontSize: '14px', color: '#888' }}>Your account manager will respond within 2 hours.</div>
            <button onClick={() => { setSent(false); setForm({ subject: '', message: '', priority: 'normal' }) }} style={{ marginTop: '20px', background: 'transparent', border: '1px solid #2a2a2a', color: '#888', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>Send another</button>
          </div>
        ) : (
          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>Send a Message</div>
            <div>
              <label style={labelStyle}>Priority</label>
              <select value={form.priority} onChange={e => setForm(p => ({ ...p, priority: e.target.value }))} style={{ ...inputStyle }}>
                <option value="normal">Normal</option>
                <option value="high">High — Urgent Issue</option>
                <option value="critical">Critical — Platform Down</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Subject</label>
              <input value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} placeholder="What do you need help with?" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder="Describe your issue or question in detail..." style={{ ...inputStyle, minHeight: '140px', resize: 'vertical' }} />
            </div>
            <button onClick={send} disabled={sending || !form.subject || !form.message} style={{ background: sending ? '#444' : 'linear-gradient(135deg,#a855f7,#7c3aed)', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '14px', fontWeight: 700, cursor: sending ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
              {sending ? 'Sending...' : 'Send to Account Manager →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
