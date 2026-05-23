import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Traffikora',
  description: 'Read the Traffikora terms of service. Everything you need to know about using the platform.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}