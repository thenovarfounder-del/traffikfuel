const fs = require("fs");

const filePath = "C:\\Users\\randy\\traffikfuel\\src\\app\\layout.tsx";
let content = fs.readFileSync(filePath, "utf8");

const oldHead = `<link rel='canonical' href='https://www.traffikora.com' />`;
const newHead = `<link rel='canonical' href='https://www.traffikora.com' />
<link rel='icon' href='/favicon.svg' type='image/svg+xml' />
<link rel='icon' href='/favicon.ico' sizes='any' />
<link rel='apple-touch-icon' href='/favicon.svg' />`;

content = content.replace(oldHead, newHead);
fs.writeFileSync(filePath, content);
console.log("SUCCESS - Favicon added to layout!");