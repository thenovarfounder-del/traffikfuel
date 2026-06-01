import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ — Frequently Asked Questions | Traffikora',
  description: 'Got questions about Traffikora? Find answers about setup, features, pricing, and how Traffikora automates marketing for local businesses. Free 7-day trial.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "What is Traffikora?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora is an AI-powered marketing automation platform for small and mid-size businesses. Connect your accounts once and Traffikora handles social media, Google Business Profile, local SEO, and Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini automatically." } },
              { "@type": "Question", "name": "How much does Traffikora cost?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora starts at $97 per month for the Starter plan. Pro is $197/month, Agency is $797/month, and Enterprise is $1,497/month. All plans include a free 7-day trial." } },
              { "@type": "Question", "name": "Do I need a credit card to start the free trial?", "acceptedAnswer": { "@type": "Answer", "text": "No. You can start your Free plan available with just your email address. No no credit card required." } },
              { "@type": "Question", "name": "What is Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini?", "acceptedAnswer": { "@type": "Answer", "text": "Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini means getting your business recommended when people ask ChatGPT, Claude, Gemini, or Perplexity for suggestions. Traffikora is the only platform that automates this for small businesses." } },
              { "@type": "Question", "name": "Can I cancel anytime?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Cancel anytime from your dashboard with one click. No cancellation fees and no contracts." } }
            ]
          })
        }}
      />
      {children}
    </>
  )
}
