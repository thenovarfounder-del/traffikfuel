const fs = require('fs')
const path = require('path')

const base = 'C:\\Users\\randy\\traffikfuel\\src\\app'

const pages = [
  {
    folder: 'features/blog-automation',
    title: 'Automated Blog Content for Local Business | Traffikora',
    description: 'Traffikora automatically writes and publishes SEO-optimized blog posts for your local business every week. More content, more ranking, zero effort.',
    url: 'https://www.traffikora.com/features/blog-automation',
    faqs: [
      ['What is automated blog content for local business?', 'Automated blog content is SEO-optimized articles written and published to your website automatically on a weekly schedule. Traffikora generates blog posts targeting your local keywords so your website consistently ranks for the searches your customers are making.'],
      ['How does Traffikora write blog content for my business?', 'Traffikora uses your business information, location, and industry to generate relevant, SEO-optimized blog posts automatically. Every post targets local keywords, includes proper headings, and is structured to rank in Google search results.'],
      ['How often does Traffikora publish blog posts?', 'Traffikora publishes new blog content on a weekly schedule. Consistent weekly publishing is one of the strongest signals Google uses to determine how authoritative and active a local business website is.'],
      ['Will the blog content rank on Google?', 'Every blog post Traffikora generates is written specifically for local search ranking. Posts target keywords your potential customers are searching for, include proper SEO structure, and build topical authority in your market over time.']
    ]
  },
  {
    folder: 'features/reputation-management',
    title: 'Online Reputation Management for Small Business | Traffikora',
    description: 'Protect and grow your online reputation automatically. Traffikora monitors your reviews, alerts you to threats, and builds the 5-star presence that wins local customers.',
    url: 'https://www.traffikora.com/features/reputation-management',
    faqs: [
      ['What is online reputation management for small business?', 'Online reputation management is the ongoing process of monitoring, protecting, and improving how your business appears across review platforms. For small businesses this means managing Google, Yelp, and Facebook reviews -- responding to feedback, generating positive reviews, and maintaining a rating that wins customer trust.'],
      ['Can Traffikora remove negative reviews?', 'No platform can remove legitimate negative reviews. What Traffikora does is alert you instantly so you can respond professionally, and simultaneously build your positive review volume so negative reviews become a smaller percentage of your overall rating over time.'],
      ['How quickly will I see my reputation improve?', 'Most businesses see measurable improvement in review volume within the first 30 days. Average rating improvement depends on your starting point and transaction volume, but businesses consistently see their rating trend upward within 60 to 90 days as new positive reviews accumulate.'],
      ['Does reputation management affect my Google ranking?', 'Yes, directly. Google uses your review count, average rating, and review recency as ranking signals for local search. A higher rating with more recent reviews consistently ranks above competitors with fewer or older reviews.']
    ]
  },
  {
    folder: 'features/review-automation',
    title: 'Automated Review Generation Software for Small Business | Traffikora',
    description: 'Get more Google reviews automatically. Traffikora sends review requests after every job, monitors your reputation, and helps local businesses build 5-star authority on autopilot.',
    url: 'https://www.traffikora.com/features/review-automation',
    faqs: [
      ['How does automated review generation work?', 'Traffikora connects to your customer data and automatically sends a review request via email or SMS after every completed job or purchase. The message includes a direct link to your Google Business Profile so customers can leave a review in seconds.'],
      ['Is it against Google policy to ask customers for reviews?', 'No. Google explicitly allows and encourages businesses to ask customers for honest reviews. What Google prohibits is incentivizing reviews with discounts or payment, and posting fake reviews. Traffikora sends genuine requests to real customers -- fully compliant with Google policy.'],
      ['How many more reviews will I get?', 'Most businesses using automated review requests see a 3x to 5x increase in monthly review volume within the first 60 days. The consistent and timely nature of automated requests significantly outperforms manual asking.'],
      ['How does review count affect my Google ranking?', 'Google uses review quantity, recency, and average rating as direct signals in its local ranking algorithm. Businesses with more recent positive reviews consistently rank higher in the local map pack.']
    ]
  },
  {
    folder: 'compare/traffikora-vs-birdeye',
    title: 'Traffikora vs Birdeye: Best Reputation Management for Small Business | Traffikora',
    description: 'Compare Traffikora vs Birdeye for local business reputation management. See why small businesses choose Traffikora for automated reviews, local SEO, and AI engine optimization.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-birdeye',
    faqs: [
      ['How does Traffikora compare to Birdeye?', 'Traffikora is built specifically for small businesses and includes local SEO automation, AI engine optimization, and social media publishing that Birdeye does not offer. Birdeye focuses primarily on reputation and reviews at a higher price point aimed at enterprise customers.'],
      ['Is Traffikora cheaper than Birdeye?', 'Yes. Traffikora starts at $47 per month for unlimited blogs and social content. Birdeye pricing starts significantly higher and scales up for multi-location businesses, making Traffikora the more affordable choice for small and local businesses.'],
      ['Does Traffikora do everything Birdeye does?', 'Traffikora covers review generation and reputation monitoring like Birdeye, and also includes local SEO content, Google Business Profile automation, and AI engine optimization that Birdeye does not provide.'],
      ['Which is better for local SEO -- Traffikora or Birdeye?', 'Traffikora is purpose-built for local SEO with automated blog content, Google Business Profile posting, citation building, and AI engine visibility. Birdeye does not include these local SEO features in its core platform.']
    ]
  },
  {
    folder: 'compare/traffikora-vs-hubspot',
    title: 'Traffikora vs HubSpot: Best Marketing Automation for Small Business | Traffikora',
    description: 'Compare Traffikora vs HubSpot for small business marketing. Traffikora delivers automated local SEO, reviews, and AI engine optimization at a fraction of HubSpot pricing.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-hubspot',
    faqs: [
      ['How does Traffikora compare to HubSpot?', 'HubSpot is a complex CRM and marketing platform built for sales teams at mid-size and enterprise companies. Traffikora is built specifically for local businesses and automates local SEO, reviews, Google Business Profile, and AI engine optimization -- things HubSpot does not do.'],
      ['Is Traffikora cheaper than HubSpot?', 'Yes, significantly. HubSpot Marketing Hub starts at $800 per month for full marketing automation. Traffikora starts at $47 per month and includes automated local marketing that HubSpot does not offer at any price.'],
      ['Does Traffikora replace HubSpot?', 'For local businesses, yes. Traffikora handles everything a local business needs -- content, SEO, reviews, social media, and AI engine visibility -- without the complexity or cost of HubSpot, which is designed for enterprise sales pipelines.'],
      ['Which is better for local business -- Traffikora or HubSpot?', 'Traffikora is built for local businesses. HubSpot is built for B2B sales teams. If your goal is ranking higher on Google Maps, getting more reviews, and being found on AI search engines, Traffikora is the purpose-built solution.']
    ]
  },
  {
    folder: 'compare/traffikora-vs-hootsuite',
    title: 'Traffikora vs Hootsuite: Best Social Media Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Hootsuite for local business social media. Traffikora automates content creation and publishing plus local SEO and reviews that Hootsuite cannot do.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-hootsuite',
    faqs: [
      ['How does Traffikora compare to Hootsuite?', 'Hootsuite is a social media scheduling tool that requires you to create your own content. Traffikora generates and publishes social content automatically and also handles local SEO, Google Business Profile, reviews, and AI engine optimization -- a complete local marketing system.'],
      ['Is Traffikora cheaper than Hootsuite?', 'Traffikora starts at $47 per month and includes content creation plus local SEO. Hootsuite Professional starts at $99 per month for scheduling only -- you still have to create all the content yourself.'],
      ['Does Hootsuite do local SEO?', 'No. Hootsuite is a social media scheduling platform only. It does not manage your Google Business Profile, generate review requests, build local citations, or optimize for AI engine visibility. Traffikora does all of these automatically.'],
      ['Which is better for a small business -- Traffikora or Hootsuite?', 'Traffikora is the better choice for small businesses because it creates the content, publishes it, and handles local SEO simultaneously. Hootsuite requires you to bring your own content and does nothing for your Google ranking.']
    ]
  },
  {
    folder: 'compare/traffikora-vs-semrush',
    title: 'Traffikora vs SEMrush: Best Local SEO Tool for Small Business | Traffikora',
    description: 'Compare Traffikora vs SEMrush for local SEO. Traffikora automates your local marketing execution while SEMrush only provides data. See which is right for your small business.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-semrush',
    faqs: [
      ['How does Traffikora compare to SEMrush?', 'SEMrush is an SEO research and analytics tool that tells you what to do. Traffikora is an automated marketing platform that does it for you. SEMrush requires significant SEO expertise to act on its data. Traffikora requires no expertise -- it runs automatically.'],
      ['Is Traffikora cheaper than SEMrush?', 'Traffikora starts at $47 per month. SEMrush starts at $117 per month for its basic plan. Traffikora also executes your local marketing automatically, while SEMrush only provides data that you still have to act on yourself.'],
      ['Can Traffikora replace SEMrush for a small business?', 'For most small businesses, yes. Traffikora automates the local SEO actions that matter most -- content publishing, Google Business Profile management, review generation, and citation building -- without requiring you to interpret keyword data or hire an SEO expert.'],
      ['Which is better for local ranking -- Traffikora or SEMrush?', 'Traffikora is better for local ranking because it takes action automatically. SEMrush shows you opportunities but you have to execute them yourself. For a busy small business owner, automated execution beats manual research every time.']
    ]
  },
  {
    folder: 'compare/traffikora-vs-mailchimp',
    title: 'Traffikora vs Mailchimp: Best Marketing Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Mailchimp for local business marketing. Traffikora automates local SEO, reviews, and AI visibility that Mailchimp cannot provide.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-mailchimp',
    faqs: [
      ['How does Traffikora compare to Mailchimp?', 'Mailchimp is an email marketing platform. Traffikora is a complete local marketing automation system that handles local SEO, Google Business Profile, social media, reviews, and AI engine optimization. They serve fundamentally different purposes.'],
      ['Does Mailchimp help with local SEO?', 'No. Mailchimp sends emails to your existing list. It does nothing for your Google ranking, Google Business Profile, review generation, or AI engine visibility. Traffikora handles all of these automatically.'],
      ['Is Traffikora or Mailchimp better for getting new customers?', 'Traffikora is built to attract new customers through search and AI engine visibility. Mailchimp is built to communicate with customers you already have. For local businesses focused on growth, Traffikora addresses the top of the funnel that Mailchimp cannot reach.'],
      ['Can I use Traffikora and Mailchimp together?', 'Yes. Traffikora attracts new local customers through search and AI engines. Mailchimp nurtures them via email once they are in your system. They complement each other well.']
    ]
  },
  {
    folder: 'compare/traffikora-vs-vendasta',
    title: 'Traffikora vs Vendasta: Best Local Marketing Platform for Small Business | Traffikora',
    description: 'Compare Traffikora vs Vendasta for local business marketing automation. See why Traffikora delivers automated local SEO and AI engine optimization at a fraction of Vendasta pricing.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-vendasta',
    faqs: [
      ['How does Traffikora compare to Vendasta?', 'Vendasta is an agency-focused platform designed for marketing agencies to resell services to local businesses. Traffikora is built for local business owners to run their own marketing automatically without an agency middleman.'],
      ['Is Traffikora cheaper than Vendasta?', 'Yes, significantly. Vendasta pricing is agency-tier and designed for resale. Traffikora starts at $47 per month directly for the business owner, eliminating the agency markup entirely.'],
      ['Does Traffikora include AI engine optimization like Vendasta?', 'Traffikora includes full AI engine optimization -- structured data, llms.txt, citation authority, and FAQ content -- that makes your business visible on ChatGPT, Perplexity, and Gemini. This is a core feature of Traffikora not available in Vendasta.'],
      ['Which is better for a local business owner -- Traffikora or Vendasta?', 'Traffikora is purpose-built for local business owners who want to run their own marketing without an agency. Vendasta is built for agencies. If you want direct control and lower cost, Traffikora is the clear choice.']
    ]
  },
  {
    folder: 'compare/traffikora-vs-yext',
    title: 'Traffikora vs Yext: Best Local SEO Platform for Small Business | Traffikora',
    description: 'Compare Traffikora vs Yext for local business visibility. Traffikora automates local SEO, reviews, and AI engine optimization that goes far beyond Yext citation management.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-yext',
    faqs: [
      ['How does Traffikora compare to Yext?', 'Yext focuses on managing your business listings and citations across directories. Traffikora does that and also automates Google Business Profile posting, review generation, social media content, blog publishing, and AI engine optimization -- a far more complete local marketing solution.'],
      ['Is Traffikora cheaper than Yext?', 'Yes. Yext pricing starts around $199 per month for its Essential plan. Traffikora starts at $47 per month and includes content automation and AI engine optimization that Yext does not offer.'],
      ['Does Yext do local SEO content?', 'No. Yext manages business listings and structured data but does not create or publish SEO content, blog posts, Google Business Profile updates, or social media content. Traffikora automates all of these in addition to citation management.'],
      ['Which is better for ranking on Google Maps -- Traffikora or Yext?', 'Traffikora is more comprehensive for Google Maps ranking because it combines citation consistency, review generation, Google Business Profile posting, and local content -- all the signals Google uses for map pack ranking. Yext handles citations only.']
    ]
  },
  {
    folder: 'compare/traffikora-vs-sprout-social',
    title: 'Traffikora vs Sprout Social: Best Social Media Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Sprout Social for local business social media. Traffikora creates content automatically and adds local SEO and review automation that Sprout Social cannot match.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-sprout-social',
    faqs: [
      ['How does Traffikora compare to Sprout Social?', 'Sprout Social is an enterprise social media management platform that requires you to create all your own content. Traffikora generates and publishes social content automatically and adds local SEO, reviews, and AI engine optimization that Sprout Social does not include.'],
      ['Is Traffikora cheaper than Sprout Social?', 'Yes, significantly. Sprout Social starts at $199 per month per user. Traffikora starts at $47 per month and includes automated content creation, local SEO, and review generation on top of social publishing.'],
      ['Does Sprout Social help with local SEO?', 'No. Sprout Social is a social media management platform only. It does not manage your Google Business Profile, generate reviews, build citations, or optimize for AI engine visibility. Traffikora does all of these automatically.'],
      ['Which is better for a local business -- Traffikora or Sprout Social?', 'Traffikora is purpose-built for local businesses. Sprout Social is built for marketing teams at larger companies managing multiple brand accounts. For a local business owner who needs results without a team, Traffikora is the clear choice.']
    ]
  },
  {
    folder: 'compare/traffikora-vs-brightlocal',
    title: 'Traffikora vs BrightLocal: Best Local SEO Tool for Small Business | Traffikora',
    description: 'Compare Traffikora vs BrightLocal for local SEO. Traffikora automates local marketing execution including content, reviews, and AI engine optimization beyond BrightLocal reporting.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-brightlocal',
    faqs: [
      ['How does Traffikora compare to BrightLocal?', 'BrightLocal is a local SEO reporting and audit tool that shows you where you stand. Traffikora is an automated execution platform that improves your ranking automatically every week without requiring you to interpret reports or take manual action.'],
      ['Is Traffikora cheaper than BrightLocal?', 'BrightLocal starts at $39 per month for reporting only. Traffikora starts at $47 per month and actively executes your local SEO -- publishing content, generating reviews, posting to Google Business Profile, and building AI engine visibility.'],
      ['Does BrightLocal publish content or generate reviews?', 'No. BrightLocal is a reporting and audit tool. It shows you local SEO data but does not create content, publish Google Business Profile posts, send review requests, or optimize for AI engine visibility. Traffikora does all of these automatically.'],
      ['Which is better for improving local rankings -- Traffikora or BrightLocal?', 'Traffikora is better for improving rankings because it takes action automatically. BrightLocal shows you what to fix -- you still have to fix it yourself. For a busy local business owner, automated execution delivers results faster.']
    ]
  },
  {
    folder: 'compare/traffikora-vs-constant-contact',
    title: 'Traffikora vs Constant Contact: Best Marketing Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Constant Contact for local business marketing. Traffikora automates local SEO, reviews, and AI visibility that Constant Contact email marketing cannot provide.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-constant-contact',
    faqs: [
      ['How does Traffikora compare to Constant Contact?', 'Constant Contact is an email marketing platform for communicating with your existing customer list. Traffikora is a local marketing automation platform that attracts new customers through search, AI engines, and reviews. They serve very different purposes.'],
      ['Does Constant Contact help with local SEO?', 'No. Constant Contact sends emails to people already in your database. It does nothing for your Google ranking, Google Business Profile, review generation, or AI engine visibility. Traffikora handles all of these automatically to bring in new customers.'],
      ['Is Traffikora or Constant Contact better for growing a local business?', 'Traffikora is purpose-built for local business growth through search visibility and reputation building. Constant Contact is best for retaining and communicating with existing customers. For attracting new local customers, Traffikora is the right tool.'],
      ['Can I use Traffikora instead of Constant Contact?', 'They serve different functions. Traffikora brings new customers in through local search and AI engines. Constant Contact nurtures existing customers via email. Many businesses use both -- Traffikora to attract, email to retain.']
    ]
  },
  {
    folder: 'compare/traffikora-vs-later',
    title: 'Traffikora vs Later: Best Social Media Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Later for local business social media. Traffikora creates and publishes content automatically and adds local SEO and reviews that Later cannot provide.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-later',
    faqs: [
      ['How does Traffikora compare to Later?', 'Later is a social media scheduling tool focused on Instagram and visual content planning. Traffikora generates and publishes social content automatically across platforms and also handles local SEO, Google Business Profile, reviews, and AI engine optimization.'],
      ['Is Traffikora cheaper than Later?', 'Later starts at $25 per month for scheduling only -- you create all the content yourself. Traffikora starts at $47 per month and generates the content automatically in addition to publishing it, plus adds local SEO and review automation.'],
      ['Does Later help with Google ranking?', 'No. Later is a social media scheduling tool only. It does nothing for your Google Business Profile, local SEO content, review generation, or AI engine visibility. Traffikora handles all of these automatically.'],
      ['Which is better for a local business -- Traffikora or Later?', 'Traffikora is more comprehensive for local businesses because it creates the content, publishes it, manages your Google Business Profile, generates reviews, and builds AI engine visibility -- all automatically. Later only schedules content you create yourself.']
    ]
  },
  {
    folder: 'compare/traffikora-vs-reputation-com',
    title: 'Traffikora vs Reputation.com: Best Reputation Management for Small Business | Traffikora',
    description: 'Compare Traffikora vs Reputation.com for local business reputation management. Traffikora delivers automated reviews, local SEO, and AI engine optimization at small business pricing.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-reputation-com',
    faqs: [
      ['How does Traffikora compare to Reputation.com?', 'Reputation.com is an enterprise reputation management platform designed for multi-location brands and large companies. Traffikora is purpose-built for small and local businesses at a fraction of the cost, with automated local SEO and AI engine optimization included.'],
      ['Is Traffikora cheaper than Reputation.com?', 'Yes, significantly. Reputation.com is enterprise-priced and designed for large brands managing hundreds of locations. Traffikora starts at $47 per month and is built specifically for the local business owner who needs results without enterprise pricing.'],
      ['Does Traffikora include everything Reputation.com offers?', 'Traffikora covers review monitoring, review generation, and reputation alerts like Reputation.com, and also includes local SEO content automation, Google Business Profile posting, and AI engine optimization that Reputation.com does not provide for small businesses.'],
      ['Which is better for a single-location small business?', 'Traffikora is built for single-location small businesses. Reputation.com is built for enterprise chains. If you own a local business and want automated reputation management plus local SEO at an affordable price, Traffikora is the right choice.']
    ]
  }
]

