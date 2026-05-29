import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources | Traffikora',
  description: 'Marketing resources, guides, and glossary for small business owners.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
