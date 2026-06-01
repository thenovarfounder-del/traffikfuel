const fs = require('fs');
const path = require('path');

const replacements = [
  // Pricing page and homepage plan bullets
  ['AI Engine Optimization — get found on ChatGPT, Claude, Gemini & Perplexity', 'Google SEO + AI Engine Optimization — rank on Google, Bing, ChatGPT, Claude, Gemini & Perplexity'],
  ['AI Engine Optimization — get found on ChatGPT, Claude, Gemini &amp; Perplexity', 'Google SEO + AI Engine Optimization — rank on Google, Bing, ChatGPT, Claude, Gemini &amp; Perplexity'],
  ['AI engine optimization', 'Google SEO + AI engine optimization — Google, Bing, ChatGPT, Claude, Gemini'],
  ['AI Engine Optimization', 'Google SEO + AI Engine Optimization'],
  // Homepage comparison table
  ['AI engine optimization', 'Google SEO + all AI engines'],
  // Features section
  ['Get found on ChatGPT, Claude, Gemini, Copilot and more', 'Rank on Google, Bing, and every AI engine — ChatGPT, Claude, Gemini, Copilot, Perplexity'],
  // AI section headline
  ['The only platform that optimizes for AI search', 'The only platform that optimizes for Google AND AI search'],
  // Chip in AI section
  ['Every other platform optimizes for Google only. We optimize for all of them.', 'Every other platform optimizes for Google only. We optimize for Google, Bing, and every AI engine that matters.'],
];

function walk(dir) {
  let results = [];
  fs.readdirSync(dir).forEach(f => {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory() && !p.includes('node_modules') && !p.includes('.next')) {
      results = results.concat(walk(p));
    } else if (p.endsWith('.tsx') || p.endsWith('.ts')) {
      results.push(p);
    }
  });
  return results;
}

const files = walk('src');
let totalChanges = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  replacements.forEach(([from, to]) => {
    if (content.includes(from)) {
      content = content.split(from).join(to);
      changed = true;
      totalChanges++;
      console.log(`  Fixed in ${file}`);
    }
  });
  if (changed) fs.writeFileSync(file, content);
});

console.log(`\nDone — ${totalChanges} replacements`);