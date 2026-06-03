const fs = require("fs");
const path = require("path");

const filePath = "C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx";
let content = fs.readFileSync(filePath, "utf8");

// Find the PLATFORM section and inject LLM Engine after Business Brain
content = content.replace(
  "{ href: '/dashboard/settings', icon:",
  "{ href: '/dashboard/llm-engine', icon: '\u26A1', label: 'LLM Engine' },\n    { href: '/dashboard/settings', icon:"
);

fs.writeFileSync(filePath, content);
console.log("SUCCESS - LLM Engine injected into sidebar!");