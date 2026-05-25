const fs = require('fs');

const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is AI Engine Optimization (AEO) and Why It Matters | Traffikora',
  description: 'AI Engine Optimization (AEO) gets your business recommended by ChatGPT, Claude, Gemini, and Perplexity. Learn what AEO is and how Traffikora handles it automatically.',
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
            "headline": "What Is AI Engine Optimization (AEO) and Why It Matters for Your Business",
            "description": "AEO is the practice of optimizing your business to be recommended by AI engines like ChatGPT, Claude, and Gemini. Learn how it works and why it matters.",
            "url": "https://www.traffikora.com/blog/what-is-aeo",
            "publisher": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
            "mainEntityOfPage": "https://www.traffikora.com/blog/what-is-aeo"
          })
        }}
      />
      {children}
    </>
  )
}
`;

fs.writeFileSync('src/app/blog/what-is-aeo/layout.tsx', content);
console.log('Written: src/app/blog/what-is-aeo/layout.tsx');