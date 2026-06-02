const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/dashboard/layout.tsx', 'utf8')

// Find the billing line and add referral after it
const billingLine = "{ href: '/dashboard/billing', icon: '\uD83D\uDCB3', label: 'Billing' },"
const replacement = "{ href: '/dashboard/billing', icon: '\uD83D\uDCB3', label: 'Billing' },\n    { href: '/dashboard/referral', icon: '\uD83C\uDF81', label: 'Refer & Earn' },"

if (content.includes(billingLine)) {
  content = content.replace(billingLine, replacement)
  fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/dashboard/layout.tsx', content)
  console.log('SUCCESS: Referral link added')
} else {
  // Try a different approach - find any billing href line
  content = content.replace(
    "href: '/dashboard/billing'",
    "href: '/dashboard/billing'"
  )
  // Insert after billing block
  const idx = content.indexOf("'/dashboard/billing'")
  const lineEnd = content.indexOf('\n', idx)
  content = content.slice(0, lineEnd + 1) + "    { href: '/dashboard/referral', icon: '\uD83C\uDF81', label: 'Refer & Earn' },\n" + content.slice(lineEnd + 1)
  fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/dashboard/layout.tsx', content)
  console.log('SUCCESS: Referral link inserted after billing')
}