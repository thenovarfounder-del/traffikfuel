const fs = require('fs');

let home = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace pricing section CSS - exact match
home = home.replace(
  '.pricing-section{background:#fff;padding:44px 40px}',
  `.pricing-section{background:#0a0a0a;padding:70px 40px;position:relative;overflow:hidden}
.pricing-section::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:900px;height:900px;border-radius:50%;background:radial-gradient(circle,rgba(232,97,10,0.08) 0%,transparent 65%);pointer-events:none;z-index:0}`
);

home = home.replace(
  '.pricing-head{text-align:center;margin-bottom:26px}',
  '.pricing-head{text-align:center;margin-bottom:52px;position:relative;z-index:1}'
);

home = home.replace(
  `.pricing-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#111;line-height:1.1}`,
  `.pricing-h{font-family:'Playfair Display',serif;font-size:52px;font-weight:700;color:#fff;line-height:1.05;letter-spacing:-1px}`
);

home = home.replace(
  '.pricing-h em{color:#E8610A;font-style:italic}',
  `.pricing-h em{color:#E8610A;font-style:italic;text-shadow:0 0 40px rgba(232,97,10,0.4)}`
);

home = home.replace(
  '.pricing-sub{font-size:13px;color:#666;margin-top:7px;font-weight:300}',
  '.pricing-sub{font-size:15px;color:#555;margin-top:14px;font-weight:300;letter-spacing:.02em}'
);

home = home.replace(
  `.pricing-grid{display:grid;grid-template-columns:repeat(4,1fr);border:2.5px solid #111;border-radius:14px;overflow:hidden;max-width:1100px;margin:0 auto}`,
  `.pricing-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;max-width:1300px;margin:0 auto;position:relative;z-index:1}`
);

home = home.replace(
  `.plan{background:#fff;padding:26px 20px;position:relative}`,
  `.plan{background:#111;padding:28px 20px;position:relative;border-radius:14px;border:1px solid #1e1e1e;display:flex;flex-direction:column;transition:border-color 0.2s}`
);

home = home.replace(
  `.plan:not(:last-child){border-right:2.5px solid #111}`,
  `.plan:hover{border-color:#333}`
);

home = home.replace(
  `.plan-featured{background:#111}`,
  `.plan-featured{background:linear-gradient(160deg,#1c1208 0%,#111 60%);border:1px solid #E8610A;box-shadow:0 0 50px rgba(232,97,10,0.18),0 0 100px rgba(232,97,10,0.06);transform:translateY(-10px)}`
);

home = home.replace(
  `.plan-badge{display:inline-block;background:#E8610A;color:#fff;font-size:10px;letter-spacing:.1em;text-transform:uppercase;padding:4px 12px;border-radius:20px;margin-bottom:10px;font-weight:700}`,
  `.plan-badge{display:inline-block;background:linear-gradient(135deg,#E8610A,#ff8c42);color:#fff;font-size:10px;letter-spacing:.12em;text-transform:uppercase;padding:5px 16px;border-radius:20px;margin-bottom:12px;font-weight:700;box-shadow:0 2px 14px rgba(232,97,10,0.45)}`
);

home = home.replace(
  `.plan-name{font-size:11px;letter-spacing:.14em;color:#777;text-transform:uppercase;margin-bottom:10px;font-weight:600}`,
  `.plan-name{font-size:10px;letter-spacing:.2em;color:#444;text-transform:uppercase;margin-bottom:12px;font-weight:700}`
);

home = home.replace(
  `.plan-name-light{color:#777}`,
  `.plan-name-light{color:#444}`
);

home = home.replace(
  `.plan-price{font-family:'Playfair Display',serif;font-size:44px;font-weight:700;color:#111;line-height:1}`,
  `.plan-price{font-family:'Playfair Display',serif;font-size:48px;font-weight:700;color:#fff;line-height:1}`
);

home = home.replace(
  `.plan-price-light{color:#fff}`,
  `.plan-price-light{color:#fff}`
);

home = home.replace(
  `.plan-price sup{font-size:18px;font-family:'DM Sans',sans-serif;font-weight:400;vertical-align:super}`,
  `.plan-price sup{font-size:16px;font-family:'DM Sans',sans-serif;font-weight:400;vertical-align:super;color:#E8610A}`
);

home = home.replace(
  `.plan-price sub{font-size:12px;color:#777;font-family:'DM Sans',sans-serif;font-weight:300}`,
  `.plan-price sub{font-size:11px;color:#444;font-family:'DM Sans',sans-serif;font-weight:300}`
);

home = home.replace(
  `.plan-price-light sub{color:#999}`,
  `.plan-price-light sub{color:#555}`
);

home = home.replace(
  `.plan-desc{font-size:13px;color:#666;margin:9px 0 14px;line-height:1.65;font-weight:300}`,
  `.plan-desc{font-size:12px;color:#555;margin:10px 0 16px;line-height:1.7;font-weight:300}`
);

home = home.replace(
  `.plan-desc-light{color:#bbb}`,
  `.plan-desc-light{color:#666}`
);

home = home.replace(
  `.plan-features{list-style:none;margin-bottom:20px}`,
  `.plan-features{list-style:none;margin-bottom:20px;flex:1}`
);

home = home.replace(
  `.plan-features li{font-size:12px;color:#444;padding:7px 0;border-bottom:1px solid #f0f0f0;display:flex;align-items:flex-start;gap:7px;line-height:1.45;font-weight:400}`,
  `.plan-features li{font-size:12px;color:#666;padding:7px 0;border-bottom:1px solid #1a1a1a;display:flex;align-items:flex-start;gap:7px;line-height:1.5;font-weight:400}`
);

home = home.replace(
  `.plan-features-light li{color:#ccc;border-bottom-color:#1e1e1e}`,
  `.plan-features-light li{color:#888;border-bottom-color:#1e1e1e}`
);

home = home.replace(
  `.plan-features li::before{content:'✔';color:#E8610A;font-size:11px;flex-shrink:0;margin-top:1px}`,
  `.plan-features li::before{content:'→';color:#E8610A;font-size:11px;flex-shrink:0;margin-top:2px;font-weight:700}`
);

home = home.replace(
  `.plan-btn{width:100%;padding:13px;border-radius:7px;font-size:13px;font-family:'DM Sans',sans-serif;font-weight:700;cursor:pointer;border:1.5px solid #bbb;background:transparent;color:#555;transition:all .2s}`,
  `.plan-btn{width:100%;padding:13px;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;font-weight:700;cursor:pointer;border:1px solid #2a2a2a;background:transparent;color:#555;transition:all .2s;margin-top:auto}`
);

home = home.replace(
  `.plan-btn-featured{background:#E8610A;color:#fff;border-color:#E8610A}`,
  `.plan-btn-featured{background:linear-gradient(135deg,#E8610A,#ff8c42);color:#fff;border-color:transparent;box-shadow:0 4px 20px rgba(232,97,10,0.4)}`
);

fs.writeFileSync('src/app/page.tsx', home);
console.log('Done - ' + (home.includes('#0a0a0a') ? 'dark bg applied' : 'FAILED - check replacements'));