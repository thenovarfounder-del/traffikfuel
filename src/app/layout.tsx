// @ts-nocheck
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700','900'], display: 'swap', variable: '--font-playfair' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600','700'], display: 'swap', variable: '--font-dm-sans' })
import CrispChat from '@/components/CrispChat'
import CookieBanner from '@/components/CookieBanner'
import ScrollToTop from '@/components/ScrollToTop'
import Script from 'next/script'

export const metadata = {
  title: 'Traffikora - AI Marketing Automation for Small Businesses',
  description: 'Set it once. It markets forever. Traffikora automates your marketing across Google and every major AI engine.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <meta name="google-site-verification" content="tDnX1kzbibOZ52zeV6oAH35iohkvNI-4BpV7lz1Yga0" />
        <meta property="og:title" content="Traffikora - AI Marketing Automation for Small Businesses" />
        <meta property="og:description" content="Set it once. It markets forever. Traffikora automates your marketing across Google and every major AI engine." />
        <meta property="og:image" content="https://www.traffikora.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.traffikora.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Traffikora" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Traffikora - AI Marketing Automation for Small Businesses" />
        <meta name="twitter:description" content="Set it once. It markets forever." />
        <meta name="twitter:image" content="https://www.traffikora.com/og-image.png" />
                                        <noscript>
        </noscript>
      </head>
      <body className="antialiased">
        <ScrollToTop />
        {children}
        <CrispChat />
        <CookieBanner />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z6THVW5RJ1" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z6THVW5RJ1');
          `}
        </Script>
      </body>
    </html>
  )
}
