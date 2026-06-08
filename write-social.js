const fs = require('fs');

let page = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', 'utf8');

page = page.replace(
  `{ href: '#', bg: '#0a66c2', label: 'Traffikora on LinkedIn'`,
  `{ href: 'https://www.linkedin.com/company/traffikora', bg: '#0a66c2', label: 'Traffikora on LinkedIn'`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', page, 'utf8');
console.log('SUCCESS: LinkedIn URL updated on homepage');