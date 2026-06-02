import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs HubSpot: Best Marketing Automation for Small Business | Traffikora',
  description: 'Compare Traffikora vs HubSpot for small business marketing. Traffikora delivers automated local SEO, reviews, and AI engine optimization at a fraction of HubSpot pricing.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-hubspot' },
  openGraph: {
    title: 'Traffikora vs HubSpot: Best Marketing Automation for Small Business | Traffikora',
    description: 'Compare Traffikora vs HubSpot for small business marketing. Traffikora delivers automated local SEO, reviews, and AI engine optimization at a fraction of HubSpot pricing.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-hubspot',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Traffikora compare to HubSpot?","acceptedAnswer":{"@type":"Answer","text":"HubSpot is a complex CRM and marketing platform built for sales teams at mid-size and enterprise companies. Traffikora is built specifically for local businesses and automates local SEO, reviews, Google Business Profile, and AI engine optimization -- things HubSpot does not do."}},{"@type":"Question","name":"Is Traffikora cheaper than HubSpot?","acceptedAnswer":{"@type":"Answer","text":"Yes, significantly. HubSpot Marketing Hub starts at $800 per month for full marketing automation. Traffikora starts at $47 per month and includes automated local marketing that HubSpot does not offer at any price."}},{"@type":"Question","name":"Does Traffikora replace HubSpot?","acceptedAnswer":{"@type":"Answer","text":"For local businesses, yes. Traffikora handles everything a local business needs -- content, SEO, reviews, social media, and AI engine visibility -- without the complexity or cost of HubSpot, which is designed for enterprise sales pipelines."}},{"@type":"Question","name":"Which is better for local business -- Traffikora or HubSpot?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is built for local businesses. HubSpot is built for B2B sales teams. If your goal is ranking higher on Google Maps, getting more reviews, and being found on AI search engines, Traffikora is the purpose-built solution."}}]})
        }}
      />
      {children}
    </>
  )
}