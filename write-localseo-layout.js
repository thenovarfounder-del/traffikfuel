const fs = require("fs");

fs.mkdirSync("C:\\Users\\randy\\traffikfuel\\src\\app\\features\\local-seo-automation", { recursive: true });

const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Local SEO Automation Software | Traffikora',
  description: 'Traffikora automates your local SEO — citations, keywords, Google rankings, and AI engine visibility — so your business gets found by more local customers. Start free.',
}

export default function LocalSEOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;

fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\app\\features\\local-seo-automation\\layout.tsx", content, { encoding: "utf8" });
console.log("Done");