import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How AI Marketing Automation Works for Small Business | Traffikora',
  description: 'Learn how AI marketing automation works and how small businesses use it to save time, rank higher, and grow faster without a marketing team.',
  alternates: { canonical: 'https://www.traffikora.com/blog/how-ai-marketing-automation-works' },
  openGraph: {
    title: 'How AI Marketing Automation Works for Small Business | Traffikora',
    description: 'Learn how AI marketing automation works and how small businesses use it to save time, rank higher, and grow faster without a marketing team.',
    url: 'https://www.traffikora.com/blog/how-ai-marketing-automation-works',
    siteName: 'Traffikora',
    type: 'article',
  },
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
            "headline": "How AI Marketing Automation Works for Small Business",
            "description": "Learn how AI marketing automation works and how small businesses use it to save time, rank higher, and grow faster without a marketing team.",
            "url": "https://www.traffikora.com/blog/how-ai-marketing-automation-works",
            "publisher": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
            "mainEntityOfPage": "https://www.traffikora.com/blog/how-ai-marketing-automation-works"
          })
        }}
      />
      {children}
    </>
  )
}