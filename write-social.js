const fs = require('fs')
const path = require('path')

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return false
  let content = fs.readFileSync(filePath, 'utf8')
  const original = content
  content = content.replace(/No Card Needed/g, 'No Credit Card Needed')
  content = content.replace(/No Card Required/g, 'No Credit Card Required')
  content = content.replace(/no card needed/g, 'no credit card needed')
  content = content.replace(/no card required/g, 'no credit card required')
  content = content.replace(/No card needed/g, 'No credit card needed')
  content = content.replace(/No card required/g, 'No credit card required')
  if (content !== original) {
    fs.writeFileSync(filePath, content)
    return true
  }
  return false
}

const files = [
  'C:/Users/randy/traffikfuel/src/app/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/pricing/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/signup/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/dashboard/billing/page.tsx',
  'C:/Users/randy/traffikfuel/src/components/Nav.tsx',
  'C:/Users/randy/traffikfuel/src/components/Footer.tsx',
  'C:/Users/randy/traffikfuel/src/app/features/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/why-traffikora/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/faq/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/login/page.tsx',
]

let updated = 0
files.forEach(f => {
  if (replaceInFile(f)) {
    console.log('Updated: ' + f)
    updated++
  }
})
console.log('SUCCESS: Updated ' + updated + ' files')