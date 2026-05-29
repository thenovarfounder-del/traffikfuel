const fs = require('fs');
const path = require('path');

const layoutPath = path.join(__dirname, 'src', 'app', 'resources', 'glossary', 'layout.tsx');

const content = `// @ts-nocheck
'use client'

export default function Layout({ children }) {
  return <>{children}</>
}
`;

fs.mkdirSync(path.dirname(layoutPath), { recursive: true });
fs.writeFileSync(layoutPath, content, 'utf8');
console.log('SUCCESS: resources/glossary/layout.tsx created.');