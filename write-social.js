const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/faq/page.tsx', 'utf8')

// Replace all broken encoded characters
content = content.split('\u00e2\u0080\u0094').join('\u2014')
content = content.split('\u00e2\u0080\u0099').join('\u2019')
content = content.split('\u00e2\u0080\u009c').join('\u201C')
content = content.split('\u00e2\u0080\u009d').join('\u201D')
content = content.split('\u00c3\u00a2\u00e2\u0082\u00ac\u00e2\u0084\u00a2').join('\u2019')

// Fix duplicate SEO phrase
const badPhrase = 'Google SEO + Google SEO + all AI engines'
const goodPhrase = 'AI engine optimization'
while (content.includes(badPhrase)) {
  content = content.replace(badPhrase, goodPhrase)
}

fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/faq/page.tsx', content)
console.log('SUCCESS: FAQ page fixed')