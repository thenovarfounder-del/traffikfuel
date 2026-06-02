import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Sprout Social: Best Social Media Tool for Local Business | Traffikora',
  description: 'Compare Traffikora vs Sprout Social for local business social media. Traffikora creates content automatically and adds local SEO and review automation that Sprout Social cannot match.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-sprout-social' },
  openGraph: {
    title: 'Traffikora vs Sprout Social: Best Social Media Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Sprout Social for local business social media. Traffikora creates content automatically and adds local SEO and review automation that Sprout Social cannot match.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-sprout-social',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Traffikora compare to Sprout Social?","acceptedAnswer":{"@type":"Answer","text":"Sprout Social is an enterprise social media management platform that requires you to create all your own content. Traffikora generates and publishes social content automatically and adds local SEO, reviews, and AI engine optimization that Sprout Social does not include."}},{"@type":"Question","name":"Is Traffikora cheaper than Sprout Social?","acceptedAnswer":{"@type":"Answer","text":"Yes, significantly. Sprout Social starts at $199 per month per user. Traffikora starts at $47 per month and includes automated content creation, local SEO, and review generation on top of social publishing."}},{"@type":"Question","name":"Does Sprout Social help with local SEO?","acceptedAnswer":{"@type":"Answer","text":"No. Sprout Social is a social media management platform only. It does not manage your Google Business Profile, generate reviews, build citations, or optimize for AI engine visibility. Traffikora does all of these automatically."}},{"@type":"Question","name":"Which is better for a local business -- Traffikora or Sprout Social?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is purpose-built for local businesses. Sprout Social is built for marketing teams at larger companies managing multiple brand accounts. For a local business owner who needs results without a team, Traffikora is the clear choice."}}]})
        }}
      />
      {children}
    </>
  )
}