import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CrispChat from '@/components/CrispChat'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Traffikora — AI-Powered Marketing Automation',
  description: 'Set it once. It markets forever. Traffikora automates SEO, social media, Google Business Profile, and AI engine optimization for small businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z6THVW5RJ1"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z6THVW5RJ1');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {children}
        <CrispChat />
      </body>
    </html>
  )
}
