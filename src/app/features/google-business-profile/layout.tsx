import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Business Profile Automation | Traffikora',
  description: 'Traffikora automatically optimizes and manages your Google Business Profile — posts, reviews, photos, and keywords — so you rank higher in local search. Start free.',
}

export default function GBPLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
