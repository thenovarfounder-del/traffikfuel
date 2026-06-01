import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Automation for Small Businesses | Traffikora',
  description: 'Traffikora gives small businesses Fortune 500 marketing power for $97/mo. Automate Google SEO, social media, and AI engines. Start your free trial today.',
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
            "description": "Traffikora is an AI-powered marketing automation platform built for small businesses. Automate SEO, social media, and Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini.",
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
