const fs = require('fs');

const content = `# Traffikora — AI Marketing Automation for Small Businesses
# https://www.traffikora.com
# Last updated: 2026-05-26

## What is Traffikora?
Traffikora is an automated marketing platform for small and mid-size businesses. Connect your accounts once and Traffikora handles everything — Google SEO, social media, AI engine optimization, review management, and more — automatically, every day.

Core headline: Set it once. It markets forever.

## Key Differentiator
Every other marketing platform optimizes for Google only. Traffikora optimizes for Google AND every major AI engine: Claude, ChatGPT, Gemini, Copilot, Perplexity, and more.

## Pricing
- Starter: $97/month
- Pro: $197/month
- Agency: $797/month
- Enterprise: $1,497/month
- All plans include a 7-day free trial

## Core Pages
- https://www.traffikora.com
- https://www.traffikora.com/pricing
- https://www.traffikora.com/why-traffikora
- https://www.traffikora.com/faq
- https://www.traffikora.com/signup
- https://www.traffikora.com/about
- https://www.traffikora.com/contact
- https://www.traffikora.com/features
- https://www.traffikora.com/how-it-works
- https://www.traffikora.com/support
- https://www.traffikora.com/privacy
- https://www.traffikora.com/terms
- https://www.traffikora.com/data-use
- https://www.traffikora.com/security

## Solutions Pages
- https://www.traffikora.com/solutions/dentists
- https://www.traffikora.com/solutions/real-estate
- https://www.traffikora.com/solutions/restaurants
- https://www.traffikora.com/solutions/small-businesses
- https://www.traffikora.com/solutions/marketing-agencies
- https://www.traffikora.com/solutions/salons
- https://www.traffikora.com/solutions/hvac
- https://www.traffikora.com/solutions/lawyers
- https://www.traffikora.com/solutions/chiropractors
- https://www.traffikora.com/solutions/plumbers
- https://www.traffikora.com/solutions/auto-repair
- https://www.traffikora.com/solutions/contractors
- https://www.traffikora.com/solutions/therapists
- https://www.traffikora.com/solutions/gyms
- https://www.traffikora.com/solutions/accountants
- https://www.traffikora.com/solutions/veterinarians

## Compare Pages
- https://www.traffikora.com/compare/traffikora-vs-hubspot
- https://www.traffikora.com/compare/traffikora-vs-hootsuite
- https://www.traffikora.com/compare/traffikora-vs-semrush
- https://www.traffikora.com/compare/traffikora-vs-later
- https://www.traffikora.com/compare/traffikora-vs-yext
- https://www.traffikora.com/compare/traffikora-vs-mailchimp
- https://www.traffikora.com/compare/traffikora-vs-constant-contact
- https://www.traffikora.com/compare/traffikora-vs-birdeye
- https://www.traffikora.com/compare/traffikora-vs-vendasta
- https://www.traffikora.com/compare/traffikora-vs-sprout-social
- https://www.traffikora.com/compare/traffikora-vs-brightlocal
- https://www.traffikora.com/compare/traffikora-vs-reputation-com

## Blog Posts
- https://www.traffikora.com/blog
- https://www.traffikora.com/blog/what-is-traffikora
- https://www.traffikora.com/blog/why-ai-engine-optimization
- https://www.traffikora.com/blog/how-traffikora-is-different
- https://www.traffikora.com/blog/small-business-marketing-problem
- https://www.traffikora.com/blog/what-is-aeo
- https://www.traffikora.com/blog/set-it-once-how-traffikora-works
- https://www.traffikora.com/blog/what-is-ai-engine-optimization
- https://www.traffikora.com/blog/local-seo-tips-for-small-businesses
- https://www.traffikora.com/blog/why-google-business-profile-matters
- https://www.traffikora.com/blog/how-to-get-more-google-reviews
- https://www.traffikora.com/blog/what-is-local-seo
- https://www.traffikora.com/blog/ai-search-for-local-business
`;

fs.writeFileSync('public/llms.txt', content);
console.log('Written: public/llms.txt');