const fs = require('fs');

const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Set It Once: How Traffikora\u2019s Automation Actually Works | Traffikora',
  description: 'Here is exactly how Traffikora works \u2014 from signup to fully automated marketing. Connect your accounts once and Traffikora handles social media, SEO, reviews, and AI engine optimization forever.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "Set It Once: How Traffikora\u2019s Automation Actually Works",
            "description": "A step-by-step breakdown of how Traffikora automates your marketing from day one \u2014 social media, local SEO, Google Business Profile, reviews, and AI engine optimization.",
            "url": "https://www.traffikora.com/blog/set-it-once-how-traffikora-works",
            "publisher": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
            "mainEntityOfPage": "https://www.traffikora.com/blog/set-it-once-how-traffikora-works"
          })
        }}
      />
      {children}
    </>
  )
}
`;

fs.writeFileSync('src/app/blog/set-it-once-how-traffikora-works/layout.tsx', content);
console.log('Written: src/app/blog/set-it-once-how-traffikora-works/layout.tsx');