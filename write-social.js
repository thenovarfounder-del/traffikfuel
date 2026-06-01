const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\why-traffikora\\page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix duplicate "Free Free"
content = content.replace('Start Free Free Today', 'Start Free Today');

// Fix 7-day trial ref
content = content.replace(
  'Free 7-day trial. No no credit card required. Cancel anytime.',
  'Free plan available. No credit card required. Cancel anytime.'
);

// Fix "No no credit card" if it appears elsewhere
content = content.replace(/No no credit card/g, 'No credit card');

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: why-traffikora page fixed');