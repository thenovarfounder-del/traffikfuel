const fs = require('fs')
const path = require('path')

// Fix 1: lead/route.ts — change fallback greeting
const routeContent = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\chat\\lead\\route.ts', 'utf8')
const fixedRoute = routeContent.replace(
  "const greeting = firstName || 'Friend'",
  "const greeting = firstName || 'there'"
)
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\chat\\lead\\route.ts', fixedRoute, 'utf8')
console.log('SUCCESS: lead/route.ts greeting fixed')

// Fix 2: ChatBubble.tsx — fix scroll behavior
const bubblePath = 'C:\\Users\\randy\\traffikfuel\\src\\components\\ChatBubble.tsx'
let bubble = fs.readFileSync(bubblePath, 'utf8')

// Replace the scroll useEffect
bubble = bubble.replace(
  `  // Scroll to TOP of latest assistant message
  useEffect(() => {
    if (lastAssistantRef.current) {
      lastAssistantRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [messages])`,
  `  // Scroll to bottom only when loading starts (show typing dots)
  // When message arrives, scroll to top of new assistant message only if it's taller than the window
  useEffect(() => {
    if (loading) {
      if (lastAssistantRef.current) {
        lastAssistantRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (lastAssistantRef.current) {
      const el = lastAssistantRef.current
      const container = scrollRef.current
      if (!container) return
      const elTop = el.offsetTop
      const containerScrollTop = container.scrollTop
      const containerHeight = container.clientHeight
      // Only scroll if the top of the new message is above current view
      if (elTop < containerScrollTop || elTop > containerScrollTop + containerHeight) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [messages, loading])`
)

fs.writeFileSync(bubblePath, bubble, 'utf8')
console.log('SUCCESS: ChatBubble.tsx scroll fixed')