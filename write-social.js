const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Find and fix the 7 days free table row - trying different quote styles
content = content.replace(/&#10003; 7 days free/g, '&#10003; Free plan forever');
content = content.replace(/7 days free/g, 'Free plan forever');

fs.writeFileSync(filePath, content, 'utf8');

const updated = fs.readFileSync(filePath, 'utf8');
console.log('7 days free:', updated.includes('7 days free') ? 'STILL THERE' : 'REMOVED');
console.log('SUCCESS');