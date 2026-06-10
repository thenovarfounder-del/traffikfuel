const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', 'utf8');

content = content.replace(
  `href: 'https://www.reddit.com/r/traffikora'`,
  `href: 'https://www.reddit.com/user/Traffikora/'`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', content, 'utf8');
console.log('SUCCESS: Reddit link updated to Traffikora user profile');