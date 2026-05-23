import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Traffikora',
  description: 'Read the Traffikora privacy policy. We are committed to protecting your data and your customers data.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}