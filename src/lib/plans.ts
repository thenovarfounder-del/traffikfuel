// @ts-nocheck
export const PLAN_ORDER = ['free', 'past_due', 'starter', 'pro', 'agency', 'enterprise']

export function planRank(plan) {
  return PLAN_ORDER.indexOf(plan ?? 'free')
}

export function meetsMinimum(userPlan, required) {
  return planRank(userPlan) >= planRank(required)
}

export const BLOG_LIMITS = {
  free:       3,
  past_due:   0,
  starter:    Infinity,
  pro:        Infinity,
  agency:     Infinity,
  enterprise: Infinity,
}

export function getBlogLimit(plan) {
  return BLOG_LIMITS[plan ?? 'free']
}

export function isBlogLimitReached(plan, used) {
  const limit = getBlogLimit(plan)
  return used >= limit
}

export const FEATURE_GATES = {
  blogGenerator:          'free',
  blogReadFull:           'starter',
  blogWordPress:          'starter',
  socialGenerator:        'starter',
  socialSchedule:         'starter',
  contentQueue:           'starter',
  businessBrain:          'free',
  llmEngine:              'pro',
  aiAgents:               'pro',
  autoMode:               'pro',
  tiktokYoutube:          'pro',
  aiSeo:                  'pro',
  contentScore:           'pro',
  competitorIntelligence: 'pro',
  aiReviewResponder:      'pro',
  connectGoogle:          'starter',
  connectFacebook:        'starter',
  connectInstagram:       'starter',
  connectTiktok:          'pro',
  connectTwitter:         'starter',
  connectLinkedin:        'starter',
  connectWordpress:       'starter',
  clientPortal:           'agency',
  whiteLabel:             'agency',
  agencyClients:          'agency',
  customAiTraining:       'enterprise',
  unlimitedClients:       'enterprise',
}

export function canAccess(userPlan, feature) {
  const required = FEATURE_GATES[feature] ?? 'enterprise'
  return meetsMinimum(userPlan, required)
}

export const PRICE_ID_TO_PLAN = {
  'price_1TdfQ0HuRIVTwN2fO76EeNeo': 'starter',
  'price_1TdfTdHuRIVTwN2fnPQuWIqg': 'pro',
  'price_1TdfUyHuRIVTwN2foS4t2TRa': 'agency',
  'price_1TdfWDHuRIVTwN2fa4y4M3FW': 'enterprise',
}

export function getPlanFromPriceId(priceId) {
  return PRICE_ID_TO_PLAN[priceId] ?? 'free'
}

export const PLAN_META = {
  free:       { label: 'Free',       price: '$0/mo',    color: '#888',    upgradeLabel: 'Upgrade to Starter',     upgradeHref: '/pricing', upgradePrice: '$47/month'  },
  past_due:   { label: 'Past Due',   price: '$0/mo',    color: '#ef4444', upgradeLabel: 'Update Payment Method',  upgradeHref: '/dashboard/settings', upgradePrice: null },
  starter:    { label: 'Starter',    price: '$47/mo',   color: '#3b82f6', upgradeLabel: 'Upgrade to Pro',         upgradeHref: '/pricing', upgradePrice: '$97/month'  },
  pro:        { label: 'Pro',        price: '$97/mo',   color: '#E8610A', upgradeLabel: 'Upgrade to Agency',      upgradeHref: '/pricing', upgradePrice: '$297/month' },
  agency:     { label: 'Agency',     price: '$297/mo',  color: '#a855f7', upgradeLabel: 'Upgrade to Enterprise',  upgradeHref: '/pricing', upgradePrice: '$997/month' },
  enterprise: { label: 'Enterprise', price: '$997/mo',  color: '#f59e0b', upgradeLabel: null,                     upgradeHref: null,       upgradePrice: null         },
}

export const PLAN_FEATURES_DISPLAY = {
  free: [
    '3 blog posts per month',
    'Business Brain',
    'Basic dashboard',
  ],
  past_due: [
    'Payment failed — update your payment method to restore access',
  ],
  starter: [
    'Unlimited blog posts',
    'Social media generator',
    'Manual publish to WordPress',
    'All platform connections',
    'Content queue',
  ],
  pro: [
    'Everything in Starter',
    'LLM Engine (your custom AI)',
    'AI Agents — 24/7 automation',
    'Auto Mode',
    'TikTok and YouTube content',
    'AI SEO tools',
    'Content scoring',
    'AI Review Responder',
    'Competitor Intelligence',
  ],
  agency: [
    'Everything in Pro',
    'Up to 10 client accounts',
    'White-label dashboard',
    'Agency client portal',
    '30% revenue share program',
  ],
  enterprise: [
    'Everything in Agency',
    'Unlimited client accounts',
    'Custom AI training',
    'Dedicated support',
  ],
}
