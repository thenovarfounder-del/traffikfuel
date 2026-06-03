const fs = require("fs");
const path = require("path");

const filePath = "C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx";
let content = fs.readFileSync(filePath, "utf8");

const oldLine = `    { href: '/dashboard/scrape', icon: 'ðŸ§ ', label: 'Business Brain' },`;
const newLine = `    { href: '/dashboard/scrape', icon: '\u{1F9E0}', label: 'Business Brain' },
    { href: '/dashboard/llm-engine', icon: '\u26A1', label: 'LLM Engine' },`;

content = content.replace(oldLine, newLine);

fs.writeFileSync(filePath, content);
console.log("SUCCESS - LLM Engine added to sidebar!");