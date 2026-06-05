const fs = require('fs')

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', 'utf8')

// Find the closing of the dangerouslySetInnerHTML div and insert ProofWall after it
const target = `      <Footer />`

const replacement = `      <ProofWall />
      <Footer />`

if (content.includes(replacement)) {
  console.log('ALREADY INSERTED - no change made')
} else {
  content = content.replace(target, replacement)
  fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', content, 'utf8')
  console.log('SUCCESS - ProofWall inserted before Footer')
}