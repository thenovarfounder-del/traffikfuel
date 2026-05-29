const fs = require('fs');
const path = require('path');

// Revert globals.css - remove the @import we just added
const cssPath = path.join('src', 'app', 'globals.css');
let css = fs.readFileSync(cssPath, 'utf8');
css = css.replace(/@import url\('https:\/\/fonts\.googleapis\.com[^']*'\);\n\n?/g, '');
fs.writeFileSync(cssPath, css, 'utf8');
console.log('Done: reverted globals.css font import');

// Add fonts back to layout.tsx using next/font/google (truly non-blocking)
const layoutPath = path.join('src', 'app', 'layout.tsx');
let layout = fs.readFileSync(layoutPath, 'utf8');

// Add next/font import at the top after // @ts-nocheck
if (!layout.includes('next/font/google')) {
  layout = layout.replace(
    "import './globals.css'",
    `import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400','700','900'], display: 'swap', variable: '--font-playfair' })
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300','400','500','600','700'], display: 'swap', variable: '--font-dm-sans' })`
  );

  // Add font variables to the html tag
  layout = layout.replace(
    '<html lang="en">',
    '<html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>'
  );
}

fs.writeFileSync(layoutPath, layout, 'utf8');
console.log('Done: added next/font/google to layout.tsx');