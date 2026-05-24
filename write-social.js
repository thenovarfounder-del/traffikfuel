const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Find the hardcoded footer and replace with Footer component
const footerStart = content.indexOf('<footer style="background:#111');
const footerEnd = content.indexOf('</footer>') + '</footer>'.length;

if (footerStart !== -1 && footerEnd !== -1) {
  content = content.slice(0, footerStart) + '<Footer />' + content.slice(footerEnd);
  fs.writeFileSync('src/app/page.tsx', content, 'utf8');
  console.log('Done: hardcoded footer replaced with Footer component.');
} else {
  console.log('Footer not found - checking file...');
  console.log('Looking for footer at index:', content.indexOf('<footer'));
}