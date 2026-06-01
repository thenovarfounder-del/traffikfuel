const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix the proof row - it got mangled, replace the whole thing cleanly
content = content.replace(
  /<div class="hero-proof">[\s\S]*?<\/div>/,
  '<div class="hero-proof"><span class="proof-txt">No agency needed</span><div class="proof-pip"></div><span class="proof-txt">Free to start</span><div class="proof-pip"></div><span class="proof-txt">Free plan available</span><div class="proof-pip"></div><span class="proof-txt">Cancel anytime</span></div>'
);

fs.writeFileSync(filePath, content, 'utf8');

// Check the hero-right is still there
const updated = fs.readFileSync(filePath, 'utf8');
console.log('hero-right present:', updated.includes('hero-right') ? 'YES' : 'MISSING');
console.log('500+ gone:', !updated.includes('500+ businesses') ? 'YES' : 'NO');
console.log('SUCCESS');