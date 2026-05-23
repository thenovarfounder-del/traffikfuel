const fs = require("fs");

fs.mkdirSync("C:\\Users\\randy\\traffikfuel\\src\\app\\features\\google-business-profile", { recursive: true });

const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Business Profile Automation | Traffikora',
  description: 'Traffikora automatically optimizes and manages your Google Business Profile — posts, reviews, photos, and keywords — so you rank higher in local search. Start free.',
}

export default function GBPLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;

fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\app\\features\\google-business-profile\\layout.tsx", content, { encoding: "utf8" });
console.log("Done");