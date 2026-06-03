const fs = require("fs");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#111111"/>
  <text x="16" y="24" font-family="Georgia, serif" font-size="24" font-weight="900" fill="#E8610A" text-anchor="middle">T</text>
</svg>`;

// Next.js app dir favicon - this is what actually works
fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\app\\icon.svg", svg);
fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\public\\favicon.svg", svg);

// Also overwrite the existing icon.png placeholder reference
console.log("SUCCESS - Favicon written to src/app/icon.svg!");