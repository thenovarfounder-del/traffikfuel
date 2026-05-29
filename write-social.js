const fs = require('fs');
const path = require('path');

const dir = path.join('src', 'app', 'resources', 'glossary');
fs.mkdirSync(dir, { recursive: true });

const layoutDir = path.join('src', 'app', 'resources');
fs.mkdirSync(layoutDir, { recursive: true });

const layout = [];
layout.push("export default function ResourcesLayout({ children }: { children: React.ReactNode }) {");
layout.push("  return <>{children}</>;");
layout.push("}");
fs.writeFileSync(path.join(layoutDir, 'layout.tsx'), layout.join('\n'), 'utf8');

const lines = [];
lines.push("// @ts-nocheck");
lines.push("'use client'");
lines.push("import Link from 'next/link'");
lines.push("");
lines.push("export default function GlossaryPage() {");
lines.push("  return (");
lines.push("    <main suppressHydrationWarning style={{ minHeight: '100vh', background: '#111111', color: '#fff', fontFamily: 'DM Sans, sans-serif' }}>");
lines.push("      <section style={{ padding: '112px 24px 64px', textAlign: 'center', background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #111111 100%)' }}>");
lines.push("        <p style={{ color: '#E8610A', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '13px', margin: '0 0 16px 0' }}>Reference Guide</p>");
lines.push("        <h1 style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 700, color: '#fff', margin: '0 0 24px 0', lineHeight: 1.15 }}>AI &amp; SEO Marketing <span style={{ color: '#E8610A' }}>Glossary</span></h1>");
lines.push("        <p style={{ color: '#d1d5db', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.7 }}>Every term you need to understand AI marketing, local SEO, and generative engine optimization -- explained in plain English.</p>");
lines.push("        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px', maxWidth: '720px', margin: '0 auto' }}>");
lines.push("          {['A','B','C','D','E','G','I','K','L','M','N','O','P','R','S','T','U','Z'].map(l => (");
lines.push("            <a key={l} href={'#' + l} style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1px solid #E8610A', color: '#E8610A', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>{l}</a>");
lines.push("          ))}");
lines.push("        </div>");
lines.push("      </section>");
lines.push("      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '64px 24px 96px' }}>");

