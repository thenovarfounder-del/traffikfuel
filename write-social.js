const fs = require('fs');
const path = require('path');

const BASE = 'C:\\Users\\randy\\Downloads\\floridaimpactshield-turnkey\\floridaimpactshield';
const today = new Date().toISOString().slice(0, 10);

// Rebuild full sitemap
const allPages = [{ url: 'https://floridaimpactshield.com/', priority: '1.0', changefreq: 'weekly' }];

function scanForUrls(dir, prefix) {
  fs.readdirSync(dir).forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !['git','node_modules','assets'].includes(item)) {
      scanForUrls(fullPath, prefix + item + '/');
    } else if (item.endsWith('.html')) {
      allPages.push({
        url: 'https://floridaimpactshield.com/' + prefix + item,
        priority: prefix.includes('blog') ? '0.7' : '0.8',
        changefreq: prefix.includes('blog') ? 'monthly' : 'weekly'
      });
    }
  });
}

scanForUrls(path.join(BASE, 'pages'), 'pages/');
scanForUrls(path.join(BASE, 'blog'), 'blog/');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(p => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(BASE, 'sitemap.xml'), sitemap, 'utf8');
console.log('DONE - Sitemap updated with', allPages.length, 'pages');