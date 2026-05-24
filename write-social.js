const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Check if Footer import exists, add if not
if (!content.includes("import Footer from '@/components/Footer'")) {
  content = content.replace(
    "import { useEffect } from 'react'",
    "import { useEffect } from 'react'\nimport Footer from '@/components/Footer'"
  );
}

// Find the position of <Footer /> inside the html string and remove it
// The file ends with: <Footer />` }} />\n    </main>\n  )\n}
const oldEnding = "<Footer />\` }} />\n    </main>";
const newEnding = "\` }} />\n      <Footer />\n    </main>";

if (content.includes(oldEnding)) {
  content = content.replace(oldEnding, newEnding);
  console.log('Replaced successfully');
} else {
  console.log('Pattern not found - logging end of file:');
  console.log(JSON.stringify(content.slice(-200)));
}

fs.writeFileSync('src/app/page.tsx', content, 'utf8');