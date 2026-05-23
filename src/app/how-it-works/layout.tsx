import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How Traffikora Works — Set It Once, It Markets Forever',
  description: 'Connect your accounts once and Traffikora handles everything — Google, ChatGPT, Gemini, social media, SEO, and reviews. No marketing team needed.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}