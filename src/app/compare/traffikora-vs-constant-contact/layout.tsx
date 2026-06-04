import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Constant Contact | Traffikora',
  description: 'Compare Traffikora vs Constant Contact for small business marketing automation.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-constant-contact' },
  openGraph: {
    title: 'Traffikora vs Constant Contact | Traffikora',
    description: 'Compare Traffikora vs Constant Contact for small business marketing automation.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-constant-contact',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
