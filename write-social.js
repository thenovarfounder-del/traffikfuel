const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\content\\blog\\page.tsx', 'utf8');

content = content.replace(
  `var labels = { wordCount:'Word Count', titleQuality:'Title', headings:'Headings', lists:'Lists', localSeo:'Local SEO', statistics:'Stats', cta:'CTA', paragraphs:'Paragraphs', openingHook:'Hook', keywords:'Keywords' }`,
  `var labels = { wordCount:'Word Count', titleQuality:'Title', headings:'Headings', lists:'Lists', localSeo:'Local SEO', statistics:'Stats', cta:'CTA', paragraphs:'Paragraphs', openingHook:'Hook', keywords:'Keywords' }`
);

content = content.replace(
  `"                        <div style={{ fontSize:'9px', color:'#444', fontFamily:'DM Sans, sans-serif', marginTop:'2px' }}>{labels[key] || key}</div>",`,
  `"                        <div style={{ fontSize:'10px', color:'#aaa', fontFamily:'DM Sans, sans-serif', marginTop:'2px', fontWeight:600 }}>{labels[key] || key}</div>",`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\content\\blog\\page.tsx', content, 'utf8');
console.log('SUCCESS: Score breakdown labels brightened to #aaa');