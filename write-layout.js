const fs = require('fs');
const layout = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Automation for Agencies | Traffikora',
  description: 'Traffikora helps marketing agencies scale client results with automated social media, local SEO, Google Business Profile, and AI engine optimization.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;
fs.writeFileSync('src/app/solutions/marketing-agencies/layout.tsx', layout);
console.log('layout done');