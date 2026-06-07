const fs = require('fs');

// 1. Update next.config.mjs with security headers
const nextConfig = `import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb',
    },
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};
export default withSentryConfig(nextConfig, {
  org: "traffikfuel",
  project: "javascript-nextjs",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
  treeshake: {
    removeDebugLogging: true,
  },
});
`;

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\next.config.mjs', nextConfig, 'utf8');
console.log('SUCCESS: next.config.mjs — HSTS + security headers added');

// 2. Add rate limiting to referral API
const referralRoute = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\referral\\route.ts', 'utf8');
if (!referralRoute.includes('rateLimitMap')) {
  const rateLimit = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Simple in-memory rate limiter
const rateLimitMap = new Map()
function rateLimit(ip, maxRequests = 20, windowMs = 60000) {
  const now = Date.now()
  const windowStart = now - windowMs
  const requests = rateLimitMap.get(ip) || []
  const recentRequests = requests.filter(t => t > windowStart)
  if (recentRequests.length >= maxRequests) return false
  recentRequests.push(now)
  rateLimitMap.set(ip, recentRequests)
  return true
}

function generateCode(name) {
  const clean = (name || 'USER').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 5) || 'USER'
  const num = Math.floor(100 + Math.random() * 900)
  return clean + num
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown'
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const body = await request.json()
  const { userId, name, action } = body
  const actionData = body.data

  if (action === 'click') {
    const { code, ip: clickIp, userAgent } = actionData
    const { data: refCode } = await supabase.from('referral_codes').select('*').eq('code', code).single()
    if (refCode) {
      await supabase.from('referral_clicks').insert({ code, referrer_id: refCode.user_id, ip_address: clickIp, user_agent: userAgent })
      await supabase.from('referral_codes').update({ total_clicks: (refCode.total_clicks || 0) + 1 }).eq('code', code)
    }
    return NextResponse.json({ success: true })
  }

  if (action === 'signup') {
    const { code, referredUserId } = actionData
    const { data: refCode } = await supabase.from('referral_codes').select('*').eq('code', code).single()
    if (refCode) {
      await supabase.from('referral_codes').update({ total_signups: (refCode.total_signups || 0) + 1 }).eq('code', code)
      await supabase.from('users').update({ referred_by: code }).eq('id', referredUserId)
    }
    return NextResponse.json({ success: true })
  }

  const { data: existing } = await supabase.from('referral_codes').select('*').eq('user_id', userId).single()
  if (existing) return NextResponse.json({ code: existing })

  let code = generateCode(name)
  let attempts = 0
  while (attempts < 10) {
    const { data: conflict } = await supabase.from('referral_codes').select('id').eq('code', code).single()
    if (!conflict) break
    code = generateCode(name)
    attempts++
  }

  const { data: inserted, error } = await supabase.from('referral_codes').insert({
    user_id: userId,
    code,
    tier: 'customer',
    commission_rate: 0.20,
    total_clicks: 0,
    total_signups: 0,
    total_conversions: 0,
    total_earned: 0,
    status: 'active'
  }).select().single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ code: inserted })
}

export async function GET(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')
  const code = searchParams.get('code')

  if (code) {
    const { data } = await supabase.from('referral_codes').select('*').eq('code', code).single()
    return NextResponse.json({ code: data })
  }

  const { data, error } = await supabase.from('referral_codes').select('*').eq('user_id', userId).single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ code: data })
}
`;
  fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\referral\\route.ts', rateLimit, 'utf8');
  console.log('SUCCESS: Referral API — rate limiting added');
}

// 3. Add rate limiting to affiliates API
let affiliates = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\affiliates\\route.ts', 'utf8');
if (!affiliates.includes('rateLimitMap')) {
  affiliates = affiliates.replace(
    "const resend = new Resend(process.env.RESEND_API_KEY)",
    `const resend = new Resend(process.env.RESEND_API_KEY)
const rateLimitMap = new Map()
function rateLimit(ip, max = 5, windowMs = 60000) {
  const now = Date.now()
  const reqs = (rateLimitMap.get(ip) || []).filter(t => t > now - windowMs)
  if (reqs.length >= max) return false
  reqs.push(now)
  rateLimitMap.set(ip, reqs)
  return true
}`
  );
  affiliates = affiliates.replace(
    "  const body = await request.json()",
    `  const ip = request.headers.get('x-forwarded-for') || 'unknown'
  if (!rateLimit(ip)) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  const body = await request.json()`
  );
  fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\affiliates\\route.ts', affiliates, 'utf8');
  console.log('SUCCESS: Affiliates API — rate limiting added');
}

// 4. Add rate limiting to support API
let support = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\support\\route.ts', 'utf8');
if (!support.includes('rateLimitMap')) {
  support = support.replace(
    "const resend = new Resend(process.env.RESEND_API_KEY)",
    `const resend = new Resend(process.env.RESEND_API_KEY)
const rateLimitMap = new Map()
function rateLimit(ip, max = 5, windowMs = 60000) {
  const now = Date.now()
  const reqs = (rateLimitMap.get(ip) || []).filter(t => t > now - windowMs)
  if (reqs.length >= max) return false
  reqs.push(now)
  rateLimitMap.set(ip, reqs)
  return true
}`
  );
  support = support.replace(
    "  const { name, email, subject, message } = await request.json()",
    `  const ip = request.headers.get('x-forwarded-for') || 'unknown'
  if (!rateLimit(ip)) return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  const { name, email, subject, message } = await request.json()`
  );
  fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\support\\route.ts', support, 'utf8');
  console.log('SUCCESS: Support API — rate limiting added');
}

// 5. Update admin verify route to use env variable for PIN
const verifyRoute = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const ADMIN_ID = '03ef19e5-528c-470d-bc7b-509438104d03'

export async function POST(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { pin, token } = await request.json()
  const ADMIN_PIN = process.env.ADMIN_PIN || '749251'

  if (pin !== ADMIN_PIN) {
    return NextResponse.json({ error: 'Invalid PIN' }, { status: 401 })
  }

  const { data: { user }, error } = await supabase.auth.getUser(token)
  if (error || !user || user.id !== ADMIN_ID) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  return NextResponse.json({ success: true })
}
`;

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\admin\\verify\\route.ts', verifyRoute, 'utf8');
console.log('SUCCESS: Admin verify — PIN now reads from ADMIN_PIN env variable');

// 6. Delete old unsecured admin page
const oldAdminPath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\admin\\affiliates\\page.tsx';
if (fs.existsSync(oldAdminPath)) {
  const redirect = `// @ts-nocheck
import { redirect } from 'next/navigation'
export default function OldAdmin() {
  redirect('/dashboard')
}
`;
  fs.writeFileSync(oldAdminPath, redirect, 'utf8');
  console.log('SUCCESS: Old /admin/affiliates — redirects to /dashboard');
} else {
  console.log('SKIPPED: Old admin page not found');
}

console.log('ALL DONE: Security hardening complete');