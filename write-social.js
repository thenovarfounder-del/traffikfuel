const fs = require('fs');

// Fix sitemap-news.xml - replace with valid empty news sitemap
const newsXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
</urlset>`;

fs.writeFileSync('C:\\Users\\randy\\Downloads\\freesportspicks\\sitemap-news.xml', newsXml);
console.log('✅ sitemap-news.xml fixed - valid empty news sitemap');