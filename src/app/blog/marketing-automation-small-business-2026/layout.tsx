import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marketing Automation for Small Business in 2026 | Traffikora',
  description: 'Marketing automation is no longer just for big companies. Here is how small businesses are using automation in 2026 to compete and win locally.',
  alternates: { canonical: 'https://www.traffikora.com/blog/marketing-automation-small-business-2026' },
  openGraph: {
    title: 'Marketing Automation for Small Business in 2026 | Traffikora',
    description: 'Marketing automation is no longer just for big companies. Here is how small businesses are using automation in 2026 to compete and win locally.',
    url: 'https://www.traffikora.com/blog/marketing-automation-small-business-2026',
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
            "headline": "Marketing Automation for Small Business in 2026",
            "description": "Marketing automation is no longer just for big companies. Here is how small businesses are using automation in 2026 to compete and win locally.",
            "url": "https://www.traffikora.com/blog/marketing-automation-small-business-2026",
            "publisher": { "@type": "Organization", "name": "Traffikora", "url": "https://www.traffikora.com" },
            "mainEntityOfPage": "https://www.traffikora.com/blog/marketing-automation-small-business-2026"
          })
        }}
      />
      {children}
    </>
  )
}