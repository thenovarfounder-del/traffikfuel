const fs = require('fs');
const content = `// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('traffikora_cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('traffikora_cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('traffikora_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#111',
      borderTop: '2.5px solid #E8610A',
      padding: '20px 32px',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '24px',
      flexWrap: 'wrap',
    }}>
      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '14px',
        color: '#ccc',
        margin: 0,
        lineHeight: 1.7,
        maxWidth: '680px',
      }}>
        We use cookies to improve your experience, analyze site traffic, and provide marketing features. By continuing to use Traffikora, you agree to our use of cookies.{' '}
        <Link href="/privacy" style={{ color: '#E8610A', fontWeight: 600, textDecoration: 'none' }}>Privacy Policy</Link>
      </p>
      <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            color: '#ccc',
            background: 'transparent',
            border: '1.5px solid #555',
            padding: '10px 24px',
            cursor: 'pointer',
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '14px',
            fontWeight: 700,
            color: '#fff',
            background: '#E8610A',
            border: '1.5px solid #E8610A',
            padding: '10px 24px',
            cursor: 'pointer',
          }}
        >
          Accept All
        </button>
      </div>
    </div>
  )
}
`;

fs.writeFileSync('src/components/CookieBanner.tsx', content);
console.log('Written: src/components/CookieBanner.tsx');