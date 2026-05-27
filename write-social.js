const fs = require('fs');

fs.writeFileSync('src/app/layout.tsx', `// @ts-nocheck
import './globals.css'
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
    <html lang="en">
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap" media="print" onload="this.media='all'" />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap" />
        </noscript>
      </head>
      <body className="antialiased">
        <ScrollToTop />
        {children}
        <CrispChat />
        <CookieBanner />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z6THVW5RJ1" strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {\`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z6THVW5RJ1');
          \`}
        </Script>
      </body>
    </html>
  )
}
`, 'utf8');

console.log('OK: src/app/layout.tsx');