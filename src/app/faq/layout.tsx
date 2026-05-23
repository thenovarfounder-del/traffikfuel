import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Traffikora',
  description: 'Answers to the most common questions about Traffikora — pricing, features, AI engine optimization, integrations, and more. Start your free 7-day trial today.',
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
