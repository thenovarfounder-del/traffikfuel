// @ts-nocheck
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BlogCard from '@/components/BlogCard'

export const revalidate = 3600

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const staticPosts = [
  { category: 'Platform', title: 'What Is Traffikora? The Marketing Platform That Never Stops Working.', excerpt: 'Most marketing tools make you work. Traffikora works for you — automatically, every single day.', slug: 'what-is-traffikora', read: '5 min read' },
  { category: 'AI Search', title: 'Why We Optimize for AI Engines, Not Just Google.', excerpt: 'Google is still important. But the businesses that win the next decade will be the ones showing up in AI engines.', slug: 'why-ai-engine-optimization', read: '6 min read' },
  { category: 'Platform', title: 'How Traffikora Is Different From Every Other Marketing Tool.', excerpt: 'Most marketing tools give you more work. Traffikora eliminates the work entirely.', slug: 'how-traffikora-is-different', read: '6 min read' },
  { category: 'Small Business', title: 'The Small Business Marketing Problem Nobody Is Solving.', excerpt: 'Small businesses need consistent marketing more than anyone. They have the least time and budget to do it.', slug: 'small-business-marketing-problem', read: '6 min read' },
  { category: 'AI Search', title: 'What Is Google SEO + AI Engine Optimization (AEO)?', excerpt: 'SEO got your business on Google. AEO gets your business recommended by ChatGPT, Claude, Gemini, and every major AI engine.', slug: 'what-is-aeo', read: '7 min read' },
  { category: 'Platform', title: 'Set It Once: How Traffikora Automation Actually Works.', excerpt: 'Not magic. Not vague. Here is exactly what happens after you connect your accounts — step by step.', slug: 'set-it-once-how-traffikora-works', read: '6 min read' },
  { category: 'AI Search', title: 'What Is AI Engine Optimization?', excerpt: 'A deep dive into AEO — the new discipline that gets your business recommended by AI-powered search engines.', slug: 'what-is-ai-engine-optimization', read: '5 min read' },
  { category: 'Local SEO', title: 'Local SEO Tips for Small Businesses.', excerpt: 'Practical, actionable local SEO strategies any small business can implement to rank higher and get found faster.', slug: 'local-seo-tips-for-small-businesses', read: '5 min read' },
  { category: 'Google', title: 'Why Your Google Business Profile Matters More Than Ever.', excerpt: 'Your Google Business Profile is your most powerful free marketing tool. Here is how to use it right.', slug: 'why-google-business-profile-matters', read: '5 min read' },
  { category: 'Reviews', title: 'How to Get More Google Reviews for Your Business.', excerpt: 'Reviews are the single biggest trust signal for local businesses. Here is how to get more of them systematically.', slug: 'how-to-get-more-google-reviews', read: '5 min read' },
  { category: 'Local SEO', title: 'What Is Local SEO?', excerpt: 'Everything you need to know about local SEO — what it is, why it matters, and how to win it for your business.', slug: 'what-is-local-seo', read: '5 min read' },
  { category: 'AI Search', title: 'AI Search for Local Business: What You Need to Know.', excerpt: 'AI search is changing how customers find local businesses. Here is what that means for you and how to stay ahead.', slug: 'ai-search-for-local-business', read: '5 min read' },
]

export default async function Blog() {
  const { data: dynamicPosts } = await supabase
    .from('blog_posts_public')
    .select('slug, title, excerpt, category, read_time')
    .order('created_at', { ascending: false })

  const allPosts = [
    ...(dynamicPosts || []).map(p => ({ ...p, read: p.read_time || '7 min read' })),
    ...staticPosts
  ]

  return (
    <>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      <link href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap' rel='stylesheet' />
      <Nav />
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Traffikora Blog</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Marketing insights for local businesses that want to grow.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '580px', margin: '0 auto 24px' }}>Practical guides on AI marketing, local SEO, Google, ChatGPT, Claude, Gemini, social media automation, and more.</p>
        <p style={{ fontSize: '14px', color: '#555' }}>{allPosts.length} articles and growing</p>
      </section>
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
          {allPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to put your marketing on autopilot?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Start free today. No credit card required. Cancel anytime.</p>
        <Link href='/signup' style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Today</Link>
      </section>
      <Footer />
    </>
  )
}