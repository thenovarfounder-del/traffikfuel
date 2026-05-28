const fs = require('fs');
let content = fs.readFileSync('src/app/demo/page.tsx', 'utf8');
content = content.replaceAll("href='/'", "href='/signup'");
content = content.replaceAll('href="/"', 'href="/signup"');
content = content.replaceAll("href='#'", "href='/signup'");
content = content.replaceAll('href="#"', 'href="/signup"');
fs.writeFileSync('src/app/demo/page.tsx', content);
console.log('Done');