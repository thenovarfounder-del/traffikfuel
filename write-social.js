const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Brighten platform chips in hero
content = content.replace(
  '.hchip{font-size:10px;background:#222;border:1px solid #333;color:#999;padding:3px 8px;border-radius:3px}',
  '.hchip{font-size:10px;background:#2a2a2a;border:1px solid #555;color:#ffffff;padding:3px 8px;border-radius:3px}'
);

// Brighten powered by logos
content = content.replace(
  '.powered-logo{font-size:10px;color:#666;padding:4px 10px;border:1px solid #2a2a2a;border-radius:3px}',
  '.powered-logo{font-size:10px;color:#cccccc;padding:4px 10px;border:1px solid #555;border-radius:3px}'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: chips brightened');