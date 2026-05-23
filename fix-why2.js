const fs = require("fs");
let content = fs.readFileSync("C:\\Users\\randy\\traffikfuel\\src\\app\\why-traffikora\\page.tsx", "utf8");
content = content.replace("ChatGPT, Perplexity, Gemini cite your business", "ChatGPT, Perplexity, Gemini, Claude cite your business");
fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\app\\why-traffikora\\page.tsx", content, "utf8");
console.log("Done");