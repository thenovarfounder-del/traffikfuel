import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Later — More Than Instagram Scheduling | Traffikora',
  description: 'Later only schedules Instagram posts. Traffikora automates SEO, AI engines, blogs, and 9+ social platforms. Same price — infinitely more power. Try free.',
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
            "description": "Traffikora is a full marketing automation platform — a powerful alternative to Later with SEO, AI engine optimization, and multi-platform social automation.",
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
