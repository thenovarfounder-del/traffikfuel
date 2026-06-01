// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const STEPS = [
  { id: 1, title: 'Welcome to Traffikora', icon: '👋' },
  { id: 2, title: 'Connect WordPress', icon: '📝' },
  { id: 3, title: 'Connect Social Media', icon: '📱' },
  { id: 4, title: 'Choose Your Industry', icon: '🎯' },
  { id: 5, title: 'You’re Live!', icon: '🚀' },
]

const INDUSTRIES = [
  'Restaurant', 'Dentist', 'Lawyer', 'HVAC', 'Plumber',
  'Contractor', 'Salon', 'Gym', 'Chiropractor', 'Real Estate',
  'Auto Repair', 'Veterinarian', 'Therapist', 'Accountant', 'Other'
]

export default function OnboardingPage() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )

  const [step, setStep] = useState(1)
  const [userId, setUserId] = useState(null)
  const [wpUrl, setWpUrl] = useState('')
  const [wpUser, setWpUser] = useState('')
  const [wpPass, setWpPass] = useState('')
  const [industry, setIndustry] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) setUserId(user.id)
    }
    getUser()
  }, [])

  const finishOnboarding = async () => {
    setLoading(true)
    await supabase.from('users').update({ onboarding_complete: true }).eq('id', userId)
    setLoading(false)
    window.location.href = '/dashboard'
  }

  const btn = {
    width: '100%',
    padding: '14px',
    background: 'linear-gradient(135deg, #E8610A, #C84E06)',
    border: 'none',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '8px'
  }

  const skipBtn = {
    width: '100%',
    padding: '12px',
    background: 'transparent',
    border: '1px solid #333333',
    borderRadius: '8px',
    color: '#888888',
    fontSize: '14px',
    cursor: 'pointer',
    marginTop: '8px'
  }

  const input = {
    width: '100%',
    padding: '12px 16px',
    background: '#222222',
    border: '1px solid #333333',
    borderRadius: '8px',
    color: '#ffffff',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',
    marginBottom: '12px'
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#111111',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'DM Sans, sans-serif',
      padding: '24px'
    }}>
      <div style={{
        background: '#1a1a1a',
        border: '1px solid #2a2a2a',
        borderRadius: '16px',
        padding: '48px 40px',
        width: '100%',
        maxWidth: '520px',
        boxShadow: '0 0 40px rgba(232,97,10,0.08)'
      }}>

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{ fontSize: '28px', fontFamily: 'Playfair Display, serif', fontWeight: '700', color: '#ffffff' }}>
            Traffik<span style={{ color: '#E8610A' }}>ora</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '32px' }}>
          {STEPS.map(s => (
            <div key={s.id} style={{
              flex: 1,
              height: '4px',
              borderRadius: '2px',
              background: s.id <= step ? '#E8610A' : '#333333',
              transition: 'background 0.3s'
            }} />
          ))}
        </div>

        {/* Step 1 -- Welcome */}
        {step === 1 && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>👋</div>
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
              Welcome to Traffikora!
            </h1>
            <p style={{ color: '#888888', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
              Let’s get you set up in just a few steps. We’ll connect your website, social accounts, and customize your experience so Traffikora can start working for you right away.
            </p>
            <button style={btn} onClick={() => setStep(2)}>Let’s Get Started</button>
          </div>
        )}

        {/* Step 2 -- WordPress */}
        {step === 2 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>📝</div>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>Connect WordPress</h2>
              <p style={{ color: '#888888', fontSize: '14px' }}>Traffikora will auto-publish blog posts directly to your site.</p>
            </div>
            <input style={input} type="text" placeholder="WordPress Site URL (e.g. https://yoursite.com)" value={wpUrl} onChange={e => setWpUrl(e.target.value)} />
            <input style={input} type="text" placeholder="WordPress Username" value={wpUser} onChange={e => setWpUser(e.target.value)} />
            <input style={input} type="password" placeholder="Application Password" value={wpPass} onChange={e => setWpPass(e.target.value)} />
            <p style={{ color: '#555555', fontSize: '12px', marginBottom: '16px' }}>
              Generate an Application Password in WordPress under Users → Profile → Application Passwords.
            </p>
            <button style={btn} onClick={() => setStep(3)}>Save & Continue</button>
            <button style={skipBtn} onClick={() => setStep(3)}>Skip for now</button>
          </div>
        )}

        {/* Step 3 -- Social */}
        {step === 3 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>📱</div>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>Connect Social Media</h2>
              <p style={{ color: '#888888', fontSize: '14px' }}>Connect your accounts so Traffikora can publish content automatically.</p>
            </div>
            {['Facebook', 'Instagram', 'LinkedIn', 'X (Twitter)', 'TikTok'].map(platform => (
              <div key={platform} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 16px',
                background: '#222222',
                border: '1px solid #333333',
                borderRadius: '8px',
                marginBottom: '10px'
              }}>
                <span style={{ color: '#ffffff', fontSize: '15px' }}>{platform}</span>
                <button onClick={() => window.location.href = '/dashboard/connect/' + platform.toLowerCase().replace(' (twitter)', '').replace('x ', 'twitter')} style={{
                  padding: '6px 16px',
                  background: 'transparent',
                  border: '1px solid #E8610A',
                  borderRadius: '6px',
                  color: '#E8610A',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}>Connect</button>
              </div>
            ))}
            <button style={{ ...btn, marginTop: '16px' }} onClick={() => setStep(4)}>Continue</button>
            <button style={skipBtn} onClick={() => setStep(4)}>Skip for now</button>
          </div>
        )}

        {/* Step 4 -- Industry */}
        {step === 4 && (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '40px', marginBottom: '12px' }}>🎯</div>
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>Choose Your Industry</h2>
              <p style={{ color: '#888888', fontSize: '14px' }}>This helps Traffikora generate content that fits your business.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
              {INDUSTRIES.map(ind => (
                <button key={ind} onClick={() => setIndustry(ind)} style={{
                  padding: '12px',
                  background: industry === ind ? 'rgba(232,97,10,0.15)' : '#222222',
                  border: industry === ind ? '1px solid #E8610A' : '1px solid #333333',
                  borderRadius: '8px',
                  color: industry === ind ? '#E8610A' : '#cccccc',
                  fontSize: '14px',
                  cursor: 'pointer',
                  textAlign: 'center'
                }}>{ind}</button>
              ))}
            </div>
            <button style={btn} onClick={() => setStep(5)} disabled={!industry}>Continue</button>
          </div>
        )}

        {/* Step 5 -- Go Live */}
        {step === 5 && (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
            <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
              You’re all set!
            </h1>
            <p style={{ color: '#888888', fontSize: '15px', lineHeight: '1.6', marginBottom: '32px' }}>
              Traffikora is ready to start generating content, publishing to your blog, and growing your online presence. Head to your dashboard to see it in action.
            </p>
            <button style={btn} onClick={finishOnboarding} disabled={loading}>
              {loading ? 'Setting up...' : 'Go to My Dashboard'}
            </button>
          </div>
        )}

        {/* Step counter */}
        <p style={{ textAlign: 'center', color: '#444444', fontSize: '12px', marginTop: '24px' }}>
          Step {step} of {STEPS.length}
        </p>

      </div>
    </div>
  )
}
