const fs = require('fs');
const path = require('path');

const base = 'C:\\Users\\randy\\traffikfuel\\src\\app';
const today = '2026-06-04';

// ─── HELPER ───────────────────────────────────────────────────────────────────
function writeLayout(dir, jsonLdBlocks) {
  const scripts = jsonLdBlocks.map(obj =>
    `      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ${JSON.stringify(JSON.stringify(obj))} }} />`
  ).join('\n');
  const content = `// @ts-nocheck
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
${scripts}
      {children}
    </>
  )
}
`;
  fs.writeFileSync(path.join(dir, 'layout.tsx'), content, 'utf8');
  console.log('layout.tsx written:', dir.replace(base, ''));
}

// ─── 1. HOMEPAGE ──────────────────────────────────────────────────────────────
writeLayout(path.join(base), [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Traffikora",
    "url": "https://www.traffikora.com",
    "logo": "https://www.traffikora.com/favicon.ico",
    "description": "Traffikora is an AI marketing automation platform for local small businesses. Automates SEO content, social media, and AI engine optimization daily.",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61590075525966",
      "https://www.instagram.com/traffikora/",
      "https://x.com/traffikora",
      "https://www.youtube.com/@traffikora",
      "https://www.tiktok.com/@traffikora"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Traffikora",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://www.traffikora.com",
    "description": "AI marketing automation platform for local businesses. Automates blog content, social media, and AI engine optimization.",
    "offers": [
      { "@type": "Offer", "name": "Free", "price": "0", "priceCurrency": "USD" },
      { "@type": "Offer", "name": "Starter", "price": "47", "priceCurrency": "USD" },
      { "@type": "Offer", "name": "Pro", "price": "97", "priceCurrency": "USD" },
      { "@type": "Offer", "name": "Agency", "price": "297", "priceCurrency": "USD" },
      { "@type": "Offer", "name": "Enterprise", "price": "997", "priceCurrency": "USD" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Traffikora",
    "url": "https://www.traffikora.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.traffikora.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Do I need any technical skills to use Traffikora?", "acceptedAnswer": { "@type": "Answer", "text": "None at all. If you can fill out a form, you can use Traffikora. You will be live in under 5 minutes." } },
      { "@type": "Question", "name": "What social media platforms does Traffikora support?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora publishes to Facebook, Instagram, TikTok, YouTube, LinkedIn, X, and more — 9+ platforms automatically." } },
      { "@type": "Question", "name": "How much does Traffikora cost?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora offers a free plan with no credit card required. Paid plans start at $47 per month." } },
      { "@type": "Question", "name": "Will Traffikora help my business show up on ChatGPT?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Traffikora optimizes your content for AI engine citation so your business is recommended when people ask ChatGPT, Gemini, or Perplexity for local business recommendations." } },
      { "@type": "Question", "name": "What happens when I cancel?", "acceptedAnswer": { "@type": "Answer", "text": "Cancel any time with one click. No questions asked. You keep access until the end of your billing period." } },
      { "@type": "Question", "name": "Is Traffikora a replacement for a marketing agency?", "acceptedAnswer": { "@type": "Answer", "text": "For most local businesses, yes. Traffikora automates what agencies do manually — at a fraction of the cost and with no long-term contracts." } }
    ]
  }
]);

// ─── 2. PRICING PAGE ──────────────────────────────────────────────────────────
writeLayout(path.join(base, 'pricing'), [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Traffikora",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://www.traffikora.com/pricing",
    "description": "AI marketing automation platform for local businesses. Plans from free to enterprise.",
    "offers": [
      { "@type": "Offer", "name": "Free Plan", "price": "0", "priceCurrency": "USD", "description": "3 AI blog posts per month, no credit card required." },
      { "@type": "Offer", "name": "Starter", "price": "47", "priceCurrency": "USD", "description": "Unlimited blogs, social content, manual publish." },
      { "@type": "Offer", "name": "Pro", "price": "97", "priceCurrency": "USD", "description": "AI Agents, Auto Mode, TikTok/YouTube, AI SEO." },
      { "@type": "Offer", "name": "Agency", "price": "297", "priceCurrency": "USD", "description": "10 clients, white-label." },
      { "@type": "Offer", "name": "Enterprise", "price": "997", "priceCurrency": "USD", "description": "Unlimited clients, custom AI training." }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Is there a free plan for Traffikora?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Traffikora offers a free plan forever with no credit card required — includes 3 AI blog posts per month." } },
      { "@type": "Question", "name": "Can I cancel my Traffikora subscription anytime?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Cancel with one click, no questions asked. You keep access until the end of your billing period." } },
      { "@type": "Question", "name": "What is included in the Pro plan?", "acceptedAnswer": { "@type": "Answer", "text": "The Pro plan at $97/month includes AI Agents that run daily, Auto Mode, TikTok and YouTube publishing, and full AI engine optimization for ChatGPT, Gemini, and more." } },
      { "@type": "Question", "name": "What is the Agency plan?", "acceptedAnswer": { "@type": "Answer", "text": "The Agency plan at $297/month supports up to 10 client accounts with white-label reporting and bulk content generation." } }
    ]
  }
]);

