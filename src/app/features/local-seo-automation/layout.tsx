import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Local SEO Automation for Small Businesses | Traffikora',
  description: 'Rank higher in local search automatically. Traffikora handles local SEO so you can focus on running your business. Start your free 7-day trial.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({"@context":"https://schema.org","@type":"SoftwareApplication","name":"Traffikora","url":"https://www.traffikora.com","applicationCategory":"BusinessApplication","description":"Traffikora is an AI-powered marketing automation platform for small businesses. It automates social media, local SEO, Google Business Profile, and Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini.","offers":{"@type":"Offer","price":"97","priceCurrency":"USD"},"operatingSystem":"Web","provider":{"@type":"Organization","name":"Traffikora","url":"https://www.traffikora.com"}})
        }}
      />
      {children}
    </>
  )
}
