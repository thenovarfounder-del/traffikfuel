const fs = require('fs');

let layout = fs.readFileSync('src/app/layout.tsx', 'utf8');

const oldImport = `import type { Metadata } from 'next'`;
const newImport = `import type { Metadata } from 'next'
import ChatBubble from '@/components/ChatBubble'`;

const oldClosing = `</body>`;
const newClosing = `<ChatBubble />
      </body>`;

layout = layout.replace(oldImport, newImport);
layout = layout.replace(oldClosing, newClosing);

fs.writeFileSync('src/app/layout.tsx', layout);
console.log('Done - ChatBubble added to layout');