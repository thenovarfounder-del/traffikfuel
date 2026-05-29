const fs = require('fs');
const path = require('path');

const layoutPath = path.join('src', 'app', 'layout.tsx');
let content = fs.readFileSync(layoutPath, 'utf8');

// Remove the blocking <link rel="stylesheet"> for Google Fonts (line 35 area)
// This is the duplicate that blocks rendering - the preload/print swap on lines 32-33 handles loading
content = content.replace(
  /[ \t]*<link rel="stylesheet" href="https:\/\/fonts\.googleapis\.com\/css2\?family=Playfair[^"]*" \/>\n?/,
  ''
);

// Make sure the preconnect to fonts.googleapis.com exists
if (!content.includes('preconnect" href="https://fonts.googleapis.com"')) {
  content = content.replace(
    '<link rel="preconnect" href="https://fonts.gstatic.com"',
    '<link rel="preconnect" href="https://fonts.googleapis.com" />\n        <link rel="preconnect" href="https://fonts.gstatic.com"'
  );
}

fs.writeFileSync(layoutPath, content, 'utf8');
console.log('Done: removed blocking Google Fonts stylesheet link');