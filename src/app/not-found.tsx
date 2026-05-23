// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      

      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '120px 32px' }}>
        <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '140px', fontWeight: 900, color: '#E8610A', lineHeight: 1 }}>404</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 700, marginTop: '24px', marginBottom: '16px' }}>Looks like this page got lost in the algorithm.</h1>
        <p style={{ fontSize: '18px', color: '#ccc', maxWidth: '480px', margin: '0 auto 48px' }}>Don't worry — Traffikora still has you covered. Head back home or start your free trial.</p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ background: '#fff', color: '#111', padding: '14px 32px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, border: '2.5px solid #fff' }}>Go Home</Link>
          <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '14px 32px', textDecoration: 'none', fontSize: '16px', fontWeight: 700, border: '2.5px solid #E8610A' }}>Start Free Trial</Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
