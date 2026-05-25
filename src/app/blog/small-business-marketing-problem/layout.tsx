import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Small Business Marketing Problem Nobody Is Solving | Traffikora',
  description: 'Small businesses need consistent marketing but have no time or budget to do it. Traffikora is the automated solution that handles everything — social, SEO, reviews, and AI search — for $97/month.',
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
            "headline": "The Small Business Marketing Problem Nobody Is Solving",
            "description": "Small businesses need consistent marketing more than anyone but have the least time and budget to do it. Traffikora solves this with full automation starting at $97/month.",
            "url": "https://www.traffikora.com/blog/small-business-marketing-problem",
            "publisher": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
            "mainEntityOfPage": "https://www.traffikora.com/blog/small-business-marketing-problem"
          })
        }}
      />
      {children}
    </>
  )
}
