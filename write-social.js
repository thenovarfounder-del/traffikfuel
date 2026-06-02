const fs = require('fs')
const path = require('path')

// 1. Trial expiry email API route
const dir1 = 'C:/Users/randy/traffikfuel/src/app/api/cron/trial-expiry'
fs.mkdirSync(dir1, { recursive: true })

const route = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request) {
  const authHeader = request.headers.get('authorization')
  if (authHeader !== \`Bearer \${process.env.CRON_SECRET}\`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

  const { data: users, error } = await supabase
    .from('users')
    .select('id, email, full_name, last_active')
    .eq('plan', 'free')
    .lt('last_active', sevenDaysAgo.toISOString())
    .eq('expiry_email_sent', false)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  if (!users || users.length === 0) return NextResponse.json({ message: 'No users to notify' })

  let sent = 0
  for (const user of users) {
    const firstName = user.full_name?.split(' ')[0] || 'there'
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': \`Bearer \${process.env.RESEND_API_KEY}\`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'Traffikora <support@traffikora.com>',
        to: [user.email],
        subject: \`\${firstName}, your content has been on pause\u2026\`,
        html: \`
          <div style="font-family: system-ui, sans-serif; max-width: 560px; margin: 0 auto; background: #0a0a0a; color: #fff; padding: 48px 40px; border-radius: 16px;">
            <div style="font-size: 22px; font-weight: 800; color: #fff; margin-bottom: 32px;">
              Traffik<span style="color: #f97316;">ora</span>
            </div>
            <h1 style="font-size: 28px; font-weight: 400; margin: 0 0 16px 0; color: #fff;">
              Hey \${firstName}, your marketing went quiet.
            </h1>
            <p style="font-size: 15px; color: #94a3b8; line-height: 1.7; margin: 0 0 24px 0;">
              It\u2019s been 7 days since you last logged in. While you were away, your competitors kept publishing \u2014 every single day.
            </p>
            <p style="font-size: 15px; color: #94a3b8; line-height: 1.7; margin: 0 0 32px 0;">
              Traffikora\u2019s AI is ready to generate blog posts, social content, and get you ranking on Google \u2014 starting today.
            </p>
            <a href="https://www.traffikora.com/dashboard" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #f97316, #ea6a0a); color: #fff; text-decoration: none; border-radius: 12px; font-weight: 700; font-size: 15px; margin-bottom: 32px;">
              Resume My Marketing \u2192
            </a>
            <div style="border-top: 1px solid #1a1a1a; padding-top: 24px; margin-top: 8px;">
              <p style="font-size: 13px; color: #475569; margin: 0 0 12px 0;">Want to go fully hands-off? Upgrade to Pro and let AI agents run everything at 6am every morning.</p>
              <a href="https://www.traffikora.com/pricing" style="font-size: 13px; color: #f97316; text-decoration: none; font-weight: 600;">See Pro Plan \u2192</a>
            </div>
            <p style="font-size: 12px; color: #334155; margin-top: 32px;">
              You\u2019re receiving this because you have a free Traffikora account. \u00A9 2026 Traffikora.
            </p>
          </div>
        \`
      })
    })
    if (res.ok) {
      await supabase.from('users').update({ expiry_email_sent: true }).eq('id', user.id)
      sent++
    }
  }

  return NextResponse.json({ message: \`Sent \${sent} emails\` })
}
`

fs.writeFileSync(path.join(dir1, 'route.ts'), route)

// 2. Vercel cron config
const vercelConfig = {
  crons: [
    {
      path: '/api/cron/trial-expiry',
      schedule: '0 10 * * *'
    }
  ]
}

fs.writeFileSync(
  'C:/Users/randy/traffikfuel/vercel.json',
  JSON.stringify(vercelConfig, null, 2)
)

console.log('SUCCESS: Trial expiry cron job written')