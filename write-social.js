const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\onboarding\\page.tsx', 'utf8');

content = content.replace('auto_mode: false,', 'auto_mode: true,');

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\onboarding\\page.tsx', content, 'utf8');
console.log('SUCCESS: auto_mode set to true in onboarding');