const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\calendar\\page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix selected day styling - add orange border
content = content.replace(
  'background: isSelected ? \'#fff8f5\' : \'#fff\', transition: \'background 0.1s\'',
  'background: isSelected ? \'#fff8f5\' : \'#fff\', transition: \'background 0.1s\', outline: isSelected ? \'2px solid #E8610A\' : \'none\', outlineOffset: \'-2px\''
);

// Fix background color - use white instead of gray
content = content.replace(
  'background: \'#f9fafb\', padding: \'32px 24px\'',
  'background: \'#ffffff\', padding: \'32px 24px\''
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: calendar display fixes applied');