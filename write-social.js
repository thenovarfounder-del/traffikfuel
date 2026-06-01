const fs = require('fs');

let home = fs.readFileSync('src/app/page.tsx', 'utf8');

// Plan description text
home = home.replace(
  `.plan-desc{font-size:12px;color:#555;margin:10px 0 16px;line-height:1.7;font-weight:300}`,
  `.plan-desc{font-size:12px;color:#bbb;margin:10px 0 16px;line-height:1.7;font-weight:300}`
);

home = home.replace(
  `.plan-desc-light{color:#666}`,
  `.plan-desc-light{color:#bbb}`
);

// Feature list items
home = home.replace(
  `.plan-features li{font-size:12px;color:#666;padding:7px 0;border-bottom:1px solid #1a1a1a;display:flex;align-items:flex-start;gap:7px;line-height:1.5;font-weight:400}`,
  `.plan-features li{font-size:12px;color:#ddd;padding:7px 0;border-bottom:1px solid #2a2a2a;display:flex;align-items:flex-start;gap:7px;line-height:1.5;font-weight:400}`
);

home = home.replace(
  `.plan-features-light li{color:#888;border-bottom-color:#1e1e1e}`,
  `.plan-features-light li{color:#fff;border-bottom-color:#2a2a2a}`
);

// Plan name label
home = home.replace(
  `.plan-name{font-size:10px;letter-spacing:.2em;color:#444;text-transform:uppercase;margin-bottom:12px;font-weight:700}`,
  `.plan-name{font-size:10px;letter-spacing:.2em;color:#888;text-transform:uppercase;margin-bottom:12px;font-weight:700}`
);

home = home.replace(
  `.plan-name-light{color:#444}`,
  `.plan-name-light{color:#888}`
);

// Button text on non-featured plans
home = home.replace(
  `.plan-btn{width:100%;padding:13px;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;font-weight:700;cursor:pointer;border:1px solid #2a2a2a;background:transparent;color:#555;transition:all .2s;margin-top:auto}`,
  `.plan-btn{width:100%;padding:13px;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;font-weight:700;cursor:pointer;border:1px solid rgba(255,255,255,0.2);background:transparent;color:#ccc;transition:all .2s;margin-top:auto}`
);

fs.writeFileSync('src/app/page.tsx', home);
console.log('Done - ' + (home.includes('color:#ddd') ? 'SUCCESS' : 'FAILED'));