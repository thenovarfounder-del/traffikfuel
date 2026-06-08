const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', 'utf8');

// Fix desktop sidebar email color
content = content.replace(
  `<div style={{ fontSize: '11px', color: '#555', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email}</div>`,
  `<div style={{ fontSize: '11px', color: '#ccc', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{email}</div>`
);

// Fix mobile sidebar email color
content = content.replace(
  `<div style={{ fontSize: '11px', color: '#555', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif' }}>{email}</div>`,
  `<div style={{ fontSize: '11px', color: '#ccc', marginBottom: '8px', fontFamily: 'DM Sans, sans-serif' }}>{email}</div>`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', content, 'utf8');
console.log('SUCCESS: Dashboard sidebar email color brightened to #ccc');