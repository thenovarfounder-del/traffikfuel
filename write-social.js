const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Remove the duplicate stray proof items that got left behind
content = content.replace(/<span class="proof-txt">Free to start<\/span><div class="proof-pip"><\/div>\s*<span class="proof-txt">Free plan available<\/span>/g, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: duplicates removed');