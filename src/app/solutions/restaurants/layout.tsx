import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Restaurant Marketing Automation — Fill More Tables | Traffikora',
  description: 'Traffikora automates Google SEO, TikTok, Instagram, and Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini for restaurants. Get more diners without lifting a finger. Start free trial.',
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
            "description": "Traffikora automates marketing for restaurants — Google SEO, social media, Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini, and Google Business Profile.",
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
