// @ts-nocheck
const fs = require('fs');
const path = require('path');

const billingPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\billing\\page.tsx');
let content = fs.readFileSync(billingPath, 'utf8');

content = content.replace(
  `cursor: plan.current ? 'default' : 'pointer', fontSize: '13px', fontWeight: '600' }}>
                  {plan.current ? 'Current Plan' : 'Upgrade'}
                </button>`,
  `cursor: plan.current ? 'default' : 'pointer', fontSize: '13px', fontWeight: '600' }}
                  onClick={() => { if (!plan.current) window.location.href = 'https://www.traffikora.com/pricing' }}>
                  {plan.current ? 'Current Plan' : 'Upgrade'}
                </button>`
);

fs.writeFileSync(billingPath, content, 'utf8');
console.log('DONE - Upgrade buttons linked to pricing page');