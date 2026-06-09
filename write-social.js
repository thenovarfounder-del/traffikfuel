const fs = require('fs');

// Fix connect page — remove business.manage scope
let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\connect\\google\\page.tsx', 'utf8');

content = content.replace(
  `'https://www.googleapis.com/auth/userinfo.email',\n      'https://www.googleapis.com/auth/userinfo.profile',\n      'https://www.googleapis.com/auth/webmasters.readonly',\n      'https://www.googleapis.com/auth/business.manage',`,
  `'https://www.googleapis.com/auth/userinfo.email',\n      'https://www.googleapis.com/auth/userinfo.profile',\n      'https://www.googleapis.com/auth/webmasters.readonly',`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\connect\\google\\page.tsx', content, 'utf8');
console.log('SUCCESS: business.manage scope removed');

// Fix callback route — remove business.manage scope reference
let callback = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\auth\\google\\callback\\route.ts', 'utf8');
callback = callback.replace(
  `'https://www.googleapis.com/auth/business.manage',`,
  ``
);
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\auth\\google\\callback\\route.ts', callback, 'utf8');
console.log('SUCCESS: business.manage removed from callback');