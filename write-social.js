const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const oldCode = `var deadline = new Date();
      deadline.setDate(deadline.getDate() + 2);`;

const newCode = `var deadline = new Date('2026-06-15T23:59:59');`;

if (!content.includes(oldCode)) {
  console.log('ERROR: Could not find the countdown code to replace. No changes made.');
  process.exit(1);
}

content = content.replace(oldCode, newCode);
fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: Countdown timer fixed. Target date: June 15, 2026.');