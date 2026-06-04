import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Hootsuite | Traffikora',
  description: 'Compare Traffikora vs Hootsuite for social media and marketing automation.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-hootsuite' },
  openGraph: {
    title: 'Traffikora vs Hootsuite | Traffikora',
    description: 'Compare Traffikora vs Hootsuite for social media and marketing automation.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-hootsuite',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
