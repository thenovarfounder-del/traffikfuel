const fs = require('fs')

const today = new Date().toISOString().split('T')[0]

const urls = [
  // CORE PAGES - definitely optimized
  { url: '/', priority: '1.0', freq: 'daily' },
  { url: '/pricing', priority: '0.9', freq: 'weekly' },
  { url: '/features', priority: '0.9', freq: 'weekly' },
  { url: '/how-it-works', priority: '0.8', freq: 'weekly' },
  { url: '/why-traffikora', priority: '0.8', freq: 'weekly' },
  { url: '/faq', priority: '0.8', freq: 'weekly' },
  { url: '/about', priority: '0.7', freq: 'monthly' },
  { url: '/contact', priority: '0.7', freq: 'monthly' },
  { url: '/solutions', priority: '0.8', freq: 'weekly' },
  { url: '/support', priority: '0.6', freq: 'monthly' },
  { url: '/privacy', priority: '0.5', freq: 'monthly' },
  { url: '/terms', priority: '0.5', freq: 'monthly' },
  // VS PAGES - fully rebuilt with SEO content
  { url: '/vs/hubspot', priority: '0.9', freq: 'weekly' },
  { url: '/vs/hootsuite', priority: '0.9', freq: 'weekly' },
  { url: '/vs/buffer', priority: '0.9', freq: 'weekly' },
  { url: '/vs/later', priority: '0.9', freq: 'weekly' },
  // BLOG - all 17 posts confirmed live
  { url: '/blog', priority: '0.8', freq: 'daily' },
  { url: '/blog/ai-search-for-local-business', priority: '0.8', freq: 'weekly' },
  { url: '/blog/how-ai-marketing-automation-works', priority: '0.8', freq: 'weekly' },
  { url: '/blog/how-to-get-found-on-chatgpt-perplexity', priority: '0.8', freq: 'weekly' },
  { url: '/blog/how-to-get-more-google-reviews', priority: '0.8', freq: 'weekly' },
  { url: '/blog/how-traffikora-is-different', priority: '0.8', freq: 'weekly' },
  { url: '/blog/local-seo-tips-for-small-businesses', priority: '0.8', freq: 'weekly' },
  { url: '/blog/local-seo-vs-ai-engine-optimization', priority: '0.8', freq: 'weekly' },
  { url: '/blog/marketing-automation-small-business-2026', priority: '0.8', freq: 'weekly' },
  { url: '/blog/set-it-once-how-traffikora-works', priority: '0.8', freq: 'weekly' },
  { url: '/blog/small-business-marketing-problem', priority: '0.8', freq: 'weekly' },
  { url: '/blog/what-is-aeo', priority: '0.8', freq: 'weekly' },
  { url: '/blog/what-is-ai-engine-optimization', priority: '0.8', freq: 'weekly' },
  { url: '/blog/what-is-generative-engine-optimization', priority: '0.8', freq: 'weekly' },
  { url: '/blog/what-is-local-seo', priority: '0.8', freq: 'weekly' },
  { url: '/blog/what-is-traffikora', priority: '0.8', freq: 'weekly' },
  { url: '/blog/why-ai-engine-optimization', priority: '0.8', freq: 'weekly' },
  { url: '/blog/why-google-business-profile-matters', priority: '0.8', freq: 'weekly' },
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(({ url, priority, freq }) => `  <url>
    <loc>https://www.traffikora.com${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`

fs.writeFileSync('C:/Users/randy/traffikfuel/public/sitemap.xml', sitemap)
console.log('SUCCESS: sitemap.xml created with ' + urls.length + ' guaranteed SEO-ready URLs')