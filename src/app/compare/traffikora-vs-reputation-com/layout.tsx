import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Reputation.com: Best Reputation Management for Small Business | Traffikora',
  description: 'Compare Traffikora vs Reputation.com for local business reputation management. Traffikora delivers automated reviews, local SEO, and AI engine optimization at small business pricing.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-reputation-com' },
  openGraph: {
    title: 'Traffikora vs Reputation.com: Best Reputation Management for Small Business | Traffikora',
    description: 'Compare Traffikora vs Reputation.com for local business reputation management. Traffikora delivers automated reviews, local SEO, and AI engine optimization at small business pricing.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-reputation-com',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}