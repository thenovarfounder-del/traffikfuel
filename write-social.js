const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Add Footer import if not already there
if (!content.includes("import Footer from '@/components/Footer'")) {
  content = content.replace(
    "import Link from 'next/link'",
    "import Link from 'next/link'\nimport Footer from '@/components/Footer'"
  );
}

// Add Footer before closing fragment if not already there
if (!content.includes('<Footer />')) {
  content = content.replace('</>', '<Footer />\n</>');
}

fs.writeFileSync('src/app/page.tsx', content);
console.log('Done');