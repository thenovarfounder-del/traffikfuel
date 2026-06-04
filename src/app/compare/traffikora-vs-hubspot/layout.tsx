import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs HubSpot | Traffikora',
  description: 'Compare Traffikora vs HubSpot for local small business marketing automation.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-hubspot' },
  openGraph: {
    title: 'Traffikora vs HubSpot | Traffikora',
    description: 'Compare Traffikora vs HubSpot for local small business marketing automation.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-hubspot',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
