const fs = require('fs');

let home = fs.readFileSync('src/app/page.tsx', 'utf8');

// Brighten the subtext paragraph
home = home.replace(
  `Every day without Traffikora is a day your competitor gets the lead instead. Start free &mdash; no credit card &mdash; be live in 5 minutes.</p>`,
  `Every day without Traffikora is a day your competitor gets the lead instead. Start free &mdash; no credit card &mdash; be live in 5 minutes.</p>`
);

// Brighten the pricing-sub color
home = home.replace(
  `.pricing-sub{font-size:15px;color:#555;margin-top:14px;font-weight:300;letter-spacing:.02em}`,
  `.pricing-sub{font-size:15px;color:#ccc;margin-top:14px;font-weight:300;letter-spacing:.02em}`
);

// Brighten the 4 checkmark items
home = home.replace(
  `<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#666"><span style="color:#E8610A;font-weight:700">&#10003;</span>Free plan &mdash; no card ever</span>
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#666"><span style="color:#E8610A;font-weight:700">&#10003;</span>Live in under 5 minutes</span>
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#666"><span style="color:#E8610A;font-weight:700">&#10003;</span>Cancel anytime &mdash; one click</span>
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#666"><span style="color:#E8610A;font-weight:700">&#10003;</span>AI running 24/7 from day one</span>`,
  `<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#ddd"><span style="color:#E8610A;font-weight:700">&#10003;</span>Free plan &mdash; no card ever</span>
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#ddd"><span style="color:#E8610A;font-weight:700">&#10003;</span>Live in under 5 minutes</span>
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#ddd"><span style="color:#E8610A;font-weight:700">&#10003;</span>Cancel anytime &mdash; one click</span>
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#ddd"><span style="color:#E8610A;font-weight:700">&#10003;</span>AI running 24/7 from day one</span>`
);

fs.writeFileSync('src/app/page.tsx', home);
console.log('Done - ' + (home.includes('color:#ccc') ? 'SUCCESS' : 'FAILED'));