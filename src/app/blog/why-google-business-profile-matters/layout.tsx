import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Why Your Google Business Profile Matters More Than Your Website | Traffikora',
  description: 'Your Google Business Profile is your most valuable local marketing asset. Learn why active GBP management is the highest-ROI marketing move for local businesses.',
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
