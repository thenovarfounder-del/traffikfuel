const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/solutions/page.tsx', 'utf8')

// Fix all broken /solutions/small-businesses links
content = content.replace("name: 'HVAC Companies', desc: 'Dominate local searches when homeowners need heating and cooling help.', href: '/solutions/small-businesses'", "name: 'HVAC Companies', desc: 'Dominate local searches when homeowners need heating and cooling help.', href: '/solutions/hvac'")
content = content.replace("name: 'Law Firms', desc: 'Get found when people search for legal help in your area on Google and AI engines.', href: '/solutions/small-businesses'", "name: 'Law Firms', desc: 'Get found when people search for legal help in your area on Google and AI engines.', href: '/solutions/lawyers'")
content = content.replace("name: 'Dental Offices', desc: 'Attract new patients automatically with content that ranks and converts.', href: '/solutions/small-businesses'", "name: 'Dental Offices', desc: 'Attract new patients automatically with content that ranks and converts.', href: '/solutions/dentists'")
content = content.replace("name: 'Gyms and Fitness', desc: 'Grow your membership with automated content that speaks to local fitness seekers.', href: '/solutions/small-businesses'", "name: 'Gyms and Fitness', desc: 'Grow your membership with automated content that speaks to local fitness seekers.', href: '/solutions/gyms'")
content = content.replace("name: 'Med Spas', desc: 'Attract high-value clients with premium content automation across all platforms.', href: '/solutions/small-businesses'", "name: 'Med Spas', desc: 'Attract high-value clients with premium content automation across all platforms.', href: '/solutions/salons'")
content = content.replace("name: 'Plumbers', desc: 'Show up first when locals search for emergency plumbing day or night.', href: '/solutions/small-businesses'", "name: 'Plumbers', desc: 'Show up first when locals search for emergency plumbing day or night.', href: '/solutions/plumbers'")
content = content.replace("name: 'Agencies', desc: 'Manage all your clients from one dashboard with white-label reporting.', href: '/solutions/small-businesses'", "name: 'Agencies', desc: 'Manage all your clients from one dashboard with white-label reporting.', href: '/solutions/marketing-agencies'")

fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/solutions/page.tsx', content)
console.log('SUCCESS: Solutions page links fixed')