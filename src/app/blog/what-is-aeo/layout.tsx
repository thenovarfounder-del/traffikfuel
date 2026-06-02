import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is AEO? Answer Engine Optimization Explained | Traffikora',
  description: 'AEO stands for Answer Engine Optimization. Learn what it is, why it matters for small businesses, and how to optimize your content for AI-powered search.',
  alternates: { canonical: 'https://www.traffikora.com/blog/what-is-aeo' },
  openGraph: {
    title: 'What Is AEO? Answer Engine Optimization Explained | Traffikora',
    description: 'AEO stands for Answer Engine Optimization. Learn what it is, why it matters for small businesses, and how to optimize your content for AI-powered search.',
    url: 'https://www.traffikora.com/blog/what-is-aeo',
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
            "headline": "What Is AEO? Answer Engine Optimization Explained",
            "description": "AEO stands for Answer Engine Optimization. Learn what it is, why it matters for small businesses, and how to optimize your content for AI-powered search.",
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