const groups = [
  { l: 'A', entries: [
    ['AI Engine Optimization (AEO)', 'The practice of structuring your content so AI-powered answer engines like ChatGPT, Perplexity, and Google AI Overviews surface your business as a cited source. AEO is the evolution of traditional SEO.'],
    ['AI Marketing Automation', 'The use of artificial intelligence to plan, create, schedule, and optimize marketing content without constant manual input. Traffikora uses AI marketing automation to run your social, blog, and local SEO simultaneously.'],
    ['Algorithm', 'A set of rules used by search engines and social platforms to decide which content to show and in what order. Google, TikTok, and Instagram each use their own algorithms.'],
    ['Answer Engine', 'A search tool that returns a direct answer rather than a list of links. Examples include ChatGPT, Perplexity, and Google AI Overviews. Ranking in answer engines requires AEO strategy.'],
    ['Authority Score', 'A metric estimating how trustworthy and influential a website is based on backlinks, traffic, and content quality. Higher authority scores typically lead to better organic rankings.'],
  ]},
  { l: 'B', entries: [
    ['Backlink', 'A link from another website pointing to your site. High-quality backlinks from authoritative sites signal trust to search engines and improve your domain authority.'],
    ['Blog Automation', 'The process of using AI to automatically generate, optimize, and publish SEO blog posts on a recurring schedule. Traffikora blog automation publishes keyword-targeted articles without requiring you to write a single word.'],
    ['Brand Voice', 'The consistent personality, tone, and style a business uses across all its marketing content. A strong brand voice builds recognition and trust with customers.'],
    ['Business Listing', 'A profile of your business on a directory such as Google Business Profile, Yelp, or Bing Places. Consistent listings across platforms improve local SEO rankings.'],
  ]},
  { l: 'C', entries: [
    ['Citations', 'Online mentions of your business name, address, and phone number across directories and websites. Consistent citations are a key local SEO ranking factor.'],
    ['Click-Through Rate (CTR)', 'The percentage of people who click your link after seeing it in search results. Higher CTR signals to search engines that your listing is relevant and attractive.'],
    ['Content Calendar', 'A schedule mapping what content will be published, on which platforms, and when. Traffikora automates your content calendar across social media and blog channels.'],
    ['Conversion Rate', 'The percentage of visitors who take a desired action such as booking an appointment or submitting a form. Improving conversion rate increases revenue without increasing ad spend.'],
    ['Core Web Vitals', 'Performance metrics defined by Google measuring page loading speed, interactivity, and visual stability. Passing Core Web Vitals is required for top search rankings.'],
  ]},
  { l: 'D', entries: [
    ['Domain Authority (DA)', 'A score from 1 to 100 that predicts how well a website will rank in search engines. DA is built over time through quality content and backlinks.'],
    ['Duplicate Content', 'Identical or very similar content appearing on more than one URL. Duplicate content can confuse search engines and reduce your rankings.'],
  ]},
  { l: 'E', entries: [
    ['E-E-A-T', 'Experience, Expertise, Authoritativeness, and Trustworthiness. Google uses E-E-A-T signals to evaluate content quality and credibility, particularly for health, finance, and legal topics.'],
    ['Engagement Rate', 'A social media metric measuring the percentage of your audience who interact with your content through likes, comments, shares, or saves. High engagement rate improves organic reach.'],
  ]},
  { l: 'G', entries: [
    ['Generative Engine Optimization (GEO)', 'A strategy for making your content readable and citable by AI-powered generative search engines. GEO focuses on structured answers and schema markup so AI models reference your business.'],
    ['Google Business Profile (GBP)', 'A free business listing managed through Google that appears in Google Maps and local search results. An optimized GBP is one of the most powerful local SEO assets a small business can have.'],
    ['Google AI Overviews', 'The AI-generated summary answers appearing at the top of Google search results. Businesses optimized for AEO and GEO have a higher chance of being cited inside AI Overviews.'],
  ]},
  { l: 'I', entries: [
    ['Impressions', 'The number of times your content, ad, or listing is displayed to users regardless of whether they clicked. Impressions are a top-of-funnel awareness metric.'],
    ['Index', 'The database Google and other search engines maintain of all web pages they have crawled and deemed eligible to appear in search results.'],
  ]},
  { l: 'K', entries: [
    ['Keyword', 'A word or phrase users type into search engines. Targeting the right keywords in your content and metadata helps search engines match your pages to relevant searches.'],
    ['Keyword Clustering', 'The practice of grouping related keywords together to build topic authority. Rather than targeting one keyword per page, clustering covers a full topic comprehensively.'],
    ['Knowledge Panel', 'The information box appearing on the right side of Google search results for businesses and places. A well-optimized Google Business Profile increases the likelihood of triggering a knowledge panel.'],
  ]},
  { l: 'L', entries: [
    ['Large Language Model (LLM)', 'An AI system trained on massive text datasets that generates human-like written content. ChatGPT, Claude, and Gemini are examples of LLMs. Traffikora uses LLMs to create marketing content at scale.'],
    ['Local Pack', 'The group of three local business listings appearing at the top of Google search results for location-based queries. Ranking in the Local Pack is one of the highest-impact goals for small business SEO.'],
    ['Local SEO', 'The practice of optimizing your online presence to rank higher in location-specific search results. Includes Google Business Profile optimization, citations, reviews, and locally-targeted content.'],
    ['Long-Tail Keyword', 'A specific multi-word search phrase with lower volume but higher purchase intent. Long-tail keywords are easier to rank for and often convert better than broad keywords.'],
  ]},
  { l: 'M', entries: [
    ['Meta Description', 'A short summary of a web page appearing below the title in search results. A well-written meta description improves click-through rate even though it is not a direct ranking factor.'],
    ['Meta Title', 'The clickable headline shown for your page in search engine results and browser tabs. Meta titles are one of the most important on-page SEO elements.'],
  ]},
  { l: 'N', entries: [
    ['NAP Consistency', 'The practice of ensuring your business Name, Address, and Phone number are identical across every online directory. Inconsistent NAP data confuses search engines and hurts local rankings.'],
  ]},
  { l: 'O', entries: [
    ['Organic Traffic', 'Website visitors who arrive through unpaid search results rather than ads. Growing organic traffic is the primary goal of SEO and content marketing.'],
    ['On-Page SEO', 'Optimization done directly on a web page including titles, headings, content, internal links, and image alt text. On-page SEO helps search engines understand what each page is about.'],
  ]},
  { l: 'P', entries: [
    ['Perplexity', 'An AI-powered answer engine that retrieves and synthesizes information from the web to answer user questions directly. Ranking in Perplexity results requires AEO and GEO strategy.'],
    ['Prompt Engineering', 'The skill of crafting instructions that guide AI models to produce specific, accurate, and useful outputs. Traffikora uses advanced prompt engineering to generate brand-consistent marketing content.'],
  ]},
  { l: 'R', entries: [
    ['Rank Tracking', 'The ongoing process of monitoring where your website and pages appear in search engine results for target keywords over time.'],
    ['Reputation Management', 'The practice of monitoring, responding to, and improving how your business appears across review platforms and search results. Reviews directly influence local SEO rankings.'],
    ['Review Velocity', 'The rate at which your business earns new customer reviews. Consistent review velocity signals to Google that your business is active and trusted by real customers.'],
  ]},
  { l: 'S', entries: [
    ['Schema Markup', 'Structured data added to a web page in JSON-LD format that helps search engines understand your content. Schema markup is essential for appearing in rich results and AI-generated answers.'],
    ['Search Engine Optimization (SEO)', 'The practice of improving your website and content so search engines rank it higher in organic results. SEO encompasses on-page, off-page, technical, and local strategies.'],
    ['Sitemap', 'An XML file listing all the pages on your website that helps search engines discover and crawl them efficiently.'],
    ['Social Media Automation', 'The use of software to automatically create and publish social media posts on a schedule. Traffikora generates platform-specific posts for Facebook, Instagram, X, and more.'],
    ['Structured Data', 'Information formatted in a standardized way that machines can easily read. In SEO, structured data is added via schema markup to help search engines and AI tools understand page content.'],
  ]},
  { l: 'T', entries: [
    ['Technical SEO', 'Optimizations made to the underlying code and infrastructure of a website to improve crawlability, indexability, and page speed. Includes sitemaps, robots.txt, Core Web Vitals, and structured data.'],
    ['Topic Authority', 'The level of expertise and coverage a website demonstrates on a specific subject. Building topic authority through consistent content helps you rank for entire categories of keywords.'],
  ]},
  { l: 'U', entries: [
    ['User Intent', 'The underlying goal a person has when entering a search query. Understanding user intent -- whether informational, navigational, or transactional -- is fundamental to creating content that ranks and converts.'],
  ]},
  { l: 'Z', entries: [
    ['Zero-Click Search', 'A search result where the user gets their answer directly on the results page without clicking any link. Zero-click searches are increasing due to AI Overviews and featured snippets, making AEO strategy critical.'],
  ]},
];

