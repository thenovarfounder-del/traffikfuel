const fs = require('fs');
const path = require('path');
const BASE = 'C:\\Users\\randy\\freesportspicks\\picks';

const slugs = [
  'free-nfl-picks','nfl-picks','free-sports-picks','sports-picks',
  'best-bets-today','nfl-predictions','football-picks','free-picks',
  'nba-picks','nfl-week-1-picks'
];

const NAV = `<nav id="navbar">
<div class="nav-inner">
<a href="/" class="nav-logo">
<div class="nav-logo-icon">F</div>
<div>
<div class="nav-logo-text">FreeSportsPicks<span>.pro</span></div>
<div class="nav-logo-sub">★ Expert Picks · 100% Free ★</div>
</div>
</a>
<ul class="nav-links">
<li><a href="/">Home</a></li>
<li><a href="/picks/free-nfl-picks/">NFL</a></li>
<li><a href="/picks/nba-picks/">NBA</a></li>
<li><a href="/picks/best-bets-today/">Best Bets</a></li>
<li><a href="/picks/free-picks/">Free Picks</a></li>
<li><a href="/blog/">Blog</a></li>
</ul>
<div class="nav-divider"></div>
<a href="/guestbook.html" class="nav-cta">GET FREE PICKS</a>
</div>
</nav>`;

const FOOTER = `<footer id="footer">
<div class="container">
<div class="footer-grid">
<div><div class="footer-col-title">NFL Picks</div><ul class="footer-links"><li><a href="/picks/free-nfl-picks/">Free NFL Picks</a></li><li><a href="/picks/nfl-picks/">NFL Picks</a></li><li><a href="/picks/nfl-predictions/">NFL Predictions</a></li><li><a href="/picks/nfl-week-1-picks/">NFL Week 1 Picks</a></li><li><a href="/picks/football-picks/">Football Picks</a></li></ul></div>
<div><div class="footer-col-title">All Sports</div><ul class="footer-links"><li><a href="/picks/nba-picks/">NBA Picks</a></li><li><a href="/picks/free-sports-picks/">Free Sports Picks</a></li><li><a href="/picks/sports-picks/">Sports Picks</a></li><li><a href="/picks/best-bets-today/">Best Bets Today</a></li><li><a href="/picks/free-picks/">Free Picks</a></li></ul></div>
<div><div class="footer-col-title">Site</div><ul class="footer-links"><li><a href="/">Home</a></li><li><a href="/blog/">Blog</a></li><li><a href="/about.html">About</a></li><li><a href="/guestbook.html">Join VIP</a></li></ul></div>
</div>
</div>
<div class="footer-bottom">
<div class="footer-copy">© 2026 FreeSportsPicks.pro — All rights reserved.</div>
<div class="footer-legal-links"><a href="/privacy.html">Privacy Policy</a><a href="/terms.html">Terms & Conditions</a><a href="/responsible-gambling.html">Responsible Gambling</a></div>
<div class="footer-disclaimer">Must be 21+ in a jurisdiction where sports betting is legal. Gambling involves risk. Bet responsibly.</div>
</div>
</footer>
<script>
window.addEventListener('scroll',function(){
const nav=document.getElementById('navbar');
if(window.scrollY>20)nav.classList.add('scrolled');
else nav.classList.remove('scrolled');
});
</script>`;

let fixed = 0;
for (const slug of slugs) {
  const file = path.join(BASE, slug, 'index.html');
  if (!fs.existsSync(file)) { console.log('SKIP ' + slug); continue; }
  
  let html = fs.readFileSync(file, 'utf8');
  
  // Update font link
  html = html.replace(/<link rel="stylesheet" href="\/css\/main.css">/,
    '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">\n<link rel="stylesheet" href="/css/main.css">');
  
  // Replace old header with new nav
  html = html.replace(/<header[\s\S]*?<\/header>/, NAV);
  
  // Replace old footer with new footer
  html = html.replace(/<footer[\s\S]*?<\/footer>/, FOOTER);

  // Add padding-top to body content after nav
  html = html.replace(/<body([^>]*)>/, '<body$1>\n<div style="padding-top:64px">');
  html = html.replace(/<\/body>/, '</div>\n</body>');

  fs.writeFileSync(file, html, 'utf8');
  console.log('OK ' + slug);
  fixed++;
}
console.log('\n' + fixed + ' pages updated — content untouched, design fixed');