const fs = require('fs')

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', 'utf8')

const insertion = `
      <ProofWall />
`

const target = `        <div class="pain-section">`

content = content.replace(
  `import Footer from '@/components/Footer'`,
  `import Footer from '@/components/Footer'\nimport ProofWall from '@/components/ProofWall'`
)

content = content.replace(target, insertion + `        <div class="pain-section">`)

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', content, 'utf8')
console.log('SUCCESS - ProofWall inserted into homepage')