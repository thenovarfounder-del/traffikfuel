import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO & AI Marketing Glossary | Traffikora',
  description: 'Definitions for SEO, AI engine optimization, local marketing, and automation terms every small business owner should know.',
  alternates: { canonical: 'https://www.traffikora.com/resources/glossary' },
};

const terms = [
  { term: 'AI Engine Optimization (AEO)', definition: 'The practice of structuring your business content so AI tools like ChatGPT, Perplexity, and Gemini recommend your business when users ask relevant questions. AEO is the next evolution of traditional SEO.' },
  { term: 'Generative Engine Optimization (GEO)', definition: 'A branch of AEO focused specifically on getting your content cited and surfaced inside generative AI responses. GEO targets how large language models retrieve and present information.' },
  { term: 'Local SEO', definition: 'The process of optimizing your online presence so your business ranks in local search results on Google Maps and Google Search for location-based queries like "dentist near me" or "auto repair Houston".' },
  { term: 'Google Business Profile (GBP)', definition: 'A free Google tool that controls how your business appears in Google Search and Maps. Keeping your GBP updated with accurate hours, photos, posts, and reviews is one of the highest-ROI local SEO actions.' },
  { term: 'Citations', definition: 'Online mentions of your business name, address, and phone number (NAP) across directories like Yelp, Yellow Pages, and Apple Maps. Consistent citations signal trust to both Google and AI platforms.' },
  { term: 'NAP Consistency', definition: 'The practice of keeping your business Name, Address, and Phone number identical across every online listing. Inconsistent NAP data confuses search engines and reduces your local rankings.' },
  { term: 'Social Media Automation', definition: 'Using software to automatically create, schedule, and publish social media posts across platforms like Facebook, Instagram, and TikTok -- saving time while maintaining consistent posting frequency.' },
  { term: 'Marketing Automation', definition: 'Technology that handles repetitive marketing tasks automatically -- including email follow-ups, review requests, lead nurturing, and social posting -- so business owners can focus on serving customers.' },
  { term: 'Review Automation', definition: 'A system that automatically sends review request messages to customers via SMS or email after a purchase or appointment, increasing the volume and recency of Google and Yelp reviews.' },
  { term: 'Keyword', definition: 'A word or phrase that people type into search engines. Targeting the right keywords ensures your business appears when potential customers are actively searching for your services.' },
  { term: 'Long-Tail Keyword', definition: 'A specific, multi-word search phrase (e.g., "affordable HVAC repair in Dallas") that typically has lower search volume but higher buying intent and less competition than broad keywords.' },
  { term: 'Search Intent', definition: 'The underlying goal a person has when typing a search query. The four types are informational, navigational, commercial, and transactional. Matching your content to search intent improves rankings and conversions.' },
  { term: 'On-Page SEO', definition: 'Optimization work done directly on your website pages -- including title tags, meta descriptions, headers, content quality, and internal linking -- to improve search engine rankings.' },
  { term: 'Off-Page SEO', definition: 'SEO activities that happen outside your website, such as earning backlinks, building citations, managing reviews, and creating social signals that increase your domain authority.' },
  { term: 'Backlink', definition: 'A link from another website pointing to yours. High-quality backlinks from reputable sites act as votes of confidence and are one of the strongest ranking signals in Google search.' },
  { term: 'Domain Authority (DA)', definition: 'A score (1-100) developed by Moz that predicts how likely a website is to rank in search results. Higher DA generally correlates with better rankings, though Google uses its own internal metrics.' },
  { term: 'Meta Title', definition: 'The clickable headline shown in search engine results. It should include your primary keyword and be under 60 characters. A compelling meta title directly impacts your click-through rate.' },
  { term: 'Meta Description', definition: 'The short summary text displayed below your page title in search results. While not a direct ranking factor, a strong meta description improves click-through rates from the search results page.' },
  { term: 'Schema Markup', definition: 'Structured data code added to your website that helps search engines understand your content. Schema for local businesses can display your hours, reviews, and address directly in Google results.' },
  { term: 'Sitemap', definition: 'An XML file listing all pages on your website that you want search engines to index. Submitting your sitemap to Google Search Console and Bing Webmaster Tools speeds up content discovery.' },
  { term: 'Robots.txt', definition: 'A file that tells search engine crawlers which pages or sections of your website to crawl or ignore. Misconfiguring robots.txt can accidentally block your entire site from being indexed.' },
  { term: 'Core Web Vitals', definition: 'A set of Google metrics measuring real-world user experience: Largest Contentful Paint (loading speed), First Input Delay (interactivity), and Cumulative Layout Shift (visual stability). These directly impact rankings.' },
  { term: 'Bounce Rate', definition: 'The percentage of visitors who leave your website after viewing only one page. A high bounce rate can signal that your content does not match what searchers were looking for.' },
  { term: 'Conversion Rate', definition: 'The percentage of website visitors who complete a desired action -- such as calling your business, filling out a form, or making a purchase. Improving conversion rate is often more cost-effective than driving more traffic.' },
  { term: 'Call to Action (CTA)', definition: 'A prompt that tells visitors what to do next -- such as "Book a Free Demo", "Get Started", or "Call Now". Every page should have a clear, visible CTA aligned with your business goal.' },
  { term: 'Landing Page', definition: 'A standalone web page designed for a specific marketing goal, such as capturing leads or promoting a service. Unlike homepage general content, landing pages are focused on one offer and one CTA.' },
  { term: 'Blog Automation', definition: 'Using AI to automatically generate, optimize, and publish SEO blog articles on a regular schedule. Consistent blogging builds topical authority and drives long-tail organic search traffic.' },
  { term: 'Content Marketing', definition: 'A strategy of creating and distributing valuable, relevant content -- blog posts, videos, guides -- to attract and retain a clearly defined audience, ultimately driving profitable customer action.' },
  { term: 'Organic Traffic', definition: 'Visitors who arrive at your website through unpaid search results. Organic traffic is considered the highest-quality source because these users are actively searching for what you offer.' },
  { term: 'Paid Traffic (PPC)', definition: 'Visitors who arrive at your site via paid advertisements like Google Ads or Meta Ads. Pay-Per-Click campaigns can drive fast results but require ongoing budget and management to remain profitable.' },
  { term: 'Impressions', definition: 'The number of times your website or content appeared in search results, regardless of whether it was clicked. High impressions with low clicks indicate a strong ranking but a weak meta title or description.' },
  { term: 'Click-Through Rate (CTR)', definition: 'The percentage of people who clicked on your listing after seeing it in search results. CTR = (Clicks divided by Impressions) x 100. Improving CTR is one of the fastest ways to increase traffic without changing rankings.' },
  { term: 'Google Search Console (GSC)', definition: 'A free Google tool that shows how your site performs in search -- including which queries trigger your pages, your average position, impressions, and any indexing errors Google has detected.' },
  { term: 'Google Analytics (GA4)', definition: 'Google\'s web analytics platform that tracks visitor behavior on your site -- including traffic sources, pages visited, session duration, and conversion events. GA4 is the current version as of 2023.' },
  { term: 'A/B Testing', definition: 'A method of comparing two versions of a page, email, or ad to see which performs better. You split your audience in half, show each group one version, and measure results to pick the winner.' },
  { term: 'Lead Magnet', definition: 'A free resource -- such as a guide, checklist, or free trial -- offered in exchange for a visitor\'s contact information. Lead magnets grow your email list and start the customer relationship.' },
  { term: 'Email Marketing', definition: 'Sending targeted messages to a list of subscribers to nurture leads, promote offers, and retain customers. Email marketing consistently delivers the highest ROI of any digital marketing channel.' },
  { term: 'SMS Marketing', definition: 'Sending promotional or transactional text messages to customers who have opted in. SMS messages have open rates above 90%, making them one of the most effective channels for time-sensitive promotions.' },
  { term: 'Reputation Management', definition: 'The ongoing process of monitoring, responding to, and improving how your business is perceived online -- primarily through Google reviews, Yelp, and social media mentions.' },
  { term: 'White-Label Software', definition: 'A product built by one company but rebranded and resold by another. Traffikora\'s agency plan allows marketing agencies to offer the Traffikora platform under their own brand.' },
  { term: 'SaaS (Software as a Service)', definition: 'A software delivery model where applications are hosted in the cloud and accessed via subscription rather than installed locally. Traffikora is a SaaS platform for local business marketing.' },
  { term: 'API (Application Programming Interface)', definition: 'A set of rules that allows different software applications to communicate. Marketing APIs -- like Meta\'s Graph API or Google\'s My Business API -- let platforms like Traffikora connect to social and search tools on your behalf.' },
];

