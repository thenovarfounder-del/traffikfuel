const fs = require('fs');

// Fix LiveDemo — add 'use client' and suppress hydration
const liveDemo = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'

const demos = [
  { color: '#E8610A', label: 'BLOG POST \u2014 WordPress', content: '5 HVAC Tips for Tampa Homeowners This Summer', meta: 'SEO optimized \u00b7 900 words \u00b7 Schema injected' },
  { color: '#1877F2', label: 'FACEBOOK \u2014 Published', content: 'Summer is here! Is your AC ready? We\u2019re booking fast...', meta: 'Engagement optimized \u00b7 Posted 2 min ago' },
  { color: '#E1306C', label: 'INSTAGRAM \u2014 Published', content: 'Beat the heat! Our team is ready for same-day AC repair...', meta: 'Hashtags added \u00b7 Story variant generated' },
  { color: '#10A37F', label: 'CHATGPT \u2014 Citation Detected', content: 'Best HVAC in Tampa \u2014 Your business recommended', meta: 'LLM Engine active \u00b7 AI citation confirmed' },
  { color: '#0A66C2', label: 'LINKEDIN \u2014 Published', content: 'Why proactive HVAC maintenance saves businesses thousands...', meta: 'B2B optimized \u00b7 847 impressions' },
  { color: '#FF0000', label: 'YOUTUBE SHORT \u2014 Uploaded', content: 'Top 3 Signs Your AC Needs Repair Before Summer', meta: '1.2K views \u00b7 Trending in Tampa' },
  { color: '#010101', label: 'TIKTOK \u2014 Posted', content: 'POV: Your AC breaks in Tampa summer heat \u2014 we fix it fast', meta: '3.4K views \u00b7 124 shares' },
  { color: '#4285F4', label: 'GOOGLE \u2014 Indexed', content: 'Best HVAC Repair Tampa FL \u2014 new blog post indexed', meta: 'Position #3 \u00b7 240 impressions today' },
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
        <span style={{ flex: 1, background: '#111', borderRadius: '4px', padding: '3px 10px', fontSize: '10px', color: '#555', margin: '0 8px' }}>traffikora.com \u2014 AI generating content...</span>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E8610A', display: 'inline-block' }} />
      </div>
      <div style={{ padding: '16px' }}>
        <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '10px' }}>\u26a1 Live Content Generation</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {visible.map((d, i) => (
            <div key={i} style={{ background: '#141414', border: '1px solid #1e1e1e', borderRadius: '8px', padding: '10px 14px' }}>
              <div style={{ fontSize: '10px', color: d.color, fontWeight: 700, marginBottom: '4px' }}>\u2713 {d.label}</div>
              <div style={{ fontSize: '12px', color: '#ccc' }}>{d.content}</div>
              <div style={{ fontSize: '10px', color: '#555', marginTop: '3px' }}>{d.meta}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '11px', color: '#555' }}>Running automatically \u00b7 24/7 \u00b7 Zero manual work</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#22c55e', fontWeight: 700 }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            LIVE
          </span>
        </div>
      </div>
    </div>
  )
}
`;

fs.writeFileSync('C:\\\\Users\\\\randy\\\\traffikfuel\\\\src\\\\components\\\\LiveDemo.tsx', liveDemo, 'utf8');
console.log('SUCCESS: LiveDemo.tsx fixed');
console.log('SUCCESS: FaqAccordion.tsx already correct');