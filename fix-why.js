const fs = require("fs");
let content = fs.readFileSync("C:\\Users\\randy\\traffikfuel\\src\\app\\why-traffikora\\page.tsx", "utf8");
content = content.replace("$97 – $197/month", "$97 – $1,497/month");
fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\app\\why-traffikora\\page.tsx", content, "utf8");
console.log("Done");