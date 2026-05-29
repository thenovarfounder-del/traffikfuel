const fs = require('fs');
fs.mkdirSync('src/app/resources', { recursive: true });
fs.writeFileSync('src/app/resources/layout.tsx', "export default function Layout({children}:{children:React.ReactNode}){return <>{children}</>}");
console.log('DONE -- written to:', require('path').resolve('src/app/resources/layout.tsx'));