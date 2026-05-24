import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Blog — Local Marketing Tips for Small Businesses | Traffikora',
  description: 'Local SEO tips, AI engine optimization guides, and Google Business Profile strategies for small business owners. Practical marketing advice that actually works.',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
