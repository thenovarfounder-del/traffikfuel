// @ts-nocheck
'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith('/dashboard')) { setVisible(false); return; }
    const consent = localStorage.getItem('traffikora_cookie_consent');
    if (!consent) setVisible(true);
  }, [pathname]);

  function acceptAll() {
    localStorage.setItem('traffikora_cookie_consent', 'accepted');
    setVisible(false);
  }
  function declineAll() {
    localStorage.setItem('traffikora_cookie_consent', 'declined');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{ position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '720px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '14px', padding: '24px 28px', zIndex: 9999, boxShadow: '0 8px 40px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', flexWrap: 'wrap' }}>
      <div style={{ flex: 1, minWidth: '240px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#fff', lineHeight: 1.6, margin: 0 }}>
          We use cookies to improve your experience, analyze traffic, and power our live chat and ads.
          <a href='/cookie-policy' style={{ color: '#E8610A', marginLeft: '6px', textDecoration: 'underline' }}>Learn more</a>
        </p>
      </div>
      <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
        <button onClick={declineAll} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#aaa', background: 'transparent', border: '1px solid #444', borderRadius: '8px', padding: '10px 20px', cursor: 'pointer' }}>Decline</button>
        <button onClick={acceptAll} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 600, color: '#fff', background: '#E8610A', border: 'none', borderRadius: '8px', padding: '10px 20px', cursor: 'pointer' }}>Accept All</button>
      </div>
    </div>
  );
}
