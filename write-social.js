const fs = require('fs')
const path = require('path')

const base = 'C:\\Users\\randy\\traffikfuel\\src\\app'

const comparePages = [
  { folder: 'compare/traffikora-vs-birdeye', title: 'Traffikora vs Birdeye: Best Reputation Management for Small Business | Traffikora', description: 'Compare Traffikora vs Birdeye for local business reputation management. See why small businesses choose Traffikora for automated reviews, local SEO, and AI engine optimization.', url: 'https://www.traffikora.com/compare/traffikora-vs-birdeye' },
  { folder: 'compare/traffikora-vs-brightlocal', title: 'Traffikora vs BrightLocal: Best Local SEO Tool for Small Business | Traffikora', description: 'Compare Traffikora vs BrightLocal for local SEO. Traffikora automates local marketing execution including content, reviews, and AI engine optimization beyond BrightLocal reporting.', url: 'https://www.traffikora.com/compare/traffikora-vs-brightlocal' },
  { folder: 'compare/traffikora-vs-constant-contact', title: 'Traffikora vs Constant Contact: Best Marketing Tool for Local Business | Traffikora', description: 'Compare Traffikora vs Constant Contact for local business marketing. Traffikora automates local SEO, reviews, and AI visibility that Constant Contact email marketing cannot provide.', url: 'https://www.traffikora.com/compare/traffikora-vs-constant-contact' },
  { folder: 'compare/traffikora-vs-hootsuite', title: 'Traffikora vs Hootsuite: Best Social Media Tool for Local Business | Traffikora', description: 'Compare Traffikora vs Hootsuite for local business social media. Traffikora automates content creation and publishing plus local SEO and reviews that Hootsuite cannot do.', url: 'https://www.traffikora.com/compare/traffikora-vs-hootsuite' },
  { folder: 'compare/traffikora-vs-hubspot', title: 'Traffikora vs HubSpot: Best Marketing Automation for Small Business | Traffikora', description: 'Compare Traffikora vs HubSpot for small business marketing. Traffikora delivers automated local SEO, reviews, and AI engine optimization at a fraction of HubSpot pricing.', url: 'https://www.traffikora.com/compare/traffikora-vs-hubspot' },
  { folder: 'compare/traffikora-vs-later', title: 'Traffikora vs Later: Best Social Media Tool for Local Business | Traffikora', description: 'Compare Traffikora vs Later for local business social media. Traffikora creates and publishes content automatically and adds local SEO and reviews that Later cannot provide.', url: 'https://www.traffikora.com/compare/traffikora-vs-later' },
  { folder: 'compare/traffikora-vs-mailchimp', title: 'Traffikora vs Mailchimp: Best Marketing Tool for Local Business | Traffikora', description: 'Compare Traffikora vs Mailchimp for local business marketing. Traffikora automates local SEO, reviews, and AI visibility that Mailchimp cannot provide.', url: 'https://www.traffikora.com/compare/traffikora-vs-mailchimp' },
  { folder: 'compare/traffikora-vs-reputation-com', title: 'Traffikora vs Reputation.com: Best Reputation Management for Small Business | Traffikora', description: 'Compare Traffikora vs Reputation.com for local business reputation management. Traffikora delivers automated reviews, local SEO, and AI engine optimization at small business pricing.', url: 'https://www.traffikora.com/compare/traffikora-vs-reputation-com' },
  { folder: 'compare/traffikora-vs-semrush', title: 'Traffikora vs SEMrush: Best Local SEO Tool for Small Business | Traffikora', description: 'Compare Traffikora vs SEMrush for local SEO. Traffikora automates your local marketing execution while SEMrush only provides data.', url: 'https://www.traffikora.com/compare/traffikora-vs-semrush' },
  { folder: 'compare/traffikora-vs-sprout-social', title: 'Traffikora vs Sprout Social: Best Social Media Tool for Local Business | Traffikora', description: 'Compare Traffikora vs Sprout Social for local business social media. Traffikora creates content automatically and adds local SEO and review automation that Sprout Social cannot match.', url: 'https://www.traffikora.com/compare/traffikora-vs-sprout-social' },
  { folder: 'compare/traffikora-vs-vendasta', title: 'Traffikora vs Vendasta: Best Local Marketing Platform for Small Business | Traffikora', description: 'Compare Traffikora vs Vendasta for local business marketing automation. Traffikora delivers automated local SEO and AI engine optimization at a fraction of Vendasta pricing.', url: 'https://www.traffikora.com/compare/traffikora-vs-vendasta' },
  { folder: 'compare/traffikora-vs-yext', title: 'Traffikora vs Yext: Best Local SEO Platform for Small Business | Traffikora', description: 'Compare Traffikora vs Yext for local business visibility. Traffikora automates local SEO, reviews, and AI engine optimization that goes far beyond Yext citation management.', url: 'https://www.traffikora.com/compare/traffikora-vs-yext' }
]

comparePages.forEach(({ folder, title, description, url }) => {
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
  lines.push('  return <>{children}</>')
  lines.push('}')

  const filePath = path.join(base, folder, 'layout.tsx')
  fs.writeFileSync(filePath, lines.join('\n'), 'utf8')
  console.log('Written: ' + folder + '/layout.tsx')
})

console.log('\nDONE - All 12 compare layouts cleaned -- no duplicate schema!')