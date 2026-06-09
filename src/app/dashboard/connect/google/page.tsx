// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'

export default function ConnectGoogle() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  const handleConnect = () => {
    const clientId = '626240603555-8d1t7t137ac0gmtl23rchrdc5miv7sfk.apps.googleusercontent.com'
    const redirectUri = 'https://www.traffikora.com/api/auth/google/callback'
    const scope = [
      'openid',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/business.manage',
    ].join(' ')

    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope,
      access_type: 'offline',
      prompt: 'consent',
    })

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'DM Sans, sans-serif',
    }}>
      <div style={{
        background: '#111',
        border: '1px solid #222',
        borderRadius: '16px',
        padding: isMobile ? '32px 24px' : '48px',
        maxWidth: '480px',
        width: '100%',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>&#128269;</div>
        <h1 style={{
          color: '#fff',
          fontSize: isMobile ? '24px' : '28px',
          fontWeight: '700',
          marginBottom: '12px',
          fontFamily: 'Orbitron, sans-serif',
        }}>
          Connect Google Business
        </h1>
        <p style={{
          color: '#888',
          fontSize: '15px',
          lineHeight: '1.6',
          marginBottom: '32px',
        }}>
          Connect your Google Business Profile so Traffikora can manage your listings, posts, and reviews automatically.
        </p>
        <button
          onClick={handleConnect}
          style={{
            background: '#E8610A',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 32px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            width: '100%',
            marginBottom: '16px',
          }}
        >
          Connect Google Business Profile
        </button>
        <p style={{ color: '#555', fontSize: '13px' }}>
          You’ll be redirected to Google to authorize access
        </p>
      </div>
    </div>
  )
}
