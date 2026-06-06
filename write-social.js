const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\layout.tsx', 'utf8');

// Remove the cookieyes script tag entirely from layout
content = content.replace(
  `<script id="cookieyes" type="text/javascript" src="https://cdn-cookieyes.com/client_data/a2449444538b162a3443686343550cec/script.js" />`,
  ``
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\layout.tsx', content, 'utf8');
console.log('SUCCESS: CookieYes script removed from layout');