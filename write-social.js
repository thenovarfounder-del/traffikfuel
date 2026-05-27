const fs = require('fs');

let content = fs.readFileSync('src/app/layout.tsx', 'utf8');
content = content.replace(
  "content=\"Set it once. It markets forever. Traffikora automates your marketing across Google and every major AI engine.\"",
  "content=\"Set it once. It markets forever. Traffikora automates your marketing across Google, TikTok, YouTube, ChatGPT, Claude, Gemini, and every major AI engine. Start free for 7 days.\""
);
fs.writeFileSync('src/app/layout.tsx', content, 'utf8');
console.log('OK: description updated');