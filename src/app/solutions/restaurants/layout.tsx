import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Restaurant Marketing Automation | Traffikora',
  description: 'Traffikora automates social media, Google Business Profile, local SEO, and AI engine optimization for restaurants. Fill more tables without touching your phone.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
