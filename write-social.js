const fs = require('fs')
let f = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\ChatBubble.tsx', 'utf8')
f = f.replace(
  `  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])`,
  `  useEffect(() => {
    if (loading) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [loading])`
)
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\ChatBubble.tsx', f, 'utf8')
console.log('SUCCESS')