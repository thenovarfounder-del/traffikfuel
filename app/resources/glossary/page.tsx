import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI & SEO Marketing Glossary | Traffikora',
  description: 'Understand every term in AI marketing, local SEO, and generative engine optimization. The definitive glossary for small business owners and marketers.',
  alternates: { canonical: 'https://www.traffikora.com/resources/glossary' },
  openGraph: {
    title: 'AI & SEO Marketing Glossary | Traffikora',
    description: 'Your complete reference guide to AI marketing, local SEO, and GEO terms.',
    url: 'https://www.traffikora.com/resources/glossary',
    siteName: 'Traffikora',
    type: 'website',
  },
};

const terms = [
  { letter: 'A', entries: [
    { term: 'AI Engine Optimization (AEO)', definition: 'The practice of structuring and formatting your content so that AI-powered answer engines like ChatGPT, Perplexity, and Google AI Overviews surface your business as a cited source. AEO is the evolution of traditional SEO.' },
    { term: 'AI Marketing Automation', definition: 'The use of artificial intelligence to plan, create, schedule, and optimize marketing content and campaigns without constant manual input. Traffikora uses AI marketing automation to run your social, blog, and local SEO simultaneously.' },
    { term: 'Algorithm', definition: 'A set of rules used by search engines and social platforms to decide which content to show and in what order. Google, TikTok, and Instagram each use their own algorithms.' },
    { term: 'Answer Engine', definition: 'A search tool that returns a direct answer rather than a list of links. Examples include ChatGPT, Perplexity, and Google AI Overviews. Ranking in answer engines requires AEO strategy.' },
    { term: 'Authority Score', definition: 'A metric that estimates how trustworthy and influential a website is based on backlinks, traffic, and content quality. Higher authority scores typically lead to better organic rankings.' },
  ]},
  { letter: 'B', entries: [
    { term: 'Backlink', definition: 'A link from another website pointing to your site. High-quality backlinks from authoritative sites signal trust to search engines and improve your domain authority.' },
    { term: 'Blog Automation', definition: 'The process of using AI to automatically generate, optimize, and publish SEO blog posts on a recurring schedule. Traffikora blog automation publishes keyword-targeted articles without requiring you to write a single word.' },
    { term: 'Brand Voice', definition: 'The consistent personality, tone, and style a business uses across all its marketing content. A strong brand voice builds recognition and trust with customers.' },
    { term: 'Business Listing', definition: 'A profile of your business on a directory or platform such as Google Business Profile, Yelp, or Bing Places. Consistent listings across platforms improve local SEO rankings.' },
  ]},
  { letter: 'C', entries: [
    { term: 'Citations', definition: 'Online mentions of your business name, address, and phone number (NAP) across directories and websites. Consistent citations are a key local SEO ranking factor.' },
    { term: 'Click-Through Rate (CTR)', definition: 'The percentage of people who click on your link after seeing it in search results or an ad. Higher CTR signals to search engines that your listing is relevant and attractive.' },
    { term: 'Content Calendar', definition: 'A schedule that maps out what content will be published, on which platforms, and when. Traffikora automates your content calendar across social media and blog channels.' },
    { term: 'Conversion Rate', definition: 'The percentage of visitors who take a desired action such as booking an appointment, calling your business, or submitting a form. Improving conversion rate increases revenue without increasing ad spend.' },
    { term: 'Core Web Vitals', definition: 'A set of performance metrics defined by Google that measure page loading speed, interactivity, and visual stability. Passing Core Web Vitals is required for top search rankings.' },
  ]},
  { letter: 'D', entries: [
    { term: 'Domain Authority (DA)', definition: 'A score from 1 to 100 developed by Moz that predicts how well a website will rank in search engines. DA is built over time through quality content and backlinks.' },
    { term: 'Duplicate Content', definition: 'Identical or very similar content appearing on more than one web page or URL. Duplicate content can confuse search engines and reduce your rankings.' },
  ]},
  { letter: 'E', entries: [
    { term: 'E-E-A-T', definition: 'Experience, Expertise, Authoritativeness, and Trustworthiness. Google uses E-E-A-T signals to evaluate the quality and credibility of web content, particularly for health, finance, and legal topics.' },
    { term: 'Engagement Rate', definition: 'A social media metric that measures the percentage of your audience who interact with your content through likes, comments, shares, or saves. High engagement rate improves organic reach.' },
  ]},
  { letter: 'G', entries: [
    { term: 'Generative Engine Optimization (GEO)', definition: 'A strategy for making your content readable and citable by AI-powered generative search engines. GEO focuses on structured answers, authoritative sourcing, and schema markup so AI models reference your business.' },
    { term: 'Google Business Profile (GBP)', definition: 'A free business listing managed through Google that appears in Google Maps and local search results. An optimized GBP is one of the most powerful local SEO assets a small business can have.' },
    { term: 'Google AI Overviews', definition: 'The AI-generated summary answers that appear at the top of Google search results. Businesses optimized for AEO and GEO have a higher chance of being cited inside AI Overviews.' },
  ]},
  { letter: 'I', entries: [
    { term: 'Impressions', definition: 'The number of times your content, ad, or listing is displayed to users, regardless of whether they clicked. Impressions are a top-of-funnel awareness metric.' },
    { term: 'Index', definition: 'The database Google and other search engines maintain of all web pages they have crawled and deemed eligible to appear in search results.' },
  ]},
  { letter: 'K', entries: [
    { term: 'Keyword', definition: 'A word or phrase that users type into search engines. Targeting the right keywords in your content and metadata helps search engines match your pages to relevant searches.' },
    { term: 'Keyword Clustering', definition: 'The practice of grouping related keywords together to build topic authority. Rather than targeting one keyword per page, clustering covers a full topic comprehensively.' },
    { term: 'Knowledge Panel', definition: 'The information box that appears on the right side of Google search results for businesses, people, and places. A well-optimized Google Business Profile increases the likelihood of triggering a knowledge panel.' },
  ]},
  { letter: 'L', entries: [
    { term: 'Large Language Model (LLM)', definition: 'An AI system trained on massive text datasets that can generate human-like written content. ChatGPT, Claude, and Gemini are examples of LLMs. Traffikora uses LLMs to create marketing content at scale.' },
    { term: 'Local Pack', definition: 'The group of three local business listings that appear at the top of Google search results for location-based queries. Ranking in the Local Pack is one of the highest-impact goals for small business SEO.' },
    { term: 'Local SEO', definition: 'The practice of optimizing your online presence to rank higher in search results for location-specific queries. Local SEO includes Google Business Profile optimization, citations, reviews, and locally-targeted content.' },
    { term: 'Long-Tail Keyword', definition: 'A specific, multi-word search phrase with lower search volume but higher purchase intent. Long-tail keywords are easier to rank for and often convert better than broad keywords.' },
  ]},
  { letter: 'M', entries: [
    { term: 'Meta Description', definition: 'A short summary of a web page that appears below the page title in search results. A well-written meta description improves click-through rate even though it is not a direct ranking factor.' },
    { term: 'Meta Title', definition: 'The clickable headline shown for your page in search engine results and browser tabs. Meta titles are one of the most important on-page SEO elements.' },
  ]},
  { letter: 'N', entries: [
    { term: 'NAP Consistency', definition: 'The practice of ensuring your business Name, Address, and Phone number are identical across every online directory and platform. Inconsistent NAP data confuses search engines and hurts local rankings.' },
  ]},
  { letter: 'O', entries: [
    { term: 'Organic Traffic', definition: 'Website visitors who arrive through unpaid search results rather than ads. Growing organic traffic is the primary goal of SEO and content marketing.' },
    { term: 'On-Page SEO', definition: 'Optimization done directly on a web page including titles, headings, content, internal links, and image alt text. On-page SEO helps search engines understand what each page is about.' },
  ]},
  { letter: 'P', entries: [
    { term: 'Perplexity', definition: 'An AI-powered answer engine that retrieves and synthesizes information from the web to answer user questions directly. Ranking in Perplexity results requires AEO and GEO strategy.' },
    { term: 'Prompt Engineering', definition: 'The skill of crafting instructions that guide AI models to produce specific, accurate, and useful outputs. Traffikora uses advanced prompt engineering to generate brand-consistent marketing content.' },
  ]},
  { letter: 'R', entries: [
    { term: 'Rank Tracking', definition: 'The ongoing process of monitoring where your website and pages appear in search engine results for target keywords over time.' },
    { term: 'Reputation Management', definition: 'The practice of monitoring, responding to, and improving how your business appears across review platforms and search results. Reviews directly influence local SEO rankings.' },
    { term: 'Review Velocity', definition: 'The rate at which your business earns new customer reviews. Consistent review velocity signals to Google that your business is active and trusted by real customers.' },
  ]},
  { letter: 'S', entries: [
    { term: 'Schema Markup', definition: 'Structured data added to a web page in JSON-LD format that helps search engines understand your content. Schema markup is essential for appearing in rich results and AI-generated answers.' },
    { term: 'Search Engine Optimization (SEO)', definition: 'The practice of improving your website and content so that search engines rank it higher in organic results. SEO encompasses on-page, off-page, technical, and local strategies.' },
    { term: 'Sitemap', definition: 'An XML file that lists all the pages on your website and helps search engines discover and crawl them efficiently.' },
    { term: 'Social Media Automation', definition: 'The use of software to automatically create and publish social media posts on a schedule. Traffikora social media automation generates platform-specific posts for Facebook, Instagram, X, and more.' },
    { term: 'Structured Data', definition: 'Information formatted in a standardized way that machines can easily read and process. In SEO, structured data is added via schema markup to help search engines and AI tools understand page content.' },
  ]},
  { letter: 'T', entries: [
    { term: 'Technical SEO', definition: 'Optimizations made to the underlying code and infrastructure of a website to improve crawlability, indexability, and page speed. Technical SEO includes sitemaps, robots.txt, Core Web Vitals, and structured data.' },
    { term: 'Topic Authority', definition: 'The level of expertise and coverage a website demonstrates on a specific subject. Building topic authority through consistent, comprehensive content helps you rank for entire categories of keywords.' },
  ]},
  { letter: 'U', entries: [
    { term: 'User Intent', definition: 'The underlying goal a person has when entering a search query. Understanding user intent -- whether informational, navigational, or transactional -- is fundamental to creating content that ranks and converts.' },
  ]},
  { letter: 'Z', entries: [
    { term: 'Zero-Click Search', definition: 'A search result where the user gets their answer directly on the results page without clicking any link. Zero-click searches are increasing due to AI Overviews and featured snippets, making AEO strategy critical.' },
  ]},
];

