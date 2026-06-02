const fs = require('fs')
const path = require('path')

const filePath = path.join('C:', 'Users', 'randy', 'traffikfuel', 'src', 'app', 'compare', 'traffikora-vs-hubspot', 'page.tsx')

const faqSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is Traffikora really a HubSpot alternative for small business?", "acceptedAnswer": { "@type": "Answer", "text": "For local small businesses, yes. HubSpot is a powerful platform but it is designed for B2B companies with dedicated marketing and sales teams. Traffikora is designed specifically for local businesses -- restaurants, retail shops, service providers, healthcare practices -- that need automated marketing output without the complexity or cost of an enterprise platform." } },
    { "@type": "Question", "name": "How much cheaper is Traffikora than HubSpot?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora starts at $97 per month. HubSpot Marketing Hub starts at around $800 per month for basic features, and most businesses need the Professional tier at $1,600 per month or higher to access meaningful automation. For a local business, Traffikora delivers more relevant features at 5 to 15 times lower cost." } },
    { "@type": "Question", "name": "Does Traffikora have a CRM like HubSpot?", "acceptedAnswer": { "@type": "Answer", "text": "Traffikora is a marketing automation platform, not a CRM. It automates your content publishing, SEO, Google Business Profile, reviews, and AI engine visibility. If your primary need is a sales CRM with pipeline management, HubSpot serves that use case well. If your primary need is consistent marketing output and better local visibility, Traffikora is the right tool." } },
    { "@type": "Question", "name": "Can I use both Traffikora and HubSpot?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Some businesses use HubSpot for their sales CRM and Traffikora for their local marketing automation. They serve different functions and can complement each other. For most local businesses, however, Traffikora alone covers the marketing needs that matter most for growth." } },
    { "@type": "Question", "name": "How long does Traffikora take to set up?", "acceptedAnswer": { "@type": "Answer", "text": "Under 30 minutes. You connect your social accounts, confirm your business details, and Traffikora starts publishing immediately. There is no implementation process, no onboarding consultant, and no weeks-long setup. Your marketing starts running the same day you sign up." } }
  ]
})

let content = fs.readFileSync(filePath, 'utf8')
const scriptTag = '\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ' + '`' + faqSchema + '`' + ' }} />'
content = content.replace('<Nav />', '<Nav />' + scriptTag)
fs.writeFileSync(filePath, content, 'utf8')
console.log('SUCCESS: FAQPage JSON-LD added to traffikora-vs-hubspot/page.tsx!')