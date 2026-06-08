const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\content\\boost\\route.ts', 'utf8');

content = content.replace(
  "model: 'claude-sonnet-4-20250514'",
  "model: 'claude-sonnet-4-5'"
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\content\\boost\\route.ts', content, 'utf8');
console.log('SUCCESS: Boost route model fixed to claude-sonnet-4-5');