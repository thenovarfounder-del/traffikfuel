const fs = require('fs');
const path = require('path');

const base = 'C:\\Users\\randy\\traffikfuel\\src\\app';

const comparePages = [
  { slug: 'traffikora-vs-birdeye', title: 'Traffikora vs Birdeye | Traffikora', description: 'Compare Traffikora vs Birdeye for local business marketing automation.', url: 'https://www.traffikora.com/compare/traffikora-vs-birdeye' },
  { slug: 'traffikora-vs-brightlocal', title: 'Traffikora vs BrightLocal | Traffikora', description: 'Compare Traffikora vs BrightLocal for local SEO and marketing automation.', url: 'https://www.traffikora.com/compare/traffikora-vs-brightlocal' },
  { slug: 'traffikora-vs-constant-contact', title: 'Traffikora vs Constant Contact | Traffikora', description: 'Compare Traffikora vs Constant Contact for small business marketing automation.', url: 'https://www.traffikora.com/compare/traffikora-vs-constant-contact' },
  { slug: 'traffikora-vs-hootsuite', title: 'Traffikora vs Hootsuite | Traffikora', description: 'Compare Traffikora vs Hootsuite for social media and marketing automation.', url: 'https://www.traffikora.com/compare/traffikora-vs-hootsuite' },
  { slug: 'traffikora-vs-hubspot', title: 'Traffikora vs HubSpot | Traffikora', description: 'Compare Traffikora vs HubSpot for local small business marketing automation.', url: 'https://www.traffikora.com/compare/traffikora-vs-hubspot' },
  { slug: 'traffikora-vs-later', title: 'Traffikora vs Later | Traffikora', description: 'Compare Traffikora vs Later for social media and content marketing automation.', url: 'https://www.traffikora.com/compare/traffikora-vs-later' },
  { slug: 'traffikora-vs-mailchimp', title: 'Traffikora vs Mailchimp | Traffikora', description: 'Compare Traffikora vs Mailchimp for small business marketing automation.', url: 'https://www.traffikora.com/compare/traffikora-vs-mailchimp' },
  { slug: 'traffikora-vs-reputation-com', title: 'Traffikora vs Reputation.com | Traffikora', description: 'Compare Traffikora vs Reputation.com for local business marketing automation.', url: 'https://www.traffikora.com/compare/traffikora-vs-reputation-com' },
  { slug: 'traffikora-vs-semrush', title: 'Traffikora vs Semrush | Traffikora', description: 'Compare Traffikora vs Semrush for local SEO and content marketing.', url: 'https://www.traffikora.com/compare/traffikora-vs-semrush' },
  { slug: 'traffikora-vs-sprout-social', title: 'Traffikora vs Sprout Social | Traffikora', description: 'Compare Traffikora vs Sprout Social for social media marketing automation.', url: 'https://www.traffikora.com/compare/traffikora-vs-sprout-social' },
  { slug: 'traffikora-vs-vendasta', title: 'Traffikora vs Vendasta | Traffikora', description: 'Compare Traffikora vs Vendasta for local business marketing automation.', url: 'https://www.traffikora.com/compare/traffikora-vs-vendasta' },
  { slug: 'traffikora-vs-yext', title: 'Traffikora vs Yext | Traffikora', description: 'Compare Traffikora vs Yext for local SEO and business listings automation.', url: 'https://www.traffikora.com/compare/traffikora-vs-yext' },
];

const vsPages = [
  { slug: 'hubspot', title: 'Traffikora vs HubSpot for Small Business | Traffikora', description: 'Traffikora vs HubSpot for local small business marketing. Starts at $47/month.', url: 'https://www.traffikora.com/vs/hubspot' },
  { slug: 'hootsuite', title: 'Traffikora vs Hootsuite | Traffikora', description: 'Traffikora vs Hootsuite for social media and local business marketing automation.', url: 'https://www.traffikora.com/vs/hootsuite' },
  { slug: 'buffer', title: 'Traffikora vs Buffer | Traffikora', description: 'Traffikora vs Buffer for social media and local business marketing automation.', url: 'https://www.traffikora.com/vs/buffer' },
  { slug: 'later', title: 'Traffikora vs Later | Traffikora', description: 'Traffikora vs Later for social media scheduling and local business marketing.', url: 'https://www.traffikora.com/vs/later' },
];

function buildCleanLayout(title, description, url) {
  return `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '${title}',
  description: '${description}',
  alternates: { canonical: '${url}' },
  openGraph: {
    title: '${title}',
    description: '${description}',
    url: '${url}',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;
}

comparePages.forEach(({ slug, title, description, url }) => {
  const filePath = path.join(base, 'compare', slug, 'layout.tsx');
  fs.writeFileSync(filePath, buildCleanLayout(title, description, url), 'utf8');
  console.log('Clean layout written:', slug);
});

vsPages.forEach(({ slug, title, description, url }) => {
  const dir = path.join(base, 'vs', slug);
  if (fs.existsSync(dir)) {
    fs.writeFileSync(path.join(dir, 'layout.tsx'), buildCleanLayout(title, description, url), 'utf8');
    console.log('Clean layout written: vs/', slug);
  }
});

console.log('\nDONE — All compare and vs layouts clean. No FAQPage schema. No duplicates.');