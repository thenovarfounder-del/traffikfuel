const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\content\\boost\\route.ts', 'utf8');

content = content.replace(
  "model: 'claude-opus-4-5-20251101'",
  "model: 'claude-sonnet-4-20250514'"
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\content\\boost\\route.ts', content, 'utf8');
console.log('SUCCESS: Boost route model fixed to claude-sonnet-4-20250514');