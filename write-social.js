const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\signup\\page.tsx';

let content = fs.readFileSync(filePath, 'utf8');
content = content.replace("router.push('/dashboard')", "router.push('/onboarding')");
fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: signup now redirects to /onboarding');