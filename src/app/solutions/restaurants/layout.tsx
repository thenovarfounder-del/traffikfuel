import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Restaurant Marketing Automation | Traffikora',
  description: 'Automate social media, Google Business Profile, and local SEO for your restaurant. Traffikora markets your restaurant 24/7. Free 7-day trial.',
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
