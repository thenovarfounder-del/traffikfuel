const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Nav.tsx', 'utf8');

// Fix the hamburger toggle to hide/show EVA bubble
content = content.replace(
  `onClick={() => { const menu = document.getElementById('mobile-nav-menu'); if (menu) { menu.classList.toggle('is-open'); document.body.classList.toggle('nav-open'); } }}`,
  `onClick={() => {
    const menu = document.getElementById('mobile-nav-menu');
    if (menu) {
      const isOpening = !menu.classList.contains('is-open');
      menu.classList.toggle('is-open');
      document.body.classList.toggle('nav-open');
      // Hide EVA bubble when menu opens, show when closes
      const allFixed = document.querySelectorAll('div[style*="position: fixed"]');
      allFixed.forEach(el => {
        const style = el.getAttribute('style') || '';
        if (style.includes('bottom') && style.includes('right') && !style.includes('top: 0')) {
          el.style.display = isOpening ? 'none' : '';
        }
      });
    }
  }}`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Nav.tsx', content, 'utf8');
console.log('SUCCESS: Nav.tsx — EVA bubble hidden via JS when mobile menu opens');