// ─── 3. FAQ PAGE ──────────────────────────────────────────────────────────────
writeLayout(path.join(base, 'faq'), [
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Traffikora?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora is an AI marketing automation platform that publishes SEO content, social media posts, and AI engine optimization daily for local businesses — automatically." } },
      { "@type": "Question", "name": "How does Traffikora work?", "acceptedAnswer": { "@type": "Answer", "text": "You connect your accounts once. Traffikora's AI agents generate and publish content across your website, social media, and AI engines every day without any manual work." } },
      { "@type": "Question", "name": "What platforms does Traffikora publish to?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora publishes to Google, WordPress, Facebook, Instagram, TikTok, YouTube, LinkedIn, X, and optimizes for AI engines including ChatGPT, Gemini, and Perplexity." } },
      { "@type": "Question", "name": "How much does Traffikora cost?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora has a free plan with no credit card required. Paid plans start at $47/month for Starter, $97/month for Pro, $297/month for Agency, and $997/month for Enterprise." } },
      { "@type": "Question", "name": "Does Traffikora work for my industry?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora works for 12+ local business industries including HVAC, dental, law firms, salons, restaurants, real estate, gyms, auto repair, med spas, plumbers, marketing agencies, and chiropractors." } },
      { "@type": "Question", "name": "Is Traffikora HIPAA compliant for healthcare businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora generates informational marketing content. Healthcare businesses should review content before publishing to ensure compliance with their specific regulations." } }
    ]
  }
]);

// ─── 4. HOW IT WORKS ──────────────────────────────────────────────────────────
writeLayout(path.join(base, 'how-it-works'), [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Traffikora",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://www.traffikora.com/how-it-works",
    "description": "Traffikora automates local business marketing in 3 steps: connect accounts, set up your business profile, and watch AI publish content daily across 9+ platforms."
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Traffikora Works",
    "description": "Set up AI marketing automation for your local business in under 5 minutes.",
    "step": [
      { "@type": "HowToStep", "name": "Connect your accounts", "text": "Link your website, social profiles, and Google Business Profile in one click. Takes less than 5 minutes." },
      { "@type": "HowToStep", "name": "Tell us about your business", "text": "Answer a few simple questions. The AI learns your industry, city, and target customers." },
      { "@type": "HowToStep", "name": "Watch it work", "text": "Traffikora starts generating and publishing content immediately and never stops — 24/7 marketing on autopilot." }
    ]
  }
]);

// ─── 5. WHY TRAFFIKORA ────────────────────────────────────────────────────────
writeLayout(path.join(base, 'why-traffikora'), [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Traffikora",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://www.traffikora.com/why-traffikora",
    "description": "Traffikora is the only AI marketing platform that automates both Google SEO and AI engine optimization for local businesses simultaneously."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Why choose Traffikora over a marketing agency?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora automates what agencies do manually at a fraction of the cost — starting at $47/month versus $2,000-$10,000/month for agencies — with no contracts and instant setup." } },
      { "@type": "Question", "name": "What makes Traffikora different from other marketing tools?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora is the only platform that simultaneously automates Google SEO, social media, and AI engine optimization for local businesses — getting you found on Google, ChatGPT, Gemini, and Perplexity automatically." } }
    ]
  }
]);

// ─── 6. SOLUTIONS HUB ────────────────────────────────────────────────────────
writeLayout(path.join(base, 'solutions'), [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Traffikora",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://www.traffikora.com/solutions",
    "description": "Traffikora AI marketing automation solutions for 12+ local business industries including HVAC, dental, law firms, salons, restaurants, real estate, gyms, and more."
  }
]);

