const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\components\\Nav.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Add usePathname import
content = content.replace(
  "import Link from 'next/link'",
  "import Link from 'next/link'\nimport { usePathname } from 'next/navigation'"
);

// Add pathname hook after export default function Nav() {
content = content.replace(
  'export default function Nav() {\n  return (',
  "export default function Nav() {\n  const pathname = usePathname()\n  const isHome = pathname === '/'\n  return ("
);

// Hide Home link on homepage - desktop
content = content.replace(
  '<Link href="/" style={{ color: \'#111\', textDecoration: \'none\', fontSize: \'14px\', fontWeight: 500 }}>Home</Link>',
  '{!isHome && <Link href="/" style={{ color: \'#111\', textDecoration: \'none\', fontSize: \'14px\', fontWeight: 500 }}>Home</Link>}'
);

// Hide Home link on homepage - mobile
content = content.replace(
  '<a href="/">Home</a>',
  '{!isHome && <a href="/">Home</a>}'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: Home link hidden on homepage');