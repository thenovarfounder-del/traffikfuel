const fs = require('fs');

// ─── SUPPORT API with Supabase rate limiting ───────────────────────
const supportRoute = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function checkRateLimit(ip, endpoint, maxRequests = 6, windowMinutes = 60) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const windowStart = new Date(Date.now() - windowMinutes * 60 * 1000).toISOString()
  const { count } = await supabase
    .from('rate_limits')
    .select('*', { count: 'exact', head: true })
    .eq('ip', ip)
    .eq('endpoint', endpoint)
    .gte('created_at', windowStart)
  if ((count || 0) >= maxRequests) return false
  await supabase.from('rate_limits').insert({ ip, endpoint })
  return true
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
  const allowed = await checkRateLimit(ip, 'support', 6, 60)
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests. Please wait before sending another message.' }, { status: 429 })
  }

  const { name, email, subject, message } = await request.json()
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
  }
  try {
    await resend.emails.send({
      from: 'Traffikora Support <eva@traffikora.com>',
      to: 'thenovar.founder@gmail.com',
      subject: \`\ud83c\udf9f\ufe0f Support Request: \${subject || 'No Subject'} \u2014 from \${name}\`,
      html: \`<div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;">
        <h2 style="color:#E8610A;">New Support Request</h2>
        <p><strong>Name:</strong> \${name}</p>
        <p><strong>Email:</strong> \${email}</p>
        <p><strong>Subject:</strong> \${subject || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <div style="background:#f9f9f9;border-left:4px solid #E8610A;padding:16px;border-radius:4px;margin-top:8px;">
          <p style="margin:0;color:#333;line-height:1.7;">\${message}</p>
        </div>
        <p style="margin-top:24px;font-size:13px;color:#888;">Reply directly to this email to respond to \${name} at \${email}</p>
        <a href="mailto:\${email}" style="background:#E8610A;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;margin-top:8px;">Reply to \${name} \u2192</a>
      </div>\`
    })
    await resend.emails.send({
      from: 'Eva at Traffikora <eva@traffikora.com>',
      to: email,
      replyTo: 'support@traffikora.com',
      subject: \`We got your message, \${name.split(' ')[0]}! \u2014 Traffikora Support\`,
      html: \`<div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;background:#f9f9f9;">
        <div style="background:#111;padding:28px;border-radius:12px;text-align:center;margin-bottom:24px;">
          <p style="font-family:Georgia,serif;font-size:26px;font-weight:700;color:#fff;margin:0;">Traffik<span style="color:#E8610A;">ora</span></p>
        </div>
        <h2 style="color:#111;">Hi \${name.split(' ')[0]}, we got your message!</h2>
        <p style="color:#555;line-height:1.7;">Our team will get back to you within 24 hours at <strong>\${email}</strong>.</p>
        <div style="background:#fff;border:1px solid #eee;border-left:4px solid #E8610A;border-radius:6px;padding:16px;margin:20px 0;">
          <p style="margin:0 0 6px;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:1px;">Your message</p>
          <p style="margin:0;color:#333;font-size:14px;line-height:1.7;">\${message}</p>
        </div>
        <p style="color:#555;font-size:14px;line-height:1.7;">Find answers in our <a href="https://www.traffikora.com/faq" style="color:#E8610A;">FAQ</a> or chat with EVA on the dashboard.</p>
        <p style="color:#888;font-size:12px;margin-top:24px;">Traffikora \u2014 support@traffikora.com</p>
      </div>\`
    })
    return NextResponse.json({ success: true })
  } catch (e) {
    console.error('Support email error:', e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
`;

// ─── AFFILIATES API with Supabase rate limiting ────────────────────
const affiliatesRoute = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

async function checkRateLimit(ip, endpoint, maxRequests = 6, windowMinutes = 60) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const windowStart = new Date(Date.now() - windowMinutes * 60 * 1000).toISOString()
  const { count } = await supabase
    .from('rate_limits')
    .select('*', { count: 'exact', head: true })
    .eq('ip', ip)
    .eq('endpoint', endpoint)
    .gte('created_at', windowStart)
  if ((count || 0) >= maxRequests) return false
  await supabase.from('rate_limits').insert({ ip, endpoint })
  return true
}

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown'
  const allowed = await checkRateLimit(ip, 'affiliates', 6, 60)
  if (!allowed) {
    return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const body = await request.json()
  const { name, email, website, social_links, audience_size, how_promote } = body

  const { error } = await supabase.from('affiliate_applications').insert({
    name, email, website, social_links, audience_size, how_promote, status: 'pending'
  })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  await resend.emails.send({
    from: 'Traffikora <eva@traffikora.com>',
    to: 'thenovar.founder@gmail.com',
    subject: \`New Affiliate Application \u2014 \${name}\`,
    html: \`<div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;">
      <h2 style="color:#E8610A;">New Affiliate Application</h2>
      <p><strong>Name:</strong> \${name}</p>
      <p><strong>Email:</strong> \${email}</p>
      <p><strong>Website:</strong> \${website || 'Not provided'}</p>
      <p><strong>Social Links:</strong> \${social_links || 'Not provided'}</p>
      <p><strong>Audience Size:</strong> \${audience_size}</p>
      <p><strong>How they plan to promote:</strong></p>
      <p>\${how_promote}</p>
      <a href="https://www.traffikora.com/admin/x7k9-affiliates" style="background:#E8610A;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none;display:inline-block;margin-top:16px;">Review in Admin Panel \u2192</a>
    </div>\`
  })

  await resend.emails.send({
    from: 'Eva at Traffikora <eva@traffikora.com>',
    to: email,
    subject: 'Your Traffikora Affiliate Application \u2014 Received!',
    html: \`<div style="font-family:Arial,sans-serif;padding:32px;max-width:600px;background:#f9f9f9;">
      <div style="background:#111;padding:32px;border-radius:12px;text-align:center;margin-bottom:24px;">
        <p style="font-family:Georgia,serif;font-size:28px;font-weight:700;color:#fff;margin:0;">Traffik<span style="color:#E8610A;">ora</span></p>
      </div>
      <h2 style="color:#111;">Hi \${name}, we got your application!</h2>
      <p style="color:#555;line-height:1.7;">Thank you for applying to the Traffikora Affiliate Program. We review all applications within 48 hours and will reach out with next steps.</p>
      <p style="color:#555;line-height:1.7;">In the meantime, feel free to start sharing your referral link \u2014 you can earn commissions even before becoming an official affiliate partner.</p>
      <p style="color:#888;font-size:13px;margin-top:32px;">Questions? Reply to this email or chat with Eva at traffikora.com</p>
    </div>\`
  })

  return NextResponse.json({ success: true })
}
`;

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\support\\route.ts', supportRoute, 'utf8');
console.log('SUCCESS: Support API — Supabase rate limiting, max 6 per hour');

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\affiliates\\route.ts', affiliatesRoute, 'utf8');
console.log('SUCCESS: Affiliates API — Supabase rate limiting, max 6 per hour');