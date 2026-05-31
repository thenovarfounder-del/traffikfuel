// @ts-nocheck
const fs = require('fs');
const path = require('path');

const dashPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\page.tsx');
let content = fs.readFileSync(dashPath, 'utf8');

// Replace all white/light backgrounds with dark
content = content.replace(/backgroundColor:\s*['"]#fff['"]/g, "backgroundColor: '#0a0a0a'");
content = content.replace(/backgroundColor:\s*['"]#ffffff['"]/g, "backgroundColor: '#0a0a0a'");
content = content.replace(/backgroundColor:\s*['"]white['"]/g, "backgroundColor: '#0a0a0a'");
content = content.replace(/backgroundColor:\s*['"]#f8f8f8['"]/g, "backgroundColor: '#0a0a0a'");
content = content.replace(/backgroundColor:\s*['"]#f9f9f9['"]/g, "backgroundColor: '#111'");
content = content.replace(/backgroundColor:\s*['"]#f5f5f5['"]/g, "backgroundColor: '#111'");
content = content.replace(/backgroundColor:\s*['"]#fafafa['"]/g, "backgroundColor: '#111'");
content = content.replace(/background:\s*['"]#fff['"]/g, "background: '#0a0a0a'");
content = content.replace(/background:\s*['"]white['"]/g, "background: '#0a0a0a'");

// Fix text colors
content = content.replace(/color:\s*['"]#000['"]/g, "color: '#fff'");
content = content.replace(/color:\s*['"]#111['"]/g, "color: '#fff'");
content = content.replace(/color:\s*['"]#222['"]/g, "color: '#fff'");
content = content.replace(/color:\s*['"]#333['"]/g, "color: '#e2e8f0'");
content = content.replace(/color:\s*['"]#444['"]/g, "color: '#94a3b8'");
content = content.replace(/color:\s*['"]black['"]/g, "color: '#fff'");

// Fix borders
content = content.replace(/border:\s*['"]1px solid #e[0-9a-fA-F]{3,5}['"]/g, "border: '1px solid #1f1f1f'");
content = content.replace(/border:\s*['"]1px solid #d[0-9a-fA-F]{3,5}['"]/g, "border: '1px solid #1f1f1f'");
content = content.replace(/borderBottom:\s*['"]1px solid #e[0-9a-fA-F]{3,5}['"]/g, "borderBottom: '1px solid #1f1f1f'");

// Fix card backgrounds
content = content.replace(/backgroundColor:\s*['"]#f0f0f0['"]/g, "backgroundColor: '#111'");
content = content.replace(/backgroundColor:\s*['"]#efefef['"]/g, "backgroundColor: '#111'");

fs.writeFileSync(dashPath, content, 'utf8');
console.log('DONE - Dashboard home page dark theme applied');