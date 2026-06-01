import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Semrush — Automate vs Analyze | Traffikora',
  description: 'Semrush shows you what to do. Traffikora does it automatically. Compare SEO automation, content creation, and Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini. Start free trial.',
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
            "description": "Traffikora is a fully automated marketing platform — a powerful alternative to Semrush that executes SEO, content, and social automatically.",
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
