import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora vs BrightLocal: Best Local SEO Tool for Small Business | Traffikora',
  description: 'Compare Traffikora vs BrightLocal for local SEO. Traffikora automates local marketing execution including content, reviews, and AI engine optimization beyond BrightLocal reporting.',
  alternates: { canonical: 'https://www.traffikora.com/compare/traffikora-vs-brightlocal' },
  openGraph: {
    title: 'Traffikora vs BrightLocal: Best Local SEO Tool for Small Business | Traffikora',
    description: 'Compare Traffikora vs BrightLocal for local SEO. Traffikora automates local marketing execution including content, reviews, and AI engine optimization beyond BrightLocal reporting.',
    url: 'https://www.traffikora.com/compare/traffikora-vs-brightlocal',
    siteName: 'Traffikora',
    type: 'website',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}