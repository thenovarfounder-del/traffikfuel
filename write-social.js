const fs = require('fs');
const path = 'src/app/onboarding/page.tsx';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(
  "const city = bp?.phone || ''",
  "const city = bp?.city || ''"
);
fs.writeFileSync(path, content);
console.log('SUCCESS - city field fixed');