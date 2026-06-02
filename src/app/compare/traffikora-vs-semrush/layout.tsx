import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs SEMrush: Best Local SEO Tool for Small Business | Traffikora',
  description: 'Compare Traffikora vs SEMrush for local SEO. Traffikora automates your local marketing execution while SEMrush only provides data. See which is right for your small business.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-semrush' },
  openGraph: {
    title: 'Traffikora vs SEMrush: Best Local SEO Tool for Small Business | Traffikora',
    description: 'Compare Traffikora vs SEMrush for local SEO. Traffikora automates your local marketing execution while SEMrush only provides data. See which is right for your small business.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-semrush',
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
          __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How does Traffikora compare to SEMrush?","acceptedAnswer":{"@type":"Answer","text":"SEMrush is an SEO research and analytics tool that tells you what to do. Traffikora is an automated marketing platform that does it for you. SEMrush requires significant SEO expertise to act on its data. Traffikora requires no expertise -- it runs automatically."}},{"@type":"Question","name":"Is Traffikora cheaper than SEMrush?","acceptedAnswer":{"@type":"Answer","text":"Traffikora starts at $47 per month. SEMrush starts at $117 per month for its basic plan. Traffikora also executes your local marketing automatically, while SEMrush only provides data that you still have to act on yourself."}},{"@type":"Question","name":"Can Traffikora replace SEMrush for a small business?","acceptedAnswer":{"@type":"Answer","text":"For most small businesses, yes. Traffikora automates the local SEO actions that matter most -- content publishing, Google Business Profile management, review generation, and citation building -- without requiring you to interpret keyword data or hire an SEO expert."}},{"@type":"Question","name":"Which is better for local ranking -- Traffikora or SEMrush?","acceptedAnswer":{"@type":"Answer","text":"Traffikora is better for local ranking because it takes action automatically. SEMrush shows you opportunities but you have to execute them yourself. For a busy small business owner, automated execution beats manual research every time."}}]})
        }}
      />
      {children}
    </>
  )
}