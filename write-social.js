const fs = require('fs');
const content = fs.readFileSync('src/app/page.tsx', 'utf8');

const withImport = content.replace(
  "import Link from 'next/link'",
  "import Link from 'next/link'\nimport Footer from '@/components/Footer'"
);

const withFooter = withImport.replace(
  /<footer[\s\S]*?<\/footer>/,
  '<Footer />'
);

fs.writeFileSync('src/app/page.tsx', withFooter);
console.log('Done');