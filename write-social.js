const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Fix the countdown timer - replace dynamic date with fixed June 15 2026
content = content.replace(
  /var deadline = new Date\(\);\s*deadline\.setDate\(deadline\.getDate\(\)\s*\+\s*2\);/,
  "var deadline = new Date('2026-06-15T23:59:59');"
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: Countdown timer fixed to June 15, 2026.');