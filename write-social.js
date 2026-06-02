const fs = require('fs')
const path = require('path')

const base = 'C:\\Users\\randy\\traffikfuel\\src\\app\\compare'

const folders = [
  'traffikora-vs-birdeye',
  'traffikora-vs-brightlocal',
  'traffikora-vs-constant-contact',
  'traffikora-vs-hootsuite',
  'traffikora-vs-hubspot',
  'traffikora-vs-later',
  'traffikora-vs-mailchimp',
  'traffikora-vs-reputation-com',
  'traffikora-vs-semrush',
  'traffikora-vs-sprout-social',
  'traffikora-vs-vendasta',
  'traffikora-vs-yext'
]

const content = "export default function Layout({ children }: { children: React.ReactNode }) {\n  return <>{children}</>\n}\n"

folders.forEach(folder => {
  fs.writeFileSync(path.join(base, folder, 'layout.tsx'), content, 'utf8')
  console.log('Cleaned: ' + folder)
})

console.log('\nDONE - All 12 compare layouts stripped clean!')