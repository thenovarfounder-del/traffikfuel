const fs = require('fs');
const path = 'src/components/ConversionBooster.tsx';
let content = fs.readFileSync(path, 'utf8');

// Hide visitor count on mobile
content = content.replace(
  "{ position: 'fixed', bottom: '90px', left: '16px', zIndex: 9990,",
  "{ position: 'fixed', bottom: '90px', left: '16px', zIndex: 9990, display: isMobile ? 'none' : 'flex',"
);

// Remove the existing display:flex from the same style
content = content.replace(
  "display: isMobile ? 'none' : 'flex', display: 'flex', alignItems:",
  "display: isMobile ? 'none' : 'flex', alignItems:"
);

fs.writeFileSync(path, content);
console.log('SUCCESS - visitor count hidden on mobile');