const fs = require('fs');
const path = require('path');

const BASE = 'C:\\Users\\randy\\citizenshipbyinvestmentpro';

const cookiePath = path.join(BASE, 'components/CookieBanner.js');
let cookie = fs.readFileSync(cookiePath, 'utf8');

cookie = cookie.replace(
  "position:'fixed',bottom:0,left:0,right:0,background:'#0F172A',color:'#fff',padding:'16px 24px',zIndex:998",
  "position:'fixed',bottom:'80px',left:0,right:0,background:'#0F172A',color:'#fff',padding:'12px 24px',zIndex:998"
);

fs.writeFileSync(cookiePath, cookie, 'utf8');

const check = fs.readFileSync(cookiePath, 'utf8');
console.log('Cookie bottom:', check.includes("bottom:'80px'") ? '80px OK' : 'FAILED');