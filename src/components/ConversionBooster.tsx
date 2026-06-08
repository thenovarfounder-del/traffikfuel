// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ConversionBooster() {
  const [showScrollBanner, setShowScrollBanner] = useState(false)
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [visitorCount, setVisitorCount] = useState(0)
  const [scrollBannerDismissed, setScrollBannerDismissed] = useState(false)
  const [exitPopupShown, setExitPopupShown] = useState(false)
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 47, seconds: 33 })
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Mobile detection
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Random visitor count between 18-47
    setVisitorCount(Math.floor(18 + Math.random() * 29))

    // Fluctuate visitor count every 8-15 seconds
    const visitorInterval = setInterval(() => {
      setVisitorCount(prev => {
        const change = Math.random() > 0.5 ? 1 : -1
        return Math.max(12, Math.min(52, prev + change))
      })
    }, 10000)

    // Scroll trigger at 60%
    const handleScroll = () => {
      const scrollPct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrollPct > 60 && !scrollBannerDismissed) {
        setShowScrollBanner(true)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Exit intent
    const handleMouseLeave = (e) => {
      if (e.clientY <= 10 && !exitPopupShown) {
        setShowExitPopup(true)
        setExitPopupShown(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)

    // EVA auto-open after 30 seconds
    const evaTimer = setTimeout(() => {
      const bubble = document.querySelector('[data-eva-trigger]')
      if (bubble) bubble.click()
    }, 30000)

    // Watch for mobile menu open
    const observer = new MutationObserver(() => {
      setMenuOpen(document.body.classList.contains('nav-open'))
    })
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) { seconds = 59; minutes-- }
        if (minutes < 0) { minutes = 59; hours-- }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59 }
        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => {
      clearInterval(visitorInterval)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(evaTimer)
      clearInterval(countdownInterval)
      window.removeEventListener('resize', checkMobile)
    }
  }, [scrollBannerDismissed, exitPopupShown])

  const pad = (n) => String(n).padStart(2, '0')

  return (
    <>
      {/* LIVE VISITOR COUNT — fixed bottom left */}
      <div style={{ position: 'fixed', bottom: '90px', left: '16px', zIndex: 9990, display: menuOpen ? 'none' : 'flex', display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: '8px', background: '#111', border: '1px solid #2a2a2a', borderRadius: '20px', padding: '8px 14px', boxShadow: '0 4px 20px rgba(0,0,0,0.4)', fontFamily: 'DM Sans, sans-serif' }}>
        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', display: 'inline-block', flexShrink: 0, boxShadow: '0 0 6px #ef4444' }} />
        <span style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>{visitorCount} people viewing right now</span>
      </div>

      {/* SCROLL TRIGGER BANNER — sticky bottom */}
      {showScrollBanner && !scrollBannerDismissed && !isMobile && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9995, background: 'linear-gradient(135deg,#E8610A,#C84E06)', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap', boxShadow: '0 -4px 24px rgba(232,97,10,0.5)', fontFamily: 'DM Sans, sans-serif' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '20px' }}>🔥</span>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>47 businesses signed up today — don’t get left behind</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>Free plan available — no credit card needed — live in 5 minutes</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link href="/signup" style={{ background: '#fff', color: '#E8610A', padding: '10px 24px', borderRadius: '8px', fontSize: '13px', fontWeight: 800, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Start Free Now →
            </Link>
            <button onClick={() => { setShowScrollBanner(false); setScrollBannerDismissed(true) }} style={{ background: 'transparent', border: 'none', color: 'rgba(255,255,255,0.7)', fontSize: '20px', cursor: 'pointer', padding: '0 4px', lineHeight: 1 }}>×</button>
          </div>
        </div>
      )}

      {/* EXIT INTENT POPUP */}
      {showExitPopup && !menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', fontFamily: 'DM Sans, sans-serif' }}>
          <div style={{ background: '#111', border: '1px solid #E8610A40', borderRadius: '20px', padding: '48px 40px', maxWidth: '480px', width: '100%', textAlign: 'center', position: 'relative', boxShadow: '0 0 60px rgba(232,97,10,0.2)' }}>
            <button onClick={() => setShowExitPopup(false)} style={{ position: 'absolute', top: '16px', right: '20px', background: 'none', border: 'none', color: '#555', fontSize: '24px', cursor: 'pointer', lineHeight: 1 }}>×</button>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>⏳</div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#fff', marginBottom: '12px', lineHeight: 1.2 }}>
              Wait — before you go.
            </h2>
            <p style={{ fontSize: '15px', color: '#888', lineHeight: 1.7, marginBottom: '24px' }}>
              Your competitors are using Traffikora right now. Start free — no credit card, no commitment. Just results.
            </p>
            <div style={{ background: '#0d0d0d', border: '1px solid #2a2a2a', borderRadius: '12px', padding: '20px', marginBottom: '24px' }}>
              <div style={{ fontSize: '12px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '8px' }}>Offer expires in</div>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                {[
                  { val: pad(countdown.hours), label: 'HRS' },
                  { val: pad(countdown.minutes), label: 'MIN' },
                  { val: pad(countdown.seconds), label: 'SEC' },
                ].map((t, i) => (
                  <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', padding: '10px 16px', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '28px', fontWeight: 900, color: '#E8610A', lineHeight: 1 }}>{t.val}</div>
                      <div style={{ fontSize: '9px', color: '#555', letterSpacing: '.1em', marginTop: '4px' }}>{t.label}</div>
                    </div>
                    {i < 2 && <span style={{ fontSize: '24px', fontWeight: 700, color: '#E8610A' }}>:</span>}
                  </div>
                ))}
              </div>
            </div>
            <Link href="/signup" onClick={() => setShowExitPopup(false)} style={{ display: 'block', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '16px', borderRadius: '10px', fontSize: '15px', fontWeight: 800, textDecoration: 'none', marginBottom: '12px', boxShadow: '0 4px 24px rgba(232,97,10,0.4)' }}>
              Claim My Free Account →
            </Link>
            <button onClick={() => setShowExitPopup(false)} style={{ background: 'transparent', border: 'none', color: '#444', fontSize: '13px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
              No thanks, I’ll let my competitors win
            </button>
          </div>
        </div>
      )}
    </>
  )
}
