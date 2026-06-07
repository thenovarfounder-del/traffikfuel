// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function AffiliatesPage() {
  const [isMobile, setIsMobile] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', website: '', social_links: '', audience_size: '', how_promote: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  async function apply() {
    if (!form.name || !form.email || !form.how_promote) { setError('Please fill in all required fields.'); return }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/affiliates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (data.success) { setSent(true) }
      else { setError(data.error || 'Something went wrong.') }
    } catch { setError('Something went wrong. Please try again.') }
    setLoading(false)
  }

  const inputStyle = { width: '100%', background: '#111', border: '1px solid #222', borderRadius: '8px', color: '#fff', padding: '13px 16px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }
  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 700, color: '#555', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.08em' }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', fontFamily: 'DM Sans, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
        @keyframes ringpulse { 0%{transform:scale(1);opacity:.8} 100%{transform:scale(2.4);opacity:0} }
      `}</style>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#111', borderBottom: '2px solid #1a1a1a', padding: isMobile ? '60px 24px' : '100px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,97,10,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(232,97,10,0.08)', border: '1px solid rgba(232,97,10,0.25)', borderRadius: '40px', padding: '6px 16px', marginBottom: '24px' }}>
          <span style={{ position: 'relative', width: '8px', height: '8px', flexShrink: 0 }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8610A', position: 'absolute', top: '1px', left: '1px', display: 'block' }} />
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1.5px solid #E8610A', position: 'absolute', top: 0, left: 0, animation: 'ringpulse 2s ease-out infinite', opacity: 0, display: 'block' }} />
          </span>
          <span style={{ fontSize: '12px', fontWeight: 700, color: '#E8610A' }}>Affiliate Program Now Open</span>
        </div>
        <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: isMobile ? '28px' : '52px', fontWeight: 900, color: '#fff', letterSpacing: '1px', lineHeight: 1.1, marginBottom: '16px' }}>
          GET PAID TO<br /><span style={{ color: '#E8610A' }}>SHARE TRAFFIKORA</span>
        </h1>
        <p style={{ fontSize: isMobile ? '15px' : '18px', color: '#888', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.8, fontWeight: 300 }}>
          Earn 30% recurring commission every single month for every business you refer. No cap. No expiry. Real cash to your account.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#apply" style={{ background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '16px 36px', borderRadius: '8px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', boxShadow: '0 4px 24px rgba(232,97,10,0.4)' }}>Apply Now — Free →</a>
          <a href="#how" style={{ background: 'transparent', color: '#fff', padding: '15px 36px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', border: '1px solid #2a2a2a' }}>See Commission Structure</a>
        </div>
      </section>

      {/* COMMISSION STATS */}
      <section style={{ padding: isMobile ? '48px 24px' : '80px 40px', background: '#0a0a0a' }} id="how">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', display: 'block', marginBottom: '12px' }}>The Numbers</span>
            <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: isMobile ? '22px' : '36px', fontWeight: 900, color: '#fff', letterSpacing: '1px' }}>REAL MONEY. <span style={{ color: '#E8610A' }}>EVERY MONTH.</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '16px', marginBottom: '48px' }}>
            {[
              { num: '30%', label: 'Recurring Commission', sub: 'Every month, forever' },
              { num: '90', label: 'Day Cookie Window', sub: 'Longest in the industry' },
              { num: '$0', label: 'Cost to Join', sub: 'Free forever' },
              { num: '∞', label: 'Earning Cap', sub: 'No limits ever' },
            ].map(s => (
              <div key={s.num} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '28px 20px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '36px', fontWeight: 900, color: '#E8610A', marginBottom: '8px' }}>{s.num}</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{s.label}</div>
                <div style={{ fontSize: '11px', color: '#555', fontWeight: 300 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* EARNINGS TABLE */}
          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', overflow: 'hidden', marginBottom: '48px' }}>
            <div style={{ background: '#E8610A', padding: '16px 24px' }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>What You Can Earn</div>
            </div>
            {[
              { ref: '5 referrals', plan: 'Starter $47/mo', monthly: '$70.50/mo', annual: '$846/yr' },
              { ref: '10 referrals', plan: 'Pro $97/mo', monthly: '$291/mo', annual: '$3,492/yr' },
              { ref: '25 referrals', plan: 'Pro $97/mo', monthly: '$727.50/mo', annual: '$8,730/yr' },
              { ref: '10 referrals', plan: 'Agency $297/mo', monthly: '$891/mo', annual: '$10,692/yr' },
              { ref: '5 referrals', plan: 'Enterprise $997/mo', monthly: '$1,495.50/mo', annual: '$17,946/yr' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '14px 24px', borderBottom: '1px solid #1a1a1a', background: i % 2 === 0 ? '#0d0d0d' : '#111' }}>
                <div style={{ fontSize: '13px', color: '#fff', fontWeight: 600 }}>{row.ref}</div>
                <div style={{ fontSize: '13px', color: '#888' }}>{row.plan}</div>
                <div style={{ fontSize: '13px', color: '#E8610A', fontWeight: 700 }}>{row.monthly}</div>
                <div style={{ fontSize: '13px', color: '#22c55e', fontWeight: 700 }}>{row.annual}</div>
              </div>
            ))}
          </div>

          {/* HOW IT WORKS */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '16px' }}>
            {[
              { num: '1', title: 'Apply & Get Approved', desc: 'Fill out the application below. We review within 48 hours and send your affiliate kit.' },
              { num: '2', title: 'Share Your Link', desc: 'Get your unique tracking link, co-branded landing page, and marketing materials.' },
              { num: '3', title: 'Get Paid Monthly', desc: 'Every paying referral earns you 30% recurring. Paid on the 1st of every month.' },
            ].map(step => (
              <div key={step.num} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '28px 24px', textAlign: 'center' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#E8610A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Orbitron, sans-serif', fontSize: '18px', fontWeight: 900, color: '#fff', margin: '0 auto 16px' }}>{step.num}</div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>{step.title}</div>
                <div style={{ fontSize: '13px', color: '#555', lineHeight: 1.7, fontWeight: 300 }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section style={{ padding: isMobile ? '48px 24px' : '80px 40px', background: '#111', borderTop: '2px solid #1a1a1a' }} id="apply">
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', display: 'block', marginBottom: '12px' }}>Apply Now</span>
            <h2 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: isMobile ? '20px' : '28px', fontWeight: 900, color: '#fff', letterSpacing: '1px' }}>JOIN THE <span style={{ color: '#E8610A' }}>AFFILIATE PROGRAM</span></h2>
            <p style={{ fontSize: '14px', color: '#666', marginTop: '12px', fontWeight: 300 }}>Free to join. Approved within 48 hours. Start earning immediately.</p>
          </div>

          {sent ? (
            <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '14px', padding: '48px', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '20px', fontWeight: 900, color: '#22c55e', marginBottom: '8px' }}>APPLICATION RECEIVED!</div>
              <div style={{ fontSize: '14px', color: '#888' }}>We’ll review your application and reach out within 48 hours.</div>
            </div>
          ) : (
            <div style={{ background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: '14px', padding: isMobile ? '24px' : '36px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '12px 16px', fontSize: '13px', color: '#f87171' }}>{error}</div>}
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input value={form.name} onChange={e => setForm(p => ({...p, name: e.target.value}))} placeholder="Your name" style={inputStyle} onFocus={e => e.target.style.borderColor='#E8610A'} onBlur={e => e.target.style.borderColor='#222'} />
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input type="email" value={form.email} onChange={e => setForm(p => ({...p, email: e.target.value}))} placeholder="you@example.com" style={inputStyle} onFocus={e => e.target.style.borderColor='#E8610A'} onBlur={e => e.target.style.borderColor='#222'} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Website or Blog</label>
                <input value={form.website} onChange={e => setForm(p => ({...p, website: e.target.value}))} placeholder="https://yourwebsite.com" style={inputStyle} onFocus={e => e.target.style.borderColor='#E8610A'} onBlur={e => e.target.style.borderColor='#222'} />
              </div>
              <div>
                <label style={labelStyle}>Social Media Links</label>
                <input value={form.social_links} onChange={e => setForm(p => ({...p, social_links: e.target.value}))} placeholder="YouTube, Instagram, TikTok, LinkedIn URLs" style={inputStyle} onFocus={e => e.target.style.borderColor='#E8610A'} onBlur={e => e.target.style.borderColor='#222'} />
              </div>
              <div>
                <label style={labelStyle}>Audience Size</label>
                <select value={form.audience_size} onChange={e => setForm(p => ({...p, audience_size: e.target.value}))} style={{...inputStyle}}>
                  <option value="">Select your reach</option>
                  <option value="Under 1K">Under 1,000 followers</option>
                  <option value="1K-10K">1,000 — 10,000</option>
                  <option value="10K-50K">10,000 — 50,000</option>
                  <option value="50K-100K">50,000 — 100,000</option>
                  <option value="100K-500K">100,000 — 500,000</option>
                  <option value="500K+">500,000+</option>
                </select>
              </div>
              <div>
                <label style={labelStyle}>How will you promote Traffikora? *</label>
                <textarea value={form.how_promote} onChange={e => setForm(p => ({...p, how_promote: e.target.value}))} placeholder="Tell us about your audience and how you plan to promote Traffikora..." style={{...inputStyle, minHeight: '120px', resize: 'vertical'}} onFocus={e => e.target.style.borderColor='#E8610A'} onBlur={e => e.target.style.borderColor='#222'} />
              </div>
              <button onClick={apply} disabled={loading} style={{ background: loading ? '#333' : 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', border: 'none', borderRadius: '8px', padding: '15px', fontSize: '15px', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', boxShadow: loading ? 'none' : '0 4px 24px rgba(232,97,10,0.4)' }}>
                {loading ? 'Submitting...' : 'Submit Application →'}
              </button>
              <p style={{ fontSize: '11px', color: '#333', textAlign: 'center' }}>Free to join. No contracts. Cancel anytime.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
