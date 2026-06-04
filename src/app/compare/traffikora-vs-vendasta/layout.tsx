import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Vendasta | Traffikora',
  description: 'Compare Traffikora vs Vendasta for local business marketing automation.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-vendasta' },
  openGraph: {
    title: 'Traffikora vs Vendasta | Traffikora',
    description: 'Compare Traffikora vs Vendasta for local business marketing automation.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-vendasta',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
