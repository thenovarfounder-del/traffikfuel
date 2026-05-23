import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Traffikora — AI-Powered Marketing Automation for Small Businesses',
  description: 'Traffikora automates social media, local SEO, Google Business Profile, and AI engine optimization for small businesses. Set it once. It markets forever. Free 7-day trial.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Traffikora",
              "url": "https://www.traffikora.com",
              "applicationCategory": "BusinessApplication",
              "description": "Traffikora is an AI-powered marketing automation platform for small businesses. Set it once and it markets forever — automating social media, local SEO, Google Business Profile, and AI engine optimization across ChatGPT, Perplexity, Gemini, Claude, Copilot, and Google AI Overviews.",
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
      </body>
    </html>
  )
}
