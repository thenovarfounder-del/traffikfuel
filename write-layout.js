const fs = require('fs');
const layout = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Marketing Automation | Traffikora',
  description: 'Traffikora automates your entire marketing strategy across social media, local SEO, Google Business Profile, and AI engines. Set it once, market forever.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;
fs.writeFileSync('src/app/features/ai-marketing-automation/layout.tsx', layout);
console.log('layout done');