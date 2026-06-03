const fs = require("fs");

let content = fs.readFileSync("C:\\Users\\randy\\traffikfuel\\src\\components\\ChatBubble.tsx", "utf8");

content = content.replaceAll(
  `objectFit: 'cover', objectPosition: 'center top'`,
  `objectFit: 'cover', objectPosition: '50% 8%', transform: 'scale(1.6)', transformOrigin: '50% 8%'`
);

fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\components\\ChatBubble.tsx", content);
console.log("SUCCESS - CYRA face zoomed in!");