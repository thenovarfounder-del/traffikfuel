// @ts-nocheck
'use client'

export default function CheckEmailPage() {
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
        maxWidth: '460px',
        boxShadow: '0 0 40px rgba(232,97,10,0.08)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '56px', marginBottom: '24px' }}>📧</div>
        <div style={{ fontSize: '28px', fontFamily: 'Playfair Display, serif', fontWeight: '700', color: '#ffffff', marginBottom: '8px' }}>
          Traffik<span style={{ color: '#E8610A' }}>ora</span>
        </div>
        <h1 style={{ fontSize: '22px', fontWeight: '700', color: '#ffffff', margin: '16px 0 12px' }}>
          Check your email
        </h1>
        <p style={{ color: '#888888', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px' }}>
          We sent a confirmation link to your email address. Click the link to confirm your account and get started with Traffikora.
        </p>
        <div style={{
          background: 'rgba(232,97,10,0.08)',
          border: '1px solid rgba(232,97,10,0.2)',
          borderRadius: '10px',
          padding: '16px',
          marginBottom: '32px'
        }}>
          <p style={{ color: '#E8610A', fontSize: '14px', margin: 0 }}>
            ✉️ After clicking the link in your email, you’ll be taken directly to your setup wizard.
          </p>
        </div>
        <p style={{ color: '#555555', fontSize: '13px' }}>
          Didn’t get the email? Check your spam folder or{' '}
          <a href="/signup" style={{ color: '#E8610A', textDecoration: 'none' }}>try signing up again</a>.
        </p>
      </div>
    </div>
  )
}
