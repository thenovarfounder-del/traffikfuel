const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/results/page.tsx', 'utf8')

content = content.replace('No no credit card required.', 'No credit card required.')

fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/results/page.tsx', content)
console.log('SUCCESS: Results page fixed')