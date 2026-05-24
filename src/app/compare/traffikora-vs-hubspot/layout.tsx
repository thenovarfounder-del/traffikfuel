import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs HubSpot — Better & More Affordable | Traffikora',
  description: 'See how Traffikora beats HubSpot for small businesses. More features, AI engine optimization, and full automation starting at $97/mo vs $800+/mo. Try free.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Traffikora",
            "url": "https://www.traffikora.com",
            "applicationCategory": "BusinessApplication",
            "description": "Traffikora is an AI-powered marketing automation platform for small businesses — a powerful and affordable alternative to HubSpot.",
            "offers": {
              "@type": "Offer",
              "price": "97",
              "priceCurrency": "USD"
            },
            "operatingSystem": "Web",
            "provider": {
              "@type": "Organization",
              "name": "Traffikora",
              "url": "https://www.traffikora.com"
            }
          })
        }}
      />
      {children}
    </>
  )
}
