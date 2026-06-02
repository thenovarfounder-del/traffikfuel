import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs SEMrush: Best Local SEO Tool for Small Business | Traffikora',
  description: 'Compare Traffikora vs SEMrush for local SEO. Traffikora automates your local marketing execution while SEMrush only provides data.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-semrush' },
  openGraph: {
    title: 'Traffikora vs SEMrush: Best Local SEO Tool for Small Business | Traffikora',
    description: 'Compare Traffikora vs SEMrush for local SEO. Traffikora automates your local marketing execution while SEMrush only provides data.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-semrush',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}