// @ts-nocheck
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How AI Search Is Changing Local Business Marketing | Traffikora',
  description: 'ChatGPT, Gemini, and Claude now recommend local businesses. Learn how AI search works and how Traffikora optimizes you for every AI engine automatically.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How AI Search Is Changing Local Business Marketing Forever",
            "publisher": {
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
