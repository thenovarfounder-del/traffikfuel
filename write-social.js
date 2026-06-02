const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/cookie-policy/page.tsx', 'utf8')

content = content.replace('Last updated: June 2025', 'Last updated: June 2026')

fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/cookie-policy/page.tsx', content)
console.log('SUCCESS: Cookie policy date updated')