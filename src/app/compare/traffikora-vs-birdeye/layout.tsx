import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Birdeye: Best Reputation Management for Small Business | Traffikora',
  description: 'Compare Traffikora vs Birdeye for local business reputation management. See why small businesses choose Traffikora for automated reviews, local SEO, and AI engine optimization.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-birdeye' },
  openGraph: {
    title: 'Traffikora vs Birdeye: Best Reputation Management for Small Business | Traffikora',
    description: 'Compare Traffikora vs Birdeye for local business reputation management. See why small businesses choose Traffikora for automated reviews, local SEO, and AI engine optimization.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-birdeye',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}