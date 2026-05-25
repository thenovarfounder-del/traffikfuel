const fs = require('fs');
const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Reputation.com: Which Is Better for Small Businesses? | Traffikora',
  description: 'Compare Traffikora vs Reputation.com. Get enterprise-level marketing automation at a small business price with AI search optimization included.',
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
fs.writeFileSync('src/app/compare/traffikora-vs-reputation-com/layout.tsx', content);
console.log('Written: src/app/compare/traffikora-vs-reputation-com/layout.tsx');