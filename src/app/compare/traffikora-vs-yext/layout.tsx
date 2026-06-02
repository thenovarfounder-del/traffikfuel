import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Yext: Best Local SEO Platform for Small Business | Traffikora',
  description: 'Compare Traffikora vs Yext for local business visibility. Traffikora automates local SEO, reviews, and AI engine optimization that goes far beyond Yext citation management.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-yext' },
  openGraph: {
    title: 'Traffikora vs Yext: Best Local SEO Platform for Small Business | Traffikora',
    description: 'Compare Traffikora vs Yext for local business visibility. Traffikora automates local SEO, reviews, and AI engine optimization that goes far beyond Yext citation management.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-yext',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Traffikora compare to Yext?","acceptedAnswer":{"@type":"Answer","text":"Yext focuses on managing your business listings and citations across directories. Traffikora does that and also automates Google Business Profile posting, review generation, social media content, blog publishing, and AI engine optimization -- a far more complete local marketing solution."}},{"@type":"Question","name":"Is Traffikora cheaper than Yext?","acceptedAnswer":{"@type":"Answer","text":"Yes. Yext pricing starts around $199 per month for its Essential plan. Traffikora starts at $47 per month and includes content automation and AI engine optimization that Yext does not offer."}},{"@type":"Question","name":"Does Yext do local SEO content?","acceptedAnswer":{"@type":"Answer","text":"No. Yext manages business listings and structured data but does not create or publish SEO content, blog posts, Google Business Profile updates, or social media content. Traffikora automates all of these in addition to citation management."}},{"@type":"Question","name":"Which is better for ranking on Google Maps -- Traffikora or Yext?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is more comprehensive for Google Maps ranking because it combines citation consistency, review generation, Google Business Profile posting, and local content -- all the signals Google uses for map pack ranking. Yext handles citations only."}}]})
        }}
      />
      {children}
    </>
  )
}