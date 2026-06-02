// @ts-nocheck
'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function VsHubSpot() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <Nav />
      <div style={{ textAlign: 'center', padding: '100px 32px 60px', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.18em', marginBottom: '16px' }}>Comparison</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '56px', fontWeight: '700', margin: '0 0 16px 0', letterSpacing: '-2px', color: '#fff', lineHeight: 1.1 }}>
          Traffikora vs <em style={{ color: '#f97316', fontStyle: 'italic' }}>HubSpot</em>
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', margin: '0 auto 32px', maxWidth: '600px', lineHeight: '1.75' }}>
          HubSpot charges $800-$3,200/mo and requires a dedicated marketing team to operate. Most small businesses use 10% of its features and pay for 100% of the cost.
        </p>
        <Link href="/signup" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: '12px', background: 'linear-gradient(135deg, #f97316, #ea6a0a)', color: '#fff', fontSize: '16px', fontWeight: '700', textDecoration: 'none' }}>
          Start Free — No Credit Card Needed →
        </Link>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto 80px', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
          <div style={{ backgroundColor: '#111', borderRadius: '16px', border: '1px solid #f97316', overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(135deg, #f97316, #ea6a0a)', padding: '20px 24px' }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Winner</div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: '#fff' }}>Traffikora</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginTop: '4px' }}>Starts free — Pro at $97/mo</div>
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', fontSize: '14px', color: '#ddd', lineHeight: '1.5' }}>
                <span style={{ color: '#22c55e', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>✓</span>
                <span>Starts free — no credit card ever needed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', fontSize: '14px', color: '#ddd', lineHeight: '1.5' }}>
                <span style={{ color: '#22c55e', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>✓</span>
                <span>Built specifically for small business owners</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', fontSize: '14px', color: '#ddd', lineHeight: '1.5' }}>
                <span style={{ color: '#22c55e', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>✓</span>
                <span>AI runs everything automatically — no team needed</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', fontSize: '14px', color: '#ddd', lineHeight: '1.5' }}>
                <span style={{ color: '#22c55e', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>✓</span>
                <span>Live in 5 minutes vs weeks of HubSpot onboarding</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', fontSize: '14px', color: '#ddd', lineHeight: '1.5' }}>
                <span style={{ color: '#22c55e', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>✓</span>
                <span>Optimizes for AI engines — ChatGPT, Claude, Gemini</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', fontSize: '14px', color: '#ddd', lineHeight: '1.5' }}>
                <span style={{ color: '#22c55e', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>✓</span>
                <span>No contracts — cancel in one click</span>
              </div></div>
          </div>
          <div style={{ backgroundColor: '#111', borderRadius: '16px', border: '1px solid #2a2a2a', overflow: 'hidden' }}>
            <div style={{ backgroundColor: '#1a1a1a', padding: '20px 24px' }}>
              <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Competitor</div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: '#fff' }}>HubSpot</div>
              <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>From $800+/mo</div>
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', fontSize: '14px', color: '#94a3b8', lineHeight: '1.5' }}>
                <span style={{ color: '#64748b', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>•</span>
                <span>Better CRM and sales pipeline tools</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', fontSize: '14px', color: '#94a3b8', lineHeight: '1.5' }}>
                <span style={{ color: '#64748b', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>•</span>
                <span>More enterprise integrations</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '14px', fontSize: '14px', color: '#94a3b8', lineHeight: '1.5' }}>
                <span style={{ color: '#64748b', fontWeight: '700', fontSize: '16px', flexShrink: 0 }}>•</span>
                <span>Larger support team</span>
              </div>
              <div style={{ marginTop: '16px', padding: '14px', backgroundColor: '#0a0a0a', borderRadius: '8px', fontSize: '13px', color: '#64748b', fontStyle: 'italic' }}>
                Built for enterprise sales teams. Overwhelming for small businesses.
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#111', borderRadius: '16px', border: '1px solid #f9731630', padding: '32px', marginBottom: '48px', background: 'linear-gradient(135deg, #111 0%, #0f0a00 100%)' }}>
          <div style={{ fontSize: '11px', color: '#f97316', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>Our Verdict</div>
          <p style={{ fontSize: '16px', color: '#ddd', lineHeight: '1.8', margin: 0 }}>If you run a small business and need automated marketing without a team or a massive budget, Traffikora wins every time. HubSpot is built for companies with dedicated marketing departments.</p>
        </div>

        <div style={{ textAlign: 'center', padding: '48px', backgroundColor: '#111', borderRadius: '16px', border: '1px solid #1a1a1a' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: '700', margin: '0 0 16px 0' }}>
            Ready to switch to <em style={{ color: '#f97316', fontStyle: 'italic' }}>Traffikora?</em>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', margin: '0 0 28px 0' }}>Start free today. No credit card. Live in 5 minutes.</p>
          <Link href="/signup" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: '12px', background: 'linear-gradient(135deg, #f97316, #ea6a0a)', color: '#fff', fontSize: '16px', fontWeight: '700', textDecoration: 'none', marginRight: '16px' }}>
            Start Free Today →
          </Link>
          <Link href="/pricing" style={{ display: 'inline-block', padding: '16px 40px', borderRadius: '12px', border: '1px solid #2a2a2a', color: '#aaa', fontSize: '16px', fontWeight: '700', textDecoration: 'none' }}>
            View Pricing
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
