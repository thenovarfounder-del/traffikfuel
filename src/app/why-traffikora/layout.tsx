import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Traffikora | Automated Marketing for Small Businesses',
  description: 'See why thousands of small businesses choose Traffikora over marketing agencies and other tools. Get Google + AI engine optimization for $97/mo vs $2,000+/mo agency fees.',
}

export default function WhyTraffikoraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
