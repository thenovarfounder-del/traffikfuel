import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Sprout Social: Best Social Media Tool for Local Business | Traffikora',
  description: 'Compare Traffikora vs Sprout Social for local business social media. Traffikora creates content automatically and adds local SEO and review automation that Sprout Social cannot match.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-sprout-social' },
  openGraph: {
    title: 'Traffikora vs Sprout Social: Best Social Media Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Sprout Social for local business social media. Traffikora creates content automatically and adds local SEO and review automation that Sprout Social cannot match.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-sprout-social',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}