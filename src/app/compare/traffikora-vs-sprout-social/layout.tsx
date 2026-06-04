import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Sprout Social | Traffikora',
  description: 'Compare Traffikora vs Sprout Social for social media marketing automation.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-sprout-social' },
  openGraph: {
    title: 'Traffikora vs Sprout Social | Traffikora',
    description: 'Compare Traffikora vs Sprout Social for social media marketing automation.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-sprout-social',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
