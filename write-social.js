const fs = require('fs');

let home = fs.readFileSync('src/app/page.tsx', 'utf8');

// Fix headline and subtext
home = home.replace(
  `No surprises. <em>Ever.</em></div><p class="pricing-sub">Free plan available &mdash; No card needed &mdash; Paid plans from $47/mo &mdash; Cancel anytime</p>`,
  `Stop losing leads.<br><em>Start growing today.</em></div>
<p class="pricing-sub" style="font-size:16px;color:#777;margin-top:16px;max-width:600px;margin-left:auto;margin-right:auto;line-height:1.75">Every day without Traffikora is a day your competitor gets the lead instead. Start free &mdash; no credit card &mdash; be live in 5 minutes.</p>
<div style="display:flex;gap:28px;justify-content:center;margin-top:22px;flex-wrap:wrap">
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#666"><span style="color:#E8610A;font-weight:700">&#10003;</span>Free plan &mdash; no card ever</span>
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#666"><span style="color:#E8610A;font-weight:700">&#10003;</span>Live in under 5 minutes</span>
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#666"><span style="color:#E8610A;font-weight:700">&#10003;</span>Cancel anytime &mdash; one click</span>
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#666"><span style="color:#E8610A;font-weight:700">&#10003;</span>AI running 24/7 from day one</span>
</div>`
);

// Fix card borders
home = home.replace(
  `.plan{background:#111;padding:28px 20px;position:relative;border-radius:14px;border:1px solid #1e1e1e;display:flex;flex-direction:column;transition:border-color 0.2s}`,
  `.plan{background:#111;padding:28px 20px;position:relative;border-radius:14px;border:1px solid rgba(255,255,255,0.12);display:flex;flex-direction:column;transition:border-color 0.2s}`
);

home = home.replace(
  `.plan:hover{border-color:#333}`,
  `.plan:hover{border-color:rgba(255,255,255,0.28)}`
);

fs.writeFileSync('src/app/page.tsx', home);
console.log('Done - ' + (home.includes('Stop losing leads') ? 'SUCCESS' : 'FAILED'));