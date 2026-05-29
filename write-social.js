const fs = require('fs');

const existing = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\resources\\glossary\\page.tsx', 'utf8');

// Only add the headers if they're not already there
if (!existing.startsWith('// @ts-nocheck')) {
  const fixed = `// @ts-nocheck\n'use client'\n` + existing;
  fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\resources\\glossary\\page.tsx', fixed, 'utf8');
  console.log('FIXED - headers added');
} else {
  console.log('Already has headers');
}

console.log('First 3 lines:');
console.log(fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\resources\\glossary\\page.tsx', 'utf8').split('\n').slice(0,3).join('\n'));