import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Local SEO vs AI Engine Optimization: What Small Businesses Need to Know | Traffikora',
  description: 'Local SEO and AI engine optimization are both essential in 2026. Learn the difference and how to win at both without a marketing agency.',
  alternates: { canonical: 'https://www.traffikora.com/blog/local-seo-vs-ai-engine-optimization' },
  openGraph: {
    title: 'Local SEO vs AI Engine Optimization: What Small Businesses Need to Know | Traffikora',
    description: 'Local SEO and AI engine optimization are both essential in 2026. Learn the difference and how to win at both without a marketing agency.',
    url: 'https://www.traffikora.com/blog/local-seo-vs-ai-engine-optimization',
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
            "headline": "Local SEO vs AI Engine Optimization: What Small Businesses Need to Know",
            "description": "Local SEO and AI engine optimization are both essential in 2026. Learn the difference and how to win at both without a marketing agency.",
            "url": "https://www.traffikora.com/blog/local-seo-vs-ai-engine-optimization",
            "publisher": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
            "mainEntityOfPage": "https://www.traffikora.com/blog/local-seo-vs-ai-engine-optimization"
          })
        }}
      />
      {children}
    </>
  )
}