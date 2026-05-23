import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Business Profile Management | Traffikora',
  description: 'Traffikora automates your Google Business Profile — weekly posts, photo uploads, review responses, and profile optimization. Rank higher in local search automatically.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
