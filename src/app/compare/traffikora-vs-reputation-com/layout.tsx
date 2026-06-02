import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Reputation.com: Best Reputation Management for Small Business | Traffikora',
  description: 'Compare Traffikora vs Reputation.com for local business reputation management. Traffikora delivers automated reviews, local SEO, and AI engine optimization at small business pricing.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-reputation-com' },
  openGraph: {
    title: 'Traffikora vs Reputation.com: Best Reputation Management for Small Business | Traffikora',
    description: 'Compare Traffikora vs Reputation.com for local business reputation management. Traffikora delivers automated reviews, local SEO, and AI engine optimization at small business pricing.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-reputation-com',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Traffikora compare to Reputation.com?","acceptedAnswer":{"@type":"Answer","text":"Reputation.com is an enterprise reputation management platform designed for multi-location brands and large companies. Traffikora is purpose-built for small and local businesses at a fraction of the cost, with automated local SEO and AI engine optimization included."}},{"@type":"Question","name":"Is Traffikora cheaper than Reputation.com?","acceptedAnswer":{"@type":"Answer","text":"Yes, significantly. Reputation.com is enterprise-priced and designed for large brands managing hundreds of locations. Traffikora starts at $47 per month and is built specifically for the local business owner who needs results without enterprise pricing."}},{"@type":"Question","name":"Does Traffikora include everything Reputation.com offers?","acceptedAnswer":{"@type":"Answer","text":"Traffikora covers review monitoring, review generation, and reputation alerts like Reputation.com, and also includes local SEO content automation, Google Business Profile posting, and AI engine optimization that Reputation.com does not provide for small businesses."}},{"@type":"Question","name":"Which is better for a single-location small business?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is built for single-location small businesses. Reputation.com is built for enterprise chains. If you own a local business and want automated reputation management plus local SEO at an affordable price, Traffikora is the right choice."}}]})
        }}
      />
      {children}
    </>
  )
}