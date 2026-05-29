const fs = require('fs');
const path = require('path');

const filePath = path.join('src', 'app', 'layout.tsx');

const content = `// @ts-nocheck
import './globals.css'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import CrispChat from '@/components/CrispChat'
import CookieBanner from '@/components/CookieBanner'
import ScrollToTop from '@/components/ScrollToTop'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700','900'], display: 'swap', variable: '--font-playfair', preload: true })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600','700'], display: 'swap', variable: '--font-dm-sans', preload: true })

export const metadata = {
  title: 'Traffikora - AI Marketing Automation for Small Businesses',
  description: 'Set it once. It markets forever. Traffikora automates your marketing across Google and every major AI engine.',
  metadataBase: new URL('https://www.traffikora.com'),
  openGraph: {
    title: 'Traffikora - AI Marketing Automation for Small Businesses',
    description: 'Set it once. It markets forever. Traffikora automates your marketing across Google and every major AI engine.',
    url: 'https://www.traffikora.com',
    siteName: 'Traffikora',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traffikora - AI Marketing Automation for Small Businesses',
    description: 'Set it once. It markets forever.',
  },
  verification: {
    google: 'tDnX1kzbib0Z52zeV6oAH35iohkvNI-4BpV7lz1Yga0',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={\`\${playfair.variable} \${dmSans.variable}\`} suppressHydrationWarning>
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

fs.writeFileSync(filePath, content);
console.log('Done');