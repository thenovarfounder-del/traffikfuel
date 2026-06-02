import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Vendasta: Best Local Marketing Platform for Small Business | Traffikora',
  description: 'Compare Traffikora vs Vendasta for local business marketing automation. Traffikora delivers automated local SEO and AI engine optimization at a fraction of Vendasta pricing.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-vendasta' },
  openGraph: {
    title: 'Traffikora vs Vendasta: Best Local Marketing Platform for Small Business | Traffikora',
    description: 'Compare Traffikora vs Vendasta for local business marketing automation. Traffikora delivers automated local SEO and AI engine optimization at a fraction of Vendasta pricing.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-vendasta',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}