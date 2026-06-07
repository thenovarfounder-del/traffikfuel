const fs = require('fs');

// Fix 1 — Brighten cities ticker text in page.tsx
let page = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', 'utf8');

page = page.replace(
  `<span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 24px', fontSize: '11px', color: '#555', fontWeight: 500, whiteSpace: 'nowrap', fontFamily: 'DM Sans, sans-serif' }}>`,
  `<span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 24px', fontSize: '12px', color: '#fff', fontWeight: 600, whiteSpace: 'nowrap', fontFamily: 'DM Sans, sans-serif' }}>`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', page, 'utf8');
console.log('SUCCESS: Cities ticker — bright white text');

// Fix 2 — Update affiliates API to thenovar.founder@gmail.com
let affiliates = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\affiliates\\route.ts', 'utf8');
affiliates = affiliates.replace('traffikoratest@yahoo.com', 'thenovar.founder@gmail.com');
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\affiliates\\route.ts', affiliates, 'utf8');
console.log('SUCCESS: Affiliates API — thenovar.founder@gmail.com');

// Fix 3 — Update support API to thenovar.founder@gmail.com
let support = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\support\\route.ts', 'utf8');
support = support.replace('traffikoratest@yahoo.com', 'thenovar.founder@gmail.com');
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\support\\route.ts', support, 'utf8');
console.log('SUCCESS: Support API — thenovar.founder@gmail.com');

// Fix 4 — Update affiliate approve route
let approve = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\affiliates\\approve\\route.ts', 'utf8');
approve = approve.replace(/traffikoratest@yahoo\.com/g, 'thenovar.founder@gmail.com');
approve = approve.replace(/randylevine961@gmail\.com/g, 'thenovar.founder@gmail.com');
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\affiliates\\approve\\route.ts', approve, 'utf8');
console.log('SUCCESS: Affiliate approve route — thenovar.founder@gmail.com');

// Fix 5 — Update Stripe webhook commission email
let webhook = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\webhooks\\stripe\\route.ts', 'utf8');
webhook = webhook.replace(/randylevine961@gmail\.com/g, 'thenovar.founder@gmail.com');
webhook = webhook.replace(/traffikoratest@yahoo\.com/g, 'thenovar.founder@gmail.com');
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\webhooks\\stripe\\route.ts', webhook, 'utf8');
console.log('SUCCESS: Stripe webhook — thenovar.founder@gmail.com');