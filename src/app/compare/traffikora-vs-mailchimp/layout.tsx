import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Mailchimp: Best Marketing Tool for Local Business | Traffikora',
  description: 'Compare Traffikora vs Mailchimp for local business marketing. Traffikora automates local SEO, reviews, and AI visibility that Mailchimp cannot provide.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-mailchimp' },
  openGraph: {
    title: 'Traffikora vs Mailchimp: Best Marketing Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Mailchimp for local business marketing. Traffikora automates local SEO, reviews, and AI visibility that Mailchimp cannot provide.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-mailchimp',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Traffikora compare to Mailchimp?","acceptedAnswer":{"@type":"Answer","text":"Mailchimp is an email marketing platform. Traffikora is a complete local marketing automation system that handles local SEO, Google Business Profile, social media, reviews, and AI engine optimization. They serve fundamentally different purposes."}},{"@type":"Question","name":"Does Mailchimp help with local SEO?","acceptedAnswer":{"@type":"Answer","text":"No. Mailchimp sends emails to your existing list. It does nothing for your Google ranking, Google Business Profile, review generation, or AI engine visibility. Traffikora handles all of these automatically."}},{"@type":"Question","name":"Is Traffikora or Mailchimp better for getting new customers?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is built to attract new customers through search and AI engine visibility. Mailchimp is built to communicate with customers you already have. For local businesses focused on growth, Traffikora addresses the top of the funnel that Mailchimp cannot reach."}},{"@type":"Question","name":"Can I use Traffikora and Mailchimp together?","acceptedAnswer":{"@type":"Answer","text":"Yes. Traffikora attracts new local customers through search and AI engines. Mailchimp nurtures them via email once they are in your system. They complement each other well."}}]})
        }}
      />
      {children}
    </>
  )
}