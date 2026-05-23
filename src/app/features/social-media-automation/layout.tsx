import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Automation | Traffikora',
  description: 'Traffikora creates and publishes social media content to every platform automatically. Facebook, Instagram, TikTok, LinkedIn, Twitter/X — set it once, post forever.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
