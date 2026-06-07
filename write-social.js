const fs = require('fs');

let page = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', 'utf8');

page = page.replace(
  `<span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 24px', fontSize: '11px', color: '#555', fontWeight: 500, whiteSpace: 'nowrap', fontFamily: 'DM Sans, sans-serif' }}>`,
  `<span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 24px', fontSize: '12px', color: '#ffffff', fontWeight: 600, whiteSpace: 'nowrap', fontFamily: 'DM Sans, sans-serif' }}>`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', page, 'utf8');
console.log('SUCCESS: Cities ticker — bright white #ffffff text');