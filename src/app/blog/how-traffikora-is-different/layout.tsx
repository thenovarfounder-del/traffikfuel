import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Traffikora Is Different From Every Other Marketing Tool | Traffikora',
  description: 'Traffikora is not another dashboard. It is a fully automated marketing system built specifically for small businesses that runs 24/7 without your input.',
  alternates: { canonical: 'https://www.traffikora.com/blog/how-traffikora-is-different' },
  openGraph: {
    title: 'How Traffikora Is Different From Every Other Marketing Tool | Traffikora',
    description: 'Traffikora is not another dashboard. It is a fully automated marketing system built specifically for small businesses that runs 24/7 without your input.',
    url: 'https://www.traffikora.com/blog/how-traffikora-is-different',
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
            "headline": "How Traffikora Is Different From Every Other Marketing Tool",
            "description": "Traffikora is not another dashboard. It is a fully automated marketing system built specifically for small businesses that runs 24/7 without your input.",
            "url": "https://www.traffikora.com/blog/how-traffikora-is-different",
            "publisher": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
            "mainEntityOfPage": "https://www.traffikora.com/blog/how-traffikora-is-different"
          })
        }}
      />
      {children}
    </>
  )
}