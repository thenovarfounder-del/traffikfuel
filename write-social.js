const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'app', 'resources', 'glossary', 'page.tsx');

const lines = [];
lines.push("// @ts-nocheck");
lines.push("'use client'");
lines.push("");
lines.push("export default function GlossaryPage() {");
lines.push("  return (");
lines.push("    <main style={{ background: '#111111', minHeight: '100vh', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: '80px 24px' }}>");
lines.push("      <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', color: '#E8610A', marginBottom: '40px' }}>SEO & AI Marketing Glossary</h1>");
lines.push("      <p style={{ fontSize: '18px', maxWidth: '700px', lineHeight: '1.7' }}>Key terms every small business owner needs to know about SEO, AI marketing, and automation.</p>");
lines.push("    </main>");
lines.push("  );");
lines.push("}");

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('SUCCESS: glossary page fixed.');