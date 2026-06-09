const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\content\\searchconsole\\page.tsx', 'utf8');

content = content.replace(
  `const redirectUri = encodeURIComponent('https://www.traffikfuel.com/api/auth/google/callback')`,
  `const redirectUri = encodeURIComponent('https://www.traffikora.com/api/auth/google/callback')`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\content\\searchconsole\\page.tsx', content, 'utf8');
console.log('SUCCESS: Search Console page fixed to traffikora.com');