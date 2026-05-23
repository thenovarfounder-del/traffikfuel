const fs = require("fs");

fs.mkdirSync("C:\\Users\\randy\\traffikfuel\\src\\app\\features\\ai-engine-optimization", { recursive: true });

const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Engine Optimization for Local Business | Traffikora',
  description: 'Traffikora optimizes your business to be found and recommended by ChatGPT, Perplexity, Gemini, Claude, and Copilot — automatically. Start your free 7-day trial.',
}

export default function AEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;

fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\app\\features\\ai-engine-optimization\\layout.tsx", content, { encoding: "utf8" });
console.log("layout.tsx written");