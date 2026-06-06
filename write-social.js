const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\page.tsx', 'utf8');

// Fix 1: Add trial to PLAN_ORDER
content = content.replace(
  "const PLAN_ORDER = ['free', 'past_due', 'starter', 'pro', 'agency', 'enterprise']",
  "const PLAN_ORDER = ['free', 'trial', 'past_due', 'starter', 'pro', 'agency', 'enterprise']"
);

// Fix 2: Treat trial same as free for layout
content = content.replace(
  "const isFree = userStatus === 'free'",
  "const isFree = userStatus === 'free' || userStatus === 'trial'"
);

// Fix 3: Blog usage check for trial users
content = content.replace(
  "if (status === 'free') {",
  "if (status === 'free' || status === 'trial') {"
);

// Fix 4: Upgrade button text orange in upgrade section
content = content.replace(
  "'0 4px 16px rgba(232,97,10,0.3)' }}>\n                  Upgrade to Starter",
  "'0 4px 16px rgba(232,97,10,0.3)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>\n                  Upgrade to Starter"
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\page.tsx', content, 'utf8');
console.log('SUCCESS: trial status fixed in dashboard');