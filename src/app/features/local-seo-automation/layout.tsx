import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Local SEO Automation | Traffikora',
  description: 'Traffikora automates local SEO with citation building, keyword tracking, NAP monitoring, and schema markup. Rank higher in local search without lifting a finger.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
