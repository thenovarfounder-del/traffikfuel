const fs = require('fs');
const layout = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Automation for Small Businesses | Traffikora',
  description: 'Traffikora automates social media, local SEO, Google Business Profile, and AI engine optimization for small businesses. Set it once, market forever.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;
fs.writeFileSync('src/app/solutions/small-businesses/layout.tsx', layout);
console.log('layout done');