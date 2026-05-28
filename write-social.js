const fs = require('fs');

const filePath = 'src/app/demo/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  /href=['"]#['"]/g,
  "href='/signup'"
);

fs.writeFileSync(filePath, content);
console.log('Done -- demo page trial button now links to /signup');