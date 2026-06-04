import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Hootsuite | Traffikora',
  description: 'Traffikora vs Hootsuite for social media and local business marketing automation.',
  alternates: { canonical: 'https://www.traffikora.com/vs/hootsuite' },
  openGraph: {
    title: 'Traffikora vs Hootsuite | Traffikora',
    description: 'Traffikora vs Hootsuite for social media and local business marketing automation.',
    url: 'https://www.traffikora.com/vs/hootsuite',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
