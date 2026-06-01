const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Nuclear option - replace the entire hero proof row
content = content.replace(
  /<div class="hero-proof">.*?<\/div>/s,
  '<div class="hero-proof"><span class="proof-txt">No agency needed</span><div class="proof-pip"></div><span class="proof-txt">Free to start</span><div class="proof-pip"></div><span class="proof-txt">Free plan available</span><div class="proof-pip"></div><span class="proof-txt">Cancel anytime</span></div>'
);

fs.writeFileSync(filePath, content, 'utf8');

const updated = fs.readFileSync(filePath, 'utf8');
console.log('500+ in hero:', updated.includes('500+ businesses') ? 'STILL THERE' : 'REMOVED');
console.log('SUCCESS');