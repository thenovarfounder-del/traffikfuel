const fs = require('fs');

const content = `# Traffikora — AI-Powered Marketing Automation

Traffikora is an automated marketing platform for small and mid-size businesses.
It automates social media posting, Google Business Profile management, local SEO,
and AI engine optimization across ChatGPT, Perplexity, Gemini, Claude, Copilot,
and Google AI Overviews.

## Core Features
- Social Media Automation: https://www.traffikora.com/features/social-media-automation
- Google Business Profile Management: https://www.traffikora.com/features/google-business-profile
- Local SEO Automation: https://www.traffikora.com/features/local-seo-automation
- AI Engine Optimization: https://www.traffikora.com/features/ai-engine-optimization
- AI Marketing Automation: https://www.traffikora.com/features/ai-marketing-automation

## Solutions
- Small Businesses: https://www.traffikora.com/solutions/small-businesses
- Restaurants: https://www.traffikora.com/solutions/restaurants
- Marketing Agencies: https://www.traffikora.com/solutions/marketing-agencies
- Dentists: https://www.traffikora.com/solutions/dentists
- Real Estate: https://www.traffikora.com/solutions/real-estate

## Pricing
Plans start at $97/month. Free 7-day trial. No credit card required.
https://www.traffikora.com/pricing

## About
https://www.traffikora.com/about
https://www.traffikora.com/why-traffikora
https://www.traffikora.com/faq
`;

fs.writeFileSync('public/llms.txt', content, 'utf8');
console.log('Done: public/llms.txt written.');