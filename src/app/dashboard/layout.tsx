// @ts-nocheck
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | Traffikora',
  description: 'Your Traffikora marketing dashboard. Manage your automation, posts, reviews, and Google Business Profile all in one place.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
