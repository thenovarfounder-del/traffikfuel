import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Reputation.com | Traffikora',
  description: 'Compare Traffikora vs Reputation.com for local business marketing automation.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-reputation-com' },
  openGraph: {
    title: 'Traffikora vs Reputation.com | Traffikora',
    description: 'Compare Traffikora vs Reputation.com for local business marketing automation.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-reputation-com',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
