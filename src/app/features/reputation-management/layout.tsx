import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Online Reputation Management for Small Business | Traffikora',
  description: 'Protect and grow your online reputation automatically. Traffikora monitors your reviews, alerts you to threats, and builds the 5-star presence that wins local customers.',
  alternates: { canonical: 'https://www.traffikora.com/features/reputation-management' },
  openGraph: {
    title: 'Online Reputation Management for Small Business | Traffikora',
    description: 'Protect and grow your online reputation automatically. Traffikora monitors your reviews, alerts you to threats, and builds the 5-star presence that wins local customers.',
    url: 'https://www.traffikora.com/features/reputation-management',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is online reputation management for small business?","acceptedAnswer":{"@type":"Answer","text":"Online reputation management is the ongoing process of monitoring, protecting, and improving how your business appears across review platforms. For small businesses this means managing Google, Yelp, and Facebook reviews -- responding to feedback, generating positive reviews, and maintaining a rating that wins customer trust."}},{"@type":"Question","name":"Can Traffikora remove negative reviews?","acceptedAnswer":{"@type":"Answer","text":"No platform can remove legitimate negative reviews. What Traffikora does is alert you instantly so you can respond professionally, and simultaneously build your positive review volume so negative reviews become a smaller percentage of your overall rating over time."}},{"@type":"Question","name":"How quickly will I see my reputation improve?","acceptedAnswer":{"@type":"Answer","text":"Most businesses see measurable improvement in review volume within the first 30 days. Average rating improvement depends on your starting point and transaction volume, but businesses consistently see their rating trend upward within 60 to 90 days as new positive reviews accumulate."}},{"@type":"Question","name":"Does reputation management affect my Google ranking?","acceptedAnswer":{"@type":"Answer","text":"Yes, directly. Google uses your review count, average rating, and review recency as ranking signals for local search. A higher rating with more recent reviews consistently ranks above competitors with fewer or older reviews."}}]})
        }}
      />
      {children}
    </>
  )
}