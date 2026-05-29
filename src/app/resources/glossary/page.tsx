// @ts-nocheck
'use client'
import Link from 'next/link'

export default function GlossaryPage() {
  return (
    <main suppressHydrationWarning style={{ minHeight: '100vh', background: '#111111', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>
      <section style={{ padding: '112px 24px 64px', textAlign: 'center', background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #111111 100%)' }}>
        <p style={{ color: '#E8610A', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', margin: '0 0 16px 0' }}>Reference Guide</p>
        <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 700, color: '#fff', margin: '0 0 24px 0', lineHeight: 1.15 }}>AI &amp; SEO Marketing <span style={{ color: '#E8610A' }}>Glossary</span></h1>
        <p style={{ color: '#d1d5db', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.7 }}>Every term you need to understand AI marketing, local SEO, and generative engine optimization -- explained in plain English.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', maxWidth: '720px', margin: '0 auto' }}>
          {['A','B','C','D','E','G','I','K','L','M','N','O','P','R','S','T','U','Z'].map(l => (
            <a key={l} href={'#' + l} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #E8610A', color: '#E8610A', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>{l}</a>
          ))}
        </div>
      </section>
      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 96px' }}>
        <div id='A' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>A</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>AI Engine Optimization (AEO)</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The practice of structuring your content so AI-powered answer engines like ChatGPT, Perplexity, and Google AI Overviews surface your business as a cited source. AEO is the evolution of traditional SEO.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>AI Marketing Automation</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The use of artificial intelligence to plan, create, schedule, and optimize marketing content without constant manual input. Traffikora uses AI marketing automation to run your social, blog, and local SEO simultaneously.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Algorithm</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A set of rules used by search engines and social platforms to decide which content to show and in what order. Google, TikTok, and Instagram each use their own algorithms.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Answer Engine</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A search tool that returns a direct answer rather than a list of links. Examples include ChatGPT, Perplexity, and Google AI Overviews. Ranking in answer engines requires AEO strategy.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Authority Score</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A metric estimating how trustworthy and influential a website is based on backlinks, traffic, and content quality. Higher authority scores typically lead to better organic rankings.</p>
          </div>
        </div>
        <div id='B' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>B</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Backlink</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A link from another website pointing to your site. High-quality backlinks from authoritative sites signal trust to search engines and improve your domain authority.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Blog Automation</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The process of using AI to automatically generate, optimize, and publish SEO blog posts on a recurring schedule. Traffikora blog automation publishes keyword-targeted articles without requiring you to write a single word.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Brand Voice</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The consistent personality, tone, and style a business uses across all its marketing content. A strong brand voice builds recognition and trust with customers.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Business Listing</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A profile of your business on a directory such as Google Business Profile, Yelp, or Bing Places. Consistent listings across platforms improve local SEO rankings.</p>
          </div>
        </div>
        <div id='C' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>C</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Citations</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>Online mentions of your business name, address, and phone number across directories and websites. Consistent citations are a key local SEO ranking factor.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Click-Through Rate (CTR)</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The percentage of people who click your link after seeing it in search results. Higher CTR signals to search engines that your listing is relevant and attractive.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Content Calendar</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A schedule mapping what content will be published, on which platforms, and when. Traffikora automates your content calendar across social media and blog channels.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Conversion Rate</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The percentage of visitors who take a desired action such as booking an appointment or submitting a form. Improving conversion rate increases revenue without increasing ad spend.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Core Web Vitals</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>Performance metrics defined by Google measuring page loading speed, interactivity, and visual stability. Passing Core Web Vitals is required for top search rankings.</p>
          </div>
        </div>
        <div id='D' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>D</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Domain Authority (DA)</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A score from 1 to 100 that predicts how well a website will rank in search engines. DA is built over time through quality content and backlinks.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Duplicate Content</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>Identical or very similar content appearing on more than one URL. Duplicate content can confuse search engines and reduce your rankings.</p>
          </div>
        </div>
        <div id='E' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>E</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>E-E-A-T</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>Experience, Expertise, Authoritativeness, and Trustworthiness. Google uses E-E-A-T signals to evaluate content quality and credibility, particularly for health, finance, and legal topics.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Engagement Rate</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A social media metric measuring the percentage of your audience who interact with your content through likes, comments, shares, or saves. High engagement rate improves organic reach.</p>
          </div>
        </div>
        <div id='G' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>G</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Generative Engine Optimization (GEO)</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A strategy for making your content readable and citable by AI-powered generative search engines. GEO focuses on structured answers and schema markup so AI models reference your business.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Google Business Profile (GBP)</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A free business listing managed through Google that appears in Google Maps and local search results. An optimized GBP is one of the most powerful local SEO assets a small business can have.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Google AI Overviews</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The AI-generated summary answers appearing at the top of Google search results. Businesses optimized for AEO and GEO have a higher chance of being cited inside AI Overviews.</p>
          </div>
        </div>
        <div id='I' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>I</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Impressions</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The number of times your content, ad, or listing is displayed to users regardless of whether they clicked. Impressions are a top-of-funnel awareness metric.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Index</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The database Google and other search engines maintain of all web pages they have crawled and deemed eligible to appear in search results.</p>
          </div>
        </div>
        <div id='K' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>K</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Keyword</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A word or phrase users type into search engines. Targeting the right keywords in your content and metadata helps search engines match your pages to relevant searches.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Keyword Clustering</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The practice of grouping related keywords together to build topic authority. Rather than targeting one keyword per page, clustering covers a full topic comprehensively.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Knowledge Panel</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The information box appearing on the right side of Google search results for businesses and places. A well-optimized Google Business Profile increases the likelihood of triggering a knowledge panel.</p>
          </div>
        </div>
        <div id='L' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>L</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Large Language Model (LLM)</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>An AI system trained on massive text datasets that generates human-like written content. ChatGPT, Claude, and Gemini are examples of LLMs. Traffikora uses LLMs to create marketing content at scale.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Local Pack</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The group of three local business listings appearing at the top of Google search results for location-based queries. Ranking in the Local Pack is one of the highest-impact goals for small business SEO.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Local SEO</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The practice of optimizing your online presence to rank higher in location-specific search results. Includes Google Business Profile optimization, citations, reviews, and locally-targeted content.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Long-Tail Keyword</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A specific multi-word search phrase with lower volume but higher purchase intent. Long-tail keywords are easier to rank for and often convert better than broad keywords.</p>
          </div>
        </div>
        <div id='M' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>M</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Meta Description</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A short summary of a web page appearing below the title in search results. A well-written meta description improves click-through rate even though it is not a direct ranking factor.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Meta Title</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The clickable headline shown for your page in search engine results and browser tabs. Meta titles are one of the most important on-page SEO elements.</p>
          </div>
        </div>
        <div id='N' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>N</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>NAP Consistency</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The practice of ensuring your business Name, Address, and Phone number are identical across every online directory. Inconsistent NAP data confuses search engines and hurts local rankings.</p>
          </div>
        </div>
        <div id='O' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>O</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Organic Traffic</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>Website visitors who arrive through unpaid search results rather than ads. Growing organic traffic is the primary goal of SEO and content marketing.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>On-Page SEO</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>Optimization done directly on a web page including titles, headings, content, internal links, and image alt text. On-page SEO helps search engines understand what each page is about.</p>
          </div>
        </div>
        <div id='P' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>P</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Perplexity</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>An AI-powered answer engine that retrieves and synthesizes information from the web to answer user questions directly. Ranking in Perplexity results requires AEO and GEO strategy.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Prompt Engineering</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The skill of crafting instructions that guide AI models to produce specific, accurate, and useful outputs. Traffikora uses advanced prompt engineering to generate brand-consistent marketing content.</p>
          </div>
        </div>
        <div id='R' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>R</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Rank Tracking</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The ongoing process of monitoring where your website and pages appear in search engine results for target keywords over time.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Reputation Management</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The practice of monitoring, responding to, and improving how your business appears across review platforms and search results. Reviews directly influence local SEO rankings.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Review Velocity</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The rate at which your business earns new customer reviews. Consistent review velocity signals to Google that your business is active and trusted by real customers.</p>
          </div>
        </div>
        <div id='S' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>S</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Schema Markup</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>Structured data added to a web page in JSON-LD format that helps search engines understand your content. Schema markup is essential for appearing in rich results and AI-generated answers.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Search Engine Optimization (SEO)</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The practice of improving your website and content so search engines rank it higher in organic results. SEO encompasses on-page, off-page, technical, and local strategies.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Sitemap</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>An XML file listing all the pages on your website that helps search engines discover and crawl them efficiently.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Social Media Automation</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The use of software to automatically create and publish social media posts on a schedule. Traffikora generates platform-specific posts for Facebook, Instagram, X, and more.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Structured Data</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>Information formatted in a standardized way that machines can easily read. In SEO, structured data is added via schema markup to help search engines and AI tools understand page content.</p>
          </div>
        </div>
        <div id='T' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>T</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Technical SEO</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>Optimizations made to the underlying code and infrastructure of a website to improve crawlability, indexability, and page speed. Includes sitemaps, robots.txt, Core Web Vitals, and structured data.</p>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Topic Authority</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The level of expertise and coverage a website demonstrates on a specific subject. Building topic authority through consistent content helps you rank for entire categories of keywords.</p>
          </div>
        </div>
        <div id='U' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>U</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>User Intent</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>The underlying goal a person has when entering a search query. Understanding user intent -- whether informational, navigational, or transactional -- is fundamental to creating content that ranks and converts.</p>
          </div>
        </div>
        <div id='Z' style={{ marginBottom: '56px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>Z</span>
            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>
          </div>
          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>Zero-Click Search</h2>
            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>A search result where the user gets their answer directly on the results page without clicking any link. Zero-click searches are increasing due to AI Overviews and featured snippets, making AEO strategy critical.</p>
          </div>
        </div>
      </section>
      <section style={{ padding: '80px 24px', textAlign: 'center', background: 'linear-gradient(135deg, #E8610A 0%, #C84E06 100%)' }}>
        <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: '#fff', margin: '0 0 16px 0' }}>Put These Strategies to Work</h2>
        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', margin: '0 auto 32px', maxWidth: '500px' }}>Traffikora handles AEO, local SEO, social media, and blog automation -- all on autopilot.</p>
        <Link href='/signup' style={{ display: 'inline-block', background: '#fff', color: '#E8610A', fontWeight: 700, fontSize: '17px', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none' }}>Start Free Trial</Link>
      </section>
    </main>
  )
}