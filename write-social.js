const fs = require('fs');

// Fix 1 — Remove Twitter from sidebar nav
let layout = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', 'utf8');
layout = layout.replace(
  `    { href: '/dashboard/connect/twitter', icon: '\ud83d\udc26', label: 'X / Twitter' },`,
  ``
);
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', layout, 'utf8');
console.log('SUCCESS: Twitter removed from sidebar nav');

// Fix 2 — Remove Twitter from business settings platforms
let settings = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\settings\\page.tsx', 'utf8');
settings = settings.replace(
  `{ id:"twitter", label:"X / Twitter", color:"#888" },`,
  ``
);
settings = settings.replace(
  `{ id:"twitter", label:"X / Twitter", color:"#888"},`,
  ``
);
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\settings\\page.tsx', settings, 'utf8');
console.log('SUCCESS: Twitter removed from settings platforms');

// Fix 3 — Remove Twitter from homepage social bar
let page = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', 'utf8');
page = page.replace(
  `{ href: 'https://x.com/traffikora', bg: '#000', label: 'Traffikora on X', svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },`,
  ``
);
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', page, 'utf8');
console.log('SUCCESS: Twitter removed from homepage social bar');

// Fix 4 — Remove Twitter from onboarding platforms
let onboarding = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\onboarding\\page.tsx', 'utf8');
onboarding = onboarding.replace(
  `  { id: 'twitter', label: 'X / Twitter', color: '#555', icon: '\u2715' },`,
  ``
);
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\onboarding\\page.tsx', onboarding, 'utf8');
console.log('SUCCESS: Twitter removed from onboarding');

// Fix 5 — Remove Twitter from breadcrumb labels
let breadcrumb = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Breadcrumb.tsx', 'utf8');
breadcrumb = breadcrumb.replace(
  `  'twitter': 'X / Twitter',`,
  `  'twitter': 'Connections',`
);
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Breadcrumb.tsx', breadcrumb, 'utf8');
console.log('SUCCESS: Twitter breadcrumb updated');

console.log('ALL DONE: Twitter hidden across entire platform');