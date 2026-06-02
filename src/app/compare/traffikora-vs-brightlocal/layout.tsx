import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs BrightLocal: Best Local SEO Tool for Small Business | Traffikora',
  description: 'Compare Traffikora vs BrightLocal for local SEO. Traffikora automates local marketing execution including content, reviews, and AI engine optimization beyond BrightLocal reporting.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-brightlocal' },
  openGraph: {
    title: 'Traffikora vs BrightLocal: Best Local SEO Tool for Small Business | Traffikora',
    description: 'Compare Traffikora vs BrightLocal for local SEO. Traffikora automates local marketing execution including content, reviews, and AI engine optimization beyond BrightLocal reporting.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-brightlocal',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Traffikora compare to BrightLocal?","acceptedAnswer":{"@type":"Answer","text":"BrightLocal is a local SEO reporting and audit tool that shows you where you stand. Traffikora is an automated execution platform that improves your ranking automatically every week without requiring you to interpret reports or take manual action."}},{"@type":"Question","name":"Is Traffikora cheaper than BrightLocal?","acceptedAnswer":{"@type":"Answer","text":"BrightLocal starts at $39 per month for reporting only. Traffikora starts at $47 per month and actively executes your local SEO -- publishing content, generating reviews, posting to Google Business Profile, and building AI engine visibility."}},{"@type":"Question","name":"Does BrightLocal publish content or generate reviews?","acceptedAnswer":{"@type":"Answer","text":"No. BrightLocal is a reporting and audit tool. It shows you local SEO data but does not create content, publish Google Business Profile posts, send review requests, or optimize for AI engine visibility. Traffikora does all of these automatically."}},{"@type":"Question","name":"Which is better for improving local rankings -- Traffikora or BrightLocal?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is better for improving rankings because it takes action automatically. BrightLocal shows you what to fix -- you still have to fix it yourself. For a busy local business owner, automated execution delivers results faster."}}]})
        }}
      />
      {children}
    </>
  )
}