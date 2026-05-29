const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Remove the countdown timer display from the limited offer section
content = content.replace(`<div class="lo-countdown"><div class="lo-count-item"><div class="lo-count-num" id="cd-days">02</div><div class="lo-count-lbl">Days</div></div><div class="lo-count-item"><div class="lo-count-num" id="cd-hours">14</div><div class="lo-count-lbl">Hours</div></div><div class="lo-count-item"><div class="lo-count-num" id="cd-mins">37</div><div class="lo-count-lbl">Mins</div></div><div class="lo-count-item"><div class="lo-count-num" id="cd-secs">00</div><div class="lo-count-lbl">Secs</div></div></div>`, '');

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: Timer removed.');