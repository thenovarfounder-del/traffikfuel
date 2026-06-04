import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Birdeye | Traffikora',
  description: 'Compare Traffikora vs Birdeye for local business marketing automation.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-birdeye' },
  openGraph: {
    title: 'Traffikora vs Birdeye | Traffikora',
    description: 'Compare Traffikora vs Birdeye for local business marketing automation.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-birdeye',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
