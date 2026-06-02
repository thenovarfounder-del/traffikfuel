const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/refund-policy/page.tsx', 'utf8')

content = content.replace('No no credit card required to start a trial on select plans', 'No credit card required to start a trial on select plans')
content = content.replace('Last updated: June 2025', 'Last updated: June 2026')

fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/refund-policy/page.tsx', content)
console.log('SUCCESS: Refund policy fixed')