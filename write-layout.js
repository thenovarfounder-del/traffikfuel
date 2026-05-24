const fs = require('fs');

const blogLayout = `import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Blog — Local Marketing Tips for Small Businesses | Traffikora',
  description: 'Local SEO tips, AI engine optimization guides, and Google Business Profile strategies for small business owners. Practical marketing advice that actually works.',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;

const post1Layout = `import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'What Is AI Engine Optimization? Guide for Local Businesses | Traffikora',
  description: 'AI engine optimization helps local businesses get recommended by ChatGPT, Gemini, and Perplexity. Learn what AEO is and why it matters for your business in 2026.',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;

const post2Layout = `import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: '7 Local SEO Tips for Small Businesses in 2026 | Traffikora',
  description: '7 actionable local SEO tips for small business owners in 2026. Improve your Google rankings without hiring an agency. Practical advice that actually works.',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;

const post3Layout = `import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Why Your Google Business Profile Matters More Than Your Website | Traffikora',
  description: 'Your Google Business Profile is your most valuable local marketing asset. Learn why active GBP management is the highest-ROI marketing move for local businesses.',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;

fs.writeFileSync('src/app/blog/layout.tsx', blogLayout);
fs.writeFileSync('src/app/blog/what-is-ai-engine-optimization/layout.tsx', post1Layout);
fs.writeFileSync('src/app/blog/local-seo-tips-for-small-businesses/layout.tsx', post2Layout);
fs.writeFileSync('src/app/blog/why-google-business-profile-matters/layout.tsx', post3Layout);
console.log('All 4 layout files written');