function buildHTML() {
  const letterNav = terms.map(g =>
    '<a href="#letter-' + g.letter + '" style="width:36px;height:36px;border-radius:50%;border:1px solid #E8610A;color:#E8610A;display:inline-flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.background=\'#E8610A\';this.style.color=\'#fff\'" onmouseout="this.style.background=\'transparent\';this.style.color=\'#E8610A\'">' + g.letter + '</a>'
  ).join('');

  const termSections = terms.map(g => {
    const cards = g.entries.map(e =>
      '<div style="border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:24px;margin-bottom:16px;transition:border-color 0.2s;" onmouseover="this.style.borderColor=\'rgba(232,97,10,0.5)\'" onmouseout="this.style.borderColor=\'rgba(255,255,255,0.1)\'">' +
      '<h2 style="color:#fff;font-size:17px;font-weight:700;margin:0 0 8px 0;">' + e.term + '</h2>' +
      '<p style="color:#d1d5db;line-height:1.7;margin:0;">' + e.definition + '</p>' +
      '</div>'
    ).join('');
    return '<div id="letter-' + g.letter + '" style="margin-bottom:56px;">' +
      '<div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;">' +
      '<span style="font-size:48px;font-weight:700;color:#E8610A;font-family:Playfair Display,serif;">' + g.letter + '</span>' +
      '<div style="flex:1;height:1px;background:#E8610A;opacity:0.3;"></div>' +
      '</div>' + cards + '</div>';
  }).join('');

  return '<div style="min-height:100vh;background:#111111;color:#fff;">' +
    '<section style="padding:112px 24px 64px;text-align:center;background:linear-gradient(135deg,#111111 0%,#1a1a1a 50%,#111111 100%);">' +
    '<p style="color:#E8610A;font-weight:600;text-transform:uppercase;letter-spacing:0.15em;font-size:13px;margin:0 0 16px 0;">Reference Guide</p>' +
    '<h1 style="font-family:Playfair Display,serif;font-size:clamp(32px,6vw,56px);font-weight:700;color:#fff;margin:0 0 24px 0;line-height:1.15;">AI &amp; SEO Marketing <span style="color:#E8610A;">Glossary</span></h1>' +
    '<p style="color:#d1d5db;font-size:18px;max-width:600px;margin:0 auto 40px auto;line-height:1.7;">Every term you need to understand AI marketing, local SEO, and generative engine optimization -- explained in plain English.</p>' +
    '<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;max-width:720px;margin:0 auto;">' + letterNav + '</div>' +
    '</section>' +
    '<section style="max-width:800px;margin:0 auto;padding:64px 24px 96px;">' + termSections + '</section>' +
    '<section style="padding:80px 24px;text-align:center;background:linear-gradient(135deg,#E8610A 0%,#C84E06 100%);">' +
    '<h2 style="font-family:Playfair Display,serif;font-size:clamp(28px,5vw,44px);font-weight:700;color:#fff;margin:0 0 16px 0;">Put These Strategies to Work</h2>' +
    '<p style="color:rgba(255,255,255,0.9);font-size:18px;margin:0 auto 32px auto;max-width:500px;">Traffikora handles AEO, local SEO, social media, and blog automation -- all on autopilot.</p>' +
    '<a href="/signup" style="display:inline-block;background:#fff;color:#E8610A;font-weight:700;font-size:17px;padding:16px 40px;border-radius:50px;text-decoration:none;">Start Free Trial</a>' +
    '</section>' +
    '</div>';
}

export default function GlossaryPage() {
  return (
    <main suppressHydrationWarning dangerouslySetInnerHTML={{ __html: buildHTML() }} />
  );
}