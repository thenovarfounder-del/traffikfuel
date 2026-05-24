const fs = require('fs');

const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why We Optimize for AI Engines, Not Just Google | Traffikora',
  description: 'Google is no longer the only search engine that matters. Learn why Traffikora optimizes your business for ChatGPT, Claude, Gemini, Perplexity, and every major AI engine.',
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
            "headline": "Why We Optimize for AI Engines, Not Just Google",
            "description": "Traffikora is the only marketing platform built to optimize your business for Google AND every major AI engine including ChatGPT, Claude, Gemini, and Perplexity.",
            "url": "https://www.traffikora.com/blog/why-ai-engine-optimization",
            "publisher": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
            "mainEntityOfPage": "https://www.traffikora.com/blog/why-ai-engine-optimization"
          })
        }}
      />
      {children}
    </>
  )
}
`;

fs.writeFileSync('src/app/blog/why-ai-engine-optimization/layout.tsx', content);
console.log('Written: src/app/blog/why-ai-engine-optimization/layout.tsx');