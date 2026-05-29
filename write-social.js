const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/deadline\.setHours\(deadline\.getHours\(\)\s*\+\s*\d+\);\s*/g, '');
content = content.replace(/deadline\.setMinutes\(deadline\.getMinutes\(\)\s*\+\s*\d+\);\s*/g, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: Extra deadline lines removed.');