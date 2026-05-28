const fs = require('fs');
console.log('LA exists:', fs.existsSync('src/app/local-businesses/los-angeles/page.tsx'));
console.log('Chicago exists:', fs.existsSync('src/app/local-businesses/chicago/page.tsx'));