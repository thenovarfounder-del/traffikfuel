const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/dashboard/layout.tsx', 'utf8')

content = content.replace(
  `    { href: '/dashboard/billing', icon: 'ðŸ'³', label: 'Billing' },`,
  `    { href: '/dashboard/billing', icon: 'ðŸ'³', label: 'Billing' },
    { href: '/dashboard/referral', icon: 'ðŸŽ', label: 'Refer & Earn' },`
)

fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/dashboard/layout.tsx', content)
console.log('SUCCESS: Referral link added to sidebar')