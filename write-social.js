const fs = require('fs')
const path = require('path')

const bubblePath = path.join('src', 'components', 'ChatBubble.tsx')
let bubble = fs.readFileSync(bubblePath, 'utf8')

// Move bubble higher so it never blocks sidebar footer
bubble = bubble.replace(
  `position:'fixed', bottom:'24px', right:'24px', width:'56px', height:'56px'`,
  `position:'fixed', bottom:'80px', right:'24px', width:'52px', height:'52px'`
)
bubble = bubble.replace(
  `position:'fixed', bottom:'92px', right:'24px', width:'360px', height:'500px'`,
  `position:'fixed', bottom:'144px', right:'24px', width:'360px', height:'480px'`
)

fs.writeFileSync(bubblePath, bubble)
console.log('SUCCESS: ChatBubble.tsx — moved up, no longer blocks sidebar')