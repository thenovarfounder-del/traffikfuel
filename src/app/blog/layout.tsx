import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Blog — Local Marketing Tips for Small Businesses | Traffikora',
  description: 'Local SEO tips, Google SEO + Google SEO + all AI engines — Google, Bing, ChatGPT, Claude, Gemini guides, and Google Business Profile strategies for small business owners. Practical marketing advice that actually works.',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
