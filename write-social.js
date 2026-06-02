const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/why-traffikora/page.tsx', 'utf8')

// Fix duplicate SEO text
content = content.split('No Google SEO + Google SEO + all AI engines â€" Google, Bing, ChatGPT, Claude, Gemini.').join('No AI engine optimization for ChatGPT, Claude or Gemini.')
content = content.split('Google SEO + Google SEO + all AI engines â€" Google, Bing, ChatGPT, Claude, Gemini').join('AI engine optimization \u2014 ChatGPT, Claude, Gemini, Perplexity')

// Fix encoding on dashes
content = content.split('â€"').join('\u2014')
content = content.split('â€™').join('\u2019')

fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/why-traffikora/page.tsx', content)
console.log('SUCCESS: Why Traffikora page fixed')