const fs = require('fs');

let home = fs.readFileSync('src/app/page.tsx', 'utf8');

home = home.replace(
  `.plan{background:#111;padding:28px 20px;position:relative;border-radius:14px;border:1px solid rgba(255,255,255,0.12);display:flex;flex-direction:column;transition:border-color 0.2s}`,
  `.plan{background:#111;padding:28px 20px;position:relative;border-radius:14px;border:1px solid rgba(255,255,255,0.35);display:flex;flex-direction:column;transition:border-color 0.2s}`
);

home = home.replace(
  `.plan:hover{border-color:rgba(255,255,255,0.28)}`,
  `.plan:hover{border-color:rgba(255,255,255,0.55)}`
);

fs.writeFileSync('src/app/page.tsx', home);
console.log('Done - ' + (home.includes('rgba(255,255,255,0.35)') ? 'SUCCESS' : 'FAILED'));