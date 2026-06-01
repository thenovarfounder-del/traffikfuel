const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\components\\Footer.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Add Free Plan link before Pricing in Company section
content = content.replace(
  '<div style={{ marginBottom: \'10px\' }}><Link href="/pricing" style={{ fontFamily: "\'DM Sans\', sans-serif", fontSize: \'14px\', color: \'#ccc\', textDecoration: \'none\' }}>Pricing</Link></div>',
  '<div style={{ marginBottom: \'10px\' }}><Link href="/signup?plan=free" style={{ fontFamily: "\'DM Sans\', sans-serif", fontSize: \'14px\', color: \'#E8610A\', textDecoration: \'none\', fontWeight: 600 }}>Free Plan</Link></div>\n            <div style={{ marginBottom: \'10px\' }}><Link href="/pricing" style={{ fontFamily: "\'DM Sans\', sans-serif", fontSize: \'14px\', color: \'#ccc\', textDecoration: \'none\' }}>Pricing</Link></div>'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: Free Plan link added to footer');