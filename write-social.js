const fs = require('fs');

// Remove Instagram from sidebar nav
let layout = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', 'utf8');
layout = layout.replace(
  `    { href: '/dashboard/connect/instagram', icon: '\ud83d\udcf8', label: 'Instagram' },`,
  ``
);
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', layout, 'utf8');
console.log('SUCCESS: Instagram removed from sidebar');

// Remove Instagram from onboarding
let onboarding = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\onboarding\\page.tsx', 'utf8');
onboarding = onboarding.replace(
  `  { id: 'instagram', label: 'Instagram', color: '#E1306C', icon: '\ud83d\udcf8' },`,
  ``
);
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\onboarding\\page.tsx', onboarding, 'utf8');
console.log('SUCCESS: Instagram removed from onboarding');

// Remove Instagram from settings platforms
let settings = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\settings\\page.tsx', 'utf8');
settings = settings.replace(
  `{ id:"instagram", label:"Instagram", color:"#E1306C" },`,
  ``
);
settings = settings.replace(
  `{ id:"instagram", label:"Instagram", color:"#E1306C"},`,
  ``
);
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\settings\\page.tsx', settings, 'utf8');
console.log('SUCCESS: Instagram removed from settings');

// Remove Instagram from homepage if exists
let homepage = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', 'utf8');
if (homepage.includes('instagram')) {
  homepage = homepage.replace(/\{[^}]*instagram[^}]*\},?\s*/gi, '');
  fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', homepage, 'utf8');
  console.log('SUCCESS: Instagram removed from homepage');
} else {
  console.log('SKIPPED: Instagram not found in homepage');
}

console.log('ALL DONE - Instagram hidden across platform');