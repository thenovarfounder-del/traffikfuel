const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\content\\blog\\page.tsx', 'utf8');

content = content.replace(
  `"                        <div style={{ fontSize:'10px', color:'#aaa', fontFamily:'DM Sans, sans-serif', marginTop:'2px', fontWeight:600 }}>{labels[key] || key}</div>",`,
  `"                        <div style={{ fontSize:'10px', color:'#ffffff', fontFamily:'DM Sans, sans-serif', marginTop:'2px', fontWeight:700 }}>{labels[key] || key}</div>",`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\content\\blog\\page.tsx', content, 'utf8');
console.log('SUCCESS: Score breakdown labels bright white');