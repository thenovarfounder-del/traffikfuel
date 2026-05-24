const fs = require('fs');

const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Hootsuite — More Than Social Scheduling | Traffikora',
  description: 'Hootsuite only schedules posts. Traffikora automates SEO, AI engines, blog content, and social media for $97/mo. See why small businesses are switching.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traffikora",
            "url": "https://www.traffikora.com",
            "applicationCategory": "BusinessApplication",
            "description": "Traffikora is an AI-powered marketing automation platform for small businesses — a powerful alternative to Hootsuite with SEO, AI engine optimization, and full content automation.",
            "offers": {
              "@type": "Offer",
              "price": "97",
              "priceCurrency": "USD"
            },
            "operatingSystem": "Web",
            "provider": {
              "@type": "Organization",
              "name": "Traffikora",
              "url": "https://www.traffikora.com"
            }
          })
        }}
      />
      {children}
    </>
  )
}
`;

fs.writeFileSync('src/app/compare/traffikora-vs-hootsuite/layout.tsx', content, 'utf8');
console.log('Done');