// ─── 7. FEATURES HUB ─────────────────────────────────────────────────────────
writeLayout(path.join(base, 'features'), [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Traffikora",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://www.traffikora.com/features",
    "description": "Traffikora features: AI blog automation, social media publishing, local SEO, AI engine optimization, Google Business Profile automation, review automation, and more."
  }
]);

// ─── 8. WHITE LABEL ───────────────────────────────────────────────────────────
writeLayout(path.join(base, 'white-label'), [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Traffikora White Label",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://www.traffikora.com/white-label",
    "description": "Traffikora white label AI marketing platform for agencies. Resell AI content automation under your own brand with up to 10 client accounts."
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Can I white label Traffikora for my agency clients?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Traffikora's Agency plan includes white label capabilities so you can deliver AI content marketing under your own brand." } },
      { "@type": "Question", "name": "How many clients can I manage with Traffikora white label?", "acceptedAnswer": { "@type": "Answer", "text": "The Agency plan supports up to 10 clients. The Enterprise plan supports unlimited clients with custom AI training." } }
    ]
  }
]);

// ─── 9. DEMO PAGE ─────────────────────────────────────────────────────────────
writeLayout(path.join(base, 'demo'), [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Traffikora",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "url": "https://www.traffikora.com/demo",
    "description": "See Traffikora AI marketing automation in action. Live demo of blog content, social media, and AI engine optimization running automatically for local businesses."
  }
]);

// ─── 10. ABOUT ────────────────────────────────────────────────────────────────
writeLayout(path.join(base, 'about'), [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Traffikora",
    "url": "https://www.traffikora.com",
    "description": "Traffikora is an AI marketing automation company built to help local small businesses compete online without agencies or manual work.",
    "foundingDate": "2025",
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61590075525966",
      "https://www.instagram.com/traffikora/",
      "https://x.com/traffikora"
    ]
  }
]);

// ─── 11. CONTACT ──────────────────────────────────────────────────────────────
writeLayout(path.join(base, 'contact'), [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Traffikora",
    "url": "https://www.traffikora.com/contact",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@traffikora.com",
      "contactType": "customer support"
    }
  }
]);

// ─── 12. SUPPORT ──────────────────────────────────────────────────────────────
writeLayout(path.join(base, 'support'), [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Traffikora",
    "url": "https://www.traffikora.com/support",
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@traffikora.com",
      "contactType": "customer support",
      "availableLanguage": "English"
    }
  }
]);

// ─── 13. GLOSSARY ─────────────────────────────────────────────────────────────
writeLayout(path.join(base, 'resources', 'glossary'), [
  {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": "Traffikora Marketing Glossary",
    "url": "https://www.traffikora.com/resources/glossary",
    "description": "Definitions of AI marketing, SEO, AEO, and local business marketing terms used by Traffikora."
  }
]);

// ─── 14. COMPARE PAGES ───────────────────────────────────────────────────────
const comparePages = [
  { slug: 'traffikora-vs-birdeye', competitor: 'Birdeye', desc: 'Traffikora vs Birdeye for local business marketing automation. Traffikora starts at $47/month vs Birdeye enterprise pricing.' },
  { slug: 'traffikora-vs-brightlocal', competitor: 'BrightLocal', desc: 'Traffikora vs BrightLocal for local SEO and marketing automation. Traffikora adds AI content and social media automation.' },
  { slug: 'traffikora-vs-constant-contact', competitor: 'Constant Contact', desc: 'Traffikora vs Constant Contact for small business marketing. Traffikora automates SEO, social, and AI engine visibility.' },
  { slug: 'traffikora-vs-hootsuite', competitor: 'Hootsuite', desc: 'Traffikora vs Hootsuite for social media automation. Traffikora adds SEO content and AI engine optimization.' },
  { slug: 'traffikora-vs-hubspot', competitor: 'HubSpot', desc: 'Traffikora vs HubSpot for local small business marketing. Traffikora starts at $47/month vs HubSpot at $800+/month.' },
  { slug: 'traffikora-vs-later', competitor: 'Later', desc: 'Traffikora vs Later for social media scheduling. Traffikora adds AI content generation, SEO, and AI engine optimization.' },
  { slug: 'traffikora-vs-mailchimp', competitor: 'Mailchimp', desc: 'Traffikora vs Mailchimp for small business marketing. Traffikora automates SEO content and AI engine visibility beyond email.' },
  { slug: 'traffikora-vs-reputation-com', competitor: 'Reputation.com', desc: 'Traffikora vs Reputation.com for local business marketing. Traffikora adds AI content automation and social media publishing.' },
  { slug: 'traffikora-vs-semrush', competitor: 'Semrush', desc: 'Traffikora vs Semrush for local SEO. Traffikora automates content creation and publishing versus Semrush as a research tool.' },
  { slug: 'traffikora-vs-sprout-social', competitor: 'Sprout Social', desc: 'Traffikora vs Sprout Social for social media marketing. Traffikora adds AI SEO content and AI engine optimization for local businesses.' },
  { slug: 'traffikora-vs-vendasta', competitor: 'Vendasta', desc: 'Traffikora vs Vendasta for local business marketing automation. Traffikora offers simpler setup and AI-first content automation.' },
  { slug: 'traffikora-vs-yext', competitor: 'Yext', desc: 'Traffikora vs Yext for local listings and SEO. Traffikora adds daily AI content creation and social media automation.' },
];

