import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Automation Platform for Agencies | Traffikora',
  description: 'Scale your agency with Traffikora. Automate SEO, social media, and AI engine optimization for all your clients at once. Free 7-day trial.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Traffikora","url":"https://www.traffikora.com","applicationCategory":"BusinessApplication","description":"Traffikora is an AI-powered marketing automation platform for small businesses. It automates social media, local SEO, Google Business Profile, and AI engine optimization.","offers":{"@type":"Offer","price":"97","priceCurrency":"USD"},"operatingSystem":"Web","provider":{"@type":"Organization","name":"Traffikora","url":"https://www.traffikora.com"}})
        }}
      />
      {children}
    </>
  )
}
