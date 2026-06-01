const fs = require('fs');

let home = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace pricing section CSS
home = home.replace(
`.pricing-section{background:#fff;padding:44px 40px}
.pricing-head{text-align:center;margin-bottom:26px}
.pricing-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#111;line-height:1.1}
.pricing-h em{color:#E8610A;font-style:italic}
.pricing-sub{font-size:13px;color:#666;margin-top:7px;font-weight:300}
.pricing-grid{display:grid;grid-template-columns:repeat(4,1fr);border:2.5px solid #111;border-radius:14px;overflow:hidden;max-width:1100px;margin:0 auto}
.plan{background:#fff;padding:26px 20px;position:relative}
.plan:not(:last-child){border-right:2.5px solid #111}
.plan-featured{background:#111}
.plan-badge{display:inline-block;background:#E8610A;color:#fff;font-size:10px;letter-spacing:.1em;text-transform:uppercase;padding:4px 12px;border-radius:20px;margin-bottom:10px;font-weight:700}
.plan-name{font-size:11px;letter-spacing:.14em;color:#777;text-transform:uppercase;margin-bottom:10px;font-weight:600}
.plan-name-light{color:#777}
.plan-price{font-family:'Playfair Display',serif;font-size:44px;font-weight:700;color:#111;line-height:1}
.plan-price-light{color:#fff}
.plan-price sup{font-size:18px;font-family:'DM Sans',sans-serif;font-weight:400;vertical-align:super}
.plan-price sub{font-size:12px;color:#777;font-family:'DM Sans',sans-serif;font-weight:300}
.plan-price-light sub{color:#999}
.plan-desc{font-size:13px;color:#666;margin:9px 0 14px;line-height:1.65;font-weight:300}
.plan-desc-light{color:#bbb}
.plan-features{list-style:none;margin-bottom:20px}
.plan-features li{font-size:12px;color:#444;padding:7px 0;border-bottom:1px solid #f0f0f0;display:flex;align-items:flex-start;gap:7px;line-height:1.45;font-weight:400}
.plan-features-light li{color:#ccc;border-bottom-color:#1e1e1e}
.plan-features li::before{content:'✔';color:#E8610A;font-size:11px;flex-shrink:0;margin-top:1px}
.plan-btn{width:100%;padding:13px;border-radius:7px;font-size:13px;font-family:'DM Sans',sans-serif;font-weight:700;cursor:pointer;border:1.5px solid #bbb;background:transparent;color:#555;transition:all .2s}
.plan-btn-featured{background:#E8610A;color:#fff;border-color:#E8610A}`,
`.pricing-section{background:#0a0a0a;padding:60px 40px;position:relative;overflow:hidden}
.pricing-section::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:800px;height:800px;border-radius:50%;background:radial-gradient(circle,rgba(232,97,10,0.07) 0%,transparent 70%);pointer-events:none}
.pricing-head{text-align:center;margin-bottom:48px;position:relative;z-index:1}
.pricing-h{font-family:'Playfair Display',serif;font-size:42px;font-weight:700;color:#fff;line-height:1.1}
.pricing-h em{color:#E8610A;font-style:italic}
.pricing-sub{font-size:14px;color:#555;margin-top:10px;font-weight:300}
.pricing-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;max-width:1280px;margin:0 auto;position:relative;z-index:1}
.plan{background:#111;padding:28px 20px;position:relative;border-radius:14px;border:1px solid #222;display:flex;flex-direction:column;transition:border-color 0.2s}
.plan:hover{border-color:#333}
.plan-featured{background:linear-gradient(160deg,#1a1a1a 0%,#111 100%);border:1px solid #E8610A;box-shadow:0 0 40px rgba(232,97,10,0.15),0 0 80px rgba(232,97,10,0.05);transform:translateY(-8px)}
.plan-badge{display:inline-block;background:linear-gradient(135deg,#E8610A,#ff8c42);color:#fff;font-size:10px;letter-spacing:.12em;text-transform:uppercase;padding:5px 14px;border-radius:20px;margin-bottom:12px;font-weight:700;box-shadow:0 2px 12px rgba(232,97,10,0.4)}
.plan-name{font-size:11px;letter-spacing:.18em;color:#555;text-transform:uppercase;margin-bottom:12px;font-weight:700}
.plan-name-light{color:#555}
.plan-price{font-family:'Playfair Display',serif;font-size:48px;font-weight:700;color:#fff;line-height:1}
.plan-price-light{color:#fff}
.plan-price sup{font-size:18px;font-family:'DM Sans',sans-serif;font-weight:400;vertical-align:super;color:#E8610A}
.plan-price sub{font-size:12px;color:#444;font-family:'DM Sans',sans-serif;font-weight:300}
.plan-price-light sub{color:#555}
.plan-desc{font-size:12px;color:#555;margin:10px 0 16px;line-height:1.7;font-weight:300}
.plan-desc-light{color:#666}
.plan-divider{height:1px;background:linear-gradient(90deg,transparent,#2a2a2a,transparent);margin-bottom:16px}
.plan-features{list-style:none;margin-bottom:24px;flex:1}
.plan-features li{font-size:12px;color:#888;padding:6px 0;border-bottom:1px solid #1a1a1a;display:flex;align-items:flex-start;gap:8px;line-height:1.5;font-weight:400}
.plan-features-light li{color:#999;border-bottom-color:#1e1e1e}
.plan-features li::before{content:'→';color:#E8610A;font-size:11px;flex-shrink:0;margin-top:1px;font-weight:700}
.plan-btn{width:100%;padding:13px;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;font-weight:700;cursor:pointer;border:1px solid #2a2a2a;background:transparent;color:#555;transition:all .2s;margin-top:auto}
.plan-btn:hover{border-color:#444;color:#888}
.plan-btn-featured{background:linear-gradient(135deg,#E8610A,#ff8c42);color:#fff;border-color:transparent;box-shadow:0 4px 20px rgba(232,97,10,0.35)}
.plan-btn-featured:hover{box-shadow:0 6px 28px rgba(232,97,10,0.5)}`
);

// Replace pricing HTML section
home = home.replace(
  `<div class="pricing-section"><div class="pricing-head"><span class="section-label">Simple pricing</span><div class="pricing-h">No surprises. <em>Ever.</em></div><p class="pricing-sub">Credit card required &mdash; No charge for 7 days &mdash; Cancel anytime</p></div>`,
  `<div class="pricing-section"><div class="pricing-head"><span class="section-label" style="color:#E8610A">Simple pricing</span><div class="pricing-h">Start free. <em>Scale when ready.</em></div><p class="pricing-sub">Free plan available &mdash; No card needed &mdash; Paid plans from $47/mo &mdash; Cancel anytime</p></div>`
);

// Add plan-divider and flex column to each plan card
home = home.replace(
  `<div class="plan plan-featured"><div class="plan-badge">Most Popular</div><div class="plan-name">Pro</div>`,
  `<div class="plan plan-featured"><div class="plan-badge">Most Popular</div><div class="plan-name">Pro</div>`
);

fs.writeFileSync('src/app/page.tsx', home);
console.log('Done');