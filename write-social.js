const fs = require('fs');

// We fix layout.tsx to hardcode the title and meta description in the HTML head directly
const layout = `// @ts-nocheck
import './globals.css'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import CookieBanner from '@/components/CookieBanner'
import ScrollToTop from '@/components/ScrollToTop'
import ChatBubble from '@/components/ChatBubble'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700','900'], display: 'swap', variable: '--font-playfair' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600','700'], display: 'swap', variable: '--font-dm-sans' })

export const metadata = {
  title: 'Traffikora \u2014 AI Marketing Automation for Local Businesses',
  description: 'Set it once. It markets forever. Traffikora automates your blogs, social media, and SEO across Google, TikTok, YouTube, Facebook, Instagram and LinkedIn \u2014 24/7, no agency needed.',
  keywords: 'AI marketing automation, local business marketing, automated social media, SEO automation, content generation, small business marketing',
  metadataBase: new URL('https://www.traffikora.com'),
  openGraph: {
    title: 'Traffikora \u2014 AI Marketing Automation for Local Businesses',
    description: 'Set it once. It markets forever. Traffikora automates your marketing across Google and every major AI engine.',
    url: 'https://www.traffikora.com',
    siteName: 'Traffikora',
    images: [{ url: 'https://www.traffikora.com/og-image.png', width: 1200, height: 630, alt: 'Traffikora AI Marketing Platform' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Traffikora \u2014 AI Marketing Automation for Local Businesses',
    description: 'Set it once. It markets forever.',
  },
}

const schemaOrg = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Traffikora',
  url: 'https://www.traffikora.com',
  description: 'AI-powered marketing automation platform that generates and publishes blogs, social media posts, and SEO content for local businesses automatically.',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free plan available. Paid plans from $47/month.',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Traffikora',
    url: 'https://www.traffikora.com',
    logo: { '@type': 'ImageObject', url: 'https://www.traffikora.com/favicon.svg' },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61590075525966',
      'https://www.instagram.com/traffikora/',
      'https://x.com/traffikora',
      'https://www.youtube.com/@traffikora',
      'https://www.tiktok.com/@traffikora',
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`\${playfair.variable} \${dmSans.variable}\`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="Bq59ihAKck9y8kv3Zv_VcPUh1pUM8D_HtGNDCDCVfMk" />
        <meta name="google-site-verification" content="tDnX1kzbib0Z52zeV6oAH35iohkvNI-4BpV7lz1Yga0" />
        <link rel="canonical" href="https://www.traffikora.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/a2449444538b162a3443686343550cec/script.js" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <CookieBanner />
        <ScrollToTop />
        <ChatBubble />
      </body>
    </html>
  )
}
`;

fs.writeFileSync('C:\\\\Users\\\\randy\\\\traffikfuel\\\\src\\\\app\\\\layout.tsx', layout, 'utf8');
console.log('SUCCESS: layout.tsx written');