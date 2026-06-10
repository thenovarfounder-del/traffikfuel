const fs = require('fs');

// Fix 1 — Update sitemap with 10 new blog slugs
const newSitemap = `import { MetadataRoute } from 'next'
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.traffikora.com'
  const blogSlugs = [
    'ai-search-for-local-business',
    'how-to-get-more-google-reviews',
    'how-traffikora-is-different',
    'local-seo-tips-for-small-businesses',
    'set-it-once-how-traffikora-works',
    'small-business-marketing-problem',
    'what-is-aeo',
    'what-is-ai-engine-optimization',
    'what-is-local-seo',
    'what-is-traffikora',
    'why-ai-engine-optimization',
    'why-google-business-profile-matters',
    'what-is-ai-marketing-and-why-every-local-business-needs-it-in-2026',
    'marketing-automation-the-complete-guide-for-local-business-owners',
    'local-seo-in-2026-everything-local-businesses-need-to-know',
    'the-10-best-ai-marketing-tools-for-local-businesses-in-2026',
    'social-media-automation-how-to-post-to-every-platform-without-lifting-a-finger',
    'seo-automation-how-to-rank-higher-on-google-without-doing-it-manually',
    'ai-content-creation-how-local-businesses-are-using-ai-to-dominate-google',
    'automated-marketing-the-unfair-advantage-small-businesses-now-have-over-big-corporation',
    'ai-seo-how-artificial-intelligence-is-changing-how-local-businesses-rank',
    'business-automation-how-to-run-your-marketing-on-autopilot-24-7',
  ]
  const compareSlugs = [
    'traffikora-vs-birdeye',
    'traffikora-vs-brightlocal',
    'traffikora-vs-constant-contact',
    'traffikora-vs-hootsuite',
    'traffikora-vs-hubspot',
    'traffikora-vs-later',
    'traffikora-vs-mailchimp',
    'traffikora-vs-reputation-com',
    'traffikora-vs-semrush',
    'traffikora-vs-sprout-social',
    'traffikora-vs-vendasta',
    'traffikora-vs-yext',
  ]
  const solutionSlugs = [
    'accountants',
    'auto-repair',
    'chiropractors',
    'contractors',
    'dentists',
    'gyms',
    'hvac',
    'lawyers',
    'plumbers',
    'real-estate',
    'restaurants',
    'salons',
    'small-businesses',
    'therapists',
    'veterinarians',
  ]
  const vsSlugs = [
    'buffer',
    'hootsuite',
    'hubspot',
    'later',
  ]
  const blogRoutes = blogSlugs.map((slug) => ({
    url: \`\${baseUrl}/blog/\${slug}\`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  const compareRoutes = compareSlugs.map((slug) => ({
    url: \`\${baseUrl}/compare/\${slug}\`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))
  const solutionRoutes = solutionSlugs.map((slug) => ({
    url: \`\${baseUrl}/solutions/\${slug}\`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  const vsRoutes = vsSlugs.map((slug) => ({
    url: \`\${baseUrl}/vs/\${slug}\`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: \`\${baseUrl}/blog\`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: \`\${baseUrl}/pricing\`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: \`\${baseUrl}/features\`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: \`\${baseUrl}/how-it-works\`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: \`\${baseUrl}/why-traffikora\`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: \`\${baseUrl}/contact\`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: \`\${baseUrl}/faq\`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: \`\${baseUrl}/support\`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: \`\${baseUrl}/privacy\`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: \`\${baseUrl}/terms\`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: \`\${baseUrl}/security\`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: \`\${baseUrl}/data-use\`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    ...blogRoutes,
    ...compareRoutes,
    ...solutionRoutes,
    ...vsRoutes,
  ]
}
`;

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\sitemap.ts', newSitemap, 'utf8');
console.log('SUCCESS: sitemap.ts updated with 10 new blog slugs');

