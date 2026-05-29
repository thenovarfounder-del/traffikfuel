const fs = require('fs');
const path = require('path');

const layoutPath = path.join('src', 'app', 'layout.tsx');
let layout = fs.readFileSync(layoutPath, 'utf8');

// Remove next/font import line
layout = layout.replace(/import \{ Playfair_Display, DM_Sans \} from 'next\/font\/google'\r?\n/g, '');

// Remove const playfair and const dmSans lines
layout = layout.replace(/const playfair = Playfair_Display\([^)]*\}\)\)\r?\n/g, '');
layout = layout.replace(/const dmSans = DM_Sans\([^)]*\}\)\)\r?\n/g, '');

// Restore clean html tag
layout = layout.replace(
  "<html lang=\"en\" className={`${playfair.variable} ${dmSans.variable}`}>",
  '<html lang="en">'
);

// Add back the single preload/swap font tags (the 80-score setup)
if (!layout.includes('fonts.googleapis.com')) {
  layout = layout.replace(
    '<meta name="google-site-verification"',
    `<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600;700&display=swap" media="print" onLoad="this.media='all'" />
        <meta name="google-site-verification"`
  );
}

fs.writeFileSync(layoutPath, layout, 'utf8');
console.log('Done: restored 80-score layout');