import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'What Is Traffikora? The Marketing Platform That Never Stops Working | Traffikora',
  description: 'Traffikora is an automated marketing platform for small businesses. Connect once and it handles social media, local SEO, Google Business Profile, and Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini forever.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": "What Is Traffikora? The Marketing Platform That Never Stops Working",
            "description": "Traffikora is an automated marketing machine for small and mid-size businesses. Connect your accounts once and it markets forever.",
            "url": "https://www.traffikora.com/blog/what-is-traffikora",
            "publisher": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
            "mainEntityOfPage": "https://www.traffikora.com/blog/what-is-traffikora"
          })
        }}
      />
      {children}
    </>
  )
}
