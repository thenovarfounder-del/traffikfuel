const fs = require("fs");
const filePath = "C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\layout.tsx";
let content = fs.readFileSync(filePath, "utf8");
content = content.replace("href: '/dashboard/blog'", "href: '/dashboard/content/blog'");
fs.writeFileSync(filePath, content);
console.log("SUCCESS - Blog sidebar link fixed!");