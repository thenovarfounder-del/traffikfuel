const fs = require('fs');
const path = require('path');

const dir = path.join('src', 'app', 'resources');
fs.mkdirSync(dir, { recursive: true });

const content = `import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources | Traffikora',
  description: 'Marketing resources, guides, and glossary for small business owners.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
`;

fs.writeFileSync(path.join(dir, 'layout.tsx'), content);
console.log('Done');