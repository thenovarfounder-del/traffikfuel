// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  async function handleSubmit() {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      })
      if (res.ok) setStatus('sent')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Contact Us</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>We’d love to hear from you.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>Questions, feedback, or just want to say hi — reach out and we’ll get back to you fast.</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          {status === 'sent' ? (
            <div style={{ textAlign: 'center', padding: '60px 32px', border: '2.5px solid #111' }}>
              <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>Message sent!</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#555' }}>We’ll get back to you within 1 business day.</p>
            </div>
          ) : (
            <div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#111', display: 'block', marginBottom: '8px' }}>Your Name</label>
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Jane Smith" style={{ width: '100%', padding: '14px 16px', border: '2.5px solid #111', fontSize: '16px', fontFamily: 'DM Sans, sans-serif', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#111', display: 'block', marginBottom: '8px' }}>Email Address</label>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="jane@yourbusiness.com" style={{ width: '100%', padding: '14px 16px', border: '2.5px solid #111', fontSize: '16px', fontFamily: 'DM Sans, sans-serif', outline: 'none', boxSizing: 'border-box' }} />
              </div>
              <div style={{ marginBottom: '32px' }}>
                <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#111', display: 'block', marginBottom: '8px' }}>Message</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="How can we help?" rows={6} style={{ width: '100%', padding: '14px 16px', border: '2.5px solid #111', fontSize: '16px', fontFamily: 'DM Sans, sans-serif', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }} />
              </div>
              <button onClick={handleSubmit} disabled={status === 'sending'} style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', fontSize: '17px', fontWeight: 700, border: '2.5px solid #111', cursor: 'pointer', width: '100%' }}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'error' && <p style={{ color: 'red', marginTop: '16px', fontFamily: 'DM Sans, sans-serif' }}>Something went wrong. Email us directly at support@traffikora.com</p>}
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', marginTop: '32px', textAlign: 'center' }}>Or email us directly: <a href="mailto:support@traffikora.com" style={{ color: '#E8610A' }}>support@traffikora.com</a></p>
            </div>
          )}
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to get started?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
