import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Get Found on ChatGPT and Perplexity | Traffikora',
  description: 'AI search is replacing Google for millions of searches. Here is how to get your small business found on ChatGPT, Perplexity, and other AI search engines.',
  alternates: { canonical: 'https://www.traffikora.com/blog/how-to-get-found-on-chatgpt-perplexity' },
  openGraph: {
    title: 'How to Get Found on ChatGPT and Perplexity | Traffikora',
    description: 'AI search is replacing Google for millions of searches. Here is how to get your small business found on ChatGPT, Perplexity, and other AI search engines.',
    url: 'https://www.traffikora.com/blog/how-to-get-found-on-chatgpt-perplexity',
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
            "headline": "How to Get Found on ChatGPT and Perplexity",
            "description": "AI search is replacing Google for millions of searches. Here is how to get your small business found on ChatGPT, Perplexity, and other AI search engines.",
            "url": "https://www.traffikora.com/blog/how-to-get-found-on-chatgpt-perplexity",
            "publisher": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
            "mainEntityOfPage": "https://www.traffikora.com/blog/how-to-get-found-on-chatgpt-perplexity"
          })
        }}
      />
      {children}
    </>
  )
}