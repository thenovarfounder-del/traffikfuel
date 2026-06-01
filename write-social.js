const fs = require('fs');

let home = fs.readFileSync('src/app/page.tsx', 'utf8');

home = home.replace(
  `Every day without Traffikora is a day your competitor gets the lead instead. Start free &mdash; no credit card &mdash; be live in 5 minutes.</p>`,
  `<span style="color:#E8610A;font-family:'Playfair Display',serif;font-style:italic;font-size:18px;font-weight:700">Every day without Traffikora is a day your competitor gets the lead instead.</span><br><span style="color:#fff;font-size:15px;font-weight:400">Start free &mdash; no credit card &mdash; be live in 5 minutes.</span></p>`
);

fs.writeFileSync('src/app/page.tsx', home);
console.log('Done - ' + (home.includes('Playfair Display') && home.includes('competitor gets the lead') ? 'SUCCESS' : 'FAILED'));