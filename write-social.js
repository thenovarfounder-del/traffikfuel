const fs = require('fs')
let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\chat\\lead\\route.ts', 'utf8')
content = content.replace(
  `from: 'Eva at Traffikora <support@traffikora.com>',
      to: [visitorEmail],`,
  `from: 'Eva at Traffikora <eva@traffikora.com>',
      to: [visitorEmail],`
)
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\chat\\lead\\route.ts', content, 'utf8')
console.log('SUCCESS: visitor email now sends from eva@traffikora.com')