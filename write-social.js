const fs = require('fs');

// Fix ChatBubble - hide when mobile menu is open
const path = 'src/components/ChatBubble.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add menuOpen state
content = content.replace(
  "const [isMobile, setIsMobile] = useState(false)",
  "const [isMobile, setIsMobile] = useState(false)\n  const [menuOpen, setMenuOpen] = useState(false)"
);

// Add menu observer in useEffect
content = content.replace(
  "    const checkMobile = () => setIsMobile(window.innerWidth < 768)\n    checkMobile()\n    window.addEventListener('resize', checkMobile)\n    return () => window.removeEventListener('resize', checkMobile)\n  }, [])",
  `    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Watch for mobile menu open/close
    const observer = new MutationObserver(() => {
      const menu = document.getElementById('mobile-nav-menu')
      if (menu) setMenuOpen(menu.classList.contains('is-open'))
    })
    const menu = document.getElementById('mobile-nav-menu')
    if (menu) observer.observe(menu, { attributes: true, attributeFilter: ['class'] })

    return () => {
      window.removeEventListener('resize', checkMobile)
      observer.disconnect()
    }
  }, [])`
);

// Hide bubble when menu is open
content = content.replace(
  "style={{ position:'fixed', bottom: isMobile ? '160px' : '24px', right:'24px', width:'52px', height:'52px'",
  "style={{ position:'fixed', bottom: isMobile ? '160px' : '24px', right:'24px', width:'52px', height:'52px', display: menuOpen ? 'none' : 'flex'"
);

fs.writeFileSync(path, content);
console.log('SUCCESS - chat bubble hides when mobile menu is open');