import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Hootsuite: Best Social Media Tool for Local Business | Traffikora',
  description: 'Compare Traffikora vs Hootsuite for local business social media. Traffikora automates content creation and publishing plus local SEO and reviews that Hootsuite cannot do.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-hootsuite' },
  openGraph: {
    title: 'Traffikora vs Hootsuite: Best Social Media Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Hootsuite for local business social media. Traffikora automates content creation and publishing plus local SEO and reviews that Hootsuite cannot do.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-hootsuite',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}