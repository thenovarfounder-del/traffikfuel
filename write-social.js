const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Breadcrumb.tsx', 'utf8');

// Fix 1 — content folder goes to dashboard not /dashboard/content (404)
content = content.replace(
  `  'content': 'Content',`,
  `  'content': 'Dashboard',`
);

// Fix 2 — Remove duplicate dashboard in breadcrumb
// When path is /dashboard/connect/google it shows Dashboard > Dashboard > Google
// Fix: skip the segment if its href is same as previous
content = content.replace(
  `  const crumbs = segments.map((seg, i) => ({
    label: LABELS[seg] || seg.charAt(0).toUpperCase() + seg.slice(1),
    href: '/' + segments.slice(0, i + 1).join('/'),
    isLast: i === segments.length - 1
  }))`,
  `  const allCrumbs = segments.map((seg, i) => ({
    label: LABELS[seg] || seg.charAt(0).toUpperCase() + seg.slice(1),
    href: '/' + segments.slice(0, i + 1).join('/'),
    isLast: i === segments.length - 1
  }))
  // Remove duplicate labels (e.g. Dashboard > Dashboard)
  const crumbs = allCrumbs.filter((crumb, i) => {
    if (i === 0) return true
    return crumb.label !== allCrumbs[i - 1].label
  })`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Breadcrumb.tsx', content, 'utf8');
console.log('SUCCESS: Breadcrumb — content 404 fixed, duplicate dashboard removed');