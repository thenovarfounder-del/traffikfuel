import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs Buffer | Traffikora',
  description: 'Traffikora vs Buffer for social media and local business marketing automation.',
  alternates: { canonical: 'https://www.traffikora.com/vs/buffer' },
  openGraph: {
    title: 'Traffikora vs Buffer | Traffikora',
    description: 'Traffikora vs Buffer for social media and local business marketing automation.',
    url: 'https://www.traffikora.com/vs/buffer',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
