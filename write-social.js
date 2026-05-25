const fs = require('fs')

const posts = [
  {
    path: 'src/app/blog/ai-search-for-local-business/page.tsx',
    title: 'AI Search for Local Business',
    headline: 'How AI Search Is Changing Local Business Marketing',
    sub: 'ChatGPT, Claude, and Gemini are now answering \u201cwhere should I go\u201d questions. Is your business showing up?',
    body: [
      { h: 'The shift is already happening', p: 'Millions of people now ask AI engines like ChatGPT, Claude, and Gemini for local business recommendations. \u201cBest dentist near me.\u201d \u201cTop-rated HVAC company in Dallas.\u201d \u201cWhere should I get my car fixed?\u201d These aren\u2019t Google searches anymore. They\u2019re AI conversations.' },
      { h: 'Why most businesses are invisible to AI', p: 'AI engines pull data from across the web \u2014 reviews, directories, websites, and content. Businesses with thin online presence, few reviews, or outdated information simply don\u2019t get mentioned. Most businesses don\u2019t even know this is happening.' },
      { h: 'How to get found in AI search', p: 'The key is consistent, structured information across every platform. Strong Google Business Profile. Lots of recent reviews. Content that answers the questions your customers are asking. Traffikora automates all of this \u2014 so you show up everywhere AI looks.' },
      { h: 'The businesses winning right now', p: 'Early movers who have optimized for AI search are already seeing results. More calls. More website visits. More customers who say \u201cI found you on ChatGPT.\u201d This window won\u2019t stay open forever.' },
    ]
  },
  {
    path: 'src/app/blog/how-to-get-more-google-reviews/page.tsx',
    title: 'How to Get More Google Reviews',
    headline: 'How to Get More Google Reviews (Without Asking Awkwardly)',
    sub: 'Google reviews are the single biggest driver of local search rankings. Here\u2019s how to get them on autopilot.',
    body: [
      { h: 'Why Google reviews matter so much', p: 'Google uses review quantity, recency, and rating as major ranking factors for local search. A business with 200 reviews almost always outranks one with 20 \u2014 even if the product is identical. Reviews also build trust instantly with new customers.' },
      { h: 'The problem with asking manually', p: 'Most businesses know they should ask for reviews. But it\u2019s awkward to ask in person, easy to forget to follow up, and impossible to do at scale. The businesses with the most reviews have a system \u2014 not just good intentions.' },
      { h: 'The right time to ask', p: 'Timing is everything. The best moment to request a review is right after a positive experience \u2014 when the customer is still happy. A text message sent within an hour of a completed service converts dramatically better than an email sent days later.' },
      { h: 'How Traffikora automates review generation', p: 'Traffikora automatically sends review requests to your customers at exactly the right moment. No awkward asking. No manual follow-up. Just a steady stream of new 5-star reviews building your reputation on autopilot.' },
    ]
  },
  {
    path: 'src/app/blog/how-traffikora-is-different/page.tsx',
    title: 'How Traffikora Is Different',
    headline: 'How Traffikora Is Different From Every Other Marketing Tool',
    sub: 'There are hundreds of marketing tools. There\u2019s only one that optimizes for Google AND every major AI engine \u2014 automatically.',
    body: [
      { h: 'Most tools solve one problem', p: 'HubSpot is great for CRM. Hootsuite handles social scheduling. SEMrush does keyword research. But none of them connect the dots. You end up paying for five tools, logging into five dashboards, and still not getting results because nothing works together.' },
      { h: 'Traffikora is a complete marketing machine', p: 'Traffikora combines SEO, AI engine optimization, Google Business Profile management, social media automation, review generation, and content marketing into one platform. Connect once. It runs everything. Forever.' },
      { h: 'The AI engine advantage', p: 'Every other platform was built for Google search. Traffikora was built for the next era \u2014 where your customers are asking Claude, ChatGPT, Gemini, Copilot, and Perplexity for recommendations. We optimize for all of them.' },
      { h: 'Built specifically for small business', p: 'Enterprise marketing platforms require dedicated teams to run them. Traffikora is designed for business owners who are busy running their business \u2014 not their marketing stack. Set it up in minutes. Never touch it again.' },
    ]
  },
  {
    path: 'src/app/blog/local-seo-tips-for-small-businesses/page.tsx',
    title: 'Local SEO Tips for Small Businesses',
    headline: 'Local SEO Tips for Small Businesses That Actually Work in 2026',
    sub: 'Ranking on Google Maps and local search doesn\u2019t require an agency. Here\u2019s what actually moves the needle.',
    body: [
      { h: 'Claim and complete your Google Business Profile', p: 'This is the single highest-leverage action any local business can take. A fully completed Google Business Profile \u2014 with photos, hours, services, and regular posts \u2014 dramatically improves your visibility in Google Maps and local search results.' },
      { h: 'Get more reviews consistently', p: 'Review velocity matters as much as total count. Ten new reviews this month beats 200 reviews from three years ago. Build a system for consistently requesting reviews from every customer and you\u2019ll climb rankings faster than competitors.' },
      { h: 'Build local citations', p: 'Citations are mentions of your business name, address, and phone number across directories like Yelp, Yellow Pages, and industry-specific sites. Consistency across all citations is critical \u2014 even small variations can hurt your rankings.' },
      { h: 'Create locally-relevant content', p: 'Blog posts and landing pages that target your city and service area help Google understand where you operate and who you serve. A plumber in Austin writing about \u201cAustin plumbing tips\u201d will rank for Austin plumbing searches.' },
    ]
  },
  {
    path: 'src/app/blog/set-it-once-how-traffikora-works/page.tsx',
    title: 'Set It Once: How Traffikora Works',
    headline: 'Set It Once: How Traffikora\u2019s Automation Actually Works',
    sub: 'Most marketing tools require constant attention. Traffikora is different. Here\u2019s exactly what happens after you connect your accounts.',
    body: [
      { h: 'Step 1: Connect your accounts', p: 'You connect your Google Business Profile, Facebook, and Instagram in about 10 minutes. One-time setup. No ongoing maintenance required from you.' },
      { h: 'Step 2: We build your foundation', p: 'Traffikora automatically creates your SEO foundation \u2014 optimized business descriptions, keyword targeting, citation building, and AI engine profiles across Claude, ChatGPT, Gemini, Copilot, and Perplexity.' },
      { h: 'Step 3: Daily automation kicks in', p: 'Every day, Traffikora publishes content to your Google Business Profile and social channels, sends review requests to recent customers, monitors and responds to reviews, and updates your AI engine profiles with fresh information.' },
      { h: 'Step 4: You watch it grow', p: 'You log into your dashboard to see your rankings climbing, reviews increasing, and traffic growing. The only thing you need to do is run your business. Traffikora handles the rest \u2014 forever.' },
    ]
  },
  {
    path: 'src/app/blog/small-business-marketing-problem/page.tsx',
    title: 'The Small Business Marketing Problem',
    headline: 'The Small Business Marketing Problem Nobody Talks About',
    sub: 'Small businesses are losing to chains and franchises not because of price or quality \u2014 but because of marketing. Here\u2019s the real problem.',
    body: [
      { h: 'The playing field is not level', p: 'A national chain has a full marketing team, a six-figure ad budget, and dedicated SEO specialists. A local business has the owner \u2014 who is also the salesperson, accountant, and customer service rep. The game is rigged. And most small businesses don\u2019t even know it.' },
      { h: 'Complexity is the real enemy', p: 'Google Business Profile. Facebook. Instagram. Reviews. SEO. AI engines. Email marketing. Social media. Each one is a part-time job on its own. Trying to do all of them while running a business is impossible \u2014 so most businesses do none of them well.' },
      { h: 'The solution isn\u2019t more effort', p: 'Working harder on marketing doesn\u2019t work. The answer is automation. When your marketing runs itself \u2014 posting content, generating reviews, optimizing for search \u2014 you get the benefits without the time investment.' },
      { h: 'This is exactly why we built Traffikora', p: 'Traffikora gives every small business the marketing firepower of a full agency \u2014 at a fraction of the cost, with zero ongoing work. Set it up once. It markets forever. That\u2019s the only way to level the playing field.' },
    ]
  },
]

const template = (post) => `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function BlogPost() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>Blog</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>${post.headline}</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto' }}>${post.sub}</p>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          ${post.body.map(s => `<div style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>${s.h}</h2>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '17px', color: '#444', lineHeight: 1.8 }}>${s.p}</p>
          </div>`).join('\n          ')}
          <div style={{ borderTop: '2.5px solid #111', paddingTop: '40px', marginTop: '40px' }}>
            <Link href="/blog" style={{ color: '#E8610A', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>\u2190 Back to Blog</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Ready to automate your marketing?</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`

posts.forEach(p => {
  fs.writeFileSync(p.path, template(p))
  console.log('Written: ' + p.path)
})