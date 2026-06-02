import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automated Blog Content for Local Business | Traffikora',
  description: 'Traffikora automatically writes and publishes SEO-optimized blog posts for your local business every week. More content, more ranking, zero effort.',
  alternates: { canonical: 'https://www.traffikora.com/features/blog-automation' },
  openGraph: {
    title: 'Automated Blog Content for Local Business | Traffikora',
    description: 'Traffikora automatically writes and publishes SEO-optimized blog posts for your local business every week. More content, more ranking, zero effort.',
    url: 'https://www.traffikora.com/features/blog-automation',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is automated blog content for local business?","acceptedAnswer":{"@type":"Answer","text":"Automated blog content is SEO-optimized articles written and published to your website automatically on a weekly schedule. Traffikora generates blog posts targeting your local keywords so your website consistently ranks for the searches your customers are making."}},{"@type":"Question","name":"How does Traffikora write blog content for my business?","acceptedAnswer":{"@type":"Answer","text":"Traffikora uses your business information, location, and industry to generate relevant, SEO-optimized blog posts automatically. Every post targets local keywords, includes proper headings, and is structured to rank in Google search results."}},{"@type":"Question","name":"How often does Traffikora publish blog posts?","acceptedAnswer":{"@type":"Answer","text":"Traffikora publishes new blog content on a weekly schedule. Consistent weekly publishing is one of the strongest signals Google uses to determine how authoritative and active a local business website is."}},{"@type":"Question","name":"Will the blog content rank on Google?","acceptedAnswer":{"@type":"Answer","text":"Every blog post Traffikora generates is written specifically for local search ranking. Posts target keywords your potential customers are searching for, include proper SEO structure, and build topical authority in your market over time."}}]})
        }}
      />
      {children}
    </>
  )
}