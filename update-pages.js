const fs = require("fs");

const pages = [
  "C:\\Users\\randy\\traffikfuel\\src\\app\\not-found.tsx",
  "C:\\Users\\randy\\traffikfuel\\src\\app\\faq\\page.tsx",
  "C:\\Users\\randy\\traffikfuel\\src\\app\\why-traffikora\\page.tsx",
  "C:\\Users\\randy\\traffikfuel\\src\\app\\features\\ai-engine-optimization\\page.tsx",
];

const navImport = `import Nav from '@/components/Nav'`;
const footerImport = `import Footer from '@/components/Footer'`;

const oldNavRegex = /<nav[\s\S]*?<\/nav>/g;
const oldFooterRegex = /<footer[\s\S]*?<\/footer>/g;
const oldLinkTags = /<link rel="preconnect"[\s\S]*?\/>\s*<link rel="preconnect"[\s\S]*?\/>\s*<link href="https:\/\/fonts[\s\S]*?\/>/g;

pages.forEach(p => {
  let content = fs.readFileSync(p, "utf8");

  // Add imports after first line
  if (!content.includes("import Nav")) {
    content = content.replace(
      `import Link from 'next/link'`,
      `import Link from 'next/link'\nimport Nav from '@/components/Nav'\nimport Footer from '@/components/Footer'`
    );
  }

  // Remove old font link tags
  content = content.replace(oldLinkTags, "");

  // Replace old nav with component
  content = content.replace(oldNavRegex, "<Nav />");

  // Replace old footer with component
  content = content.replace(oldFooterRegex, "<Footer />");

  fs.writeFileSync(p, content, "utf8");
  console.log("Updated: " + p);
});