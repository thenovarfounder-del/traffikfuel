const fs = require('fs');
const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How We Use Your Data | Traffikora',
  description: 'A plain-English explanation of every permission Traffikora requests from Google, Facebook, and Instagram \u2014 and exactly what we do with your data.',
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

fs.writeFileSync('src/app/data-use/layout.tsx', content);
console.log('Written: src/app/data-use/layout.tsx');