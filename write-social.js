const fs = require('fs');
const path = require('path');

const base = 'C:\\Users\\randy\\traffikfuel\\src\\app';

// Compare and VS pages already have visible HTML FAQ sections
// Remove FAQPage from their layout.tsx — keep SoftwareApplication only
const compareslugs = [
  'traffikora-vs-birdeye',
  'traffikora-vs-brightlocal',
  'traffikora-vs-constant-contact',
  'traffikora-vs-hootsuite',
  'traffikora-vs-hubspot',
  'traffikora-vs-later',
  'traffikora-vs-mailchimp',
  'traffikora-vs-reputation-com',
  'traffikora-vs-semrush',
  'traffikora-vs-sprout-social',
  'traffikora-vs-vendasta',
  'traffikora-vs-yext',
];

const vsSlugs = ['hubspot', 'hootsuite', 'buffer', 'later'];

function removeFaqFromLayout(layoutPath, slug) {
  if (!fs.existsSync(layoutPath)) {
    console.log('SKIPPED (no layout):', slug);
    return;
  }
  let content = fs.readFileSync(layoutPath, 'utf8');
  // Remove any JSON.stringify block that contains FAQPage
  content = content.replace(/,?\s*\{\\n\s*"@context":\s*"https:\\\/\\\/schema\.org",[^}]*"@type":\s*"FAQPage"[\s\S]*?\}(?=\s*\]|\s*\))/g, '');
  // Simpler approach — rebuild without FAQPage entirely
  // Find all ld+json script tags and filter out FAQPage ones
  const scriptRegex = /<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: ("[^"]*") \}\} \/>/g;
  let match;
  let newContent = content;
  const toRemove = [];
  while ((match = scriptRegex.exec(content)) !== null) {
    const jsonStr = JSON.parse(match[1]);
    const obj = JSON.parse(jsonStr);
    if (obj['@type'] === 'FAQPage') {
      toRemove.push(match[0]);
    }
  }
  toRemove.forEach(tag => {
    newContent = newContent.replace(tag, '');
  });
  fs.writeFileSync(layoutPath, newContent, 'utf8');
  console.log('FAQPage removed from layout:', slug);
}

compareslugs.forEach(slug => {
  removeFaqFromLayout(path.join(base, 'compare', slug, 'layout.tsx'), slug);
});

vsSlugs.forEach(slug => {
  removeFaqFromLayout(path.join(base, 'vs', slug, 'layout.tsx'), slug);
});

console.log('\nDONE — FAQPage schema removed from all compare and vs page layouts');