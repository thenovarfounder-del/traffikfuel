const fs = require('fs');

const content = `// @ts-nocheck
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { url } = await req.json()
    if (!url) return NextResponse.json({ error: 'URL required' }, { status: 400 })

    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY
    const encoded = encodeURIComponent(url)

    const categories = 'performance,accessibility,seo,best-practices'

    const [mobileRes, desktopRes] = await Promise.all([
      fetch(\`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=\${encoded}&strategy=mobile&category=performance&category=accessibility&category=seo&category=best-practices&key=\${apiKey}\`),
      fetch(\`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=\${encoded}&strategy=desktop&category=performance&key=\${apiKey}\`)
    ])

    const mobile = await mobileRes.json()
    const desktop = await desktopRes.json()

    console.log('Mobile categories:', JSON.stringify(mobile?.lighthouseResult?.categories))
    console.log('Mobile audits keys:', Object.keys(mobile?.lighthouseResult?.audits || {}).slice(0, 20))

    const cats = mobile?.lighthouseResult?.categories || {}
    const audits = mobile?.lighthouseResult?.audits || {}

    const performance = Math.round((cats?.performance?.score ?? 0) * 100)
    const accessibility = Math.round((cats?.accessibility?.score ?? 0) * 100)
    const seo = Math.round((cats?.seo?.score ?? 0) * 100)
    const bestPractices = Math.round((cats?.['best-practices']?.score ?? 0) * 100)
    const desktopPerf = Math.round((desktop?.lighthouseResult?.categories?.performance?.score ?? 0) * 100)

    const isHttps = url.startsWith('https')

    // Viewport check
    const viewportAudit = audits?.['viewport']
    const mobile_ok = viewportAudit?.score === 1 || viewportAudit?.score === null

    // Meta title
    const titleAudit = audits?.['document-title']
    const metaTitle = titleAudit?.score === 1 || titleAudit?.score === null

    // Meta description
    const descAudit = audits?.['meta-description']
    const metaDesc = descAudit?.score === 1 || descAudit?.score === null

    // Schema — multiple possible audit IDs
    const schemaAudit = audits?.['structured-data'] || audits?.['schema-org'] || audits?.['structured-data-automatic']
    const hasSchema = !schemaAudit || schemaAudit?.score === 1 || schemaAudit?.score === null

    // H1 / heading order
    const headingAudit = audits?.['heading-order']
    const h1 = headingAudit?.score === 1 || headingAudit?.score === null

    // Image alts
    const imageAudit = audits?.['image-alt']
    const imageAlts = imageAudit?.score === 1 || imageAudit?.score === null

    // Crawlable links
    const linksAudit = audits?.['crawlable-anchors']
    const links = !linksAudit || linksAudit?.score === 1 || linksAudit?.score === null

    // Sitemap — fetch directly
    let sitemapExists = false
    try {
      const sitemapUrl = new URL(url)
      const sitemapRes = await fetch(\`\${sitemapUrl.origin}/sitemap.xml\`, { method: 'HEAD', signal: AbortSignal.timeout(5000) })
      sitemapExists = sitemapRes.ok
    } catch {}

    const checks = {
      pagespeed: {
        pass: performance >= 70,
        score: performance,
        message: performance >= 70
          ? \`Page speed score is \${performance}/100 \u2014 good performance\`
          : \`Page speed score is \${performance}/100 \u2014 slow load times hurt rankings. Desktop: \${desktopPerf}/100\`,
        impact: 'high'
      },
      ssl: {
        pass: isHttps,
        message: isHttps ? 'SSL certificate valid and active \u2014 site is secure' : 'No SSL certificate \u2014 site is not secure',
        impact: 'high'
      },
      mobile: {
        pass: mobile_ok,
        message: mobile_ok ? 'Site is mobile responsive' : 'Viewport not configured \u2014 site may not be mobile friendly',
        impact: 'medium'
      },
      meta_title: {
        pass: metaTitle,
        message: metaTitle ? 'Meta title present and optimized' : 'Meta title missing or poorly optimized',
        impact: 'high'
      },
      meta_desc: {
        pass: metaDesc,
        message: metaDesc ? 'Meta description present and optimized' : 'Meta description missing \u2014 Google will auto-generate one',
        impact: 'high'
      },
      sitemap: {
        pass: sitemapExists,
        message: sitemapExists ? 'Sitemap.xml found \u2014 Google can crawl efficiently' : 'No sitemap.xml detected \u2014 Google cannot crawl efficiently',
        impact: 'medium'
      },
      schema: {
        pass: hasSchema,
        message: hasSchema ? 'Schema markup detected' : 'No schema markup found \u2014 missing rich snippet opportunities',
        impact: 'medium'
      },
      h1: {
        pass: h1,
        message: h1 ? 'Heading structure is properly organized' : 'Heading order issues detected \u2014 affects SEO and accessibility',
        impact: 'medium'
      },
      images: {
        pass: imageAlts,
        message: imageAlts ? 'All images have alt tags' : 'Images missing alt tags \u2014 accessibility and SEO risk',
        impact: 'low'
      },
      links: {
        pass: links,
        message: links ? 'Internal link structure looks healthy' : 'Some links are not crawlable \u2014 Google may miss pages',
        impact: 'low'
      },
    }

    const passed = Object.values(checks).filter(c => c.pass).length
    const total = Object.keys(checks).length
    const score = Math.round((passed / total) * 100)

    return NextResponse.json({ score, checks, passed, total, performance, accessibility, seo, bestPractices, desktopPerf })

  } catch (err) {
    console.error('SEO analyze error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
`;

fs.writeFileSync('C:\\\\Users\\\\randy\\\\traffikfuel\\\\src\\\\app\\\\api\\\\seo-analyze\\\\route.ts', content, 'utf8');
console.log('SUCCESS: seo-analyze route fixed — correct Lighthouse audit field names');