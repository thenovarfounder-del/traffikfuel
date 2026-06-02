import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Birdeye: Best Reputation Management for Small Business | Traffikora',
  description: 'Compare Traffikora vs Birdeye for local business reputation management. See why small businesses choose Traffikora for automated reviews, local SEO, and AI engine optimization.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-birdeye' },
  openGraph: {
    title: 'Traffikora vs Birdeye: Best Reputation Management for Small Business | Traffikora',
    description: 'Compare Traffikora vs Birdeye for local business reputation management. See why small businesses choose Traffikora for automated reviews, local SEO, and AI engine optimization.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-birdeye',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Traffikora compare to Birdeye?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is built specifically for small businesses and includes local SEO automation, AI engine optimization, and social media publishing that Birdeye does not offer. Birdeye focuses primarily on reputation and reviews at a higher price point aimed at enterprise customers."}},{"@type":"Question","name":"Is Traffikora cheaper than Birdeye?","acceptedAnswer":{"@type":"Answer","text":"Yes. Traffikora starts at $47 per month for unlimited blogs and social content. Birdeye pricing starts significantly higher and scales up for multi-location businesses, making Traffikora the more affordable choice for small and local businesses."}},{"@type":"Question","name":"Does Traffikora do everything Birdeye does?","acceptedAnswer":{"@type":"Answer","text":"Traffikora covers review generation and reputation monitoring like Birdeye, and also includes local SEO content, Google Business Profile automation, and AI engine optimization that Birdeye does not provide."}},{"@type":"Question","name":"Which is better for local SEO -- Traffikora or Birdeye?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is purpose-built for local SEO with automated blog content, Google Business Profile posting, citation building, and AI engine visibility. Birdeye does not include these local SEO features in its core platform."}}]})
        }}
      />
      {children}
    </>
  )
}