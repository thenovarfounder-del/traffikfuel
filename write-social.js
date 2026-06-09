const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\connect\\google\\page.tsx', 'utf8');

content = content.replace(
  `const clientId = '626240603555-8d1t7t137ac0gmtl23rchrdc5miv7sfk.apps.googleusercontent.com'`,
  `const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '626240603555-54ics7fvsqud63j9nl38mu8lrcqbu3ag.apps.googleusercontent.com'`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\connect\\google\\page.tsx', content, 'utf8');
console.log('SUCCESS: Google connect page updated with new client ID');