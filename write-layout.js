const fs = require('fs');

const jsonLD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Traffikora",
  "url": "https://www.traffikora.com",
  "applicationCategory": "BusinessApplication",
  "description": "Traffikora is an AI-powered marketing automation platform for small businesses. It automates social media, local SEO, Google Business Profile, and AI engine optimization.",
  "offers": { "@type": "Offer", "price": "97", "priceCurrency": "USD" },
  "operatingSystem": "Web",
  "provider": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" }
});

const pages = [
  {
    path: 'src/app/features/ai-engine-optimization/layout.tsx',
    title: 'AI Engine Optimization for Small Businesses | Traffikora',
    desc: 'Get your business found on ChatGPT, Perplexity, Gemini, and Google AI. Traffikora automates AI engine optimization. Free 7-day trial.'
  },
  {
    path: 'src/app/features/google-business-profile/layout.tsx',
    title: 'Google Business Profile Automation | Traffikora',
    desc: 'Automate your Google Business Profile updates, posts, and reviews. Traffikora keeps your listing optimized 24/7. Free 7-day trial, no credit card.'
  },
  {
    path: 'src/app/features/local-seo-automation/layout.tsx',
    title: 'Local SEO Automation for Small Businesses | Traffikora',
    desc: 'Rank higher in local search automatically. Traffikora handles local SEO so you can focus on running your business. Start your free 7-day trial.'
  },
  {
    path: 'src/app/features/social-media-automation/layout.tsx',
    title: 'Social Media Automation for Small Businesses | Traffikora',
    desc: 'Automate social media posting across every platform. Traffikora creates and schedules content for you forever. Free 7-day trial, no credit card needed.'
  },
  {
    path: 'src/app/features/ai-marketing-automation/layout.tsx',
    title: 'AI Marketing Automation for Small Businesses | Traffikora',
    desc: 'Let AI handle your entire marketing strategy. Traffikora automates content, SEO, and growth so you never have to. Free 7-day trial.'
  },
  {
    path: 'src/app/faq/layout.tsx',
    title: 'FAQ — Traffikora Marketing Automation Platform',
    desc: 'Got questions about Traffikora? Find answers about pricing, features, AI engine optimization, and how it all works. Start your free 7-day trial today.'
  },
  {
    path: 'src/app/why-traffikora/layout.tsx',
    title: 'Why Traffikora? The Only Platform That Optimizes for AI + Google',
    desc: 'Traffikora is the only marketing platform that optimizes for Google AND every major AI engine. See why small businesses choose us. Free 7-day trial.'
  },
  {
    path: 'src/app/solutions/small-businesses/layout.tsx',
    title: 'Marketing Automation for Small Businesses | Traffikora',
    desc: 'Traffikora is the automated marketing platform built for small businesses. Set it once and let it market forever. Free 7-day trial, no credit card.'
  },
  {
    path: 'src/app/solutions/restaurants/layout.tsx',
    title: 'Restaurant Marketing Automation | Traffikora',
    desc: 'Automate social media, Google Business Profile, and local SEO for your restaurant. Traffikora markets your restaurant 24/7. Free 7-day trial.'
  },
  {
    path: 'src/app/solutions/marketing-agencies/layout.tsx',
    title: 'Marketing Automation Platform for Agencies | Traffikora',
    desc: 'Scale your agency with Traffikora. Automate SEO, social media, and AI engine optimization for all your clients at once. Free 7-day trial.'
  },
];

const template = (title, desc) => `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title}',
  description: '${desc}',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(${jsonLD})
        }}
      />
      {children}
    </>
  )
}
`;

pages.forEach(({ path, title, desc }) => {
  fs.writeFileSync(path, template(title, desc), 'utf8');
  console.log('Written:', path);
});

console.log('All 10 layouts done.');