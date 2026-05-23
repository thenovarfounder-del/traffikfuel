import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Traffikora | Automated Marketing for Small Businesses',
  description: 'See why thousands of small businesses choose Traffikora over marketing agencies and other tools. Google + AI engine optimization starting at $97/month.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
