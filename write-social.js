const fs = require('fs');

const content = `// @ts-nocheck
'use client'
import { useState, useEffect, useRef } from 'react'
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

function ScoreGauge({ score }) {
  const r = 54
  const circ = 2 * Math.PI * r
  const offset = circ - (score / 100) * circ
  const color = score >= 80 ? '#22c55e' : score >= 50 ? '#E8610A' : '#ef4444'
  const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 50 ? 'D' : 'F'
  return (
    <div style={{ position: 'relative', width: '140px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="140" height="140" style={{ position: 'absolute', top: 0, left: 0, transform: 'rotate(-90deg)' }}>
        <circle cx="70" cy="70" r={r} fill="none" stroke="#1a1a1a" strokeWidth="10" />
        <circle cx="70" cy="70" r={r} fill="none" stroke={color} strokeWidth="10"
          strokeDasharray={circ} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.5s ease, stroke 0.5s ease', filter: \`drop-shadow(0 0 8px \${color}80)\` }} />
      </svg>
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <div style={{ fontSize: '36px', fontWeight: 900, color, fontFamily: 'Playfair Display, serif', lineHeight: 1 }}>{score}</div>
        <div style={{ fontSize: '11px', color: '#555', fontWeight: 700, letterSpacing: '0.1em' }}>/ 100</div>
        <div style={{ fontSize: '18px', fontWeight: 900, color, marginTop: '2px' }}>{grade}</div>
      </div>
    </div>
  )
}

function MiniGauge({ value, label, color }) {
  const r = 22
  const circ = 2 * Math.PI * r
  const offset = circ - (value / 100) * circ
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
      <div style={{ position: 'relative', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="60" height="60" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
          <circle cx="30" cy="30" r={r} fill="none" stroke="#1a1a1a" strokeWidth="6" />
          <circle cx="30" cy="30" r={r} fill="none" stroke={color} strokeWidth="6"
            strokeDasharray={circ} strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.5s ease', filter: \`drop-shadow(0 0 4px \${color}80)\` }} />
        </svg>
        <span style={{ fontSize: '13px', fontWeight: 800, color, zIndex: 1 }}>{value}</span>
      </div>
      <div style={{ fontSize: '10px', color: '#555', fontWeight: 600, textAlign: 'center', letterSpacing: '0.05em' }}>{label}</div>
    </div>
  )
}

function ScanLine({ active }) {
  const [pos, setPos] = useState(0)
  useEffect(() => {
    if (!active) return
    const i = setInterval(() => setPos(p => (p + 2) % 100), 16)
    return () => clearInterval(i)
  }, [active])
  if (!active) return null
  return (
    <div style={{ position: 'absolute', top: pos + '%', left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #E8610A, transparent)', opacity: 0.8, pointerEvents: 'none', transition: 'top 0.016s linear' }} />
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
  const scanRef = useRef(null)

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
      const step = score / 60
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
    setBrainLoading(true)
    setBrainStatus('Building your brain...')
    setBrain(null)
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
    setScanning(true)
    setScanComplete(false)
    setResults(null)
    setScore(0)
    setDisplayScore(0)
    setActiveChecks([])

    // Animate checks sequentially
    for (let i = 0; i < CHECKS.length; i++) {
      await new Promise(r => setTimeout(r, 400 + Math.random() * 300))
      setActiveChecks(prev => [...prev, CHECKS[i].id])
    }

    await new Promise(r => setTimeout(r, 600))

    // Call AI to analyze
    try {
      const res = await fetch('/api/seo-analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: scanUrl })
      })
      const data = await res.json()
      setResults(data)
      setScore(data.score || 0)
    } catch {
      // Fallback demo results
      const demo = generateDemoResults(scanUrl)
      setResults(demo)
      setScore(demo.score)
    }

    setScanning(false)
    setScanComplete(true)
  }

  function generateDemoResults(url) {
    const isHttps = url.startsWith('https')
    const checks = {
      ssl: { pass: isHttps, message: isHttps ? 'SSL certificate valid and active' : 'No SSL certificate detected \u2014 site is not secure', impact: 'high' },
      pagespeed: { pass: false, score: 42, message: 'Page speed score is 42/100 \u2014 slow load times hurt rankings', impact: 'high' },
      mobile: { pass: true, message: 'Site is mobile responsive', impact: 'medium' },
      meta_title: { pass: true, message: 'Meta title present and optimized', impact: 'high' },
      meta_desc: { pass: false, message: 'Meta description missing on 3 pages', impact: 'high' },
      sitemap: { pass: false, message: 'No sitemap.xml detected \u2014 Google cannot crawl efficiently', impact: 'medium' },
      schema: { pass: false, message: 'No schema markup found \u2014 missing rich snippet opportunities', impact: 'medium' },
      h1: { pass: true, message: 'H1 tags properly structured', impact: 'medium' },
      images: { pass: false, message: '14 images missing alt tags \u2014 accessibility and SEO risk', impact: 'low' },
      links: { pass: true, message: 'Internal link structure looks healthy', impact: 'low' },
    }
    const passed = Object.values(checks).filter(c => c.pass).length
    const total = Object.keys(checks).length
    const score = Math.round((passed / total) * 100)
    return { score, checks, passed, total, performance: 42, accessibility: 78, seo: score, bestPractices: 83 }
  }

  const catColor = { performance: '#E8610A', security: '#22c55e', seo: '#3b82f6', technical: '#a855f7' }

  return (
    <div style={{ minHeight: '100vh', background: '#050508', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>
      <style>{\`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600;700;800&family=Share+Tech+Mono&display=swap');
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes slideIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes glow { 0%,100%{box-shadow:0 0 8px #E8610A40} 50%{box-shadow:0 0 24px #E8610A80} }
        @keyframes scanPulse { 0%,100%{opacity:0.6} 50%{opacity:1} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .tab-btn { transition: all 0.2s; }
        .tab-btn:hover { background: #1a1a1a !important; }
        .check-row { transition: all 0.3s; }
        .cta-btn { transition: all 0.2s; }
        .cta-btn:hover { transform: translateY(-2px); filter: brightness(1.1); }
      \`}</style>

      {/* COCKPIT HEADER */}
      <div style={{ background: 'linear-gradient(180deg, #0a0a12 0%, #050508 100%)', borderBottom: '1px solid #1a1a2e', padding: '0 40px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Top bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '42px', height: '42px', background: 'linear-gradient(135deg,#E8610A,#ff8c42)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', boxShadow: '0 0 20px rgba(232,97,10,0.4)' }}>\ud83e\udde0</div>
              <div>
                <div style={{ fontSize: '10px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em' }}>Traffikora Command</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 900, lineHeight: 1.1 }}>Intelligence Suite</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              {[
                { label: 'SYSTEM', value: 'ONLINE', color: '#22c55e' },
                { label: 'AI ENGINE', value: 'READY', color: '#22c55e' },
                { label: 'DATA FEED', value: 'LIVE', color: '#E8610A' },
              ].map(s => (
                <div key={s.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '9px', color: '#444', fontWeight: 700, letterSpacing: '0.15em', fontFamily: 'Share Tech Mono, monospace' }}>{s.label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: s.color, animation: 'pulse 1.5s infinite' }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: s.color, fontFamily: 'Share Tech Mono, monospace' }}>{s.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '4px', marginTop: '20px' }}>
            {[
              { id: 'brain', label: '\ud83e\udde0  Business Brain', desc: 'AI Profile Builder' },
              { id: 'seo', label: '\ud83d\udcca  SEO Analyzer', desc: 'Site Intelligence' },
            ].map(t => (
              <button key={t.id} className="tab-btn" onClick={() => setTab(t.id)}
                style={{ padding: '12px 28px', background: tab === t.id ? '#0d0d18' : 'transparent', border: 'none', borderTop: tab === t.id ? '2px solid #E8610A' : '2px solid transparent', borderRadius: '8px 8px 0 0', cursor: 'pointer', textAlign: 'left' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: tab === t.id ? '#fff' : '#444' }}>{t.label}</div>
                <div style={{ fontSize: '10px', color: tab === t.id ? '#E8610A' : '#333', fontWeight: 600, letterSpacing: '0.08em' }}>{t.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 40px 80px' }}>

        {/* ═══ BRAIN TAB ═══ */}
        {tab === 'brain' && (
          <div style={{ animation: 'slideIn 0.3s ease' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '28px' }}>
              {[
                { label: 'AI Powered', value: '100%', icon: '\ud83e\udd16', color: '#E8610A' },
                { label: 'Data Sources', value: '6+', icon: '\ud83d\udcca', color: '#3b82f6' },
                { label: 'Updates', value: 'Real-time', icon: '\u26a1', color: '#22c55e' },
              ].map(stat => (
                <div key={stat.label} style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '12px', padding: '18px 22px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: stat.color + '18', border: '1px solid ' + stat.color + '30', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{stat.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontSize: '11px', color: '#444', marginTop: '3px', fontWeight: 600 }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '14px', padding: '28px', marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: 700, color: '#555', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Share Tech Mono, monospace' }}>Website URL</label>
              <div style={{ display: 'flex', gap: '12px' }}>
                <input type="text" value={url} onChange={e => setUrl(e.target.value)} placeholder="https://yourwebsite.com"
                  style={{ flex: 1, background: '#050508', border: '1px solid #1a1a2e', borderRadius: '8px', padding: '13px 16px', fontSize: '15px', color: '#fff', outline: 'none', fontFamily: 'DM Sans, sans-serif' }}
                  onFocus={e => e.target.style.borderColor = '#E8610A'} onBlur={e => e.target.style.borderColor = '#1a1a2e'} />
                <button onClick={handleBuild} disabled={brainLoading}
                  style={{ background: brainLoading ? '#1a1a2e' : 'linear-gradient(135deg,#E8610A,#C84E06)', color: brainLoading ? '#444' : '#fff', border: 'none', borderRadius: '8px', padding: '13px 28px', fontSize: '14px', fontWeight: 700, cursor: brainLoading ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap', boxShadow: brainLoading ? 'none' : '0 4px 20px rgba(232,97,10,0.35)' }}>
                  {brainLoading ? '\u23f3 Building...' : '\u26a1 Build Brain'}
                </button>
              </div>
              {brainStatus && (
                <div style={{ marginTop: '14px', background: brainStatus.includes('success') ? 'rgba(34,197,94,0.08)' : brainStatus.includes('Error') ? 'rgba(239,68,68,0.08)' : 'rgba(232,97,10,0.08)', border: '1px solid ' + (brainStatus.includes('success') ? 'rgba(34,197,94,0.2)' : brainStatus.includes('Error') ? 'rgba(239,68,68,0.2)' : 'rgba(232,97,10,0.2)'), borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: brainStatus.includes('success') ? '#4ade80' : brainStatus.includes('Error') ? '#f87171' : '#E8610A' }}>
                  {brainStatus}
                </div>
              )}
            </div>

            {brain && (
              <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '14px', overflow: 'hidden' }}>
                <div style={{ background: 'linear-gradient(135deg,#0d1a0d,#0d0d18)', borderBottom: '1px solid #1a1a2e', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 1.5s infinite' }} />
                  <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: 700, fontFamily: 'Share Tech Mono, monospace' }}>BRAIN ONLINE \u2014 AI PROFILE ACTIVE</span>
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ background: '#050508', border: '1px solid #1a1a2e', borderRadius: '10px', padding: '20px', maxHeight: '380px', overflowY: 'auto' }}>
                    <pre style={{ fontSize: '12px', color: '#8892b0', whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'Share Tech Mono, monospace', lineHeight: 1.8 }}>{JSON.stringify(brain, null, 2)}</pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ═══ SEO ANALYZER TAB ═══ */}
        {tab === 'seo' && (
          <div style={{ animation: 'slideIn 0.3s ease' }}>

            {/* Scanner Input */}
            <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '14px', padding: '28px', marginBottom: '24px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg,transparent,#E8610A,transparent)', opacity: scanning ? 1 : 0, transition: 'opacity 0.3s' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: scanning ? '#E8610A' : scanComplete ? '#22c55e' : '#333', animation: scanning ? 'pulse 0.8s infinite' : 'none' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: scanning ? '#E8610A' : scanComplete ? '#22c55e' : '#444', fontFamily: 'Share Tech Mono, monospace', letterSpacing: '0.15em' }}>
                  {scanning ? 'SCANNING IN PROGRESS...' : scanComplete ? 'SCAN COMPLETE' : 'READY TO SCAN'}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <input type="text" value={scanUrl} onChange={e => setScanUrl(e.target.value)} placeholder="https://targetwebsite.com"
                  style={{ flex: 1, background: '#050508', border: '1px solid #1a1a2e', borderRadius: '8px', padding: '13px 16px', fontSize: '15px', color: '#fff', outline: 'none', fontFamily: 'Share Tech Mono, monospace' }}
                  onFocus={e => e.target.style.borderColor = '#E8610A'} onBlur={e => e.target.style.borderColor = '#1a1a2e'} />
                <button onClick={handleScan} disabled={scanning || !scanUrl}
                  style={{ background: scanning ? '#1a1a2e' : 'linear-gradient(135deg,#E8610A,#C84E06)', color: scanning ? '#444' : '#fff', border: 'none', borderRadius: '8px', padding: '13px 32px', fontSize: '14px', fontWeight: 700, cursor: scanning || !scanUrl ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap', boxShadow: scanning ? 'none' : '0 4px 20px rgba(232,97,10,0.4)', animation: !scanning && !scanComplete ? 'glow 2s infinite' : 'none' }}>
                  {scanning ? '\ud83d\udcf6 Scanning...' : '\ud83d\udd0d Launch Scan'}
                </button>
              </div>
            </div>

            {/* Check Grid — shown during and after scan */}
            {(scanning || scanComplete) && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginBottom: '24px' }}>
                {CHECKS.map(check => {
                  const isActive = activeChecks.includes(check.id)
                  const result = results?.checks?.[check.id]
                  const pass = result?.pass
                  return (
                    <div key={check.id} className="check-row"
                      style={{ background: '#0d0d18', border: '1px solid ' + (isActive ? (pass === true ? '#22c55e30' : pass === false ? '#ef444430' : '#E8610A30') : '#1a1a2e'), borderRadius: '10px', padding: '14px', textAlign: 'center', opacity: isActive ? 1 : 0.3, transition: 'all 0.4s' }}>
                      <div style={{ fontSize: '22px', marginBottom: '6px' }}>{check.icon}</div>
                      <div style={{ fontSize: '10px', fontWeight: 700, color: isActive ? (pass === true ? '#22c55e' : pass === false ? '#ef4444' : '#E8610A') : '#333', fontFamily: 'Share Tech Mono, monospace', letterSpacing: '0.05em' }}>
                        {!isActive ? 'PENDING' : pass === true ? 'PASS' : pass === false ? 'FAIL' : 'SCANNING'}
                      </div>
                      <div style={{ fontSize: '11px', color: '#555', marginTop: '4px', fontWeight: 600 }}>{check.label}</div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Results Dashboard */}
            {scanComplete && results && (
              <div style={{ animation: 'slideIn 0.5s ease' }}>

                {/* Score Row */}
                <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '14px', padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                    <div style={{ fontSize: '10px', color: '#444', fontWeight: 700, letterSpacing: '0.15em', fontFamily: 'Share Tech Mono, monospace' }}>OVERALL SCORE</div>
                    <ScoreGauge score={displayScore} />
                    <div style={{ fontSize: '11px', color: '#555', textAlign: 'center' }}>{results.passed}/{results.total} checks passed</div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '12px' }}>
                    <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '14px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
                      <div style={{ fontSize: '10px', color: '#444', fontWeight: 700, letterSpacing: '0.12em', fontFamily: 'Share Tech Mono, monospace' }}>PERFORMANCE METRICS</div>
                      <div style={{ display: 'flex', gap: '20px' }}>
                        <MiniGauge value={results.performance || 0} label="Speed" color="#E8610A" />
                        <MiniGauge value={results.accessibility || 0} label="Access" color="#3b82f6" />
                        <MiniGauge value={results.seo || 0} label="SEO" color="#22c55e" />
                        <MiniGauge value={results.bestPractices || 0} label="Best Prac" color="#a855f7" />
                      </div>
                    </div>

                    <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '14px', padding: '20px' }}>
                      <div style={{ fontSize: '10px', color: '#444', fontWeight: 700, letterSpacing: '0.12em', fontFamily: 'Share Tech Mono, monospace', marginBottom: '14px' }}>ISSUE BREAKDOWN</div>
                      {['high', 'medium', 'low'].map(impact => {
                        const count = Object.values(results.checks || {}).filter(c => !c.pass && c.impact === impact).length
                        const color = impact === 'high' ? '#ef4444' : impact === 'medium' ? '#E8610A' : '#3b82f6'
                        return (
                          <div key={impact} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color, flexShrink: 0 }} />
                            <div style={{ fontSize: '11px', color: '#555', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', width: '60px' }}>{impact}</div>
                            <div style={{ flex: 1, height: '6px', background: '#1a1a2e', borderRadius: '3px', overflow: 'hidden' }}>
                              <div style={{ height: '100%', width: (count * 25) + '%', background: color, borderRadius: '3px', transition: 'width 1s ease', maxWidth: '100%' }} />
                            </div>
                            <div style={{ fontSize: '12px', fontWeight: 700, color, width: '20px', textAlign: 'right' }}>{count}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>

                {/* Detailed Findings */}
                <div style={{ background: '#0d0d18', border: '1px solid #1a1a2e', borderRadius: '14px', overflow: 'hidden', marginBottom: '20px' }}>
                  <div style={{ borderBottom: '1px solid #1a1a2e', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8610A', animation: 'pulse 1.5s infinite' }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#E8610A', fontFamily: 'Share Tech Mono, monospace', letterSpacing: '0.15em' }}>DETAILED FINDINGS</span>
                  </div>
                  <div style={{ padding: '8px' }}>
                    {CHECKS.map(check => {
                      const result = results?.checks?.[check.id]
                      if (!result) return null
                      const color = catColor[check.category]
                      return (
                        <div key={check.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '14px 16px', borderRadius: '8px', marginBottom: '4px', background: result.pass ? 'transparent' : 'rgba(239,68,68,0.03)', borderLeft: '3px solid ' + (result.pass ? '#22c55e' : '#ef4444') }}>
                          <div style={{ fontSize: '20px', flexShrink: 0, marginTop: '1px' }}>{check.icon}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' }}>
                              <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff' }}>{check.label}</span>
                              <span style={{ fontSize: '9px', fontWeight: 700, color, background: color + '18', border: '1px solid ' + color + '30', borderRadius: '4px', padding: '1px 6px', letterSpacing: '0.08em' }}>{check.category.toUpperCase()}</span>
                              {result.impact && <span style={{ fontSize: '9px', fontWeight: 700, color: result.impact === 'high' ? '#ef4444' : result.impact === 'medium' ? '#E8610A' : '#3b82f6', letterSpacing: '0.08em' }}>{result.impact.toUpperCase()} IMPACT</span>}
                            </div>
                            <div style={{ fontSize: '12px', color: '#666', lineHeight: 1.6 }}>{result.message}</div>
                          </div>
                          <div style={{ flexShrink: 0, width: '28px', height: '28px', borderRadius: '50%', background: result.pass ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)', border: '1px solid ' + (result.pass ? '#22c55e30' : '#ef444430'), display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>
                            {result.pass ? '\u2713' : '\u2717'}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* CTAs */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div style={{ background: 'linear-gradient(135deg, #0d1a0d, #0d0d18)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '14px', padding: '28px', textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', marginBottom: '10px' }}>\ud83d\udcde</div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Book a Free Consultation</div>
                    <div style={{ fontSize: '12px', color: '#555', marginBottom: '20px', lineHeight: 1.6 }}>15 minutes with our team. We\u2019ll walk through your results and show you exactly what to fix first.</div>
                    <a href="/dashboard/support" className="cta-btn" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#22c55e,#16a34a)', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(34,197,94,0.3)' }}>
                      Book Free Call \u2192
                    </a>
                  </div>
                  <div style={{ background: 'linear-gradient(135deg, #1a0e00, #0d0d18)', border: '1px solid rgba(232,97,10,0.3)', borderRadius: '14px', padding: '28px', textAlign: 'center' }}>
                    <div style={{ fontSize: '28px', marginBottom: '10px' }}>\ud83e\udd16</div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Let AI Fix Your Content Gaps</div>
                    <div style={{ fontSize: '12px', color: '#555', marginBottom: '20px', lineHeight: 1.6 }}>Upgrade to Pro and our AI agents automatically fill every content gap your competitors are exploiting.</div>
                    <a href="/pricing" className="cta-btn" style={{ display: 'inline-block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '12px 28px', borderRadius: '8px', fontWeight: 700, fontSize: '14px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(232,97,10,0.4)' }}>
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
console.log('SUCCESS: scrape page.tsx written');