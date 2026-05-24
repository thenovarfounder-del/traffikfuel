// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function BlogPage() {
  const posts = [
    {
      slug: 'what-is-ai-engine-optimization',
      category: 'AI Marketing',
      title: 'What Is AI Engine Optimization and Why Every Local Business Needs It Now',
      excerpt: 'Over 100 million people now ask ChatGPT, Gemini, and Perplexity for business recommendations instead of typing into Google. Here is what AI engine optimization is and how to make sure your business shows up.',
      date: 'May 20, 2026',
      readTime: '6 min read',
    },
    {
      slug: 'local-seo-tips-for-small-businesses',
      category: 'Local SEO',
      title: '7 Local SEO Tips That Actually Move the Needle for Small Businesses in 2026',
      excerpt: 'Most local SEO advice is outdated or written for enterprise companies. These 7 tactics are specifically for small business owners who want to rank higher on Google without hiring an agency.',
      date: 'May 15, 2026',
      readTime: '8 min read',
    },
    {
      slug: 'why-google-business-profile-matters',
      category: 'Google Business Profile',
      title: 'Why Your Google Business Profile Is the Most Valuable Marketing Asset You Own',
      excerpt: 'Most small business owners set up their Google Business Profile once and forget about it. That is a massive mistake. Here is why an active GBP is the single highest-ROI marketing channel for local businesses.',
      date: 'May 10, 2026',
      readTime: '7 min read',
    },
  ]

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>The Traffikora Blog</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Marketing insights for local businesses that want to grow.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '580px', margin: '0 auto' }}>Local SEO, AI engine optimization, Google Business Profile tips, and more — written for business owners, not marketers.</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {posts.map((post) => (
              <Link key={post.slug} href={'/blog/' + post.slug} style={{ textDecoration: 'none', color: 'inherit', display: 'block', border: '2.5px solid #111', padding: '36px', background: '#fff', transition: 'background 0.2s' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>{post.category}</p>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 900, color: '#111', lineHeight: 1.3, marginBottom: '16px' }}>{post.title}</h2>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7, marginBottom: '24px' }}>{post.excerpt}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1.5px solid #eee', paddingTop: '16px' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888' }}>{post.date}</span>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888' }}>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '64px 32px', textAlign: 'center', borderTop: '2.5px solid #111' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 900, color: '#111', marginBottom: '16px' }}>Want Traffikora doing this for your business automatically?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', maxWidth: '520px', margin: '0 auto 32px' }}>Stop reading about marketing. Let Traffikora run it for you.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Set it once. It markets forever.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