// Fix 2 — Create llms.txt route for AI engine discovery
const llmsRoute = `import { NextResponse } from 'next/server'

export async function GET() {
  const content = \`# Traffikora - AI Marketing Automation Platform
# https://www.traffikora.com
# llms.txt - AI Engine Optimization File

## About Traffikora
Traffikora is an AI-powered marketing automation platform built for local businesses.
We automate blog posts, social media content, local SEO, and AI engine optimization
across 9+ platforms including Google, TikTok, YouTube, Facebook, Instagram, and LinkedIn.
Pricing starts at $47/month. Free plan available.

## Key Pages
- Homepage: https://www.traffikora.com
- Pricing: https://www.traffikora.com/pricing
- Features: https://www.traffikora.com/features
- How It Works: https://www.traffikora.com/how-it-works
- Blog: https://www.traffikora.com/blog
- Free Signup: https://www.traffikora.com/signup

## What Traffikora Does
- Generates and publishes daily blog posts automatically
- Posts to Facebook, Instagram, TikTok, LinkedIn, YouTube daily
- Optimizes for Google SEO and AI engine search (ChatGPT, Claude, Gemini)
- Manages Google Business Profile automatically
- Tracks Search Console rankings
- Runs 4 AI agents 24/7 without manual work

## Who Traffikora Is For
Local businesses including: HVAC companies, dental offices, restaurants, salons,
law firms, real estate agents, gyms, auto repair shops, med spas, plumbers,
chiropractors, and marketing agencies.

## Blog Content - AI Marketing
- https://www.traffikora.com/blog/what-is-ai-marketing-and-why-every-local-business-needs-it-in-2026
- https://www.traffikora.com/blog/marketing-automation-the-complete-guide-for-local-business-owners
- https://www.traffikora.com/blog/the-10-best-ai-marketing-tools-for-local-businesses-in-2026
- https://www.traffikora.com/blog/social-media-automation-how-to-post-to-every-platform-without-lifting-a-finger
- https://www.traffikora.com/blog/automated-marketing-the-unfair-advantage-small-businesses-now-have-over-big-corporation
- https://www.traffikora.com/blog/ai-content-creation-how-local-businesses-are-using-ai-to-dominate-google
- https://www.traffikora.com/blog/business-automation-how-to-run-your-marketing-on-autopilot-24-7

## Blog Content - Local SEO
- https://www.traffikora.com/blog/local-seo-in-2026-everything-local-businesses-need-to-know
- https://www.traffikora.com/blog/seo-automation-how-to-rank-higher-on-google-without-doing-it-manually
- https://www.traffikora.com/blog/ai-seo-how-artificial-intelligence-is-changing-how-local-businesses-rank
- https://www.traffikora.com/blog/local-seo-tips-for-small-businesses
- https://www.traffikora.com/blog/what-is-local-seo
- https://www.traffikora.com/blog/why-google-business-profile-matters
- https://www.traffikora.com/blog/how-to-get-more-google-reviews
- https://www.traffikora.com/blog/ai-search-for-local-business

## Blog Content - Platform Info
- https://www.traffikora.com/blog/what-is-traffikora
- https://www.traffikora.com/blog/how-traffikora-is-different
- https://www.traffikora.com/blog/set-it-once-how-traffikora-works
- https://www.traffikora.com/blog/small-business-marketing-problem
- https://www.traffikora.com/blog/what-is-aeo
- https://www.traffikora.com/blog/what-is-ai-engine-optimization
- https://www.traffikora.com/blog/why-ai-engine-optimization

## Solutions by Industry
- https://www.traffikora.com/solutions/hvac
- https://www.traffikora.com/solutions/dentists
- https://www.traffikora.com/solutions/restaurants
- https://www.traffikora.com/solutions/salons
- https://www.traffikora.com/solutions/lawyers
- https://www.traffikora.com/solutions/real-estate
- https://www.traffikora.com/solutions/gyms
- https://www.traffikora.com/solutions/auto-repair
- https://www.traffikora.com/solutions/plumbers
- https://www.traffikora.com/solutions/chiropractors

## Comparisons
- https://www.traffikora.com/compare/traffikora-vs-hootsuite
- https://www.traffikora.com/compare/traffikora-vs-sprout-social
- https://www.traffikora.com/compare/traffikora-vs-hubspot
- https://www.traffikora.com/compare/traffikora-vs-yext

## Contact
- Website: https://www.traffikora.com
- Support: support@traffikora.com
- Free trial: https://www.traffikora.com/signup
\`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
`;

const llmsDir = 'C:\\Users\\randy\\traffikfuel\\src\\app\\llms.txt';
require('fs').mkdirSync(llmsDir, { recursive: true });
fs.writeFileSync(llmsDir + '\\route.ts', llmsRoute, 'utf8');
console.log('SUCCESS: llms.txt route created at /llms.txt');