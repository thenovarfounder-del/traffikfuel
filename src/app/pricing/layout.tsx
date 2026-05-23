import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora Pricing — Plans Starting at 97 per month',
  description: 'Simple, transparent pricing. Starter at 97, Pro at 197, Agency at 797, Enterprise at 1497. All plans include a 7-day free trial.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}