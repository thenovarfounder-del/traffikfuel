const fs = require('fs');
const path = require('path');

const solutionsDir = 'C:\\Users\\randy\\traffikfuel\\src\\app\\solutions';
let fixedCount = 0;

function fixFolder(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      fixFolder(fullPath);
    } else if (item === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      if (content.includes('No no credit card')) {
        content = content.replace(/No no credit card/g, 'No credit card');
        changed = true;
      }
      if (content.includes('7-day trial') || content.includes('7 day trial')) {
        content = content.replace(/7-day trial/g, 'free plan');
        content = content.replace(/7 day trial/g, 'free plan');
        changed = true;
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        fixedCount++;
        console.log('Fixed:', fullPath);
      }
    }
  }
}

fixFolder(solutionsDir);
console.log('Total files fixed:', fixedCount);