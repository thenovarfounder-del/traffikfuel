const fs = require('fs');
const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Automation for Salons & Spas | Traffikora',
  description: 'Traffikora automates social media, local SEO, and AI engine visibility for salons and spas. Get more clients on autopilot. Start your free 7-day trial.',
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
            "description": "Traffikora is an AI-powered marketing automation platform for salons and spas. Automates social media, local SEO, Google Business Profile, and AI engine optimization.",
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
fs.writeFileSync('src/app/solutions/salons/layout.tsx', content);
console.log('layout.tsx written');