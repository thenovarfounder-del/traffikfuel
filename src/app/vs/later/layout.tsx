import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Later | Traffikora',
  description: 'Traffikora vs Later for social media scheduling and local business marketing.',
  alternates: { canonical: 'https://www.traffikora.com/vs/later' },
  openGraph: {
    title: 'Traffikora vs Later | Traffikora',
    description: 'Traffikora vs Later for social media scheduling and local business marketing.',
    url: 'https://www.traffikora.com/vs/later',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
