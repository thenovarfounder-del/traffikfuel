const fs = require('fs')
const path = require('path')

const pagePath = path.join('src', 'app', 'page.tsx')
let homepage = fs.readFileSync(pagePath, 'utf8')

const cards = [
  { name: 'Salons &amp; Spas', href: '/solutions/salons' },
  { name: 'HVAC Companies', href: '/solutions/hvac' },
  { name: 'Law Firms', href: '/solutions/lawyers' },
  { name: 'Dental Offices', href: '/solutions/dentists' },
  { name: 'Restaurants', href: '/solutions/restaurants' },
  { name: 'Real Estate', href: '/solutions/real-estate' },
  { name: 'Gyms &amp; Fitness', href: '/solutions/gyms' },
  { name: 'Auto Repair', href: '/solutions/auto-repair' },
  { name: 'Med Spas', href: '/solutions/med-spas' },
  { name: 'Plumbers', href: '/solutions/plumbers' },
  { name: 'Agencies', href: '/solutions/marketing-agencies' },
  { name: 'Chiropractors', href: '/solutions/chiropractors' },
]

var count = 0
cards.forEach(function(card) {
  var oldStr = '<div style="font-size:12px;font-weight:700;color:#fff;line-height:1.3;margin-bottom:4px">' + card.name + '</div>'
  var newStr = '<div style="font-size:12px;font-weight:700;color:#fff;line-height:1.3;margin-bottom:4px;cursor:pointer" onclick="window.location.href=\'' + card.href + '\'">' + card.name + '</div>'
  if (homepage.includes(oldStr)) {
    homepage = homepage.replace(oldStr, newStr)
    count++
    console.log('Wired: ' + card.name + ' -> ' + card.href)
  } else {
    console.log('NOT FOUND: ' + card.name)
  }
})

// Also make the whole card clickable
cards.forEach(function(card) {
  var oldCard = 'onmouseover="this.style.borderColor=\'#E8610A\';this.style.background=\'#1a1a1a\'" onmouseout="this.style.borderColor=\'#2a2a2a\';this.style.background=\'#141414\'"><div style="font-size:26px;margin-bottom:8px">'
  // Add onclick to the parent div - find by card name nearby
  var nameStr = '<div style="font-size:12px;font-weight:700;color:#fff;line-height:1.3;margin-bottom:4px;cursor:pointer" onclick="window.location.href=\'' + card.href + '\'">' + card.name + '</div>'
  var cardDiv = 'onmouseover="this.style.borderColor=\'#E8610A\';this.style.background=\'#1a1a1a\'" onmouseout="this.style.borderColor=\'#2a2a2a\';this.style.background=\'#141414\'"'
  // Find the card containing this name and add cursor+onclick to parent
  var idx = homepage.indexOf(nameStr)
  if (idx > -1) {
    var before = homepage.lastIndexOf('background:#141414', idx)
    if (before > -1) {
      var insertAt = before + 'background:#141414'.length
      if (!homepage.substring(insertAt, insertAt + 20).includes('cursor:pointer')) {
        homepage = homepage.substring(0, insertAt) + ';cursor:pointer' + homepage.substring(insertAt)
      }
    }
  }
})

fs.writeFileSync(pagePath, homepage)
console.log('\n' + count + '/12 cards wired successfully')
console.log('Run: npx next build')