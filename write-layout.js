const fs = require('fs');

const content = `// @ts-nocheck
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is Local SEO and Why Does It Matter? | Traffikora',
  description: 'Local SEO helps customers find your business online. Learn the 3 core pillars of local SEO and how to automate them with Traffikora.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "What Is Local SEO and Why Does It Matter for Small Businesses?",
            "publisher": {
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

fs.writeFileSync('src/app/blog/what-is-local-seo/layout.tsx', content);
console.log('Written: src/app/blog/what-is-local-seo/layout.tsx');