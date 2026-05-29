const fs = require('fs');
const path = require('path');

const dir = path.join('app', 'resources');
fs.mkdirSync(dir, { recursive: true });

const lines = [];
lines.push("export default function ResourcesLayout({ children }: { children: React.ReactNode }) {");
lines.push("  return <>{children}</>;");
lines.push("}");

const content = lines.join('\n');
const filePath = path.join(dir, 'layout.tsx');
fs.writeFileSync(filePath, content, 'utf8');
console.log('Done: ' + filePath);