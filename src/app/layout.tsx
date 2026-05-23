// @ts-nocheck
import type { Metadata } from 'next'
import './globals.css'
import CrispChat from '@/components/CrispChat'

export const metadata: Metadata = {
  title: 'Traffikora — Automated Marketing for Small Business | AI + Google Visibility',
  description: 'Set it once. It markets forever. Traffikora automates your Google, ChatGPT, Gemini, and social media presence — no marketing team needed. Start free for 7 days.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Traffikora',
  url: 'https://www.traffikora.com',
  description: 'Automated marketing platform for small businesses. Optimizes for Google, ChatGPT, Gemini, Claude, Perplexity, and all major AI engines.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '97',
    highPrice: '1497',
    priceCurrency: 'USD',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Traffikora',
    url: 'https://www.traffikora.com',
    logo: 'https://www.traffikora.com/favicon.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@traffikora.com',
      contactType: 'customer support',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <CrispChat />
      </body>
    </html>
  )
}