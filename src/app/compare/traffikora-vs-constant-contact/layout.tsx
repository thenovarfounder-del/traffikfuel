import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Constant Contact: Best Marketing Tool for Local Business | Traffikora',
  description: 'Compare Traffikora vs Constant Contact for local business marketing. Traffikora automates local SEO, reviews, and AI visibility that Constant Contact email marketing cannot provide.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-constant-contact' },
  openGraph: {
    title: 'Traffikora vs Constant Contact: Best Marketing Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Constant Contact for local business marketing. Traffikora automates local SEO, reviews, and AI visibility that Constant Contact email marketing cannot provide.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-constant-contact',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}