for (const group of groups) {
  lines.push("        <div id='" + group.l + "' style={{ marginBottom: '56px' }}>");
  lines.push("          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>");
  lines.push("            <span style={{ fontSize: '48px', fontWeight: 700, color: '#E8610A' }}>" + group.l + "</span>");
  lines.push("            <div style={{ flex: 1, height: '1px', background: '#E8610A', opacity: 0.3 }}></div>");
  lines.push("          </div>");
  for (const [term, def] of group.entries) {
    lines.push("          <div style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>");
    lines.push("            <h2 style={{ color: '#fff', fontSize: '17px', fontWeight: 700, margin: '0 0 8px 0' }}>" + term + "</h2>");
    lines.push("            <p style={{ color: '#d1d5db', lineHeight: 1.7, margin: 0 }}>" + def + "</p>");
    lines.push("          </div>");
  }
  lines.push("        </div>");
}

lines.push("      </section>");
lines.push("      <section style={{ padding: '80px 24px', textAlign: 'center', background: 'linear-gradient(135deg, #E8610A 0%, #C84E06 100%)' }}>");
lines.push("        <h2 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: '#fff', margin: '0 0 16px 0' }}>Put These Strategies to Work</h2>");
lines.push("        <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', margin: '0 auto 32px', maxWidth: '500px' }}>Traffikora handles AEO, local SEO, social media, and blog automation -- all on autopilot.</p>");
lines.push("        <Link href='/signup' style={{ display: 'inline-block', background: '#fff', color: '#E8610A', fontWeight: 700, fontSize: '17px', padding: '16px 40px', borderRadius: '50px', textDecoration: 'none' }}>Start Free Trial</Link>");
lines.push("      </section>");
lines.push("    </main>");
lines.push("  )");
lines.push("}");

const content = lines.join('\n');
fs.writeFileSync(path.join(dir, 'page.tsx'), content, 'utf8');
console.log('Done: src/app/resources/glossary/page.tsx');