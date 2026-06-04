const fs = require('fs')
const path = require('path')

const filePath = path.join('src', 'app', 'page.tsx')
let content = fs.readFileSync(filePath, 'utf8')

// Fix the delay - increase from 600ms to 2000ms so hydration completes first
content = content.replace(
  'setTimeout(runLiveDemo, 600);',
  'setTimeout(runLiveDemo, 2000); setInterval(function(){ if(document.getElementById("live-demo-container")) { runLiveDemo(); } }, 8000);'
)

// Also fix - remove the setTimeout inside runLiveDemo since we now use setInterval
content = content.replace(
  'liveCurrent = (liveCurrent + 5) % platforms.length;\n            setTimeout(runLiveDemo, 8000);',
  'liveCurrent = (liveCurrent + 5) % platforms.length;'
)

fs.writeFileSync(filePath, content)
console.log('SUCCESS: Live demo loop fixed - runs every 8 seconds after 2s delay')