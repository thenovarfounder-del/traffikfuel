import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Vendasta: Best Local Marketing Platform for Small Business | Traffikora',
  description: 'Compare Traffikora vs Vendasta for local business marketing automation. See why Traffikora delivers automated local SEO and AI engine optimization at a fraction of Vendasta pricing.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-vendasta' },
  openGraph: {
    title: 'Traffikora vs Vendasta: Best Local Marketing Platform for Small Business | Traffikora',
    description: 'Compare Traffikora vs Vendasta for local business marketing automation. See why Traffikora delivers automated local SEO and AI engine optimization at a fraction of Vendasta pricing.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-vendasta',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Traffikora compare to Vendasta?","acceptedAnswer":{"@type":"Answer","text":"Vendasta is an agency-focused platform designed for marketing agencies to resell services to local businesses. Traffikora is built for local business owners to run their own marketing automatically without an agency middleman."}},{"@type":"Question","name":"Is Traffikora cheaper than Vendasta?","acceptedAnswer":{"@type":"Answer","text":"Yes, significantly. Vendasta pricing is agency-tier and designed for resale. Traffikora starts at $47 per month directly for the business owner, eliminating the agency markup entirely."}},{"@type":"Question","name":"Does Traffikora include AI engine optimization like Vendasta?","acceptedAnswer":{"@type":"Answer","text":"Traffikora includes full AI engine optimization -- structured data, llms.txt, citation authority, and FAQ content -- that makes your business visible on ChatGPT, Perplexity, and Gemini. This is a core feature of Traffikora not available in Vendasta."}},{"@type":"Question","name":"Which is better for a local business owner -- Traffikora or Vendasta?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is purpose-built for local business owners who want to run their own marketing without an agency. Vendasta is built for agencies. If you want direct control and lower cost, Traffikora is the clear choice."}}]})
        }}
      />
      {children}
    </>
  )
}