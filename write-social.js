const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\features\\page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix duplicate "Free Free"
content = content.replace('Start Free Free Today', 'Start Free Today');

// Fix old trial language
content = content.replace(
  'Free plan available. No charge until day 8. Cancel anytime with one click.',
  'Free plan available. No credit card required. Cancel anytime with one click.'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: features page fixed');