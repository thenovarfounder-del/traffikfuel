const fs = require('fs');

let home = fs.readFileSync('src/app/page.tsx', 'utf8');

// Remove Watch 2-Min Demo button from hero
home = home.replace(
  `<button class="btn-ghost" onclick="window.location.href='/demo'">&#9654; Watch 2-Min Demo</button>`,
  ``
);

// Remove Watch how it works demo link from hero right panel
home = home.replace(
  `<a class="demo-btn" href="/demo"><div class="demo-play">&#9654;</div><div class="demo-lbl"><span>Watch how it works</span> &mdash; 2 min demo</div></a>`,
  ``
);

fs.writeFileSync('src/app/page.tsx', home);
console.log('Done - ' + (home.includes("Watch 2-Min Demo") ? 'FAILED' : 'SUCCESS — demo removed'));