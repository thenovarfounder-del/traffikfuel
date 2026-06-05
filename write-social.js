const fs = require('fs')

const content = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'

const MESSAGES = [
  { icon: '\ud83d\udd25', text: 'Mike from Tampa just published 3 AI blogs this week' },
  { icon: '\u26a1', text: "Sarah\u2019s content reached 1,200 people this month" },
  { icon: '\ud83d\ude80', text: 'James upgraded to Pro and automated his entire marketing' },
  { icon: '\u2705', text: '47 businesses published content with Traffikora today' },
  { icon: '\ud83d\udcc8', text: 'Lisa from Orlando went from 0 to 8 blog posts in 30 days' },
]

export default function ProofWall() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % MESSAGES.length)
        setVisible(true)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const msg = MESSAGES[current]

  return (
    <div style={{ background: '#0a0a0a', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111', padding: '48px 40px', textAlign: 'center' }}>
      <style>{\`
        @keyframes proofFadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes proofPulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
      \`}</style>

      {/* Live indicator */}
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(232,97,10,0.08)', border: '1px solid rgba(232,97,10,0.25)', borderRadius: '30px', padding: '6px 16px', marginBottom: '28px' }}>
        <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#E8610A', animation: 'proofPulse 1.5s ease-in-out infinite' }} />
        <span style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif' }}>Live Activity</span>
      </div>

      {/* Cycling message */}
      <div style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        marginBottom: '36px',
        minHeight: '72px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
      }}>
        <div style={{ fontSize: '36px' }}>{msg.icon}</div>
        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#fff', lineHeight: 1.3, maxWidth: '560px' }}>
          {msg.text}
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '40px' }}>
        {MESSAGES.map((_, i) => (
          <div key={i} style={{ width: i === current ? '22px' : '7px', height: '7px', borderRadius: '4px', background: i === current ? '#E8610A' : '#2a2a2a', transition: 'all 0.4s ease' }} />
        ))}
      </div>

      {/* Urgency headline */}
      <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '10px' }}>
        Your competitors are already using AI.
        <em style={{ color: '#E8610A', fontStyle: 'italic', display: 'block' }}>Are you?</em>
      </div>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#888', marginBottom: '28px', fontWeight: 300 }}>
        Join businesses automating their marketing with Traffikora right now.
      </p>

      {/* CTA Button */}
      <a href="/signup" style={{
        display: 'inline-flex', alignItems: 'center', gap: '12px',
        background: 'linear-gradient(135deg, #E8610A, #C84E06)',
        color: '#fff', padding: '16px 36px', borderRadius: '8px',
        fontSize: '15px', fontWeight: 800, textDecoration: 'none',
        fontFamily: 'DM Sans, sans-serif',
        boxShadow: '0 4px 24px rgba(232,97,10,0.4)',
        position: 'relative', overflow: 'hidden'
      }}>
        <style>{\`
          @keyframes shimmer2 { 0%{left:-60%} 60%,100%{left:130%} }
          .proof-cta-shine::before { content:''; position:absolute; top:0; left:-60%; width:40%; height:100%; background:rgba(255,255,255,0.15); transform:skewX(-20deg); animation:shimmer2 3s ease-in-out infinite; }
        \`}</style>
        <span className="proof-cta-shine" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} />
        Start Free \u2014 No Credit Card Needed
        <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, flexShrink: 0 }}>\u2192</div>
      </a>

      <div style={{ marginTop: '14px', display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
        {['\u2713 Free plan forever', '\u2713 Live in 5 minutes', '\u2713 Cancel anytime'].map(note => (
          <span key={note} style={{ fontSize: '13px', color: '#555', fontFamily: 'DM Sans, sans-serif' }}>{note}</span>
        ))}
      </div>
    </div>
  )
}
`

fs.writeFileSync('C:\\\\Users\\\\randy\\\\traffikfuel\\\\src\\\\components\\\\ProofWall.tsx', content, 'utf8')
console.log('SUCCESS - ProofWall.tsx written')