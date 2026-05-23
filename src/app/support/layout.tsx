import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Traffikora Support — Help Center',
  description: 'Find answers, get help, and contact the Traffikora support team. We are here to make sure your marketing automation runs perfectly.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}