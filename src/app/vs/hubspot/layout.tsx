import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs HubSpot for Small Business | Traffikora',
  description: 'Traffikora vs HubSpot for local small business marketing. Starts at $47/month.',
  alternates: { canonical: 'https://www.traffikora.com/vs/hubspot' },
  openGraph: {
    title: 'Traffikora vs HubSpot for Small Business | Traffikora',
    description: 'Traffikora vs HubSpot for local small business marketing. Starts at $47/month.',
    url: 'https://www.traffikora.com/vs/hubspot',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
