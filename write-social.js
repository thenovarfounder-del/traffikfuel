const fs = require('fs');

// Fix Nav - add body class when menu opens
const navPath = 'src/components/Nav.tsx';
let nav = fs.readFileSync(navPath, 'utf8');

nav = nav.replace(
  "onClick={() => { const menu = document.getElementById('mobile-nav-menu'); if (menu) menu.classList.toggle('is-open'); }}",
  "onClick={() => { const menu = document.getElementById('mobile-nav-menu'); if (menu) { menu.classList.toggle('is-open'); document.body.classList.toggle('nav-open'); } }}"
);

fs.writeFileSync(navPath, nav);

// Fix ChatBubble - watch body class
const chatPath = 'src/components/ChatBubble.tsx';
let chat = fs.readFileSync(chatPath, 'utf8');

// Watch body for nav-open class
chat = chat.replace(
  `    // Watch for mobile menu open/close
    const observer = new MutationObserver(() => {
      const menu = document.getElementById('mobile-nav-menu')
      if (menu) setMenuOpen(menu.classList.contains('is-open'))
    })
    const menu = document.getElementById('mobile-nav-menu')
    if (menu) observer.observe(menu, { attributes: true, attributeFilter: ['class'] })`,
  `    // Watch body for nav-open class
    const observer = new MutationObserver(() => {
      setMenuOpen(document.body.classList.contains('nav-open'))
    })
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })`
);

fs.writeFileSync(chatPath, chat);
console.log('SUCCESS - nav body class + chat bubble fix applied');