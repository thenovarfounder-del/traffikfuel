const fs = require('fs');
const path = require('path');

const BASE = 'C:\\Users\\randy\\Downloads\\freesportspicks';

let main = fs.readFileSync(path.join(BASE, 'js/main.js'), 'utf8');

// Fix table name
main = main.replace(/sports_leads/g, 'sportspicks_leads');

fs.writeFileSync(path.join(BASE, 'js/main.js'), main, 'utf8');
console.log('DONE: Table name fixed to sportspicks_leads');
console.log('Verify:', main.includes('sportspicks_leads') ? 'OK' : 'FAILED');