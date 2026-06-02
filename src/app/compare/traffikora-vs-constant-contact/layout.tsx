import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Constant Contact: Best Marketing Tool for Local Business | Traffikora',
  description: 'Compare Traffikora vs Constant Contact for local business marketing. Traffikora automates local SEO, reviews, and AI visibility that Constant Contact email marketing cannot provide.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-constant-contact' },
  openGraph: {
    title: 'Traffikora vs Constant Contact: Best Marketing Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Constant Contact for local business marketing. Traffikora automates local SEO, reviews, and AI visibility that Constant Contact email marketing cannot provide.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-constant-contact',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Traffikora compare to Constant Contact?","acceptedAnswer":{"@type":"Answer","text":"Constant Contact is an email marketing platform for communicating with your existing customer list. Traffikora is a local marketing automation platform that attracts new customers through search, AI engines, and reviews. They serve very different purposes."}},{"@type":"Question","name":"Does Constant Contact help with local SEO?","acceptedAnswer":{"@type":"Answer","text":"No. Constant Contact sends emails to people already in your database. It does nothing for your Google ranking, Google Business Profile, review generation, or AI engine visibility. Traffikora handles all of these automatically to bring in new customers."}},{"@type":"Question","name":"Is Traffikora or Constant Contact better for growing a local business?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is purpose-built for local business growth through search visibility and reputation building. Constant Contact is best for retaining and communicating with existing customers. For attracting new local customers, Traffikora is the right tool."}},{"@type":"Question","name":"Can I use Traffikora and Constant Contact together?","acceptedAnswer":{"@type":"Answer","text":"Yes. Traffikora attracts new local customers through search and AI engines. Constant Contact nurtures existing customers via email. Many businesses use both -- Traffikora to attract, email to retain."}}]})
        }}
      />
      {children}
    </>
  )
}