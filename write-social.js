const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Nav.tsx', 'utf8');

// Add CSS to hide EVA bubble when mobile menu is open
content = content.replace(
  `.mobile-menu a.login-mobile { background: linear-gradient(135deg,#E8610A,#c94e08); color: #fff !important; padding: 16px 22px; font-size: 18px; border-radius: 8px; text-align: center; margin-top: 12px; border-bottom: none; }`,
  `.mobile-menu a.login-mobile { background: linear-gradient(135deg,#E8610A,#c94e08); color: #fff !important; padding: 16px 22px; font-size: 18px; border-radius: 8px; text-align: center; margin-top: 12px; border-bottom: none; }
        body.nav-open [data-eva-bubble], body.nav-open #chat-bubble-container, body.nav-open .chat-bubble-btn, body.nav-open [class*="ChatBubble"], body.nav-open [id*="chat"], body.nav-open [id*="eva"] { display: none !important; visibility: hidden !important; opacity: 0 !important; pointer-events: none !important; }
        body.nav-open div[style*="position: fixed"][style*="bottom"][style*="right"] { display: none !important; }`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\Nav.tsx', content, 'utf8');
console.log('SUCCESS: Nav.tsx — EVA bubble hidden when mobile menu is open');