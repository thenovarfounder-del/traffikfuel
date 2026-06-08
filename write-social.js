const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Breadcrumb.tsx', 'utf8');

// Fix connect breadcrumb to point to dashboard
content = content.replace(
  `  'connect': 'Connections',`,
  `  'connect': 'Dashboard',`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Breadcrumb.tsx', content, 'utf8');
console.log('SUCCESS: Breadcrumb connect link fixed');