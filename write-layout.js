const fs = require('fs');

const restaurants = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Restaurant Marketing Automation — Fill More Tables | Traffikora',
  description: 'Traffikora automates Google SEO, TikTok, Instagram, and AI engine optimization for restaurants. Get more diners without lifting a finger. Start free trial.',
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
            "description": "Traffikora automates marketing for restaurants — Google SEO, social media, AI engine optimization, and Google Business Profile.",
            "offers": { "@type": "Offer", "price": "97", "priceCurrency": "USD" },
            "operatingSystem": "Web",
            "provider": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" }
          })
        }}
      />
      {children}
    </>
  )
}
`;

const smallBiz = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Automation for Small Businesses | Traffikora',
  description: 'Traffikora gives small businesses Fortune 500 marketing power for $97/mo. Automate Google SEO, social media, and AI engines. Start your free trial today.',
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
            "description": "Traffikora is an AI-powered marketing automation platform built for small businesses. Automate SEO, social media, and AI engine optimization.",
            "offers": { "@type": "Offer", "price": "97", "priceCurrency": "USD" },
            "operatingSystem": "Web",
            "provider": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" }
          })
        }}
      />
      {children}
    </>
  )
}
`;

const agencies = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Automation for Agencies — Scale Without Hiring | Traffikora',
  description: 'Traffikora helps marketing agencies manage 10+ clients with white-label reports, multi-client dashboard, and full automation. Scale revenue without scaling headcount.',
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
            "description": "Traffikora helps marketing agencies scale with white-label reports, multi-client dashboards, and full marketing automation for every client.",
            "offers": { "@type": "Offer", "price": "797", "priceCurrency": "USD" },
            "operatingSystem": "Web",
            "provider": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" }
          })
        }}
      />
      {children}
    </>
  )
}
`;

fs.writeFileSync('src/app/solutions/restaurants/layout.tsx', restaurants, 'utf8');
fs.writeFileSync('src/app/solutions/small-businesses/layout.tsx', smallBiz, 'utf8');
fs.writeFileSync('src/app/solutions/marketing-agencies/layout.tsx', agencies, 'utf8');
console.log('Done');