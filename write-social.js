const fs = require('fs')
const path = require('path')

const base = path.join('C:', 'Users', 'randy', 'traffikfuel', 'src', 'app', 'blog')

const layouts = [
  {
    folder: 'how-ai-marketing-automation-works',
    title: 'How AI Marketing Automation Works for Small Business | Traffikora',
    description: 'Learn how AI marketing automation works and how small businesses use it to save time, rank higher, and grow faster without a marketing team.',
    url: 'https://www.traffikora.com/blog/how-ai-marketing-automation-works',
    headline: 'How AI Marketing Automation Works for Small Business'
  },
  {
    folder: 'how-to-get-found-on-chatgpt-perplexity',
    title: 'How to Get Found on ChatGPT and Perplexity | Traffikora',
    description: 'AI search is replacing Google for millions of searches. Here is how to get your small business found on ChatGPT, Perplexity, and other AI search engines.',
    url: 'https://www.traffikora.com/blog/how-to-get-found-on-chatgpt-perplexity',
    headline: 'How to Get Found on ChatGPT and Perplexity'
  },
  {
    folder: 'how-traffikora-is-different',
    title: 'How Traffikora Is Different From Every Other Marketing Tool | Traffikora',
    description: 'Traffikora is not another dashboard. It is a fully automated marketing system built specifically for small businesses that runs 24/7 without your input.',
    url: 'https://www.traffikora.com/blog/how-traffikora-is-different',
    headline: 'How Traffikora Is Different From Every Other Marketing Tool'
  },
  {
    folder: 'local-seo-vs-ai-engine-optimization',
    title: 'Local SEO vs AI Engine Optimization: What Small Businesses Need to Know | Traffikora',
    description: 'Local SEO and AI engine optimization are both essential in 2026. Learn the difference and how to win at both without a marketing agency.',
    url: 'https://www.traffikora.com/blog/local-seo-vs-ai-engine-optimization',
    headline: 'Local SEO vs AI Engine Optimization: What Small Businesses Need to Know'
  },
  {
    folder: 'marketing-automation-small-business-2026',
    title: 'Marketing Automation for Small Business in 2026 | Traffikora',
    description: 'Marketing automation is no longer just for big companies. Here is how small businesses are using automation in 2026 to compete and win locally.',
    url: 'https://www.traffikora.com/blog/marketing-automation-small-business-2026',
    headline: 'Marketing Automation for Small Business in 2026'
  },
  {
    folder: 'what-is-aeo',
    title: 'What Is AEO? Answer Engine Optimization Explained | Traffikora',
    description: 'AEO stands for Answer Engine Optimization. Learn what it is, why it matters for small businesses, and how to optimize your content for AI-powered search.',
    url: 'https://www.traffikora.com/blog/what-is-aeo',
    headline: 'What Is AEO? Answer Engine Optimization Explained'
  },
  {
    folder: 'what-is-generative-engine-optimization',
    title: 'What Is Generative Engine Optimization (GEO)? | Traffikora',
    description: 'Generative Engine Optimization is how you get your business cited by AI search engines like ChatGPT and Perplexity. Here is what you need to know.',
    url: 'https://www.traffikora.com/blog/what-is-generative-engine-optimization',
    headline: 'What Is Generative Engine Optimization (GEO)?'
  },
  {
    folder: 'why-local-seo-matters',
    title: 'Why Local SEO Matters for Every Small Business in 2026 | Traffikora',
    description: 'Local SEO is the highest-ROI marketing move a small business can make. Here is why it matters and how to dominate your local market in 2026.',
    url: 'https://www.traffikora.com/blog/why-local-seo-matters',
    headline: 'Why Local SEO Matters for Every Small Business in 2026'
  }
]

layouts.forEach(({ folder, title, description, url, headline }) => {
  const lines = []
  lines.push("import type { Metadata } from 'next'")
  lines.push("")
  lines.push("export const metadata: Metadata = {")
  lines.push("  title: '" + title + "',")
  lines.push("  description: '" + description + "',")
  lines.push("  alternates: { canonical: '" + url + "' },")
  lines.push("  openGraph: {")
  lines.push("    title: '" + title + "',")
  lines.push("    description: '" + description + "',")
  lines.push("    url: '" + url + "',")
  lines.push("    siteName: 'Traffikora',")
  lines.push("    type: 'article',")
  lines.push("  },")
  lines.push("}")
  lines.push("")
  lines.push("export default function Layout({ children }: { children: React.ReactNode }) {")
  lines.push("  return (")
  lines.push("    <>")
  lines.push("      <script")
  lines.push("        type=\"application/ld+json\"")
  lines.push("        dangerouslySetInnerHTML={{")
  lines.push("          __html: JSON.stringify({")
  lines.push("            \"@context\": \"https://schema.org\",")
  lines.push("            \"@type\": \"BlogPosting\",")
  lines.push("            \"headline\": \"" + headline + "\",")
  lines.push("            \"description\": \"" + description + "\",")
  lines.push("            \"url\": \"" + url + "\",")
  lines.push("            \"publisher\": { \"@type\": \"Organization\", \"name\": \"Traffikora\", \"url\": \"https://www.traffikora.com\" },")
  lines.push("            \"mainEntityOfPage\": \"" + url + "\"")
  lines.push("          })")
  lines.push("        }}")
  lines.push("      />")
  lines.push("      {children}")
  lines.push("    </>")
  lines.push("  )")
  lines.push("}")

  const content = lines.join('\n')
  const filePath = path.join(base, folder, 'layout.tsx')
  fs.writeFileSync(filePath, content, 'utf8')
  console.log('Written: ' + folder + '/layout.tsx')
})

console.log('\nDONE - All 8 layout files written!')