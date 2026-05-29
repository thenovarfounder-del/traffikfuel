const fs = require('fs');
const path = require('path');

const cssPath = path.join('src', 'app', 'globals.css');
let content = fs.readFileSync(cssPath, 'utf8');

const fontImport = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap');\n\n`;

if (!content.includes('fonts.googleapis.com')) {
  content = fontImport + content;
}

fs.writeFileSync(cssPath, content, 'utf8');
console.log('Done: added font import to globals.css');