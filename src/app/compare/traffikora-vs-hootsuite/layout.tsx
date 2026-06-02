import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Hootsuite: Best Social Media Tool for Local Business | Traffikora',
  description: 'Compare Traffikora vs Hootsuite for local business social media. Traffikora automates content creation and publishing plus local SEO and reviews that Hootsuite cannot do.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-hootsuite' },
  openGraph: {
    title: 'Traffikora vs Hootsuite: Best Social Media Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Hootsuite for local business social media. Traffikora automates content creation and publishing plus local SEO and reviews that Hootsuite cannot do.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-hootsuite',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Traffikora compare to Hootsuite?","acceptedAnswer":{"@type":"Answer","text":"Hootsuite is a social media scheduling tool that requires you to create your own content. Traffikora generates and publishes social content automatically and also handles local SEO, Google Business Profile, reviews, and AI engine optimization -- a complete local marketing system."}},{"@type":"Question","name":"Is Traffikora cheaper than Hootsuite?","acceptedAnswer":{"@type":"Answer","text":"Traffikora starts at $47 per month and includes content creation plus local SEO. Hootsuite Professional starts at $99 per month for scheduling only -- you still have to create all the content yourself."}},{"@type":"Question","name":"Does Hootsuite do local SEO?","acceptedAnswer":{"@type":"Answer","text":"No. Hootsuite is a social media scheduling platform only. It does not manage your Google Business Profile, generate review requests, build local citations, or optimize for AI engine visibility. Traffikora does all of these automatically."}},{"@type":"Question","name":"Which is better for a small business -- Traffikora or Hootsuite?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is the better choice for small businesses because it creates the content, publishes it, and handles local SEO simultaneously. Hootsuite requires you to bring your own content and does nothing for your Google ranking."}}]})
        }}
      />
      {children}
    </>
  )
}