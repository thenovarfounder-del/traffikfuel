import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Later | Traffikora',
  description: 'Compare Traffikora vs Later for social media and content marketing automation.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-later' },
  openGraph: {
    title: 'Traffikora vs Later | Traffikora',
    description: 'Compare Traffikora vs Later for social media and content marketing automation.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-later',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
