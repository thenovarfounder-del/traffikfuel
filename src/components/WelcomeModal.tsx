// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function WelcomeModal({ userStatus, userName }) {
  const router = useRouter()
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (userStatus !== 'free') return
    const dismissed = localStorage.getItem('traffikora_welcome_dismissed')
    if (!dismissed) setShow(true)
  }, [userStatus])

  function dismiss() {
    localStorage.setItem('traffikora_welcome_dismissed', 'true')
    setShow(false)
  }

  function upgrade() {
    localStorage.setItem('traffikora_welcome_dismissed', 'true')
    router.push('/pricing')
  }

  if (!show) return null

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
      <div style={{ background: '#0d0d0d', border: '1px solid #1a1a1a', borderRadius: '20px', maxWidth: '580px', width: '100%', overflow: 'hidden', boxShadow: '0 0 80px rgba(232,97,10,0.15)' }}>

        <div style={{ background: 'linear-gradient(135deg, #1a0e00, #0d0d0d)', borderBottom: '1px solid #1a1a1a', padding: '32px 36px' }}>
          <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '10px' }}>Welcome to Traffikora</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#fff', margin: '0 0 8px', lineHeight: 1.2 }}>
            You&apos;re in, <em style={{ color: '#E8610A', fontStyle: 'italic' }}>{userName}.</em>
          </h2>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, lineHeight: 1.6 }}>You&apos;re on the Free Plan. Here&apos;s what that means and how to get the most out of Traffikora.</p>
        </div>

        <div style={{ padding: '28px 36px' }}>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '28px' }}>

            <div style={{ background: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)', borderRadius: '12px', padding: '18px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#22c55e', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>You have access to</div>
              {[
                '3 blog posts this month',
                'Business Brain',
                'Dashboard & analytics',
                'Email support',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '13px', color: '#aaa' }}>
                  <span style={{ color: '#22c55e', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ background: 'rgba(232,97,10,0.05)', border: '1px solid rgba(232,97,10,0.15)', borderRadius: '12px', padding: '18px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#E8610A', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '12px' }}>Unlock with Starter</div>
              {[
                'Unlimited blog posts',
                'Social media generator',
                'One-Push Publish',
                'Content queue & calendar',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontSize: '13px', color: '#aaa' }}>
                  <span style={{ color: '#E8610A', fontWeight: 700, flexShrink: 0 }}>🔒</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(168,85,247,0.05)', border: '1px solid rgba(168,85,247,0.15)', borderRadius: '12px', padding: '14px 18px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '22px' }}>🤖</span>
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#a855f7', marginBottom: '2px' }}>Want full automation?</div>
              <div style={{ fontSize: '12px', color: '#555', lineHeight: 1.5 }}>Upgrade to Pro and your AI agents run every single day automatically — blogs, social posts, everything. You never touch it.</div>
            </div>
          </div>

          <button onClick={upgrade} style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', boxShadow: '0 4px 24px rgba(232,97,10,0.4)', marginBottom: '12px' }}>
            🚀 Upgrade Now — Plans from $47/mo
          </button>

          <button onClick={dismiss} style={{ width: '100%', padding: '12px', background: 'transparent', color: '#444', border: 'none', borderRadius: '12px', fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            Continue with Free Plan →
          </button>

        </div>
      </div>
    </div>
  )
}
