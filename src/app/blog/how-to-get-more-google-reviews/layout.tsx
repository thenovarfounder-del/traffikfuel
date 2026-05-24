// @ts-nocheck
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Get More Google Reviews for Your Local Business | Traffikora',
  description: 'Learn proven strategies to get more Google reviews for your local business. More reviews means higher rankings and more customers. Traffikora automates it all.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Get More Google Reviews for Your Local Business",
            "publisher": {
              "@type": "Organization",
              "name": "Traffikora",
              "url": "https://www.traffikora.com"
            }
          })
        }}
      />
      {children}
    </>
  )
}
