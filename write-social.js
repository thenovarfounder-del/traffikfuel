const fs = require('fs');
let content = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace <Footer /> }} /> with }} /> and add Footer after </main>
content = content.replace('<Footer />  }} />', '}} />');
content = content.replace('</main>', '</main>\n      <Footer />');

fs.writeFileSync('src/app/page.tsx', content, 'utf8');
console.log('Done: Footer fixed.');