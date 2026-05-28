const fs = require('fs');
const content = fs.readFileSync('src/app/demo/page.tsx', 'utf8');
const lines = content.split('\n');
lines.forEach((line, i) => console.log(i + 1, line));