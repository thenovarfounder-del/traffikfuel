// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) setSent(true)
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '10px',
    border: '1px solid #2a2a2a',
    backgroundColor: '#111',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'DM Sans, sans-serif',
    resize: 'vertical'
  }

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', fontFamily: 'DM Sans, sans-serif' }}>
      <Nav />

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', minHeight: 'calc(100vh - 64px)' }}>

        {/* LEFT PANEL */}
        {!isMobile && (
          <div style={{ background: '#111', padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '2px solid #1a1a1a' }}>
            <span style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '16px', display: 'block' }}>Contact Us</span>
            <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 700, lineHeight: 1.15, margin: '0 0 20px', color: '#fff' }}>
              We’d love to<br /><em style={{ color: '#E8610A', fontStyle: 'italic' }}>hear from you.</em>
            </h1>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.85, margin: '0 0 48px', fontWeight: 300 }}>
              Questions, feedback, or want to explore Enterprise? Reach out and we’ll get back to you fast.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { icon: '📧', label: 'Email', value: 'support@traffikora.com' },
                { icon: '💬', label: 'Live Chat', value: 'Available 24/7 via chat widget' },
                { icon: '⚡', label: 'Response Time', value: 'Usually within 2 hours' }
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(232,97,10,0.1)', border: '1px solid rgba(232,97,10,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#666', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ fontSize: '14px', color: '#ddd' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RIGHT PANEL — form */}
        <div style={{ padding: isMobile ? '40px 24px' : '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#0a0a0a' }}>
          <div style={{ maxWidth: '480px', width: '100%', margin: '0 auto' }}>

            {isMobile && (
              <div style={{ marginBottom: '32px' }}>
                <span style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', display: 'block', marginBottom: '10px' }}>Contact Us</span>
                <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#fff', lineHeight: 1.15, margin: 0 }}>
                  We’d love to<br /><em style={{ color: '#E8610A', fontStyle: 'italic' }}>hear from you.</em>
                </h1>
              </div>
            )}

            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, marginBottom: '12px', color: '#fff' }}>Message sent!</h2>
                <p style={{ color: '#888', fontSize: '15px' }}>We’ll get back to you within 2 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                  style={{ marginTop: '24px', padding: '12px 24px', borderRadius: '10px', border: '1px solid #2a2a2a', backgroundColor: 'transparent', color: '#888', cursor: 'pointer', fontSize: '14px', fontFamily: 'DM Sans, sans-serif' }}>
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div style={{ marginBottom: '32px' }}>
                  <span style={{ fontSize: '12px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', display: 'block', marginBottom: '8px' }}>Get In Touch</span>
                  <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, margin: 0, color: '#fff' }}>Send us a message</h2>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '6px' }}>Your Name</label>
                    <input style={inputStyle} placeholder="Jane Smith" value={form.name} onChange={e => update('name', e.target.value)} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '6px' }}>Email Address</label>
                    <input style={inputStyle} type="email" placeholder="jane@yourbusiness.com" value={form.email} onChange={e => update('email', e.target.value)} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#666', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '6px' }}>Message</label>
                    <textarea style={{ ...inputStyle, minHeight: '140px' }} placeholder="How can we help?" value={form.message} onChange={e => update('message', e.target.value)} />
                  </div>
                  <button onClick={handleSubmit} disabled={loading}
                    style={{ width: '100%', padding: '15px', borderRadius: '10px', border: 'none', background: loading ? '#333' : 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', fontSize: '15px', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', boxShadow: '0 4px 20px rgba(232,97,10,0.35)' }}>
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
