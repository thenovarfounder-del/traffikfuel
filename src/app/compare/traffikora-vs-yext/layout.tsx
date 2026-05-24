import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Yext — Full Marketing vs Listing Sync | Traffikora',
  description: 'Yext charges $500+/mo just to sync listings. Traffikora automates your full marketing machine for $97/mo. SEO, social, AI engines, and more. Try free.',
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
            "description": "Traffikora is a full marketing automation platform — a powerful and affordable alternative to Yext with SEO, social media, and AI engine optimization.",
            "offers": { "@type": "Offer", "price": "97", "priceCurrency": "USD" },
            "operatingSystem": "Web",
            "provider": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" }
          })
        }}
      />
      {children}
    </>
  )
}
