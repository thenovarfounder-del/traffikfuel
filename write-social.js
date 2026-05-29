const fs = require('fs');
const path = require('path');
const dir = 'src/app/resources';
const filePath = path.join(dir, 'layout.tsx');
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(filePath, "export default function Layout({children}:{children:React.ReactNode}){return <>{children}</>}");
const written = fs.readFileSync(filePath, 'utf8');
console.log('DONE -- file written to:', path.resolve(filePath));
console.log('Content:', written);