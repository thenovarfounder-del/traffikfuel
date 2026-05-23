import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Traffikora — We are Here to Help',
  description: 'Get in touch with the Traffikora team. We are ready to help you automate your marketing and grow your business.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}