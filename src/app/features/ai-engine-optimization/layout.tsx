import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Engine Optimization | Traffikora',
  description: 'Get your business found in ChatGPT, Perplexity, Gemini, Claude, Copilot, and Google AI Overviews. Traffikora is the only platform that optimizes for every AI search engine.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
