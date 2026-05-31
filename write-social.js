// @ts-nocheck
const fs = require('fs');
const path = require('path');

const billingPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\billing\\page.tsx');
let content = fs.readFileSync(billingPath, 'utf8');

// Replace the Manage Billing button with disabled version
content = content.replace(
  /cursor: 'pointer', fontSize: '14px', fontWeight: '600' \}\}>\s*Manage Billing\s*<\/button>/,
  `cursor: 'not-allowed', fontSize: '14px', fontWeight: '600', opacity: '0.6' }}>
                Manage Billing (Phase 4)
              </button>`
);

fs.writeFileSync(billingPath, content, 'utf8');
console.log('DONE - Manage Billing button fixed');