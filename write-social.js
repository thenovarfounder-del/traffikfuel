const fs = require('fs');
const path = require('path');

const target = 'C:\\Users\\randy\\traffikfuel\\src\\app\\resources\\layout.tsx';

fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, `export default function Layout({children}:{children:React.ReactNode}){return <>{children}</>}`);

console.log('EXISTS?', fs.existsSync(target));
console.log('CONTENT:', fs.readFileSync(target, 'utf8'));