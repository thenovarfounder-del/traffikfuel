import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Yext: Best Local SEO Platform for Small Business | Traffikora',
  description: 'Compare Traffikora vs Yext for local business visibility. Traffikora automates local SEO, reviews, and AI engine optimization that goes far beyond Yext citation management.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-yext' },
  openGraph: {
    title: 'Traffikora vs Yext: Best Local SEO Platform for Small Business | Traffikora',
    description: 'Compare Traffikora vs Yext for local business visibility. Traffikora automates local SEO, reviews, and AI engine optimization that goes far beyond Yext citation management.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-yext',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}