const fs = require('fs');
const path = require('path');

const dir = path.join('src', 'app', 'resources');
fs.mkdirSync(dir, { recursive: true });

const layoutContent = `export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }`;

fs.writeFileSync(path.join(dir, 'layout.tsx'), layoutContent, 'utf8');
console.log('Done: created src/app/resources/layout.tsx');