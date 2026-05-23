const fs = require("fs");
const path = require("path");

fs.mkdirSync("C:\\Users\\randy\\traffikfuel\\src\\app\\faq", { recursive: true });

const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Traffikora',
  description: 'Answers to the most common questions about Traffikora — pricing, features, AI engine optimization, integrations, and more. Start your free 7-day trial today.',
}

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;

fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\app\\faq\\layout.tsx", content, { encoding: "utf8" });
console.log("faq/layout.tsx written");