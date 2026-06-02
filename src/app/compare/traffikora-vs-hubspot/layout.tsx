import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs HubSpot: Best Marketing Automation for Small Business | Traffikora',
  description: 'Compare Traffikora vs HubSpot for small business marketing. Traffikora delivers automated local SEO, reviews, and AI engine optimization at a fraction of HubSpot pricing.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-hubspot' },
  openGraph: {
    title: 'Traffikora vs HubSpot: Best Marketing Automation for Small Business | Traffikora',
    description: 'Compare Traffikora vs HubSpot for small business marketing. Traffikora delivers automated local SEO, reviews, and AI engine optimization at a fraction of HubSpot pricing.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-hubspot',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}