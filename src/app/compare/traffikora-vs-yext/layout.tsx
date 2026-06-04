import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Yext | Traffikora',
  description: 'Compare Traffikora vs Yext for local SEO and business listings automation.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-yext' },
  openGraph: {
    title: 'Traffikora vs Yext | Traffikora',
    description: 'Compare Traffikora vs Yext for local SEO and business listings automation.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-yext',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
