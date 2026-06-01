// @ts-nocheck
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function FaqPage() {
  const [open, setOpen] = useState(null)

  const faqs = [
    {
      category: 'Getting Started',
      questions: [
        { q: 'What is Traffikora?', a: 'Traffikora is an AI-powered marketing automation platform built for small and mid-size businesses. You connect your accounts once, and Traffikora handles your social media, Google Business Profile, local SEO, and AI engine optimization automatically — forever.' },
        { q: 'How long does setup take?', a: 'Most businesses are fully set up in under 10 minutes. You connect your Google Business Profile, social media accounts, and tell us about your business. Traffikora takes it from there.' },
        { q: 'Do I need any marketing experience to use Traffikora?', a: 'None at all. Traffikora was built specifically for business owners who are not marketers. You do not need to understand SEO, social media algorithms, or content strategy. The platform handles everything automatically.' },
        { q: 'Do I need a credit card to start the free trial?', a: 'No. You can start your Free plan available with just your email address. You will not be charged anything until your trial ends and you choose to continue.' },
      ]
    },
    {
      category: 'Features',
      questions: [
        { q: 'What does Traffikora actually do for my business?', a: 'Traffikora automates six core marketing functions: social media content creation and publishing, Google Business Profile management, local SEO optimization, AI engine optimization, review generation, and monthly performance reporting. All of it runs automatically after your initial setup.' },
        { q: 'What social media platforms does Traffikora post to?', a: 'Traffikora publishes to Instagram, Facebook, and Google Business Profile automatically. Additional platform support is available on higher plans.' },
        { q: 'Does Traffikora write the content or do I have to write it?', a: 'Traffikora writes all of your content automatically. Our AI creates posts, captions, and updates tailored to your specific business type, location, and brand. You never have to write a single post.' },
        { q: 'What is AI engine optimization and why does it matter?', a: 'AI engine optimization means making sure your business gets recommended when people ask ChatGPT, Claude, Gemini, Perplexity, or Copilot for suggestions. Over 100 million people now use AI engines to find businesses instead of traditional search. Traffikora is the only platform that automates this for small businesses.' },
        { q: 'How does Traffikora improve my Google ranking?', a: 'Traffikora improves your Google ranking through three automated actions: consistent Google Business Profile activity (posts, photos, Q and A), local SEO citation building and keyword targeting, and reputation management through review generation. Together, these signals tell Google your business is active, relevant, and trusted.' },
        { q: 'Does Traffikora manage Google reviews?', a: 'Yes. Traffikora automates review request follow-ups after customer interactions, monitors every new review across platforms, and flags negative reviews immediately so you can respond quickly.' },
      ]
    },
    {
      category: 'Pricing and Plans',
      questions: [
        { q: 'How much does Traffikora cost?', a: 'Traffikora starts at $97 per month for the Starter plan, which covers one business location. The Pro plan is $197 per month for up to 3 locations. The Agency plan is $797 per month for up to 20 locations. Enterprise is $1,497 per month for unlimited locations and custom needs.' },
        { q: 'Can I cancel anytime?', a: 'Yes. Cancel anytime from your dashboard with one click. There are no cancellation fees, no long-term contracts, and no questions asked.' },
        { q: 'Can I upgrade or downgrade my plan?', a: 'Yes. You can change your plan at any time from your account settings. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle.' },
        { q: 'Is there a contract or minimum commitment?', a: 'No contracts and no minimum commitment. Traffikora is month-to-month. You pay only for what you use and cancel whenever you want.' },
        { q: 'Do you offer refunds?', a: 'We offer a Free plan available so you can experience Traffikora before being charged. If you have a billing issue after your trial, contact our support team and we will work with you to make it right.' },
      ]
    },
    {
      category: 'Comparisons',
      questions: [
        { q: 'How is Traffikora different from Hootsuite or Later?', a: 'Hootsuite and Later are social media schedulers. You still have to create every piece of content yourself. They do not write content, do not touch Google, do not do SEO, and have no AI engine strategy. Traffikora automates all of this from one platform.' },
        { q: 'How is Traffikora different from Mailchimp or Constant Contact?', a: 'Mailchimp and Constant Contact are email marketing tools. They have no social media automation, no Google Business Profile management, no local SEO, and no AI engine optimization. Traffikora covers all of these channels automatically.' },
        { q: 'How is Traffikora different from HubSpot?', a: 'HubSpot is an enterprise CRM built for large sales teams. It is complex, expensive (often $800+ per month for real features), and requires dedicated marketing staff to operate. Traffikora is built for small business owners with no marketing experience and runs completely on autopilot.' },
        { q: 'How is Traffikora different from SEMrush?', a: 'SEMrush is an SEO research tool for marketing professionals. It gives you data and insights but does not automate or publish anything for you. Traffikora takes action automatically — it does the work, not just the analysis.' },
      ]
    },
    {
      category: 'Technical',
      questions: [
        { q: 'What accounts do I need to connect?', a: 'At minimum, you connect your Google Business Profile. You can also connect Instagram and Facebook. The more accounts you connect, the more channels Traffikora can automate for you.' },
        { q: 'Is my data secure?', a: 'Yes. Traffikora uses industry-standard encryption for all data in transit and at rest. We never sell your data to third parties. Your business information is used only to power your marketing automation.' },
        { q: 'Does Traffikora work for businesses outside the United States?', a: 'Traffikora is currently optimized for businesses in the United States, Canada, and the United Kingdom. We are expanding to additional markets throughout 2026.' },
        { q: 'Can I see what Traffikora is posting before it goes live?', a: 'On Pro and higher plans, you can review a content preview dashboard. On all plans, you receive a monthly performance report showing everything that was published and how it performed.' },
      ]
    },
  ]

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>FAQ</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Everything you want to know about Traffikora.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '580px', margin: '0 auto' }}>Can not find your answer? Email us at support@traffikora.com and we will get back to you within one business day.</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          {faqs.map((section) => (
            <div key={section.category} style={{ marginBottom: '56px' }}>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 900, color: '#111', marginBottom: '8px', paddingBottom: '16px', borderBottom: '4px solid #E8610A' }}>{section.category}</h2>
              <div>
                {section.questions.map((item, i) => {
                  const id = section.category + i
                  const isOpen = open === id
                  return (
                    <div key={i} style={{ borderBottom: '1.5px solid #eee' }}>
                      <button
                        onClick={() => setOpen(isOpen ? null : id)}
                        style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '22px 0', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}
                      >
                        <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', fontWeight: 600, color: '#111', lineHeight: 1.4 }}>{item.q}</span>
                        <span style={{ color: '#E8610A', fontSize: '22px', fontWeight: 700, flexShrink: 0 }}>{isOpen ? '−' : '+'}</span>
                      </button>
                      {isOpen && (
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.8, paddingBottom: '22px', margin: 0 }}>{item.a}</p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '64px 32px', textAlign: 'center', borderTop: '2.5px solid #111' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 900, color: '#111', marginBottom: '16px' }}>Still have questions?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', maxWidth: '500px', margin: '0 auto 32px' }}>Our team responds to every email within one business day. We are here to help.</p>
        <a href="mailto:support@traffikora.com" style={{ background: '#111', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #111', display: 'inline-block' }}>Email Support</a>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to see it for yourself?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No no credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Today</Link>
      </section>

      <Footer />
    </>
  )
}
