// @ts-nocheck
'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit() {
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setSent(true)
    setLoading(false)
  }

  const inputStyle = {
    width: '100%',
    padding: '16px 20px',
    borderRadius: '12px',
    border: '1px solid #2a2a2a',
    backgroundColor: '#111',
    color: '#fff',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'system-ui, sans-serif',
    resize: 'vertical'
  }

  const labelStyle = {
    display: 'block',
    fontSize: '12px',
    fontWeight: '600',
    color: '#94a3b8',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    marginBottom: '8px'
  }

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <Nav />
      <div style={{ color: '#fff', fontFamily: 'system-ui, sans-serif', backgroundColor: '#0a0a0a' }}>

        <div style={{ display: 'flex', minHeight: 'calc(100vh - 80px)' }}>

          {/* LEFT PANEL */}
          <div style={{ width: '45%', background: 'linear-gradient(135deg, #0a0a0a 0%, #111 50%, #0f0a00 100%)', padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>

            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, #f9731615 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, #f9731608 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '20px' }}>CONTACT US</div>
            <h1 style={{ fontSize: '42px', fontWeight: '300', lineHeight: '1.2', margin: '0 0 24px 0', color: '#fff', fontFamily: 'Georgia, serif' }}>
              We'd love to<br />
              <em style={{ color: '#f97316', fontStyle: 'italic' }}>hear from you.</em>
            </h1>
            <p style={{ fontSize: '16px', color: '#64748b', lineHeight: '1.7', margin: '0 0 48px 0' }}>
              Questions, feedback, or just want to say hi -- reach out and we'll get back to you fast.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { icon: '📧', label: 'Email', value: 'support@traffikora.com' },
                { icon: '💬', label: 'Live Chat', value: 'Available 24/7 via chat widget' },
                { icon: '⚡', label: 'Response Time', value: 'Usually within 2 hours' }
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: '#f9731615', border: '1px solid #f9731630', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ fontSize: '14px', color: '#e2e8f0' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div style={{ flex: 1, padding: '80px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#0a0a0a' }}>
            <div style={{ maxWidth: '480px', width: '100%', margin: '0 auto' }}>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '60px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>✅</div>
                  <h2 style={{ fontSize: '28px', fontWeight: '300', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>Message sent!</h2>
                  <p style={{ color: '#64748b', fontSize: '15px' }}>We'll get back to you within 2 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }) }}
                    style={{ marginTop: '24px', padding: '12px 24px', borderRadius: '10px', border: '1px solid #2a2a2a', backgroundColor: 'transparent', color: '#94a3b8', cursor: 'pointer', fontSize: '14px' }}>
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: '40px' }}>
                    <div style={{ fontSize: '12px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>Get In Touch</div>
                    <h2 style={{ fontSize: '32px', fontWeight: '300', margin: '0', fontFamily: 'Georgia, serif' }}>Send us a message</h2>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <label style={labelStyle}>Your Name</label>
                      <input style={inputStyle} placeholder="Jane Smith" value={form.name} onChange={e => update('name', e.target.value)} />
                    </div>
                    <div>
                      <label style={labelStyle}>Email Address</label>
                      <input style={inputStyle} type="email" placeholder="jane@yourbusiness.com" value={form.email} onChange={e => update('email', e.target.value)} />
                    </div>
                    <div>
                      <label style={labelStyle}>Message</label>
                      <textarea style={{ ...inputStyle, minHeight: '140px' }} placeholder="How can we help?" value={form.message} onChange={e => update('message', e.target.value)} />
                    </div>
                    <button onClick={handleSubmit} disabled={loading}
                      style={{ width: '100%', padding: '16px', borderRadius: '12px', border: 'none', background: loading ? '#333' : 'linear-gradient(135deg, #f97316, #ea6a0a)', color: '#fff', fontSize: '15px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer' }}>
                      {loading ? 'Sending...' : 'Send Message →'}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}
