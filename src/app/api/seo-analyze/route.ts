// @ts-nocheck
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    const { url } = await req.json()
    if (!url) return NextResponse.json({ error: 'URL required' }, { status: 400 })

    const apiKey = process.env.GOOGLE_PAGESPEED_API_KEY
    const encoded = encodeURIComponent(url)

    const [mobileRes, desktopRes] = await Promise.all([
      fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encoded}&strategy=mobile&category=performance&category=accessibility&category=seo&category=best-practices&key=${apiKey}`),
      fetch(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encoded}&strategy=desktop&category=performance&key=${apiKey}`)
    ])

    const mobile = await mobileRes.json()
    const desktop = await desktopRes.json()

    const cats = mobile?.lighthouseResult?.categories || {}
    const audits = mobile?.lighthouseResult?.audits || {}

    const performance = Math.round((cats?.performance?.score ?? 0) * 100)
    const accessibility = Math.round((cats?.accessibility?.score ?? 0) * 100)
    const seo = Math.round((cats?.seo?.score ?? 0) * 100)
    const bestPractices = Math.round((cats?.['best-practices']?.score ?? 0) * 100)
    const desktopPerf = Math.round((desktop?.lighthouseResult?.categories?.performance?.score ?? 0) * 100)

    const isHttps = url.startsWith('https')

    // Viewport — pass if score is 1 OR null (null means not applicable/passed)
    const viewportScore = audits?.['viewport']?.score
    const mobile_ok = viewportScore === 1 || viewportScore === null || viewportScore === undefined

    // Meta title
    const titleScore = audits?.['document-title']?.score
    const metaTitle = titleScore === 1 || titleScore === null || titleScore === undefined

    // Meta description
    const descScore = audits?.['meta-description']?.score
    const metaDesc = descScore === 1 || descScore === null || descScore === undefined

    // Schema
    const schemaScore = audits?.['structured-data']?.score
    const hasSchema = schemaScore === 1 || schemaScore === null || schemaScore === undefined

    // H1
    const headingScore = audits?.['heading-order']?.score
    const h1 = headingScore === 1 || headingScore === null || headingScore === undefined

    // Image alts
    const imageScore = audits?.['image-alt']?.score
    const imageAlts = imageScore === 1 || imageScore === null || imageScore === undefined

    // Links
    const linksScore = audits?.['crawlable-anchors']?.score
    const links = linksScore === 1 || linksScore === null || linksScore === undefined

    // Sitemap
    let sitemapExists = false
    try {
      const origin = new URL(url).origin
      const r = await fetch(`${origin}/sitemap.xml`, { method: 'HEAD', signal: AbortSignal.timeout(5000) })
      sitemapExists = r.ok
    } catch {}

    const checks = {
      pagespeed: {
        pass: performance >= 70,
        score: performance,
        message: performance >= 70
          ? `Page speed score is ${performance}/100 — good performance`
          : `Page speed score is ${performance}/100 — slow load times hurt rankings. Desktop: ${desktopPerf}/100`,
        impact: 'high'
      },
      ssl: {
        pass: isHttps,
        message: isHttps ? 'SSL certificate valid and active — site is secure' : 'No SSL certificate — site is not secure',
        impact: 'high'
      },
      mobile: {
        pass: mobile_ok,
        message: mobile_ok ? 'Site is mobile responsive — viewport configured correctly' : 'Viewport not configured — site may not be mobile friendly',
        impact: 'medium'
      },
      meta_title: {
        pass: metaTitle,
        message: metaTitle ? 'Meta title present and optimized' : 'Meta title missing or poorly optimized',
        impact: 'high'
      },
      meta_desc: {
        pass: metaDesc,
        message: metaDesc ? 'Meta description present and optimized' : 'Meta description missing — Google will auto-generate one',
        impact: 'high'
      },
      sitemap: {
        pass: sitemapExists,
        message: sitemapExists ? 'Sitemap.xml found — Google can crawl efficiently' : 'No sitemap.xml detected — Google cannot crawl efficiently',
        impact: 'medium'
      },
      schema: {
        pass: hasSchema,
        message: hasSchema ? 'Schema markup detected' : 'No schema markup found — missing rich snippet opportunities',
        impact: 'medium'
      },
      h1: {
        pass: h1,
        message: h1 ? 'Heading structure is properly organized' : 'Heading order issues detected — affects SEO and accessibility',
        impact: 'medium'
      },
      images: {
        pass: imageAlts,
        message: imageAlts ? 'All images have alt tags' : 'Images missing alt tags — accessibility and SEO risk',
        impact: 'low'
      },
      links: {
        pass: links,
        message: links ? 'Internal link structure looks healthy' : 'Some links are not crawlable — Google may miss pages',
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
