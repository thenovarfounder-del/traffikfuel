import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs BrightLocal | Traffikora',
  description: 'Compare Traffikora vs BrightLocal for local SEO and marketing automation.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-brightlocal' },
  openGraph: {
    title: 'Traffikora vs BrightLocal | Traffikora',
    description: 'Compare Traffikora vs BrightLocal for local SEO and marketing automation.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-brightlocal',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
