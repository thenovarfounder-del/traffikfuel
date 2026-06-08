const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\ChatBubble.tsx', 'utf8');

// Hide the T button when mobile menu is open
content = content.replace(
  `<button onClick={() => setOpen(!open)}
        style={{ position:'fixed', bottom: isMobile ? '80px' : '24px', right:'24px', width:'52px', height:'52px', borderRadius:'50%', background:'#050200', border:'2px solid #E8610A', cursor:'pointer', zIndex:9999, boxShadow:'0 4px 24px rgba(232,97,10,0.6), 0 0 40px rgba(232,97,10,0.2)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', padding:0 }}>`,
  `<button onClick={() => setOpen(!open)}
        style={{ position:'fixed', bottom: isMobile ? '80px' : '24px', right:'24px', width:'52px', height:'52px', borderRadius:'50%', background:'#050200', border:'2px solid #E8610A', cursor:'pointer', zIndex:9999, boxShadow:'0 4px 24px rgba(232,97,10,0.6), 0 0 40px rgba(232,97,10,0.2)', display: menuOpen ? 'none' : 'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', padding:0 }}>`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\ChatBubble.tsx', content, 'utf8');
console.log('SUCCESS: ChatBubble.tsx — T button hidden when mobile menu is open');