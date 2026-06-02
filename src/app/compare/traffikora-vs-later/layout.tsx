import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Later: Best Social Media Tool for Local Business | Traffikora',
  description: 'Compare Traffikora vs Later for local business social media. Traffikora creates and publishes content automatically and adds local SEO and reviews that Later cannot provide.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-later' },
  openGraph: {
    title: 'Traffikora vs Later: Best Social Media Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Later for local business social media. Traffikora creates and publishes content automatically and adds local SEO and reviews that Later cannot provide.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-later',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Traffikora compare to Later?","acceptedAnswer":{"@type":"Answer","text":"Later is a social media scheduling tool focused on Instagram and visual content planning. Traffikora generates and publishes social content automatically across platforms and also handles local SEO, Google Business Profile, reviews, and AI engine optimization."}},{"@type":"Question","name":"Is Traffikora cheaper than Later?","acceptedAnswer":{"@type":"Answer","text":"Later starts at $25 per month for scheduling only -- you create all the content yourself. Traffikora starts at $47 per month and generates the content automatically in addition to publishing it, plus adds local SEO and review automation."}},{"@type":"Question","name":"Does Later help with Google ranking?","acceptedAnswer":{"@type":"Answer","text":"No. Later is a social media scheduling tool only. It does nothing for your Google Business Profile, local SEO content, review generation, or AI engine visibility. Traffikora handles all of these automatically."}},{"@type":"Question","name":"Which is better for a local business -- Traffikora or Later?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is more comprehensive for local businesses because it creates the content, publishes it, manages your Google Business Profile, generates reviews, and builds AI engine visibility -- all automatically. Later only schedules content you create yourself."}}]})
        }}
      />
      {children}
    </>
  )
}