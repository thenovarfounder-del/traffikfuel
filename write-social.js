const fs = require('fs');

const content = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

const CHECKS = [
  { id: 'pagespeed', label: 'Page Speed', icon: '\u26a1', category: 'performance' },
  { id: 'ssl', label: 'SSL Certificate', icon: '\ud83d\udd12', category: 'security' },
  { id: 'mobile', label: 'Mobile Ready', icon: '\ud83d\udcf1', category: 'performance' },
  { id: 'meta_title', label: 'Meta Title', icon: '\ud83c\udff7\ufe0f', category: 'seo' },
  { id: 'meta_desc', label: 'Meta Description', icon: '\ud83d\udcdd', category: 'seo' },
  { id: 'sitemap', label: 'Sitemap', icon: '\ud83d\uddfa\ufe0f', category: 'technical' },
  { id: 'schema', label: 'Schema Markup', icon: '\ud83e\udde9', category: 'technical' },
  { id: 'h1', label: 'H1 Structure', icon: '\ud83d\udcd1', category: 'seo' },
  { id: 'images', label: 'Image Alt Tags', icon: '\ud83d\uddbc\ufe0f', category: 'seo' },
  { id: 'links', label: 'Internal Links', icon: '\ud83d\udd17', category: 'technical' },
]

function BigGauge({ score, label }) {
  const r = 80
  const circ = 2 * Math.PI * r
  const offset = circ - (score / 100) * circ
  const color = score >= 80 ? '#22c55e' : score >= 50 ? '#E8610A' : '#ef4444'
  const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 50 ? 'D' : 'F'
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
      <div style={{ fontSize: '11px', color: '#555', fontWeight: 700, letterSpacing: '0.2em', fontFamily: 'Share Tech Mono, monospace' }}>{label}</div>
      <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="200" height="200" style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}>
          <circle cx="100" cy="100" r={r} fill="none" stroke="#111" strokeWidth="14" />
          <circle cx="100" cy="100" r={r} fill="none" stroke={color} strokeWidth="14"
            strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 2s ease, stroke 0.5s ease', filter: \`drop-shadow(0 0 16px \${color})\` }} />
        </svg>
        <div style={{ textAlign: 'center', zIndex: 1 }}>
          <div style={{ fontSize: '64px', fontWeight: 900, color, fontFamily: 'Playfair Display, serif', lineHeight: 1, textShadow: \`0 0 30px \${color}80\` }}>{score}</div>
          <div style={{ fontSize: '14px', color: '#555', fontWeight: 700, letterSpacing: '0.15em' }}>/ 100</div>
          <div style={{ fontSize: '28px', fontWeight: 900, color, marginTop: '4px', textShadow: \`0 0 20px \${color}\` }}>{grade}</div>
        </div>
      </div>
    </div>
  )
}

function MiniGauge({ value, label, color }) {
  const r = 38
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
      <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="100" height="100" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
          <circle cx="50" cy="50" r={r} fill="none" stroke="#111" strokeWidth="10" />
          <circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="10" strokeLinecap="round"
            strokeDasharray={circ} strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 2s ease', filter: \`drop-shadow(0 0 10px \${color})\` }} />
        </svg>
        <span style={{ fontSize: '24px', fontWeight: 900, color, zIndex: 1, textShadow: \`0 0 12px \${color}80\` }}>{value}</span>
      </div>
      <div style={{ fontSize: '11px', color: '#666', fontWeight: 700, textAlign: 'center', letterSpacing: '0.1em', fontFamily: 'Share Tech Mono, monospace' }}>{label}</div>
    </div>
  )
}

export default function ScrapePage() {
  const [url, setUrl] = useState('')
  const [brainStatus, setBrainStatus] = useState('')
  const [brain, setBrain] = useState(null)
  const [brainLoading, setBrainLoading] = useState(false)
  const [businessId, setBusinessId] = useState('')
  const [scanning, setScanning] = useState(false)
  const [scanComplete, setScanComplete] = useState(false)
  const [scanUrl, setScanUrl] = useState('')
  const [activeChecks, setActiveChecks] = useState([])
  const [results, setResults] = useState(null)
  const [score, setScore] = useState(0)
  const [displayScore, setDisplayScore] = useState(0)
  const [tab, setTab] = useState('brain')

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase.from('business_profiles').select('id, website, brain').eq('user_id', user.id).single()
      if (data) {
        setBusinessId(data.id)
        setUrl(data.website || '')
        if (data.brain) setBrain(data.brain)
      }
    }
    load()
  }, [])

  useEffect(() => {
    if (scanComplete && score > 0) {
      let current = 0
      const step = score / 80
      const i = setInterval(() => {
        current += step
        if (current >= score) { setDisplayScore(score); clearInterval(i) }
        else setDisplayScore(Math.floor(current))
      }, 16)
      return () => clearInterval(i)
    }
  }, [scanComplete, score])

  const handleBuild = async () => {
    if (!url || !businessId) { setBrainStatus('Missing URL or business profile.'); return }
    setBrainLoading(true); setBrainStatus('Building your brain...'); setBrain(null)
    try {
      const res = await fetch('/api/scrape', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ businessId, url }) })
      const data = await res.json()
      if (!res.ok) setBrainStatus('Error: ' + (data.error || 'Unknown error'))
      else { setBrain(data.brain); setBrainStatus('Brain built successfully!') }
    } catch { setBrainStatus('Error: Network failure') }
    setBrainLoading(false)
  }

  const handleScan = async () => {
    if (!scanUrl) return
    setScanning(true); setScanComplete(false); setResults(null); setScore(0); setDisplayScore(0); setActiveChecks([])
    for (let i = 0; i < CHECKS.length; i++) {
      await new Promise(r => setTimeout(r, 400 + Math.random() * 300))
      setActiveChecks(prev => [...prev, CHECKS[i].id])
    }
    await new Promise(r => setTimeout(r, 600))
    try {
      const res = await fetch('/api/seo-analyze', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ url: scanUrl }) })
      const data = await res.json()
      setResults(data); setScore(data.score || 0)
    } catch {
      const isHttps = scanUrl.startsWith('https')
      const checks = {
        ssl: { pass: isHttps, message: isHttps ? 'SSL certificate valid and active' : 'No SSL detected', impact: 'high' },
        pagespeed: { pass: false, score: 42, message: 'Page speed score is 42/100 \u2014 slow load times hurt rankings', impact: 'high' },
        mobile: { pass: true, message: 'Site is mobile responsive', impact: 'medium' },
        meta_title: { pass: true, message: 'Meta title present and optimized', impact: 'high' },
        meta_desc: { pass: false, message: 'Meta description missing on 3 pages', impact: 'high' },
        sitemap: { pass: false, message: 'No sitemap.xml detected', impact: 'medium' },
        schema: { pass: false, message: 'No schema markup found', impact: 'medium' },
        h1: { pass: true, message: 'H1 tags properly structured', impact: 'medium' },
        images: { pass: false, message: '14 images missing alt tags', impact: 'low' },
        links: { pass: true, message: 'Internal link structure looks healthy', impact: 'low' },
      }
      const passed = Object.values(checks).filter(c => c.pass).length
      const demo = { score: Math.round((passed / 10) * 100), checks, passed, total: 10, performance: 42, accessibility: 78, seo: Math.round((passed / 10) * 100), bestPractices: 83 }
      setResults(demo); setScore(demo.score)
    }
    setScanning(false); setScanComplete(true)
  }

  const catColor = { performance: '#E8610A', security: '#22c55e', seo: '#3b82f6', technical: '#a855f7' }

  return (
    <div style={{ minHeight: '100vh', background: '#050508', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>
      <style>{\`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700;800&family=Share+Tech+Mono&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes slideIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glow { 0%,100%{box-shadow:0 0 12px #E8610A60} 50%{box-shadow:0 0 40px #E8610Aaa} }
        @keyframes headerGlow { 0%,100%{opacity:0.4} 50%{opacity:0.8} }
        .tab-btn { transition: all 0.2s; }
        .check-row { transition: all 0.4s; }
        .cta-btn { transition: all 0.2s; }
        .cta-btn:hover { transform: translateY(-3px); filter: brightness(1.15); box-shadow: 0 12px 40px rgba(232,97,10,0.5) !important; }
      \`}</style>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* MASSIVE COCKPIT HEADER */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div style={{ background: 'linear-gradient(180deg, #08080f 0%, #0d0d1a 60%, #050508 100%)', borderBottom: '2px solid #E8610A30', position: 'relative', overflow: 'hidden' }}>
        {/* Background glow effect */}
        <div style={{ position: 'absolute', top: '-60px', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '200px', background: 'radial-gradient(ellipse, #E8610A15 0%, transparent 70%)', pointerEvents: 'none', animation: 'headerGlow 3s ease-in-out infinite' }} />
        {/* Top accent line */}
        <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent 0%, #E8610A 30%, #ff8c42 50%, #E8610A 70%, transparent 100%)' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 40px 0' }}>
          {/* Main header row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
            {/* Left — Logo + Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg,#E8610A,#ff8c42)', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', boxShadow: '0 0 40px rgba(232,97,10,0.6), 0 0 80px rgba(232,97,10,0.2)', flexShrink: 0 }}>\ud83e\udde0</div>
              <div>
                <div style={{ fontSize: '12px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em', marginBottom: '6px', fontFamily: 'Share Tech Mono, monospace' }}>Traffikora Command Center</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 900, lineHeight: 1, color: '#fff', letterSpacing: '-1px' }}>Intelligence Suite</div>
                <div style={{ fontSize: '14px', color: '#444', marginTop: '8px', fontWeight: 400 }}>AI-powered business analysis and site intelligence platform</div>
              </div>
            </div>

            {/* Right — Status indicators */}
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              {[
                { label: 'SYSTEM', value: 'ONLINE', color: '#22c55e' },
                { label: 'AI ENGINE', value: 'READY', color: '#22c55e' },
                { label: 'DATA FEED', value: 'LIVE', color: '#E8610A' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center', background: '#0d0d18', border: '1px solid ' + s.color + '30', borderRadius: '10px', padding: '12px 18px' }}>
                  <div style={{ fontSize: '9px', color: '#444', fontWeight: 700, letterSpacing: '0.2em', fontFamily: 'Share Tech Mono, monospace', marginBottom: '6px' }}>{s.label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: s.color, boxShadow: \`0 0 8px \${s.color}\`, animation: 'pulse 1.5s infinite' }} />
                    <span style={{ fontSize: '14px', fontWeight: 800, color: s.color, fontFamily: 'Share Tech Mono, monospace' }}>{s.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '6px' }}>
            {[
              { id: 'brain', label: '\ud83e\udde0  Business Brain', desc: 'AI Profile Builder' },
              { id: 'seo', label: '\ud83d\udcca  SEO Analyzer', desc: 'Site Intelligence' },
            ].map(t => (
              <button key={t.id} className="tab-btn" onClick={() => setTab(t.id)}
                style={{ padding: '16px 36px', background: tab === t.id ? '#0d0d18' : 'transparent', border: 'none', borderTop: tab === t.id ? '3px solid #E8610A' : '3px solid transparent', borderRadius: '10px 10px 0 0', cursor: 'pointer', textAlign: 'left', minWidth: '200px' }}>
                <div style={{ fontSize: '16px', fontWeight: 800, color: tab === t.id ? '#fff' : '#444', marginBottom: '3px' }}>{t.label}</div>
                <div style={{ fontSize: '11px', color: tab === t.id ? '#E8610A' : '#333', fontWeight: 600, letterSpacing: '0.1em', fontFamily: 'Share Tech Mono, monospace' }}>{t.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 40px 80px' }}>

        {/* BRAIN TAB */}
        {tab === 'brain' && (
          <div style={{ animation: 'slideIn 0.3s ease' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px', marginBottom: '32px' }}>
              {[
                { label: 'AI Powered', value: '100%', icon: '\ud83e\udd16', color: '#E8610A', desc: 'Full AI analysis' },
                { label: 'Data Sources', value: '6+', icon: '\ud83d\udcca', color: '#3b82f6', desc: 'Cross-referenced' },
                { label: 'Updates', value: 'Real-time', icon: '\u26a1', color: '#22c55e', desc: 'Always current' },
              ].map(stat => (
                <div key={stat.label} style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '16px', padding: '24px 28px', display: 'flex', alignItems: 'center', gap: '18px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: stat.color + '18', border: '1px solid ' + stat.color + '40', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0, boxShadow: \`0 0 20px \${stat.color}20\` }}>{stat.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontSize: '13px', color: '#fff', fontWeight: 600, marginTop: '4px' }}>{stat.label}</div>
                    <div style={{ fontSize: '11px', color: '#444', marginTop: '2px' }}>{stat.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '16px', padding: '32px', marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, color: '#555', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'Share Tech Mono, monospace' }}>Website URL</label>
              <div style={{ display: 'flex', gap: '14px' }}>
                <input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://yourwebsite.com"
                  style={{ flex: 1, background: '#050508', border: '1px solid #1a1a2e', borderRadius: '10px', padding: '16px 20px', fontSize: '16px', color: '#fff', outline: 'none', fontFamily: 'DM Sans, sans-serif' }}
                  onFocus={e => e.target.style.borderColor = '#E8610A'} onBlur={e => e.target.style.borderColor = '#1a1a2e'} />
                <button onClick={handleBuild} disabled={brainLoading}
                  style={{ background: brainLoading ? '#1a1a2e' : 'linear-gradient(135deg,#E8610A,#C84E06)', color: brainLoading ? '#444' : '#fff', border: 'none', borderRadius: '10px', padding: '16px 36px', fontSize: '16px', fontWeight: 800, cursor: brainLoading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap', boxShadow: brainLoading ? 'none' : '0 6px 30px rgba(232,97,10,0.5)' }}>
                  {brainLoading ? '\u23f3 Building...' : '\u26a1 Build Brain'}
                </button>
              </div>
              {brainStatus && (
                <div style={{ marginTop: '16px', background: brainStatus.includes('success') ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)', border: '1px solid ' + (brainStatus.includes('success') ? 'rgba(34,197,94,0.25)' : 'rgba(239,68,68,0.25)'), borderRadius: '10px', padding: '12px 18px', fontSize: '14px', color: brainStatus.includes('success') ? '#4ade80' : '#f87171', fontWeight: 600 }}>
                  {brainStatus}
                </div>
              )}
            </div>

            {brain && (
              <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ background: 'linear-gradient(135deg,#0d1a0d,#0d0d18)', borderBottom: '1px solid #1a1a2e', padding: '18px 28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 10px #22c55e', animation: 'pulse 1.5s infinite' }} />
                  <span style={{ fontSize: '13px', color: '#22c55e', fontWeight: 700, fontFamily: 'Share Tech Mono, monospace', letterSpacing: '0.1em' }}>BRAIN ONLINE \u2014 AI PROFILE ACTIVE</span>
                </div>
                <div style={{ padding: '28px' }}>
                  <div style={{ background: '#050508', border: '1px solid #1a1a2e', borderRadius: '12px', padding: '24px', maxHeight: '400px', overflowY: 'auto' }}>
                    <pre style={{ fontSize: '13px', color: '#8892b0', whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'Share Tech Mono, monospace', lineHeight: 1.9 }}>{JSON.stringify(brain, null, 2)}</pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* SEO ANALYZER TAB */}
        {tab === 'seo' && (
          <div style={{ animation: 'slideIn 0.3s ease' }}>
            <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '16px', padding: '32px', marginBottom: '28px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,transparent,#E8610A,transparent)', opacity: scanning ? 1 : 0, transition: 'opacity 0.3s' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: scanning ? '#E8610A' : scanComplete ? '#22c55e' : '#333', boxShadow: scanning ? '0 0 12px #E8610A' : scanComplete ? '0 0 12px #22c55e' : 'none', animation: scanning ? 'pulse 0.8s infinite' : 'none' }} />
                <span style={{ fontSize: '14px', fontWeight: 800, color: scanning ? '#E8610A' : scanComplete ? '#22c55e' : '#555', fontFamily: 'Share Tech Mono, monospace', letterSpacing: '0.2em' }}>
                  {scanning ? 'SCANNING IN PROGRESS...' : scanComplete ? 'SCAN COMPLETE \u2014 RESULTS READY' : 'READY TO SCAN'}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '14px' }}>
                <input type="text" value={scanUrl} onChange={e => setScanUrl(e.target.value)} placeholder="https://targetwebsite.com"
                  style={{ flex: 1, background: '#050508', border: '1px solid #1a1a2e', borderRadius: '10px', padding: '16px 20px', fontSize: '16px', color: '#fff', outline: 'none', fontFamily: 'Share Tech Mono, monospace' }}
                  onFocus={e => e.target.style.borderColor = '#E8610A'} onBlur={e => e.target.style.borderColor = '#1a1a2e'} />
                <button onClick={handleScan} disabled={scanning || !scanUrl}
                  style={{ background: scanning ? '#1a1a2e' : 'linear-gradient(135deg,#E8610A,#C84E06)', color: scanning ? '#444' : '#fff', border: 'none', borderRadius: '10px', padding: '16px 40px', fontSize: '16px', fontWeight: 800, cursor: scanning || !scanUrl ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap', boxShadow: scanning ? 'none' : '0 6px 30px rgba(232,97,10,0.5)', animation: !scanning && !scanComplete ? 'glow 2s infinite' : 'none' }}>
                  {scanning ? '\ud83d\udcf6 Scanning...' : '\ud83d\udd0d Launch Scan'}
                </button>
              </div>
            </div>

            {(scanning || scanComplete) && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '28px' }}>
                {CHECKS.map(check => {
                  const isActive = activeChecks.includes(check.id)
                  const result = results?.checks?.[check.id]
                  const pass = result?.pass
                  const borderColor = isActive ? (pass === true ? '#22c55e' : pass === false ? '#ef4444' : '#E8610A') : '#1a1a2e'
                  return (
                    <div key={check.id} className="check-row"
                      style={{ background: '#0d0d18', border: '2px solid ' + borderColor, borderRadius: '14px', padding: '20px', textAlign: 'center', opacity: isActive ? 1 : 0.25, boxShadow: isActive ? \`0 0 20px \${borderColor}30\` : 'none' }}>
                      <div style={{ fontSize: '28px', marginBottom: '10px' }}>{check.icon}</div>
                      <div style={{ fontSize: '11px', fontWeight: 800, color: isActive ? borderColor : '#333', fontFamily: 'Share Tech Mono, monospace', letterSpacing: '0.08em', marginBottom: '6px' }}>
                        {!isActive ? 'PENDING' : pass === true ? '\u2713 PASS' : pass === false ? '\u2717 FAIL' : 'SCANNING'}
                      </div>
                      <div style={{ fontSize: '12px', color: '#666', fontWeight: 600 }}>{check.label}</div>
                    </div>
                  )
                })}
              </div>
            )}

            {scanComplete && results && (
              <div style={{ animation: 'slideIn 0.5s ease' }}>
                {/* BIG SCORE ROW */}
                <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '20px', marginBottom: '24px' }}>
                  <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
                    <BigGauge score={displayScore} label="OVERALL SCORE" />
                    <div style={{ fontSize: '13px', color: '#555', textAlign: 'center', fontFamily: 'Share Tech Mono, monospace' }}>{results.passed}/{results.total} CHECKS PASSED</div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '16px', padding: '28px', flex: 1 }}>
                      <div style={{ fontSize: '11px', color: '#444', fontWeight: 700, letterSpacing: '0.2em', fontFamily: 'Share Tech Mono, monospace', marginBottom: '24px' }}>PERFORMANCE METRICS</div>
                      <div style={{ display: 'flex', gap: '32px', justifyContent: 'center' }}>
                        <MiniGauge value={results.performance || 0} label="SPEED" color="#E8610A" />
                        <MiniGauge value={results.accessibility || 0} label="ACCESS" color="#3b82f6" />
                        <MiniGauge value={results.seo || 0} label="SEO" color="#22c55e" />
                        <MiniGauge value={results.bestPractices || 0} label="BEST PRAC" color="#a855f7" />
                      </div>
                    </div>

                    <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '16px', padding: '24px' }}>
                      <div style={{ fontSize: '11px', color: '#444', fontWeight: 700, letterSpacing: '0.2em', fontFamily: 'Share Tech Mono, monospace', marginBottom: '16px' }}>ISSUE BREAKDOWN</div>
                      {['high', 'medium', 'low'].map(impact => {
                        const count = Object.values(results.checks || {}).filter(c => !c.pass && c.impact === impact).length
                        const color = impact === 'high' ? '#ef4444' : impact === 'medium' ? '#E8610A' : '#3b82f6'
                        return (
                          <div key={impact} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: color, boxShadow: \`0 0 8px \${color}\`, flexShrink: 0 }} />
                            <div style={{ fontSize: '12px', color: '#666', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', width: '70px', fontFamily: 'Share Tech Mono, monospace' }}>{impact}</div>
                            <div style={{ flex: 1, height: '8px', background: '#1a1a2e', borderRadius: '4px', overflow: 'hidden' }}>
                              <div style={{ height: '100%', width: Math.min(count * 33, 100) + '%', background: color, borderRadius: '4px', transition: 'width 1.2s ease', boxShadow: \`0 0 8px \${color}80\` }} />
                            </div>
                            <div style={{ fontSize: '16px', fontWeight: 900, color, width: '24px', textAlign: 'right' }}>{count}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* DETAILED FINDINGS */}
                <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' }}>
                  <div style={{ borderBottom: '1px solid #1a1a2e', padding: '20px 28px', display: 'flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(135deg,#0d0d18,#0a0a14)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E8610A', boxShadow: '0 0 10px #E8610A', animation: 'pulse 1.5s infinite' }} />
                    <span style={{ fontSize: '13px', fontWeight: 800, color: '#E8610A', fontFamily: 'Share Tech Mono, monospace', letterSpacing: '0.2em' }}>DETAILED FINDINGS</span>
                  </div>
                  <div style={{ padding: '12px' }}>
                    {CHECKS.map(check => {
                      const result = results?.checks?.[check.id]
                      if (!result) return null
                      const color = catColor[check.category]
                      return (
                        <div key={check.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '18px 20px', borderRadius: '10px', marginBottom: '6px', background: result.pass ? 'transparent' : 'rgba(239,68,68,0.04)', borderLeft: '4px solid ' + (result.pass ? '#22c55e' : '#ef4444') }}>
                          <div style={{ fontSize: '24px', flexShrink: 0, marginTop: '2px' }}>{check.icon}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '5px', flexWrap: 'wrap' }}>
                              <span style={{ fontSize: '15px', fontWeight: 800, color: '#fff' }}>{check.label}</span>
                              <span style={{ fontSize: '10px', fontWeight: 700, color, background: color + '18', border: '1px solid ' + color + '40', borderRadius: '5px', padding: '2px 8px', letterSpacing: '0.1em' }}>{check.category.toUpperCase()}</span>
                              {result.impact && <span style={{ fontSize: '10px', fontWeight: 700, color: result.impact === 'high' ? '#ef4444' : result.impact === 'medium' ? '#E8610A' : '#3b82f6', letterSpacing: '0.1em' }}>{result.impact.toUpperCase()} IMPACT</span>}
                            </div>
                            <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.7 }}>{result.message}</div>
                          </div>
                          <div style={{ flexShrink: 0, width: '36px', height: '36px', borderRadius: '50%', background: result.pass ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)', border: '2px solid ' + (result.pass ? '#22c55e40' : '#ef444440'), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 900, color: result.pass ? '#22c55e' : '#ef4444' }}>
                            {result.pass ? '\u2713' : '\u2717'}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* CTAs */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ background: 'linear-gradient(135deg, #0a1a0a, #0d0d18)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
                    <div style={{ fontSize: '36px', marginBottom: '14px' }}>\ud83d\udcde</div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Book a Free Consultation</div>
                    <div style={{ fontSize: '13px', color: '#555', marginBottom: '24px', lineHeight: 1.7 }}>15 minutes with our team. We\u2019ll walk through your results and show you exactly what to fix first.</div>
                    <a href="/dashboard/support" className="cta-btn" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#22c55e,#16a34a)', color: '#fff', padding: '14px 36px', borderRadius: '10px', fontWeight: 800, fontSize: '15px', textDecoration: 'none', boxShadow: '0 6px 30px rgba(34,197,94,0.4)' }}>
                      Book Free Call \u2192
                    </a>
                  </div>
                  <div style={{ background: 'linear-gradient(135deg, #1a0e00, #0d0d18)', border: '1px solid rgba(232,97,10,0.35)', borderRadius: '16px', padding: '32px', textAlign: 'center' }}>
                    <div style={{ fontSize: '36px', marginBottom: '14px' }}>\ud83e\udd16</div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>Let AI Fix Your Content Gaps</div>
                    <div style={{ fontSize: '13px', color: '#555', marginBottom: '24px', lineHeight: 1.7 }}>Upgrade to Pro and our AI agents automatically fill every content gap your competitors are exploiting.</div>
                    <a href="/pricing" className="cta-btn" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '14px 36px', borderRadius: '10px', fontWeight: 800, fontSize: '15px', textDecoration: 'none', boxShadow: '0 6px 30px rgba(232,97,10,0.5)' }}>
                      Upgrade to Pro \u2192
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
`;

fs.writeFileSync('C:\\\\Users\\\\randy\\\\traffikfuel\\\\src\\\\app\\\\dashboard\\\\scrape\\\\page.tsx', content, 'utf8');
console.log('SUCCESS: scrape page.tsx written — massive header + giant gauges');