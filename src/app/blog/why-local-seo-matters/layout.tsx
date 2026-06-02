import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Local SEO Matters for Every Small Business in 2026 | Traffikora',
  description: 'Local SEO is the highest-ROI marketing move a small business can make. Here is why it matters and how to dominate your local market in 2026.',
  alternates: { canonical: 'https://www.traffikora.com/blog/why-local-seo-matters' },
  openGraph: {
    title: 'Why Local SEO Matters for Every Small Business in 2026 | Traffikora',
    description: 'Local SEO is the highest-ROI marketing move a small business can make. Here is why it matters and how to dominate your local market in 2026.',
    url: 'https://www.traffikora.com/blog/why-local-seo-matters',
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
            "headline": "Why Local SEO Matters for Every Small Business in 2026",
            "description": "Local SEO is the highest-ROI marketing move a small business can make. Here is why it matters and how to dominate your local market in 2026.",
            "url": "https://www.traffikora.com/blog/why-local-seo-matters",
            "publisher": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
            "mainEntityOfPage": "https://www.traffikora.com/blog/why-local-seo-matters"
          })
        }}
      />
      {children}
    </>
  )
}