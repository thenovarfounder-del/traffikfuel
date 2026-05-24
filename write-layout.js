const fs = require('fs');

const semrush = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Semrush — Automate vs Analyze | Traffikora',
  description: 'Semrush shows you what to do. Traffikora does it automatically. Compare SEO automation, content creation, and AI engine optimization. Start free trial.',
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
            "description": "Traffikora is a fully automated marketing platform — a powerful alternative to Semrush that executes SEO, content, and social automatically.",
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

const later = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Later — More Than Instagram Scheduling | Traffikora',
  description: 'Later only schedules Instagram posts. Traffikora automates SEO, AI engines, blogs, and 9+ social platforms. Same price — infinitely more power. Try free.',
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
            "description": "Traffikora is a full marketing automation platform — a powerful alternative to Later with SEO, AI engine optimization, and multi-platform social automation.",
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

const yext = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Yext — Full Marketing vs Listing Sync | Traffikora',
  description: 'Yext charges $500+/mo just to sync listings. Traffikora automates your full marketing machine for $97/mo. SEO, social, AI engines, and more. Try free.',
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
            "description": "Traffikora is a full marketing automation platform — a powerful and affordable alternative to Yext with SEO, social media, and AI engine optimization.",
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

fs.writeFileSync('src/app/compare/traffikora-vs-semrush/layout.tsx', semrush, 'utf8');
fs.writeFileSync('src/app/compare/traffikora-vs-later/layout.tsx', later, 'utf8');
fs.writeFileSync('src/app/compare/traffikora-vs-yext/layout.tsx', yext, 'utf8');
console.log('Done');