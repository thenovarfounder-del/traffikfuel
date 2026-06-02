const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/how-it-works/page.tsx', 'utf8')

content = content.replace('No charge until day 8. Cancel anytime.', 'Free plan available. No credit card required. Cancel anytime.')
content = content.replace('Start Free â€" No Card Needed', 'Start Free \u2014 No Credit Card Needed')
content = content.replace('Google SEO + Google SEO + all AI engines â€" Google, Bing, ChatGPT, Claude, Gemini', 'Google SEO and AI engine optimization \u2014 ChatGPT, Claude, Gemini, Perplexity')

fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/how-it-works/page.tsx', content)
console.log('SUCCESS: How It Works page fixed')