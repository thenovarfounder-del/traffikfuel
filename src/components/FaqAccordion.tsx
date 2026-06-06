// @ts-nocheck
'use client'
import { useState } from 'react'

const faqs = [
  { q: 'Do I need any technical skills to use Traffikora?', a: 'None at all. If you can fill out a form, you can use Traffikora. Our onboarding wizard walks you through every step and you’ll be live in under 5 minutes.' },
  { q: 'What social media accounts do you need access to?', a: 'We request permission to post on your behalf to platforms you choose — Facebook, Instagram, TikTok, YouTube, and more. You control exactly which platforms are connected and can disconnect at any time.' },
  { q: 'Will you post without my approval?', a: 'You can set Traffikora to fully automatic or review-before-publish mode. You are always in control of what goes live on your accounts.' },
  { q: 'What happens when I cancel?', a: 'Cancel any time with one click — no phone call required, no questions asked. You keep access until the end of your billing period. All your data can be exported before you go.' },
  { q: 'Is my data safe? What do you do with it?', a: 'We never sell your data. We use it only to generate and publish content on your behalf. All data is encrypted at rest and in transit.' },
  { q: 'Do you offer refunds?', a: 'We offer a free plan with no credit card required. If you upgrade and are not satisfied within 30 days, contact us for a full refund. No questions asked.' },
]

export default function FaqAccordion() {
  const [openFaq, setOpenFaq] = useState(null)
  return (
    <div className="faq-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', maxWidth: '1000px', margin: '0 auto' }}>
      {faqs.map((faq, i) => (
        <div key={i} style={{ border: '1.5px solid #111', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer' }} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
          <div style={{ background: '#111', padding: '16px 20px', fontSize: '14px', fontWeight: 700, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', cursor: 'pointer' }}>
            {faq.q}
            <span style={{ color: '#E8610A', fontSize: '18px', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
          </div>
          {openFaq === i && (
            <div style={{ background: '#fff', padding: '16px 20px', fontSize: '13px', color: '#444', lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</div>
          )}
        </div>
      ))}
    </div>
  )
}
