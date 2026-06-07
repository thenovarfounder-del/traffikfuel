const fs = require('fs');
const path = 'src/components/ChatBubble.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add isMobile state
content = content.replace(
  "const [open, setOpen] = useState(false)",
  "const [open, setOpen] = useState(false)\n  const [isMobile, setIsMobile] = useState(false)"
);

// Add mobile detection in useEffect
content = content.replace(
  "  useEffect(() => {\n    if (loading) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })",
  "  useEffect(() => {\n    const checkMobile = () => setIsMobile(window.innerWidth < 768)\n    checkMobile()\n    window.addEventListener('resize', checkMobile)\n    return () => window.removeEventListener('resize', checkMobile)\n  }, [])\n\n  useEffect(() => {\n    if (loading) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })"
);

// Move chat bubble higher on mobile
content = content.replace(
  "style={{ position:'fixed', bottom:'24px', right:'24px', width:'52px', height:'52px'",
  "style={{ position:'fixed', bottom: isMobile ? '80px' : '24px', right:'24px', width:'52px', height:'52px'"
);

// Also move the chat window up on mobile
content = content.replace(
  "style={{ position:'fixed', bottom:'88px', right:'24px', width:'360px', height:'500px'",
  "style={{ position:'fixed', bottom: isMobile ? '144px' : '88px', right: isMobile ? '8px' : '24px', width: isMobile ? 'calc(100vw - 16px)' : '360px', height:'500px'"
);

fs.writeFileSync(path, content);
console.log('SUCCESS - chat bubble repositioned on mobile');