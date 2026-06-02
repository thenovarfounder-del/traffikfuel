const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/page.tsx', 'utf8')

// Brighten dashboard mockup text
content = content.replace('.dash-stat-lbl{font-size:10px;color:#888;margin-top:3px}', '.dash-stat-lbl{font-size:10px;color:#ccc;margin-top:3px}')
content = content.replace('.dash-activity-txt{font-size:11px;color:#aaa;flex:1}', '.dash-activity-txt{font-size:11px;color:#ddd;flex:1}')
content = content.replace('.dash-activity-time{font-size:10px;color:#666;white-space:nowrap}', '.dash-activity-time{font-size:10px;color:#aaa;white-space:nowrap}')
content = content.replace('.dash-nav-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:5px;margin-bottom:3px;font-size:11px;font-weight:500;color:#888;cursor:pointer}', '.dash-nav-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:5px;margin-bottom:3px;font-size:11px;font-weight:500;color:#bbb;cursor:pointer}')
content = content.replace('.dash-url{flex:1;background:#1a1a1a;border-radius:4px;padding:4px 12px;font-size:10px;color:#888;margin:0 12px}', '.dash-url{flex:1;background:#1a1a1a;border-radius:4px;padding:4px 12px;font-size:10px;color:#ccc;margin:0 12px}')

fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/page.tsx', content)
console.log('SUCCESS: Dashboard mockup text brightened')