const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\ConversionBooster.tsx', 'utf8');

// Fix 1 — Remove !isMobile from scroll banner so it shows on mobile too
content = content.replace(
  '{showScrollBanner && !scrollBannerDismissed && !isMobile && (',
  '{showScrollBanner && !scrollBannerDismissed && !menuOpen && ('
);

// Fix 2 — Fix duplicate display property on visitor count
content = content.replace(
  `display: menuOpen ? 'none' : 'flex', display: isMobile ? 'none' : 'flex',`,
  `display: menuOpen || isMobile ? 'none' : 'flex',`
);

// Fix 3 — Make banner padding smaller on mobile and text shorter
content = content.replace(
  `padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap',`,
  `padding: isMobile ? '10px 16px' : '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap',`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\ConversionBooster.tsx', content, 'utf8');
console.log('SUCCESS: ConversionBooster — scroll banner now shows on mobile, hidden when menu open');