const fs = require('fs');

const content = `// @ts-nocheck
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Automation for Plumbers | Traffikora',
  description: 'Traffikora automates marketing for plumbing businesses. Get found on Google, Yelp, and AI engines. More calls, more jobs. Start your free 7-day trial.',
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
            "description": "Traffikora is an AI-powered marketing automation platform for plumbing businesses. Automates social media, local SEO, Google Business Profile, and AI engine optimization.",
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

fs.writeFileSync('src/app/solutions/plumbers/layout.tsx', content);
console.log('Written: src/app/solutions/plumbers/layout.tsx');