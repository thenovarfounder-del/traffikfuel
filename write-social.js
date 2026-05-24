const fs = require('fs')
const path = require('path')

const content = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function DashboardSettings() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Step 4 of 4</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Tell Us About Your Business</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>This helps Traffikora create content that matches your brand, industry, and customers.</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px', maxWidth: '720px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Business Name</label>
          <input type="text" placeholder="e.g. Randy\u2019s Auto Repair" style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
        </div>

        <div style={{ marginBottom: '32px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Business Category</label>
          <select style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', background: '#fff' }}>
            <option value="">Select your category...</option>
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
          <input type="text" placeholder="e.g. Tampa, FL" style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
        </div>

        <div style={{ marginBottom: '48px' }}>
          <label style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, display: 'block', marginBottom: '8px' }}>Website URL (optional)</label>
          <input type="text" placeholder="e.g. https://www.yourbusiness.com" style={{ width: '100%', padding: '14px 16px', fontSize: '16px', border: '2.5px solid #111', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
        </div>

        <Link href="/dashboard" style={{ display: 'block', width: '100%', background: '#E8610A', color: '#fff', padding: '20px', fontSize: '18px', fontWeight: 700, border: '2.5px solid #E8610A', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', textAlign: 'center', textDecoration: 'none', boxSizing: 'border-box' }}>
          Finish Setup \u2192
        </Link>
      </section>

      <Footer />
    </>
  )
}
`

fs.writeFileSync(path.join('src', 'app', 'dashboard', 'settings', 'page.tsx'), content)
console.log('Written: settings/page.tsx')