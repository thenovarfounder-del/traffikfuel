const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/layout.tsx', 'utf8')

const oldHead = `<head>`
const newHead = `<head>
    <meta name="google-site-verification" content="Bq59ihAKck9y8kv3Zv_VcPUh1pUM8D_HtGNDCDCVfMk" />`

if (content.includes('<head>')) {
  content = content.replace('<head>', newHead)
  fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/layout.tsx', content)
  console.log('SUCCESS: Google verification tag added')
} else {
  console.log('head tag not found - checking metadata approach')
}