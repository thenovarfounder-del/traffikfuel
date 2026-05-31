// @ts-nocheck
const fs = require('fs');
const path = require('path');

const layoutPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx');
let content = fs.readFileSync(layoutPath, 'utf8');

// Find the billing line and add agents after it
const billingLine = `{ href: '/dashboard/billing', icon: '`;
const agentsEntry = `, label: 'AI Agents' },`;

// Replace Support entry to insert Agents before it
content = content.replace(
  `{ href: '/dashboard/support', `,
  `{ href: '/dashboard/agents', icon: '🤖', label: 'AI Agents' },
    { href: '/dashboard/support', `
);

fs.writeFileSync(layoutPath, content, 'utf8');
console.log('DONE - AI Agents added to sidebar before Support');