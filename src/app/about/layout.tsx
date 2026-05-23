import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Traffikora — The Automated Marketing Platform Built for Small Business',
  description: 'Learn how Traffikora helps small businesses get found on Google, ChatGPT, Gemini, and every major AI engine — automatically, 24/7.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}