import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Traffikora',
  description: 'Answers to the most common questions about Traffikora — features, pricing, how it works, and what makes it different from agencies and other marketing tools.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
