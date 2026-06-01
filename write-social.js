const fs = require('fs');

let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');

layout = layout.replace(`import CrispChat from '@/components/CrispChat'\n`, '');
layout = layout.replace(`<CrispChat />`, '');

fs.writeFileSync('src/app/layout.tsx', layout);
console.log('Done - ' + (!layout.includes('CrispChat') ? 'SUCCESS' : 'FAILED'));