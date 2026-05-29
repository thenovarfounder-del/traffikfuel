const fs = require('fs');
const path = require('path');

// Fix 1: Restore layout.tsx to working state with font optimization
const layoutPath = path.join('src', 'app', 'layout.tsx');
const layoutContent = `// @ts-nocheck
'use client'
import './globals.css'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import CrispChat from '@/components/CrispChat'
import CookieBanner from '@/components/CookieBanner'
import ScrollToTop from '@/components/ScrollToTop'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700','900'], display: 'swap', variable: '--font-playfair', preload: true })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600','700'], display: 'swap', variable: '--font-dm-sans', preload: true })

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={\`\${playfair.variable} \${dmSans.variable}\`} suppressHydrationWarning>
      <head>
        <meta name='google-site-verification' content='tDnX1kzbib0Z52zeV6oAH35iohkvNI-4BpV7lz1Yga0' />
        <meta property='og:title' content='Traffikora - AI Marketing Automation for Small Businesses' />
        <meta property='og:description' content='Set it once. It markets forever. Traffikora automates your marketing across Google and every major AI engine.' />
        <meta property='og:image' content='https://www.traffikora.com/og-image.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta property='og:url' content='https://www.traffikora.com' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='Traffikora' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Traffikora - AI Marketing Automation for Small Businesses' />
        <meta name='twitter:description' content='Set it once. It markets forever.' />
      </head>
      <body suppressHydrationWarning>
        {children}
        <CrispChat />
        <CookieBanner />
        <ScrollToTop />
      </body>
    </html>
  )
}
`;

// Fix 2: Create resources/layout.tsx
const resourcesDir = path.join('src', 'app', 'resources');
fs.mkdirSync(resourcesDir, { recursive: true });
const resourcesLayout = path.join(resourcesDir, 'layout.tsx');

fs.writeFileSync(layoutPath, layoutContent);
fs.writeFileSync(resourcesLayout, `export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }`);

console.log('Done');