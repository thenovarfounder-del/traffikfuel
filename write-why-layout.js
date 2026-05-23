const fs = require("fs");

fs.mkdirSync("C:\\Users\\randy\\traffikfuel\\src\\app\\why-traffikora", { recursive: true });

const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Traffikora | Automated Marketing for Small Businesses',
  description: 'See why thousands of small businesses choose Traffikora over marketing agencies and other tools. Get Google + AI engine optimization for $97/mo vs $2,000+/mo agency fees.',
}

export default function WhyTraffikoraLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;

fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\app\\why-traffikora\\layout.tsx", content, { encoding: "utf8" });
console.log("why-traffikora/layout.tsx written");