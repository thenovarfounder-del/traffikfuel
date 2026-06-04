const fs = require('fs');
let content = fs.readFileSync('src/app/dashboard/page.tsx', 'utf8');
content = content.replace("href: '/dashboard/brain'", "href: '/dashboard/scrape'");
fs.writeFileSync('src/app/dashboard/page.tsx', content, 'utf8');
console.log('Business Brain link fixed — now points to /dashboard/scrape');