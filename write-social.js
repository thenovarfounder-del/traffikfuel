// @ts-nocheck
const fs = require('fs');
const path = require('path');

const layoutPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx');
let content = fs.readFileSync(layoutPath, 'utf8');

// Add Agents link after Billing
content = content.replace(
  `{ href: '/dashboard/billing', icon: '🗂', label: 'Billing' },`,
  `{ href: '/dashboard/billing', icon: '🗂', label: 'Billing' },
    { href: '/dashboard/agents', icon: '🤖', label: 'AI Agents' },`
);

fs.writeFileSync(layoutPath, content, 'utf8');
console.log('DONE - AI Agents link added to sidebar');