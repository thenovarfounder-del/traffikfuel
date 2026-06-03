// @ts-nocheck
// ============================================================
// TRAFFIKORA PLAN GATE SYSTEM — Single Source of Truth
// All feature access is controlled here. Never hardcode
// plan checks anywhere else — always import from this file.
// ============================================================

export const PLAN_ORDER = ['free', 'starter', 'pro', 'agency', 'enterprise']

export function planRank(plan) {
  return PLAN_ORDER.indexOf(plan ?? 'free')
}

export function meetsMinimum(userPlan, required) {
  return planRank(userPlan) >= planRank(required)
}

// ─── Blog limits ─────────────────────────────────────────────
export const BLOG_LIMITS = {
  free:       3,
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

// ─── Feature gates ───────────────────────────────────────────
// Value = MINIMUM plan required to access.
// Anything at or above that rank gets full access.
export const FEATURE_GATES = {

  // CONTENT
  blogGenerator:          'free',      // free = 3/mo cap. starter+ = unlimited
  blogReadFull:           'starter',   // read + copy full blog content
  blogWordPress:          'starter',   // publish to WordPress
  socialGenerator:        'starter',   // generate social posts
  socialSchedule:         'starter',   // schedule / manual publish
  contentQueue:           'starter',   // content queue page

  // PLATFORM
  businessBrain:          'free',      // anyone can build their brain
  llmEngine:              'pro',       // custom AI console
  aiAgents:               'pro',       // AI agents + auto mode
  autoMode:               'pro',       // cron-based auto publishing
  tiktokYoutube:          'pro',       // TikTok + YouTube content
  aiSeo:                  'pro',       // AI SEO tools
  contentScore:           'pro',       // content scoring 1-100
  competitorIntelligence: 'pro',       // competitor dashboard
  aiReviewResponder:      'pro',       // Google review AI responses

  // CONNECTIONS
  connectGoogle:          'starter',
  connectFacebook:        'starter',
  connectInstagram:       'starter',
  connectTiktok:          'pro',
  connectTwitter:         'starter',
  connectLinkedin:        'starter',
  connectWordpress:       'starter',

  // AGENCY
  clientPortal:           'agency',
  whiteLabel:             'agency',
  agencyClients:          'agency',

  // ENTERPRISE
  customAiTraining:       'enterprise',
  unlimitedClients:       'enterprise',
}

export function canAccess(userPlan, feature) {
  const required = FEATURE_GATES[feature] ?? 'enterprise'
  return meetsMinimum(userPlan, required)
}

// ─── Stripe Price ID to Plan ─────────────────────────────────
// LIVE MODE Price IDs — update here if Stripe prices change
export const PRICE_ID_TO_PLAN = {
  'price_1TdfQ0HuRIVTwN2fO76EeNeo': 'starter',
  'price_1TdfTdHuRIVTwN2fnPQuWIqg': 'pro',
  'price_1TdfUyHuRIVTwN2foS4t2TRa': 'agency',
  'price_1TdfWDHuRIVTwN2fa4y4M3FW': 'enterprise',
}

export function getPlanFromPriceId(priceId) {
  return PRICE_ID_TO_PLAN[priceId] ?? 'free'
}

// ─── Plan display metadata ───────────────────────────────────
export const PLAN_META = {
  free:       { label: 'Free',       price: '$0/mo',    color: '#888',    upgradeLabel: 'Upgrade to Starter',     upgradeHref: '/pricing', upgradePrice: '$47/month'  },
  starter:    { label: 'Starter',    price: '$47/mo',   color: '#3b82f6', upgradeLabel: 'Upgrade to Pro',         upgradeHref: '/pricing', upgradePrice: '$97/month'  },
  pro:        { label: 'Pro',        price: '$97/mo',   color: '#E8610A', upgradeLabel: 'Upgrade to Agency',      upgradeHref: '/pricing', upgradePrice: '$297/month' },
  agency:     { label: 'Agency',     price: '$297/mo',  color: '#a855f7', upgradeLabel: 'Upgrade to Enterprise',  upgradeHref: '/pricing', upgradePrice: '$997/month' },
  enterprise: { label: 'Enterprise', price: '$997/mo',  color: '#f59e0b', upgradeLabel: null,                     upgradeHref: null,       upgradePrice: null         },
}

// ─── What each plan includes (for upgrade CTAs) ──────────────
export const PLAN_FEATURES_DISPLAY = {
  free: [
    '3 blog posts per month',
    'Business Brain',
    'Basic dashboard',
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
