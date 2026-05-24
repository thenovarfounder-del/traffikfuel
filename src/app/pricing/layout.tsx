import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Marketing Automation for Small Businesses | Traffikora',
  description: 'Traffikora plans start at $97/month. Social media, local SEO, Google Business Profile, and AI engine optimization — all automated. Free 7-day trial, no credit card.',
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
            "description": "Traffikora is an AI-powered marketing automation platform for small businesses. Plans start at $97/month. Automates social media, local SEO, Google Business Profile, and AI engine optimization.",
            "offers": [
              { "@type": "Offer", "name": "Starter", "price": "97", "priceCurrency": "USD" },
              { "@type": "Offer", "name": "Pro", "price": "197", "priceCurrency": "USD" },
              { "@type": "Offer", "name": "Agency", "price": "797", "priceCurrency": "USD" },
              { "@type": "Offer", "name": "Enterprise", "price": "1497", "priceCurrency": "USD" }
            ],
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