comparePages.forEach(({ slug, competitor, desc }) => {
  writeLayout(path.join(base, 'compare', slug), [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Traffikora",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": `https://www.traffikora.com/compare/${slug}`,
      "description": desc
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `Is Traffikora better than ${competitor} for local businesses?`,
          "acceptedAnswer": { "@type": "Answer", "text": `For local small businesses needing automated SEO content, social media, and AI engine optimization, Traffikora is purpose-built versus ${competitor} which serves broader or enterprise markets. Traffikora starts at $47/month with no contracts.` }
        },
        {
          "@type": "Question",
          "name": `How does Traffikora compare to ${competitor} on price?`,
          "acceptedAnswer": { "@type": "Answer", "text": `Traffikora starts at $47/month with a free plan available. It includes AI content generation, social media automation, local SEO, and AI engine optimization — features that would cost significantly more with ${competitor}.` }
        },
        {
          "@type": "Question",
          "name": `Does Traffikora have AI engine optimization that ${competitor} lacks?`,
          "acceptedAnswer": { "@type": "Answer", "text": `Yes. Traffikora is built to optimize your business for citation by ChatGPT, Google Gemini, Perplexity, and other AI engines — a capability most competing platforms do not offer.` }
        }
      ]
    }
  ]);
});

// ─── 15. VS PAGES ────────────────────────────────────────────────────────────
const vsPages = [
  { slug: 'hubspot', competitor: 'HubSpot' },
  { slug: 'hootsuite', competitor: 'Hootsuite' },
  { slug: 'buffer', competitor: 'Buffer' },
  { slug: 'later', competitor: 'Later' },
];

vsPages.forEach(({ slug, competitor }) => {
  writeLayout(path.join(base, 'vs', slug), [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Traffikora",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": `https://www.traffikora.com/vs/${slug}`,
      "description": `Traffikora vs ${competitor} for local small business marketing automation. Traffikora automates SEO content, social media, and AI engine optimization starting at $47/month.`
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `What is the difference between Traffikora and ${competitor}?`,
          "acceptedAnswer": { "@type": "Answer", "text": `Traffikora is purpose-built for local business marketing automation — publishing daily SEO content, social media posts, and optimizing for AI engine citations. ${competitor} focuses on different aspects of marketing without Traffikora's AI-first local search approach.` }
        },
        {
          "@type": "Question",
          "name": `Is Traffikora cheaper than ${competitor}?`,
          "acceptedAnswer": { "@type": "Answer", "text": `Traffikora starts at $47/month with a free plan available. For local businesses needing automated content marketing and AI engine optimization, Traffikora delivers more relevant features at a competitive price.` }
        }
      ]
    }
  ]);
});

