const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\page.tsx', 'utf8');

// Replace the Google Fonts import to add Space Grotesk
content = content.replace(
  "@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');",
  "@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700;800&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');"
);

// Replace the greeting h1 font and style
content = content.replace(
  `<h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: isMobile ? '28px' : '38px', fontWeight: 700, margin: '0 0 8px 0', letterSpacing: '-1px', lineHeight: 1.1 }}>
              {getGreeting()}, <em style={{ color: '#E8610A', fontStyle: 'italic' }}>{firstName}.</em>
            </h1>`,
  `<h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: isMobile ? '26px' : '36px', fontWeight: 800, margin: '0 0 8px 0', letterSpacing: '-1.5px', lineHeight: 1.05, textTransform: 'none' }}>
              {getGreeting()}, <span style={{ color: '#E8610A' }}>{firstName}.</span>
            </h1>`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\page.tsx', content, 'utf8');
console.log('SUCCESS: Dashboard greeting font changed to Space Grotesk — bold AI/tech feel');