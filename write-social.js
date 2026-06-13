const fs = require('fs');
const path = require('path');

const BASE = 'C:\\Users\\randy\\Downloads\\floridaimpactshield-turnkey\\floridaimpactshield';

// Create SVG favicon - gold shield with lightning bolt
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#A07830"/>
      <stop offset="50%" stop-color="#C9A84C"/>
      <stop offset="100%" stop-color="#E8C97A"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" fill="#0A0A0A" rx="8"/>
  <path d="M32 4L8 12V32C8 46 20 58 32 60C44 58 56 46 56 32V12L32 4Z" fill="#111111" stroke="url(#gold)" stroke-width="2"/>
  <path d="M37 14L22 34H30L26 50L42 30H34L37 14Z" fill="url(#gold)"/>
</svg>`;

fs.writeFileSync(path.join(BASE, 'assets/images/favicon.svg'), faviconSvg, 'utf8');
console.log('SUCCESS: favicon.svg created');

// Add favicon to all HTML pages
const files = [
  'index.html',
  'pages/contact.html',
  'pages/about.html',
  'pages/faq.html',
  'pages/impact-windows-miami.html',
  'pages/impact-windows-broward.html',
  'pages/impact-windows-palm-beach.html',
  'pages/impact-windows-naples.html',
  'pages/impact-windows-tampa.html',
  'pages/impact-windows-orlando.html',
  'pages/impact-windows-sarasota.html',
  'pages/impact-windows-jacksonville.html',
  'pages/impact-windows-fort-lauderdale.html',
  'pages/impact-windows-fort-myers.html',
  'pages/impact-windows-cape-coral.html',
  'pages/impact-windows-clearwater.html',
  'pages/impact-windows-st-petersburg.html',
  'pages/impact-windows-miami-beach.html',
  'pages/impact-windows-coral-gables.html',
  'pages/impact-windows-boca-raton.html',
  'pages/hurricane-windows-insurance-savings.html',
  'pages/my-safe-florida-home-grants.html',
  'pages/impact-windows-cost.html',
  'pages/financing.html',
  'pages/impact-windows.html',
  'pages/impact-doors.html',
  'pages/sliding-glass-doors.html',
  'pages/hurricane-garage-doors.html',
  'pages/wind-mitigation-inspection.html',
  'pages/privacy-policy.html',
  'pages/terms.html',
  'pages/impact-windows-lower-insurance-florida.html',
  'pages/wind-mitigation-discount-florida.html',
  'pages/impact-windows-reduce-homeowners-insurance.html',
  'pages/hurricane-windows-insurance-discount-florida.html',
  'pages/my-safe-florida-home-grant-impact-windows.html',
  'pages/msfh-approved-contractor-florida.html',
  'pages/florida-hurricane-hardening-grant.html',
  'pages/impact-window-grant-florida-2026.html',
  'pages/how-much-do-impact-windows-cost-florida.html',
  'pages/hurricane-impact-windows-vs-plywood-florida.html',
  'pages/hurricane-impact-windows-florida.html',
  'pages/impact-window-installation-florida.html',
  'pages/impact-windows-near-me-florida.html',
  'pages/hurricane-windows-cost-florida.html',
  'pages/cgi-impact-windows-florida.html',
  'pages/pgt-impact-windows-florida.html',
  'blog/index.html',
  'blog/impact-windows-insurance-discount-florida.html',
  'blog/my-safe-florida-home-program-guide.html',
  'blog/hurricane-impact-windows-cost-florida.html',
  'blog/impact-windows-vs-shutters-florida.html',
  'blog/citizens-insurance-impact-windows.html',
  'blog/best-impact-window-brands-florida.html',
  'blog/hurricane-ian-impact-windows-lesson.html'
];

const faviconTag = '<link rel="icon" type="image/svg+xml" href="/assets/images/favicon.svg">\n';

let updated = 0;
for (const file of files) {
  const filePath = path.join(BASE, file);
  if (!fs.existsSync(filePath)) { console.log('SKIP:', file); continue; }
  let html = fs.readFileSync(filePath, 'utf8');
  if (html.includes('favicon')) { console.log('SKIP (has favicon):', file); continue; }
  html = html.replace('<meta charset="UTF-8">', '<meta charset="UTF-8">\n' + faviconTag);
  fs.writeFileSync(filePath, html, 'utf8');
  console.log('UPDATED:', file);
  updated++;
}
console.log('DONE - Added favicon to', updated, 'pages');