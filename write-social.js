const fs = require('fs')
const path = require('path')

const filePath = path.join('C:', 'Users', 'randy', 'traffikfuel', 'src', 'app', 'features', 'review-automation', 'page.tsx')
let content = fs.readFileSync(filePath, 'utf8')
content = content.split('Start Free \u2014 No Card Needed').join('Start Free \u2014 No Credit Card Needed')
fs.writeFileSync(filePath, content, 'utf8')
console.log('SUCCESS: Updated to No Credit Card Needed!')