import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Mailchimp: Full Comparison | Traffikora',
  description: 'Traffikora vs Mailchimp compared. See why local businesses replace Mailchimp with Traffikora for automated SEO, social media, and Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini.',
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
            "description": "Traffikora is an AI-powered marketing automation platform for small businesses. Automates social media, local SEO, Google Business Profile, and Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini.",
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
