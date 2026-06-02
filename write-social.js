const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/pricing/page.tsx', 'utf8')

const oldImport = `import Nav from '@/components/Nav'
import Footer from '@/components/Footer'`

const newImport = `import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useState } from 'react'`

content = content.replace(oldImport, newImport)

const oldExport = `export default function Pricing() {
  return (`

const newExport = `export default function Pricing() {
  const [spend, setSpend] = useState(2000)
  const savings = spend - 97
  const annualSavings = savings * 12
  const roi = Math.round((savings / 97) * 100)

  return (`

content = content.replace(oldExport, newExport)

const oldGrid = `        {/* PRICING GRID */}`

const newROI = `        {/* ROI CALCULATOR */}
        <div style={{ maxWidth: '900px', margin: '0 auto 80px', padding: '0 32px' }}>
          <div style={{ backgroundColor: '#111', borderRadius: '20px', border: '1px solid #f9731630', padding: '48px', background: 'linear-gradient(135deg, #111 0%, #0f0a00 100%)' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '12px' }}>ROI Calculator</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: '700', color: '#fff', margin: '0 0 12px 0' }}>
                How much are you <em style={{ color: '#f97316', fontStyle: 'italic' }}>overpaying?</em>
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '15px', margin: 0 }}>Drag the slider to see your savings with Traffikora Pro at $97/mo</p>
            </div>

            <div style={{ marginBottom: '40px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <label style={{ fontSize: '14px', color: '#94a3b8', fontWeight: '600' }}>Your current monthly marketing spend</label>
                <span style={{ fontSize: '24px', fontWeight: '800', color: '#f97316', fontFamily: "'Playfair Display', serif" }}>\${spend.toLocaleString()}/mo</span>
              </div>
              <input
                type="range"
                min="500"
                max="10000"
                step="100"
                value={spend}
                onChange={e => setSpend(Number(e.target.value))}
                style={{ width: '100%', height: '6px', accentColor: '#f97316', cursor: 'pointer' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#475569', marginTop: '6px' }}>
                <span>$500/mo</span>
                <span>$10,000/mo</span>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
              <div style={{ backgroundColor: '#0a0a0a', borderRadius: '12px', border: '1px solid #1a1a1a', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>You currently pay</div>
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#ef4444', fontFamily: "'Playfair Display', serif" }}>\${spend.toLocaleString()}</div>
                <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>per month</div>
              </div>
              <div style={{ backgroundColor: '#0a0a0a', borderRadius: '12px', border: '1px solid #f9731630', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>With Traffikora Pro</div>
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#f97316', fontFamily: "'Playfair Display', serif" }}>$97</div>
                <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>per month</div>
              </div>
              <div style={{ backgroundColor: '#0a0a0a', borderRadius: '12px', border: '1px solid #22c55e30', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px' }}>You save</div>
                <div style={{ fontSize: '36px', fontWeight: '800', color: '#22c55e', fontFamily: "'Playfair Display', serif" }}>\${savings.toLocaleString()}</div>
                <div style={{ fontSize: '12px', color: '#475569', marginTop: '4px' }}>per month</div>
              </div>
            </div>

            <div style={{ backgroundColor: '#0a0a0a', borderRadius: '12px', border: '1px solid #1a1a1a', padding: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
              <div>
                <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Annual savings with Traffikora</div>
                <div style={{ fontSize: '32px', fontWeight: '800', color: '#22c55e', fontFamily: "'Playfair Display', serif" }}>\${annualSavings.toLocaleString()} saved per year</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '4px' }}>Return on investment</div>
                <div style={{ fontSize: '32px', fontWeight: '800', color: '#f97316', fontFamily: "'Playfair Display', serif" }}>{roi}x ROI</div>
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <a href="/signup?plan=pro" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: '12px', background: 'linear-gradient(135deg, #f97316, #ea6a0a)', color: '#fff', fontSize: '16px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 20px rgba(232,97,10,0.4)' }}>
                Start Saving \${savings.toLocaleString()}/mo Today \u2192
              </a>
              <p style={{ fontSize: '13px', color: '#475569', marginTop: '12px' }}>No credit card required \u2022 Cancel anytime \u2022 Live in 5 minutes</p>
            </div>
          </div>
        </div>

        {/* PRICING GRID */}`

content = content.replace(oldGrid, newROI)
fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/pricing/page.tsx', content)
console.log('SUCCESS: ROI Calculator added to pricing page')