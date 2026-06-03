const fs = require("fs");

let content = fs.readFileSync("C:\\Users\\randy\\traffikfuel\\src\\components\\ChatBubble.tsx", "utf8");

// Replace the CyraIcon component with the exact favicon T
const oldIcon = content.substring(content.indexOf("const CyraIcon"), content.indexOf("return ("));

const newIcon = `const CyraIcon = ({ size }) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
      <rect width="32" height="32" rx="6" fill="#111111"/>
      <text x="16" y="24" fontFamily="Georgia, serif" fontSize="24" fontWeight="900" fill="#E8610A" textAnchor="middle">T</text>
    </svg>
  )

  `;

content = content.replace(content.substring(content.indexOf("const CyraIcon"), content.indexOf("return (")), newIcon);

fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\components\\ChatBubble.tsx", content);
console.log("SUCCESS - Exact favicon T installed!");