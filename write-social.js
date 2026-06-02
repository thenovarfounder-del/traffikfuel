const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/page.tsx', 'utf8')

content = content.replace(
  'More online visibility on average',
  'More platforms than the average competitor'
)

fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/page.tsx', content)
console.log('SUCCESS: 6x stat label updated')