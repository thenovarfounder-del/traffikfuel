const fs = require('fs')
const path = require('path')

const filePath = path.join('C:', 'Users', 'randy', 'traffikfuel', 'public', 'sitemap.xml')
let content = fs.readFileSync(filePath, 'utf8')

const newUrls = `  <url><loc>https://www.traffikora.com/blog/why-local-seo-matters</loc><lastmod>2026-06-02</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.traffikora.com/blog/how-ai-marketing-automation-works</loc><lastmod>2026-06-02</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.traffikora.com/blog/marketing-automation-small-business-2026</loc><lastmod>2026-06-02</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.traffikora.com/blog/ai-search-for-local-business</loc><lastmod>2026-06-02</lastmod><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.traffikora.com/features/review-automation</loc><lastmod>2026-06-02</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>
`

content = content.replace('</urlset>', newUrls + '</urlset>')
fs.writeFileSync(filePath, content, 'utf8')
console.log('SUCCESS: sitemap.xml updated with 5 new pages!')