// ─── 16. FEATURE PAGES ───────────────────────────────────────────────────────
const featurePages = [
  { slug: 'ai-engine-optimization', name: 'AI Engine Optimization', desc: 'Traffikora AI Engine Optimization automatically structures and publishes content so your business gets cited by ChatGPT, Google Gemini, Perplexity, and other AI search engines.' },
  { slug: 'ai-marketing-automation', name: 'AI Marketing Automation', desc: 'Traffikora AI marketing automation publishes SEO blog posts, social media content, and AI engine optimization daily for local businesses — fully automatically.' },
  { slug: 'blog-automation', name: 'Blog Automation', desc: 'Traffikora blog automation publishes keyword-optimized SEO blog posts to your WordPress website daily — building search authority without any manual writing.' },
  { slug: 'google-business-profile', name: 'Google Business Profile Automation', desc: 'Traffikora automates Google Business Profile posts, Q&A, and review requests to keep your listing active and ranking in local search.' },
  { slug: 'local-seo-automation', name: 'Local SEO Automation', desc: 'Traffikora local SEO automation builds citations, schema markup, and keyword content that ranks your local business higher on Google.' },
  { slug: 'social-media-automation', name: 'Social Media Automation', desc: 'Traffikora social media automation publishes branded content daily to Facebook, Instagram, TikTok, YouTube, LinkedIn, and more — without any manual work.' },
  { slug: 'review-automation', name: 'Review Automation', desc: 'Traffikora review automation sends automated review requests to customers, growing your star rating and online reputation on autopilot.' },
  { slug: 'reputation-management', name: 'Reputation Management', desc: 'Traffikora reputation management monitors and grows your online reviews and business listings across Google, Facebook, and major directories automatically.' },
];

featurePages.forEach(({ slug, name, desc }) => {
  writeLayout(path.join(base, 'features', slug), [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": `Traffikora — ${name}`,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": `https://www.traffikora.com/features/${slug}`,
      "description": desc
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `What is Traffikora ${name}?`,
          "acceptedAnswer": { "@type": "Answer", "text": desc }
        },
        {
          "@type": "Question",
          "name": `How does Traffikora ${name} work?`,
          "acceptedAnswer": { "@type": "Answer", "text": `Traffikora ${name} runs automatically after a one-time setup. Connect your accounts once and the system handles all ${name.toLowerCase()} tasks daily without any manual work from you.` }
        },
        {
          "@type": "Question",
          "name": `How much does Traffikora ${name} cost?`,
          "acceptedAnswer": { "@type": "Answer", "text": `Traffikora ${name} is included in paid plans starting at $47/month. A free plan is also available with no credit card required.` }
        }
      ]
    }
  ]);
});

// ─── 17. CITY PAGES ──────────────────────────────────────────────────────────
const cities = [
  { slug: 'atlanta', city: 'Atlanta', state: 'GA' },
  { slug: 'chicago', city: 'Chicago', state: 'IL' },
  { slug: 'dallas', city: 'Dallas', state: 'TX' },
  { slug: 'houston', city: 'Houston', state: 'TX' },
  { slug: 'las-vegas', city: 'Las Vegas', state: 'NV' },
  { slug: 'los-angeles', city: 'Los Angeles', state: 'CA' },
  { slug: 'miami', city: 'Miami', state: 'FL' },
  { slug: 'new-york', city: 'New York', state: 'NY' },
  { slug: 'phoenix', city: 'Phoenix', state: 'AZ' },
  { slug: 'seattle', city: 'Seattle', state: 'WA' },
];

cities.forEach(({ slug, city, state }) => {
  writeLayout(path.join(base, 'local-businesses', slug), [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Traffikora",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": `https://www.traffikora.com/local-businesses/${slug}`,
      "description": `Traffikora AI marketing automation for small businesses in ${city}, ${state}. Automates SEO content, social media, and AI engine optimization for local businesses.`,
      "areaServed": { "@type": "City", "name": city, "containedInPlace": { "@type": "State", "name": state } }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": `How does Traffikora help small businesses in ${city}?`,
          "acceptedAnswer": { "@type": "Answer", "text": `Traffikora automates daily SEO blog content, social media posts, and AI engine optimization for small businesses in ${city} — helping them rank on Google and get recommended by ChatGPT and Gemini for local searches.` }
        },
        {
          "@type": "Question",
          "name": `What types of businesses in ${city} use Traffikora?`,
          "acceptedAnswer": { "@type": "Answer", "text": `Traffikora serves local businesses in ${city} including HVAC companies, dental offices, law firms, salons, restaurants, real estate agents, gyms, auto repair shops, med spas, plumbers, and chiropractors.` }
        },
        {
          "@type": "Question",
          "name": `How much does Traffikora cost for ${city} businesses?`,
          "acceptedAnswer": { "@type": "Answer", "text": `Traffikora has a free plan with no credit card required. Paid plans start at $47/month — far less than hiring a local marketing agency in ${city}.` }
        }
      ]
    }
  ]);
});

