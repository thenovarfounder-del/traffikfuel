import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Mailchimp | Traffikora',
  description: 'Compare Traffikora vs Mailchimp for small business marketing automation.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-mailchimp' },
  openGraph: {
    title: 'Traffikora vs Mailchimp | Traffikora',
    description: 'Compare Traffikora vs Mailchimp for small business marketing automation.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-mailchimp',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
