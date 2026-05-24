const fs = require('fs');
const content = `// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function LawyersPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>For Law Firms</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>More Clients. Less Marketing. Zero Guesswork.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Traffikora automates local SEO, Google rankings, and AI engine visibility for law firms so new clients find you first \u2014 without you spending a dollar on ads.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free 7-Day Trial</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>Most law firms are invisible online. Yours does not have to be.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '680px', margin: '0 auto 60px' }}>When someone needs an attorney, they search Google first. If your firm is not in the top 3 results, that potential client is calling someone else. Traffikora changes that.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { icon: '\u2696\uFE0F', title: 'Losing Cases to Less Qualified Firms', body: 'Clients cannot judge legal skill from a Google search. They hire whoever ranks highest and has the most reviews. Traffikora puts you at the top.' },
              { icon: '\uD83D\uDCF1', title: 'No Consistent Online Presence', body: 'A dormant Google Business Profile and inactive social accounts signal to clients that your firm is not thriving. Traffikora keeps everything active automatically.' },
              { icon: '\uD83E\uDD16', title: 'Not Appearing in AI Recommendations', body: 'Potential clients are asking ChatGPT and Perplexity to recommend attorneys. Traffikora ensures your firm gets cited in those answers.' },
            ].map((item) => (
              <div key={item.title} style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f9f9f9', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '56px' }}>Set it once. Traffikora runs forever.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { step: '01', title: 'Connect Your Accounts', body: 'Link your Google Business Profile, LinkedIn, and Facebook in under 10 minutes.' },
              { step: '02', title: 'We Create Your Content', body: 'Our AI writes practice-area posts, legal tips, and community content tailored to your firm and city.' },
              { step: '03', title: 'We Publish on Schedule', body: 'Content goes live automatically across every platform every week. No approvals. No effort from you.' },
              { step: '04', title: 'Clients Contact Your Firm', body: 'Google ranks you higher. AI engines recommend you. Qualified clients call or email your firm directly.' },
            ].map((item) => (
              <div key={item.step} style={{ borderTop: '4px solid #E8610A', paddingTop: '24px' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 700, color: '#E8610A', letterSpacing: '2px', marginBottom: '12px' }}>STEP {item.step}</p>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px', color: '#111' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#444', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', textAlign: 'center', marginBottom: '16px' }}>Built for law firms. Not generic businesses.</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', textAlign: 'center', maxWidth: '620px', margin: '0 auto 56px' }}>Traffikora understands legal marketing compliance and creates content that builds authority without making prohibited claims.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Google Business Profile Management', body: 'Weekly GBP posts, attorney bios, practice area updates, and review responses that keep your profile ranking at the top of local search.' },
              { title: 'Practice Area SEO', body: 'Keyword targeting for personal injury, family law, criminal defense, estate planning, and every practice area your firm handles.' },
              { title: 'LinkedIn and Social Automation', body: 'Thought leadership posts, legal insights, and community content published automatically to build your firm\u2019s credibility online.' },
              { title: 'AI Engine Optimization', body: 'Get recommended when potential clients ask ChatGPT, Claude, or Perplexity to find attorneys in your city and practice area.' },
              { title: 'Review and Reputation Management', body: 'Automated review requests after case closings build your 5-star reputation without any manual follow-up from your team.' },
              { title: 'Competitor Intelligence', body: 'Track exactly which firms outrank you and what keywords drive their traffic. Traffikora closes that gap automatically.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#f9f9f9', border: '2.5px solid #111', padding: '28px' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, marginBottom: '10px', color: '#111' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#444', lineHeight: 1.6 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#111', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '56px' }}>Law firms are winning more clients with Traffikora.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { quote: 'We ranked on page 3 for personal injury attorney in our city. Six months after Traffikora, we are in the top 3. Our consult requests doubled.', name: 'David K.', location: 'Personal Injury Attorney, Phoenix AZ' },
              { quote: 'I never had time to post on LinkedIn. Traffikora does it automatically every week. Referral partners tell me they see us everywhere now.', name: 'Sarah W.', location: 'Family Law Attorney, Nashville TN' },
              { quote: 'A new client told me they asked ChatGPT for estate planning attorneys near them and our firm came up. That was a $15,000 case.', name: 'James P.', location: 'Estate Planning Attorney, Seattle WA' },
            ].map((item) => (
              <div key={item.name} style={{ background: '#1a1a1a', border: '2.5px solid #333', padding: '32px', textAlign: 'left' }}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#ddd', lineHeight: 1.7, marginBottom: '20px' }}>\u201C{item.quote}\u201D</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', fontWeight: 700, color: '#E8610A' }}>{item.name}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888' }}>{item.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px' }}>Starts at $97/month. Less than one billable hour.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '600px', margin: '0 auto 40px' }}>One new client from Traffikora covers months of subscription costs. Every case after that is pure return on investment.</p>
        <Link href="/pricing" style={{ background: '#111', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #111', display: 'inline-block', marginRight: '16px' }}>See Pricing</Link>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Your next client is searching for an attorney right now.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Trial</Link>
      </section>

      <Footer />
    </>
  )
}
`;
fs.writeFileSync('src/app/solutions/lawyers/page.tsx', content);
console.log('page.tsx written');