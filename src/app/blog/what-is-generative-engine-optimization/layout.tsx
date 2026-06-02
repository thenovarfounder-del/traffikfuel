import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is Generative Engine Optimization (GEO)? | Traffikora',
  description: 'Generative Engine Optimization is how you get your business cited by AI search engines like ChatGPT and Perplexity. Here is what you need to know.',
  alternates: { canonical: 'https://www.traffikora.com/blog/what-is-generative-engine-optimization' },
  openGraph: {
    title: 'What Is Generative Engine Optimization (GEO)? | Traffikora',
    description: 'Generative Engine Optimization is how you get your business cited by AI search engines like ChatGPT and Perplexity. Here is what you need to know.',
    url: 'https://www.traffikora.com/blog/what-is-generative-engine-optimization',
    siteName: 'Traffikora',
    type: 'article',
  },
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
            "headline": "What Is Generative Engine Optimization (GEO)?",
            "description": "Generative Engine Optimization is how you get your business cited by AI search engines like ChatGPT and Perplexity. Here is what you need to know.",
            "url": "https://www.traffikora.com/blog/what-is-generative-engine-optimization",
            "publisher": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
            "mainEntityOfPage": "https://www.traffikora.com/blog/what-is-generative-engine-optimization"
          })
        }}
      />
      {children}
    </>
  )
}