const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\auth\\google\\callback\\route.ts', 'utf8');

content = content.replace(
  `redirect_uri: 'https://www.traffikfuel.com/api/auth/google/callback'`,
  `redirect_uri: 'https://www.traffikora.com/api/auth/google/callback'`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\auth\\google\\callback\\route.ts', content, 'utf8');
console.log('SUCCESS: Google callback route fixed to traffikora.com');