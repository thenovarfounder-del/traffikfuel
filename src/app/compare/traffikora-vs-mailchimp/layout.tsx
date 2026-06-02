import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Mailchimp: Best Marketing Tool for Local Business | Traffikora',
  description: 'Compare Traffikora vs Mailchimp for local business marketing. Traffikora automates local SEO, reviews, and AI visibility that Mailchimp cannot provide.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-mailchimp' },
  openGraph: {
    title: 'Traffikora vs Mailchimp: Best Marketing Tool for Local Business | Traffikora',
    description: 'Compare Traffikora vs Mailchimp for local business marketing. Traffikora automates local SEO, reviews, and AI visibility that Mailchimp cannot provide.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-mailchimp',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}