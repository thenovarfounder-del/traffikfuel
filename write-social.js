const fs = require('fs');
const path = require('path');

const BASE = 'C:\\Users\\randy\\Downloads\\floridaimpactshield-turnkey\\floridaimpactshield';

let appJs = fs.readFileSync(path.join(BASE, 'assets/js/app.js'), 'utf8');

// Only remove phone from text strings - nothing structural
appJs = appJs.replace(/\(888\) 975-4440/g, 'our team');
appJs = appJs.replace(/888-975-4440/g, 'our team');

fs.writeFileSync(path.join(BASE, 'assets/js/app.js'), appJs, 'utf8');
console.log('DONE');