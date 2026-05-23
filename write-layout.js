const fs = require('fs');

const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora — AI-Powered Marketing Automation for Small Businesses',
  description: 'Traffikora automates social media, local SEO, Google Business Profile, and AI engine optimization for small businesses. Set it once. It markets forever. Free 7-day trial.',
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
            "description": "Traffikora is an AI-powered marketing automation platform for small businesses. Set it once and it markets forever — automating social media, local SEO, Google Business Profile, and AI engine optimization across ChatGPT, Perplexity, Gemini, Claude, Copilot, and Google AI Overviews.",
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

fs.writeFileSync('src/app/layout.tsx', content, 'utf8');
console.log('Done: root layout.tsx written.');