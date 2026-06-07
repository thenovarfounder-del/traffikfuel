const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\page.tsx', 'utf8');

// Fix font import
content = content.replace(
  "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');",
  "@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');"
);

// Fix greeting — Orbitron font, no period
content = content.replace(
  `<h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: isMobile ? '26px' : '36px', fontWeight: 800, margin: '0 0 8px 0', letterSpacing: '-1.5px', lineHeight: 1.05, textTransform: 'none' }}>
              {getGreeting()}, <span style={{ color: '#E8610A' }}>{firstName}.</span>
            </h1>`,
  `<h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: isMobile ? '22px' : '32px', fontWeight: 900, margin: '0 0 8px 0', letterSpacing: '1px', lineHeight: 1.1, textTransform: 'uppercase' }}>
              {getGreeting()}, <span style={{ color: '#E8610A' }}>{firstName}</span>
            </h1>`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\page.tsx', content, 'utf8');
console.log('SUCCESS: Dashboard greeting — Orbitron font, no period, futuristic');