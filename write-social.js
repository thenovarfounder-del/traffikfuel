// @ts-nocheck
const fs = require('fs');
const path = require('path');

const signupPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\signup\\page.tsx');
let content = fs.readFileSync(signupPath, 'utf8');

// Replace white background with dark
content = content.replace(/backgroundColor:\s*['"]#fff['"]/g, "backgroundColor: '#0a0a0a'");
content = content.replace(/backgroundColor:\s*['"]white['"]/g, "backgroundColor: '#0a0a0a'");
content = content.replace(/backgroundColor:\s*['"]#ffffff['"]/g, "backgroundColor: '#0a0a0a'");
content = content.replace(/backgroundColor:\s*['"]#f[0-9a-fA-F]{4,5}['"]/g, "backgroundColor: '#0a0a0a'");
content = content.replace(/background:\s*['"]#fff['"]/g, "background: '#0a0a0a'");
content = content.replace(/background:\s*['"]white['"]/g, "background: '#0a0a0a'");
content = content.replace(/color:\s*['"]#000['"]/g, "color: '#fff'");
content = content.replace(/color:\s*['"]#111['"]/g, "color: '#fff'");
content = content.replace(/color:\s*['"]#333['"]/g, "color: '#e2e8f0'");
content = content.replace(/color:\s*['"]black['"]/g, "color: '#fff'");

// Fix input fields to dark
content = content.replace(/backgroundColor:\s*['"]#f9f9f9['"]/g, "backgroundColor: '#111'");
content = content.replace(/backgroundColor:\s*['"]#f5f5f5['"]/g, "backgroundColor: '#111'");
content = content.replace(/border:\s*['"]1px solid #ddd['"]/g, "border: '1px solid #333'");
content = content.replace(/border:\s*['"]1px solid #e[0-9a-fA-F]{4,5}['"]/g, "border: '1px solid #333'");

fs.writeFileSync(signupPath, content, 'utf8');
console.log('DONE - Signup page dark theme applied');