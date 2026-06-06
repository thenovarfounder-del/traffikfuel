const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', 'utf8');

// Add Agency section to nav array after ACCOUNT section
content = content.replace(
  "{ isSection: true, label: 'ACCOUNT' },",
  "{ isSection: true, label: 'AGENCY' },\n    { href: '/dashboard/agency', icon: '\\ud83d\\udc65', label: 'Client Management' },\n    { href: '/dashboard/agency/analytics', icon: '\\ud83d\\udcca', label: 'Agency Analytics' },\n    { href: '/dashboard/agency/settings', icon: '\\ud83c\\udfa8', label: 'White-Label' },\n    { isSection: true, label: 'ACCOUNT' },"
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx', content, 'utf8');
console.log('SUCCESS: Agency nav links added to sidebar');