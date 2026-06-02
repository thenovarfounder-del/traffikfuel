const fs = require('fs')

const pagesToCheck = [
  'C:/Users/randy/traffikfuel/src/app/demo/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/resources/glossary/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/privacy/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/terms/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/contact/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/restaurants/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/hvac/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/lawyers/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/dentists/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/real-estate/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/salons/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/gyms/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/auto-repair/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/plumbers/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/chiropractors/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/contractors/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/therapists/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/veterinarians/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/accountants/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/solutions/marketing-agencies/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/blog/ai-search-for-local-business/page.tsx',
  'C:/Users/randy/traffikfuel/src/app/blog/marketing-automation-small-business-2026/page.tsx',
]

const badPhrases = [
  'No no credit card','no no credit card','Start Free Free','Free Free Today',
  '7-day free trial','7 day free trial','No charge until day 8',
  'Google SEO + Google SEO','Free 7-day','June 2025','â€"','â€™','â€œ','ðŸ','Â©'
]

let totalIssues = 0
pagesToCheck.forEach(filePath => {
  if (!fs.existsSync(filePath)) { console.log('MISSING: ' + filePath); return }
  const content = fs.readFileSync(filePath, 'utf8')
  const issues = badPhrases.filter(p => content.includes(p))
  if (issues.length > 0) {
    console.log('STILL HAS ISSUES: ' + filePath.split('app/')[1].replace('/page.tsx',''))
    issues.forEach(i => console.log('  - ' + i))
    totalIssues += issues.length
  } else {
    console.log('CLEAN: ' + filePath.split('app/')[1].replace('/page.tsx',''))
  }
})
console.log('\nTotal remaining issues: ' + totalIssues)