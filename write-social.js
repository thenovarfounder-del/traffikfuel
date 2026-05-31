// @ts-nocheck
const fs = require('fs');
const path = require('path');

const layoutPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\layout.tsx');

let content = fs.readFileSync(layoutPath, 'utf8');

const cookieyesScript = `
      {/* CookieYes Banner */}
      <script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/a2449444538b162a3443686343550cec/script.js"
      />`;

// Add script to the <head> section
if (content.includes('<head>')) {
  content = content.replace('<head>', `<head>${cookieyesScript}`);
} else if (content.includes('<Head>')) {
  content = content.replace('<Head>', `<Head>${cookieyesScript}`);
} else {
  // If no head tag, add after the opening return or metadata export
  content = content.replace(
    'export const metadata',
    `// CookieYes installed\nexport const metadata`
  );
  console.log('WARNING: Could not find <head> tag. Please check layout.tsx manually.');
}

fs.writeFileSync(layoutPath, content, 'utf8');
console.log('DONE - CookieYes script added to layout.tsx');