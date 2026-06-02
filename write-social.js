const fs = require('fs');
const path = require('path');

const filePath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\compare\\traffikora-vs-hubspot\\page.tsx');

let content = fs.readFileSync(filePath, 'utf8');

// Remove the JSON-LD script tag block from the top of the page
content = content.replace(
  /\s*<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON\.stringify\(\{[\s\S]*?\}\) \}\} \/>/,
  ''
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS - JSON-LD script block removed from traffikora-vs-hubspot');