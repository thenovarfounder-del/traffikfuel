const fs = require('fs');

let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');

// Add import after ScrollToTop import
layout = layout.replace(
  `import ScrollToTop from '@/components/ScrollToTop'`,
  `import ScrollToTop from '@/components/ScrollToTop'
import ChatBubble from '@/components/ChatBubble'`
);

// Add component before closing body tag
layout = layout.replace(
  `</body>`,
  `<ChatBubble />
      </body>`
);

fs.writeFileSync('src/app/layout.tsx', layout);
console.log('Done');
console.log(layout.substring(0, 400));