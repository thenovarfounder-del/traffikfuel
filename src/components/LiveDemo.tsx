// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'

const demos = [
  { color: '#E8610A', label: 'BLOG POST — WordPress', content: '5 HVAC Tips for Tampa Homeowners This Summer', meta: 'SEO optimized · 900 words · Schema injected' },
  { color: '#1877F2', label: 'FACEBOOK — Published', content: 'Summer is here! Is your AC ready? We’re booking fast...', meta: 'Engagement optimized · Posted 2 min ago' },
  { color: '#E1306C', label: 'INSTAGRAM — Published', content: 'Beat the heat! Our team is ready for same-day AC repair...', meta: 'Hashtags added · Story variant generated' },
  { color: '#10A37F', label: 'CHATGPT — Citation Detected', content: 'Best HVAC in Tampa — Your business recommended', meta: 'LLM Engine active · AI citation confirmed' },
  { color: '#0A66C2', label: 'LINKEDIN — Published', content: 'Why proactive HVAC maintenance saves businesses thousands...', meta: 'B2B optimized · 847 impressions' },
  { color: '#FF0000', label: 'YOUTUBE SHORT — Uploaded', content: 'Top 3 Signs Your AC Needs Repair Before Summer', meta: '1.2K views · Trending in Tampa' },
  { color: '#010101', label: 'TIKTOK — Posted', content: 'POV: Your AC breaks in Tampa summer heat — we fix it fast', meta: '3.4K views · 124 shares' },
  { color: '#4285F4', label: 'GOOGLE — Indexed', content: 'Best HVAC Repair Tampa FL — new blog post indexed', meta: 'Position #3 · 240 impressions today' },
]

export default function LiveDemo() {
  const [demoIndex, setDemoIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => setDemoIndex(i => (i + 1) % 8), 2000)
    return () => clearInterval(interval)
  }, [])

  const visible = mounted
    ? demos.slice(demoIndex, demoIndex + 4).concat(
        demoIndex + 4 > demos.length ? demos.slice(0, (demoIndex + 4) % demos.length) : []
      ).slice(0, 4)
    : demos.slice(0, 4)

  return (
    <div style={{ background: '#0f0f0f', border: '1px solid #2a2a2a', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 0 40px rgba(232,97,10,0.12)' }}>
      <div style={{ background: '#1a1a1a', borderBottom: '1px solid #2a2a2a', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
        <span style={{ flex: 1, background: '#111', borderRadius: '4px', padding: '3px 10px', fontSize: '10px', color: '#555', margin: '0 8px' }}>traffikora.com — AI generating content...</span>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E8610A', display: 'inline-block' }} />
      </div>
      <div style={{ padding: '16px' }}>
        <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>⚡ Live Content Generation</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {visible.map((d, i) => (
            <div key={i} style={{ background: '#141414', border: '1px solid #1e1e1e', borderRadius: '8px', padding: '10px 14px' }}>
              <div style={{ fontSize: '10px', color: d.color, fontWeight: 700, marginBottom: '4px' }}>✓ {d.label}</div>
              <div style={{ fontSize: '12px', color: '#ccc' }}>{d.content}</div>
              <div style={{ fontSize: '10px', color: '#555', marginTop: '3px' }}>{d.meta}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '11px', color: '#555' }}>Running automatically · 24/7 · Zero manual work</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#22c55e', fontWeight: 700 }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            LIVE
          </span>
        </div>
      </div>
    </div>
  )
}