const letters = [...new Set(terms.map(t => t.term[0].toUpperCase()))].sort();

export default function GlossaryPage() {
  return (
    <>
      <main suppressHydrationWarning className='min-h-screen bg-[#111111] text-white'>
        {/* Hero */}
        <section className='pt-28 pb-16 px-6 text-center max-w-4xl mx-auto'>
          <p className='text-[#E8610A] uppercase tracking-widest text-sm font-semibold mb-4'>Resource Center</p>
          <h1 className='font-playfair text-4xl md:text-6xl font-bold leading-tight mb-6'>SEO &amp; AI Marketing<br />Glossary</h1>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>Every term local business owners need to know -- from classic SEO fundamentals to the AI-era concepts shaping search in 2026 and beyond.</p>
        </section>

        {/* Letter Jump Nav */}
        <section className='px-6 pb-10 max-w-4xl mx-auto'>
          <div className='flex flex-wrap gap-2 justify-center'>
            {letters.map(letter => (
              <a key={letter} href={`#letter-${letter}`} className='w-9 h-9 flex items-center justify-center rounded bg-white/10 hover:bg-[#E8610A] text-white text-sm font-bold transition-colors duration-200'>{letter}</a>
            ))}
          </div>
        </section>

        {/* Terms */}
        <section className='px-6 pb-24 max-w-4xl mx-auto'>
          {letters.map(letter => (
            <div key={letter} id={`letter-${letter}`} className='mb-14 scroll-mt-24'>
              <h2 className='font-playfair text-3xl text-[#E8610A] font-bold mb-6 border-b border-white/10 pb-3'>{letter}</h2>
              <div className='space-y-6'>
                {terms.filter(t => t.term[0].toUpperCase() === letter).map(t => (
                  <div key={t.term} className='bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#E8610A]/40 transition-colors duration-200'>
                    <h3 className='text-white font-semibold text-lg mb-2'>{t.term}</h3>
                    <p className='text-gray-400 leading-relaxed'>{t.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className='px-6 pb-24 max-w-3xl mx-auto text-center'>
          <div className='bg-[#E8610A]/10 border border-[#E8610A]/30 rounded-2xl p-10'>
            <h2 className='font-playfair text-3xl font-bold mb-4'>Ready to Put These Strategies to Work?</h2>
            <p className='text-gray-400 mb-8'>Traffikora automates SEO, AI optimization, social media, and review management -- all in one platform built for local businesses.</p>
            <a href='/demo' className='inline-block bg-[#E8610A] hover:bg-[#C84E06] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-200'>Book a Free Demo</a>
          </div>
        </section>
      </main>
    </>
  );
}