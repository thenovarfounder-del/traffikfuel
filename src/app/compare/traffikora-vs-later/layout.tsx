import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Later: Best Social Media Tool for Local Business | Traffikora',
  description: 'Compare Traffikora vs Later for local business social media. Traffikora creates and publishes content automatically and adds local SEO and reviews that Later cannot provide.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-later' },
  openGraph: {
    title: 'Traffikora vs Later: Best Social Media Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Later for local business social media. Traffikora creates and publishes content automatically and adds local SEO and reviews that Later cannot provide.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-later',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}