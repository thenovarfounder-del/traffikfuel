import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start Your Free Trial — Traffikora',
  description: 'Start your 7-day free trial today. No charge until your trial ends. Get your business found on Google, ChatGPT, Gemini, and every major AI engine.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}