// ─── 18. BLOG POSTS ──────────────────────────────────────────────────────────
const blogPosts = [
  { slug: 'how-to-get-found-on-chatgpt-perplexity', title: 'How to Get Found on ChatGPT and Perplexity', desc: 'Learn how local businesses can get recommended by ChatGPT, Perplexity, and Google Gemini through AI engine optimization.' },
  { slug: 'how-to-get-more-google-reviews', title: 'How to Get More Google Reviews', desc: 'Strategies for local businesses to generate more Google reviews automatically and build online reputation.' },
  { slug: 'how-traffikora-is-different', title: 'How Traffikora Is Different', desc: 'Traffikora is the only AI marketing platform that automates SEO content, social media, and AI engine optimization simultaneously for local businesses.' },
  { slug: 'local-seo-tips-for-small-businesses', title: 'Local SEO Tips for Small Businesses', desc: 'Actionable local SEO tips for small businesses to rank higher on Google and get found by customers in their area.' },
  { slug: 'local-seo-vs-ai-engine-optimization', title: 'Local SEO vs AI Engine Optimization', desc: 'The difference between local SEO and AI engine optimization — and why local businesses need both in 2026.' },
  { slug: 'set-it-once-how-traffikora-works', title: 'Set It Once: How Traffikora Works', desc: 'How Traffikora works: connect your accounts once and AI agents publish marketing content daily across 9+ platforms automatically.' },
  { slug: 'small-business-marketing-problem', title: 'The Small Business Marketing Problem', desc: 'Why small businesses struggle with marketing and how AI automation solves the time and cost problem for local business owners.' },
  { slug: 'what-is-aeo', title: 'What Is AI Engine Optimization (AEO)?', desc: 'AEO is the practice of optimizing your business to be recommended by AI engines like ChatGPT, Gemini, and Perplexity — the next evolution of local SEO.' },
  { slug: 'what-is-ai-engine-optimization', title: 'What Is AI Engine Optimization?', desc: 'A complete guide to AI engine optimization for local businesses — how to get your business cited and recommended by AI search engines.' },
  { slug: 'what-is-generative-engine-optimization', title: 'What Is Generative Engine Optimization?', desc: 'Generative engine optimization (GEO) explained — how to optimize your local business content for generative AI search results.' },
  { slug: 'what-is-local-seo', title: 'What Is Local SEO?', desc: 'Local SEO explained for small business owners — what it is, why it matters, and how to rank higher in local Google searches.' },
  { slug: 'what-is-traffikora', title: 'What Is Traffikora?', desc: 'Traffikora is an AI marketing automation platform that publishes daily SEO content, social media posts, and AI engine optimization for local businesses.' },
  { slug: 'why-ai-engine-optimization', title: 'Why AI Engine Optimization Matters', desc: 'Why local businesses need AI engine optimization in 2026 — how AI search is changing local discovery and what to do about it.' },
  { slug: 'why-google-business-profile-matters', title: 'Why Google Business Profile Matters', desc: 'Why your Google Business Profile is critical for local SEO and how to keep it optimized automatically with Traffikora.' },
  { slug: 'why-local-seo-matters', title: 'Why Local SEO Matters for Small Businesses', desc: 'Why local SEO is the most important marketing channel for small businesses and how to build search authority automatically.' },
  { slug: 'how-ai-marketing-automation-works', title: 'How AI Marketing Automation Works', desc: 'How AI marketing automation works for local businesses — from content generation to publishing across 9+ platforms automatically.' },
  { slug: 'marketing-automation-small-business-2026', title: 'Marketing Automation for Small Business 2026', desc: 'The complete guide to marketing automation for small businesses in 2026 — tools, strategies, and how to get started for free.' },
  { slug: 'ai-search-for-local-business', title: 'AI Search for Local Business', desc: 'How AI search engines like ChatGPT and Gemini are changing local business discovery and how to optimize for AI-powered recommendations.' },
];

blogPosts.forEach(({ slug, title, desc }) => {
  writeLayout(path.join(base, 'blog', slug), [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": title,
      "description": desc,
      "url": `https://www.traffikora.com/blog/${slug}`,
      "datePublished": "2026-06-02",
      "dateModified": today,
      "author": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
      "publisher": {
        "@type": "Organization",
        "name": "Traffikora",
        "url": "https://www.traffikora.com",
        "logo": { "@type": "ImageObject", "url": "https://www.traffikora.com/favicon.ico" }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": `https://www.traffikora.com/blog/${slug}` }
    }
  ]);
});

console.log('\nDONE — JSON-LD layout.tsx written for all 68 remaining pages');