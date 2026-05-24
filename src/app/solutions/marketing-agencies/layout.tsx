import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Automation for Agencies — Scale Without Hiring | Traffikora',
  description: 'Traffikora helps marketing agencies manage 10+ clients with white-label reports, multi-client dashboard, and full automation. Scale revenue without scaling headcount.',
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
            "description": "Traffikora helps marketing agencies scale with white-label reports, multi-client dashboards, and full marketing automation for every client.",
            "offers": { "@type": "Offer", "price": "797", "priceCurrency": "USD" },
            "operatingSystem": "Web",
            "provider": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" }
          })
        }}
      />
      {children}
    </>
  )
}
