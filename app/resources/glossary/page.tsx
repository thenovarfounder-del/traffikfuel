import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & SEO Marketing Glossary | Traffikora',
  description: 'Understand every term in AI marketing, local SEO, and generative engine optimization. The definitive glossary for small business owners and marketers.',
  alternates: { canonical: 'https://www.traffikora.com/resources/glossary' },
};

const html = `
<style suppressHydrationWarning>
body{background:#111111;color:#fff;margin:0;font-family:DM Sans,sans-serif;}
.hero{padding:112px 24px 64px;text-align:center;background:linear-gradient(135deg,#111111 0%,#1a1a1a 50%,#111111 100%);}
.label{color:#E8610A;font-weight:600;text-transform:uppercase;letter-spacing:.15em;font-size:13px;margin:0 0 16px 0;}
.h1{font-size:clamp(32px,6vw,56px);font-weight:700;color:#fff;margin:0 0 24px 0;line-height:1.15;}
.accent{color:#E8610A;}
.subtitle{color:#d1d5db;font-size:18px;max-width:600px;margin:0 auto 40px;line-height:1.7;}
.letter-nav{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;max-width:720px;margin:0 auto;}
.letter-nav a{width:36px;height:36px;border-radius:50%;border:1px solid #E8610A;color:#E8610A;display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;text-decoration:none;}
.letter-nav a:hover{background:#E8610A;color:#fff;}
.terms{max-width:800px;margin:0 auto;padding:64px 24px 96px;}
.group{margin-bottom:56px;}
.group-header{display:flex;align-items:center;gap:16px;margin-bottom:24px;}
.group-letter{font-size:48px;font-weight:700;color:#E8610A;}
.group-line{flex:1;height:1px;background:#E8610A;opacity:.3;}
.card{border:1px solid rgba(255,255,255,.1);border-radius:12px;padding:24px;margin-bottom:16px;}
.card h2{color:#fff;font-size:17px;font-weight:700;margin:0 0 8px 0;}
.card p{color:#d1d5db;line-height:1.7;margin:0;}
.cta{padding:80px 24px;text-align:center;background:linear-gradient(135deg,#E8610A 0%,#C84E06 100%);}
.cta h2{font-size:clamp(28px,5vw,44px);font-weight:700;color:#fff;margin:0 0 16px 0;}
.cta p{color:rgba(255,255,255,.9);font-size:18px;margin:0 auto 32px;max-width:500px;}
.cta a{display:inline-block;background:#fff;color:#E8610A;font-weight:700;font-size:17px;padding:16px 40px;border-radius:50px;text-decoration:none;}
</style>

<div class='hero'>
<p class='label'>Reference Guide</p>
<h1 class='h1'>AI &amp; SEO Marketing <span class='accent'>Glossary</span></h1>
<p class='subtitle'>Every term you need to understand AI marketing, local SEO, and generative engine optimization -- explained in plain English.</p>
<div class='letter-nav'>
<a href='#A'>A</a><a href='#B'>B</a><a href='#C'>C</a><a href='#D'>D</a><a href='#E'>E</a>
<a href='#G'>G</a><a href='#I'>I</a><a href='#K'>K</a><a href='#L'>L</a><a href='#M'>M</a>
<a href='#N'>N</a><a href='#O'>O</a><a href='#P'>P</a><a href='#R'>R</a><a href='#S'>S</a>
<a href='#T'>T</a><a href='#U'>U</a><a href='#Z'>Z</a>
</div></div>

<div class='terms'>
<div class='group' id='A'><div class='group-header'><span class='group-letter'>A</span><div class='group-line'></div></div>
<div class='card'><h2>AI Engine Optimization (AEO)</h2><p>The practice of structuring and formatting your content so that AI-powered answer engines like ChatGPT, Perplexity, and Google AI Overviews surface your business as a cited source. AEO is the evolution of traditional SEO.</p></div>
<div class='card'><h2>AI Marketing Automation</h2><p>The use of artificial intelligence to plan, create, schedule, and optimize marketing content and campaigns without constant manual input. Traffikora uses AI marketing automation to run your social, blog, and local SEO simultaneously.</p></div>
<div class='card'><h2>Algorithm</h2><p>A set of rules used by search engines and social platforms to decide which content to show and in what order. Google, TikTok, and Instagram each use their own algorithms.</p></div>
<div class='card'><h2>Answer Engine</h2><p>A search tool that returns a direct answer rather than a list of links. Examples include ChatGPT, Perplexity, and Google AI Overviews. Ranking in answer engines requires AEO strategy.</p></div>
<div class='card'><h2>Authority Score</h2><p>A metric that estimates how trustworthy and influential a website is based on backlinks, traffic, and content quality. Higher authority scores typically lead to better organic rankings.</p></div></div>

<div class='group' id='B'><div class='group-header'><span class='group-letter'>B</span><div class='group-line'></div></div>
<div class='card'><h2>Backlink</h2><p>A link from another website pointing to your site. High-quality backlinks from authoritative sites signal trust to search engines and improve your domain authority.</p></div>
<div class='card'><h2>Blog Automation</h2><p>The process of using AI to automatically generate, optimize, and publish SEO blog posts on a recurring schedule. Traffikora blog automation publishes keyword-targeted articles without requiring you to write a single word.</p></div>
<div class='card'><h2>Brand Voice</h2><p>The consistent personality, tone, and style a business uses across all its marketing content. A strong brand voice builds recognition and trust with customers.</p></div>
<div class='card'><h2>Business Listing</h2><p>A profile of your business on a directory or platform such as Google Business Profile, Yelp, or Bing Places. Consistent listings across platforms improve local SEO rankings.</p></div></div>

<div class='group' id='C'><div class='group-header'><span class='group-letter'>C</span><div class='group-line'></div></div>
<div class='card'><h2>Citations</h2><p>Online mentions of your business name, address, and phone number (NAP) across directories and websites. Consistent citations are a key local SEO ranking factor.</p></div>
<div class='card'><h2>Click-Through Rate (CTR)</h2><p>The percentage of people who click on your link after seeing it in search results or an ad. Higher CTR signals to search engines that your listing is relevant and attractive.</p></div>
<div class='card'><h2>Content Calendar</h2><p>A schedule that maps out what content will be published, on which platforms, and when. Traffikora automates your content calendar across social media and blog channels.</p></div>
<div class='card'><h2>Conversion Rate</h2><p>The percentage of visitors who take a desired action such as booking an appointment, calling your business, or submitting a form. Improving conversion rate increases revenue without increasing ad spend.</p></div>
<div class='card'><h2>Core Web Vitals</h2><p>A set of performance metrics defined by Google that measure page loading speed, interactivity, and visual stability. Passing Core Web Vitals is required for top search rankings.</p></div></div>

<div class='group' id='D'><div class='group-header'><span class='group-letter'>D</span><div class='group-line'></div></div>
<div class='card'><h2>Domain Authority (DA)</h2><p>A score from 1 to 100 developed by Moz that predicts how well a website will rank in search engines. DA is built over time through quality content and backlinks.</p></div>
<div class='card'><h2>Duplicate Content</h2><p>Identical or very similar content appearing on more than one web page or URL. Duplicate content can confuse search engines and reduce your rankings.</p></div></div>

<div class='group' id='E'><div class='group-header'><span class='group-letter'>E</span><div class='group-line'></div></div>
<div class='card'><h2>E-E-A-T</h2><p>Experience, Expertise, Authoritativeness, and Trustworthiness. Google uses E-E-A-T signals to evaluate the quality and credibility of web content, particularly for health, finance, and legal topics.</p></div>
<div class='card'><h2>Engagement Rate</h2><p>A social media metric that measures the percentage of your audience who interact with your content through likes, comments, shares, or saves. High engagement rate improves organic reach.</p></div></div>

<div class='group' id='G'><div class='group-header'><span class='group-letter'>G</span><div class='group-line'></div></div>
<div class='card'><h2>Generative Engine Optimization (GEO)</h2><p>A strategy for making your content readable and citable by AI-powered generative search engines. GEO focuses on structured answers, authoritative sourcing, and schema markup so AI models reference your business.</p></div>
<div class='card'><h2>Google Business Profile (GBP)</h2><p>A free business listing managed through Google that appears in Google Maps and local search results. An optimized GBP is one of the most powerful local SEO assets a small business can have.</p></div>
<div class='card'><h2>Google AI Overviews</h2><p>The AI-generated summary answers that appear at the top of Google search results. Businesses optimized for AEO and GEO have a higher chance of being cited inside AI Overviews.</p></div></div>

<div class='group' id='I'><div class='group-header'><span class='group-letter'>I</span><div class='group-line'></div></div>
<div class='card'><h2>Impressions</h2><p>The number of times your content, ad, or listing is displayed to users, regardless of whether they clicked. Impressions are a top-of-funnel awareness metric.</p></div>
<div class='card'><h2>Index</h2><p>The database Google and other search engines maintain of all web pages they have crawled and deemed eligible to appear in search results.</p></div></div>

<div class='group' id='K'><div class='group-header'><span class='group-letter'>K</span><div class='group-line'></div></div>
<div class='card'><h2>Keyword</h2><p>A word or phrase that users type into search engines. Targeting the right keywords in your content and metadata helps search engines match your pages to relevant searches.</p></div>
<div class='card'><h2>Keyword Clustering</h2><p>The practice of grouping related keywords together to build topic authority. Rather than targeting one keyword per page, clustering covers a full topic comprehensively.</p></div>
<div class='card'><h2>Knowledge Panel</h2><p>The information box that appears on the right side of Google search results for businesses, people, and places. A well-optimized Google Business Profile increases the likelihood of triggering a knowledge panel.</p></div></div>

<div class='group' id='L'><div class='group-header'><span class='group-letter'>L</span><div class='group-line'></div></div>
<div class='card'><h2>Large Language Model (LLM)</h2><p>An AI system trained on massive text datasets that can generate human-like written content. ChatGPT, Claude, and Gemini are examples of LLMs. Traffikora uses LLMs to create marketing content at scale.</p></div>
<div class='card'><h2>Local Pack</h2><p>The group of three local business listings that appear at the top of Google search results for location-based queries. Ranking in the Local Pack is one of the highest-impact goals for small business SEO.</p></div>
<div class='card'><h2>Local SEO</h2><p>The practice of optimizing your online presence to rank higher in search results for location-specific queries. Local SEO includes Google Business Profile optimization, citations, reviews, and locally-targeted content.</p></div>
<div class='card'><h2>Long-Tail Keyword</h2><p>A specific, multi-word search phrase with lower search volume but higher purchase intent. Long-tail keywords are easier to rank for and often convert better than broad keywords.</p></div></div>

<div class='group' id='M'><div class='group-header'><span class='group-letter'>M</span><div class='group-line'></div></div>
<div class='card'><h2>Meta Description</h2><p>A short summary of a web page that appears below the page title in search results. A well-written meta description improves click-through rate even though it is not a direct ranking factor.</p></div>
<div class='card'><h2>Meta Title</h2><p>The clickable headline shown for your page in search engine results and browser tabs. Meta titles are one of the most important on-page SEO elements.</p></div></div>

<div class='group' id='N'><div class='group-header'><span class='group-letter'>N</span><div class='group-line'></div></div>
<div class='card'><h2>NAP Consistency</h2><p>The practice of ensuring your business Name, Address, and Phone number are identical across every online directory and platform. Inconsistent NAP data confuses search engines and hurts local rankings.</p></div></div>

<div class='group' id='O'><div class='group-header'><span class='group-letter'>O</span><div class='group-line'></div></div>
<div class='card'><h2>Organic Traffic</h2><p>Website visitors who arrive through unpaid search results rather than ads. Growing organic traffic is the primary goal of SEO and content marketing.</p></div>
<div class='card'><h2>On-Page SEO</h2><p>Optimization done directly on a web page including titles, headings, content, internal links, and image alt text. On-page SEO helps search engines understand what each page is about.</p></div></div>

<div class='group' id='P'><div class='group-header'><span class='group-letter'>P</span><div class='group-line'></div></div>
<div class='card'><h2>Perplexity</h2><p>An AI-powered answer engine that retrieves and synthesizes information from the web to answer user questions directly. Ranking in Perplexity results requires AEO and GEO strategy.</p></div>
<div class='card'><h2>Prompt Engineering</h2><p>The skill of crafting instructions that guide AI models to produce specific, accurate, and useful outputs. Traffikora uses advanced prompt engineering to generate brand-consistent marketing content.</p></div></div>

<div class='group' id='R'><div class='group-header'><span class='group-letter'>R</span><div class='group-line'></div></div>
<div class='card'><h2>Rank Tracking</h2><p>The ongoing process of monitoring where your website and pages appear in search engine results for target keywords over time.</p></div>
<div class='card'><h2>Reputation Management</h2><p>The practice of monitoring, responding to, and improving how your business appears across review platforms and search results. Reviews directly influence local SEO rankings.</p></div>
<div class='card'><h2>Review Velocity</h2><p>The rate at which your business earns new customer reviews. Consistent review velocity signals to Google that your business is active and trusted by real customers.</p></div></div>

<div class='group' id='S'><div class='group-header'><span class='group-letter'>S</span><div class='group-line'></div></div>
<div class='card'><h2>Schema Markup</h2><p>Structured data added to a web page in JSON-LD format that helps search engines understand your content. Schema markup is essential for appearing in rich results and AI-generated answers.</p></div>
<div class='card'><h2>Search Engine Optimization (SEO)</h2><p>The practice of improving your website and content so that search engines rank it higher in organic results. SEO encompasses on-page, off-page, technical, and local strategies.</p></div>
<div class='card'><h2>Sitemap</h2><p>An XML file that lists all the pages on your website and helps search engines discover and crawl them efficiently.</p></div>
<div class='card'><h2>Social Media Automation</h2><p>The use of software to automatically create and publish social media posts on a schedule. Traffikora social media automation generates platform-specific posts for Facebook, Instagram, X, and more.</p></div>
<div class='card'><h2>Structured Data</h2><p>Information formatted in a standardized way that machines can easily read and process. In SEO, structured data is added via schema markup to help search engines and AI tools understand page content.</p></div></div>

<div class='group' id='T'><div class='group-header'><span class='group-letter'>T</span><div class='group-line'></div></div>
<div class='card'><h2>Technical SEO</h2><p>Optimizations made to the underlying code and infrastructure of a website to improve crawlability, indexability, and page speed. Technical SEO includes sitemaps, robots.txt, Core Web Vitals, and structured data.</p></div>
<div class='card'><h2>Topic Authority</h2><p>The level of expertise and coverage a website demonstrates on a specific subject. Building topic authority through consistent, comprehensive content helps you rank for entire categories of keywords.</p></div></div>

<div class='group' id='U'><div class='group-header'><span class='group-letter'>U</span><div class='group-line'></div></div>
<div class='card'><h2>User Intent</h2><p>The underlying goal a person has when entering a search query. Understanding user intent -- whether informational, navigational, or transactional -- is fundamental to creating content that ranks and converts.</p></div></div>

<div class='group' id='Z'><div class='group-header'><span class='group-letter'>Z</span><div class='group-line'></div></div>
<div class='card'><h2>Zero-Click Search</h2><p>A search result where the user gets their answer directly on the results page without clicking any link. Zero-click searches are increasing due to AI Overviews and featured snippets, making AEO strategy critical.</p></div></div>
</div>

<div class='cta'>
<h2>Put These Strategies to Work</h2>
<p>Traffikora handles AEO, local SEO, social media, and blog automation -- all on autopilot.</p>
<a href='/signup'>Start Free Trial</a>
</div>
`;

export default function GlossaryPage() {
  return (
    <main suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />
  );
}