const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Nav.tsx', 'utf8');

// Add Affiliates link to desktop nav after Contact
content = content.replace(
  "<Link href=\"/contact\" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Contact</Link>",
  "<Link href=\"/contact\" style={{ color: '#111', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Contact</Link>\n          <Link href=\"/affiliates\" style={{ color: '#E8610A', textDecoration: 'none', fontSize: '14px', fontWeight: 700, background: 'rgba(232,97,10,0.08)', border: '1px solid rgba(232,97,10,0.3)', padding: '5px 12px', borderRadius: '20px' }}>Affiliates</Link>"
);

// Add Affiliates link to mobile menu after Contact
content = content.replace(
  "<a href=\"/contact\">Contact</a>",
  "<a href=\"/contact\">Contact</a>\n        <a href=\"/affiliates\" className=\"orange\">Affiliates \u2014 Earn 30%</a>"
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Nav.tsx', content, 'utf8');
console.log('SUCCESS: Nav.tsx — Affiliates link added desktop and mobile');