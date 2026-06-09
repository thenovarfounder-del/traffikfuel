import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.traffikora.com'

  const blogSlugs = [
    'ai-search-for-local-business',
    'how-to-get-more-google-reviews',
    'how-traffikora-is-different',
    'local-seo-tips-for-small-businesses',
    'set-it-once-how-traffikora-works',
    'small-business-marketing-problem',
    'what-is-aeo',
    'what-is-ai-engine-optimization',
    'what-is-local-seo',
    'what-is-traffikora',
    'why-ai-engine-optimization',
    'why-google-business-profile-matters',
  ]

  const compareSlugs = [
    'traffikora-vs-birdeye',
    'traffikora-vs-brightlocal',
    'traffikora-vs-constant-contact',
    'traffikora-vs-hootsuite',
    'traffikora-vs-hubspot',
    'traffikora-vs-later',
    'traffikora-vs-mailchimp',
    'traffikora-vs-reputation-com',
    'traffikora-vs-semrush',
    'traffikora-vs-sprout-social',
    'traffikora-vs-vendasta',
    'traffikora-vs-yext',
  ]

  const solutionSlugs = [
    'accountants',
    'auto-repair',
    'chiropractors',
    'contractors',
    'dentists',
    'gyms',
    'hvac',
    'lawyers',
    'plumbers',
    'real-estate',
    'restaurants',
    'salons',
    'small-businesses',
    'therapists',
    'veterinarians',
  ]

  const vsSlugs = [
    'buffer',
    'hootsuite',
    'hubspot',
    'later',
  ]

  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const compareRoutes = compareSlugs.map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const solutionRoutes = solutionSlugs.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const vsRoutes = vsSlugs.map((slug) => ({
    url: `${baseUrl}/vs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/features`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/how-it-works`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/why-traffikora`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/support`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/security`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/data-use`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
    ...blogRoutes,
    ...compareRoutes,
    ...solutionRoutes,
    ...vsRoutes,
  ]
}
