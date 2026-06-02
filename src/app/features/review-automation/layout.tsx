import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automated Review Generation Software for Small Business | Traffikora',
  description: 'Get more Google reviews automatically. Traffikora sends review requests after every job, monitors your reputation, and helps local businesses build 5-star authority on autopilot.',
  alternates: { canonical: 'https://www.traffikora.com/features/review-automation' },
  openGraph: {
    title: 'Automated Review Generation Software for Small Business | Traffikora',
    description: 'Get more Google reviews automatically. Traffikora sends review requests after every job, monitors your reputation, and helps local businesses build 5-star authority on autopilot.',
    url: 'https://www.traffikora.com/features/review-automation',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does automated review generation work?","acceptedAnswer":{"@type":"Answer","text":"Traffikora connects to your customer data and automatically sends a review request via email or SMS after every completed job or purchase. The message includes a direct link to your Google Business Profile so customers can leave a review in seconds."}},{"@type":"Question","name":"Is it against Google policy to ask customers for reviews?","acceptedAnswer":{"@type":"Answer","text":"No. Google explicitly allows and encourages businesses to ask customers for honest reviews. What Google prohibits is incentivizing reviews with discounts or payment, and posting fake reviews. Traffikora sends genuine requests to real customers -- fully compliant with Google policy."}},{"@type":"Question","name":"How many more reviews will I get?","acceptedAnswer":{"@type":"Answer","text":"Most businesses using automated review requests see a 3x to 5x increase in monthly review volume within the first 60 days. The consistent and timely nature of automated requests significantly outperforms manual asking."}},{"@type":"Question","name":"How does review count affect my Google ranking?","acceptedAnswer":{"@type":"Answer","text":"Google uses review quantity, recency, and average rating as direct signals in its local ranking algorithm. Businesses with more recent positive reviews consistently rank higher in the local map pack."}}]})
        }}
      />
      {children}
    </>
  )
}