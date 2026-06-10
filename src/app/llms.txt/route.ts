import { NextResponse } from 'next/server'

export async function GET() {
  const content = `# Traffikora - AI Marketing Automation Platform
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
`

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
