const fs = require('fs')
const path = require('path')

const filePath = path.join('C:', 'Users', 'randy', 'traffikfuel', 'public', 'sitemap.xml')
let content = fs.readFileSync(filePath, 'utf8')

const newUrl = '  <url><loc>https://www.traffikora.com/features/reputation-management</loc><lastmod>2026-06-02</lastmod><changefreq>weekly</changefreq><priority>0.9</priority></url>\n'

content = content.replace('</urlset>', newUrl + '</urlset>')
fs.writeFileSync(filePath, content, 'utf8')
console.log('SUCCESS: reputation-management added to sitemap!')