import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Semrush | Traffikora',
  description: 'Compare Traffikora vs Semrush for local SEO and content marketing.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-semrush' },
  openGraph: {
    title: 'Traffikora vs Semrush | Traffikora',
    description: 'Compare Traffikora vs Semrush for local SEO and content marketing.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-semrush',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
