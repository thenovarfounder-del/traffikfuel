const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Footer.tsx', 'utf8');

content = content.replace(
  `<div style={{ marginBottom: '10px' }}><Link href="/contact" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Contact Us</Link></div>`,
  `<div style={{ marginBottom: '10px' }}><Link href="/contact" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#ccc', textDecoration: 'none' }}>Contact Us</Link></div>
            <div style={{ marginBottom: '10px' }}><Link href="/affiliates" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '14px', color: '#E8610A', textDecoration: 'none', fontWeight: 700 }}>Affiliates \u2014 Earn 30%</Link></div>`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Footer.tsx', content, 'utf8');
console.log('SUCCESS: Footer.tsx — Affiliates link added to Company section');