pages.forEach(({ folder, title, description, url, faqs }) => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([q, a]) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a }
    }))
  }

  const lines = []
  lines.push("import type { Metadata } from 'next'")
  lines.push('')
  lines.push('export const metadata: Metadata = {')
  lines.push("  title: '" + title + "',")
  lines.push("  description: '" + description + "',")
  lines.push("  alternates: { canonical: '" + url + "' },")
  lines.push('  openGraph: {')
  lines.push("    title: '" + title + "',")
  lines.push("    description: '" + description + "',")
  lines.push("    url: '" + url + "',")
  lines.push("    siteName: 'Traffikora',")
  lines.push("    type: 'website',")
  lines.push('  },')
  lines.push('}')
  lines.push('')
  lines.push('export default function Layout({ children }: { children: React.ReactNode }) {')
  lines.push('  return (')
  lines.push('    <>')
  lines.push('      <script')
  lines.push('        type="application/ld+json"')
  lines.push('        dangerouslySetInnerHTML={{')
  lines.push('          __html: JSON.stringify(' + JSON.stringify(faqSchema) + ')')
  lines.push('        }}')
  lines.push('      />')
  lines.push('      {children}')
  lines.push('    </>')
  lines.push('  )')
  lines.push('}')

  const filePath = path.join(base, folder, 'layout.tsx')
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8')
  console.log('Written: ' + folder + '/layout.tsx')
})

console.log('\nDONE - All 15 layout files written with FAQPage schema!')