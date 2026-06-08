const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\connect\\twitter\\page.tsx', 'utf8');

content = content.replace(
  `const clientId = 'dWs2bTJBNzdBekNTalRZRURnTmU6MTpjaQ'`,
  `const clientId = process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID || 'n0xPJir2TtJ5vCiiy6MEcouMS'`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\connect\\twitter\\page.tsx', content, 'utf8');
console.log('SUCCESS: Twitter connect page — client ID fixed');