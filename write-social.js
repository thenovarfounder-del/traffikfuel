const fs = require('fs');

let content = fs.readFileSync('src/app/page.tsx', 'utf8');
content = content.replace(
  '.eyebrow-text{background:linear-gradient(90deg,#fff 50%,#E8610A);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}',
  '.eyebrow-text{background:linear-gradient(90deg,#fff 70%,rgba(232,97,10,0.5));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}'
);
fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('OK: eyebrow text updated');